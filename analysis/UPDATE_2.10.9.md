# ICC Plus 2.10.6 → 2.10.9 update review

Reviewed on 2026-10-08 against source commit
`2573ebc29c6b48ccad8d0213a2582087af29f4d6` and deployment commit
`c403d66eaeb773c4ec7e4f6d2f6d172933fe45bc`.
Release notes are in upstream `ICCPlus/src/lib/information/InfoMain.svelte`.

| Release | Upstream change | MCP handling |
| --- | --- | --- |
| 2.10.7 | Score option to remove spacing between text (`Score.removeSpace`); group selection fix when deleting text; selectable addons shown in the ID/Name list | Regenerated schema and source evidence; documented `removeSpace` display semantics; added validation test. |
| 2.10.8 | Width effects on selectable addons change `addonWidth`; `isNotShownObjects`/`isNotShownPointBar` are migrated from `activatedId` only for projects without a version; ID/Name list layout fixes | Indexed corrected `applyWidth`/`revertWidth` and `initializeApp`; documented both behaviors. MCP normalization never applied the old migration, so no code change was needed. |
| 2.10.9 | `notDeselectedByReq` (Cannot Be Deselected by Requirement); full row deselection for multiple-selectable choices; scroll-to-choice fix; addon box no longer extends past the choice; pending selection delays canceled when a build is loaded | Regenerated schema and evidence; added selection authoring note and validation test; updated the `.addon` and `.choice-enabled` Custom CSS catalog descriptions. Runtime fixes stay in the official viewer template. |

## Authoring behavior

The two new optional fields are `Score.removeSpace` and
`ChoiceFunc.notDeselectedByReq`. Projects from 2.10.6 and earlier remain
accepted.

- `removeSpace` joins score `beforeText`, value, and `afterText` without the
  separating spaces. It only changes display text.
- `notDeselectedByReq` is skipped by `deselectMissingReq` and by the row-limit
  replacement loops in `selectObject`, `selectedOneMore`, and
  `checkSelectable`. A selected choice with this flag stays selected when its
  requirements stop passing.
- In v2.10.9 viewers, a selected choice or addon is displayed as enabled even
  when its requirements fail. Custom CSS on `.choice-enabled`/`.choice-disabled`
  therefore follows the selected state for such choices.
- In v2.10.9 viewers, the addon `col-*` width class sits on an outer wrapper and
  `.addon` is the inner box. Custom CSS that sized or spaced `.addon` as a grid
  column should be checked against the new structure.

The creator now also deletes `sfxIdOnSelect`/`sfxIdOnDeselect` when the matching
checkbox is turned off. This is a creator UI cleanup only; MCP updates keep
exact-edit semantics and validation still reports dangling sound effect ids.

Upstream defaults still contain the typo `barBacktroundImage`; guidance keeps
pointing to the actual field `barBackgroundImage`.

## Verification

- TypeScript check and build passed.
- All 35 tests in 8 files passed, including the new field validation test.
- Stdio smoke test passed with 27 tools.
- Upstream verification matched 227 source files, 1,422 functions, 75 deployment
  files and 34 archive entries; both official v2.10.9 viewer templates packaged.
- `npm pack --dry-run` and `git diff --check` passed.

`npm audit` reports four advisories in existing dependencies
(`@modelcontextprotocol/sdk` 1.29.0, `brace-expansion`, `ip-address`,
`proxy-addr`). They are unrelated to the ICC Plus update and were not changed
here. The SDK fix requires 1.32.1, outside the pinned version.

Browser interaction was reviewed in source, not exercised in an actual browser.
Existing exported viewers and workspace template ZIPs must be replaced/rebuilt
with official v2.10.9 templates to receive upstream runtime fixes.
