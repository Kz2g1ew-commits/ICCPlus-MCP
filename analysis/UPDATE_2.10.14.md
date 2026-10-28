# ICC Plus 2.10.13 → 2.10.14 update review

Reviewed on 2026-10-28 against source commit
`21d340238fa16f4e66a61727f797d334b0486fda` and deployment commit
`55322bd4b5b33ed513ece775fa755211261384f3`.
Release notes are in upstream `ICCPlus/src/lib/information/InfoMain.svelte`.

| Upstream change | MCP handling |
| --- | --- |
| Deselecting a choice whose discount requires another choice refunded the points before the discount (`deselectCalculateScore` now uses `discountScore + tmpDisScore` when `isChangeDiscount` is set) | Viewer runtime fix only. The MCP does not simulate point refunds. |
| Local viewer did not work properly (reported as wahaha303/ICC-Plus-Svelte#2) | `main.ts` renames its `app` export to `svelteApp`, so the minified store state is `app=At(...)` again and the post-build step restores the `/*! Delete and replace ... */` marker. The MCP uses the marker path again; the v2.10.13 fallback stays for marker-less templates. |
| `rollupOptions` → `rolldownOptions`; the web viewer vendor chunk is now a rolldown code-splitting group | Template files are copied unchanged, so no MCP change. |

`types.ts` did not change, so the generated schema only changes its version.
The source function count went from 2,077 to 2,074.

The official v2.10.14 `local_viewer.zip` contains the marker exactly once in
`js/app.js`, directly after `app=At(`, in the layout the creator's export
regex expects.

## Verification

- TypeScript check and build passed.
- All 39 tests in 8 files passed.
- Stdio smoke test passed with 27 tools.
- Upstream verification matched 301 source files, 2,074 functions, 76 deployment
  files and 34 archive entries; both official v2.10.14 viewer templates packaged.
- `npm audit` reported zero vulnerabilities.
- `npm pack --dry-run` and `git diff --check` passed.

Analysis and verification ran against a clean local clone of the deployment
repository, because the working copy contained untracked local files.
