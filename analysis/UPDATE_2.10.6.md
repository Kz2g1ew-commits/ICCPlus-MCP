# ICC Plus 2.10.1 → 2.10.6 update review

Reviewed on 2026-09-20 against source commit
`a420836248d32043ae45d03f1b93cdcb9e354663` and deployment commit
`fb8da84315bcebc245833297acd4a371559fe1a6`.
Release notes are in upstream `ICCPlus/src/lib/information/InfoMain.svelte`.

| Release | Upstream change | MCP handling |
| --- | --- | --- |
| 2.10.2 | Point bar background image/repeat/fit/overlay; zero treated as negative for colors/icons; HTML point bar labels | Regenerated schema/defaults and source evidence; documented display semantics; added point bar image extraction to viewer packaging. |
| 2.10.3 | Await project initialization before replacing ZIP images; preserve selected choices on creator export | Refreshed source/template evidence. MCP packaging already preserves the supplied `activated` array and does not execute browser selections; regression test verifies preservation. |
| 2.10.4 | Fix assignment/comparison and decrement direction in multiple-selection discount loops | Indexed corrected runtime functions; execution remains in the official viewer template. |
| 2.10.5 | Point-type score text defaults; requirement autocomplete and keyboard fixes | Added score-text inheritance on score creation/point-id changes; indexed UI fixes. |
| 2.10.6 | Text editor color-picker and submenu fixes | Updated source evidence and official deployment/template manifest. |

## Authoring behavior

The eight new optional fields are four point bar styling fields and four
PointType fields. Projects from 2.10.1 remain accepted. `treatZeroAsNegative`
changes presentation, not arithmetic or requirement comparisons.

The creator's `changePointType` handler copies point-type text into a score
when its point id changes; standalone viewers read the stored score text.
MCP create/update now supplies those defaults while respecting explicit
`beforeText`/`afterText`, including empty strings. Changing point settings does
not rewrite existing scores. Raw JSON Patch retains exact-edit semantics.

Upstream's default styling contains the typo `barBacktroundImage`. Generated
evidence retains that source value unchanged. The schema, runtime, MCP
packager, and authoring guidance use the actual field `barBackgroundImage`.

The previously merged non-recursive tool schemas remain intact, with a
regression assertion that the published tool inputs contain no `$ref`.

## Verification

- TypeScript check and build passed.
- All 34 tests in 8 files passed, including new field validation, score-text
  inheritance/explicit overrides, point bar asset packaging/deduplication,
  input immutability, and saved selection preservation.
- Stdio smoke test passed with 27 tools.
- Upstream verification matched 227 source files, 1,412 functions, 75 deployment
  files and 34 archive entries; both official v2.10.6 viewer templates packaged.
- Compatible dependency patches (including Vitest 4.1.11) resolved the five
  audit findings present in the previous lockfile; npm audit reports zero.

Browser interaction was reviewed in source, not exercised in an actual browser.
Existing exported viewers and workspace template ZIPs must be replaced/rebuilt
with official v2.10.6 templates to receive upstream runtime fixes.
