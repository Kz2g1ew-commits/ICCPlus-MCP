import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import {
  describeFunction,
  describeSource,
  featureCoverage,
  listFeatureFamilies,
} from '../src/catalog/features.js';
import defaultProject from '../src/generated/default-project.json';
import deployment from '../src/generated/deployment-manifest.json';
import schema from '../src/generated/iccplus.schema.json';
import analysis from '../src/generated/source-analysis.json';
import thirdPartyLicenses from '../src/generated/third-party-licenses.json';

describe('generated upstream analysis', () => {
  it('covers every declared model type and field', () => {
    const coverage = featureCoverage();
    expect(coverage.uncoveredTypes).toEqual([]);
    expect(coverage.coveredTypes).toBe(coverage.declaredTypes);
    expect(coverage.declaredTypes).toBe(59);
    expect(coverage.declaredFields).toBe(888);
    expect(coverage.sourceFiles).toBe(227);
    expect(coverage.sourceFunctions).toBe(1406);
    expect(analysis.coverage.fieldsReferencedOutsideTypes).toBeGreaterThanOrEqual(886);
  });

  it('pins schema and defaults to the analyzed upstream release', () => {
    expect(analysis.upstream.version).toBe('2.9.29');
    expect(defaultProject.version).toBe(analysis.upstream.version);
    expect(schema['x-iccplus-version']).toBe(analysis.upstream.version);
    expect(schema.definitions.App).toBeDefined();
    expect(schema.definitions.Choice).toBeDefined();
    expect(schema.definitions.Requireds).toBeDefined();
    expect(schema.definitions.Styling).toBeDefined();
    expect(schema.definitions.Score.properties.discountNum).toBeDefined();
    expect(analysis.fields.discountNum.filter((usage) =>
      usage.file.endsWith('/store/store.svelte.ts')
    )).toHaveLength(2);
    expect(deployment.version).toBe(analysis.upstream.version);
    expect(deployment.commit).toBe(analysis.upstream.deploymentCommit);
    expect(deployment.files).toHaveLength(deployment.coverage.files);
    expect(deployment.coverage.files).toBe(75);
    expect(deployment.archives.map((item) => item.path).sort()).toEqual([
      'local_viewer.zip',
      'web_viewer.zip',
    ]);
    expect(new Set(deployment.files.map((item) => item.path)).size).toBe(deployment.files.length);
    for (const file of deployment.files) {
      expect(file.bytes).toBeGreaterThan(0);
      expect(file.sha256).toMatch(/^[a-f0-9]{64}$/);
    }
    expect(Object.keys(thirdPartyLicenses)).toHaveLength(analysis.coverage.thirdPartyPackages);
    expect(analysis.coverage.thirdPartyPackages).toBeGreaterThan(100);
  });

  it('provides a non-overlapping discovery surface for every major subsystem', () => {
    const ids = listFeatureFamilies().map((feature) => feature.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toContain('requirements');
    expect(ids).toContain('scoring.discounts');
    expect(ids).toContain('design.custom_css');
    expect(ids).toContain('design.inheritance');
    expect(ids).toContain('viewer.builds');
    expect(ids).toContain('media.audio');
  });

  it('makes every analyzed named function and source file discoverable with evidence', () => {
    expect(analysis.functions).toHaveLength(analysis.coverage.sourceFunctions);
    expect(analysis.components).toHaveLength(analysis.coverage.sourceFiles);
    for (const functionInfo of analysis.functions) {
      expect(functionInfo.id).toBeTruthy();
      expect(functionInfo.file).toBeTruthy();
      expect(functionInfo.line).toBeGreaterThan(0);
      expect(functionInfo.endLine).toBeGreaterThanOrEqual(functionInfo.line);
      expect(functionInfo.source).toBeTruthy();
      expect(describeFunction(functionInfo.name)).toContainEqual(functionInfo);
    }
    for (const source of analysis.components) {
      expect(Buffer.byteLength(source.source)).toBe(source.bytes);
      expect(source.source.split('\n')).toHaveLength(source.lines);
      expect(createHash('sha256').update(source.source).digest('hex')).toBe(source.sha256);
      expect(describeSource(source.file)).toEqual(source);
    }
  });
});
