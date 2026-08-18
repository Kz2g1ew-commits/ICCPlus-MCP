import { access, readFile, stat } from 'node:fs/promises';
import { basename } from 'node:path';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { lookup as lookupMime } from 'mime-types';
import { z } from 'zod';
import {
  describeFeature,
  describeField,
  describeFunction,
  describeSource,
  featureCoverage,
  listFeatureFamilies,
} from './catalog/features.js';
import {
  analyzeCustomCss,
  cssCatalogMetadata,
  customCssSummary,
  getCssCatalog,
  listProjectCssTargets,
} from './domain/custom-css.js';
import { asString, isJsonObject } from './domain/json.js';
import { getAtPointer } from './domain/json-patch.js';
import {
  duplicateEntity,
  exportEntityFragment,
  importEntityFragment,
  insertEntity,
  moveEntity,
  removeEntity,
  updateEntity,
} from './domain/mutations.js';
import { ProjectStore, type ValidationPolicy } from './domain/project-store.js';
import { evaluateEntityRequirements, evaluateRequirements } from './domain/requirements.js';
import type {
  EntityType,
  JsonObject,
  JsonPatchOperation,
  JsonValue,
  LocatedEntity,
} from './domain/types.js';
import { validateProject } from './domain/validation.js';
import { buildViewerFile } from './domain/viewer-builder.js';
import deploymentManifest from './generated/deployment-manifest.json' with { type: 'json' };
import schema from './generated/iccplus.schema.json' with { type: 'json' };
import sourceAnalysis from './generated/source-analysis.json' with { type: 'json' };
import thirdPartyLicenses from './generated/third-party-licenses.json' with { type: 'json' };

const VERSION = '0.1.0';
const JsonValueSchema = z.json();
const JsonObjectSchema = z.record(z.string(), JsonValueSchema);
const EntityTypeSchema = z.enum([
  'row',
  'backpack_row',
  'choice',
  'addon',
  'selectable_addon',
  'score',
  'requirement',
  'point',
  'variable',
  'word',
  'group',
  'row_design_group',
  'choice_design_group',
  'global_requirement',
  'sound_effect',
  'category',
]);
const ValidationPolicySchema = z.enum(['strict', 'no_new_errors', 'none']);
const CssTargetKindSchema = z.enum(['dynamic', 'state', 'layout', 'viewer']);
const CssWriteModeSchema = z.enum(['replace', 'append', 'prepend', 'clear']);
const RevisionSchema = z.number().int().nonnegative().optional();

const DEFAULT_DUPLICATED_TEXT_LIMIT_BYTES = 8 * 1024;

function duplicatedTextLimit(): number {
  const configured = process.env.ICCPLUS_DUPLICATED_TEXT_LIMIT_BYTES;
  if (configured === undefined) return DEFAULT_DUPLICATED_TEXT_LIMIT_BYTES;
  const parsed = Number(configured);
  return Number.isFinite(parsed) && parsed >= -1
    ? Math.floor(parsed)
    : DEFAULT_DUPLICATED_TEXT_LIMIT_BYTES;
}

function fitsJsonTextBudget(value: unknown, maximum: number): boolean {
  if (maximum < 0) return true;
  let remaining = maximum;
  const consume = (bytes: number): boolean => {
    remaining -= bytes;
    return remaining >= 0;
  };
  const visit = (current: unknown): boolean => {
    if (typeof current === 'string') {
      if (current.length > remaining) return false;
      return consume(Buffer.byteLength(JSON.stringify(current)));
    }
    if (
      current === null
      || typeof current === 'number'
      || typeof current === 'boolean'
      || current === undefined
    ) {
      return consume(Buffer.byteLength(JSON.stringify(current) ?? 'null'));
    }
    if (Array.isArray(current)) {
      if (!consume(2 + Math.max(0, current.length - 1))) return false;
      return current.every(visit);
    }
    if (typeof current === 'object') {
      const entries = Object.entries(current);
      if (!consume(2 + Math.max(0, entries.length - 1))) return false;
      return entries.every(([key, child]) =>
        consume(Buffer.byteLength(JSON.stringify(key)) + 1) && visit(child)
      );
    }
    return consume(Buffer.byteLength(JSON.stringify(String(current))));
  };
  return visit(value);
}

function result(value: unknown): CallToolResult {
  const structuredContent = isJsonObject(value)
    ? value
    : { data: value as JsonValue };
  const textLimit = duplicatedTextLimit();
  const text = fitsJsonTextBudget(value, textLimit)
    ? JSON.stringify(value)
    : JSON.stringify({
        notice: 'Full result is available in structuredContent; duplicate text was omitted to reduce context usage.',
        duplicate_text_limit_bytes: textLimit,
      });
  return {
    content: [{ type: 'text', text }],
    structuredContent,
  };
}

function redactEmbeddedAssets<T extends JsonValue>(input: T): T {
  function visit(current: JsonValue): JsonValue {
    if (typeof current === 'string' && current.startsWith('data:')) {
      const comma = current.indexOf(',');
      const header = comma === -1 ? current : current.slice(0, comma);
      const encodedLength = comma === -1 ? 0 : current.length - comma - 1;
      return {
        embedded: true,
        mediaType: header.slice(5).split(';')[0] || 'application/octet-stream',
        approximateBytes: current.includes(';base64,')
          ? Math.floor(encodedLength * 0.75)
          : Buffer.byteLength(comma === -1 ? '' : current.slice(comma + 1)),
      };
    }
    if (Array.isArray(current)) return current.map(visit);
    if (isJsonObject(current)) {
      return Object.fromEntries(Object.entries(current).map(([key, child]) => [key, visit(child)]));
    }
    return current;
  }
  return visit(input) as T;
}

function entityOutput(entity: LocatedEntity, includeEmbeddedAssets: boolean): JsonObject {
  return {
    type: entity.type,
    id: entity.id,
    path: entity.path,
    ...(entity.parentId ? { parentId: entity.parentId } : {}),
    containerPath: entity.containerPath,
    index: entity.index,
    value: includeEmbeddedAssets ? entity.value : redactEmbeddedAssets(entity.value),
  };
}

function transactionOptions(args: {
  expected_revision?: number | undefined;
  dry_run?: boolean | undefined;
  validation_policy?: ValidationPolicy | undefined;
}): {
  expectedRevision?: number;
  dryRun?: boolean;
  validationPolicy?: ValidationPolicy;
} {
  return {
    ...(args.expected_revision !== undefined ? { expectedRevision: args.expected_revision } : {}),
    ...(args.dry_run !== undefined ? { dryRun: args.dry_run } : {}),
    ...(args.validation_policy ? { validationPolicy: args.validation_policy } : {}),
  };
}

function patchOperation(value: z.infer<typeof JsonValueSchema>): JsonPatchOperation {
  if (!isJsonObject(value)) throw new Error('Each patch must be an object.');
  const op = value.op;
  const path = value.path;
  if (typeof op !== 'string' || typeof path !== 'string') {
    throw new Error('Each patch needs string op and path fields.');
  }
  if (op === 'add' || op === 'replace' || op === 'test') {
    if (!Object.hasOwn(value, 'value')) throw new Error(`${op} patch requires value.`);
    return { op, path, value: value.value! };
  }
  if (op === 'remove') return { op, path };
  if (op === 'copy' || op === 'move') {
    if (typeof value.from !== 'string') throw new Error(`${op} patch requires from.`);
    return { op, path, from: value.from };
  }
  throw new Error(`Unsupported JSON Patch operation: ${op}`);
}

function readOnlyAnnotations() {
  return {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  };
}

function mutationAnnotations(destructive = false) {
  return {
    readOnlyHint: false,
    destructiveHint: destructive,
    idempotentHint: false,
    openWorldHint: false,
  };
}

export interface IccPlusServerOptions {
  workspaceRoot?: string;
  maxHistory?: number;
}

export function createIccPlusServer(options: IccPlusServerOptions = {}): {
  server: McpServer;
  projects: ProjectStore;
} {
  const projects = new ProjectStore(options);
  const server = new McpServer(
    { name: 'iccplus-mcp', version: VERSION },
    {
      instructions: [
        'Use iccplus_capabilities before authoring an unfamiliar ICC Plus feature.',
        'Create or open a project, then pass project_id to all project tools.',
        'Read the current revision from status/query results and pass expected_revision to mutations.',
        'Prefer high-level entity tools for ordinary authoring and iccplus_patch for advanced or newly introduced fields.',
        'Use iccplus_css_catalog, iccplus_css_analyze, and iccplus_css_set for project-aware Custom CSS authoring.',
        'Prefer iccplus_read_project for exact JSON Pointers instead of returning the complete project.',
        'Keep embedded assets redacted unless an exact data URL is explicitly required.',
        'Use dry_run for wide changes, validate before saving, and call iccplus_save_project explicitly.',
        'Unknown ICC Plus fields are intentionally preserved for forward compatibility.',
      ].join(' '),
    },
  );

  server.registerTool(
    'iccplus_capabilities',
    {
      title: 'Discover ICC Plus capabilities',
      description: 'List feature families or return field, type, function-body, source-file, deployment-artifact, or Custom CSS evidence extracted from ICC Plus.',
      inputSchema: {
        topic: z.string().optional().describe('Feature id, field:<name>, type:<name>, function:<name>, source:<relative-path>, or deployment:<relative-path>. Omit to list all feature families.'),
        file: z.string().optional().describe('Optional relative-file filter for function:<name> when local names have multiple matches.'),
        offset: z.number().int().nonnegative().default(0).describe('Function-match offset.'),
        limit: z.number().int().min(1).max(100).default(20).describe('Maximum function matches to return.'),
        include_source: z.boolean().default(true).describe('Include exact bodies for function/source queries; set false for a compact index.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ topic, file, offset, limit, include_source }) => {
      if (!topic) {
        return result({
          upstream: sourceAnalysis.upstream,
          deployment: {
            repository: deploymentManifest.repository,
            version: deploymentManifest.version,
            commit: deploymentManifest.commit,
            tag: deploymentManifest.tag,
            coverage: deploymentManifest.coverage,
          },
          coverage: featureCoverage(),
          features: listFeatureFamilies(),
        });
      }
      if (topic.startsWith('field:')) {
        const name = topic.slice('field:'.length);
        const description = describeField(name);
        if (!description) throw new Error(`Unknown ICC Plus field: ${name}`);
        return result({ field: name, ...description });
      }
      if (topic.startsWith('type:')) {
        const name = topic.slice('type:'.length);
        const type = sourceAnalysis.types[name as keyof typeof sourceAnalysis.types];
        if (!type) throw new Error(`Unknown ICC Plus type: ${name}`);
        return result({ type: name, definition: type });
      }
      if (topic.startsWith('function:')) {
        const name = topic.slice('function:'.length);
        const normalizedFile = file?.replaceAll('\\', '/').replace(/^\.?\//, '');
        let functions = describeFunction(name) as Array<Record<string, unknown> & {
          file: string;
        }>;
        if (normalizedFile) {
          functions = functions.filter((item) =>
            item.file === normalizedFile || item.file.endsWith(`/${normalizedFile}`)
          );
        }
        if (functions.length === 0) throw new Error(`Unknown ICC Plus function: ${name}`);
        const matches = functions.slice(offset, offset + limit).map((item) => {
          if (include_source) return item;
          const { source: _source, ...metadata } = item;
          return metadata;
        });
        return result({
          function: name,
          total: functions.length,
          offset,
          limit,
          matches,
        });
      }
      if (topic.startsWith('source:')) {
        const file = topic.slice('source:'.length);
        const source = describeSource(file);
        if (!source) throw new Error(`Unknown ICC Plus source file: ${file}`);
        if (include_source) return result({ source });
        const { source: _source, ...metadata } = source as Record<string, unknown>;
        return result({ source: metadata });
      }
      if (topic.startsWith('deployment:')) {
        const path = topic.slice('deployment:'.length).replaceAll('\\', '/').replace(/^\.?\//, '');
        const file = deploymentManifest.files.find((item) => item.path === path);
        if (!file) throw new Error(`Unknown ICC Plus deployment file: ${path}`);
        const archive = deploymentManifest.archives.find((item) => item.path === path);
        return result({ file, ...(archive ? { archive } : {}) });
      }
      const feature = describeFeature(topic);
      if (!feature) throw new Error(`Unknown feature id: ${topic}`);
      return result(feature);
    },
  );

  server.registerTool(
    'iccplus_css_catalog',
    {
      title: 'Discover ICC Plus Custom CSS targets',
      description: 'List official viewer classes with source evidence and project-specific escaped row, choice, and selectable-addon selectors.',
      inputSchema: {
        scope: z.enum(['official', 'project', 'all']).default('official'),
        project_id: z.string().uuid().optional().describe('Required for project or all scope.'),
        query: z.string().optional().describe('Filter selectors, descriptions, ids, titles, paths, or source files.'),
        kind: CssTargetKindSchema.optional(),
        offset: z.number().int().nonnegative().default(0),
        limit: z.number().int().min(1).max(1000).default(100),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ scope, project_id, query, kind, offset, limit }) => {
      if (scope !== 'official' && !project_id) {
        throw new Error('project_id is required when scope is project or all.');
      }
      const needle = query?.toLocaleLowerCase();
      const official = getCssCatalog().filter((entry) => {
        if (kind && entry.kind !== kind) return false;
        if (!needle) return true;
        return [
          entry.selector,
          entry.description,
          ...entry.sources.flatMap((source) => [source.file, String(source.line)]),
        ].some((value) => value.toLocaleLowerCase().includes(needle));
      });
      let projectTargets = project_id
        ? listProjectCssTargets(projects.get(project_id).data)
        : [];
      if (needle) {
        projectTargets = projectTargets.filter((target) =>
          [
            target.selector,
            target.entityType,
            target.entityId,
            target.title,
            target.path,
            ...target.variants,
          ].some((value) => value.toLocaleLowerCase().includes(needle))
        );
      }
      return result({
        metadata: cssCatalogMetadata(),
        scope,
        official: scope === 'project'
          ? null
          : {
              total: official.length,
              offset,
              limit,
              items: official.slice(offset, offset + limit),
            },
        project: scope === 'official'
          ? null
          : {
              project_id,
              revision: project_id ? projects.get(project_id).revision : null,
              total: projectTargets.length,
              offset,
              limit,
              items: projectTargets.slice(offset, offset + limit),
            },
      });
    },
  );

  server.registerTool(
    'iccplus_css_analyze',
    {
      title: 'Analyze ICC Plus Custom CSS',
      description: 'Statically analyze stored or candidate CSS for syntax, selector specificity, official classes, project ids, inline-style conflicts, and external assets.',
      inputSchema: {
        project_id: z.string().uuid().optional().describe('Adds project-aware target resolution; CSS is read from the project when css is omitted.'),
        css: z.string().optional().describe('Candidate CSS. Omit to analyze the open project customCSS value.'),
        include_rules: z.boolean().default(true),
        max_diagnostics: z.number().int().min(1).max(10000).default(1000),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ project_id, css, include_rules, max_diagnostics }) => {
      if (!project_id && css === undefined) throw new Error('Provide project_id or css.');
      const session = project_id ? projects.get(project_id) : undefined;
      const source = css === undefined ? asString(session?.data.customCSS) : css;
      const analysis = analyzeCustomCss(source, session?.data);
      return result({
        project_id: project_id ?? null,
        revision: session?.revision ?? null,
        source: css === undefined ? 'project' : 'candidate',
        analysis: {
          ...analysis,
          diagnostics: analysis.diagnostics.slice(0, max_diagnostics),
          ...(include_rules ? {} : { ruleDetails: [] }),
        },
      });
    },
  );

  server.registerTool(
    'iccplus_css_set',
    {
      title: 'Set ICC Plus Custom CSS',
      description: 'Replace, append, prepend, or clear the official project customCSS field with revision protection, dry-run support, and integrated validation.',
      inputSchema: {
        project_id: z.string().uuid(),
        css: z.string().optional().describe('Required unless mode is clear.'),
        mode: CssWriteModeSchema.default('replace'),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(true),
    },
    async (args) => {
      if (args.mode !== 'clear' && args.css === undefined) {
        throw new Error('css is required unless mode is clear.');
      }
      const session = projects.get(args.project_id);
      const previous = asString(session.data.customCSS);
      const supplied = args.css ?? '';
      const join = (left: string, right: string): string =>
        left && right ? left + '\n\n' + right : left + right;
      const next = args.mode === 'clear'
        ? ''
        : args.mode === 'append'
          ? join(previous, supplied)
          : args.mode === 'prepend'
            ? join(supplied, previous)
            : supplied;
      const transaction = projects.transact(
        args.project_id,
        {
          label: 'Set ICC Plus Custom CSS (' + args.mode + ')',
          ...transactionOptions(args),
        },
        (draft) => {
          draft.customCSS = next;
          return {
            mode: args.mode,
            previousBytes: Buffer.byteLength(previous),
            bytes: Buffer.byteLength(next),
          };
        },
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        change: transaction.result,
        analysis: {
          ...analyzeCustomCss(next, transaction.project),
          ruleDetails: [],
        },
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_schema',
    {
      title: 'Read ICC Plus project schema',
      description: 'Read the generated JSON Schema summary, one definition, or the complete project schema.',
      inputSchema: {
        definition: z.string().optional().describe('Schema definition such as Choice, Row, Requireds, Score, or Styling.'),
        full: z.boolean().default(false).describe('Return the complete generated schema.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ definition, full }) => {
      if (full) return result(schema);
      if (definition) {
        const definitions = schema.definitions as Record<string, unknown>;
        if (!(definition in definitions)) throw new Error(`Schema definition not found: ${definition}`);
        return result({ definition, schema: definitions[definition] });
      }
      return result({
        title: schema.title,
        description: schema.description,
        upstream: sourceAnalysis.upstream,
        definitions: Object.keys(schema.definitions),
        fields: sourceAnalysis.coverage.declaredUniqueFields,
      });
    },
  );

  server.registerTool(
    'iccplus_create_project',
    {
      title: 'Create ICC Plus project',
      description: 'Create an in-memory project from current upstream defaults. Nothing is written until save is called.',
      inputSchema: {
        overrides: JsonObjectSchema.optional(),
        path: z.string().optional().describe('Optional future save path inside ICCPLUS_WORKSPACE.'),
      },
      annotations: mutationAnnotations(),
    },
    async ({ overrides, path }) => {
      const session = projects.create((overrides ?? {}) as JsonObject, path);
      return result({
        project_id: session.id,
        revision: session.revision,
        dirty: true,
        summary: projects.index(session.id).summary(),
        validation: validateProject(session.data),
      });
    },
  );

  server.registerTool(
    'iccplus_open_project',
    {
      title: 'Open ICC Plus project',
      description: 'Open a project JSON file from ICCPLUS_WORKSPACE into an isolated revisioned session.',
      inputSchema: {
        path: z.string(),
        normalize: z.boolean().default(false).describe('Apply compatible migrations and reciprocal membership repair in memory.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ path, normalize }) => {
      const opened = await projects.openHandle(path, { normalize });
      const session = projects.get(opened.id);
      return result({
        project_id: session.id,
        path: session.path,
        revision: session.revision,
        summary: projects.index(session.id).summary(),
        validation: validateProject(session.data),
      });
    },
  );

  server.registerTool(
    'iccplus_list_projects',
    {
      title: 'List open ICC Plus projects',
      description: 'List in-memory project sessions, revisions, dirty state, and compact summaries.',
      annotations: readOnlyAnnotations(),
    },
    async () => result({ workspace_root: projects.workspaceRoot, projects: projects.list() }),
  );

  server.registerTool(
    'iccplus_project_status',
    {
      title: 'Inspect ICC Plus project status',
      description: 'Return revision, dirty state, summary, Custom CSS analysis, validation counts, and optionally project JSON.',
      inputSchema: {
        project_id: z.string().uuid(),
        include_project: z.boolean().default(false).describe('Return the complete project. Prefer iccplus_read_project with exact paths to keep responses small.'),
        include_embedded_assets: z.boolean().default(false).describe('Return raw data URLs. Leave false unless their exact encoded contents are explicitly required.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ project_id, include_project, include_embedded_assets }) => {
      const session = projects.get(project_id);
      const index = projects.index(project_id);
      return result({
        project_id,
        path: session.path ?? null,
        revision: session.revision,
        saved_revision: session.savedRevision,
        dirty: session.revision !== session.savedRevision,
        bytes: index.projectBytes(),
        summary: index.summary(),
        custom_css: customCssSummary(session.data),
        validation: validateProject(session.data, { maxDiagnostics: 100 }),
        ...(include_project
          ? { project: include_embedded_assets ? session.data : redactEmbeddedAssets(session.data) }
          : {}),
      });
    },
  );

  server.registerTool(
    'iccplus_read_project',
    {
      title: 'Read exact ICC Plus project paths',
      description: 'Read one or more RFC 6901 JSON Pointers without returning the complete project; preserves exact CSS, HTML, JS, and unknown fields while redacting embedded assets by default.',
      inputSchema: {
        project_id: z.string().uuid(),
        paths: z.array(z.string()).min(1).max(100).describe('Exact JSON Pointers. Use an empty string for the root only when the complete project is truly required.'),
        include_embedded_assets: z.boolean().default(false).describe('Return raw data URLs. Leave false unless their exact encoded contents are explicitly required.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ project_id, paths, include_embedded_assets }) => {
      const session = projects.get(project_id);
      return result({
        project_id,
        revision: session.revision,
        items: paths.map((path) => {
          const value = getAtPointer(session.data, path);
          return {
            path,
            value: include_embedded_assets ? value : redactEmbeddedAssets(value),
          };
        }),
      });
    },
  );

  server.registerTool(
    'iccplus_query',
    {
      title: 'Query ICC Plus entities',
      description: 'Search rows, choices, addons, scores, requirements, points, groups, designs, words, variables, sound effects, and categories.',
      inputSchema: {
        project_id: z.string().uuid(),
        types: z.array(EntityTypeSchema).optional(),
        ids: z.array(z.string()).optional(),
        query: z.string().optional(),
        offset: z.number().int().nonnegative().default(0),
        limit: z.number().int().min(1).max(1000).default(100),
        include_values: z.boolean().default(true).describe('Set false for a compact metadata-first search, then fetch values for exact ids.'),
        include_embedded_assets: z.boolean().default(false).describe('Return raw data URLs. Leave false unless their exact encoded contents are explicitly required.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async (args) => {
      const session = projects.get(args.project_id);
      const index = projects.index(args.project_id);
      const found = index.search({
        ...(args.types ? { types: args.types as EntityType[] } : {}),
        ...(args.ids ? { ids: args.ids } : {}),
        ...(args.query ? { query: args.query } : {}),
        offset: args.offset,
        limit: args.limit,
      });
      return result({
        project_id: session.id,
        revision: session.revision,
        total: found.total,
        items: found.items.map((entity) => args.include_values
          ? entityOutput(entity, args.include_embedded_assets)
          : {
              type: entity.type,
              id: entity.id,
              path: entity.path,
              parentId: entity.parentId ?? null,
            }),
      });
    },
  );

  server.registerTool(
    'iccplus_create_entity',
    {
      title: 'Create ICC Plus entity',
      description: 'Create any modeled ICC Plus entity with current project defaults, optional overrides, automatic ids, and normalized memberships.',
      inputSchema: {
        project_id: z.string().uuid(),
        type: EntityTypeSchema,
        parent: z.string().optional().describe('Parent entity id or JSON Pointer for nested entities.'),
        position: z.number().int().nonnegative().optional(),
        values: JsonObjectSchema.optional(),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      const transaction = projects.transact(
        args.project_id,
        {
          label: `Create ${args.type}`,
          ...transactionOptions(args),
        },
        (draft) => insertEntity(draft, {
          type: args.type as EntityType,
          ...(args.parent ? { parent: args.parent } : {}),
          ...(args.position !== undefined ? { position: args.position } : {}),
          ...(args.values ? { values: args.values as JsonObject } : {}),
        }),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        entity: entityOutput(transaction.result.entity, false),
        normalization_changes: transaction.result.normalizationChanges,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_update_entity',
    {
      title: 'Update ICC Plus entity',
      description: 'Deep-merge fields into one entity and optionally unset fields. ID changes can rewrite all modeled references.',
      inputSchema: {
        project_id: z.string().uuid(),
        reference: z.string().describe('Entity id or exact JSON Pointer.'),
        type: EntityTypeSchema.optional(),
        values: JsonObjectSchema,
        unset: z.array(z.string()).optional(),
        rewrite_id_references: z.boolean().default(false),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      const transaction = projects.transact(
        args.project_id,
        { label: `Update ${args.reference}`, ...transactionOptions(args) },
        (draft) => updateEntity(draft, {
          reference: args.reference,
          ...(args.type ? { type: args.type as EntityType } : {}),
          values: args.values as JsonObject,
          ...(args.unset ? { unset: args.unset } : {}),
          rewriteIdReferences: args.rewrite_id_references,
        }),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        entity: entityOutput(transaction.result.entity, false),
        normalization_changes: transaction.result.normalizationChanges,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_duplicate_entity',
    {
      title: 'Duplicate ICC Plus entity',
      description: 'Duplicate an entity and nested content with fresh ids; optionally remap references within the clone.',
      inputSchema: {
        project_id: z.string().uuid(),
        reference: z.string(),
        type: EntityTypeSchema.optional(),
        position: z.number().int().nonnegative().optional(),
        remap_internal_references: z.boolean().default(false),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      const transaction = projects.transact(
        args.project_id,
        { label: `Duplicate ${args.reference}`, ...transactionOptions(args) },
        (draft) => duplicateEntity(draft, {
          reference: args.reference,
          ...(args.type ? { type: args.type as EntityType } : {}),
          ...(args.position !== undefined ? { position: args.position } : {}),
          remapInternalReferences: args.remap_internal_references,
        }),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        entity: entityOutput(transaction.result.entity, false),
        normalization_changes: transaction.result.normalizationChanges,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_move_entity',
    {
      title: 'Move ICC Plus entity',
      description: 'Move an entity within its current ordered container and repair stored indices.',
      inputSchema: {
        project_id: z.string().uuid(),
        reference: z.string(),
        type: EntityTypeSchema.optional(),
        position: z.number().int().nonnegative(),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      const transaction = projects.transact(
        args.project_id,
        { label: `Move ${args.reference}`, ...transactionOptions(args) },
        (draft) => moveEntity(draft, {
          reference: args.reference,
          ...(args.type ? { type: args.type as EntityType } : {}),
          position: args.position,
        }),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        entity: entityOutput(transaction.result.entity, false),
        normalization_changes: transaction.result.normalizationChanges,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_delete_entity',
    {
      title: 'Delete ICC Plus entity',
      description: 'Delete one entity. The default policy rejects deletions that create dangling references.',
      inputSchema: {
        project_id: z.string().uuid(),
        reference: z.string(),
        type: EntityTypeSchema.optional(),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(true),
    },
    async (args) => {
      const transaction = projects.transact(
        args.project_id,
        { label: `Delete ${args.reference}`, ...transactionOptions(args) },
        (draft) => removeEntity(draft, {
          reference: args.reference,
          ...(args.type ? { type: args.type as EntityType } : {}),
        }),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        removed: entityOutput(transaction.result.removed, false),
        normalization_changes: transaction.result.normalizationChanges,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_patch',
    {
      title: 'Patch ICC Plus project',
      description: 'Atomically apply RFC 6902 JSON Patch operations for any current or future ICC Plus field.',
      inputSchema: {
        project_id: z.string().uuid(),
        patches: z.array(JsonValueSchema).min(1),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(true),
    },
    async (args) => {
      const transaction = projects.patch(
        args.project_id,
        args.patches.map(patchOperation),
        transactionOptions(args),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        changed_paths: transaction.result.changedPaths,
        ...(transaction.result.changedPaths.some((path) => path === '/customCSS' || path.startsWith('/customCSS/'))
          ? { custom_css: customCssSummary(transaction.project) }
          : {}),
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_normalize',
    {
      title: 'Normalize ICC Plus project',
      description: 'Migrate legacy shapes, generate missing ids, repair indices/parents, and rebuild reciprocal group/design memberships.',
      inputSchema: {
        project_id: z.string().uuid(),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(true),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      const transaction = projects.normalize(args.project_id, transactionOptions(args));
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        changes: transaction.result.changes,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_validate',
    {
      title: 'Validate ICC Plus project',
      description: 'Run generated structural schema checks plus ids, references, requirements, memberships, cycles, Custom CSS, and export invariants.',
      inputSchema: {
        project_id: z.string().uuid(),
        structural: z.boolean().default(true),
        max_diagnostics: z.number().int().min(1).max(10000).default(1000),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ project_id, structural, max_diagnostics }) => {
      const session = projects.get(project_id);
      return result({
        project_id,
        revision: session.revision,
        report: validateProject(session.data, {
          structural,
          maxDiagnostics: max_diagnostics,
        }),
      });
    },
  );

  server.registerTool(
    'iccplus_evaluate_requirements',
    {
      title: 'Evaluate ICC Plus requirements',
      description: 'Evaluate an entity or supplied requirement tree using ICC Plus operator semantics and return an explainable trace.',
      inputSchema: {
        project_id: z.string().uuid(),
        entity: z.string().optional().describe('Entity id or JSON Pointer. Omit when requirements is supplied.'),
        requirements: z.array(JsonObjectSchema).optional(),
        state: z.object({
          selected: z.record(z.string(), z.number().int().nonnegative()).optional(),
          points: z.record(z.string(), z.number()).optional(),
          variables: z.record(z.string(), z.boolean()).optional(),
          words: z.record(z.string(), z.string()).optional(),
          rowSelections: z.record(z.string(), z.number().int().nonnegative()).optional(),
        }).optional(),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ project_id, entity, requirements, state }) => {
      const session = projects.get(project_id);
      if (!entity && !requirements) throw new Error('Provide entity or requirements.');
      const evaluation = entity
        ? evaluateEntityRequirements(session.data, entity, state)
        : evaluateRequirements(session.data, (requirements ?? []) as JsonObject[], state);
      return result({ project_id, revision: session.revision, evaluation });
    },
  );

  server.registerTool(
    'iccplus_export_fragment',
    {
      title: 'Export ICC Plus fragment',
      description: 'Return a row, choice, addon, score, requirement, or feature entity as reusable JSON.',
      inputSchema: {
        project_id: z.string().uuid(),
        reference: z.string(),
        type: EntityTypeSchema.optional(),
        include_embedded_assets: z.boolean().default(false).describe('Return raw data URLs. Leave false unless their exact encoded contents are explicitly required.'),
      },
      annotations: readOnlyAnnotations(),
    },
    async ({ project_id, reference, type, include_embedded_assets }) => {
      const session = projects.get(project_id);
      const fragment = exportEntityFragment(
        session.data,
        reference,
        type as EntityType | undefined,
      );
      return result({
        ...fragment,
        value: include_embedded_assets ? fragment.value : redactEmbeddedAssets(fragment.value),
      });
    },
  );

  server.registerTool(
    'iccplus_import_fragment',
    {
      title: 'Import ICC Plus fragment',
      description: 'Import a fragment through the same parent/default/normalization layer used for normal entity creation.',
      inputSchema: {
        project_id: z.string().uuid(),
        type: EntityTypeSchema,
        value: JsonObjectSchema,
        parent: z.string().optional(),
        position: z.number().int().nonnegative().optional(),
        preserve_ids: z.boolean().default(false),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      const transaction = projects.transact(
        args.project_id,
        { label: `Import ${args.type} fragment`, ...transactionOptions(args) },
        (draft) => importEntityFragment(draft, {
          type: args.type as EntityType,
          value: args.value as JsonObject,
          ...(args.parent ? { parent: args.parent } : {}),
          ...(args.position !== undefined ? { position: args.position } : {}),
          preserveIds: args.preserve_ids,
        }),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        entity: entityOutput(transaction.result.entity, false),
        normalization_changes: transaction.result.normalizationChanges,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_set_asset',
    {
      title: 'Set ICC Plus image or audio asset',
      description: 'Set any string field from a workspace file as a data URL, or from an external/data URL, using an exact JSON Pointer.',
      inputSchema: {
        project_id: z.string().uuid(),
        target_path: z.string().startsWith('/'),
        source_path: z.string().optional(),
        url: z.string().optional(),
        media_type: z.string().optional(),
        expected_revision: RevisionSchema,
        dry_run: z.boolean().default(false),
        validation_policy: ValidationPolicySchema.default('no_new_errors'),
      },
      annotations: mutationAnnotations(),
    },
    async (args) => {
      if (Boolean(args.source_path) === Boolean(args.url)) {
        throw new Error('Provide exactly one of source_path or url.');
      }
      let value: string;
      if (args.source_path) {
        const path = await projects.resolvePath(args.source_path, true);
        const metadata = await stat(path);
        const maximum = Number(process.env.ICCPLUS_MAX_ASSET_BYTES ?? 25 * 1024 * 1024);
        if (!metadata.isFile()) throw new Error('Asset source is not a file.');
        if (metadata.size > maximum) {
          throw new Error(`Asset is ${metadata.size} bytes; limit is ${maximum}.`);
        }
        const mediaType = args.media_type
          ?? (lookupMime(basename(path)) || 'application/octet-stream');
        value = `data:${mediaType};base64,${(await readFile(path)).toString('base64')}`;
      } else {
        value = args.url!;
      }
      const session = projects.get(args.project_id);
      let op: 'add' | 'replace' = 'replace';
      try {
        getAtPointer(session.data, args.target_path);
      } catch {
        op = 'add';
      }
      const transaction = projects.patch(
        args.project_id,
        [{ op, path: args.target_path, value }],
        transactionOptions(args),
      );
      return result({
        project_id: args.project_id,
        revision: transaction.revision,
        dry_run: transaction.dryRun,
        target_path: args.target_path,
        stored: args.source_path ? 'data_url' : 'url',
        bytes: args.source_path ? Buffer.byteLength(value) : value.length,
        validation: transaction.validation,
      });
    },
  );

  server.registerTool(
    'iccplus_save_project',
    {
      title: 'Save ICC Plus project',
      description: 'Atomically save project JSON inside ICCPLUS_WORKSPACE after optional strict validation.',
      inputSchema: {
        project_id: z.string().uuid(),
        path: z.string().optional(),
        overwrite: z.boolean().default(false),
        pretty: z.boolean().default(true),
        create_directories: z.boolean().default(false),
        require_valid: z.boolean().default(true),
        expected_revision: RevisionSchema,
      },
      annotations: mutationAnnotations(true),
    },
    async (args) => {
      const session = projects.get(args.project_id);
      if (args.require_valid) {
        const validation = validateProject(session.data);
        if (!validation.valid) {
          throw new Error(`Save rejected: project has ${validation.errors} validation errors.`);
        }
      }
      const saved = await projects.save(args.project_id, {
        ...(args.path ? { path: args.path } : {}),
        overwrite: args.overwrite,
        pretty: args.pretty,
        createDirectories: args.create_directories,
        ...(args.expected_revision !== undefined ? { expectedRevision: args.expected_revision } : {}),
      });
      return result({ project_id: args.project_id, ...saved });
    },
  );

  server.registerTool(
    'iccplus_build_viewer',
    {
      title: 'Build ICC Plus viewer archive',
      description: 'Package the project into an official web/local viewer template, applying loading config and optional deduplicated image separation.',
      inputSchema: {
        project_id: z.string().uuid(),
        template_path: z.string().describe('web_viewer.zip or local_viewer.zip path inside ICCPLUS_WORKSPACE.'),
        output_path: z.string(),
        local: z.boolean().optional(),
        separate_images: z.boolean().optional(),
        overwrite: z.boolean().default(false),
        require_valid: z.boolean().default(true),
        expected_revision: RevisionSchema,
      },
      annotations: mutationAnnotations(true),
    },
    async (args) => {
      const session = projects.get(args.project_id);
      if (
        args.expected_revision !== undefined
        && args.expected_revision !== session.revision
      ) {
        throw new Error(
          `Revision conflict: expected ${args.expected_revision}, current ${session.revision}.`,
        );
      }
      if (args.require_valid) {
        const validation = validateProject(session.data);
        if (!validation.valid) {
          throw new Error(`Viewer build rejected: project has ${validation.errors} validation errors.`);
        }
      }
      const templatePath = await projects.resolvePath(args.template_path, true);
      const outputPath = await projects.resolvePath(args.output_path, false);
      if (!args.overwrite) {
        await access(outputPath).then(
          () => { throw new Error('Output already exists. Set overwrite=true to replace it.'); },
          () => undefined,
        );
      }
      const built = await buildViewerFile(templatePath, outputPath, session.data, {
        ...(args.local !== undefined ? { local: args.local } : {}),
        ...(args.separate_images !== undefined ? { separateImages: args.separate_images } : {}),
        overwrite: args.overwrite,
      });
      return result({
        project_id: args.project_id,
        revision: session.revision,
        ...built,
      });
    },
  );

  server.registerTool(
    'iccplus_history',
    {
      title: 'Undo or redo ICC Plus mutation',
      description: 'Undo or redo one in-memory mutation while keeping revision conflict protection.',
      inputSchema: {
        project_id: z.string().uuid(),
        action: z.enum(['undo', 'redo']),
        expected_revision: RevisionSchema,
      },
      annotations: mutationAnnotations(true),
    },
    async ({ project_id, action, expected_revision }) => {
      const session = action === 'undo'
        ? projects.undo(project_id, expected_revision)
        : projects.redo(project_id, expected_revision);
      return result({
        project_id,
        revision: session.revision,
        dirty: session.revision !== session.savedRevision,
        summary: projects.index(project_id).summary(),
        validation: validateProject(session.data),
      });
    },
  );

  server.registerTool(
    'iccplus_close_project',
    {
      title: 'Close ICC Plus project',
      description: 'Close an in-memory session. Unsaved sessions require force=true.',
      inputSchema: {
        project_id: z.string().uuid(),
        force: z.boolean().default(false),
        expected_revision: RevisionSchema,
      },
      annotations: mutationAnnotations(true),
    },
    async ({ project_id, force, expected_revision }) => {
      projects.close(project_id, force, expected_revision);
      return result({ project_id, closed: true });
    },
  );

  server.registerResource(
    'iccplus-css-catalog',
    'iccplus://css/catalog',
    {
      title: 'ICC Plus Custom CSS selector catalog',
      description: 'Official viewer classes with source evidence, dynamic selector patterns, and inline-style risk.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [{
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify({
          metadata: cssCatalogMetadata(),
          selectors: getCssCatalog(),
        }, null, 2),
      }],
    }),
  );

  server.registerResource(
    'iccplus-project-css',
    new ResourceTemplate('iccplus://project/{projectId}/css', {
      list: async () => ({
        resources: projects.list().map((project) => ({
          uri: 'iccplus://project/' + project.id + '/css',
          name: 'ICC Plus CSS ' + project.id,
          mimeType: 'application/json',
        })),
      }),
      complete: {
        projectId: () => projects.list().map((project) => project.id),
      },
    }),
    {
      title: 'Open ICC Plus project Custom CSS',
      description: 'Stored Custom CSS, static analysis, and exact project selector targets for an open session.',
      mimeType: 'application/json',
    },
    async (uri, variables) => {
      const id = String(variables.projectId);
      const session = projects.get(id);
      const css = asString(session.data.customCSS);
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify({
            project_id: id,
            revision: session.revision,
            css,
            analysis: analyzeCustomCss(css, session.data),
            targets: listProjectCssTargets(session.data),
          }, null, 2),
        }],
      };
    },
  );

  server.registerResource(
    'iccplus-project-schema',
    'iccplus://schema/project',
    {
      title: 'ICC Plus project JSON Schema',
      description: 'Generated from the current upstream App TypeScript model.',
      mimeType: 'application/schema+json',
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: 'application/schema+json', text: JSON.stringify(schema, null, 2) }],
    }),
  );

  server.registerResource(
    'iccplus-feature-catalog',
    'iccplus://features',
    {
      title: 'ICC Plus feature catalog',
      description: 'Feature families that connect authored fields to viewer/creator behavior.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [{
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify({
          upstream: sourceAnalysis.upstream,
          coverage: featureCoverage(),
          features: listFeatureFamilies(),
        }, null, 2),
      }],
    }),
  );

  server.registerResource(
    'iccplus-deployment-manifest',
    'iccplus://deployment',
    {
      title: 'ICC Plus deployment manifest',
      description: 'SHA-256 manifest for the analyzed deployment repository and official viewer archives.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [{
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify(deploymentManifest, null, 2),
      }],
    }),
  );

  server.registerResource(
    'iccplus-third-party-licenses',
    'iccplus://licenses',
    {
      title: 'ICC Plus third-party license metadata',
      description: 'UTF-8 normalized license metadata shipped by the analyzed ICC Plus source release.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [{
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify(thirdPartyLicenses, null, 2),
      }],
    }),
  );

  server.registerResource(
    'iccplus-project-summary',
    new ResourceTemplate('iccplus://project/{projectId}/summary', {
      list: async () => ({
        resources: projects.list().map((project) => ({
          uri: `iccplus://project/${project.id}/summary`,
          name: `ICC Plus ${project.id}`,
          mimeType: 'application/json',
        })),
      }),
      complete: {
        projectId: () => projects.list().map((project) => project.id),
      },
    }),
    {
      title: 'Open ICC Plus project summary',
      description: 'Revision, validation, and content counts for an open project.',
      mimeType: 'application/json',
    },
    async (uri, variables) => {
      const id = String(variables.projectId);
      const session = projects.get(id);
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify({
            project_id: id,
            revision: session.revision,
            summary: projects.index(id).summary(),
            validation: validateProject(session.data, { maxDiagnostics: 100 }),
          }, null, 2),
        }],
      };
    },
  );

  server.registerPrompt(
    'author-iccplus-project',
    {
      title: 'Author an ICC Plus project safely',
      description: 'Workflow prompt for translating a CYOA concept into a validated ICC Plus project.',
      argsSchema: {
        concept: z.string(),
        project_id: z.string().optional(),
      },
    },
    async ({ concept, project_id }) => ({
      description: 'Schema-aware ICC Plus authoring workflow',
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: [
            `Author this ICC Plus CYOA concept: ${concept}`,
            project_id ? `Use open project_id ${project_id}.` : 'Create a new project first.',
            'Discover relevant feature families with iccplus_capabilities.',
            'Build points/groups/variables before requirements that reference them.',
            'Build rows before choices, and choices before scores/addons.',
            'For advanced styling, discover exact targets with iccplus_css_catalog, analyze candidate CSS, then apply it with iccplus_css_set.',
            'Use expected_revision for every mutation, validate, dry-run normalization, then save.',
          ].join('\n'),
        },
      }],
    }),
  );

  server.registerPrompt(
    'audit-iccplus-project',
    {
      title: 'Audit an ICC Plus project',
      description: 'Workflow prompt for full schema, reference, behavior, and packaging review.',
      argsSchema: {
        project_id: z.string(),
      },
    },
    async ({ project_id }) => ({
      description: 'ICC Plus project completion audit',
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: [
            `Audit ICC Plus project_id ${project_id}.`,
            'Inspect status and all entity families, run strict validation, and explain each error.',
            'Check points, requirements, group/design reciprocity, choice effect targets, media, and viewer export settings.',
            'Analyze Custom CSS for unresolved project selectors, syntax errors, remote assets, and inline-style conflicts.',
            'Dry-run normalization before applying it. Revalidate and only then build or save.',
          ].join('\n'),
        },
      }],
    }),
  );

  return { server, projects };
}
