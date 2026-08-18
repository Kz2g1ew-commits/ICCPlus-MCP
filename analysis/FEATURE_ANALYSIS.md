# ICC Plus v2.10.1 feature and mechanism analysis

This document is the semantic companion to the generated
[`CODEBASE_INVENTORY.md`](CODEBASE_INVENTORY.md). It describes what the source
does, how the model drives it, and how the MCP surface exposes it.

## Audit scope and method

The audit used the Svelte 5 source repository
[`wahaha303/ICC-Plus-Svelte`](https://github.com/wahaha303/ICC-Plus-Svelte) at
commit `b33bfb9b29e0a84a035a56d7e1827e42fe0f7000` (`v2.10.1`), not only the
minified deployment bundle.

The source analyzer retains every authored code/build/config/patch file from
the creator and standalone viewer, and separately hashes every deployment
artifact:

| Measure | Result |
| --- | ---: |
| Audited authored files | 227 |
| Exact audited source bytes | 3,310,217 |
| Declared model types | 59 |
| Unique declared fields | 893 |
| Fields referenced outside the type file | 891 |
| Store functions | 190 |
| Exported store functions | 100 |
| Named functions/methods across all source files | 1,411 |
| Exported named source functions | 246 |
| Deployment files | 75 |
| Deployment bytes | 24,748,251 |
| Official viewer archive entries | 34 |
| Upstream third-party packages with license metadata | 209 |
| Feature families covering declared types | 19 |
| Uncovered declared types | 0 |

The two fields not found outside the type source are compatibility image URL
spellings (`imageIsURL` and `imageIsUrl`). They remain in the schema and are
preserved. The generated occurrence map in `src/generated/source-analysis.json`
provides file-and-line evidence for all other fields.

The main behavioral engine is
`ICCPlus/src/lib/store/store.svelte.ts`; creator components configure that
state, and viewer components render and execute it. Project defaults are
initialized in the same store. This is why the MCP derives both schema and
defaults from source rather than restating them.

All 227 authored files are retained in the generated evidence with byte count and
SHA-256 digest. Every named function, arrow/function-valued property, and
method is indexed with its exact source span, signature, imports, referenced
model fields, and body. `function:<name>` returns all matches (so
duplicate local names remain unambiguous by file and line), while
`source:<relative-path>` returns that file's symbol/import/field/UI index.

## Project lifecycle

An ICC Plus project is an `App` JSON object. It contains portable authored data
(rows, features, styling, viewer configuration) and some creator/viewer runtime
state. The creator:

- initializes current defaults and fills missing legacy fields;
- imports/exports project JSON and reusable fragments;
- stores one autosave plus up to 99 manual creator save slots in IndexedDB;
- removes nullish export data and migrates old requirement, fade, sound, and
  selection shapes;
- manages viewer build saves separately, keyed by the CYOA link.

The MCP maps that lifecycle to isolated in-memory sessions. A session has a
monotonic revision, dirty/saved revision, bounded undo/redo history, and an
optional filesystem path. Create/open never silently writes. Save and viewer
build are explicit, bounded to `ICCPLUS_WORKSPACE`, and atomic.

## Content graph

### Rows

`Row` is both a visual container and a behavior switch. Normal rows contain
ordered choices. The same model also represents:

- information/text rows;
- button rows that alter variables, randomize or sum points, or trigger
  transitions;
- result rows, optionally filtered through a group;
- group-oriented rows;
- random-point rows;
- backpack rows stored in the separate `backpack` collection.

Rows control title/text/image, requirements, private styles, design groups,
allowed selection counts, responsive choice widths, visibility, and viewer
behavior. `index` is derived from array position. MCP move/normalize operations
repair it instead of asking an agent to calculate indices.

### Choices and addons

A `Choice` owns content, scores, requirements, groups, addons, style overrides,
and the large `ChoiceFunc` effect configuration.

There are two addon forms:

- a non-selectable addon is display content governed by the parent choice;
- a selectable addon behaves like a nested choice with its own ID, scores,
  groups, requirements, selection state, and effects.

Every addon records `parentId`. Choices and selectable addons are the principal
"selectable" entities used throughout requirements, activation, group
membership, discounts, and result views.

The MCP uses high-level create/update/duplicate/move/delete tools for these
structures. Parents may be addressed by unique ID or exact JSON Pointer.
Nested duplication and fragment import regenerate IDs and can rewrite internal
references, avoiding clone collisions.

## Selection and effect engine

The viewer's selection pipeline first checks selectability and requirements,
then performs score/effect work and any delayed or forced activation. Deselect
reverses corresponding state where the feature allows it. `ChoiceFunc`
configures the following families:

### Selection policy

- selectable/not-selectable and deselectable policy;
- automatic selection;
- selection/deselection delay and fade-in timing;
- multi-selection with increment/decrement controls;
- slider-backed multi-selection;
- counter limits and counter visibility;
- variable- or point-linked multi-selection values;
- per-selection score multiplication and `/ON#N` activation thresholds.

### Cross-entity activation

- force-activate or deactivate specific selectables;
- randomly activate from a target set;
- temporary activation and cleanup;
- reset selections/counts;
- react when a requirement becomes unavailable.

Comma-separated target fields and `/ON#N` tokens are modeled references. The
MCP rewrites these safely when an ID changes and validates missing targets.

### Score and discount effects

- add, subtract, multiply, divide, or assign point values;
- use literal, random-range, or `{pointId}` expression values;
- mark scores non-recalculatable or non-discountable;
- target discounts by row, choice, group, or point type;
- configure stackability, counts, per-selection counting, lower limits,
  consolidation, and alternate display text/icons;
- multiply, divide, or set several point types from another choice effect.

Transient fields such as active discount stacks and calculated display values
are viewer state. They are preserved when present but are not necessary for
ordinary authoring.

In v2.9.29 the official viewer began using the existing transient
`Score.discountNum` field when a non-per-selection discount is applied to an
already-active multi-select choice. It also waits for cross-choice discount
propagation and uses exact applied-count equality while removing discounts.
The MCP exposes and preserves that field and packages the corrected official
viewer; interactive discount recalculation remains owned by the viewer runtime.

In v2.10 the score recalculation switch was split. `isNotRecalculateSelf`
blocks recalculation triggered by the owning choice, while
`isNotRecalculatable` now blocks recalculation triggered by other choices.
Normalization copies the old all-purpose behavior to the new field for
pre-v2.10 projects. The same release adds `preserveWidth`, `isNotBuild`,
`showDebugTitle`, and `hideRowMenu`, plus condition-specific selectable-addon
Custom CSS classes. v2.10.1 fixes the row-menu requirement interaction.

### Content and navigation effects

- duplicate a row, with placement and optional reference suffixing;
- hide rows/choices/groups;
- change allowed selections in target rows;
- force-show addons despite their requirements;
- change image templates for row/choice/group targets;
- change responsive choices-per-row widths for targets;
- scroll to a row or selectable;
- alter global/background/point-bar presentation.

### Player interaction effects

- set/toggle variables;
- substitute named words in displayed text;
- request player-entered text;
- request an uploaded image;
- show a confirmation step;
- gate or expose backpack/result/search behavior;
- play BGM/SFX and apply screen/audio fades.

The MCP does not simulate browser dialogs or rendering. All effect fields are
discoverable and editable; target fields are checked where the model identifies
their reference domain.

## Requirements

Requirements are recursive. Requirements attached to the same container are
ANDed. A requirement's nested `requireds` are prerequisites to evaluating that
requirement. The model supports:

| Type | Meaning |
| --- | --- |
| `id` | Selectable is selected; `/ON#N` requires at least N activations. |
| `points` | A point value satisfies the configured comparison. |
| `pointCompare` | An expression assembled from point IDs/literals and prioritized operators satisfies a comparison. |
| `or` | At least `orNum` nested alternatives pass. |
| `selFromGroups` | A selection count from specified groups passes. |
| `selFromRows` | A selection count from specified rows passes. |
| `selFromWhole` | A whole-project selection count passes. |
| `gid` | A reusable global requirement passes. |
| `word` | A named word has the required value/state. |

Negation is represented through the requirement's `required` semantics.
Visibility fields decide whether unmet/met requirements hide content or display
custom before/after text.

Global requirements can reference other global requirements, so cycles are
possible. The MCP validator reports cycles and unresolved references. Its
evaluator uses cycle guards and returns a tree of operands, observed values,
operators, child results, and final result for testable agent reasoning.

## Points and scores

`PointType` defines ID, label, starting/current values, integer versus float
behavior, positive/negative icons, visibility/activation rules, and point-bar
display. A `Score` belongs to a choice/selectable addon; its `id` points to a
point type while its own entity identifier is `idx`.

Scores may be conditional, hidden, random, set rather than added, expression
based, multiplied by multi-selection count, discounted, or display-only. The
MCP treats the point relation as a typed reference: renaming a point updates
score `id`, point requirements and comparisons (including `more[].id`), point
effect arrays, row random-point targets, activation targets, and expression
placeholders.

## Organization and reusable features

Top-level `features` include:

- point types;
- boolean variables;
- replaceable words;
- groups for selectable and row membership;
- row and choice design groups;
- reusable global requirements;
- reusable sound effects;
- categories for the feature-management UI;
- templates, symbol/word settings, ID settings, backpack settings, defaults,
  and other project-level behavior.

Groups store membership on both sides: members list group IDs and a group lists
member IDs. Design groups use the same reciprocal pattern. Normalization
rebuilds the reverse collections from authoritative member declarations, so an
agent cannot leave partially synchronized membership after ordinary mutations.

Category identity is `(type, idx)` rather than a globally unique string ID.

## Styling and inheritance

Styling is a large but regular data system, not opaque CSS. Its major types
cover:

- row, choice, and addon boxes;
- row, choice, and addon images;
- title/body/addon/score/multi-counter text;
- selected, unselected, and unmet-requirement filters;
- backgrounds and gradients;
- point bar;
- backpack.

Fields include margins, padding, widths, responsive widths, borders, border
images, radii, overflow, image fit/fill, shadows, font imports, font size/color,
alignment, blur, brightness, contrast, grayscale, hue, invert, opacity,
saturation, sepia, visibility, overlays, and state colors.

Runtime precedence is:

1. choice private styling;
2. active choice design groups;
3. row private styling;
4. active row design groups;
5. global styling.

The corresponding `private*IsOn` switches choose which subsets override lower
layers. Design-group activation may point to a selectable ID or global
requirement ID. The MCP validates those links and makes all styling definitions
available through schema/capability discovery and share the same field-access
workflow.

### Advanced Custom CSS

The project-level `customCSS` field is a deliberate escape hatch beyond the
structured styling model. ICC Plus applies it by assigning the text to
`style#customCSS` in `document.head`. Official viewer markup exposes dynamic
`row-{id}`, both old and v2.10 `row-bg-{id}`/`row-header-{id}` spellings,
`choice-{id}`, selectable `addon-{id}` classes, choice and addon state classes,
and stable viewer/layout classes.
Many of those elements also have Svelte-generated inline `style` attributes.

The MCP derives a selector catalog and line evidence from the pinned standalone
viewer source, emits CSS-escaped selectors for entities in an open project,
parses candidate or stored rules, computes selector specificity, resolves
project targets, and diagnoses syntax errors, broad selectors, remote assets,
dangerous legacy constructs, and likely inline-style collisions. Applying CSS
uses the same revision, dry-run, undo, and validation policy as other project
mutations. Browser-computed style and responsive rendering remain in the
official viewer; the MCP adds no browser runtime.

## Media

Projects may use:

- remote or data-URL images in global, row, choice, addon, styling, and viewer
  fields;
- BGM from YouTube IDs or audio URLs;
- reusable data-URL sound effects with volume, pitch, requirements, and
  selection/deselection triggers;
- favicon and loading-screen assets;
- imported font stylesheets and custom CSS.

Browser autoplay, CORS, remote host, and YouTube API restrictions remain
runtime concerns. `iccplus_set_asset` reads only workspace files, enforces a
size limit, detects MIME type, and writes a data URL to an exact pointer.
Ordinary tool output redacts embedded data while retaining media type and size.

## Viewer and export

Viewer configuration controls:

- document title, favicon, loading message/colors/background;
- web versus standalone-local mode;
- separate image files;
- build save/load/autosave;
- backpack behavior and dimensions;
- search;
- image download and segmented capture;
- responsive choices-per-row;
- custom CSS and external fonts.

Official template packaging follows the creator's format:

- web export stores project data in `project.json`;
- local export embeds it in the template's `js/app.js` marker;
- optional image separation walks the full project graph, extracts data URLs,
  hashes/deduplicates equal content, writes asset files, and rewrites references;
- viewer title/loading/favicon/font/custom-CSS values are applied safely.

Packaging was integration-tested against both official `v2.10.1` template
archives from the deployment repository.

## MCP coverage model

Coverage does not depend on one bespoke tool per ICC feature:

| Need | MCP mechanism |
| --- | --- |
| Learn a feature | `iccplus_capabilities` with a 19-family catalog. |
| Learn an exact field | `iccplus_capabilities` with `field:<name>` returns declarations and all source usages. |
| Learn a model shape | `iccplus_schema` or `iccplus://schema/project`. |
| Inspect an exact mechanism | `function:<name>` returns every matching implementation body with file/line and field evidence. |
| Inspect a source module | `source:<path>` returns exact source plus SHA-256, imports, symbols, fields, and extracted UI labels. |
| Inspect a deployment artifact | `deployment:<path>` returns its byte/hash evidence and ZIP entry manifest when applicable. |
| Author common structures | Typed entity create/update/move/duplicate/delete/import tools. |
| Author rare/new fields | Atomic `iccplus_patch`, so schema growth does not require a new RPC. |
| Preserve correctness | Current defaults, generated IDs, reference rewriting, normalization, validation. |
| Reason about gating | Explainable requirement evaluation. |
| Use files/media | Workspace-bounded open/save/assets/build tools. |
| Recover/coordinate | Revisions, dry runs, atomic commit, undo/redo. |

All 59 source-declared types belong to a feature family, and all 893 declared
fields appear in the generated schema/discovery data. This provides complete
model access while keeping the handwritten server small and adaptable.

## Compatibility boundary

Generated schema coverage proves access to declared configuration, not that a
standalone server can execute DOM, audio, IndexedDB, screenshot, or Svelte
component behavior. Those behaviors remain in the official creator/viewer and
are exercised after packaging. Unknown future fields are intentionally
preserved, and the analyzer can regenerate model evidence when upstream
changes.
