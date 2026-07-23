import { describe, expect, it } from 'vitest';
import { applyJsonPatch, JsonPatchError } from '../src/domain/json-patch.js';
import type { JsonObject } from '../src/domain/types.js';

describe('RFC 6902 patch engine', () => {
  it('applies all operation families without mutating the input', () => {
    const input: JsonObject = { rows: [{ id: 'a' }, { id: 'b' }], title: 'old' };
    const output = applyJsonPatch(input, [
      { op: 'test', path: '/title', value: 'old' },
      { op: 'replace', path: '/title', value: 'new' },
      { op: 'add', path: '/rows/-', value: { id: 'c' } },
      { op: 'copy', from: '/rows/0', path: '/copied' },
      { op: 'move', from: '/rows/1', path: '/rows/0' },
      { op: 'remove', path: '/copied/id' },
    ]);

    expect(input.title).toBe('old');
    expect(output.document.title).toBe('new');
    expect((output.document.rows as JsonObject[]).map((row) => row.id)).toEqual(['b', 'a', 'c']);
    expect(output.document.copied).toEqual({});
  });

  it('is atomic and rejects unsafe pointer tokens', () => {
    const input: JsonObject = { safe: true };
    expect(() => applyJsonPatch(input, [
      { op: 'add', path: '/new', value: 1 },
      { op: 'replace', path: '/missing', value: 2 },
    ])).toThrow(JsonPatchError);
    expect(input).toEqual({ safe: true });
    expect(() => applyJsonPatch(input, [
      { op: 'add', path: '/__proto__/polluted', value: true },
    ])).toThrow('Unsafe JSON Pointer token');
  });
});
