import { describe, expect, it } from 'vitest';
import { createDefaultProject } from '../src/domain/factories.js';
import { ModelIndex } from '../src/domain/model-index.js';
import {
  duplicateEntity,
  insertEntity,
  removeEntity,
  updateEntity,
} from '../src/domain/mutations.js';
import { normalizeProject } from '../src/domain/normalize.js';
import { ProjectStore } from '../src/domain/project-store.js';
import { validateProject } from '../src/domain/validation.js';

describe('ICC Plus model operations', () => {
  it('creates a complete reference-safe authoring graph', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'point', values: { id: 'gold', name: 'Gold' } });
    insertEntity(project, { type: 'group', values: { id: 'weapons', name: 'Weapons' } });
    insertEntity(project, { type: 'row', values: { id: 'shop', title: 'Shop', groups: ['weapons'] } });
    insertEntity(project, {
      type: 'choice',
      parent: 'shop',
      values: { id: 'sword', title: 'Sword', groups: ['weapons'] },
    });
    insertEntity(project, {
      type: 'score',
      parent: 'sword',
      values: { id: 'gold', value: 5 },
    });
    insertEntity(project, {
      type: 'requirement',
      parent: 'sword',
      values: { type: 'points', reqId: 'gold', reqPoints: 5, operator: '2' },
    });
    const report = validateProject(project);
    const index = new ModelIndex(project);

    expect(report.valid).toBe(true);
    expect(index.summary()).toMatchObject({
      rows: 1,
      choices: 1,
      scores: 1,
      requirements: 1,
      points: 1,
      groups: 1,
    });
    expect(index.one('weapons', 'group')?.value.elements).toContain('sword');
    expect(index.one('weapons', 'group')?.value.rowElements).toContain('shop');
  });

  it('rewrites references when an id changes and remaps internal duplicate ids', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'row', values: { id: 'row-a' } });
    insertEntity(project, { type: 'choice', parent: 'row-a', values: { id: 'choice-a' } });
    insertEntity(project, {
      type: 'requirement',
      parent: 'choice-a',
      values: { type: 'id', reqId: 'choice-a/ON#2' },
    });
    updateEntity(project, {
      reference: 'choice-a',
      values: { id: 'choice-renamed' },
      rewriteIdReferences: true,
    });
    const duplicate = duplicateEntity(project, {
      reference: 'row-a',
      remapInternalReferences: true,
    });

    const index = new ModelIndex(project);
    expect(index.one('choice-renamed', 'choice')).toBeDefined();
    expect(index.one('choice-renamed', 'choice')?.value.requireds).toMatchObject([
      { reqId: 'choice-renamed/ON#2' },
    ]);
    expect(duplicate.entity.id).not.toBe('row-a');
    expect(validateProject(project).valid).toBe(true);
  });

  it('rewrites every point reference shape when a point id changes', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'point', values: { id: 'gold' } });
    insertEntity(project, { type: 'row', values: { id: 'shop', pointTypeRandom: 'gold' } });
    insertEntity(project, { type: 'choice', parent: 'shop', values: { id: 'sword' } });
    insertEntity(project, { type: 'score', parent: 'sword', values: { id: 'gold', value: 5 } });
    insertEntity(project, {
      type: 'requirement',
      parent: 'sword',
      values: { type: 'points', reqId: 'gold', reqPoints: 1 },
    });
    insertEntity(project, {
      type: 'requirement',
      parent: 'sword',
      values: {
        type: 'pointCompare',
        reqId: 'gold',
        reqId1: 'gold',
        more: [{ id: 'gold', type: 'id', operator: '1', priority: 1 }],
      },
    });

    updateEntity(project, {
      reference: 'gold',
      type: 'point',
      values: { id: 'credits' },
      rewriteIdReferences: true,
    });

    const index = new ModelIndex(project);
    expect(index.one('shop', 'row')?.value.pointTypeRandom).toBe('credits');
    expect(index.byType.get('score')?.[0]?.value.id).toBe('credits');
    expect(index.byType.get('requirement')?.[0]?.value.reqId).toBe('credits');
    expect(index.byType.get('requirement')?.[1]?.value).toMatchObject({
      reqId: 'credits',
      reqId1: 'credits',
      more: [{ id: 'credits' }],
    });
    expect(validateProject(project).valid).toBe(true);
  });

  it('rewrites persisted viewer-state references when a selectable id changes', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'row', values: { id: 'row-a' } });
    insertEntity(project, { type: 'choice', parent: 'row-a', values: { id: 'source' } });
    insertEntity(project, {
      type: 'choice',
      parent: 'row-a',
      values: {
        id: 'target',
        appliedDisChoices: ['source'],
        activatedRandom: ['source/ON#2'],
        activatedRandomMul: [['source/RON#3']],
        linkedObjects: ['source'],
        templateStack: [{ id: 'source', data: 2 }],
        widthStack: [{ id: 'source', data: 'col-md-6' }],
      },
    });
    insertEntity(project, {
      type: 'score',
      parent: 'target',
      values: {
        discounts: [{
          id: 'source',
          state: 1,
          stackable: false,
          stack: 0,
          operator: '1',
          value: 1,
          count: 0,
          useLowLimit: false,
          lowLimit: 0,
          showDiscount: false,
          afterText: '',
          beforeText: '',
          replaceText: false,
          consolidate: false,
          hideValue: false,
          hideIcon: false,
        }],
      },
    });

    updateEntity(project, {
      reference: 'source',
      type: 'choice',
      values: { id: 'renamed' },
      rewriteIdReferences: true,
    });

    const target = new ModelIndex(project).one('target', 'choice')!.value;
    expect(target).toMatchObject({
      appliedDisChoices: ['renamed'],
      activatedRandom: ['renamed/ON#2'],
      activatedRandomMul: [['renamed/RON#3']],
      linkedObjects: ['renamed'],
      templateStack: [{ id: 'renamed' }],
      widthStack: [{ id: 'renamed' }],
      scores: [{ discounts: [{ id: 'renamed' }] }],
    });
    expect(validateProject(project).valid).toBe(true);
  });

  it('repairs legacy shapes without silently pruning modeled content', () => {
    const project = createDefaultProject({
      rows: [{
        id: 'legacy-row',
        index: 9,
        objects: [{
          id: 'legacy-choice',
          index: 7,
          scores: [],
          addons: [{ id: '', requireds: [] }],
          groups: [],
          requireds: [{
            required: true,
            type: 'or',
            orRequired: [{ req: 'legacy-choice' }],
          }],
        }],
        requireds: [],
      }],
    });
    const normalized = normalizeProject(project);
    const row = new ModelIndex(normalized.project).one('legacy-row', 'row');
    const choice = new ModelIndex(normalized.project).one('legacy-choice', 'choice');

    expect(row?.value.index).toBe(0);
    expect(choice?.value.index).toBe(0);
    expect((choice?.value.addons as Array<{ parentId: string }>)[0]?.parentId).toBe('legacy-choice');
    expect((choice?.value.requireds as Array<{ orRequireds: unknown[] }>)[0]?.orRequireds).toHaveLength(1);
    expect(normalized.changes.length).toBeGreaterThan(0);
  });

  it('migrates pre-v2.10 score recalculation semantics and new global defaults', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'row', values: { id: 'legacy-row' } });
    insertEntity(project, { type: 'choice', parent: 'legacy-row', values: { id: 'legacy-choice' } });
    insertEntity(project, {
      type: 'score',
      parent: 'legacy-choice',
      values: { idx: 'legacy-score', isNotRecalculatable: true },
    });
    insertEntity(project, {
      type: 'selectable_addon',
      parent: 'legacy-choice',
      values: { id: 'legacy-addon' },
    });
    insertEntity(project, {
      type: 'score',
      parent: 'legacy-addon',
      values: { idx: 'legacy-addon-score', isNotRecalculatable: true },
    });

    project.version = '2.9.29';
    delete project.hideRowMenu;
    const legacyIndex = new ModelIndex(project);
    delete legacyIndex.one('legacy-score', 'score')!.value.isNotRecalculateSelf;
    delete legacyIndex.one('legacy-addon-score', 'score')!.value.isNotRecalculateSelf;
    expect(validateProject(project).diagnostics.some((item) =>
      item.path === '/hideRowMenu'
    )).toBe(false);

    const normalized = normalizeProject(project);
    const index = new ModelIndex(normalized.project);
    expect(index.one('legacy-score', 'score')?.value).toMatchObject({
      isNotRecalculatable: true,
      isNotRecalculateSelf: true,
    });
    expect(index.one('legacy-addon-score', 'score')?.value).toMatchObject({
      isNotRecalculatable: true,
      isNotRecalculateSelf: true,
    });
    expect(normalized.project.hideRowMenu).toBe(false);
    expect(normalized.changes).toEqual(expect.arrayContaining([
      'Initialized /hideRowMenu from ICC Plus v2.10+ defaults.',
    ]));
  });

  it('merges and repairs group-to-design membership stored on either side', () => {
    const project = createDefaultProject();
    insertEntity(project, {
      type: 'choice_design_group',
      values: { id: 'hero-style', groupElements: [] },
    });
    insertEntity(project, { type: 'group', values: { id: 'heroes', designGroups: ['hero-style'] } });
    insertEntity(project, {
      type: 'row_design_group',
      values: { id: 'hero-rows', groupElements: ['heroes'] },
    });

    const normalized = normalizeProject(project).project;
    const index = new ModelIndex(normalized);
    expect(index.one('heroes', 'group')?.value.designGroups).toEqual([
      'hero-style',
      'hero-rows',
    ]);
    expect(index.one('hero-style', 'choice_design_group')?.value.groupElements).toEqual(['heroes']);
    expect(index.one('hero-rows', 'row_design_group')?.value.groupElements).toEqual(['heroes']);
    expect(validateProject(normalized).warnings).toBe(0);
  });

  it('handles category compound identities and their feature references', () => {
    const project = createDefaultProject();
    const first = insertEntity(project, {
      type: 'category',
      values: { type: 'point', name: 'Economy' },
    });
    const second = duplicateEntity(project, {
      reference: first.entity.id,
      type: 'category',
    });
    insertEntity(project, {
      type: 'point',
      values: { id: 'gold', category: first.entity.value.idx },
    });
    updateEntity(project, {
      reference: first.entity.id,
      type: 'category',
      values: { idx: 8 },
      rewriteIdReferences: true,
    });

    const index = new ModelIndex(project);
    expect(first.entity.id).toBe('point:0');
    expect(second.entity.id).toBe('point:1');
    expect(index.one('point:8', 'category')).toBeDefined();
    expect(index.one('gold', 'point')?.value.category).toBe(8);
    expect(validateProject(project).valid).toBe(true);
  });

  it('rejects deletion that introduces a dangling reference under the safe policy', () => {
    const store = new ProjectStore();
    const session = store.create();
    store.transact(session.id, { label: 'row' }, (draft) =>
      insertEntity(draft, { type: 'row', values: { id: 'row-a' } })
    );
    store.transact(session.id, { label: 'choice' }, (draft) =>
      insertEntity(draft, { type: 'choice', parent: 'row-a', values: { id: 'choice-a' } })
    );
    store.transact(session.id, { label: 'dependent row' }, (draft) =>
      insertEntity(draft, {
        type: 'row',
        values: {
          id: 'row-b',
          requireds: [{
            required: true,
            requireds: [],
            orRequired: [],
            orRequireds: [],
            id: '',
            type: 'id',
            reqId: 'choice-a',
            reqId1: '',
            reqId2: '',
            reqId3: '',
            reqPoints: 0,
            showRequired: false,
            operator: '1',
            beforeText: '',
            afterText: '',
            more: [],
          }],
        },
      })
    );
    expect(() => store.transact(
      session.id,
      { label: 'unsafe delete', validationPolicy: 'no_new_errors' },
      (draft) => removeEntity(draft, { reference: 'choice-a' }),
    )).toThrow('introduced 1 new validation error');
    expect(new ModelIndex(store.get(session.id).data).one('choice-a')).toBeDefined();
  });
});
