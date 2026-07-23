import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { afterEach, describe, expect, it } from 'vitest';
import { createIccPlusServer } from '../src/server.js';

const cleanup: string[] = [];

afterEach(async () => {
  await Promise.all(cleanup.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

describe('MCP integration', () => {
  it('publishes the complete tool surface with explicit safety and concurrency contracts', async () => {
    const { server } = createIccPlusServer();
    const client = new Client({ name: 'surface-audit', version: '1.0.0' });
    const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
    await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);

    try {
      const listed = await client.listTools();
      const byName = new Map(listed.tools.map((tool) => [tool.name, tool]));
      expect([...byName.keys()].sort()).toEqual([
        'iccplus_build_viewer',
        'iccplus_capabilities',
        'iccplus_close_project',
        'iccplus_create_entity',
        'iccplus_create_project',
        'iccplus_delete_entity',
        'iccplus_duplicate_entity',
        'iccplus_evaluate_requirements',
        'iccplus_export_fragment',
        'iccplus_history',
        'iccplus_import_fragment',
        'iccplus_list_projects',
        'iccplus_move_entity',
        'iccplus_normalize',
        'iccplus_open_project',
        'iccplus_patch',
        'iccplus_project_status',
        'iccplus_query',
        'iccplus_save_project',
        'iccplus_schema',
        'iccplus_set_asset',
        'iccplus_update_entity',
        'iccplus_validate',
      ]);

      const readOnly = new Set([
        'iccplus_capabilities',
        'iccplus_schema',
        'iccplus_open_project',
        'iccplus_list_projects',
        'iccplus_project_status',
        'iccplus_query',
        'iccplus_validate',
        'iccplus_evaluate_requirements',
        'iccplus_export_fragment',
      ]);
      const revisioned = new Set([
        'iccplus_create_entity',
        'iccplus_update_entity',
        'iccplus_duplicate_entity',
        'iccplus_move_entity',
        'iccplus_delete_entity',
        'iccplus_patch',
        'iccplus_normalize',
        'iccplus_import_fragment',
        'iccplus_set_asset',
        'iccplus_save_project',
        'iccplus_build_viewer',
        'iccplus_history',
        'iccplus_close_project',
      ]);
      const dryRunnable = new Set([
        'iccplus_create_entity',
        'iccplus_update_entity',
        'iccplus_duplicate_entity',
        'iccplus_move_entity',
        'iccplus_delete_entity',
        'iccplus_patch',
        'iccplus_normalize',
        'iccplus_import_fragment',
        'iccplus_set_asset',
      ]);

      for (const tool of listed.tools) {
        expect(tool.description).toBeTruthy();
        expect(tool.annotations?.readOnlyHint).toBe(readOnly.has(tool.name));
        const properties = tool.inputSchema.properties ?? {};
        if (revisioned.has(tool.name)) expect(properties).toHaveProperty('expected_revision');
        if (dryRunnable.has(tool.name)) expect(properties).toHaveProperty('dry_run');
      }
    } finally {
      await client.close();
      await server.close();
    }
  });

  it('discovers resources/prompts/tools and completes an authoring-save workflow', async () => {
    const root = await mkdtemp(join(tmpdir(), 'iccplus-mcp-'));
    cleanup.push(root);
    const { server } = createIccPlusServer({ workspaceRoot: root });
    const client = new Client({ name: 'test-client', version: '1.0.0' });
    const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
    await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);

    try {
      const tools = await client.listTools();
      const resources = await client.listResources();
      const prompts = await client.listPrompts();
      expect(tools.tools).toHaveLength(23);
      expect(resources.resources.map((resource) => resource.uri)).toContain('iccplus://features');
      expect(resources.resources.map((resource) => resource.uri)).toContain('iccplus://deployment');
      expect(resources.resources.map((resource) => resource.uri)).toContain('iccplus://licenses');
      expect(prompts.prompts.map((prompt) => prompt.name)).toContain('author-iccplus-project');

      const functionEvidence = await client.callTool({
        name: 'iccplus_capabilities',
        arguments: { topic: 'function:selectObject' },
      });
      const matches = functionEvidence.structuredContent!.matches as Array<{
        file: string;
        line: number;
        source: string;
      }>;
      expect(matches.some((item) =>
        item.file.endsWith('/store/store.svelte.ts')
        && item.line === 7052
        && item.source.includes('export async function selectObject')
      )).toBe(true);

      const sourceEvidence = await client.callTool({
        name: 'iccplus_capabilities',
        arguments: { topic: 'source:src/lib/creator/AppObject.svelte' },
      });
      const source = sourceEvidence.structuredContent!.source as {
        file: string;
        functions: unknown[];
        fields: string[];
      };
      expect(source.file).toBe('ICCPlus/src/lib/creator/AppObject.svelte');
      expect(source.functions.length).toBeGreaterThan(0);
      expect(source.fields).toContain('discountRows');

      const deploymentEvidence = await client.callTool({
        name: 'iccplus_capabilities',
        arguments: { topic: 'deployment:web_viewer.zip' },
      });
      const deploymentArchive = deploymentEvidence.structuredContent!.archive as {
        entries: unknown[];
      };
      expect(deploymentArchive.entries.length).toBeGreaterThan(0);

      const created = await client.callTool({
        name: 'iccplus_create_project',
        arguments: {},
      });
      const projectId = created.structuredContent!.project_id as string;

      const row = await client.callTool({
        name: 'iccplus_create_entity',
        arguments: {
          project_id: projectId,
          type: 'row',
          values: { id: 'intro', title: 'Introduction' },
          expected_revision: 0,
        },
      });
      expect(row.isError).not.toBe(true);

      const choice = await client.callTool({
        name: 'iccplus_create_entity',
        arguments: {
          project_id: projectId,
          type: 'choice',
          parent: 'intro',
          values: { id: 'begin', title: 'Begin' },
          expected_revision: 1,
        },
      });
      expect(choice.isError).not.toBe(true);

      const validation = await client.callTool({
        name: 'iccplus_validate',
        arguments: { project_id: projectId },
      });
      expect((validation.structuredContent!.report as { valid: boolean }).valid).toBe(true);

      const saved = await client.callTool({
        name: 'iccplus_save_project',
        arguments: {
          project_id: projectId,
          path: 'project.json',
          expected_revision: 2,
        },
      });
      expect(saved.isError).not.toBe(true);
      const project = JSON.parse(await readFile(join(root, 'project.json'), 'utf8'));
      expect(project.rows[0].objects[0].id).toBe('begin');
    } finally {
      await client.close();
      await server.close();
    }
  });
});
