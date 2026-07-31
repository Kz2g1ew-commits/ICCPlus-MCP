import sourceAnalysis from '../generated/source-analysis.json' with { type: 'json' };

export interface FeatureFamily {
  id: string;
  title: string;
  summary: string;
  typeNames: string[];
  engineFunctions: string[];
  authoringNotes: string[];
}

export const FEATURE_FAMILIES: FeatureFamily[] = [
  {
    id: 'project.lifecycle',
    title: 'Project lifecycle and persistence',
    summary: 'Create, load, migrate, save, autosave, import, export, inspect, and restore ICC Plus projects and fragments.',
    typeNames: ['App', 'SaveSlot', 'DefaultSettings', 'LastPages'],
    engineFunctions: [
      'autoSave', 'buildAutoSave', 'saveToSlot', 'deleteSlot', 'loadFromSlot',
      'loadFromDisk', 'exportData', 'importData', 'initializeApp', 'removeNulls',
    ],
    authoringNotes: [
      'Keep unknown fields for forward compatibility.',
      'Treat version as data, not as a gate that discards newer fields.',
      'Use atomic writes and validate before replacing an existing project file.',
    ],
  },
  {
    id: 'content.rows',
    title: 'Rows and row modes',
    summary: 'Author normal, button, result, information, group, random-point, and backpack rows with ordering and responsive layout.',
    typeNames: ['Row', 'RowMap'],
    engineFunctions: ['getRows', 'getBackpackRows', 'duplicateRow', 'pasteObject'],
    authoringNotes: [
      'Row index is positional and must match its array index.',
      'allowedChoices=0 means unlimited.',
      'Backpack rows share the Row model and are distinguished by isBackpack and their container.',
    ],
  },
  {
    id: 'content.choices_addons',
    title: 'Choices and addons',
    summary: 'Author choices, non-selectable addons, selectable addons, templates, widths, linked content, private content, and result visibility.',
    typeNames: [
      'Choice', 'BaseAddon', 'NonSelectableAddon', 'SelectableAddon', 'Addon',
      'MDObject', 'ChoiceMap',
    ],
    engineFunctions: [
      'getChoices', 'getSelectables', 'getBackpackChoices',
      'getBackpackSelectables', 'selectObject', 'deselectObject',
    ],
    authoringNotes: [
      'Selectable addons are full selectable entities and require a unique id, scores, groups, and selection state.',
      'Every addon parentId must point to its containing choice.',
      'Choice index is positional and must match its row objects array index.',
    ],
  },
  {
    id: 'selection.multiple',
    title: 'Selection, counters, delays, and activation',
    summary: 'Control single/multiple selection, slider counters, auto activation, selection delays, forced activation/deactivation, reset behavior, and random activation.',
    typeNames: ['ChoiceFunc', 'ActivatedMap', 'ChoiceOptions'],
    engineFunctions: [
      'checkActivated', 'cleanActivated', 'activateTempChoices',
      'selectedOneMore', 'selectedOneLess', 'loadActivated',
    ],
    authoringNotes: [
      'The /ON#N suffix means at least N activations for multi-selectable entities.',
      'Activation effects can form cycles; validation reports cycles and dangling targets.',
      'Multiple-select scores maintain per-selection runtime state which should not be authored manually.',
    ],
  },
  {
    id: 'requirements',
    title: 'Requirements and global requirements',
    summary: 'Build nested selected/not-selected, point, point-comparison, X-of, row/group/whole selection, word, and reusable global requirement trees.',
    typeNames: ['Requireds', 'MoreReq', 'GlobalRequirement', 'ExprNode'],
    engineFunctions: ['checkReq', 'checkRequirements', 'getChoiceTitle'],
    authoringNotes: [
      'Requirements on the same container are ANDed.',
      'Nested requireds are prerequisites for their parent requirement.',
      'Global requirement references can reference other global requirements; cycles are invalid.',
    ],
  },
  {
    id: 'scoring.points',
    title: 'Points, scores, random values, and expressions',
    summary: 'Define integer or floating point types, score visibility, score requirements, random ranges, expression values, recalculation, and point display behavior.',
    typeNames: ['PointType', 'Score', 'TempScore', 'PointTypeMap'],
    engineFunctions: ['checkPointEnable', 'checkPoints', 'setScoreValue', 'selectUpdateScore'],
    authoringNotes: [
      'initValue is the reset value; startingSum is the current build value.',
      'A score id references a point type and an empty id is allowed for display-only score text.',
      'Expression placeholders use point ids in braces and are evaluated when the choice is selected.',
    ],
  },
  {
    id: 'scoring.discounts',
    title: 'Discounts and score transformations',
    summary: 'Apply plus, minus, multiply, divide, or assignment discounts by row, choice, group, or point type, including limits, counts, stacking, and display replacement.',
    typeNames: ['Discount'],
    engineFunctions: [
      'calcStackDiscount', 'deleteDiscount', 'selectDiscount',
      'deselectDiscount', 'expDiscount',
    ],
    authoringNotes: [
      'Discount rules are effects on choices; transient applied-discount fields are runtime state.',
      'Non-stackable discounts resolve by the viewer engine and should be tested with representative builds.',
      'countPerSelection changes counting semantics for multi-selectable choices.',
    ],
  },
  {
    id: 'effects.content_navigation',
    title: 'Content, layout, and navigation effects',
    summary: 'Duplicate rows, hide content, alter allowed selections, reveal addons, switch templates/widths, and scroll to rows or choices.',
    typeNames: ['ObjectMap'],
    engineFunctions: ['duplicateRow', 'applyTemplate', 'revertTemplate', 'applyWidth', 'revertWidth'],
    authoringNotes: [
      'Effect target fields accept row, choice, and group ids as documented by their feature.',
      'Row duplication can suffix requirements and functions to avoid self-references.',
      'Template and width stacks are runtime state and are rebuilt from selected effects.',
    ],
  },
  {
    id: 'effects.variables_words',
    title: 'Variables, words, player text, and uploaded images',
    summary: 'Toggle variables, replace word tokens, prompt for player text, upload choice images, and require confirmation.',
    typeNames: ['Variable', 'Word', 'WordDialog', 'ImgDialog', 'CommonImage'],
    engineFunctions: ['replaceText'],
    authoringNotes: [
      'Word ids, point ids, and multi-choice ids can all be replaced in display text.',
      'Variable values participate in activation and requirements.',
      'Custom input effects require viewer interaction and cannot be resolved from project data alone.',
    ],
  },
  {
    id: 'organization.groups_categories',
    title: 'Groups and categories',
    summary: 'Organize rows and selectable entities into groups, connect result rows, and categorize points, groups, variables, words, design groups, and global requirements.',
    typeNames: ['Group', 'GroupMap', 'Category'],
    engineFunctions: ['getGroups', 'getGroupLabel'],
    authoringNotes: [
      'Group membership is stored on both the group and member; the MCP normalizer keeps both directions consistent.',
      'Category identity is the pair type+idx, not idx alone.',
      'Result rows can filter selected content through a group id.',
    ],
  },
  {
    id: 'design.custom_css',
    title: 'Advanced Custom CSS',
    summary: 'Override official viewer styles through the project customCSS field using source-backed runtime classes and project-id selectors.',
    typeNames: ['App'],
    engineFunctions: ['applyCustomCSS'],
    authoringNotes: [
      'ICC Plus injects customCSS as style#customCSS in document.head by assigning textContent.',
      'Dynamic targets include row-{id}, choice-{id}, and addon-{id}; ids may require CSS escaping.',
      'Many viewer elements also receive inline styles, so narrowly targeted !important declarations may be required.',
      'The MCP statically analyzes CSS but leaves computed-style and viewport confirmation to the official viewer.',
    ],
  },
  {
    id: 'design.inheritance',
    title: 'Private styling and design groups',
    summary: 'Apply global styling, row/choice private styling, conditional design groups, group-linked design groups, and inheritance precedence.',
    typeNames: ['Styling', 'RowDesignGroup', 'ObjectDesignGroup'],
    engineFunctions: ['getStyling', 'initStyling'],
    authoringNotes: [
      'Precedence is choice private styling, active choice design groups, row private styling, active row design groups, then global styling.',
      'Each private*IsOn flag selects which styling subset is overridden.',
      'activatedId can be a selected id or a global requirement id.',
    ],
  },
  {
    id: 'design.filters',
    title: 'Selected, unmet, and unselected filters',
    summary: 'Configure blur, brightness, contrast, grayscale, hue, invert, opacity, saturation, sepia, visibility, overlays, borders, backgrounds, and text colors by state.',
    typeNames: ['filterStyling', 'Filters'],
    engineFunctions: [],
    authoringNotes: ['Filter enable flags control whether their paired values are applied.'],
  },
  {
    id: 'design.text',
    title: 'Text design',
    summary: 'Configure fonts, sizes, colors, and alignment for row, choice, addon, score, and multiple-choice text.',
    typeNames: ['textStyling', 'multiChoiceStyling'],
    engineFunctions: ['replaceText'],
    authoringNotes: ['Imported Google and external font stylesheets must be accessible to the viewer.'],
  },
  {
    id: 'design.layout',
    title: 'Row, choice, addon, and image design',
    summary: 'Configure margins, padding, borders, radii, overflow, gradients, border images, shadows, image sizing, and image fill behavior.',
    typeNames: [
      'objectImageStyling', 'rowImageStyling', 'addonImageStyling',
      'objectStyling', 'rowStyling', 'addonStyling', 'BgStyles',
    ],
    engineFunctions: ['widthToNum', 'objectWidthToNum', 'fixedWidth'],
    authoringNotes: [
      'Border radius values use pixels when the corresponding *IsPixels flag is true and percentages otherwise.',
      'Box-shadow and drop-shadow have different clipping behavior.',
      'Responsive width values use ICC Plus Bootstrap-compatible class names.',
    ],
  },
  {
    id: 'design.background_pointbar_backpack',
    title: 'Background, point bar, and backpack design',
    summary: 'Configure project/row/choice backgrounds, point bar layout and colors, and backpack dimensions and background.',
    typeNames: ['backgroundStyling', 'pointBarStyling', 'backpackStyling'],
    engineFunctions: [],
    authoringNotes: ['Background image data URLs can be separated into viewer assets during packaging.'],
  },
  {
    id: 'media.audio',
    title: 'BGM and sound effects',
    summary: 'Configure YouTube or audio URL BGM, loop/mute/fade behavior, reusable sound effects, pitch, volume, requirements, and selection triggers.',
    typeNames: ['SoundEffect', 'MusicPlayer', 'BgmPlayer'],
    engineFunctions: [
      'playBgm', 'initYoutubePlayer', 'loadYouTubeAPI',
      'initSfx', 'loadSfx', 'playSfx', 'playSfxOnSelect', 'playSfxOnDeselect',
    ],
    authoringNotes: [
      'Sound effect audio is stored as a data URL; BGM can use a YouTube id or audio URL.',
      'Browser autoplay and CORS policies still apply in the viewer.',
    ],
  },
  {
    id: 'viewer.builds',
    title: 'Viewer builds, search, backpack, and image download',
    summary: 'Configure viewer loading, title/favicon, local or web export, separate images, build save/load/autosave, search, backpack, and static image export.',
    typeNames: ['ViewerConfig', 'ViewerSetting'],
    engineFunctions: [
      'getSelectedObjectId', 'getSearchables', 'downloadAsImage',
      'replaceImages', 'forceEagerImageLoading',
    ],
    authoringNotes: [
      'Web viewer export writes project.json; local viewer export embeds data in js/app.js.',
      'Separate-image export deduplicates equal data URLs and rewrites project references.',
      'Build saves are keyed by CYOA link in the browser viewer.',
    ],
  },
  {
    id: 'runtime.ui_state',
    title: 'Creator and viewer runtime state',
    summary: 'Transient dialogs, menus, snackbars, maps, style calculations, and UI state used internally by ICC Plus.',
    typeNames: [
      'DlgVariables', 'SnackBarVariables', 'MenuVariables',
      'RowMap', 'ObjectMap', 'ChoiceMap', 'ChoiceOptions',
    ],
    engineFunctions: ['toggleTheme', 'setShortcut', 'toggleAltMenu', 'removeAnchor'],
    authoringNotes: [
      'Runtime-only fields are preserved when loading an existing file but are not generated for new authored content.',
      'The validator distinguishes portable project configuration from viewer session state.',
    ],
  },
];

export interface FeatureDescription extends FeatureFamily {
  types: Record<string, unknown>;
  functions: unknown[];
}

export function listFeatureFamilies(): Array<Pick<FeatureFamily, 'id' | 'title' | 'summary'>> {
  return FEATURE_FAMILIES.map(({ id, title, summary }) => ({ id, title, summary }));
}

export function describeFeature(id: string): FeatureDescription | undefined {
  const feature = FEATURE_FAMILIES.find((item) => item.id === id);
  if (!feature) return undefined;
  const types = Object.fromEntries(
    feature.typeNames
      .filter((name) => name in sourceAnalysis.types)
      .map((name) => [name, sourceAnalysis.types[name as keyof typeof sourceAnalysis.types]]),
  );
  const functionNames = new Set(feature.engineFunctions);
  return {
    ...feature,
    types,
    functions: sourceAnalysis.storeFunctions.filter((item) => functionNames.has(item.name)),
  };
}

export function describeField(field: string): {
  declarations: Array<{ type: string; optional: boolean; valueType: string; line: number }>;
  usages: unknown[];
} | undefined {
  if (!(field in sourceAnalysis.fields)) return undefined;
  const declarations = Object.entries(sourceAnalysis.types).flatMap(([type, definition]) =>
    definition.fields
      .filter((item) => item.name === field)
      .map((item) => ({
        type,
        optional: item.optional,
        valueType: item.type,
        line: item.line,
      })),
  );
  return {
    declarations,
    usages: sourceAnalysis.fields[field as keyof typeof sourceAnalysis.fields],
  };
}

export function describeFunction(name: string): unknown[] {
  return sourceAnalysis.functions.filter((item) => item.name === name);
}

export function describeSource(file: string): unknown | undefined {
  const normalized = file.replaceAll('\\', '/').replace(/^\.?\//, '');
  return sourceAnalysis.components.find((item) =>
    item.file === normalized || item.file.endsWith(`/${normalized}`)
  );
}

export function featureCoverage(): {
  declaredTypes: number;
  coveredTypes: number;
  uncoveredTypes: string[];
  declaredFields: number;
  sourceFiles: number;
  sourceFunctions: number;
} {
  const allTypes = Object.keys(sourceAnalysis.types);
  const covered = new Set(FEATURE_FAMILIES.flatMap((feature) => feature.typeNames));
  return {
    declaredTypes: allTypes.length,
    coveredTypes: allTypes.filter((type) => covered.has(type)).length,
    uncoveredTypes: allTypes.filter((type) => !covered.has(type)),
    declaredFields: Object.keys(sourceAnalysis.fields).length,
    sourceFiles: sourceAnalysis.components.length,
    sourceFunctions: sourceAnalysis.functions.length,
  };
}
