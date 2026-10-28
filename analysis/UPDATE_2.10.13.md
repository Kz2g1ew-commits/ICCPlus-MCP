# ICC Plus 2.10.11 → 2.10.13 update review

Reviewed on 2026-10-27 against source commit
`464596a428f2327a2c549c9e802ca4f58c42c2be` and deployment commit
`df51462ee94f424d3497e67f1b11d776442c1595`.
Release notes are in upstream `ICCPlus/src/lib/information/InfoMain.svelte`.

| Release | Upstream change | MCP handling |
| --- | --- | --- |
| 2.10.12 | Row/choice list drag lag fix; unspaced text wraps at screen edges (`overflow-wrap: break-word; white-space: normal` on the main app container); SMUI 8 → 9, Vite 7 → 8, vendored custom text field | Regenerated evidence. Creator UI and stylesheet changes need no MCP code. |
| 2.10.13 | Score point type could not be set in the creator | Creator UI fix only. MCP score tools were not affected. |

`types.ts` did not change, so the generated schema only changes its version.
The audited source grew from 227 to 301 files and 2,077 functions, mostly from the
vendored MDC text field sources under `src/lib/custom/textfield`. The viewer now
splits vendor code into two chunks; `build-core.js` preloads every imported chunk.
The viewer builder copies template files unchanged except `index.html`,
`css/loading.css`, and the local `js/app.js`, so the split needs no change.

## Local viewer marker regression

Upstream `ICCPlus_Viewer/add-comment.js` wraps the default project in
`/*! Delete and replace ... */` and `/*! End */` by matching
`app=x({version...})`. After the Vite 8 upgrade the minified state initializer is
`hw=At({version...})`, so the pattern no longer matches and both official
v2.10.13 viewer archives ship without the marker. The upstream creator's
local export uses the same marker regex and `String.replace`, so it silently
writes a local viewer that still contains the default empty project.

The MCP keeps the marker path first. When the marker is missing, it finds the
single `name=fn({version:v,isEditModeOnAll:...})` initializer, skips string and
template literal contents to find the end of that object literal, requires a
closing `)`, and replaces the literal with the project JSON. If there is no match
or more than one, the build fails as before. The second default literal
(`pw={version...}`) is not a call argument and is left alone, as in earlier
templates.

A local viewer built from the official v2.10.13 template and from the v2.10.11
template both contained the project exactly once and passed `node --check`.
Browser loading of the v2.10.13 local viewer was not exercised.

## Dependencies

`npm audit` reported new advisories for `zod`, `vitest`/`@vitest/mocker`,
`body-parser`, `fast-uri`, `hono`, `ip-address`, and `vite`.

- `zod` 4.4.3 → 4.6.7 (pinned, high severity).
- `vitest` 4.1.11 → 4.1.12 (pinned dev dependency).
- `npm audit fix` updated the remaining transitive packages within their ranges.

`npm audit` reports zero vulnerabilities.

## Verification

- TypeScript check and build passed.
- All 39 tests in 8 files passed, including the marker-less local embedding and
  refusal tests.
- Stdio smoke test passed with 27 tools.
- Upstream verification matched 301 source files, 2,077 functions, 76 deployment
  files and 34 archive entries; both official v2.10.13 viewer templates packaged.
- `npm pack --dry-run` and `git diff --check` passed.

Analysis and verification ran against a clean local clone of the deployment
repository, because the working copy contained untracked local files.
