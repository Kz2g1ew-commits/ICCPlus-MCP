import { describe, expect, it } from 'vitest';
import { createDefaultProject } from '../src/domain/factories.js';
import { insertEntity } from '../src/domain/mutations.js';
import { evaluateRequirements } from '../src/domain/requirements.js';
import type { JsonObject } from '../src/domain/types.js';

function requirement(type: string, values: JsonObject = {}): JsonObject {
  return {
    required: true,
    requireds: [],
    orRequired: [],
    orRequireds: [],
    id: '',
    type,
    reqId: '',
    reqId1: '',
    reqId2: '',
    reqId3: '',
    reqPoints: 0,
    showRequired: false,
    operator: '1',
    beforeText: '',
    afterText: '',
    more: [],
    ...values,
  };
}

describe('requirement evaluator', () => {
  it('evaluates every ICC Plus requirement family with traces', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'point', values: { id: 'gold', startingSum: 10 } });
    insertEntity(project, { type: 'point', values: { id: 'silver', startingSum: 4 } });
    insertEntity(project, { type: 'word', values: { id: 'name', replaceText: 'Ada' } });
    insertEntity(project, { type: 'row', values: { id: 'row-a' } });
    insertEntity(project, { type: 'choice', parent: 'row-a', values: { id: 'choice-a' } });
    insertEntity(project, {
      type: 'group',
      values: { id: 'group-a', elements: ['choice-a'], rowElements: ['row-a'] },
    });
    insertEntity(project, {
      type: 'global_requirement',
      values: {
        id: 'global-a',
        requireds: [requirement('id', { reqId: 'choice-a' })],
      },
    });

    const requirements = [
      requirement('id', { reqId: 'choice-a' }),
      requirement('points', { reqId: 'gold', reqPoints: 5, operator: '2' }),
      requirement('pointCompare', {
        reqId: 'gold',
        reqId1: 'silver',
        operator: '1',
        more: [{ operator: '1', points: 2 }],
      }),
      requirement('or', {
        orNum: 1,
        orRequireds: [requirement('id', { reqId: 'choice-a' })],
      }),
      requirement('selFromGroups', {
        selGroups: ['group-a'],
        selNum: 1,
        selFromOperators: '1',
      }),
      requirement('selFromRows', {
        selRows: ['row-a'],
        selNum: 1,
        selFromOperators: '1',
      }),
      requirement('selFromWhole', { selNum: 1, selFromOperators: '1' }),
      requirement('gid', { reqId: 'global-a' }),
      requirement('word', { reqId: 'name', orRequired: [{ req: 'Ada' }] }),
      requirement('id', { required: false, reqId: 'choice-b' }),
    ];
    const evaluation = evaluateRequirements(project, requirements, {
      selected: { 'choice-a': 1 },
    });

    expect(evaluation.met).toBe(true);
    expect(evaluation.traces).toHaveLength(requirements.length);
    expect(evaluation.traces.every((trace) => trace.result)).toBe(true);
  });

  it('uses nested requirements as conditions for whether a parent participates', () => {
    const project = createDefaultProject();
    const conditional = requirement('id', {
      reqId: 'missing-parent',
      requireds: [requirement('id', { reqId: 'missing-prerequisite' })],
    });
    expect(evaluateRequirements(project, [conditional]).met).toBe(true);
  });

  it('matches ICC Plus point-comparison operator and explicit priority semantics', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'point', values: { id: 'left', startingSum: 20 } });
    insertEntity(project, { type: 'point', values: { id: 'base', startingSum: 2 } });
    const comparison = requirement('pointCompare', {
      reqId: 'left',
      reqId1: 'base',
      operator: '3',
      more: [
        { operator: '1', points: 3, priority: 2 },
        { operator: '3', points: 4, priority: 3 },
      ],
    });

    const evaluation = evaluateRequirements(project, [comparison]);
    expect(evaluation.met).toBe(true);
    expect(evaluation.traces[0]?.detail).toContain('computed 20');
  });

  it('counts active multi-select entities once per row and excludes backpack rows from whole-project counts', () => {
    const project = createDefaultProject();
    insertEntity(project, { type: 'row', values: { id: 'main' } });
    insertEntity(project, { type: 'choice', parent: 'main', values: { id: 'multi' } });
    insertEntity(project, { type: 'backpack_row', values: { id: 'pack' } });
    insertEntity(project, { type: 'choice', parent: 'pack', values: { id: 'stored' } });

    const rowCount = requirement('selFromRows', {
      selRows: ['main'],
      selNum: 1,
      selFromOperators: '2',
    });
    const wholeCount = requirement('selFromWhole', {
      selNum: 1,
      selFromOperators: '2',
    });
    const evaluation = evaluateRequirements(project, [rowCount, wholeCount], {
      selected: { multi: 4, stored: 1 },
    });

    expect(evaluation.met).toBe(true);
    expect(evaluation.traces.map((trace) => trace.detail)).toEqual([
      '1 selected entities in 1 row(s)',
      '1 selected entities in all rows',
    ]);
  });
});
