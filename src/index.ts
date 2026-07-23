#!/usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createIccPlusServer } from './server.js';

const { server } = createIccPlusServer();

async function shutdown(): Promise<void> {
  await server.close();
  process.exit(0);
}

process.once('SIGINT', () => {
  void shutdown();
});
process.once('SIGTERM', () => {
  void shutdown();
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error('ICCPlus MCP server is running on stdio.');
