# ICC Plus 2.10.9 → 2.10.11 update review

Reviewed on 2026-10-19 against source commit
`28a178ad699a4a4cb16714025a6a10b609e50d93` and deployment commit
`9afbad48628ad4c71e0a792ad3e5563412da7d53`.
Release notes are in upstream `ICCPlus/src/lib/information/InfoMain.svelte`.

| Release | Upstream change | MCP handling |
| --- | --- | --- |
| 2.10.10 | Choice settings "Copy and Delete" moves a choice to another row; "Cannot Be Shown in Build Form" checkbox for selectable addons; viewer honors `isNotSearchable`/`isNotResult` on selectable addons; point type dialog overlap fix | Regenerated evidence; documented addon visibility flags and added a validation test. The move action keeps the choice id, which `iccplus_move_entity` already does. The dialog fix is creator UI only. |
| 2.10.11 | Copy and Delete fix; `addonJustify: "fill"`; `.addon` gets `flex-grow-1` inside a `d-column` width wrapper | Documented `fill` and the markup change in the feature and Custom CSS catalogs; validation test covers `fill`. |

Both releases also drop `fonts/mdi-subset.eot` and its `@font-face` source from
the creator and both viewers, so the deployment manifest has 72 files and the
viewer archives 32 entries. The MCP does not reference that font.

## Authoring behavior

`types.ts` did not change, so the generated schema only changes its version.

- `SelectableAddon` already includes `ChoiceFunc`, so `isNotBuild`,
  `isNotResult`, and `isNotSearchable` were already valid on selectable addons.
  Since v2.10.10 viewers skip such an addon in result rows (`isNotResult`) and
  search results (`isNotSearchable`). The build form iterates selected ids from
  `choiceMap`, which includes selectable addons, so `isNotBuild` omits the
  addon title there.
- `Choice.addonJustify` stays a free string. `fill` renders as `justify-start`
  and never adds `align-content--*`.
- Since v2.10.11 the addon width wrapper is a flex column and every `.addon` box
  has `flex-grow-1`, so addon boxes in one line stretch to equal height. Custom
  CSS that set `height` on `.addon` should be checked against this.

The creator now wraps `saveToDisk` in an error handler and keeps the settings
dialog bound to the moved choice. These are creator UI changes only.

## Verification

- TypeScript check and build passed.
- All 36 tests in 8 files passed, including the new addon option test.
- Stdio smoke test passed with 27 tools.
- Upstream verification matched 227 source files, 1,423 functions, 72 deployment
  files and 32 archive entries; both official v2.10.11 viewer templates packaged.
- `npm audit` reports zero vulnerabilities. `npm pack --dry-run` and
  `git diff --check` passed.

Analysis and verification ran against a clean local clone of the deployment
repository, because the working copy contained untracked local files.

Browser interaction was reviewed in source, not exercised in an actual browser.
Existing exported viewers and workspace template ZIPs must be replaced/rebuilt
with official v2.10.11 templates to receive upstream runtime fixes.
