import { randomBytes } from 'node:crypto';
import defaultProjectJson from '../generated/default-project.json' with { type: 'json' };
import { asBoolean, asNumber, asString, cloneJson, deepMerge } from './json.js';
import { ModelIndex, TOP_LEVEL_ENTITY_KEYS } from './model-index.js';
import type { EntityType, JsonObject } from './types.js';

const defaultProject = defaultProjectJson as unknown as JsonObject;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

const ID_CONFIGURATION: Partial<Record<EntityType, {
  prefix: string;
  length: (project: JsonObject) => number;
}>> = {
  row: { prefix: 'row', length: (project) => asNumber(project.rowIdLength, 4) },
  backpack_row: { prefix: 'row', length: (project) => asNumber(project.rowIdLength, 4) },
  choice: { prefix: 'choice', length: (project) => asNumber(project.objectIdLength, 4) },
  selectable_addon: { prefix: 'addon', length: (project) => asNumber(project.objectIdLength, 4) },
  score: { prefix: 's', length: () => 5 },
  point: { prefix: 'point', length: () => 4 },
  variable: { prefix: 'variable', length: () => 4 },
  word: { prefix: 'word', length: () => 4 },
  group: { prefix: 'group', length: () => 4 },
  row_design_group: { prefix: 'design', length: () => 4 },
  choice_design_group: { prefix: 'design', length: () => 4 },
  global_requirement: { prefix: 'requirement', length: () => 4 },
  sound_effect: { prefix: 'sfx', length: () => 4 },
};

function randomSuffix(length: number): string {
  const output: string[] = [];
  const bytes = randomBytes(Math.max(length * 2, 8));
  for (const byte of bytes) {
    if (output.length >= length) break;
    const usableRange = 256 - (256 % ALPHABET.length);
    if (byte < usableRange) output.push(ALPHABET[byte % ALPHABET.length]!);
  }
  return output.length === length ? output.join('') : randomSuffix(length);
}

export function generateEntityId(project: JsonObject, type: EntityType): string {
  const configuration = ID_CONFIGURATION[type];
  if (!configuration) return '';
  const ids = new ModelIndex(project).idsForUniqueness();
  const length = Math.max(1, Math.floor(configuration.length(project)));
  const prefix = asBoolean(project.addPrefix, true) ? `${configuration.prefix}-` : '';
  for (let attempts = 0; attempts < 20; attempts += 1) {
    const id = `${prefix}${randomSuffix(length + Math.floor(attempts / 4))}`;
    if (!ids.has(id)) return id;
  }
  throw new Error(`Unable to generate a unique ${type} id`);
}

function rowFactory(project: JsonObject, backpack: boolean): JsonObject {
  const fallbackBackpack = (
    Array.isArray(defaultProject.backpack) && defaultProject.backpack[0]
    && typeof defaultProject.backpack[0] === 'object'
  ) ? defaultProject.backpack[0] as JsonObject : {};
  if (backpack) {
    const row = cloneJson(fallbackBackpack);
    row.id = generateEntityId(project, 'backpack_row');
    row.index = Array.isArray(project.backpack) ? project.backpack.length : 0;
    row.objects = [];
    row.requireds = [];
    row.isBackpack = true;
    return row;
  }
  return {
    index: Array.isArray(project.rows) ? project.rows.length : 0,
    id: generateEntityId(project, 'row'),
    title: asString(project.defaultRowTitle, 'Row'),
    titleText: asString(project.defaultRowText),
    debugTitle: '',
    objectWidth: asString(project.defaultRowWidth, 'col-md-3'),
    image: '',
    template: asNumber(project.defaultRowTemplate, 1),
    isButtonRow: false,
    buttonType: true,
    buttonId: '',
    buttonText: 'Click',
    buttonRandom: false,
    buttonRandomNumber: 1,
    isResultRow: false,
    resultGroupId: '',
    isInfoRow: false,
    defaultAspectWidth: 1,
    defaultAspectHeight: 1,
    allowedChoices: asNumber(project.defaultRowAllowedChoices, 0),
    currentChoices: 0,
    rowJustify: asString(project.defaultRowJustify, 'start'),
    requireds: [],
    isEditModeOn: false,
    isRequirementOpen: false,
    objects: [],
    rowDesignGroups: [],
  };
}

function choiceFactory(project: JsonObject): JsonObject {
  return {
    index: 0,
    id: generateEntityId(project, 'choice'),
    title: asString(project.defaultChoiceTitle, 'Choice'),
    text: asString(project.defaultChoiceText),
    debugTitle: '',
    image: '',
    template: asNumber(project.defaultChoiceTemplate, 1),
    objectWidth: asString(project.defaultChoiceWidth),
    isActive: false,
    multipleUseVariable: 0,
    initMultipleTimesMinus: 0,
    selectedThisManyTimesProp: 0,
    requireds: [],
    addons: [],
    scores: [],
    groups: [],
    objectDesignGroups: [],
  };
}

function addonFactory(project: JsonObject, selectable: boolean): JsonObject {
  const addon: JsonObject = {
    id: '',
    title: asString(project.defaultAddonTitle, 'Addon'),
    text: asString(project.defaultAddonText),
    template: asNumber(project.defaultAddonTemplate, 1),
    addonWidth: asString(project.defaultAddonWidth, 'col-12'),
    image: '',
    requireds: [],
  };
  if (asBoolean(project.defaultUseShowAddon)) addon.showAddon = true;
  if (asBoolean(project.defaultUseHideAddon)) addon.hideAddon = true;
  if (selectable) {
    addon.id = generateEntityId(project, 'selectable_addon');
    addon.isSelectable = true;
    addon.scores = [];
    addon.groups = [];
    addon.multipleUseVariable = 0;
    addon.isActive = false;
  }
  return addon;
}

function scoreFactory(project: JsonObject): JsonObject {
  return {
    idx: generateEntityId(project, 'score'),
    id: '',
    value: 0,
    type: '',
    requireds: [],
    beforeText: asString(project.defaultBeforePoint, 'Cost:'),
    afterText: asString(project.defaultAfterPoint, 'points'),
    showScore: asBoolean(project.defaultUseShowScore, true),
  };
}

function requirementFactory(project: JsonObject): JsonObject {
  return {
    required: true,
    requireds: [],
    orRequired: [],
    orRequireds: [],
    id: '',
    type: 'id',
    reqId: '',
    reqId1: '',
    reqId2: '',
    reqId3: '',
    reqPoints: 0,
    showRequired: asBoolean(project.defaultUseShowReq),
    operator: '1',
    afterText: asString(project.defaultAfterReq, 'choice'),
    beforeText: asString(project.defaultBeforeReq, 'Required:'),
    orNum: 1,
    selNum: 1,
    selFromOperators: '1',
    more: [],
  };
}

function topLevelFactory(project: JsonObject, type: EntityType): JsonObject {
  const key = TOP_LEVEL_ENTITY_KEYS[type];
  const length = key && Array.isArray(project[key]) ? project[key].length : 0;
  switch (type) {
    case 'point':
      return {
        id: generateEntityId(project, type),
        name: `Point ${length + 1}`,
        startingSum: 0,
        initValue: 0,
        activatedId: '',
        beforeText: `Point ${length + 1}:`,
        afterText: '',
        category: -1,
      };
    case 'variable':
      return { id: generateEntityId(project, type), isTrue: false, category: -1 };
    case 'word':
      return { id: generateEntityId(project, type), replaceText: '', category: -1 };
    case 'group':
      return {
        id: generateEntityId(project, type),
        name: `Group ${length + 1}`,
        category: -1,
        elements: [],
        rowElements: [],
      };
    case 'row_design_group':
    case 'choice_design_group':
      return {
        id: generateEntityId(project, type),
        name: `Design ${length + 1}`,
        activatedId: '',
        elements: [],
        backpackElements: [],
        groupElements: [],
        category: -1,
        styling: {},
      };
    case 'global_requirement':
      return {
        id: generateEntityId(project, type),
        name: `Requirement ${length + 1}`,
        category: -1,
        requireds: [],
      };
    case 'sound_effect':
      return {
        id: generateEntityId(project, type),
        name: `Sound ${length + 1}`,
        audio: '',
        volume: 1,
        pitch: 0,
        isDefault: false,
        onSelected: false,
        onDeselected: false,
        requireds: [],
        groups: [],
      };
    case 'category':
      return { idx: length, name: `Category ${length + 1}`, type: 'point' };
    default:
      throw new Error(`No top-level factory for ${type}`);
  }
}

function categoryFactory(project: JsonObject, overrides: JsonObject): JsonObject {
  const categoryType = asString(overrides.type, 'point');
  const used = new Set(
    (new ModelIndex(project).byType.get('category') ?? [])
      .filter((entity) => asString(entity.value.type) === categoryType)
      .map((entity) => asNumber(entity.value.idx, -1)),
  );
  let idx = 0;
  while (used.has(idx) && idx < 99) idx += 1;
  if (idx >= 99 && !Object.hasOwn(overrides, 'idx')) {
    throw new Error(`All 99 ICC Plus category slots for ${categoryType} are in use.`);
  }
  return {
    idx,
    name: `Category ${idx + 1}`,
    type: categoryType,
  };
}

export function createDefaultProject(overrides: JsonObject = {}): JsonObject {
  return deepMerge(cloneJson(defaultProject), overrides);
}

export function createEntity(
  project: JsonObject,
  type: EntityType,
  overrides: JsonObject = {},
): JsonObject {
  let value: JsonObject;
  switch (type) {
    case 'row':
      value = rowFactory(project, false);
      break;
    case 'backpack_row':
      value = rowFactory(project, true);
      break;
    case 'choice':
      value = choiceFactory(project);
      break;
    case 'addon':
      value = addonFactory(project, false);
      break;
    case 'selectable_addon':
      value = addonFactory(project, true);
      break;
    case 'score':
      value = scoreFactory(project);
      break;
    case 'requirement':
      value = requirementFactory(project);
      break;
    case 'category':
      value = categoryFactory(project, overrides);
      break;
    default:
      value = topLevelFactory(project, type);
      break;
  }
  return deepMerge(value, overrides);
}
