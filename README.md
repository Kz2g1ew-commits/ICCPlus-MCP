# ICCPlus MCP

A schema-aware [Model Context Protocol](https://modelcontextprotocol.io/) server
for creating, inspecting, editing, validating, and packaging
[ICC Plus](https://github.com/wahaha303/ICCPlus) projects.

The server gives an AI agent the complete ICC Plus project model instead of a
small collection of hard-coded templates:

- the project schema and current defaults are generated from ICC Plus source;
- every one of the 59 declared model types and 888 unique fields is discoverable;
- all 227 authored source/build/config/patch files and 1,404 named
  functions/methods across the creator and standalone viewer are indexed with exact
  source, SHA-256 evidence, signatures, model-field usage, and line spans;
- all 77 files in the requested deployment repository and 34 files inside its
  official viewer archives have byte counts and SHA-256 manifests;
- high-level tools preserve IDs, ordering, parent links, and reciprocal memberships;
- generic RFC 6902 patching keeps new or uncommon upstream fields accessible;
- structural and semantic validation catches dangling references before save;
- official web and local viewer archives can be built without opening the creator UI.

Compatibility is currently generated from ICC Plus `v2.9.28`, source commit
`5bbd87ccc012f1638e95cd984a946e523931a5a5`.

## What this is

ICCPlus MCP is an authoring and build adapter around ICC Plus project JSON. It
does not reimplement the browser viewer. Selection effects, audio playback,
dialogs, rendering, and other interactive behavior still execute in the
official viewer. The server understands and validates the configuration that
drives those behaviors, can evaluate requirement trees for supplied state, and
can package the result into the official viewer templates.

The design deliberately has two layers:

```text
agent
  ├─ discover: capabilities, schema, resources, prompts
  ├─ author: create/update/move/duplicate/import entities
  ├─ escape hatch: atomic JSON Patch for every schema field
  └─ verify: normalize, validate, evaluate, save, build viewer
                           │
                           ▼
             revisioned in-memory project session
                           │
                           ▼
                ICC Plus JSON / viewer ZIP
```

## Requirements

- Node.js 20 or newer
- An ICC Plus project workspace
- For viewer builds, `web_viewer.zip` or `local_viewer.zip` from the
  [ICC Plus deployment repository](https://github.com/wahaha303/ICCPlus)

## Install and build

```bash
git clone https://github.com/Kz2g1ew-commits/ICCPlus-MCP.git
cd ICCPlus-MCP
npm ci
npm run build
```

The executable is `dist/index.js` and communicates over stdio. Protocol output
uses stdout; diagnostics use stderr.

## Connect an agent

Set `ICCPLUS_WORKSPACE` to the only directory the server may read or write.
Relative project, asset, template, and output paths are resolved inside this
directory. Existing symlinks are resolved and cannot escape it.

### Codex

```bash
codex mcp add iccplus \
  --env ICCPLUS_WORKSPACE=/absolute/path/to/iccplus-workspace \
  -- node /absolute/path/to/ICCPlus-MCP/dist/index.js
```

Verify with `codex mcp list`, then restart the client if it was already open.
The equivalent user or trusted-project `config.toml` entry is:

```toml
[mcp_servers.iccplus]
command = "node"
args = ["/absolute/path/to/ICCPlus-MCP/dist/index.js"]
env = { ICCPLUS_WORKSPACE = "/absolute/path/to/iccplus-workspace" }
startup_timeout_sec = 10
tool_timeout_sec = 60
enabled = true
```

Codex CLI, the IDE extension, and the ChatGPT desktop Codex surface share this
configuration. A project-scoped entry can live in `.codex/config.toml` and is
loaded only for a trusted project.

### Other stdio MCP clients

Use the client's local-server configuration with this command:

```json
{
  "command": "node",
  "args": ["/absolute/path/to/ICCPlus-MCP/dist/index.js"],
  "env": {
    "ICCPLUS_WORKSPACE": "/absolute/path/to/iccplus-workspace"
  }
}
```

Optional environment:

- `ICCPLUS_WORKSPACE`: filesystem boundary; defaults to the server process CWD.
- `ICCPLUS_MAX_ASSET_BYTES`: maximum local asset size; defaults to 26,214,400
  bytes (25 MiB).

## Recommended agent workflow

1. Call `iccplus_capabilities` for the relevant feature family or field.
2. Create or open a project and retain its `project_id` and `revision`.
3. Create referenced top-level entities first: points, variables, words, groups,
   designs, and global requirements.
4. Create rows, then choices, then scores/addons/requirements.
5. Pass `expected_revision` to mutations. Use `dry_run` for broad changes.
6. Call `iccplus_validate` and, where useful,
   `iccplus_evaluate_requirements`.
7. Save explicitly or build an official viewer archive.

An agent can also request the bundled `author-iccplus-project` or
`audit-iccplus-project` prompt.

Example user request:

> Create a CYOA with 10 starting credits, three mutually exclusive origin
> choices, and a weapon row unlocked by selecting an origin. Validate it, save
> it as `projects/origins.json`, then build a web viewer using
> `templates/web_viewer.zip`.

## Tools

| Tool | Purpose |
| --- | --- |
| `iccplus_capabilities` | Discover 18 feature families, a type/field, an exact function body, a source-file index, or a deployment artifact. |
| `iccplus_schema` | Read the schema summary, one definition, or the complete generated schema. |
| `iccplus_create_project` | Start from the exact current upstream defaults. |
| `iccplus_open_project` | Open project JSON into an isolated session. |
| `iccplus_list_projects` | List sessions, revisions, dirty state, and counts. |
| `iccplus_project_status` | Inspect validation, size, content counts, and optional JSON. |
| `iccplus_query` | Search all modeled entities by type, ID, or text. |
| `iccplus_create_entity` | Create an entity with defaults, fresh IDs, and parent repair. |
| `iccplus_update_entity` | Deep-merge/unset fields and optionally rewrite ID references. |
| `iccplus_duplicate_entity` | Clone an entity tree with fresh IDs and optional internal remapping. |
| `iccplus_move_entity` | Reorder an entity and repair positional indices. |
| `iccplus_delete_entity` | Delete while rejecting newly dangling references by default. |
| `iccplus_patch` | Atomically apply RFC 6902 operations to any project field. |
| `iccplus_normalize` | Migrate legacy shapes and repair IDs, indices, parents, and memberships. |
| `iccplus_validate` | Run generated schema plus semantic/reference validation. |
| `iccplus_evaluate_requirements` | Evaluate requirements against supplied selections, points, variables, and words. |
| `iccplus_export_fragment` | Export one reusable entity subtree. |
| `iccplus_import_fragment` | Import a subtree with safe ID regeneration/remapping. |
| `iccplus_set_asset` | Set any string field from a workspace file, URL, or data URL. |
| `iccplus_save_project` | Atomically save validated JSON inside the workspace. |
| `iccplus_build_viewer` | Build official web/local viewer ZIPs and optionally separate images. |
| `iccplus_history` | Undo or redo a session mutation. |
| `iccplus_close_project` | Close a session, protecting unsaved changes. |

Entity tools cover `row`, `backpack_row`, `choice`, `addon`,
`selectable_addon`, `score`, `requirement`, `point`, `variable`, `word`,
`group`, `row_design_group`, `choice_design_group`, `global_requirement`,
`sound_effect`, and `category`.

## Resources and prompts

| URI/name | Contents |
| --- | --- |
| `iccplus://schema/project` | Complete generated project JSON Schema. |
| `iccplus://features` | Source-backed feature catalog and coverage counts. |
| `iccplus://deployment` | SHA-256 manifest for all deployment files and official viewer ZIP entries. |
| `iccplus://licenses` | UTF-8 normalized metadata for 209 upstream third-party packages. |
| `iccplus://project/{projectId}/summary` | Live revision, validation, and entity counts. |
| `author-iccplus-project` | Safe construction order and verification workflow. |
| `audit-iccplus-project` | Full project completion and packaging audit. |

## Safety and data integrity

- Mutations occur on cloned data and commit atomically.
- `expected_revision` provides optimistic concurrency control.
- `dry_run` returns the projected validation report without changing a session.
- `no_new_errors` is the default mutation policy; `strict` requires a completely
  valid result; `none` is available for staged repairs.
- JSON Patch blocks prototype-pollution pointer segments.
- Save uses a temporary file plus rename.
- Existing files are not replaced unless `overwrite=true`.
- Asset values are redacted from ordinary query output and reported by media
  type and approximate byte size.
- Unknown fields survive load, edit, normalization, and save for forward
  compatibility.

## Validation coverage

The validator combines the generated `App` schema with checks for:

- duplicate or missing IDs and positional index mismatches;
- addon parent links;
- every modeled row, choice, point, group, variable, word, design, sound, and
  global-requirement reference;
- score-to-point and point-activation references;
- nested requirements, thresholds, and global-requirement cycles;
- group and design-group reciprocal memberships;
- incompatible viewer export modes;
- point integer/float and initialization invariants.

The requirement evaluator implements `id` (including `/ON#N`), `points`,
`pointCompare`, `or`, `selFromGroups`, `selFromRows`, `selFromWhole`, `gid`,
`word`, negation, operators, and nested prerequisites. It returns an
explainable trace rather than only a boolean.

## Viewer builds

`iccplus_build_viewer` accepts an official template ZIP within the workspace.

- Web mode writes `project.json`.
- Local mode embeds the project in `js/app.js`.
- Loading title, text, colors, favicon, background, fonts, and custom CSS are
  applied from `viewerConfig`.
- Optional image separation extracts data URLs from global styles, rows,
  backpack rows, design groups, and viewer settings; identical assets are
  deduplicated.

The template's viewer JavaScript remains the runtime source of truth.

## Upstream synchronization

The implementation avoids maintaining a hand-copied project model. Re-run the
analyzer against a checkout of
[ICC-Plus-Svelte](https://github.com/wahaha303/ICC-Plus-Svelte):

```bash
npm run analyze:upstream -- --source ../ICC-Plus-Svelte --deployment ../ICCPlus
npm test
npm run check
npm run build
```

The analyzer uses the TypeScript AST to regenerate:

- `src/generated/iccplus.schema.json`
- `src/generated/default-project.json`
- `src/generated/source-analysis.json`
- `src/generated/deployment-manifest.json`
- `src/generated/third-party-licenses.json`
- `analysis/CODEBASE_INVENTORY.md`

Tests fail if a newly declared upstream model type is not assigned to a feature
family. `source-analysis.json` also records declarations, imports, complete
SHA-256-addressed source files, component labels, every named source
function/method, exact function bodies, and source occurrences. The deployment
manifest covers every file in `wahaha303/ICCPlus` plus every official viewer
archive entry. Agents can query `field:<name>`, `type:<name>`,
`function:<name>`, or `source:<relative-path>` through
`iccplus_capabilities`; `deployment:<relative-path>` returns deployment
evidence. Function queries support `file`, `offset`, and `limit` so duplicate
local names remain manageable; `include_source=false` returns compact metadata.

## Development

```bash
npm test
npm run test:stdio
npm run verify:upstream -- --source ../ICC-Plus-Svelte --deployment ../ICCPlus
npm run check
npm run build
npm run inspect
npm pack --dry-run
```

The test suite covers generated-model coverage, model graph mutation,
normalization, reference rewrites, all requirement families, RFC 6902
atomicity, viewer packaging, and an in-memory MCP client/server exchange.

For the full semantic feature map, see
[`analysis/FEATURE_ANALYSIS.md`](analysis/FEATURE_ANALYSIS.md). The generated
field/function/component evidence is in
[`analysis/CODEBASE_INVENTORY.md`](analysis/CODEBASE_INVENTORY.md).
The requirement-by-requirement verification record is
[`analysis/COMPLETION_AUDIT.md`](analysis/COMPLETION_AUDIT.md).

## Attribution

ICC Plus is developed by
[`wahaha303`](https://github.com/wahaha303). This MCP server is an independent
integration and does not replace or modify the official creator/viewer.
Both projects are distributed under the MIT License; see `LICENSE`.
Upstream and vendored dependency notices are preserved in
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) and the
`iccplus://licenses` resource.
