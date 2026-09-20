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
  it('packages point bar images and preserves v2.10.6 settings and saved selections', async () => {
    const image = 'data:image/png;base64,aGVsbG8=';
    const project = createDefaultProject({
      activated: ['selected/ON#2'],
      styling: { barBackgroundImage: image, isBarBgRepeat: true, isBarBgOverlay: true },
      viewerConfig: { loadingBgImage: image },
    });
    const built = await buildViewerArchive(await template(false), project, { separateImages: true });
    const zip = await JSZip.loadAsync(built.archive);
    const saved = JSON.parse(await zip.file('project.json')!.async('string'));
    expect(saved.styling.barBackgroundImage).toBe('images/PointBarBg.png');
    expect(await zip.file(saved.styling.barBackgroundImage)!.async('string')).toBe('hello');
    expect(saved.viewerConfig.loadingBgImage).toBe(saved.styling.barBackgroundImage);
    expect(built.separatedAssets).toBe(1);
    expect(saved.styling).toMatchObject({ isBarBgRepeat: true, isBarBgOverlay: true });
    expect(saved.activated).toEqual(['selected/ON#2']);
    expect(project.styling).toMatchObject({ barBackgroundImage: image });

    const inline = await buildViewerArchive(await template(false), project, { separateImages: false });
    const inlineZip = await JSZip.loadAsync(inline.archive);
    expect(JSON.parse(await inlineZip.file('project.json')!.async('string')).styling.barBackgroundImage).toBe(image);
    const local = await buildViewerArchive(await template(true), project, { local: true });
    const localZip = await JSZip.loadAsync(local.archive);
    expect(await localZip.file('js/app.js')!.async('string')).toContain(`"barBackgroundImage":"${image}"`);
  });

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
