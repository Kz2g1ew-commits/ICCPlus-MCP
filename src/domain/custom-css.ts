import sourceAnalysisJson from '../generated/source-analysis.json' with { type: 'json' };
import { asString } from './json.js';
import { ModelIndex } from './model-index.js';
import type { Diagnostic, EntityType, JsonObject } from './types.js';

export type CssTargetKind = 'dynamic' | 'state' | 'layout' | 'viewer';

export interface CssSourceEvidence {
  file: string;
  line: number;
}

export interface CssCatalogEntry {
  selector: string;
  className: string;
  kind: CssTargetKind;
  dynamic: boolean;
  description: string;
  inlineStyleRisk: boolean;
  sources: CssSourceEvidence[];
}

export interface ProjectCssTarget {
  selector: string;
  entityType: EntityType;
  entityId: string;
  title: string;
  path: string;
  variants: string[];
}

export interface CssSpecificity {
  ids: number;
  classes: number;
  types: number;
  formatted: string;
  approximate: boolean;
}

export interface CssDeclarationAnalysis {
  property: string;
  value: string;
  important: boolean;
  line: number;
}

export interface CssSelectorAnalysis {
  selector: string;
  line: number;
  specificity: CssSpecificity;
  classes: string[];
  catalogMatches: string[];
  projectMatches: ProjectCssTarget[];
}

export interface CssRuleAnalysis {
  line: number;
  selectors: CssSelectorAnalysis[];
  declarations: CssDeclarationAnalysis[];
}

export interface CustomCssAnalysis {
  valid: boolean;
  bytes: number;
  lines: number;
  rules: number;
  selectors: number;
  declarations: number;
  importantDeclarations: number;
  remoteReferences: string[];
  matchedProjectTargets: number;
  errors: number;
  warnings: number;
  diagnostics: Diagnostic[];
  ruleDetails: CssRuleAnalysis[];
}

interface SourceAnalysis {
  upstream: { version: string; commit: string };
  components: Array<{ file: string; source: string }>;
}

interface DelimiterScan {
  bracePairs: Map<number, number>;
  diagnostics: Diagnostic[];
}

interface CssTargetSets {
  rows: Set<string>;
  choices: Set<string>;
  addons: Set<string>;
}

const sourceAnalysis = sourceAnalysisJson as unknown as SourceAnalysis;
const VIEWER_PREFIX = 'ICCPlus_Viewer/src/';
const INLINE_STYLE_PROPERTIES = new Set([
  'align-items', 'background', 'background-color', 'background-image', 'border',
  'border-color', 'border-radius', 'border-style', 'border-width', 'box-shadow',
  'color', 'display', 'filter', 'font-family', 'font-size', 'font-style',
  'font-weight', 'height', 'justify-content', 'line-height', 'margin',
  'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'max-height',
  'max-width', 'min-height', 'min-width', 'object-fit', 'opacity', 'overflow',
  'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top',
  'text-align', 'text-shadow', 'transform', 'visibility', 'width',
]);

const CORE_TARGETS: Array<Omit<CssCatalogEntry, 'sources'>> = [
  {
    selector: '.row-{rowId}', className: 'row-{rowId}', kind: 'dynamic', dynamic: true,
    description: 'A row container. Replace {rowId} with the row id.', inlineStyleRisk: true,
  },
  {
    selector: '.row-{rowId}-bg', className: 'row-{rowId}-bg', kind: 'dynamic', dynamic: true,
    description: 'The outer row background container.', inlineStyleRisk: true,
  },
  {
    selector: '.row-{rowId}-header', className: 'row-{rowId}-header', kind: 'dynamic', dynamic: true,
    description: 'The row header/background element that contains its title and text.', inlineStyleRisk: true,
  },
  {
    selector: '.row-button', className: 'row-button', kind: 'viewer', dynamic: false,
    description: 'Buttons rendered by button-style rows.', inlineStyleRisk: true,
  },
  {
    selector: '.choice-{choiceId}', className: 'choice-{choiceId}', kind: 'dynamic', dynamic: true,
    description: 'A selectable choice container. Replace {choiceId} with the choice id.', inlineStyleRisk: true,
  },
  {
    selector: '.choice-enabled', className: 'choice-enabled', kind: 'state', dynamic: false,
    description: 'A choice whose requirements currently pass.', inlineStyleRisk: true,
  },
  {
    selector: '.choice-disabled', className: 'choice-disabled', kind: 'state', dynamic: false,
    description: 'A choice whose requirements currently fail.', inlineStyleRisk: true,
  },
  {
    selector: '.choice-selected', className: 'choice-selected', kind: 'state', dynamic: false,
    description: 'A currently selected choice.', inlineStyleRisk: true,
  },
  {
    selector: '.choice-unselected', className: 'choice-unselected', kind: 'state', dynamic: false,
    description: 'A currently unselected choice.', inlineStyleRisk: true,
  },
  {
    selector: '.addon', className: 'addon', kind: 'viewer', dynamic: false,
    description: 'Every selectable and non-selectable addon container.', inlineStyleRisk: true,
  },
  {
    selector: '.addon-{addonId}', className: 'addon-{addonId}', kind: 'dynamic', dynamic: true,
    description: 'A selectable addon container. Replace {addonId} with its id.', inlineStyleRisk: true,
  },
  {
    selector: '.bg-overlay', className: 'bg-overlay', kind: 'state', dynamic: false,
    description: 'Marks elements whose configured background overlay is active.', inlineStyleRisk: true,
  },
  {
    selector: '.hidden', className: 'hidden', kind: 'state', dynamic: false,
    description: 'Marks a row hidden by ICC Plus runtime state.', inlineStyleRisk: false,
  },
  {
    selector: '.pointBar', className: 'pointBar', kind: 'viewer', dynamic: false,
    description: 'The fixed ICC Plus point bar.', inlineStyleRisk: true,
  },
  {
    selector: '.pointbar-icons', className: 'pointbar-icons', kind: 'viewer', dynamic: false,
    description: 'Icons displayed in the point bar.', inlineStyleRisk: true,
  },
  {
    selector: '.s-main', className: 's-main', kind: 'viewer', dynamic: false,
    description: 'The main viewer content container.', inlineStyleRisk: true,
  },
];

function lineAt(source: string, offset: number): number {
  return source.slice(0, offset).split('\n').length;
}

function evidenceFor(className: string): CssSourceEvidence[] {
  const needles = className.includes('{rowId}')
    ? ['row-{row.id}']
    : className.includes('{choiceId}')
      ? ['choice-{choice.id}']
      : className.includes('{addonId}')
        ? ['addon-' + '$' + '{addon.id}']
        : [className];
  const evidence: CssSourceEvidence[] = [];
  for (const component of sourceAnalysis.components) {
    if (!component.file.startsWith(VIEWER_PREFIX) || !component.file.endsWith('.svelte')) continue;
    for (const needle of needles) {
      const offset = component.source.indexOf(needle);
      if (offset !== -1) {
        evidence.push({ file: component.file, line: lineAt(component.source, offset) });
        break;
      }
    }
  }
  return evidence.slice(0, 5);
}

function normalizeDynamicClass(value: string): string {
  return value
    .replaceAll('{row.id}', '{rowId}')
    .replaceAll('{choice.id}', '{choiceId}')
    .replaceAll('$' + '{addon.id}', '{addonId}');
}

function kindForClass(className: string): CssTargetKind {
  if (className.includes('{')) return 'dynamic';
  if (/^(?:choice-(?:enabled|disabled|selected|unselected)|bg-overlay|hidden|fullHeight)$/.test(className)) {
    return 'state';
  }
  if (/^(?:row$|col(?:-|$)|d-|[pm][trblxyse]?-\d|g[xy]?-|w-|h-|text-|align-|justify-|flex-|container)/.test(className)) {
    return 'layout';
  }
  return 'viewer';
}

function extractViewerClasses(): Map<string, CssSourceEvidence[]> {
  const found = new Map<string, CssSourceEvidence[]>();
  const add = (raw: string, file: string, line: number): void => {
    const className = normalizeDynamicClass(raw.trim());
    if (!/^[A-Za-z_][A-Za-z0-9_-]*(?:\{(?:row|choice|addon)Id\}[A-Za-z0-9_-]*)?$/.test(className)) return;
    if (className.endsWith('-')) return;
    const sources = found.get(className) ?? [];
    if (!sources.some((item) => item.file === file && item.line === line)) sources.push({ file, line });
    found.set(className, sources.slice(0, 5));
  };

  for (const component of sourceAnalysis.components) {
    if (
      !component.file.startsWith(VIEWER_PREFIX)
      || !component.file.endsWith('.svelte')
      || !(component.file === VIEWER_PREFIX + 'App.svelte' || component.file.includes('/viewer/'))
    ) continue;
    for (const match of component.source.matchAll(/\bclass\s*=\s*"([^"]*)"/g)) {
      const content = normalizeDynamicClass(match[1] ?? '');
      const line = lineAt(component.source, match.index ?? 0);
      const literalPortion = content.replace(/\{(?!rowId\}|choiceId\}|addonId\})[^}]*\}/g, ' ');
      for (const token of literalPortion.split(/\s+/)) add(token, component.file, line);
      for (const quoted of content.matchAll(/['\x60]([A-Za-z_][A-Za-z0-9_-]*)['\x60]/g)) {
        add(quoted[1] ?? '', component.file, line);
      }
      for (const dynamic of content.matchAll(/(?:row-|choice-|addon-)\{(?:row|choice|addon)Id\}(?:-bg|-header)?/g)) {
        add(dynamic[0], component.file, line);
      }
    }
    for (const match of component.source.matchAll(/\bclass:([A-Za-z_][A-Za-z0-9_-]*)/g)) {
      add(match[1] ?? '', component.file, lineAt(component.source, match.index ?? 0));
    }
  }
  return found;
}

function buildCatalog(): CssCatalogEntry[] {
  const extracted = extractViewerClasses();
  const entries = new Map<string, CssCatalogEntry>();
  for (const target of CORE_TARGETS) {
    entries.set(target.className, { ...target, sources: evidenceFor(target.className) });
  }
  for (const [className, sources] of extracted) {
    const existing = entries.get(className);
    if (existing) {
      existing.sources = [...existing.sources, ...sources]
        .filter((item, index, all) =>
          all.findIndex((other) => other.file === item.file && other.line === item.line) === index
        )
        .slice(0, 5);
      continue;
    }
    const kind = kindForClass(className);
    entries.set(className, {
      selector: '.' + className,
      className,
      kind,
      dynamic: kind === 'dynamic',
      description: kind === 'layout'
        ? 'A layout utility class present in official viewer markup.'
        : 'A class present in official ICC Plus viewer markup.',
      inlineStyleRisk: kind !== 'layout',
      sources,
    });
  }
  return [...entries.values()].sort((left, right) => left.selector.localeCompare(right.selector));
}

const CSS_CATALOG = buildCatalog();
const CATALOG_BY_CLASS = new Map(CSS_CATALOG.map((entry) => [entry.className, entry]));

export function getCssCatalog(): CssCatalogEntry[] {
  return CSS_CATALOG.map((entry) => ({ ...entry, sources: [...entry.sources] }));
}

export function cssCatalogMetadata(): JsonObject {
  return {
    upstreamVersion: sourceAnalysis.upstream.version,
    upstreamCommit: sourceAnalysis.upstream.commit,
    entries: CSS_CATALOG.length,
    injection: 'style#customCSS in document.head; text is assigned through textContent',
    limitations: 'Static analysis only. Computed style and viewport behavior require the official ICC Plus viewer.',
  };
}

export function escapeCssIdentifier(value: string): string {
  let escaped = '';
  for (let index = 0; index < value.length; index += 1) {
    const character = value[index]!;
    const code = character.codePointAt(0)!;
    const firstDigit = index === 0 && /[0-9]/.test(character);
    const secondDigitAfterHyphen = index === 1 && value[0] === '-' && /[0-9]/.test(character);
    if (code === 0) escaped += '\uFFFD';
    else if (firstDigit || secondDigitAfterHyphen || code < 0x20 || code === 0x7f) {
      escaped += '\\' + code.toString(16) + ' ';
    } else if (code >= 0x80 || /[A-Za-z0-9_-]/.test(character)) escaped += character;
    else escaped += '\\' + character;
  }
  return escaped;
}

function titleOf(value: JsonObject): string {
  return asString(value.title) || asString(value.name) || asString(value.text);
}

export function listProjectCssTargets(project: JsonObject): ProjectCssTarget[] {
  const index = new ModelIndex(project);
  const targets: ProjectCssTarget[] = [];
  for (const type of ['row', 'backpack_row'] as const) {
    for (const entity of index.byType.get(type) ?? []) {
      const base = escapeCssIdentifier('row-' + entity.id);
      targets.push({
        selector: '.' + base,
        entityType: entity.type,
        entityId: entity.id,
        title: titleOf(entity.value),
        path: entity.path,
        variants: ['.' + base + '-bg', '.' + base + '-header'],
      });
    }
  }
  for (const entity of index.byType.get('choice') ?? []) {
    targets.push({
      selector: '.' + escapeCssIdentifier('choice-' + entity.id),
      entityType: entity.type,
      entityId: entity.id,
      title: titleOf(entity.value),
      path: entity.path,
      variants: [],
    });
  }
  for (const entity of index.byType.get('selectable_addon') ?? []) {
    targets.push({
      selector: '.' + escapeCssIdentifier('addon-' + entity.id),
      entityType: entity.type,
      entityId: entity.id,
      title: titleOf(entity.value),
      path: entity.path,
      variants: [],
    });
  }
  return targets.sort((left, right) => left.selector.localeCompare(right.selector));
}

function diagnostic(
  code: string,
  severity: Diagnostic['severity'],
  message: string,
  options: Partial<Omit<Diagnostic, 'code' | 'severity' | 'message' | 'path'>> = {},
): Diagnostic {
  return { code, severity, path: '/customCSS', message, ...options };
}

function scanDelimiters(css: string): DelimiterScan {
  const diagnostics: Diagnostic[] = [];
  const bracePairs = new Map<number, number>();
  const stack: Array<{ character: string; index: number }> = [];
  let quote = '';
  let quoteStart = -1;
  let commentStart = -1;
  for (let index = 0; index < css.length; index += 1) {
    const character = css[index]!;
    const next = css[index + 1] ?? '';
    if (commentStart !== -1) {
      if (character === '*' && next === '/') {
        commentStart = -1;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (character === '\\') index += 1;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '/' && next === '*') {
      commentStart = index;
      index += 1;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      quoteStart = index;
      continue;
    }
    if (character === '{' || character === '[' || character === '(') {
      stack.push({ character, index });
      continue;
    }
    if (character === '}' || character === ']' || character === ')') {
      const expected = character === '}' ? '{' : character === ']' ? '[' : '(';
      const opening = stack.pop();
      if (!opening || opening.character !== expected) {
        diagnostics.push(diagnostic(
          'css.syntax.unmatched_closer',
          'error',
          'Line ' + lineAt(css, index) + ': unmatched ' + character + '.',
        ));
      } else if (expected === '{') {
        bracePairs.set(opening.index, index);
      }
    }
  }
  if (commentStart !== -1) {
    diagnostics.push(diagnostic(
      'css.syntax.unclosed_comment',
      'error',
      'Line ' + lineAt(css, commentStart) + ': unclosed CSS comment.',
    ));
  }
  if (quote) {
    diagnostics.push(diagnostic(
      'css.syntax.unclosed_string',
      'error',
      'Line ' + lineAt(css, quoteStart) + ': unclosed string.',
    ));
  }
  for (const opening of stack) {
    diagnostics.push(diagnostic(
      'css.syntax.unclosed_delimiter',
      'error',
      'Line ' + lineAt(css, opening.index) + ': unclosed ' + opening.character + '.',
    ));
  }
  return { bracePairs, diagnostics };
}

function skipTrivia(css: string, start: number, end: number): number {
  let cursor = start;
  while (cursor < end) {
    if (/\s/.test(css[cursor]!)) {
      cursor += 1;
      continue;
    }
    if (css[cursor] === '/' && css[cursor + 1] === '*') {
      const close = css.indexOf('*/', cursor + 2);
      return close === -1 ? end : skipTrivia(css, close + 2, end);
    }
    break;
  }
  return cursor;
}

function findBoundary(
  css: string,
  start: number,
  end: number,
): { index: number; character: string } | undefined {
  let quote = '';
  let comment = false;
  let parens = 0;
  let brackets = 0;
  for (let index = start; index < end; index += 1) {
    const character = css[index]!;
    const next = css[index + 1] ?? '';
    if (comment) {
      if (character === '*' && next === '/') {
        comment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (character === '\\') index += 1;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '/' && next === '*') {
      comment = true;
      index += 1;
    } else if (character === '"' || character === "'") quote = character;
    else if (character === '(') parens += 1;
    else if (character === ')') parens = Math.max(0, parens - 1);
    else if (character === '[') brackets += 1;
    else if (character === ']') brackets = Math.max(0, brackets - 1);
    else if (parens === 0 && brackets === 0 && (character === '{' || character === ';')) {
      return { index, character };
    }
  }
  return undefined;
}

function splitTopLevel(value: string, delimiter: string): string[] {
  const parts: string[] = [];
  let start = 0;
  let quote = '';
  let comment = false;
  let parens = 0;
  let brackets = 0;
  for (let index = 0; index < value.length; index += 1) {
    const character = value[index]!;
    const next = value[index + 1] ?? '';
    if (comment) {
      if (character === '*' && next === '/') {
        comment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (character === '\\') index += 1;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '/' && next === '*') {
      comment = true;
      index += 1;
    } else if (character === '"' || character === "'") quote = character;
    else if (character === '(') parens += 1;
    else if (character === ')') parens = Math.max(0, parens - 1);
    else if (character === '[') brackets += 1;
    else if (character === ']') brackets = Math.max(0, brackets - 1);
    else if (parens === 0 && brackets === 0 && character === delimiter) {
      parts.push(value.slice(start, index));
      start = index + 1;
    }
  }
  parts.push(value.slice(start));
  return parts;
}

function colonAt(value: string): number {
  let quote = '';
  let parens = 0;
  for (let index = 0; index < value.length; index += 1) {
    const character = value[index]!;
    if (quote) {
      if (character === '\\') index += 1;
      else if (character === quote) quote = '';
    } else if (character === '"' || character === "'") quote = character;
    else if (character === '(') parens += 1;
    else if (character === ')') parens = Math.max(0, parens - 1);
    else if (character === ':' && parens === 0) return index;
  }
  return -1;
}

function parseDeclarations(
  css: string,
  start: number,
  end: number,
  diagnostics: Diagnostic[],
): CssDeclarationAnalysis[] {
  const block = css.slice(start, end);
  const declarations: CssDeclarationAnalysis[] = [];
  let offset = 0;
  for (const raw of splitTopLevel(block, ';')) {
    const trimmed = raw.trim();
    const local = raw.search(/\S/);
    const absolute = start + offset + Math.max(0, local);
    offset += raw.length + 1;
    if (!trimmed || trimmed.startsWith('@') || trimmed.includes('{')) continue;
    const colon = colonAt(trimmed);
    if (colon === -1) {
      diagnostics.push(diagnostic(
        'css.syntax.missing_colon',
        'error',
        'Line ' + lineAt(css, absolute) + ': declaration is missing a colon: '
          + JSON.stringify(trimmed.slice(0, 80)) + '.',
      ));
      continue;
    }
    const property = trimmed.slice(0, colon).trim().toLowerCase();
    const value = trimmed.slice(colon + 1).trim();
    if (!/^(?:--[A-Za-z0-9_-]+|-?[A-Za-z][A-Za-z0-9_-]*)$/.test(property) || !value) {
      diagnostics.push(diagnostic(
        'css.syntax.invalid_declaration',
        'error',
        'Line ' + lineAt(css, absolute) + ': invalid declaration '
          + JSON.stringify(trimmed.slice(0, 80)) + '.',
      ));
      continue;
    }
    declarations.push({
      property,
      value,
      important: /!\s*important\s*$/i.test(value),
      line: lineAt(css, absolute),
    });
  }
  return declarations;
}

function unescapeCssIdentifier(value: string): string {
  return value
    .replace(/\\([0-9A-Fa-f]{1,6})\s?/g, (_match, hex: string) => {
      const codePoint = Number.parseInt(hex, 16);
      return codePoint === 0 || codePoint > 0x10ffff ? '\uFFFD' : String.fromCodePoint(codePoint);
    })
    .replace(/\\([^\r\n])/g, '$1');
}

function extractClasses(selector: string): string[] {
  const classes = new Set<string>();
  for (const match of selector.matchAll(/\.((?:\\.|[-_A-Za-z0-9\u0080-\u{10FFFF}])+)/gu)) {
    const value = unescapeCssIdentifier(match[1] ?? '');
    if (value) classes.add(value);
  }
  return [...classes];
}

export function calculateSpecificity(selector: string): CssSpecificity {
  const withoutWhere = selector.replace(/:where\((?:[^()]|\([^()]*\))*\)/g, '');
  const ids = withoutWhere.match(/#[A-Za-z0-9_-]+/g)?.length ?? 0;
  const classCount = withoutWhere.match(/\.(?:\\.|[-_A-Za-z0-9\u0080-\u{10FFFF}])+/gu)?.length ?? 0;
  const attributeCount = withoutWhere.match(/\[[^\]]+\]/g)?.length ?? 0;
  const pseudoElements = withoutWhere.match(/::[A-Za-z_-][A-Za-z0-9_-]*/g)?.length ?? 0;
  const pseudoClasses = withoutWhere
    .replace(/::[A-Za-z_-][A-Za-z0-9_-]*/g, '')
    .match(/:[A-Za-z_-][A-Za-z0-9_-]*/g)?.length ?? 0;
  const typeInput = withoutWhere
    .replace(/#[A-Za-z0-9_-]+/g, '')
    .replace(/\.(?:\\.|[-_A-Za-z0-9\u0080-\u{10FFFF}])+/gu, '')
    .replace(/\[[^\]]+\]/g, '')
    .replace(/::?[A-Za-z_-][A-Za-z0-9_-]*/g, '');
  const typeCount = [...typeInput.matchAll(/(^|[\s>+~,(])([A-Za-z][A-Za-z0-9_-]*|\*)/g)]
    .filter((match) => match[2] !== '*').length;
  const classes = classCount + attributeCount + pseudoClasses;
  const types = typeCount + pseudoElements;
  return {
    ids,
    classes,
    types,
    formatted: ids + ',' + classes + ',' + types,
    approximate: /:(?:is|not|has)\(/.test(selector),
  };
}

function projectTargetSets(project: JsonObject | undefined): CssTargetSets | undefined {
  if (!project) return undefined;
  const index = new ModelIndex(project);
  return {
    rows: new Set([
      ...(index.byType.get('row') ?? []),
      ...(index.byType.get('backpack_row') ?? []),
    ].map((entity) => entity.id)),
    choices: new Set((index.byType.get('choice') ?? []).map((entity) => entity.id)),
    addons: new Set((index.byType.get('selectable_addon') ?? []).map((entity) => entity.id)),
  };
}

function catalogMatches(className: string): string[] {
  if (CATALOG_BY_CLASS.has(className)) return ['.' + className];
  if (className.startsWith('row-')) return ['.row-{rowId}', '.row-{rowId}-bg', '.row-{rowId}-header'];
  if (className.startsWith('choice-')) return ['.choice-{choiceId}'];
  if (className.startsWith('addon-')) return ['.addon-{addonId}'];
  return [];
}

function resolveProjectClass(className: string, targets: ProjectCssTarget[]): ProjectCssTarget[] {
  return targets.filter((target) => {
    const raw = target.entityType === 'choice'
      ? 'choice-' + target.entityId
      : target.entityType === 'selectable_addon'
        ? 'addon-' + target.entityId
        : 'row-' + target.entityId;
    return className === raw
      || ((target.entityType === 'row' || target.entityType === 'backpack_row')
        && (className === raw + '-bg' || className === raw + '-header'));
  });
}

function validateProjectClass(
  className: string,
  sets: CssTargetSets | undefined,
  line: number,
  diagnostics: Diagnostic[],
): void {
  if (!sets || CATALOG_BY_CLASS.has(className)) return;
  if (className.startsWith('row-')) {
    const id = className.slice(4);
    const variantId = id.replace(/-(?:bg|header)$/, '');
    if (!sets.rows.has(id) && !sets.rows.has(variantId)) diagnostics.push(diagnostic(
      'css.selector.unknown_row',
      'warning',
      'Line ' + line + ': .' + className + ' does not match a row id in this project.',
      {
        actual: className,
        suggestion: 'Use iccplus_css_catalog with scope=project to obtain escaped selectors.',
      },
    ));
  } else if (className.startsWith('choice-')) {
    const id = className.slice(7);
    if (!sets.choices.has(id)) diagnostics.push(diagnostic(
      'css.selector.unknown_choice',
      'warning',
      'Line ' + line + ': .' + className
        + ' does not match a choice id or official state class in this project.',
      { actual: className },
    ));
  } else if (className.startsWith('addon-')) {
    const id = className.slice(6);
    if (!sets.addons.has(id)) diagnostics.push(diagnostic(
      'css.selector.unknown_addon',
      'warning',
      'Line ' + line + ': .' + className + ' does not match a selectable addon id in this project.',
      { actual: className },
    ));
  }
}

function checkGlobalRisks(css: string, diagnostics: Diagnostic[]): string[] {
  const remoteReferences = new Set<string>();
  for (const match of css.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)) {
    const url = (match[2] ?? '').trim();
    if (/^(?:https?:)?\/\//i.test(url)) remoteReferences.add(url);
    if (/^javascript:/i.test(url)) diagnostics.push(diagnostic(
      'css.security.javascript_url',
      'error',
      'Line ' + lineAt(css, match.index ?? 0) + ': javascript: URLs are not valid Custom CSS assets.',
    ));
  }
  for (const match of css.matchAll(/@import\s+(?:url\([^)]*\)|['"][^'"]+['"])/gi)) {
    const remote = match[0].match(/(?:https?:)?\/\/[^'")\s]+/i)?.[0];
    if (remote) remoteReferences.add(remote);
    diagnostics.push(diagnostic(
      'css.external.import',
      'warning',
      'Line ' + lineAt(css, match.index ?? 0)
        + ': @import depends on viewer network access and may be blocked by CORS or CSP.',
    ));
  }
  if (/expression\s*\(/i.test(css) || /(?:^|[;{])\s*(?:behavior|-moz-binding)\s*:/im.test(css)) {
    diagnostics.push(diagnostic(
      'css.security.legacy_execution',
      'error',
      'Legacy executable CSS constructs are unsupported and unsafe.',
    ));
  }
  if (remoteReferences.size > 0) diagnostics.push(diagnostic(
    'css.external.remote_asset',
    'warning',
    remoteReferences.size + ' remote CSS asset reference(s) require network access in the viewer.',
  ));
  return [...remoteReferences];
}

export function analyzeCustomCss(css: string, project?: JsonObject): CustomCssAnalysis {
  const delimiterScan = scanDelimiters(css);
  const diagnostics = [...delimiterScan.diagnostics];
  const projectTargets = project ? listProjectCssTargets(project) : [];
  const targetSets = projectTargetSets(project);
  const ruleDetails: CssRuleAnalysis[] = [];
  const remoteReferences = checkGlobalRisks(css, diagnostics);

  const parseRegion = (start: number, end: number): void => {
    let cursor = skipTrivia(css, start, end);
    while (cursor < end) {
      const boundary = findBoundary(css, cursor, end);
      if (!boundary) {
        const tail = css.slice(cursor, end).replace(/\/\*[\s\S]*?\*\//g, ' ').trim();
        if (tail) diagnostics.push(diagnostic(
          'css.syntax.unexpected_statement',
          'error',
          'Line ' + lineAt(css, cursor) + ': unexpected CSS statement '
            + JSON.stringify(tail.slice(0, 80)) + '.',
        ));
        break;
      }
      const prelude = css.slice(cursor, boundary.index).replace(/\/\*[\s\S]*?\*\//g, ' ').trim();
      if (boundary.character === ';') {
        if (prelude && !prelude.startsWith('@')) diagnostics.push(diagnostic(
          'css.syntax.unexpected_statement',
          'error',
          'Line ' + lineAt(css, cursor) + ': unexpected CSS statement '
            + JSON.stringify(prelude.slice(0, 80)) + '.',
        ));
        cursor = skipTrivia(css, boundary.index + 1, end);
        continue;
      }
      const close = delimiterScan.bracePairs.get(boundary.index);
      if (close === undefined || close > end) break;
      const lower = prelude.toLowerCase();
      if (/^@(media|supports|layer|container|document|scope)\b/.test(lower)) {
        parseRegion(boundary.index + 1, close);
      } else if (!/^@(keyframes|-webkit-keyframes)\b/.test(lower)) {
        const declarations = parseDeclarations(css, boundary.index + 1, close, diagnostics);
        if (!prelude.startsWith('@')) {
          const selectors: CssSelectorAnalysis[] = [];
          for (const rawSelector of splitTopLevel(prelude, ',')) {
            const selector = rawSelector.trim();
            if (!selector) {
              diagnostics.push(diagnostic(
                'css.syntax.empty_selector',
                'error',
                'Line ' + lineAt(css, cursor) + ': empty selector.',
              ));
              continue;
            }
            const classes = extractClasses(selector);
            for (const className of classes) {
              validateProjectClass(className, targetSets, lineAt(css, cursor), diagnostics);
            }
            if (/^(?:html|body|:root)\b/.test(selector) || selector.startsWith('*')) diagnostics.push(diagnostic(
              'css.selector.broad_scope',
              'warning',
              'Line ' + lineAt(css, cursor) + ': ' + JSON.stringify(selector)
                + ' has broad viewer-wide scope.',
            ));
            selectors.push({
              selector,
              line: lineAt(css, cursor),
              specificity: calculateSpecificity(selector),
              classes,
              catalogMatches: [...new Set(classes.flatMap(catalogMatches))],
              projectMatches: classes.flatMap((className) =>
                resolveProjectClass(className, projectTargets)
              ),
            });
          }
          const inlineTarget = selectors.some((selector) =>
            selector.catalogMatches.some((match) =>
              CSS_CATALOG.find((entry) => entry.selector === match)?.inlineStyleRisk
            )
          );
          const collisions = declarations.filter((declaration) =>
            INLINE_STYLE_PROPERTIES.has(declaration.property) && !declaration.important
          );
          if (inlineTarget && collisions.length > 0) diagnostics.push(diagnostic(
            'css.cascade.inline_style_conflict',
            'warning',
            'Line ' + lineAt(css, cursor) + ': '
              + collisions.map((item) => item.property).join(', ')
              + ' may lose to ICC Plus inline styles.',
            {
              suggestion: 'Use a narrower state/id selector and add !important only where the official inline style must be overridden.',
            },
          ));
          ruleDetails.push({ line: lineAt(css, cursor), selectors, declarations });
        }
      }
      cursor = skipTrivia(css, close + 1, end);
    }
  };

  parseRegion(0, css.length);
  const allDeclarations = ruleDetails.flatMap((rule) => rule.declarations);
  const importantDeclarations = allDeclarations.filter((item) => item.important).length;
  if (importantDeclarations > 20) diagnostics.push(diagnostic(
    'css.cascade.excessive_important',
    'warning',
    importantDeclarations
      + ' declarations use !important; this can make state-specific overrides difficult to maintain.',
  ));
  const errors = diagnostics.filter((item) => item.severity === 'error').length;
  const warnings = diagnostics.filter((item) => item.severity === 'warning').length;
  const matchedTargets = new Set(ruleDetails.flatMap((rule) =>
    rule.selectors.flatMap((selector) =>
      selector.projectMatches.map((target) => target.entityType + ':' + target.entityId)
    )
  ));
  return {
    valid: errors === 0,
    bytes: Buffer.byteLength(css),
    lines: css === '' ? 0 : css.split('\n').length,
    rules: ruleDetails.length,
    selectors: ruleDetails.reduce((sum, rule) => sum + rule.selectors.length, 0),
    declarations: allDeclarations.length,
    importantDeclarations,
    remoteReferences,
    matchedProjectTargets: matchedTargets.size,
    errors,
    warnings,
    diagnostics,
    ruleDetails,
  };
}

export function customCssSummary(project: JsonObject): JsonObject {
  const css = asString(project.customCSS);
  const analysis = analyzeCustomCss(css, project);
  return {
    present: css.length > 0,
    bytes: analysis.bytes,
    rules: analysis.rules,
    selectors: analysis.selectors,
    matchedProjectTargets: analysis.matchedProjectTargets,
    errors: analysis.errors,
    warnings: analysis.warnings,
  };
}

export function validateCustomCss(project: JsonObject): Diagnostic[] {
  return analyzeCustomCss(asString(project.customCSS), project).diagnostics;
}
