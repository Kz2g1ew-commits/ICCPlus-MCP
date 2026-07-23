#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import process from 'node:process';
import JSZip from 'jszip';
import * as tsModule from 'typescript';
import { createGenerator } from 'ts-json-schema-generator';

const ts = tsModule.default;

function parseArguments(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key?.startsWith('--')) continue;
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      result[key.slice(2)] = true;
    } else {
      result[key.slice(2)] = value;
      index += 1;
    }
  }
  return result;
}

function findCreatorRoot(input) {
  const candidates = [
    resolve(input),
    resolve(input, 'ICCPlus'),
    resolve(input, 'ICC-Plus-Svelte', 'ICCPlus'),
  ];
  for (const candidate of candidates) {
    try {
      if (statSync(join(candidate, 'src/lib/store/types.ts')).isFile()) return candidate;
    } catch {
      // Continue through all supported layouts.
    }
  }
  throw new Error(`Could not find ICCPlus/src/lib/store/types.ts below ${input}`);
}

function findDeploymentRoot(input) {
  const candidates = [
    resolve(input),
    resolve(input, 'ICCPlus'),
  ];
  for (const candidate of candidates) {
    try {
      if (
        statSync(join(candidate, 'web_viewer.zip')).isFile()
        && statSync(join(candidate, 'local_viewer.zip')).isFile()
        && statSync(join(candidate, 'index.html')).isFile()
      ) {
        return candidate;
      }
    } catch {
      // Continue through all supported layouts.
    }
  }
  throw new Error(`Could not find the ICCPlus deployment repository below ${input}`);
}

function walk(directory, predicate, output = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walk(absolute, predicate, output);
    } else if (predicate(absolute)) {
      output.push(absolute);
    }
  }
  return output;
}

function propertyName(node) {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) {
    return node.text;
  }
  return node.getText();
}

function staticEvaluator(sourceFile) {
  const bindings = new Map();

  function evaluate(node) {
    if (!node) return undefined;
    if (
      ts.isAsExpression(node)
      || ts.isSatisfiesExpression(node)
      || ts.isTypeAssertionExpression(node)
      || ts.isParenthesizedExpression(node)
      || ts.isNonNullExpression(node)
    ) {
      return evaluate(node.expression);
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (ts.isIdentifier(node)) return structuredClone(bindings.get(node.text));
    if (ts.isPrefixUnaryExpression(node)) {
      const operand = evaluate(node.operand);
      if (typeof operand !== 'number') return undefined;
      if (node.operator === ts.SyntaxKind.MinusToken) return -operand;
      if (node.operator === ts.SyntaxKind.PlusToken) return operand;
      return undefined;
    }
    if (ts.isTemplateExpression(node)) {
      let value = node.head.text;
      for (const span of node.templateSpans) {
        const expression = evaluate(span.expression);
        if (expression === undefined) return undefined;
        value += String(expression) + span.literal.text;
      }
      return value;
    }
    if (ts.isArrayLiteralExpression(node)) {
      const result = [];
      for (const element of node.elements) {
        if (ts.isSpreadElement(element)) {
          const spread = evaluate(element.expression);
          if (!Array.isArray(spread)) return undefined;
          result.push(...spread);
        } else {
          const value = evaluate(element);
          if (value === undefined) return undefined;
          result.push(value);
        }
      }
      return result;
    }
    if (ts.isObjectLiteralExpression(node)) {
      const result = {};
      for (const property of node.properties) {
        if (ts.isSpreadAssignment(property)) {
          const spread = evaluate(property.expression);
          if (!spread || typeof spread !== 'object' || Array.isArray(spread)) return undefined;
          Object.assign(result, spread);
        } else if (ts.isPropertyAssignment(property)) {
          const value = evaluate(property.initializer);
          if (value === undefined) return undefined;
          result[propertyName(property.name)] = value;
        } else if (ts.isShorthandPropertyAssignment(property)) {
          const value = bindings.get(property.name.text);
          if (value === undefined) return undefined;
          result[property.name.text] = structuredClone(value);
        } else {
          return undefined;
        }
      }
      return result;
    }
    if (ts.isCallExpression(node) && node.arguments.length === 1) {
      return evaluate(node.arguments[0]);
    }
    return undefined;
  }

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
      const value = evaluate(declaration.initializer);
      if (value !== undefined) bindings.set(declaration.name.text, value);
    }
  }
  return bindings;
}

function lineOf(sourceFile, position) {
  return sourceFile.getLineAndCharacterOfPosition(position).line + 1;
}

function collectTypeFields(typesFile, sourceText) {
  const source = ts.createSourceFile(typesFile, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const types = {};
  const uniqueFields = new Set();

  for (const statement of source.statements) {
    if (!ts.isTypeAliasDeclaration(statement)) continue;
    const members = [];
    function visitType(node) {
      if (ts.isTypeLiteralNode(node)) {
        for (const member of node.members) {
          if (!ts.isPropertySignature(member) || !member.name) continue;
          const name = propertyName(member.name);
          uniqueFields.add(name);
          members.push({
            name,
            optional: Boolean(member.questionToken),
            type: member.type?.getText(source) ?? 'unknown',
            line: lineOf(source, member.getStart(source)),
          });
        }
      } else if (ts.isIntersectionTypeNode(node)) {
        for (const child of node.types) visitType(child);
      }
    }
    visitType(statement.type);
    types[statement.name.text] = {
      line: lineOf(source, statement.getStart(source)),
      fields: members,
      sourceType: statement.type.getText(source),
    };
  }
  return { types, uniqueFields: [...uniqueFields].sort() };
}

function collectFunctions(storeFile, sourceText) {
  const source = ts.createSourceFile(storeFile, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const functions = [];
  function visit(node) {
    if (ts.isFunctionDeclaration(node) && node.name) {
      functions.push({
        name: node.name.text,
        exported: node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword) ?? false,
        async: node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.AsyncKeyword) ?? false,
        line: lineOf(source, node.getStart(source)),
        parameters: node.parameters.map((parameter) => parameter.getText(source)),
        returnType: node.type?.getText(source) ?? null,
      });
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  return functions;
}

function scriptSegments(file, text) {
  if (!file.endsWith('.svelte')) return [{ text, lineOffset: 0 }];
  const segments = [];
  const expression = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of text.matchAll(expression)) {
    const source = match[1] ?? '';
    const sourceStart = (match.index ?? 0) + match[0].indexOf(source);
    segments.push({
      text: source,
      lineOffset: text.slice(0, sourceStart).split('\n').length - 1,
    });
  }
  return segments;
}

function hasModifier(node, kind) {
  return node.modifiers?.some((modifier) => modifier.kind === kind) ?? false;
}

function collectSourceDetails(file, text, repositoryRoot, declaredFields) {
  const functions = [];
  const imports = new Set();
  const relativePath = relative(repositoryRoot, file).replaceAll('\\', '/');
  if (!/\.(?:svelte|[cm]?[jt]s)$/.test(file) || /\.d\.ts$/.test(file)) {
    return { imports: [], functions: [] };
  }

  for (const segment of scriptSegments(file, text)) {
    const source = ts.createSourceFile(
      file,
      segment.text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    for (const statement of source.statements) {
      if (
        ts.isImportDeclaration(statement)
        && ts.isStringLiteral(statement.moduleSpecifier)
      ) {
        imports.add(statement.moduleSpecifier.text);
      }
    }

    function record(name, node, callable, kind, exported = false) {
      const functionSource = node.getText(source);
      const fields = [];
      for (const field of declaredFields) {
        const found = occurrences(functionSource, field);
        if (found.count > 0) fields.push(field);
      }
      functions.push({
        id: `${relativePath}:${lineOf(source, node.getStart(source)) + segment.lineOffset}:${name}`,
        name,
        kind,
        file: relativePath,
        line: lineOf(source, node.getStart(source)) + segment.lineOffset,
        endLine: lineOf(source, node.getEnd()) + segment.lineOffset,
        exported,
        async: hasModifier(callable, ts.SyntaxKind.AsyncKeyword),
        parameters: callable.parameters?.map((parameter) => parameter.getText(source)) ?? [],
        returnType: callable.type?.getText(source) ?? null,
        fields,
        source: functionSource,
      });
    }

    function visit(node) {
      if (ts.isFunctionDeclaration(node) && node.name) {
        record(
          node.name.text,
          node,
          node,
          'function',
          hasModifier(node, ts.SyntaxKind.ExportKeyword),
        );
      } else if (
        ts.isVariableDeclaration(node)
        && ts.isIdentifier(node.name)
        && node.initializer
        && (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer))
      ) {
        const statement = node.parent?.parent;
        record(
          node.name.text,
          node,
          node.initializer,
          ts.isArrowFunction(node.initializer) ? 'arrow' : 'function-expression',
          Boolean(statement && ts.isVariableStatement(statement)
            && hasModifier(statement, ts.SyntaxKind.ExportKeyword)),
        );
      } else if (
        ts.isPropertyAssignment(node)
        && (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer))
      ) {
        record(
          propertyName(node.name),
          node,
          node.initializer,
          ts.isArrowFunction(node.initializer) ? 'property-arrow' : 'property-function',
        );
      } else if (ts.isMethodDeclaration(node) && node.name) {
        record(propertyName(node.name), node, node, 'method');
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }

  return {
    imports: [...imports].sort(),
    functions,
  };
}

function occurrences(text, field) {
  const escaped = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const expression = new RegExp(`\\b${escaped}\\b`, 'g');
  const lines = [];
  let count = 0;
  for (const match of text.matchAll(expression)) {
    count += 1;
    if (lines.length < 20) {
      lines.push(text.slice(0, match.index).split('\n').length);
    }
  }
  return { count, lines };
}

function extractUiText(text) {
  const values = new Set();
  const expressions = [
    /\blabel\s*=\s*["']([^"'{}]+)["']/g,
    /<(?:Label|Header|Title|TabLabel)[^>]*>\s*([^<>{}\n][^<>{}]*)\s*<\/(?:Label|Header|Title|TabLabel)>/g,
  ];
  for (const expression of expressions) {
    for (const match of text.matchAll(expression)) {
      const value = match[1]?.replace(/\s+/g, ' ').trim();
      if (value) values.add(value);
    }
  }
  return [...values].sort();
}

function gitValue(repositoryRoot, args) {
  try {
    return execFileSync('git', ['-C', repositoryRoot, ...args], { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

function readJsonWithBom(file) {
  const content = readFileSync(file);
  let text;
  if (content[0] === 0xff && content[1] === 0xfe) {
    text = content.subarray(2).toString('utf16le');
  } else {
    text = content.toString('utf8').replace(/^\uFEFF/, '');
  }
  return JSON.parse(text);
}

const args = parseArguments(process.argv.slice(2));
const sourceInput = args.source
  ?? process.env.ICCPLUS_SOURCE_ROOT
  ?? join(process.cwd(), '..', 'ICC-Plus-Svelte');
const creatorRoot = findCreatorRoot(sourceInput);
const repositoryRoot = dirname(creatorRoot);
const viewerRoot = join(repositoryRoot, 'ICCPlus_Viewer');
const deploymentInput = args.deployment
  ?? process.env.ICCPLUS_DEPLOYMENT_ROOT
  ?? join(process.cwd(), '..', 'ICCPlus');
const deploymentRoot = findDeploymentRoot(deploymentInput);
const outputRoot = resolve(args.output ?? join(process.cwd(), 'src/generated'));
const analysisRoot = resolve(args.analysis ?? join(process.cwd(), 'analysis'));
const typesFile = join(creatorRoot, 'src/lib/store/types.ts');
const storeFile = join(creatorRoot, 'src/lib/store/store.svelte.ts');
const packageFile = join(creatorRoot, 'package.json');
const creatorSourceFiles = walk(
  join(creatorRoot, 'src'),
  (file) => /\.(?:ts|svelte)$/.test(file) && !/\.d\.ts$/.test(file),
).sort();
const auditedFileSet = new Set();
const addAudited = (directory, predicate) => {
  try {
    for (const file of walk(directory, predicate)) auditedFileSet.add(file);
  } catch {
    throw new Error(`Required upstream source directory is missing: ${directory}`);
  }
};
const authoredSource = (file) =>
  /\.(?:svelte|[cm]?[jt]s|css|scss)$/.test(file)
  && !/(?:\.d\.ts|\.map)$/.test(file);
addAudited(join(creatorRoot, 'src'), authoredSource);
addAudited(join(viewerRoot, 'src'), authoredSource);
addAudited(join(creatorRoot, 'patches'), (file) => file.endsWith('.patch'));
addAudited(join(viewerRoot, 'patches'), (file) => file.endsWith('.patch'));
for (const root of [creatorRoot, viewerRoot]) {
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const file = join(root, entry.name);
    if (
      /\.(?:html|[cm]?[jt]s)$/.test(entry.name)
      || entry.name === 'package.json'
      || /^tsconfig(?:\.[^.]+)?\.json$/.test(entry.name)
    ) {
      auditedFileSet.add(file);
    }
  }
}
const sourceFiles = [...auditedFileSet].sort();

const typesText = readFileSync(typesFile, 'utf8');
const storeText = readFileSync(storeFile, 'utf8');
const packageData = JSON.parse(readFileSync(packageFile, 'utf8'));
const typeAnalysis = collectTypeFields(typesFile, typesText);
const functions = collectFunctions(storeFile, storeText);
const bindings = staticEvaluator(
  ts.createSourceFile(storeFile, storeText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS),
);
const defaultProject = bindings.get('defaultApp');
if (!defaultProject || typeof defaultProject !== 'object' || Array.isArray(defaultProject)) {
  throw new Error('Failed to statically evaluate the upstream defaultApp object.');
}

const schema = createGenerator({
  path: typesFile,
  tsconfig: join(creatorRoot, 'tsconfig.app.json'),
  type: 'App',
  expose: 'all',
  topRef: true,
  jsDoc: 'extended',
  additionalProperties: true,
  skipTypeCheck: true,
}).createSchema('App');
schema.$id = 'https://github.com/Kz2g1ew-commits/ICCPlus-MCP/schema/iccplus-project.json';
schema.title = `ICC Plus project schema ${packageData.version}`;
schema.description = 'Generated from wahaha303/ICC-Plus-Svelte src/lib/store/types.ts.';
schema['x-iccplus-version'] = packageData.version;

const usage = {};
const components = [];
const allFunctions = [];
for (const file of sourceFiles) {
  const text = readFileSync(file, 'utf8');
  const relativePath = relative(repositoryRoot, file).replaceAll('\\', '/');
  const details = collectSourceDetails(
    file,
    text,
    repositoryRoot,
    typeAnalysis.uniqueFields,
  );
  allFunctions.push(...details.functions);
  const referencedFields = [];
  for (const field of typeAnalysis.uniqueFields) {
    const found = occurrences(text, field);
    if (found.count === 0) continue;
    referencedFields.push(field);
    usage[field] ??= [];
    usage[field].push({ file: relativePath, count: found.count, lines: found.lines });
  }
  components.push({
    file: relativePath,
    lines: text.split('\n').length,
    bytes: Buffer.byteLength(text),
    sha256: createHash('sha256').update(text).digest('hex'),
    source: text,
    fields: referencedFields,
    uiText: file.endsWith('.svelte') ? extractUiText(text) : [],
    imports: details.imports,
    functions: details.functions.map(({ source: _source, ...item }) => item),
  });
}

const sourceAnalysis = {
  generatedAt: new Date().toISOString(),
  upstream: {
    repository: 'wahaha303/ICC-Plus-Svelte',
    deploymentRepository: 'wahaha303/ICCPlus',
    version: packageData.version,
    commit: gitValue(repositoryRoot, ['rev-parse', 'HEAD']),
    branch: gitValue(repositoryRoot, ['branch', '--show-current']),
    deploymentCommit: gitValue(deploymentRoot, ['rev-parse', 'HEAD']),
    deploymentTag: gitValue(deploymentRoot, ['describe', '--tags', '--always']),
  },
  coverage: {
    sourceFiles: sourceFiles.length,
    creatorTypeScriptSvelteFiles: creatorSourceFiles.length,
    sourceBytes: components.reduce((total, item) => total + item.bytes, 0),
    declaredTypes: Object.keys(typeAnalysis.types).length,
    declaredUniqueFields: typeAnalysis.uniqueFields.length,
    fieldsReferencedOutsideTypes: typeAnalysis.uniqueFields.filter((field) =>
      (usage[field] ?? []).some((item) => !item.file.endsWith('/types.ts'))
    ).length,
    storeFunctions: functions.length,
    exportedStoreFunctions: functions.filter((item) => item.exported).length,
    sourceFunctions: allFunctions.length,
    exportedSourceFunctions: allFunctions.filter((item) => item.exported).length,
  },
  types: typeAnalysis.types,
  fields: Object.fromEntries(typeAnalysis.uniqueFields.map((field) => [field, usage[field] ?? []])),
  storeFunctions: functions,
  functions: allFunctions,
  components,
};

const deploymentFiles = walk(deploymentRoot, () => true).sort();
const deploymentEntries = deploymentFiles.map((file) => {
  const content = readFileSync(file);
  return {
    path: relative(deploymentRoot, file).replaceAll('\\', '/'),
    bytes: content.length,
    sha256: createHash('sha256').update(content).digest('hex'),
  };
});
const archives = [];
for (const file of deploymentFiles.filter((item) => item.endsWith('.zip'))) {
  const archive = await JSZip.loadAsync(readFileSync(file));
  const entries = [];
  for (const [path, item] of Object.entries(archive.files)) {
    if (item.dir) continue;
    const content = await item.async('nodebuffer');
    entries.push({
      path,
      bytes: content.length,
      sha256: createHash('sha256').update(content).digest('hex'),
    });
  }
  archives.push({
    path: relative(deploymentRoot, file).replaceAll('\\', '/'),
    entries: entries.sort((left, right) => left.path.localeCompare(right.path)),
  });
}
const deploymentManifest = {
  generatedAt: sourceAnalysis.generatedAt,
  repository: sourceAnalysis.upstream.deploymentRepository,
  version: sourceAnalysis.upstream.version,
  commit: sourceAnalysis.upstream.deploymentCommit,
  tag: sourceAnalysis.upstream.deploymentTag,
  coverage: {
    files: deploymentEntries.length,
    bytes: deploymentEntries.reduce((total, item) => total + item.bytes, 0),
    archives: archives.length,
    archiveEntries: archives.reduce((total, archive) => total + archive.entries.length, 0),
  },
  files: deploymentEntries,
  archives,
};
sourceAnalysis.coverage.deploymentFiles = deploymentManifest.coverage.files;
sourceAnalysis.coverage.deploymentBytes = deploymentManifest.coverage.bytes;
const thirdPartyLicenses = readJsonWithBom(join(creatorRoot, 'third-party-licenses.json'));
sourceAnalysis.coverage.thirdPartyPackages = Object.keys(thirdPartyLicenses).length;

mkdirSync(outputRoot, { recursive: true });
mkdirSync(analysisRoot, { recursive: true });
writeFileSync(join(outputRoot, 'iccplus.schema.json'), `${JSON.stringify(schema, null, 2)}\n`);
writeFileSync(join(outputRoot, 'default-project.json'), `${JSON.stringify(defaultProject, null, 2)}\n`);
writeFileSync(join(outputRoot, 'source-analysis.json'), `${JSON.stringify(sourceAnalysis, null, 2)}\n`);
writeFileSync(join(outputRoot, 'deployment-manifest.json'), `${JSON.stringify(deploymentManifest, null, 2)}\n`);
writeFileSync(join(outputRoot, 'third-party-licenses.json'), `${JSON.stringify(thirdPartyLicenses, null, 2)}\n`);

const functionRows = functions.map((item) =>
  `| \`${item.name}\` | ${item.exported ? 'public' : 'internal'} | ${item.async ? 'yes' : 'no'} | \`${relative(repositoryRoot, storeFile)}:${item.line}\` |`
).join('\n');
const componentRows = components
  .filter((item) => item.file.endsWith('.svelte'))
  .map((item) => `| \`${item.file}\` | ${item.lines} | ${item.fields.length} | ${item.uiText.length} |`)
  .join('\n');
const sourceFunctionRows = allFunctions
  .map((item) =>
    `| \`${item.name}\` | ${item.kind} | ${item.exported ? 'yes' : 'no'} | ${item.async ? 'yes' : 'no'} | \`${item.file}:${item.line}\` | ${item.fields.length} |`
  )
  .join('\n');
const markdown = `# ICC Plus v${packageData.version} codebase inventory

This inventory is generated from commit \`${sourceAnalysis.upstream.commit ?? 'unknown'}\`.
It is evidence for MCP model coverage; \`src/generated/source-analysis.json\` contains
the field-level occurrence map and UI strings.

## Coverage

- Audited authored code/text files: ${sourceAnalysis.coverage.sourceFiles}
- Creator TypeScript/Svelte files: ${sourceAnalysis.coverage.creatorTypeScriptSvelteFiles}
- Exact audited source bytes: ${sourceAnalysis.coverage.sourceBytes}
- Deployment files: ${sourceAnalysis.coverage.deploymentFiles}
- Deployment bytes: ${sourceAnalysis.coverage.deploymentBytes}
- Upstream third-party packages with license metadata: ${sourceAnalysis.coverage.thirdPartyPackages}
- Declared model types: ${sourceAnalysis.coverage.declaredTypes}
- Unique model fields: ${sourceAnalysis.coverage.declaredUniqueFields}
- Fields referenced by implementation code: ${sourceAnalysis.coverage.fieldsReferencedOutsideTypes}
- Store functions: ${sourceAnalysis.coverage.storeFunctions}
- Exported store functions: ${sourceAnalysis.coverage.exportedStoreFunctions}
- Named source functions/methods: ${sourceAnalysis.coverage.sourceFunctions}
- Exported source functions: ${sourceAnalysis.coverage.exportedSourceFunctions}

## State engine functions

| Function | Visibility | Async | Evidence |
| --- | --- | --- | --- |
${functionRows}

## All named source functions and methods

| Symbol | Kind | Exported | Async | Evidence | Model fields |
| --- | --- | --- | --- | --- | ---: |
${sourceFunctionRows}

## Svelte components

| Component | Lines | Model fields | Extracted UI labels |
| --- | ---: | ---: | ---: |
${componentRows}
`;
writeFileSync(join(analysisRoot, 'CODEBASE_INVENTORY.md'), markdown);

process.stdout.write(`${JSON.stringify(sourceAnalysis.coverage, null, 2)}\n`);
