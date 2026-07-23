import { asString, cloneJson, deepMerge, isJsonObject } from './json.js';
import { createEntity } from './factories.js';
import { getAtPointer } from './json-patch.js';
import { ModelIndex, TOP_LEVEL_ENTITY_KEYS } from './model-index.js';
import { normalizeProject } from './normalize.js';
import type { EntityType, JsonObject, JsonValue, LocatedEntity } from './types.js';

export interface EntityMutationResult {
  entity: LocatedEntity;
  normalizationChanges: string[];
}

function mutableArray(project: JsonObject, pointer: string): JsonValue[] {
  const value = getAtPointer(project, pointer);
  if (!Array.isArray(value)) throw new Error(`Target container is not an array: ${pointer}`);
  return value;
}

function resolveEntity(index: ModelIndex, reference: string, type?: EntityType): LocatedEntity {
  if (reference.startsWith('/')) {
    const entity = index.pathMap.get(reference);
    if (!entity || (type && entity.type !== type)) {
      throw new Error(`No matching entity at path ${reference}`);
    }
    return entity;
  }
  const matches = index.find(reference, type);
  if (matches.length === 0) throw new Error(`Entity not found: ${reference}`);
  if (matches.length > 1) {
    throw new Error(`Entity reference is ambiguous (${matches.length} matches): ${reference}`);
  }
  return matches[0]!;
}

function allowedParent(type: EntityType, parent: LocatedEntity): boolean {
  switch (type) {
    case 'choice':
      return parent.type === 'row' || parent.type === 'backpack_row';
    case 'addon':
    case 'selectable_addon':
      return parent.type === 'choice';
    case 'score':
      return parent.type === 'choice' || parent.type === 'selectable_addon';
    case 'requirement':
      return ['row', 'backpack_row', 'choice', 'addon', 'selectable_addon', 'score', 'global_requirement', 'sound_effect']
        .includes(parent.type);
    default:
      return false;
  }
}

function parentContainer(type: EntityType, parent: LocatedEntity): string {
  switch (type) {
    case 'choice':
      return `${parent.path}/objects`;
    case 'addon':
    case 'selectable_addon':
      return `${parent.path}/addons`;
    case 'score':
      return `${parent.path}/scores`;
    case 'requirement':
      return `${parent.path}/requireds`;
    default:
      throw new Error(`${type} is not a nested entity type.`);
  }
}

function actualIdentifier(type: EntityType, value: JsonObject): string {
  if (type === 'score') return asString(value.idx);
  if (type === 'category') return `${asString(value.type)}:${String(value.idx ?? '')}`;
  return asString(value.id);
}

const CATEGORY_ENTITY_TYPES: Record<string, EntityType> = {
  point: 'point',
  variable: 'variable',
  group: 'group',
  word: 'word',
  rDesign: 'row_design_group',
  cDesign: 'choice_design_group',
  globalReq: 'global_requirement',
};

function rewriteCategoryReferences(
  project: JsonObject,
  oldType: string,
  oldIndex: number,
  newType: string,
  newIndex: number,
): void {
  if (oldType !== newType) {
    throw new Error('Category type changes cannot rewrite references across feature families.');
  }
  const entityType = CATEGORY_ENTITY_TYPES[oldType];
  if (!entityType) return;
  for (const entity of new ModelIndex(project).byType.get(entityType) ?? []) {
    if (entity.value.category === oldIndex) entity.value.category = newIndex;
  }
}

export function insertEntity(
  project: JsonObject,
  options: {
    type: EntityType;
    parent?: string;
    position?: number;
    values?: JsonObject;
  },
): EntityMutationResult {
  const index = new ModelIndex(project);
  const topLevelKey = TOP_LEVEL_ENTITY_KEYS[options.type];
  let containerPath: string;
  let parent: LocatedEntity | undefined;
  if (options.type === 'row') {
    containerPath = '/rows';
  } else if (options.type === 'backpack_row') {
    containerPath = '/backpack';
  } else if (topLevelKey) {
    containerPath = `/${topLevelKey}`;
  } else {
    if (!options.parent) throw new Error(`${options.type} requires parent.`);
    parent = resolveEntity(index, options.parent);
    if (!allowedParent(options.type, parent)) {
      throw new Error(`${options.type} cannot be created under ${parent.type}.`);
    }
    containerPath = parentContainer(options.type, parent);
  }

  const values = createEntity(project, options.type, options.values ?? {});
  if (parent && (options.type === 'addon' || options.type === 'selectable_addon')) {
    values.parentId = parent.id;
  }
  const container = mutableArray(project, containerPath);
  const position = options.position === undefined
    ? container.length
    : Math.max(0, Math.min(Math.floor(options.position), container.length));
  container.splice(position, 0, values);

  const normalized = normalizeProject(project);
  for (const key of Object.keys(project)) delete project[key];
  Object.assign(project, normalized.project);
  const identifier = actualIdentifier(options.type, values);
  const after = new ModelIndex(project);
  const created = identifier
    ? after.find(identifier, options.type)[0]
    : after.entities.find((entity) =>
      entity.type === options.type
      && entity.containerPath === containerPath
      && entity.index === position
    );
  if (!created) throw new Error(`Created ${options.type} could not be located after normalization.`);
  return { entity: created, normalizationChanges: normalized.changes };
}

const ARRAY_REFERENCE_FIELDS = new Set([
  'groups', 'rowDesignGroups', 'objectDesignGroups', 'elements', 'rowElements',
  'backpackElements', 'groupElements', 'designGroups', 'selGroups', 'selRows',
  'discountRows', 'discountChoices', 'discountGroups', 'discountPointTypes',
  'hiddenContentsRow', 'idOfAllowChoice', 'pointTypeToMultiply',
  'pointTypeToDivide', 'pointTypeToSet', 'changedVariables', 'linkedObjects',
  'appliedDisChoices', 'activatedRandom',
]);
const NESTED_ARRAY_REFERENCE_FIELDS = new Set(['activatedRandomMul']);
const OBJECT_ID_REFERENCE_CONTAINERS = new Set(['discounts', 'templateStack', 'widthStack']);
const SCALAR_REFERENCE_FIELDS = new Set([
  'parentId', 'reqId', 'reqId1', 'reqId2', 'reqId3', 'activatedId',
  'resultGroupId', 'buttonId', 'pointTypeRandom', 'multipleScoreId',
  'duplicateRowId', 'duplicateRowPlace', 'scrollObjectId', 'scrollRowId',
  'idOfTheTextfieldWord', 'sfxIdOnSelect', 'sfxIdOnDeselect',
]);
const COMMA_REFERENCE_FIELDS = new Set([
  'activateThisChoice', 'deactivateThisChoice', 'changeTemplatesList', 'changeWidthList',
]);

function replaceReferenceToken(value: string, from: string, to: string): string {
  if (value === from) return to;
  if (value.startsWith(`${from}/ON#`)) return `${to}${value.slice(from.length)}`;
  if (value.startsWith(`${from}/RON#`)) return `${to}${value.slice(from.length)}`;
  return value;
}

export function rewriteReferences(value: JsonValue, from: string, to: string, parentKey = ''): void {
  if (Array.isArray(value)) {
    if (ARRAY_REFERENCE_FIELDS.has(parentKey)) {
      for (let index = 0; index < value.length; index += 1) {
        const item = value[index];
        if (typeof item === 'string') {
          value[index] = replaceReferenceToken(item, from, to);
        }
      }
    } else if (NESTED_ARRAY_REFERENCE_FIELDS.has(parentKey)) {
      for (let index = 0; index < value.length; index += 1) {
        const item = value[index];
        if (typeof item === 'string') {
          value[index] = replaceReferenceToken(item, from, to);
        } else if (Array.isArray(item)) {
          rewriteReferences(item, from, to, parentKey);
        }
      }
    } else {
      for (const child of value) rewriteReferences(child, from, to, parentKey);
    }
    return;
  }
  if (!isJsonObject(value)) return;
  for (const [key, child] of Object.entries(value)) {
    if (
      key === 'id'
      && typeof child === 'string'
      && OBJECT_ID_REFERENCE_CONTAINERS.has(parentKey)
    ) {
      value[key] = replaceReferenceToken(child, from, to);
    } else if (typeof child === 'string' && SCALAR_REFERENCE_FIELDS.has(key)) {
      value[key] = replaceReferenceToken(child, from, to);
    } else if (typeof child === 'string' && COMMA_REFERENCE_FIELDS.has(key)) {
      value[key] = child
        .split(',')
        .map((token) => replaceReferenceToken(token.trim(), from, to))
        .join(',');
    } else if (
      typeof child === 'string'
      && ['expValue', 'expMinValue', 'expMaxValue', 'setWithThis'].includes(key)
    ) {
      value[key] = child.replaceAll(`{${from}}`, `{${to}}`);
    } else {
      rewriteReferences(child, from, to, key);
    }
  }
}

function rewritePointReferences(project: JsonObject, from: string, to: string): void {
  const index = new ModelIndex(project);
  for (const score of index.byType.get('score') ?? []) {
    if (asString(score.value.id) === from) score.value.id = to;
  }
  for (const requirement of index.byType.get('requirement') ?? []) {
    const type = asString(requirement.value.type);
    if (type === 'points') {
      if (asString(requirement.value.reqId) === from) requirement.value.reqId = to;
      continue;
    }
    if (type !== 'pointCompare') continue;
    for (const property of ['reqId', 'reqId1']) {
      if (asString(requirement.value[property]) === from) requirement.value[property] = to;
    }
    const more = requirement.value.more;
    if (!Array.isArray(more)) continue;
    for (const item of more) {
      if (isJsonObject(item) && asString(item.id) === from) item.id = to;
    }
  }
}

export function updateEntity(
  project: JsonObject,
  options: {
    reference: string;
    type?: EntityType;
    values: JsonObject;
    unset?: string[];
    rewriteIdReferences?: boolean;
  },
): EntityMutationResult {
  const entity = resolveEntity(new ModelIndex(project), options.reference, options.type);
  const identifierKey = entity.type === 'score' ? 'idx' : 'id';
  const oldId = entity.type === 'category'
    ? actualIdentifier(entity.type, entity.value)
    : asString(entity.value[identifierKey]);
  const merged = deepMerge(entity.value, options.values);
  for (const key of options.unset ?? []) delete merged[key];
  const newId = entity.type === 'category'
    ? actualIdentifier(entity.type, merged)
    : asString(merged[identifierKey]);
  if (oldId && newId && oldId !== newId) {
    if (!options.rewriteIdReferences) {
      throw new Error('Changing an entity id requires rewriteIdReferences=true.');
    }
  }
  for (const key of Object.keys(entity.value)) delete entity.value[key];
  Object.assign(entity.value, merged);
  if (oldId && newId && oldId !== newId) {
    if (entity.type === 'category') {
      rewriteCategoryReferences(
        project,
        asString(oldId.split(':')[0]),
        Number(oldId.slice(oldId.indexOf(':') + 1)),
        asString(newId.split(':')[0]),
        Number(newId.slice(newId.indexOf(':') + 1)),
      );
    } else {
      rewriteReferences(project, oldId, newId);
      if (entity.type === 'point') rewritePointReferences(project, oldId, newId);
    }
  }
  const normalized = normalizeProject(project);
  for (const key of Object.keys(project)) delete project[key];
  Object.assign(project, normalized.project);
  const updated = new ModelIndex(project).find(newId || entity.id, entity.type)[0];
  if (!updated) throw new Error('Updated entity could not be located after normalization.');
  return { entity: updated, normalizationChanges: normalized.changes };
}

function nestedIds(entity: LocatedEntity, index: ModelIndex): LocatedEntity[] {
  return index.entities.filter((candidate) =>
    candidate.path === entity.path || candidate.path.startsWith(`${entity.path}/`)
  );
}

export function duplicateEntity(
  project: JsonObject,
  options: {
    reference: string;
    type?: EntityType;
    position?: number;
    remapInternalReferences?: boolean;
  },
): EntityMutationResult {
  const before = new ModelIndex(project);
  const source = resolveEntity(before, options.reference, options.type);
  if (source.type === 'requirement' || source.type === 'score') {
    throw new Error('Use fragment import or JSON Patch to duplicate nested requirements and scores.');
  }
  const clone = cloneJson(source.value);
  if (source.type === 'category') {
    clone.idx = createEntity(project, 'category', { type: asString(clone.type, 'point') }).idx!;
  }
  const mappings = new Map<string, string>();
  for (const nested of nestedIds(source, before)) {
    const key = nested.type === 'score' ? 'idx' : 'id';
    const oldId = asString(nested.value[key]);
    if (!oldId || nested.type === 'addon' || nested.type === 'requirement') continue;
    const temporary = createEntity(project, nested.type);
    const newId = asString(temporary[key]);
    if (newId) mappings.set(oldId, newId);
  }

  function applyIds(value: JsonValue): void {
    if (Array.isArray(value)) {
      value.forEach(applyIds);
      return;
    }
    if (!isJsonObject(value)) return;
    const id = asString(value.id);
    const idx = asString(value.idx);
    if (id && mappings.has(id)) value.id = mappings.get(id)!;
    if (idx && mappings.has(idx)) value.idx = mappings.get(idx)!;
    Object.values(value).forEach(applyIds);
  }
  applyIds(clone);
  if (options.remapInternalReferences) {
    for (const [from, to] of mappings) rewriteReferences(clone, from, to);
  }

  const container = mutableArray(project, source.containerPath);
  const position = options.position === undefined
    ? source.index + 1
    : Math.max(0, Math.min(Math.floor(options.position), container.length));
  container.splice(position, 0, clone);
  const normalized = normalizeProject(project);
  for (const key of Object.keys(project)) delete project[key];
  Object.assign(project, normalized.project);
  const newRootId = mappings.get(source.id) ?? actualIdentifier(source.type, clone);
  const duplicate = new ModelIndex(project).find(newRootId, source.type)[0];
  if (!duplicate) throw new Error('Duplicate could not be located after normalization.');
  return { entity: duplicate, normalizationChanges: normalized.changes };
}

export function moveEntity(
  project: JsonObject,
  options: { reference: string; type?: EntityType; position: number },
): EntityMutationResult {
  const entity = resolveEntity(new ModelIndex(project), options.reference, options.type);
  const container = mutableArray(project, entity.containerPath);
  const [value] = container.splice(entity.index, 1);
  const position = Math.max(0, Math.min(Math.floor(options.position), container.length));
  container.splice(position, 0, value!);
  const normalized = normalizeProject(project);
  for (const key of Object.keys(project)) delete project[key];
  Object.assign(project, normalized.project);
  const moved = new ModelIndex(project).find(entity.id, entity.type)[0];
  if (!moved) throw new Error('Moved entity could not be located after normalization.');
  return { entity: moved, normalizationChanges: normalized.changes };
}

export function removeEntity(
  project: JsonObject,
  options: { reference: string; type?: EntityType },
): { removed: LocatedEntity; normalizationChanges: string[] } {
  const entity = resolveEntity(new ModelIndex(project), options.reference, options.type);
  const container = mutableArray(project, entity.containerPath);
  container.splice(entity.index, 1);
  const normalized = normalizeProject(project);
  for (const key of Object.keys(project)) delete project[key];
  Object.assign(project, normalized.project);
  return { removed: entity, normalizationChanges: normalized.changes };
}

export function exportEntityFragment(
  project: JsonObject,
  reference: string,
  type?: EntityType,
): { type: EntityType; value: JsonObject; path: string } {
  const entity = resolveEntity(new ModelIndex(project), reference, type);
  return { type: entity.type, value: cloneJson(entity.value), path: entity.path };
}

export function importEntityFragment(
  project: JsonObject,
  options: {
    type: EntityType;
    value: JsonObject;
    parent?: string;
    position?: number;
    preserveIds?: boolean;
  },
): EntityMutationResult {
  const values = cloneJson(options.value);
  if (!options.preserveIds) {
    const mappings = new Map<string, string>();
    const used = new Set(new ModelIndex(project).idsForUniqueness());
    const freshId = (type: EntityType): string => {
      for (let attempt = 0; attempt < 50; attempt += 1) {
        const id = generateFreshId(project, type);
        if (id && !used.has(id)) {
          used.add(id);
          return id;
        }
      }
      throw new Error(`Could not generate unique id while importing ${type}.`);
    };
    const replaceId = (value: JsonObject, type: EntityType): void => {
      const key = type === 'score' ? 'idx' : 'id';
      const oldId = asString(value[key]);
      if (type === 'addon' || type === 'requirement') return;
      if (type === 'category') {
        value.idx = createEntity(project, 'category', { type: asString(value.type, 'point') }).idx!;
        return;
      }
      const newId = freshId(type);
      value[key] = newId;
      if (oldId) mappings.set(oldId, newId);
    };
    const visitChoice = (choice: JsonObject): void => {
      replaceId(choice, 'choice');
      for (const score of objectChildren(choice, 'scores')) replaceId(score, 'score');
      for (const addon of objectChildren(choice, 'addons')) {
        if (addon.isSelectable === true) {
          replaceId(addon, 'selectable_addon');
          for (const score of objectChildren(addon, 'scores')) replaceId(score, 'score');
        }
      }
    };
    if (options.type === 'row' || options.type === 'backpack_row') {
      replaceId(values, options.type);
      for (const choice of objectChildren(values, 'objects')) visitChoice(choice);
    } else if (options.type === 'choice') {
      visitChoice(values);
    } else if (options.type === 'selectable_addon') {
      replaceId(values, 'selectable_addon');
      for (const score of objectChildren(values, 'scores')) replaceId(score, 'score');
    } else {
      replaceId(values, options.type);
    }
    for (const [from, to] of mappings) {
      rewriteReferences(values, from, to);
    }
  }
  return insertEntity(project, {
    type: options.type,
    ...(options.parent ? { parent: options.parent } : {}),
    ...(options.position !== undefined ? { position: options.position } : {}),
    values,
  });
}

function generateFreshId(project: JsonObject, type: EntityType): string {
  const generated = createEntity(project, type);
  return asString(generated[type === 'score' ? 'idx' : 'id']);
}

function objectChildren(value: JsonObject, property: string): JsonObject[] {
  const children = value[property];
  return Array.isArray(children) ? children.filter(isJsonObject) : [];
}
