import JSZip from 'jszip';
import { describe, expect, it } from 'vitest';
import { createDefaultProject } from '../src/domain/factories.js';
import { buildViewerArchive } from '../src/domain/viewer-builder.js';

async function template(local: boolean): Promise<Buffer> {
  const zip = new JSZip();
  zip.file(
    'index.html',
    '<!doctype html><html><head><title>Old</title></head><body><div id="projectSize">0</div><div id="indicator" class="ind1"><div>Loading</div></div></body></html>',
  );
  zip.file('css/loading.css', ':root { --bg: black; } body { color: white; }');
  if (local) {
    zip.file(
      'js/app.js',
      'start\n/*! Delete and replace this part with your project if you are pasting it in. */\n{version:"old"}\n/*! End */\nend',
    );
  }
  return zip.generateAsync({ type: 'nodebuffer' });
}

describe('viewer packaging', () => {
  it('builds a configured web viewer and deduplicates equal images', async () => {
    const image = 'data:image/png;base64,aGVsbG8=';
    const project = createDefaultProject({
      viewerConfig: {
        title: 'Safe <Title>',
        loadingText: 'Wait <script>',
        useSeparateImages: true,
        useLocalViewer: false,
        loadingBgImage: image,
        favicon: image,
      },
      styling: { backgroundImage: image },
    });
    const built = await buildViewerArchive(await template(false), project);
    const zip = await JSZip.loadAsync(built.archive);
    const html = await zip.file('index.html')!.async('string');

    expect(built.local).toBe(false);
    expect(built.separateImages).toBe(true);
    expect(built.separatedAssets).toBe(1);
    expect(zip.file('project.json')).not.toBeNull();
    expect(html).toContain('<title>Safe &lt;Title&gt;</title>');
    expect(html).not.toContain('<script>');
  });

  it('embeds data in a local viewer without project.json', async () => {
    const project = createDefaultProject({
      viewerConfig: { title: 'Offline', useLocalViewer: true, useSeparateImages: false },
    });
    const built = await buildViewerArchive(await template(true), project);
    const zip = await JSZip.loadAsync(built.archive);
    const source = await zip.file('js/app.js')!.async('string');

    expect(built.local).toBe(true);
    expect(zip.file('project.json')).toBeNull();
    expect(source).toContain('"title":"Offline"');
    expect(source).toContain('/*! End */');
  });
});
