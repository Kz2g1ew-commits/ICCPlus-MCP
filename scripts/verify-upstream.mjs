import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import process from 'node:process';
import JSZip from 'jszip';
import { buildViewerArchive } from '../dist/domain/viewer-builder.js';

function argumentsFrom(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    const value = argv[index + 1];
    if (key?.startsWith('--') && value && !value.startsWith('--')) {
      result[key.slice(2)] = value;
      index += 1;
    }
  }
  return result;
}

function hash(value) {
  return createHash('sha256').update(value).digest('hex');
}

function commit(directory) {
  return execFileSync('git', ['-C', directory, 'rev-parse', 'HEAD'], {
    encoding: 'utf8',
  }).trim();
}

async function verifyFiles(root, entries, label) {
  let bytes = 0;
  for (const entry of entries) {
    const content = await readFile(join(root, entry.path));
    if (content.length !== entry.bytes || hash(content) !== entry.sha256) {
      throw new Error(`${label} evidence mismatch: ${entry.path}`);
    }
    bytes += content.length;
  }
  return bytes;
}

const args = argumentsFrom(process.argv.slice(2));
const sourceRoot = resolve(args.source ?? join(process.cwd(), '..', 'ICC-Plus-Svelte'));
const deploymentRoot = resolve(args.deployment ?? join(process.cwd(), '..', 'ICCPlus'));
const analysis = JSON.parse(
  await readFile(new URL('../src/generated/source-analysis.json', import.meta.url), 'utf8'),
);
const deployment = JSON.parse(
  await readFile(new URL('../src/generated/deployment-manifest.json', import.meta.url), 'utf8'),
);
const defaultProject = JSON.parse(
  await readFile(new URL('../src/generated/default-project.json', import.meta.url), 'utf8'),
);

if (commit(sourceRoot) !== analysis.upstream.commit) {
  throw new Error('Source checkout commit does not match generated analysis.');
}
if (commit(deploymentRoot) !== deployment.commit) {
  throw new Error('Deployment checkout commit does not match generated manifest.');
}

const sourceEntries = analysis.components.map((item) => ({
  path: item.file,
  bytes: item.bytes,
  sha256: item.sha256,
}));
const sourceBytes = await verifyFiles(sourceRoot, sourceEntries, 'source');
const deploymentBytes = await verifyFiles(deploymentRoot, deployment.files, 'deployment');
if (sourceBytes !== analysis.coverage.sourceBytes) {
  throw new Error('Analyzed source byte total does not match.');
}
if (deploymentBytes !== deployment.coverage.bytes) {
  throw new Error('Deployment byte total does not match.');
}

for (const archiveInfo of deployment.archives) {
  const archive = await JSZip.loadAsync(await readFile(join(deploymentRoot, archiveInfo.path)));
  for (const entry of archiveInfo.entries) {
    const item = archive.file(entry.path);
    if (!item) throw new Error(`${archiveInfo.path} is missing ${entry.path}.`);
    const content = await item.async('nodebuffer');
    if (content.length !== entry.bytes || hash(content) !== entry.sha256) {
      throw new Error(`${archiveInfo.path} entry evidence mismatch: ${entry.path}`);
    }
  }
}

const web = await buildViewerArchive(
  await readFile(join(deploymentRoot, 'web_viewer.zip')),
  defaultProject,
  { local: false, separateImages: true },
);
const webZip = await JSZip.loadAsync(web.archive);
const webProject = JSON.parse(await webZip.file('project.json').async('string'));
if (webProject.version !== analysis.upstream.version) {
  throw new Error('Web viewer build contains the wrong project version.');
}

const local = await buildViewerArchive(
  await readFile(join(deploymentRoot, 'local_viewer.zip')),
  defaultProject,
  { local: true },
);
const localZip = await JSZip.loadAsync(local.archive);
if (localZip.file('project.json')) {
  throw new Error('Local viewer build unexpectedly contains project.json.');
}
const localApp = await localZip.file('js/app.js')?.async('string');
if (!localApp?.includes(`"version":"${analysis.upstream.version}"`)) {
  throw new Error('Local viewer build does not contain the analyzed project.');
}

process.stdout.write(`${JSON.stringify({
  sourceCommit: analysis.upstream.commit,
  deploymentCommit: deployment.commit,
  sourceFiles: sourceEntries.length,
  sourceFunctions: analysis.functions.length,
  deploymentFiles: deployment.files.length,
  archiveEntries: deployment.coverage.archiveEntries,
  webArchiveFiles: web.archiveFiles,
  localArchiveFiles: local.archiveFiles,
}, null, 2)}\n`);
