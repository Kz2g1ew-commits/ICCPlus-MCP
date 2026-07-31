import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const root = await mkdtemp(join(tmpdir(), 'iccplus-mcp-stdio-'));
const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [join(projectRoot, 'dist/index.js')],
  cwd: projectRoot,
  env: {
    ...Object.fromEntries(
      Object.entries(process.env).filter((entry) => entry[1] !== undefined),
    ),
    ICCPLUS_WORKSPACE: root,
  },
  stderr: 'pipe',
});
const client = new Client({ name: 'iccplus-stdio-smoke', version: '1.0.0' });

try {
  await client.connect(transport);
  const tools = await client.listTools();
  if (tools.tools.length !== 26) {
    throw new Error(`Expected 26 tools, received ${tools.tools.length}.`);
  }
  const response = await client.callTool({
    name: 'iccplus_capabilities',
    arguments: {},
  });
  const coverage = response.structuredContent?.coverage;
  if (
    typeof coverage !== 'object'
    || coverage === null
    || coverage.coveredTypes !== coverage.declaredTypes
  ) {
    throw new Error('Capability coverage is incomplete.');
  }
  process.stdout.write('stdio MCP smoke test passed (26 tools, complete type coverage).\n');
} finally {
  await client.close();
  await rm(root, { recursive: true, force: true });
}
