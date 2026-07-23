import { asArray, asObjectArray, asString, cloneJson, isJsonObject } from './json.js';
import { createDefaultProject, generateEntityId } from './factories.js';
import { ModelIndex } from './model-index.js';
import type { EntityType, JsonObject, JsonValue } from './types.js';

export interface NormalizationResult {
  project: JsonObject;
  changes: string[];
}

function ensureArray(target: JsonObject, key: string, changes: string[], path = ''): JsonValue[] {
  if (!Array.isArray(target[key])) {
    target[key] = [];
    changes.push(`Initialized ${path}/${key} as an array.`);
  }
  return target[key] as JsonValue[];
}

function stringIds(value: JsonValue | undefined): string[] {
  return asArray(value)
    .map((item) => isJsonObject(item) ? asString(item.id) : item)
    .filter((item): item is string => typeof item === 'string' && item !== '');
}

function migrateRequirement(requirement: JsonObject, path: string, changes: string[]): void {
  ensureArray(requirement, 'requireds', changes, path);
  ensureArray(requirement, 'orRequired', changes, path);
  if (asString(requirement.type) === 'or' && !Array.isArray(requirement.orRequireds)) {
    requirement.orRequireds = asObjectArray(requirement.orRequired).map((legacy) => ({
      required: true,
      requireds: [],
      orRequired: [],
      orRequireds: [],
      id: '',
      type: 'id',
      reqId: asString(legacy.req),
      reqId1: '',
      reqId2: '',
      reqId3: '',
      reqPoints: 0,
      showRequired: requirement.showRequired === true,
      operator: asString(requirement.operator, '1'),
      afterText: asString(requirement.afterText),
      beforeText: asString(requirement.beforeText),
      orNum: typeof requirement.orNum === 'number' ? requirement.orNum : 1,
      selNum: typeof requirement.selNum === 'number' ? requirement.selNum : 1,
      selFromOperators: '1',
      more: [],
    }));
    changes.push(`Migrated legacy OR requirement at ${path}.`);
  }
  ensureArray(requirement, 'orRequireds', changes, path);
  ensureArray(requirement, 'more', changes, path);
  for (let index = 0; index < asObjectArray(requirement.requireds).length; index += 1) {
    migrateRequirement(asObjectArray(requirement.requireds)[index]!, `${path}/requireds/${index}`, changes);
  }
  for (let index = 0; index < asObjectArray(requirement.orRequireds).length; index += 1) {
    migrateRequirement(asObjectArray(requirement.orRequireds)[index]!, `${path}/orRequireds/${index}`, changes);
  }
}

function migrateRequirements(container: JsonObject, path: string, changes: string[]): void {
  const requirements = ensureArray(container, 'requireds', changes, path);
  for (let index = 0; index < requirements.length; index += 1) {
    const requirement = requirements[index];
    if (isJsonObject(requirement)) migrateRequirement(requirement, `${path}/requireds/${index}`, changes);
  }
}

function assignMissingIds(project: JsonObject, changes: string[]): void {
  let index = new ModelIndex(project);
  const types: EntityType[] = [
    'row', 'backpack_row', 'choice', 'selectable_addon', 'score', 'point',
    'variable', 'word', 'group', 'row_design_group', 'choice_design_group',
    'global_requirement', 'sound_effect',
  ];
  for (const type of types) {
    for (const entity of index.byType.get(type) ?? []) {
      const property = type === 'score' ? 'idx' : 'id';
      if (asString(entity.value[property])) continue;
      const id = generateEntityId(project, type);
      entity.value[property] = id;
      changes.push(`Generated ${type} id ${id} at ${entity.path}.`);
      index = new ModelIndex(project);
    }
  }
}

function normalizeRows(project: JsonObject, key: 'rows' | 'backpack', changes: string[]): void {
  const rows = asObjectArray(project[key]);
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex]!;
    const rowPath = `/${key}/${rowIndex}`;
    if (row.index !== rowIndex) {
      row.index = rowIndex;
      changes.push(`Corrected row index at ${rowPath}.`);
    }
    if (key === 'backpack' && row.isBackpack !== true) {
      row.isBackpack = true;
      changes.push(`Marked ${rowPath} as a backpack row.`);
    }
    migrateRequirements(row, rowPath, changes);
    ensureArray(row, 'objects', changes, rowPath);
    ensureArray(row, 'rowDesignGroups', changes, rowPath);

    const choices = asObjectArray(row.objects);
    for (let choiceIndex = 0; choiceIndex < choices.length; choiceIndex += 1) {
      const choice = choices[choiceIndex]!;
      const choicePath = `${rowPath}/objects/${choiceIndex}`;
      if (choice.index !== choiceIndex) {
        choice.index = choiceIndex;
        changes.push(`Corrected choice index at ${choicePath}.`);
      }
      migrateRequirements(choice, choicePath, changes);
      ensureArray(choice, 'scores', changes, choicePath);
      ensureArray(choice, 'addons', changes, choicePath);
      ensureArray(choice, 'groups', changes, choicePath);
      ensureArray(choice, 'objectDesignGroups', changes, choicePath);

      for (let scoreIndex = 0; scoreIndex < asObjectArray(choice.scores).length; scoreIndex += 1) {
        const score = asObjectArray(choice.scores)[scoreIndex]!;
        migrateRequirements(score, `${choicePath}/scores/${scoreIndex}`, changes);
      }
      for (let addonIndex = 0; addonIndex < asObjectArray(choice.addons).length; addonIndex += 1) {
        const addon = asObjectArray(choice.addons)[addonIndex]!;
        const addonPath = `${choicePath}/addons/${addonIndex}`;
        if (addon.parentId !== choice.id) {
          addon.parentId = choice.id ?? '';
          changes.push(`Corrected addon parentId at ${addonPath}.`);
        }
        migrateRequirements(addon, addonPath, changes);
        if (addon.isSelectable === true) {
          ensureArray(addon, 'scores', changes, addonPath);
          ensureArray(addon, 'groups', changes, addonPath);
          for (let scoreIndex = 0; scoreIndex < asObjectArray(addon.scores).length; scoreIndex += 1) {
            migrateRequirements(
              asObjectArray(addon.scores)[scoreIndex]!,
              `${addonPath}/scores/${scoreIndex}`,
              changes,
            );
          }
        }
      }

      for (const property of ['pointTypeToMultiply', 'pointTypeToDivide', 'pointTypeToSet', 'idOfAllowChoice']) {
        if (typeof choice[property] === 'string') {
          choice[property] = [choice[property]];
          changes.push(`Migrated ${choicePath}/${property} to an array.`);
        }
      }
      if (choice.fadeTransitionIsOn === true && typeof choice.fadeTransitionTime === 'number') {
        choice.fadeInTransitionTime = choice.fadeTransitionTime;
        choice.fadeOutTransitionTime = choice.fadeTransitionTime;
        delete choice.fadeTransitionTime;
        changes.push(`Split legacy fade transition duration at ${choicePath}.`);
      }
      if (typeof choice.sfxId === 'string') {
        if (choice.sfxOnSelect === true && typeof choice.sfxIdOnSelect !== 'string') {
          choice.sfxIdOnSelect = choice.sfxId;
        }
        if (choice.sfxOnDeselect === true && typeof choice.sfxIdOnDeselect !== 'string') {
          choice.sfxIdOnDeselect = choice.sfxId;
        }
        delete choice.sfxId;
        changes.push(`Migrated legacy sound effect id at ${choicePath}.`);
      }
      choice.groups = stringIds(choice.groups);
      choice.objectDesignGroups = stringIds(choice.objectDesignGroups);
    }
    row.groups = stringIds(row.groups);
    row.rowDesignGroups = stringIds(row.rowDesignGroups);
  }
}

function rebuildGroupMemberships(project: JsonObject, changes: string[]): void {
  const index = new ModelIndex(project);
  const groups = new Map((index.byType.get('group') ?? []).map((entity) => [entity.id, entity]));
  const selectable = new Map(
    [...(index.byType.get('choice') ?? []), ...(index.byType.get('selectable_addon') ?? [])]
      .map((entity) => [entity.id, entity]),
  );
  const rows = new Map(
    [...(index.byType.get('row') ?? []), ...(index.byType.get('backpack_row') ?? [])]
      .map((entity) => [entity.id, entity]),
  );

  const choiceMembership = new Map<string, Set<string>>();
  const rowMembership = new Map<string, Set<string>>();
  for (const [id, entity] of selectable) {
    choiceMembership.set(id, new Set(stringIds(entity.value.groups).filter((groupId) => groups.has(groupId))));
  }
  for (const [id, entity] of rows) {
    rowMembership.set(id, new Set(stringIds(entity.value.groups).filter((groupId) => groups.has(groupId))));
  }
  for (const [groupId, group] of groups) {
    for (const id of stringIds(group.value.elements)) {
      if (selectable.has(id)) choiceMembership.get(id)!.add(groupId);
    }
    for (const id of stringIds(group.value.rowElements)) {
      if (rows.has(id)) rowMembership.get(id)!.add(groupId);
    }
  }

  for (const [id, entity] of selectable) entity.value.groups = [...choiceMembership.get(id)!];
  for (const [id, entity] of rows) entity.value.groups = [...rowMembership.get(id)!];
  for (const [groupId, group] of groups) {
    group.value.elements = [...choiceMembership].filter(([, values]) => values.has(groupId)).map(([id]) => id);
    group.value.rowElements = [...rowMembership].filter(([, values]) => values.has(groupId)).map(([id]) => id);
  }
  if (groups.size > 0) changes.push('Rebuilt reciprocal group memberships.');
}

function rebuildDesignMemberships(project: JsonObject, changes: string[]): void {
  const index = new ModelIndex(project);
  for (const descriptor of [
    {
      designType: 'row_design_group' as const,
      memberTypes: ['row', 'backpack_row'] as const,
      memberProperty: 'rowDesignGroups',
    },
    {
      designType: 'choice_design_group' as const,
      memberTypes: ['choice'] as const,
      memberProperty: 'objectDesignGroups',
    },
  ]) {
    const designs = new Map(
      (index.byType.get(descriptor.designType) ?? []).map((entity) => [entity.id, entity]),
    );
    const members = new Map(
      descriptor.memberTypes.flatMap((type) => index.byType.get(type) ?? []).map((entity) => [entity.id, entity]),
    );
    const memberships = new Map<string, Set<string>>();
    for (const [id, member] of members) {
      memberships.set(
        id,
        new Set(stringIds(member.value[descriptor.memberProperty]).filter((designId) => designs.has(designId))),
      );
    }
    for (const [designId, design] of designs) {
      for (const id of [...stringIds(design.value.elements), ...stringIds(design.value.backpackElements)]) {
        if (members.has(id)) memberships.get(id)!.add(designId);
      }
    }
    for (const [id, member] of members) {
      member.value[descriptor.memberProperty] = [...memberships.get(id)!];
    }
    for (const [designId, design] of designs) {
      design.value.elements = [...memberships]
        .filter(([id, values]) => values.has(designId) && members.get(id)?.type !== 'backpack_row')
        .map(([id]) => id);
      design.value.backpackElements = [...memberships]
        .filter(([id, values]) => values.has(designId) && members.get(id)?.type === 'backpack_row')
        .map(([id]) => id);
      design.value.groupElements = stringIds(design.value.groupElements);
    }
    if (designs.size > 0) changes.push(`Rebuilt reciprocal ${descriptor.designType} memberships.`);
  }
}

function rebuildGroupDesignMemberships(project: JsonObject, changes: string[]): void {
  const index = new ModelIndex(project);
  const groups = new Map((index.byType.get('group') ?? []).map((entity) => [entity.id, entity]));
  const designs = new Map(
    [
      ...(index.byType.get('row_design_group') ?? []),
      ...(index.byType.get('choice_design_group') ?? []),
    ].map((entity) => [entity.id, entity]),
  );
  const memberships = new Map<string, Set<string>>();
  for (const [groupId, group] of groups) {
    memberships.set(
      groupId,
      new Set(stringIds(group.value.designGroups).filter((designId) => designs.has(designId))),
    );
  }
  for (const [designId, design] of designs) {
    for (const groupId of stringIds(design.value.groupElements)) {
      if (groups.has(groupId)) memberships.get(groupId)!.add(designId);
    }
  }
  for (const [groupId, group] of groups) {
    group.value.designGroups = [...memberships.get(groupId)!];
  }
  for (const [designId, design] of designs) {
    design.value.groupElements = [...memberships]
      .filter(([, designIds]) => designIds.has(designId))
      .map(([groupId]) => groupId);
  }
  if (groups.size > 0 && designs.size > 0) {
    changes.push('Rebuilt reciprocal group-to-design memberships.');
  }
}

export function normalizeProject(input: JsonObject): NormalizationResult {
  const project = cloneJson(input);
  const changes: string[] = [];
  const defaults = createDefaultProject();
  for (const key of [
    'rows', 'backpack', 'pointTypes', 'variables', 'words', 'groups',
    'rowDesignGroups', 'objectDesignGroups', 'globalRequirements',
    'soundEffects', 'categories',
  ]) {
    if (!Array.isArray(project[key])) {
      project[key] = cloneJson(defaults[key] ?? []);
      changes.push(`Initialized /${key} from current ICC Plus defaults.`);
    }
  }
  if (!isJsonObject(project.styling)) {
    project.styling = cloneJson(defaults.styling ?? {});
    changes.push('Initialized /styling from current ICC Plus defaults.');
  }
  if (!isJsonObject(project.viewerConfig)) {
    project.viewerConfig = cloneJson(defaults.viewerConfig ?? {});
    changes.push('Initialized /viewerConfig from current ICC Plus defaults.');
  }

  normalizeRows(project, 'rows', changes);
  normalizeRows(project, 'backpack', changes);
  for (const key of ['globalRequirements', 'soundEffects']) {
    for (let index = 0; index < asObjectArray(project[key]).length; index += 1) {
      migrateRequirements(asObjectArray(project[key])[index]!, `/${key}/${index}`, changes);
    }
  }
  for (const point of asObjectArray(project.pointTypes)) {
    if (typeof point.initValue !== 'number' && typeof point.startingSum === 'number') {
      point.initValue = point.startingSum;
      changes.push(`Initialized reset value for point ${asString(point.id, '(missing id)')}.`);
    }
  }

  assignMissingIds(project, changes);
  normalizeRows(project, 'rows', changes);
  normalizeRows(project, 'backpack', changes);
  rebuildGroupMemberships(project, changes);
  rebuildDesignMemberships(project, changes);
  rebuildGroupDesignMemberships(project, changes);
  return { project, changes };
}
