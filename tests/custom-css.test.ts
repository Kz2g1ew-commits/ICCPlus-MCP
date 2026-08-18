import { describe, expect, it } from 'vitest';
import {
  analyzeCustomCss,
  calculateSpecificity,
  getCssCatalog,
  listProjectCssTargets,
} from '../src/domain/custom-css.js';
import { createDefaultProject } from '../src/domain/factories.js';
import { insertEntity } from '../src/domain/mutations.js';
import { validateProject } from '../src/domain/validation.js';

function styledProject() {
  const project = createDefaultProject();
  insertEntity(project, { type: 'row', values: { id: 'intro', title: 'Introduction' } });
  insertEntity(project, {
    type: 'choice',
    parent: 'intro',
    values: { id: 'hero card', title: 'Hero' },
  });
  insertEntity(project, {
    type: 'choice',
    parent: 'intro',
    values: { id: '1hero', title: 'Numeric Hero' },
  });
  insertEntity(project, {
    type: 'choice',
    parent: 'intro',
    values: { id: '올빼미', title: 'Owl' },
  });
  insertEntity(project, {
    type: 'selectable_addon',
    parent: 'hero card',
    values: { id: 'hero addon', title: 'Hero Addon' },
  });
  return project;
}

describe('ICC Plus Custom CSS support', () => {
  it('builds a source-backed catalog from official viewer markup', () => {
    const catalog = getCssCatalog();
    const row = catalog.find((entry) => entry.selector === '.row-{rowId}');
    const rowBg = catalog.find((entry) => entry.selector === '.row-bg-{rowId}');
    const choice = catalog.find((entry) => entry.selector === '.choice-{choiceId}');
    const selected = catalog.find((entry) => entry.selector === '.choice-selected');
    const addonSelected = catalog.find((entry) => entry.selector === '.addon-selected');

    expect(catalog.length).toBeGreaterThan(30);
    expect(row?.sources.some((source) =>
      source.file === 'ICCPlus_Viewer/src/lib/viewer/AppRow.svelte' && source.line > 0
    )).toBe(true);
    expect(rowBg?.sources.some((source) =>
      source.file === 'ICCPlus_Viewer/src/lib/viewer/AppRow.svelte' && source.line > 0
    )).toBe(true);
    expect(choice?.sources.some((source) =>
      source.file === 'ICCPlus_Viewer/src/lib/viewer/AppObject.svelte' && source.line > 0
    )).toBe(true);
    expect(selected?.kind).toBe('state');
    expect(addonSelected?.kind).toBe('state');
  });

  it('emits CSS-escaped project selectors and resolves them during analysis', () => {
    const project = styledProject();
    const target = listProjectCssTargets(project).find((item) => item.entityId === 'hero card');
    const rowTarget = listProjectCssTargets(project).find((item) => item.entityId === 'intro');
    const addonTarget = listProjectCssTargets(project).find((item) => item.entityId === 'hero addon');
    expect(target?.selector).toBe('.choice-hero\\ card');
    expect(rowTarget?.variants).toEqual(expect.arrayContaining([
      '.row-intro-bg',
      '.row-bg-intro',
      '.row-intro-header',
      '.row-header-intro',
    ]));
    expect(addonTarget?.selector).toBe('.addon-hero\\ addon');
    expect(listProjectCssTargets(project).find((item) => item.entityId === '1hero')?.selector)
      .toBe('.choice-1hero');
    expect(listProjectCssTargets(project).find((item) => item.entityId === '올빼미')?.selector)
      .toBe('.choice-올빼미');

    const analysis = analyzeCustomCss(
      '.choice-hero\\ card.choice-selected { background: #111 !important; color: white; }',
      project,
    );
    expect(analysis.valid).toBe(true);
    expect(analysis.matchedProjectTargets).toBe(1);
    expect(analysis.ruleDetails[0]?.selectors[0]?.specificity.formatted).toBe('0,2,0');
    expect(analysis.diagnostics.some((item) => item.code === 'css.selector.unknown_choice')).toBe(false);

    const unicode = analyzeCustomCss('.choice-올빼미 { outline: 1px solid; }', project);
    expect(unicode.matchedProjectTargets).toBe(1);

    const v210 = analyzeCustomCss(
      '.row-bg-intro { backdrop-filter: blur(8px); }\n'
        + '.row-header-intro { color: white; }\n'
        + '.addon-hero\\ addon.addon-selected.addon-enabled { outline: 1px solid; }',
      project,
    );
    expect(v210.matchedProjectTargets).toBe(2);
    expect(v210.diagnostics.map((item) => item.code)).not.toContain('css.selector.unknown_row');
    expect(v210.diagnostics.map((item) => item.code)).not.toContain('css.selector.unknown_addon');
  });

  it('parses nested rules and reports unresolved ids and inline-style conflicts', () => {
    const project = styledProject();
    const analysis = analyzeCustomCss(
      '@media (max-width: 700px) { .row-intro-bg { padding: 1rem; } }\n'
        + '.choice-missing { color: red; }',
      project,
    );

    expect(analysis.rules).toBe(2);
    expect(analysis.diagnostics.map((item) => item.code)).toContain('css.cascade.inline_style_conflict');
    expect(analysis.diagnostics.map((item) => item.code)).toContain('css.selector.unknown_choice');
  });

  it('rejects malformed and executable legacy CSS through project validation', () => {
    const project = styledProject();
    project.customCSS = '.choice-hero\\ card { color red; behavior: url(x.htc); }';
    const analysis = analyzeCustomCss(String(project.customCSS), project);
    const report = validateProject(project);

    expect(analysis.valid).toBe(false);
    expect(analysis.diagnostics.map((item) => item.code)).toContain('css.syntax.missing_colon');
    expect(analysis.diagnostics.map((item) => item.code)).toContain('css.security.legacy_execution');
    expect(report.valid).toBe(false);
    expect(report.diagnostics.some((item) => item.path === '/customCSS')).toBe(true);
  });

  it('flags external dependencies and computes useful selector specificity', () => {
    const analysis = analyzeCustomCss(
      '@import "https://example.com/theme.css";\n'
        + 'body .choice-selected:hover { background-image: url(//cdn.example.com/x.png); }',
    );

    expect(analysis.remoteReferences).toEqual(
      expect.arrayContaining(['https://example.com/theme.css', '//cdn.example.com/x.png']),
    );
    expect(analysis.diagnostics.map((item) => item.code)).toContain('css.external.import');
    expect(analysis.diagnostics.map((item) => item.code)).toContain('css.external.remote_asset');
    expect(calculateSpecificity('body .choice-selected:hover')).toMatchObject({
      ids: 0,
      classes: 2,
      types: 1,
      formatted: '0,2,1',
    });
  });
});
