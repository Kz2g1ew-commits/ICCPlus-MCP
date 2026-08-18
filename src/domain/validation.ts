import { Ajv, type ErrorObject, type ValidateFunction } from 'ajv';
import schemaJson from '../generated/iccplus.schema.json' with { type: 'json' };
import { validateCustomCss } from './custom-css.js';
import { asArray, asBoolean, asNumber, asObject, asObjectArray, asString, isJsonObject } from './json.js';
import { ModelIndex } from './model-index.js';
import type {
  Diagnostic,
  EntityType,
  JsonObject,
  JsonValue,
  LocatedEntity,
  ValidationReport,
} from './types.js';

const ajv = new Ajv({
  allErrors: true,
  allowUnionTypes: true,
  strict: false,
  verbose: false,
});
const structuralValidator: ValidateFunction = ajv.compile(schemaJson);

function pointerJoin(path: string, property: string | number): string {
  const encoded = String(property).replaceAll('~', '~0').replaceAll('/', '~1');
  return `${path}/${encoded}`;
}

function diagnostic(
  code: string,
  severity: Diagnostic['severity'],
  path: string,
  message: string,
  options: Partial<Omit<Diagnostic, 'code' | 'severity' | 'path' | 'message'>> = {},
): Diagnostic {
  return { code, severity, path, message, ...options };
}

function structuralDiagnostics(errors: ErrorObject[] | null | undefined): Diagnostic[] {
  return (errors ?? []).map((error) => {
    const missing = typeof error.params.missingProperty === 'string'
      ? pointerJoin(error.instancePath, error.params.missingProperty)
      : error.instancePath || '';
    return diagnostic(
      `schema.${error.keyword}`,
      'error',
      missing,
      error.message ?? 'Project does not match the ICC Plus schema.',
    );
  });
}

function actualId(entity: LocatedEntity): string | undefined {
  const property = entity.type === 'score' ? 'idx' : 'id';
  const value = entity.value[property];
  return typeof value === 'string' && value !== '' ? value : undefined;
}

function setFor(index: ModelIndex, types: EntityType[]): Set<string> {
  return new Set(types.flatMap((type) =>
    (index.byType.get(type) ?? []).map(actualId).filter((id): id is string => Boolean(id))
  ));
}

function reference(
  diagnostics: Diagnostic[],
  path: string,
  id: string,
  targets: Set<string>,
  kind: string,
  entityId?: string,
): void {
  if (!id || targets.has(id)) return;
  diagnostics.push(diagnostic(
    'reference.missing',
    'error',
    path,
    `${kind} reference ${JSON.stringify(id)} does not resolve.`,
    {
      ...(entityId ? { entityId } : {}),
      actual: id,
      suggestion: `Create the referenced ${kind} or replace/remove this id.`,
    },
  ));
}

function referenceArray(
  diagnostics: Diagnostic[],
  entity: LocatedEntity,
  property: string,
  targets: Set<string>,
  kind: string,
): void {
  const values = asArray(entity.value[property]);
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (typeof value === 'string') {
      reference(
        diagnostics,
        pointerJoin(pointerJoin(entity.path, property), index),
        value,
        targets,
        kind,
        entity.id,
      );
    }
  }
}

function commaReferences(
  diagnostics: Diagnostic[],
  entity: LocatedEntity,
  property: string,
  targets: Set<string>,
  kind: string,
): void {
  const value = asString(entity.value[property]);
  if (!value) return;
  for (const rawToken of value.split(',')) {
    const id = rawToken.trim().split('/ON#')[0] ?? '';
    reference(diagnostics, pointerJoin(entity.path, property), id, targets, kind, entity.id);
  }
}

function nestedArrayReferences(
  diagnostics: Diagnostic[],
  entity: LocatedEntity,
  property: string,
  targets: Set<string>,
  kind: string,
): void {
  const visit = (value: JsonValue, path: string): void => {
    if (typeof value === 'string') {
      const id = value.split(/\/(?:R?ON)#/)[0] ?? '';
      reference(diagnostics, path, id, targets, kind, entity.id);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => visit(item, pointerJoin(path, index)));
    }
  };
  visit(entity.value[property] ?? [], pointerJoin(entity.path, property));
}

function objectIdReferences(
  diagnostics: Diagnostic[],
  entity: LocatedEntity,
  property: string,
  targets: Set<string>,
  kind: string,
): void {
  for (let index = 0; index < asObjectArray(entity.value[property]).length; index += 1) {
    const item = asObjectArray(entity.value[property])[index]!;
    const id = asString(item.id).split(/\/(?:R?ON)#/)[0] ?? '';
    if (id) {
      reference(
        diagnostics,
        `${entity.path}/${property}/${index}/id`,
        id,
        targets,
        kind,
        entity.id,
      );
    }
  }
}

function validateRequirement(
  requirement: LocatedEntity,
  diagnostics: Diagnostic[],
  sets: {
    activatable: Set<string>;
    points: Set<string>;
    groups: Set<string>;
    rows: Set<string>;
    globalRequirements: Set<string>;
    words: Set<string>;
  },
): void {
  const type = asString(requirement.value.type);
  const base = requirement.path;
  switch (type) {
    case 'id': {
      const id = asString(requirement.value.reqId).split('/ON#')[0] ?? '';
      reference(diagnostics, `${base}/reqId`, id, sets.activatable, 'activatable entity', requirement.id);
      break;
    }
    case 'points':
      reference(diagnostics, `${base}/reqId`, asString(requirement.value.reqId), sets.points, 'point', requirement.id);
      break;
    case 'pointCompare':
      reference(diagnostics, `${base}/reqId`, asString(requirement.value.reqId), sets.points, 'point', requirement.id);
      reference(diagnostics, `${base}/reqId1`, asString(requirement.value.reqId1), sets.points, 'point', requirement.id);
      for (let index = 0; index < asObjectArray(requirement.value.more).length; index += 1) {
        const item = asObjectArray(requirement.value.more)[index]!;
        const id = asString(item.id);
        if (id) reference(diagnostics, `${base}/more/${index}/id`, id, sets.points, 'point', requirement.id);
      }
      break;
    case 'selFromGroups':
      for (let index = 0; index < asArray(requirement.value.selGroups).length; index += 1) {
        const id = asArray(requirement.value.selGroups)[index];
        if (typeof id === 'string') {
          reference(diagnostics, `${base}/selGroups/${index}`, id, sets.groups, 'group', requirement.id);
        }
      }
      break;
    case 'selFromRows':
      for (let index = 0; index < asArray(requirement.value.selRows).length; index += 1) {
        const id = asArray(requirement.value.selRows)[index];
        if (typeof id === 'string') {
          reference(diagnostics, `${base}/selRows/${index}`, id, sets.rows, 'row', requirement.id);
        }
      }
      break;
    case 'gid':
      reference(
        diagnostics,
        `${base}/reqId`,
        asString(requirement.value.reqId),
        sets.globalRequirements,
        'global requirement',
        requirement.id,
      );
      break;
    case 'word':
      reference(diagnostics, `${base}/reqId`, asString(requirement.value.reqId), sets.words, 'word', requirement.id);
      break;
    case 'or':
    case 'selFromWhole':
      break;
    default:
      diagnostics.push(diagnostic(
        'requirement.unknown_type',
        'warning',
        `${base}/type`,
        `Unknown requirement type ${JSON.stringify(type)} is preserved for forward compatibility.`,
        { entityId: requirement.id, actual: type },
      ));
  }

  if (type === 'or') {
    const children = asObjectArray(requirement.value.orRequireds);
    const threshold = asNumber(requirement.value.orNum, 1);
    if (threshold < 0 || threshold > children.length) {
      diagnostics.push(diagnostic(
        'requirement.invalid_threshold',
        'error',
        `${base}/orNum`,
        `orNum must be between 0 and ${children.length}.`,
        { entityId: requirement.id, actual: threshold },
      ));
    }
  }
}

function validateMemberships(index: ModelIndex, diagnostics: Diagnostic[]): void {
  const groupEntities = index.byType.get('group') ?? [];
  const groupById = new Map(groupEntities.map((entity) => [entity.id, entity]));
  const designEntities = [
    ...(index.byType.get('row_design_group') ?? []),
    ...(index.byType.get('choice_design_group') ?? []),
  ];
  const designById = new Map(designEntities.map((entity) => [entity.id, entity]));
  const designIds = new Set(designById.keys());
  for (const type of ['row', 'backpack_row', 'choice', 'selectable_addon'] as const) {
    for (const entity of index.byType.get(type) ?? []) {
      const memberships = asArray(entity.value.groups).filter((id): id is string => typeof id === 'string');
      for (let offset = 0; offset < memberships.length; offset += 1) {
        const group = groupById.get(memberships[offset]!);
        if (!group) continue;
        const property = type === 'row' || type === 'backpack_row' ? 'rowElements' : 'elements';
        const reverse = asArray(group.value[property]);
        if (!reverse.includes(entity.id)) {
          diagnostics.push(diagnostic(
            'membership.not_reciprocal',
            'warning',
            pointerJoin(pointerJoin(entity.path, 'groups'), offset),
            `Group ${group.id} does not list ${entity.id} in ${property}.`,
            { entityId: entity.id, suggestion: 'Run normalization to rebuild reciprocal memberships.' },
          ));
        }
      }
    }
  }

  for (const group of groupEntities) {
    for (const [property, allowed] of [
      ['elements', setFor(index, ['choice', 'selectable_addon'])],
      ['rowElements', setFor(index, ['row', 'backpack_row'])],
    ] as const) {
      const values = asArray(group.value[property]);
      for (let offset = 0; offset < values.length; offset += 1) {
        const id = values[offset];
        if (typeof id === 'string') {
          reference(
            diagnostics,
            pointerJoin(pointerJoin(group.path, property), offset),
            id,
            allowed,
            property === 'elements' ? 'selectable entity' : 'row',
            group.id,
          );
        }
      }
    }
    referenceArray(diagnostics, group, 'designGroups', designIds, 'design group');
    for (const designId of asArray(group.value.designGroups)) {
      if (typeof designId !== 'string') continue;
      const design = designById.get(designId);
      if (design && !asArray(design.value.groupElements).includes(group.id)) {
        diagnostics.push(diagnostic(
          'design_membership.not_reciprocal',
          'warning',
          pointerJoin(group.path, 'designGroups'),
          `Design group ${designId} does not list group ${group.id}.`,
          { entityId: group.id, suggestion: 'Run normalization to rebuild reciprocal memberships.' },
        ));
      }
    }
  }
}

function validateGlobalRequirementCycles(index: ModelIndex, diagnostics: Diagnostic[]): void {
  const globals = new Map(
    (index.byType.get('global_requirement') ?? []).map((entity) => [entity.id, entity]),
  );
  const edges = new Map<string, Set<string>>();
  for (const entity of index.byType.get('requirement') ?? []) {
    if (asString(entity.value.type) !== 'gid') continue;
    let parent = entity.parentId;
    while (parent?.startsWith('@')) {
      parent = index.byId.get(parent)?.[0]?.parentId;
    }
    if (!parent || !globals.has(parent)) continue;
    const target = asString(entity.value.reqId);
    const values = edges.get(parent) ?? new Set<string>();
    if (target) values.add(target);
    edges.set(parent, values);
  }

  const visited = new Set<string>();
  const active = new Set<string>();
  function visit(id: string, trail: string[]): void {
    if (active.has(id)) {
      const start = trail.indexOf(id);
      const cycle = [...trail.slice(start), id];
      const entity = globals.get(id);
      diagnostics.push(diagnostic(
        'requirement.global_cycle',
        'error',
        entity?.path ?? '/globalRequirements',
        `Global requirement cycle detected: ${cycle.join(' -> ')}.`,
        { entityId: id },
      ));
      return;
    }
    if (visited.has(id)) return;
    active.add(id);
    for (const target of edges.get(id) ?? []) visit(target, [...trail, id]);
    active.delete(id);
    visited.add(id);
  }
  for (const id of globals.keys()) visit(id, []);
}

function validateSemantic(project: JsonObject): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const index = new ModelIndex(project);

  const actualEntities = index.entities.filter((entity) => actualId(entity));
  const ids = new Map<string, LocatedEntity[]>();
  for (const entity of actualEntities) {
    const id = actualId(entity)!;
    const matches = ids.get(id) ?? [];
    matches.push(entity);
    ids.set(id, matches);
  }
  for (const [id, matches] of ids) {
    if (matches.length < 2) continue;
    for (const entity of matches) {
      diagnostics.push(diagnostic(
        'id.duplicate',
        'error',
        pointerJoin(entity.path, entity.type === 'score' ? 'idx' : 'id'),
        `ID ${JSON.stringify(id)} is used by ${matches.length} entities.`,
        { entityId: id, actual: id, suggestion: 'Assign a globally unique ICC Plus id.' },
      ));
    }
  }

  const categories = index.byType.get('category') ?? [];
  const categoriesById = new Map<string, LocatedEntity[]>();
  for (const category of categories) {
    const matches = categoriesById.get(category.id) ?? [];
    matches.push(category);
    categoriesById.set(category.id, matches);
    const idx = category.value.idx;
    if (typeof idx !== 'number' || !Number.isInteger(idx) || idx < 0 || idx > 98) {
      diagnostics.push(diagnostic(
        'category.invalid_index',
        'error',
        `${category.path}/idx`,
        'Category idx must be an integer from 0 through 98.',
        { entityId: category.id, actual: idx ?? null },
      ));
    }
  }
  for (const [id, matches] of categoriesById) {
    if (matches.length < 2) continue;
    for (const category of matches) {
      diagnostics.push(diagnostic(
        'category.duplicate',
        'error',
        category.path,
        `Category ${JSON.stringify(id)} is declared ${matches.length} times.`,
        { entityId: id, suggestion: 'Use a unique slot index within each category type.' },
      ));
    }
  }
  for (const [categoryType, entityType] of Object.entries({
    point: 'point',
    variable: 'variable',
    group: 'group',
    word: 'word',
    rDesign: 'row_design_group',
    cDesign: 'choice_design_group',
    globalReq: 'global_requirement',
  }) as Array<[string, EntityType]>) {
    for (const entity of index.byType.get(entityType) ?? []) {
      const category = entity.value.category;
      if (typeof category !== 'number' || category < 0) continue;
      const categoryId = `${categoryType}:${category}`;
      if (!categoriesById.has(categoryId)) {
        diagnostics.push(diagnostic(
          'category.reference_missing',
          'error',
          `${entity.path}/category`,
          `Category ${JSON.stringify(categoryId)} does not exist.`,
          { entityId: entity.id, actual: category },
        ));
      }
    }
  }

  for (const type of ['row', 'backpack_row', 'choice'] as const) {
    for (const entity of index.byType.get(type) ?? []) {
      if (asNumber(entity.value.index, -1) !== entity.index) {
        diagnostics.push(diagnostic(
          'index.out_of_sync',
          'warning',
          pointerJoin(entity.path, 'index'),
          `Stored index ${String(entity.value.index)} does not match array position ${entity.index}.`,
          { entityId: entity.id, expected: entity.index, actual: entity.value.index ?? null },
        ));
      }
    }
  }

  for (const entity of [...(index.byType.get('addon') ?? []), ...(index.byType.get('selectable_addon') ?? [])]) {
    if (asString(entity.value.parentId) !== entity.parentId) {
      diagnostics.push(diagnostic(
        'addon.parent_mismatch',
        'warning',
        pointerJoin(entity.path, 'parentId'),
        `Addon parentId must be ${JSON.stringify(entity.parentId)}.`,
        {
          entityId: entity.id,
          expected: entity.parentId ?? null,
          actual: entity.value.parentId ?? null,
        },
      ));
    }
  }

  const points = setFor(index, ['point']);
  const groups = setFor(index, ['group']);
  const rows = setFor(index, ['row', 'backpack_row']);
  const choiceEntities = setFor(index, ['choice']);
  const choices = setFor(index, ['choice', 'selectable_addon']);
  const variables = setFor(index, ['variable']);
  const words = setFor(index, ['word']);
  const globalRequirements = setFor(index, ['global_requirement']);
  const rowDesignGroups = setFor(index, ['row_design_group']);
  const choiceDesignGroups = setFor(index, ['choice_design_group']);
  const soundEffects = setFor(index, ['sound_effect']);
  const activatable = new Set([...choices, ...variables, ...rows]);
  const choiceOrGroup = new Set([...choices, ...groups]);
  const rowChoiceOrGroup = new Set([...rows, ...choices, ...groups]);
  const activationOrRequirement = new Set([...activatable, ...globalRequirements]);

  for (const requirement of index.byType.get('requirement') ?? []) {
    validateRequirement(requirement, diagnostics, {
      activatable, points, groups, rows, globalRequirements, words,
    });
  }
  for (const score of index.byType.get('score') ?? []) {
    const pointId = asString(score.value.id);
    if (pointId) reference(diagnostics, `${score.path}/id`, pointId, points, 'point', score.id);
    objectIdReferences(diagnostics, score, 'discounts', choices, 'selectable entity');
  }
  for (const point of index.byType.get('point') ?? []) {
    const activation = asString(point.value.activatedId);
    if (activation) {
      reference(diagnostics, `${point.path}/activatedId`, activation, activationOrRequirement, 'activation', point.id);
    }
    if (asBoolean(point.value.allowFloat) && asNumber(point.value.decimalPlaces, 2) < 0) {
      diagnostics.push(diagnostic(
        'point.invalid_decimal_places',
        'error',
        `${point.path}/decimalPlaces`,
        'decimalPlaces cannot be negative.',
        { entityId: point.id, actual: point.value.decimalPlaces ?? null },
      ));
    }
  }
  for (const row of [...(index.byType.get('row') ?? []), ...(index.byType.get('backpack_row') ?? [])]) {
    referenceArray(diagnostics, row, 'groups', groups, 'group');
    referenceArray(diagnostics, row, 'rowDesignGroups', rowDesignGroups, 'row design group');
    if (asString(row.value.resultGroupId)) {
      reference(diagnostics, `${row.path}/resultGroupId`, asString(row.value.resultGroupId), groups, 'group', row.id);
    }
    if (asString(row.value.buttonId)) {
      reference(diagnostics, `${row.path}/buttonId`, asString(row.value.buttonId), variables, 'variable', row.id);
    }
    if (asString(row.value.pointTypeRandom)) {
      reference(diagnostics, `${row.path}/pointTypeRandom`, asString(row.value.pointTypeRandom), points, 'point', row.id);
    }
    objectIdReferences(diagnostics, row, 'templateStack', choices, 'selectable entity');
    objectIdReferences(diagnostics, row, 'widthStack', choices, 'selectable entity');
  }

  for (const entity of [...(index.byType.get('choice') ?? []), ...(index.byType.get('selectable_addon') ?? [])]) {
    referenceArray(diagnostics, entity, 'groups', groups, 'group');
    referenceArray(diagnostics, entity, 'objectDesignGroups', choiceDesignGroups, 'choice design group');
    referenceArray(diagnostics, entity, 'discountRows', rows, 'row');
    referenceArray(diagnostics, entity, 'discountChoices', choices, 'selectable entity');
    referenceArray(diagnostics, entity, 'discountGroups', groups, 'group');
    referenceArray(diagnostics, entity, 'discountPointTypes', points, 'point');
    referenceArray(diagnostics, entity, 'hiddenContentsRow', rows, 'row');
    referenceArray(diagnostics, entity, 'idOfAllowChoice', rows, 'row');
    referenceArray(diagnostics, entity, 'pointTypeToMultiply', points, 'point');
    referenceArray(diagnostics, entity, 'pointTypeToDivide', points, 'point');
    referenceArray(diagnostics, entity, 'pointTypeToSet', points, 'point');
    referenceArray(diagnostics, entity, 'changedVariables', variables, 'variable');
    referenceArray(diagnostics, entity, 'appliedDisChoices', choices, 'selectable entity');
    referenceArray(diagnostics, entity, 'linkedObjects', choices, 'selectable entity');
    nestedArrayReferences(diagnostics, entity, 'activatedRandom', choices, 'selectable entity');
    nestedArrayReferences(diagnostics, entity, 'activatedRandomMul', choices, 'selectable entity');
    objectIdReferences(diagnostics, entity, 'templateStack', choices, 'selectable entity');
    objectIdReferences(diagnostics, entity, 'widthStack', choices, 'selectable entity');
    if (asString(entity.value.multipleScoreId)) {
      reference(diagnostics, `${entity.path}/multipleScoreId`, asString(entity.value.multipleScoreId), points, 'point', entity.id);
    }
    if (asString(entity.value.duplicateRowId)) {
      reference(diagnostics, `${entity.path}/duplicateRowId`, asString(entity.value.duplicateRowId), rows, 'row', entity.id);
    }
    if (asString(entity.value.duplicateRowPlace)) {
      reference(diagnostics, `${entity.path}/duplicateRowPlace`, asString(entity.value.duplicateRowPlace), rows, 'row', entity.id);
    }
    if (asString(entity.value.scrollRowId)) {
      reference(diagnostics, `${entity.path}/scrollRowId`, asString(entity.value.scrollRowId), rows, 'row', entity.id);
    }
    if (asString(entity.value.scrollObjectId)) {
      reference(diagnostics, `${entity.path}/scrollObjectId`, asString(entity.value.scrollObjectId), choiceEntities, 'choice', entity.id);
    }
    if (asString(entity.value.idOfTheTextfieldWord)) {
      reference(diagnostics, `${entity.path}/idOfTheTextfieldWord`, asString(entity.value.idOfTheTextfieldWord), words, 'word', entity.id);
    }
    for (const property of ['sfxIdOnSelect', 'sfxIdOnDeselect']) {
      if (asString(entity.value[property])) {
        reference(diagnostics, `${entity.path}/${property}`, asString(entity.value[property]), soundEffects, 'sound effect', entity.id);
      }
    }
    for (const property of ['activateThisChoice', 'deactivateThisChoice']) {
      commaReferences(diagnostics, entity, property, choiceOrGroup, 'choice or group');
    }
    for (const property of ['changeTemplatesList', 'changeWidthList']) {
      commaReferences(diagnostics, entity, property, rowChoiceOrGroup, 'row, choice, or group');
    }
  }

  for (const sound of index.byType.get('sound_effect') ?? []) {
    referenceArray(diagnostics, sound, 'groups', groups, 'group');
  }

  for (const [type, validElements, designMembershipProperty] of [
    ['row_design_group', rows, 'rowDesignGroups'],
    ['choice_design_group', choiceEntities, 'objectDesignGroups'],
  ] as const) {
    for (const entity of index.byType.get(type) ?? []) {
      referenceArray(diagnostics, entity, 'elements', validElements, type === 'row_design_group' ? 'row' : 'selectable entity');
      referenceArray(diagnostics, entity, 'backpackElements', validElements, type === 'row_design_group' ? 'row' : 'selectable entity');
      referenceArray(diagnostics, entity, 'groupElements', groups, 'group');
      const activation = asString(entity.value.activatedId);
      if (activation) {
        reference(diagnostics, `${entity.path}/activatedId`, activation, activationOrRequirement, 'activation', entity.id);
      }
      for (const groupId of asArray(entity.value.groupElements)) {
        if (typeof groupId !== 'string') continue;
        const group = index.one(groupId, 'group');
        if (group && !asArray(group.value.designGroups).includes(entity.id)) {
          diagnostics.push(diagnostic(
            'design_membership.not_reciprocal',
            'warning',
            pointerJoin(entity.path, 'groupElements'),
            `Group ${group.id} does not list design group ${entity.id}.`,
            { entityId: entity.id, suggestion: 'Run normalization to rebuild reciprocal memberships.' },
          ));
        }
      }
      for (const memberId of [...asArray(entity.value.elements), ...asArray(entity.value.backpackElements)]) {
        if (typeof memberId !== 'string') continue;
        const member = index.find(memberId).find((candidate) => validElements.has(candidate.id));
        if (member && !asArray(member.value[designMembershipProperty]).includes(entity.id)) {
          diagnostics.push(diagnostic(
            'design_membership.not_reciprocal',
            'warning',
            entity.path,
            `${member.id} does not list design group ${entity.id}.`,
            { entityId: entity.id, suggestion: 'Run normalization to rebuild reciprocal memberships.' },
          ));
        }
      }
    }
  }

  validateMemberships(index, diagnostics);
  validateGlobalRequirementCycles(index, diagnostics);
  diagnostics.push(...validateCustomCss(project));

  const viewerConfig = asObject(project.viewerConfig);
  if (
    viewerConfig
    && asBoolean(viewerConfig.useSeparateImages)
    && asBoolean(viewerConfig.useLocalViewer)
  ) {
    diagnostics.push(diagnostic(
      'viewer.mutually_exclusive_export_modes',
      'error',
      '/viewerConfig',
      'useSeparateImages and useLocalViewer cannot both be true.',
      { suggestion: 'Choose web viewer with separate images or embedded local viewer.' },
    ));
  }

  return diagnostics;
}

export function validateProject(
  project: JsonObject,
  options: { structural?: boolean; maxDiagnostics?: number } = {},
): ValidationReport {
  const diagnostics: Diagnostic[] = [];
  if (options.structural !== false) {
    // ICC Plus v2.10 added hideRowMenu as a required App field, while its
    // loader intentionally supplies false for older project files. Validate
    // against the same compatibility default without mutating authored data.
    const structuralInput = Object.hasOwn(project, 'hideRowMenu')
      ? project
      : { ...project, hideRowMenu: false };
    structuralValidator(structuralInput);
    diagnostics.push(...structuralDiagnostics(structuralValidator.errors));
  }
  diagnostics.push(...validateSemantic(project));
  const maximum = Math.max(1, options.maxDiagnostics ?? 1000);
  const limited = diagnostics.slice(0, maximum);
  const errors = diagnostics.filter((item) => item.severity === 'error').length;
  const warnings = diagnostics.filter((item) => item.severity === 'warning').length;
  if (diagnostics.length > maximum) {
    limited.push(diagnostic(
      'report.truncated',
      'info',
      '',
      `${diagnostics.length - maximum} additional diagnostics were omitted.`,
    ));
  }
  return {
    valid: errors === 0,
    errors,
    warnings,
    diagnostics: limited,
  };
}

export function isProjectObject(value: JsonValue): value is JsonObject {
  return isJsonObject(value);
}
