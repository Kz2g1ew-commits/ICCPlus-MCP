import { asArray, asNumber, asObjectArray, asString } from './json.js';
import { ModelIndex } from './model-index.js';
import type { JsonObject, RequirementState } from './types.js';

export interface RequirementTrace {
  path: string;
  type: string;
  required: boolean;
  result: boolean;
  detail: string;
  children: RequirementTrace[];
}

export interface RequirementEvaluation {
  met: boolean;
  traces: RequirementTrace[];
  state: Required<RequirementState>;
}

interface RuntimeState {
  selected: Record<string, number>;
  points: Record<string, number>;
  variables: Record<string, boolean>;
  words: Record<string, string>;
  rowSelections: Record<string, number>;
}

function compare(left: number, right: number, operator: string): boolean {
  switch (operator) {
    case '1': return left > right;
    case '2': return left >= right;
    case '3': return left === right;
    case '4': return left <= right;
    case '5': return left < right;
    case '6': return left !== right;
    default: return false;
  }
}

function selectionCompare(count: number, target: number, operator: string): boolean {
  switch (operator || '1') {
    case '1': return !(target > count || (target === 0 && count > 0));
    case '2': return target === count;
    case '3': return !(target < count || (target === 0 && count > 0));
    case '4': return target !== count;
    default: return false;
  }
}

interface ExpressionNode {
  left: number | ExpressionNode;
  operator: string;
  right: number | ExpressionNode;
  priority: number;
}

function expressionPriority(operator: string, priority = 1): number {
  return priority * 10 + (['3', '4', '5'].includes(operator) ? 1 : 2);
}

function evaluateExpression(value: number | ExpressionNode): number {
  if (typeof value === 'number') return value;
  const left = evaluateExpression(value.left);
  const right = evaluateExpression(value.right);
  switch (value.operator) {
    case '1': return left + right;
    case '2': return left - right;
    case '3': return left * right;
    case '4': return right === 0 ? left : left / right;
    case '5': return right === 0 ? left : left % right;
    default: return left;
  }
}

function arithmetic(
  initial: number,
  operations: Array<{ operator: string; value: number; priority: number }>,
): number {
  let current: number | ExpressionNode = initial;
  for (const operation of operations) {
    const priority = expressionPriority(operation.operator, operation.priority);
    const node: ExpressionNode = {
      left: current,
      operator: operation.operator,
      right: operation.value,
      priority,
    };
    if (typeof current !== 'number' && priority < current.priority) {
      current = {
        left: current.left,
        operator: current.operator,
        right: {
          left: current.right,
          operator: operation.operator,
          right: operation.value,
          priority,
        },
        priority: current.priority,
      };
    } else {
      current = node;
    }
  }
  return evaluateExpression(current);
}

function buildState(project: JsonObject, supplied: RequirementState): RuntimeState {
  const index = new ModelIndex(project);
  const selected = { ...(supplied.selected ?? {}) };
  const points = Object.fromEntries(
    (index.byType.get('point') ?? []).map((entity) => [
      entity.id,
      asNumber(entity.value.startingSum),
    ]),
  );
  Object.assign(points, supplied.points ?? {});
  const variables = Object.fromEntries(
    (index.byType.get('variable') ?? []).map((entity) => [
      entity.id,
      entity.value.isTrue === true,
    ]),
  );
  Object.assign(variables, supplied.variables ?? {});
  const words = Object.fromEntries(
    (index.byType.get('word') ?? []).map((entity) => [
      entity.id,
      asString(entity.value.replaceText),
    ]),
  );
  Object.assign(words, supplied.words ?? {});
  const rowSelections: Record<string, number> = {};
  for (const row of [...(index.byType.get('row') ?? []), ...(index.byType.get('backpack_row') ?? [])]) {
    rowSelections[row.id] = (index.byType.get('choice') ?? [])
      .filter((choice) => choice.parentId === row.id)
      .filter((choice) => (selected[choice.id] ?? 0) !== 0)
      .length;
  }
  Object.assign(rowSelections, supplied.rowSelections ?? {});
  for (const [id, value] of Object.entries(variables)) {
    if (value && selected[id] === undefined) selected[id] = 1;
  }
  return { selected, points, variables, words, rowSelections };
}

function evaluateOne(
  project: JsonObject,
  requirement: JsonObject,
  path: string,
  state: RuntimeState,
  globalStack: string[],
): RequirementTrace {
  const index = new ModelIndex(project);
  const type = asString(requirement.type);
  const required = requirement.required !== false;
  const children = asObjectArray(requirement.requireds).map((child, childIndex) =>
    evaluateOne(project, child, `${path}/requireds/${childIndex}`, state, globalStack)
  );
  let result = false;
  let detail = '';

  if (required) {
    switch (type) {
      case 'id': {
        const [id = '', countText = '1'] = asString(requirement.reqId).split('/ON#');
        const count = Number(countText);
        result = (state.selected[id] ?? 0) >= (Number.isFinite(count) ? count : 1);
        detail = `${id} selected ${state.selected[id] ?? 0} time(s)`;
        break;
      }
      case 'points': {
        const id = asString(requirement.reqId);
        const current = state.points[id];
        result = current !== undefined && compare(
          current,
          asNumber(requirement.reqPoints),
          asString(requirement.operator, '1'),
        );
        detail = `${id}=${String(current)} compared with ${asNumber(requirement.reqPoints)}`;
        break;
      }
      case 'or': {
        const alternatives = asObjectArray(requirement.orRequireds).map((child, childIndex) =>
          evaluateOne(project, child, `${path}/orRequireds/${childIndex}`, state, globalStack)
        );
        children.push(...alternatives);
        const met = alternatives.filter((item) => item.result).length;
        const threshold = asNumber(requirement.orNum, 1);
        result = met >= threshold;
        detail = `${met} of ${alternatives.length} met; need ${threshold}`;
        break;
      }
      case 'pointCompare': {
        const leftId = asString(requirement.reqId);
        const rightId = asString(requirement.reqId1);
        const left = state.points[leftId];
        const right = state.points[rightId];
        const operations = asObjectArray(requirement.more).map((operation) => {
          const id = asString(operation.id);
          return {
            operator: asString(operation.operator, '1'),
            value: id ? (state.points[id] ?? 0) : asNumber(operation.points),
            priority: asNumber(operation.priority, 1),
          };
        });
        const computed = arithmetic(right ?? 0, operations);
        result = left !== undefined
          && right !== undefined
          && compare(left, computed, asString(requirement.operator));
        detail = `${leftId}=${String(left)} compared with computed ${computed}`;
        break;
      }
      case 'selFromGroups': {
        const groupIds = asArray(requirement.selGroups).filter((id): id is string => typeof id === 'string');
        let count = 0;
        for (const groupId of groupIds) {
          const group = index.one(groupId, 'group');
          for (const id of asArray(group?.value.elements).filter((item): item is string => typeof item === 'string')) {
            if ((state.selected[id] ?? 0) > 0) count += 1;
          }
        }
        result = selectionCompare(
          count,
          asNumber(requirement.selNum, 1),
          asString(requirement.selFromOperators, '1'),
        );
        detail = `${count} selected entities in ${groupIds.length} group(s)`;
        break;
      }
      case 'selFromRows': {
        const rowIds = asArray(requirement.selRows).filter((id): id is string => typeof id === 'string');
        const count = rowIds.reduce((total, id) => total + (state.rowSelections[id] ?? 0), 0);
        result = selectionCompare(
          count,
          asNumber(requirement.selNum, 1),
          asString(requirement.selFromOperators, '1'),
        );
        detail = `${count} selected entities in ${rowIds.length} row(s)`;
        break;
      }
      case 'selFromWhole': {
        const count = (index.byType.get('row') ?? [])
          .reduce((total, row) => total + (state.rowSelections[row.id] ?? 0), 0);
        result = selectionCompare(
          count,
          asNumber(requirement.selNum, 1),
          asString(requirement.selFromOperators, '1'),
        );
        detail = `${count} selected entities in all rows`;
        break;
      }
      case 'gid': {
        const id = asString(requirement.reqId);
        if (globalStack.includes(id)) {
          result = false;
          detail = `cycle detected: ${[...globalStack, id].join(' -> ')}`;
        } else {
          const global = index.one(id, 'global_requirement');
          if (global) {
            const evaluated = evaluateList(
              project,
              asObjectArray(global.value.requireds),
              `${global.path}/requireds`,
              state,
              [...globalStack, id],
            );
            children.push(...evaluated.traces);
            result = evaluated.met;
            detail = `global requirement ${id}`;
          } else {
            detail = `global requirement ${id} not found`;
          }
        }
        break;
      }
      case 'word': {
        const id = asString(requirement.reqId);
        const expected = new Set(
          asObjectArray(requirement.orRequired)
            .map((item) => asString(item.req))
            .filter(Boolean),
        );
        result = expected.has(state.words[id] ?? '');
        detail = `${id}=${JSON.stringify(state.words[id] ?? '')}`;
        break;
      }
      default:
        detail = `unknown requirement type ${JSON.stringify(type)}`;
    }
  } else {
    switch (type) {
      case 'id': {
        const [id = '', countText = '1'] = asString(requirement.reqId).split('/ON#');
        const count = Number(countText);
        result = (state.selected[id] ?? 0) < (Number.isFinite(count) ? count : 1);
        detail = `${id} not selected at required count`;
        break;
      }
      case 'or': {
        const alternatives = asObjectArray(requirement.orRequireds).map((child, childIndex) =>
          evaluateOne(project, child, `${path}/orRequireds/${childIndex}`, state, globalStack)
        );
        children.push(...alternatives);
        const met = alternatives.filter((item) => item.result).length;
        const threshold = asNumber(requirement.orNum, 1);
        result = met < alternatives.length - threshold + 1;
        detail = `${met} alternatives met under inverted X-of rule`;
        break;
      }
      case 'gid': {
        const positive = { ...requirement, required: true };
        const trace = evaluateOne(project, positive, path, state, globalStack);
        children.push(...trace.children);
        result = !trace.result;
        detail = `inverted ${trace.detail}`;
        break;
      }
      default:
        detail = `ICC Plus only defines negative semantics for id, or, and gid; ${type} is false`;
    }
  }

  return { path, type, required, result, detail, children };
}

function evaluateList(
  project: JsonObject,
  requirements: JsonObject[],
  basePath: string,
  state: RuntimeState,
  globalStack: string[],
): { met: boolean; traces: RequirementTrace[] } {
  let met = true;
  const traces: RequirementTrace[] = [];
  for (let index = 0; index < requirements.length; index += 1) {
    const requirement = requirements[index]!;
    const trace = evaluateOne(project, requirement, `${basePath}/${index}`, state, globalStack);
    traces.push(trace);
    const prerequisitePrefix = `${trace.path}/requireds/`;
    const prerequisitesMet = trace.children
      .filter((child) => {
        if (!child.path.startsWith(prerequisitePrefix)) return false;
        return !child.path.slice(prerequisitePrefix.length).includes('/');
      })
      .every((child) => child.result);
    if (prerequisitesMet) met = met && trace.result;
  }
  return { met, traces };
}

export function evaluateRequirements(
  project: JsonObject,
  requirements: JsonObject[],
  suppliedState: RequirementState = {},
  basePath = '/requirements',
): RequirementEvaluation {
  const state = buildState(project, suppliedState);
  const result = evaluateList(project, requirements, basePath, state, []);
  return { ...result, state };
}

export function evaluateEntityRequirements(
  project: JsonObject,
  entityReference: string,
  suppliedState: RequirementState = {},
): RequirementEvaluation {
  const index = new ModelIndex(project);
  const matches = entityReference.startsWith('/')
    ? [index.pathMap.get(entityReference)].filter((item): item is NonNullable<typeof item> => Boolean(item))
    : index.find(entityReference);
  if (matches.length !== 1) {
    throw new Error(
      matches.length === 0
        ? `Entity not found: ${entityReference}`
        : `Entity reference is ambiguous: ${entityReference}`,
    );
  }
  const entity = matches[0]!;
  return evaluateRequirements(
    project,
    asObjectArray(entity.value.requireds),
    suppliedState,
    `${entity.path}/requireds`,
  );
}
