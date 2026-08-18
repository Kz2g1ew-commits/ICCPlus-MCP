import { randomUUID } from 'node:crypto';
import {
  access,
  link,
  mkdir,
  readFile,
  realpath,
  rename,
  stat,
  unlink,
  writeFile,
} from 'node:fs/promises';
import { realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { cloneJson, isJsonObject } from './json.js';
import { applyJsonPatch } from './json-patch.js';
import { createDefaultProject } from './factories.js';
import { ModelIndex } from './model-index.js';
import { normalizeProject } from './normalize.js';
import type {
  JsonObject,
  JsonPatchOperation,
  ProjectSession,
  ProjectSnapshot,
  ValidationReport,
} from './types.js';
import { validateProject } from './validation.js';

export type ValidationPolicy = 'strict' | 'no_new_errors' | 'none';

export interface ProjectStoreOptions {
  workspaceRoot?: string;
  maxHistory?: number;
}

export interface TransactionResult<T> {
  result: T;
  project: JsonObject;
  revision: number;
  dryRun: boolean;
  validation: ValidationReport;
}

function within(root: string, candidate: string): boolean {
  const path = relative(root, candidate);
  return path === '' || (!path.startsWith(`..${sep}`) && path !== '..' && !isAbsolute(path));
}

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function sessionView(session: ProjectSession): ProjectSession {
  return {
    ...session,
    data: cloneJson(session.data),
    history: [],
    future: [],
  };
}

function sessionHandle(session: ProjectSession): Omit<ProjectSession, 'data' | 'history' | 'future'> {
  return {
    id: session.id,
    ...(session.path ? { path: session.path } : {}),
    revision: session.revision,
    savedRevision: session.savedRevision,
    createdAt: session.createdAt,
    updatedAt: session.updatedAt,
  };
}

export class ProjectStore {
  readonly workspaceRoot: string;
  readonly maxHistory: number;
  private readonly sessions = new Map<string, ProjectSession>();
  private readonly indexes = new WeakMap<JsonObject, ModelIndex>();

  constructor(options: ProjectStoreOptions = {}) {
    const configuredRoot = resolve(options.workspaceRoot ?? process.env.ICCPLUS_WORKSPACE ?? process.cwd());
    try {
      this.workspaceRoot = realpathSync(configuredRoot);
    } catch {
      this.workspaceRoot = configuredRoot;
    }
    this.maxHistory = Math.max(1, options.maxHistory ?? 50);
  }

  private async safePath(input: string, expectExisting: boolean): Promise<string> {
    const candidate = resolve(this.workspaceRoot, input);
    if (!within(this.workspaceRoot, candidate)) {
      throw new Error(`Path is outside ICCPLUS_WORKSPACE (${this.workspaceRoot}): ${input}`);
    }
    if (expectExisting) {
      const actual = await realpath(candidate);
      if (!within(this.workspaceRoot, actual)) throw new Error(`Resolved path escapes workspace: ${input}`);
      return actual;
    }
    let ancestor = dirname(candidate);
    while (!(await exists(ancestor))) {
      const parent = dirname(ancestor);
      if (parent === ancestor) break;
      ancestor = parent;
    }
    const actualAncestor = await realpath(ancestor);
    if (!within(this.workspaceRoot, actualAncestor)) {
      throw new Error(`Parent directory resolves outside workspace: ${input}`);
    }
    return candidate;
  }

  resolvePath(input: string, expectExisting: boolean): Promise<string> {
    return this.safePath(input, expectExisting);
  }

  private makeSession(data: JsonObject, path?: string): ProjectSession {
    const now = new Date().toISOString();
    const session: ProjectSession = {
      id: randomUUID(),
      ...(path ? { path } : {}),
      data,
      revision: 0,
      savedRevision: path ? 0 : -1,
      createdAt: now,
      updatedAt: now,
      history: [],
      future: [],
    };
    this.sessions.set(session.id, session);
    return session;
  }

  create(overrides: JsonObject = {}, path?: string): ProjectSession {
    const project = createDefaultProject(overrides);
    const session = this.makeSession(project, path);
    session.savedRevision = -1;
    return sessionView(session);
  }

  private async load(path: string, options: { normalize?: boolean }): Promise<ProjectSession> {
    const absolute = await this.safePath(path, true);
    const metadata = await stat(absolute);
    if (!metadata.isFile()) throw new Error(`Project path is not a file: ${path}`);
    const parsed: unknown = JSON.parse(await readFile(absolute, 'utf8'));
    if (!isJsonObject(parsed)) throw new Error('ICC Plus project root must be a JSON object.');
    const data = options.normalize ? normalizeProject(parsed).project : parsed;
    const session = this.makeSession(data, absolute);
    if (options.normalize) session.savedRevision = -1;
    return session;
  }

  async open(path: string, options: { normalize?: boolean } = {}): Promise<ProjectSession> {
    const session = await this.load(path, options);
    return sessionView(session);
  }

  async openHandle(
    path: string,
    options: { normalize?: boolean } = {},
  ): Promise<Omit<ProjectSession, 'data' | 'history' | 'future'>> {
    return sessionHandle(await this.load(path, options));
  }

  index(id: string): ModelIndex {
    const data = this.get(id).data;
    let index = this.indexes.get(data);
    if (!index) {
      index = new ModelIndex(data);
      this.indexes.set(data, index);
    }
    return index;
  }

  list(): Array<Omit<ProjectSession, 'data' | 'history' | 'future'> & {
    dirty: boolean;
    summary: ReturnType<ModelIndex['summary']>;
  }> {
    return [...this.sessions.values()].map((session) => ({
      id: session.id,
      ...(session.path ? { path: session.path } : {}),
      revision: session.revision,
      savedRevision: session.savedRevision,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt,
      dirty: session.revision !== session.savedRevision,
      summary: this.index(session.id).summary(),
    }));
  }

  get(id: string): ProjectSession {
    const session = this.sessions.get(id);
    if (!session) throw new Error(`Unknown project_id: ${id}`);
    return session;
  }

  inspect(id: string): ProjectSession {
    return sessionView(this.get(id));
  }

  close(id: string, force = false, expectedRevision?: number): void {
    const session = this.get(id);
    if (expectedRevision !== undefined && expectedRevision !== session.revision) {
      throw new Error(`Revision conflict: expected ${expectedRevision}, current ${session.revision}.`);
    }
    if (!force && session.revision !== session.savedRevision) {
      throw new Error('Project has unsaved changes. Save it or set force=true.');
    }
    this.sessions.delete(id);
  }

  transact<T>(
    id: string,
    options: {
      label: string;
      expectedRevision?: number;
      dryRun?: boolean;
      validationPolicy?: ValidationPolicy;
    },
    mutate: (draft: JsonObject) => T,
  ): TransactionResult<T> {
    const session = this.get(id);
    if (
      options.expectedRevision !== undefined
      && options.expectedRevision !== session.revision
    ) {
      throw new Error(
        `Revision conflict: expected ${options.expectedRevision}, current ${session.revision}.`,
      );
    }
    const before = cloneJson(session.data);
    const draft = cloneJson(session.data);
    const previousValidation = validateProject(before);
    const result = mutate(draft);
    const validation = validateProject(draft);
    const policy = options.validationPolicy ?? 'no_new_errors';
    if (policy === 'strict' && !validation.valid) {
      throw new Error(`Mutation rejected: project has ${validation.errors} validation errors.`);
    }
    if (policy === 'no_new_errors') {
      const previousErrors = new Set(
        previousValidation.diagnostics
          .filter((item) => item.severity === 'error')
          .map((item) => `${item.code}|${item.path}|${item.message}`),
      );
      const newErrors = validation.diagnostics.filter((item) =>
        item.severity === 'error'
        && !previousErrors.has(`${item.code}|${item.path}|${item.message}`)
      );
      if (newErrors.length > 0) {
        throw new Error(
          `Mutation rejected: it introduced ${newErrors.length} new validation error(s); first is ${newErrors[0]!.code} at ${newErrors[0]!.path}.`,
        );
      }
    }
    if (!options.dryRun) {
      const snapshot: ProjectSnapshot = {
        revision: session.revision,
        data: before,
        label: options.label,
        createdAt: new Date().toISOString(),
      };
      session.history.push(snapshot);
      if (session.history.length > this.maxHistory) session.history.shift();
      session.future.length = 0;
      session.data = draft;
      session.revision += 1;
      session.updatedAt = new Date().toISOString();
    }
    return {
      result,
      project: draft,
      revision: options.dryRun ? session.revision : session.revision,
      dryRun: options.dryRun ?? false,
      validation,
    };
  }

  patch(
    id: string,
    operations: JsonPatchOperation[],
    options: {
      expectedRevision?: number;
      dryRun?: boolean;
      validationPolicy?: ValidationPolicy;
    } = {},
  ): TransactionResult<{ changedPaths: string[] }> {
    return this.transact(
      id,
      { label: `Apply ${operations.length} JSON Patch operations`, ...options },
      (draft) => {
        const patched = applyJsonPatch(draft, operations);
        for (const key of Object.keys(draft)) delete draft[key];
        Object.assign(draft, patched.document);
        return { changedPaths: patched.changedPaths };
      },
    );
  }

  normalize(
    id: string,
    options: {
      expectedRevision?: number;
      dryRun?: boolean;
      validationPolicy?: ValidationPolicy;
    } = {},
  ): TransactionResult<{ changes: string[] }> {
    return this.transact(
      id,
      { label: 'Normalize project', validationPolicy: 'no_new_errors', ...options },
      (draft) => {
        const normalized = normalizeProject(draft);
        for (const key of Object.keys(draft)) delete draft[key];
        Object.assign(draft, normalized.project);
        return { changes: normalized.changes };
      },
    );
  }

  undo(id: string, expectedRevision?: number): ProjectSession {
    const session = this.get(id);
    if (expectedRevision !== undefined && expectedRevision !== session.revision) {
      throw new Error(`Revision conflict: expected ${expectedRevision}, current ${session.revision}.`);
    }
    const snapshot = session.history.pop();
    if (!snapshot) throw new Error('No mutation is available to undo.');
    session.future.push({
      revision: session.revision,
      data: cloneJson(session.data),
      label: snapshot.label,
      createdAt: new Date().toISOString(),
    });
    session.data = snapshot.data;
    session.revision += 1;
    session.updatedAt = new Date().toISOString();
    return sessionView(session);
  }

  redo(id: string, expectedRevision?: number): ProjectSession {
    const session = this.get(id);
    if (expectedRevision !== undefined && expectedRevision !== session.revision) {
      throw new Error(`Revision conflict: expected ${expectedRevision}, current ${session.revision}.`);
    }
    const snapshot = session.future.pop();
    if (!snapshot) throw new Error('No mutation is available to redo.');
    session.history.push({
      revision: session.revision,
      data: cloneJson(session.data),
      label: snapshot.label,
      createdAt: new Date().toISOString(),
    });
    session.data = snapshot.data;
    session.revision += 1;
    session.updatedAt = new Date().toISOString();
    return sessionView(session);
  }

  async save(
    id: string,
    options: {
      path?: string;
      overwrite?: boolean;
      pretty?: boolean;
      createDirectories?: boolean;
      expectedRevision?: number;
    } = {},
  ): Promise<{ path: string; bytes: number; revision: number }> {
    const session = this.get(id);
    if (
      options.expectedRevision !== undefined
      && options.expectedRevision !== session.revision
    ) {
      throw new Error(
        `Revision conflict: expected ${options.expectedRevision}, current ${session.revision}.`,
      );
    }
    const requested = options.path ?? session.path;
    if (!requested) throw new Error('A path is required the first time a project is saved.');
    const target = await this.safePath(requested, false);
    const targetExists = await exists(target);
    if (
      targetExists
      && target !== session.path
      && options.overwrite !== true
    ) {
      throw new Error('Target already exists. Set overwrite=true to replace it.');
    }
    if (options.createDirectories) await mkdir(dirname(target), { recursive: true });

    const text = options.pretty === false
      ? JSON.stringify(session.data)
      : `${JSON.stringify(session.data, null, 2)}\n`;
    const temporary = resolve(
      dirname(target),
      `.${basename(target)}.${randomUUID()}.tmp`,
    );
    try {
      await writeFile(temporary, text, { encoding: 'utf8', flag: 'wx' });
      if (target === session.path || options.overwrite === true) {
        await rename(temporary, target);
      } else {
        await link(temporary, target);
        await unlink(temporary);
      }
    } catch (error) {
      await unlink(temporary).catch(() => undefined);
      throw error;
    }
    session.path = target;
    session.savedRevision = session.revision;
    session.updatedAt = new Date().toISOString();
    return {
      path: target,
      bytes: Buffer.byteLength(text),
      revision: session.revision,
    };
  }
}
