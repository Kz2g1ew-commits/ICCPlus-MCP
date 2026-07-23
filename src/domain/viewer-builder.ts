import { randomUUID } from 'node:crypto';
import { link, readFile, rename, unlink, writeFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import JSZip from 'jszip';
import { asArray, asBoolean, asObject, asObjectArray, asString, cloneJson, isJsonObject, removeNulls } from './json.js';
import type { JsonObject, JsonValue } from './types.js';

export interface ViewerBuildOptions {
  local?: boolean;
  separateImages?: boolean;
  overwrite?: boolean;
}

export interface ViewerBuildResult {
  archive: Buffer;
  local: boolean;
  separateImages: boolean;
  projectBytes: number;
  separatedAssets: number;
  archiveFiles: number;
}

function dataUrl(value: string): { mime: string; payload: string } | undefined {
  const match = value.match(/^data:([^;,]+);base64,([\s\S]+)$/);
  return match ? { mime: match[1]!, payload: match[2]! } : undefined;
}

function extensionForMime(mime: string): string {
  const subtype = mime.split('/')[1]?.toLowerCase() ?? 'bin';
  const aliases: Record<string, string> = {
    'svg+xml': 'svg',
    'vnd.microsoft.icon': 'ico',
    'x-icon': 'ico',
    jpeg: 'jpg',
  };
  return aliases[subtype] ?? subtype.replace(/[^a-z0-9.+-]/g, '') ?? 'bin';
}

class AssetSeparator {
  private readonly known = new Map<string, string>();
  count = 0;

  constructor(private readonly zip: JSZip) {}

  separate(value: JsonValue | undefined, desiredPath: string): JsonValue | undefined {
    if (typeof value !== 'string') return value;
    const parsed = dataUrl(value);
    if (!parsed) return value;
    const existing = this.known.get(value);
    if (existing) return existing;
    const dot = desiredPath.lastIndexOf('.');
    const path = dot === -1
      ? `${desiredPath}.${extensionForMime(parsed.mime)}`
      : desiredPath;
    this.zip.file(path, parsed.payload, { base64: true });
    this.known.set(value, path);
    this.count += 1;
    return path;
  }
}

const STYLE_ASSETS: Array<[string, string]> = [
  ['backgroundImage', 'Bg'],
  ['rowBackgroundImage', 'RBg'],
  ['objectBackgroundImage', 'OBg'],
  ['addonBackgroundImage', 'ABg'],
  ['rowBorderImage', 'RB'],
  ['objectBorderImage', 'OB'],
  ['addonBorderImage', 'AB'],
];

function separateStyle(
  style: JsonObject | undefined,
  prefix: string,
  separator: AssetSeparator,
  allowed = STYLE_ASSETS,
): void {
  if (!style) return;
  for (const [property, suffix] of allowed) {
    const separated = separator.separate(style[property], `images/${prefix}${suffix}`);
    if (separated !== undefined) style[property] = separated;
  }
}

function separateRows(
  rows: JsonObject[],
  prefix: string,
  separator: AssetSeparator,
): void {
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex]!;
    const rowPrefix = `${prefix}R${rowIndex + 1}`;
    separateStyle(asObject(row.styling), `${rowPrefix}_`, separator, STYLE_ASSETS.slice(1));
    const rowImage = separator.separate(row.image, `images/${rowPrefix}`);
    if (rowImage !== undefined) row.image = rowImage;

    const choices = asObjectArray(row.objects);
    for (let choiceIndex = 0; choiceIndex < choices.length; choiceIndex += 1) {
      const choice = choices[choiceIndex]!;
      const choicePrefix = `${rowPrefix}C${choiceIndex + 1}`;
      separateStyle(
        asObject(choice.styling),
        `${choicePrefix}_`,
        separator,
        STYLE_ASSETS.filter(([property]) =>
          ['objectBackgroundImage', 'objectBorderImage', 'addonBackgroundImage', 'addonBorderImage'].includes(property)
        ),
      );
      const choiceImage = separator.separate(choice.image, `images/${choicePrefix}`);
      if (choiceImage !== undefined) choice.image = choiceImage;
      const changedBackground = separator.separate(choice.bgImage, `images/${choicePrefix}_Change`);
      if (changedBackground !== undefined) choice.bgImage = changedBackground;

      const addons = asObjectArray(choice.addons);
      for (let addonIndex = 0; addonIndex < addons.length; addonIndex += 1) {
        const addon = addons[addonIndex]!;
        const addonPrefix = `${choicePrefix}A${addonIndex + 1}`;
        const addonImage = separator.separate(addon.image, `images/${addonPrefix}`);
        if (addonImage !== undefined) addon.image = addonImage;
        const addonBackground = separator.separate(addon.bgImage, `images/${addonPrefix}_Change`);
        if (addonBackground !== undefined) addon.bgImage = addonBackground;
      }
    }
  }
}

function separateViewerAssets(project: JsonObject, separator: AssetSeparator): void {
  const config = asObject(project.viewerConfig);
  if (!config) return;
  const loading = separator.separate(config.loadingBgImage, 'images/Loading');
  if (loading !== undefined) config.loadingBgImage = loading;
  const favicon = separator.separate(config.favicon, 'images/favi');
  if (favicon !== undefined) config.favicon = favicon;
}

function separateAllImages(project: JsonObject, separator: AssetSeparator): void {
  separateStyle(asObject(project.styling), '', separator);
  separateRows(asObjectArray(project.rows), '', separator);
  separateRows(asObjectArray(project.backpack), 'B', separator);
  for (let index = 0; index < asObjectArray(project.rowDesignGroups).length; index += 1) {
    separateStyle(
      asObject(asObjectArray(project.rowDesignGroups)[index]!.styling),
      `RD${index + 1}_`,
      separator,
      STYLE_ASSETS.slice(1),
    );
  }
  for (let index = 0; index < asObjectArray(project.objectDesignGroups).length; index += 1) {
    separateStyle(
      asObject(asObjectArray(project.objectDesignGroups)[index]!.styling),
      `OD${index + 1}_`,
      separator,
      STYLE_ASSETS.filter(([property]) =>
        ['objectBackgroundImage', 'addonBackgroundImage', 'objectBorderImage', 'addonBorderImage'].includes(property)
      ),
    );
  }
  separateViewerAssets(project, separator);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function appendToHead(html: string, content: string): string {
  if (!/<\/head>/i.test(html)) throw new Error('Viewer index.html does not contain </head>.');
  return html.replace(/<\/head>/i, `${content}\n</head>`);
}

function configureHtml(html: string, project: JsonObject, projectBytes: number): string {
  const config = asObject(project.viewerConfig) ?? {};
  const title = escapeHtml(asString(config.title, 'CYOA Plus 2'));
  let output = /<title>[\s\S]*?<\/title>/i.test(html)
    ? html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    : appendToHead(html, `<title>${title}</title>`);

  output = output.replace(
    /(<[^>]+\bid=["']projectSize["'][^>]*>)[\s\S]*?(<\/[^>]+>)/i,
    `$1${projectBytes}$2`,
  );
  const loadingType = escapeHtml(asString(config.loadingType, 'ind1'));
  const loadingText = escapeHtml(asString(config.loadingText, 'Loading'));
  output = output.replace(
    /<div([^>]*\bid=["']indicator["'][^>]*)>[\s\S]*?<\/div>\s*<\/div>/i,
    (_match, attributes: string) => {
      const withClass = /\bclass=["'][^"']*["']/i.test(attributes)
        ? attributes.replace(/\bclass=["'][^"']*["']/i, `class="${loadingType}"`)
        : `${attributes} class="${loadingType}"`;
      return `<div${withClass}><div>${loadingText}</div></div>`;
    },
  );

  const headItems: string[] = [];
  const favicon = asString(config.favicon);
  if (favicon) headItems.push(`<link rel="icon" href="${escapeHtml(favicon)}">`);
  for (const font of asArray(project.googleFonts)) {
    if (typeof font !== 'string' || !font) continue;
    const family = encodeURIComponent(font).replaceAll('%20', '+');
    headItems.push(
      `<link id="${escapeHtml(family)}" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${family}&display=swap" crossorigin="anonymous">`,
    );
  }
  for (const url of asArray(project.customFonts)) {
    if (typeof url !== 'string' || !url) continue;
    headItems.push(
      `<link id="${escapeHtml(url)}" rel="stylesheet" href="${escapeHtml(url)}" crossorigin="anonymous">`,
    );
  }
  if (headItems.length > 0) output = appendToHead(output, headItems.join('\n'));
  return output;
}

function loadingBackground(value: string): string {
  if (!value) return 'none';
  if (/^(?:data:|https?:|\/\/|\/)/i.test(value)) return `url("${value.replaceAll('"', '\\"')}")`;
  return `url("../${value.replaceAll('"', '\\"')}")`;
}

function configureLoadingCss(css: string, project: JsonObject): string {
  const config = asObject(project.viewerConfig) ?? {};
  const root = `:root {
  --bg: ${asString(config.loadingBgColor, '#232428')};
  --bgImg: ${loadingBackground(asString(config.loadingBgImage))};
  --track: ${asString(config.loadingTrackColor, '#3c3c3c')};
  --shadow: ${asString(config.loadingTextShadow, '#fff000')};
  --color: ${asString(config.loadingTextColor, '#d5c999')};
  --circle: ${asString(config.loadingCircleColor, '#d5c999')};
  --font: ${JSON.stringify(asString(config.loadingTextFont, 'Arial'))};
}`;
  if (!/:root\s*\{[\s\S]*?\}/.test(css)) throw new Error('Viewer loading.css does not contain a :root block.');
  return css.replace(/:root\s*\{[\s\S]*?\}/, root);
}

function embedLocalProject(source: string, projectJson: string): string {
  const marker = /(\n\/\*![\s\S]*?Delete and replace[\s\S]*?\*\/\n)(\{[\s\S]*?\})(\n\/\*! End \*\/)/;
  if (!marker.test(source)) {
    throw new Error('Local viewer js/app.js does not contain the ICC Plus project marker.');
  }
  return source.replace(marker, (_match, start: string, _project: string, end: string) =>
    `${start}${projectJson}${end}`
  );
}

export async function buildViewerArchive(
  template: Buffer,
  input: JsonObject,
  options: ViewerBuildOptions = {},
): Promise<ViewerBuildResult> {
  const zip = await JSZip.loadAsync(template);
  const config = asObject(input.viewerConfig) ?? {};
  const local = options.local ?? asBoolean(config.useLocalViewer);
  const separateImages = local ? false : (options.separateImages ?? asBoolean(config.useSeparateImages));
  const cleaned = removeNulls(cloneJson(input));
  if (!cleaned || !isJsonObject(cleaned)) throw new Error('Project became empty after removing null fields.');
  const project = cleaned;
  const separator = new AssetSeparator(zip);
  if (separateImages) separateAllImages(project, separator);
  else separateViewerAssets(project, separator);

  const indexFile = zip.file('index.html');
  const cssFile = zip.file('css/loading.css');
  if (!indexFile) throw new Error('Viewer template is missing index.html.');
  if (!cssFile) throw new Error('Viewer template is missing css/loading.css.');
  const projectJson = JSON.stringify(project);
  const projectBytes = Buffer.byteLength(projectJson);
  zip.file('index.html', configureHtml(await indexFile.async('string'), project, projectBytes));
  zip.file('css/loading.css', configureLoadingCss(await cssFile.async('string'), project));

  if (local) {
    const appFile = zip.file('js/app.js');
    if (!appFile) throw new Error('Local viewer template is missing js/app.js.');
    zip.file('js/app.js', embedLocalProject(await appFile.async('string'), projectJson));
    zip.remove('project.json');
  } else {
    zip.file('project.json', projectJson);
  }
  const archive = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });
  return {
    archive,
    local,
    separateImages,
    projectBytes,
    separatedAssets: separator.count,
    archiveFiles: Object.keys(zip.files).length,
  };
}

export async function buildViewerFile(
  templatePath: string,
  outputPath: string,
  project: JsonObject,
  options: ViewerBuildOptions = {},
): Promise<Omit<ViewerBuildResult, 'archive'> & { path: string; archiveBytes: number }> {
  const result = await buildViewerArchive(await readFile(templatePath), project, options);
  const temporary = resolve(dirname(outputPath), `.${basename(outputPath)}.${randomUUID()}.tmp`);
  try {
    await writeFile(temporary, result.archive, { flag: 'wx' });
    if (options.overwrite === true) {
      await rename(temporary, outputPath);
    } else {
      await link(temporary, outputPath);
      await unlink(temporary);
    }
  } catch (error) {
    await unlink(temporary).catch(() => undefined);
    throw error;
  }
  const { archive, ...metadata } = result;
  return { ...metadata, path: outputPath, archiveBytes: archive.length };
}
