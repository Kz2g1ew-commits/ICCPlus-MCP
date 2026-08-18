import {
  asObjectArray,
  asString,
  compactText,
  isJsonObject,
  jsonByteLength,
} from './json.js';
import type {
  EntityType,
  JsonObject,
  JsonValue,
  LocatedEntity,
  ProjectSummary,
} from './types.js';

function escapePointer(value: string): string {
  return value.replaceAll('~', '~0').replaceAll('/', '~1');
}

function entityId(value: JsonObject, path: string, preferred = 'id'): string {
  const id = asString(value[preferred]);
  return id || `@${path}`;
}

function collectRequirements(
  requirements: JsonValue | undefined,
  containerPath: string,
  parentId: string,
  output: LocatedEntity[],
): void {
  const items = asObjectArray(requirements);
  for (let index = 0; index < items.length; index += 1) {
    const requirement = items[index]!;
    const path = `${containerPath}/${index}`;
    output.push({
      type: 'requirement',
      id: entityId(requirement, path),
      value: requirement,
      path,
      parentId,
      containerPath,
      index,
    });
    collectRequirements(requirement.requireds, `${path}/requireds`, entityId(requirement, path), output);
    collectRequirements(requirement.orRequireds, `${path}/orRequireds`, entityId(requirement, path), output);
  }
}

function collectScores(
  scores: JsonValue | undefined,
  containerPath: string,
  parentId: string,
  output: LocatedEntity[],
): void {
  const items = asObjectArray(scores);
  for (let index = 0; index < items.length; index += 1) {
    const score = items[index]!;
    const path = `${containerPath}/${index}`;
    const id = entityId(score, path, 'idx');
    output.push({
      type: 'score',
      id,
      value: score,
      path,
      parentId,
      containerPath,
      index,
    });
    collectRequirements(score.requireds, `${path}/requireds`, id, output);
  }
}

function collectRows(
  project: JsonObject,
  key: 'rows' | 'backpack',
  output: LocatedEntity[],
): void {
  const rows = asObjectArray(project[key]);
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex]!;
    const rowPath = `/${key}/${rowIndex}`;
    const rowId = entityId(row, rowPath);
    output.push({
      type: key === 'rows' ? 'row' : 'backpack_row',
      id: rowId,
      value: row,
      path: rowPath,
      containerPath: `/${key}`,
      index: rowIndex,
    });
    collectRequirements(row.requireds, `${rowPath}/requireds`, rowId, output);

    const choices = asObjectArray(row.objects);
    for (let choiceIndex = 0; choiceIndex < choices.length; choiceIndex += 1) {
      const choice = choices[choiceIndex]!;
      const choicePath = `${rowPath}/objects/${choiceIndex}`;
      const choiceId = entityId(choice, choicePath);
      output.push({
        type: 'choice',
        id: choiceId,
        value: choice,
        path: choicePath,
        parentId: rowId,
        containerPath: `${rowPath}/objects`,
        index: choiceIndex,
      });
      collectRequirements(choice.requireds, `${choicePath}/requireds`, choiceId, output);
      collectScores(choice.scores, `${choicePath}/scores`, choiceId, output);

      const addons = asObjectArray(choice.addons);
      for (let addonIndex = 0; addonIndex < addons.length; addonIndex += 1) {
        const addon = addons[addonIndex]!;
        const addonPath = `${choicePath}/addons/${addonIndex}`;
        const selectable = addon.isSelectable === true;
        const addonId = entityId(addon, addonPath);
        output.push({
          type: selectable ? 'selectable_addon' : 'addon',
          id: addonId,
          value: addon,
          path: addonPath,
          parentId: choiceId,
          containerPath: `${choicePath}/addons`,
          index: addonIndex,
        });
        collectRequirements(addon.requireds, `${addonPath}/requireds`, addonId, output);
        if (selectable) collectScores(addon.scores, `${addonPath}/scores`, addonId, output);
      }
    }
  }
}

const TOP_LEVEL_ENTITIES: Array<{
  key: string;
  type: EntityType;
}> = [
  { key: 'pointTypes', type: 'point' },
  { key: 'variables', type: 'variable' },
  { key: 'words', type: 'word' },
  { key: 'groups', type: 'group' },
  { key: 'rowDesignGroups', type: 'row_design_group' },
  { key: 'objectDesignGroups', type: 'choice_design_group' },
  { key: 'globalRequirements', type: 'global_requirement' },
  { key: 'soundEffects', type: 'sound_effect' },
  { key: 'categories', type: 'category' },
];

export class ModelIndex {
  readonly entities: LocatedEntity[];
  readonly byId = new Map<string, LocatedEntity[]>();
  readonly byType = new Map<EntityType, LocatedEntity[]>();
  readonly pathMap = new Map<string, LocatedEntity>();
  private cachedSummary?: ProjectSummary;
  private cachedProjectBytes?: number;

  constructor(readonly project: JsonObject) {
    const entities: LocatedEntity[] = [];
    collectRows(project, 'rows', entities);
    collectRows(project, 'backpack', entities);

    for (const descriptor of TOP_LEVEL_ENTITIES) {
      const values = asObjectArray(project[descriptor.key]);
      for (let index = 0; index < values.length; index += 1) {
        const value = values[index]!;
        const path = `/${escapePointer(descriptor.key)}/${index}`;
        let id = entityId(value, path);
        if (descriptor.type === 'category') {
          id = `${asString(value.type)}:${String(value.idx ?? index)}`;
        }
        entities.push({
          type: descriptor.type,
          id,
          value,
          path,
          containerPath: `/${escapePointer(descriptor.key)}`,
          index,
        });
        if (descriptor.type === 'global_requirement') {
          collectRequirements(value.requireds, `${path}/requireds`, id, entities);
        }
        if (descriptor.type === 'sound_effect') {
          collectRequirements(value.requireds, `${path}/requireds`, id, entities);
        }
      }
    }

    this.entities = entities;
    for (const entity of entities) {
      const sameId = this.byId.get(entity.id) ?? [];
      sameId.push(entity);
      this.byId.set(entity.id, sameId);

      const sameType = this.byType.get(entity.type) ?? [];
      sameType.push(entity);
      this.byType.set(entity.type, sameType);
      this.pathMap.set(entity.path, entity);
    }
  }

  find(id: string, type?: EntityType): LocatedEntity[] {
    const matches = this.byId.get(id) ?? [];
    return type ? matches.filter((entity) => entity.type === type) : matches;
  }

  one(id: string, type?: EntityType): LocatedEntity | undefined {
    const matches = this.find(id, type);
    return matches.length === 1 ? matches[0] : undefined;
  }

  search(options: {
    types?: EntityType[];
    query?: string;
    ids?: string[];
    limit?: number;
    offset?: number;
  } = {}): { total: number; items: LocatedEntity[] } {
    const types = options.types ? new Set(options.types) : undefined;
    const ids = options.ids ? new Set(options.ids) : undefined;
    const query = options.query?.trim().toLocaleLowerCase();
    const filtered = this.entities.filter((entity) => {
      if (types && !types.has(entity.type)) return false;
      if (ids && !ids.has(entity.id)) return false;
      if (!query) return true;
      const searchable = [
        entity.id,
        asString(entity.value.name),
        compactText(asString(entity.value.title)),
        compactText(asString(entity.value.text)),
        compactText(asString(entity.value.titleText)),
        asString(entity.value.debugTitle),
      ].join(' ').toLocaleLowerCase();
      return searchable.includes(query);
    });
    const offset = Math.max(0, options.offset ?? 0);
    const limit = Math.max(1, Math.min(options.limit ?? 100, 1000));
    return { total: filtered.length, items: filtered.slice(offset, offset + limit) };
  }

  idsForUniqueness(): Set<string> {
    const ids = new Set<string>();
    for (const entity of this.entities) {
      if (!entity.id.startsWith('@') && entity.type !== 'category') ids.add(entity.id);
    }
    return ids;
  }

  summary(): ProjectSummary {
    if (this.cachedSummary) return { ...this.cachedSummary };
    const count = (type: EntityType): number => this.byType.get(type)?.length ?? 0;
    let embeddedAssetBytes = 0;
    const stack: JsonValue[] = [this.project];
    while (stack.length > 0) {
      const value = stack.pop()!;
      if (typeof value === 'string' && value.startsWith('data:')) {
        const comma = value.indexOf(',');
        if (comma !== -1) {
          if (value.includes(';base64,')) {
            embeddedAssetBytes += Math.floor((value.length - comma - 1) * 0.75);
          } else {
            const encoded = value.slice(comma + 1);
            try {
              embeddedAssetBytes += Buffer.byteLength(decodeURIComponent(encoded));
            } catch {
              embeddedAssetBytes += Buffer.byteLength(encoded);
            }
          }
        }
      } else if (Array.isArray(value)) {
        stack.push(...value);
      } else if (isJsonObject(value)) {
        stack.push(...Object.values(value));
      }
    }

    this.cachedSummary = {
      version: typeof this.project.version === 'string' ? this.project.version : null,
      rows: count('row'),
      backpackRows: count('backpack_row'),
      choices: count('choice'),
      selectableAddons: count('selectable_addon'),
      addons: count('addon') + count('selectable_addon'),
      scores: count('score'),
      requirements: count('requirement'),
      points: count('point'),
      variables: count('variable'),
      words: count('word'),
      groups: count('group'),
      rowDesignGroups: count('row_design_group'),
      choiceDesignGroups: count('choice_design_group'),
      globalRequirements: count('global_requirement'),
      soundEffects: count('sound_effect'),
      categories: count('category'),
      embeddedAssetBytes,
    };
    return { ...this.cachedSummary };
  }

  projectBytes(): number {
    this.cachedProjectBytes ??= jsonByteLength(this.project);
    return this.cachedProjectBytes;
  }
}

export const TOP_LEVEL_ENTITY_KEYS = Object.freeze(
  Object.fromEntries(TOP_LEVEL_ENTITIES.map(({ type, key }) => [type, key])) as Partial<Record<EntityType, string>>,
);
