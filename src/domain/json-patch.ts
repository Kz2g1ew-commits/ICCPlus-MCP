import { isDeepStrictEqual } from 'node:util';
import { cloneJson, isJsonObject } from './json.js';
import type { JsonObject, JsonPatchOperation, JsonValue } from './types.js';

const FORBIDDEN_KEYS = new Set(['__proto__', 'prototype', 'constructor']);

export class JsonPatchError extends Error {
  constructor(
    message: string,
    readonly operationIndex: number,
    readonly operation: JsonPatchOperation,
  ) {
    super(`Patch ${operationIndex}: ${message}`);
    this.name = 'JsonPatchError';
  }
}

export function parsePointer(pointer: string): string[] {
  if (pointer === '') return [];
  if (!pointer.startsWith('/')) throw new Error(`Invalid JSON Pointer: ${pointer}`);
  return pointer.slice(1).split('/').map((token) => {
    const decoded = token.replace(/~1/g, '/').replace(/~0/g, '~');
    if (FORBIDDEN_KEYS.has(decoded)) {
      throw new Error(`Unsafe JSON Pointer token: ${decoded}`);
    }
    return decoded;
  });
}

function arrayIndex(token: string, length: number, allowEnd: boolean): number {
  if (token === '-' && allowEnd) return length;
  if (!/^(?:0|[1-9]\d*)$/.test(token)) {
    throw new Error(`Expected an array index, received ${JSON.stringify(token)}`);
  }
  const index = Number(token);
  const maximum = allowEnd ? length : length - 1;
  if (!Number.isSafeInteger(index) || index < 0 || index > maximum) {
    throw new Error(`Array index ${index} is outside 0..${maximum}`);
  }
  return index;
}

export function getAtPointer(document: JsonValue, pointer: string): JsonValue {
  const tokens = parsePointer(pointer);
  let current = document;
  for (const token of tokens) {
    if (Array.isArray(current)) {
      current = current[arrayIndex(token, current.length, false)]!;
    } else if (isJsonObject(current)) {
      if (!Object.hasOwn(current, token)) throw new Error(`Path does not exist: ${pointer}`);
      current = current[token]!;
    } else {
      throw new Error(`Cannot descend through primitive at ${pointer}`);
    }
  }
  return current;
}

function parentAtPointer(document: JsonValue, pointer: string): {
  parent: JsonObject | JsonValue[];
  token: string;
} {
  const tokens = parsePointer(pointer);
  if (tokens.length === 0) throw new Error('The document root has no parent');
  const token = tokens.pop()!;
  const parentPointer = tokens.length === 0
    ? ''
    : `/${tokens.map((part) => part.replaceAll('~', '~0').replaceAll('/', '~1')).join('/')}`;
  const parent = getAtPointer(document, parentPointer);
  if (!Array.isArray(parent) && !isJsonObject(parent)) {
    throw new Error(`Parent is not a container: ${parentPointer}`);
  }
  return { parent, token };
}

function addValue(document: JsonValue, pointer: string, value: JsonValue): JsonValue {
  if (pointer === '') return cloneJson(value);
  const { parent, token } = parentAtPointer(document, pointer);
  if (Array.isArray(parent)) {
    parent.splice(arrayIndex(token, parent.length, true), 0, cloneJson(value));
  } else {
    parent[token] = cloneJson(value);
  }
  return document;
}

function removeValue(document: JsonValue, pointer: string): { document: JsonValue; removed: JsonValue } {
  if (pointer === '') return { document: null, removed: document };
  const { parent, token } = parentAtPointer(document, pointer);
  if (Array.isArray(parent)) {
    const [removed] = parent.splice(arrayIndex(token, parent.length, false), 1);
    return { document, removed: removed! };
  }
  if (!Object.hasOwn(parent, token)) throw new Error(`Path does not exist: ${pointer}`);
  const removed = parent[token]!;
  delete parent[token];
  return { document, removed };
}

function replaceValue(document: JsonValue, pointer: string, value: JsonValue): JsonValue {
  if (pointer === '') return cloneJson(value);
  const { parent, token } = parentAtPointer(document, pointer);
  if (Array.isArray(parent)) {
    parent[arrayIndex(token, parent.length, false)] = cloneJson(value);
  } else {
    if (!Object.hasOwn(parent, token)) throw new Error(`Path does not exist: ${pointer}`);
    parent[token] = cloneJson(value);
  }
  return document;
}

export function applyJsonPatch(
  input: JsonObject,
  operations: JsonPatchOperation[],
): { document: JsonObject; changedPaths: string[] } {
  let document: JsonValue = cloneJson(input);
  const changedPaths: string[] = [];

  for (let index = 0; index < operations.length; index += 1) {
    const operation = operations[index]!;
    try {
      switch (operation.op) {
        case 'add':
          document = addValue(document, operation.path, operation.value);
          changedPaths.push(operation.path);
          break;
        case 'remove': {
          const result = removeValue(document, operation.path);
          document = result.document;
          changedPaths.push(operation.path);
          break;
        }
        case 'replace':
          document = replaceValue(document, operation.path, operation.value);
          changedPaths.push(operation.path);
          break;
        case 'copy': {
          const value = cloneJson(getAtPointer(document, operation.from));
          document = addValue(document, operation.path, value);
          changedPaths.push(operation.path);
          break;
        }
        case 'move': {
          if (operation.path.startsWith(`${operation.from}/`)) {
            throw new Error('Cannot move a value into one of its descendants');
          }
          const result = removeValue(document, operation.from);
          document = addValue(result.document, operation.path, result.removed);
          changedPaths.push(operation.from, operation.path);
          break;
        }
        case 'test': {
          const actual = getAtPointer(document, operation.path);
          if (!isDeepStrictEqual(actual, operation.value)) {
            throw new Error(`Test failed at ${operation.path}`);
          }
          break;
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new JsonPatchError(message, index, operation);
    }
  }

  if (!isJsonObject(document)) {
    throw new JsonPatchError(
      'ICC Plus project root must remain an object',
      Math.max(0, operations.length - 1),
      operations[Math.max(0, operations.length - 1)] ?? { op: 'test', path: '', value: input },
    );
  }
  return { document, changedPaths };
}
