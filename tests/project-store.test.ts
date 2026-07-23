import {
  mkdtemp,
  readFile,
  readdir,
  rm,
  symlink,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { insertEntity } from '../src/domain/mutations.js';
import { ProjectStore } from '../src/domain/project-store.js';

const cleanup: string[] = [];

afterEach(async () => {
  await Promise.all(cleanup.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

async function temporary(prefix: string): Promise<string> {
  const path = await mkdtemp(join(tmpdir(), prefix));
  cleanup.push(path);
  return path;
}

describe('project workspace and transaction safety', () => {
  it('rejects direct and symlink path escapes for reads and future writes', async () => {
    const root = await temporary('iccplus-root-');
    const outside = await temporary('iccplus-outside-');
    await writeFile(join(outside, 'outside.json'), '{}');
    await symlink(outside, join(root, 'escape'));
    const store = new ProjectStore({ workspaceRoot: root });

    await expect(store.open(join(outside, 'outside.json'))).rejects.toThrow(
      'outside ICCPLUS_WORKSPACE',
    );
    await expect(store.open('escape/outside.json')).rejects.toThrow(
      'escapes workspace',
    );
    const session = store.create();
    await expect(store.save(session.id, { path: 'escape/written.json' })).rejects.toThrow(
      'resolves outside workspace',
    );
  });

  it('keeps dry runs isolated and enforces optimistic revisions for mutation and close', () => {
    const store = new ProjectStore();
    const session = store.create();
    const preview = store.transact(
      session.id,
      { label: 'preview row', expectedRevision: 0, dryRun: true },
      (draft) => insertEntity(draft, { type: 'row', values: { id: 'preview' } }),
    );

    expect((preview.project.rows as unknown[])).toHaveLength(1);
    expect((store.get(session.id).data.rows as unknown[])).toHaveLength(0);
    expect(store.get(session.id).revision).toBe(0);
    expect(() => store.transact(
      session.id,
      { label: 'stale', expectedRevision: 1 },
      () => undefined,
    )).toThrow('Revision conflict');
    expect(() => store.close(session.id, true, 1)).toThrow('Revision conflict');
    store.close(session.id, true, 0);
  });

  it('does not replace an unrelated target without overwrite and leaves no temp file', async () => {
    const root = await temporary('iccplus-save-');
    await writeFile(join(root, 'project.json'), '{"sentinel":true}\n');
    const store = new ProjectStore({ workspaceRoot: root });
    const session = store.create();

    await expect(store.save(session.id, { path: 'project.json' })).rejects.toThrow(
      'Target already exists',
    );
    expect(await readFile(join(root, 'project.json'), 'utf8')).toBe('{"sentinel":true}\n');
    expect((await readdir(root)).filter((name) => name.endsWith('.tmp'))).toEqual([]);
  });
});
