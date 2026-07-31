# ICC Plus v2.9.29 codebase inventory

This inventory is generated from commit `df33b5d554bda38adfa820395d794315afd6775c`.
It is evidence for MCP model coverage; `src/generated/source-analysis.json` contains
the field-level occurrence map and UI strings.

## Coverage

- Audited authored code/text files: 227
- Creator TypeScript/Svelte files: 119
- Exact audited source bytes: 3272971
- Deployment files: 75
- Deployment bytes: 24492438
- Upstream third-party packages with license metadata: 209
- Declared model types: 59
- Unique model fields: 888
- Fields referenced by implementation code: 886
- Store functions: 189
- Exported store functions: 100
- Named source functions/methods: 1406
- Exported source functions: 246

## State engine functions

| Function | Visibility | Async | Evidence |
| --- | --- | --- | --- |
| `getRows` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:861` |
| `getChoices` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:864` |
| `getBackpackRows` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:867` |
| `getBackpackChoices` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:870` |
| `getGroups` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:873` |
| `getPointTypes` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:876` |
| `getVariables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:879` |
| `getWords` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:882` |
| `getGlobalRequirement` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:885` |
| `getDesignGroups` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:888` |
| `getSelectables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:891` |
| `getBackpackSelectables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:894` |
| `getSearchables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:897` |
| `getSoundEffects` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:900` |
| `createCyoaPlusDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:905` |
| `getOldDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:929` |
| `getDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:937` |
| `delay` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1183` |
| `autoSave` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1195` |
| `buildAutoSave` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1244` |
| `saveToSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1292` |
| `deleteSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1315` |
| `loadFromSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1338` |
| `getOldAutoSave` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:1348` |
| `setOldSave` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:1397` |
| `initStoreSaves` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1415` |
| `initBuildSaves` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1467` |
| `getSelectedObjectId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1510` |
| `getTimestamp` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1589` |
| `getPointTypeLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1600` |
| `getChoiceLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1607` |
| `getGroupLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1619` |
| `getRowLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1626` |
| `getGlobalReqLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1636` |
| `getDesignLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1643` |
| `getSfxLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1650` |
| `getReqText` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1657` |
| `getChoiceTitle` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1733` |
| `checkInitId` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1740` |
| `generateId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1743` |
| `objectWidthToNum` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1759` |
| `widthToNum` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1776` |
| `fixedWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1799` |
| `checkWordChange` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1817` |
| `getCombinedRegex` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1825` |
| `replaceText` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1832` |
| `getStyling` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1859` |
| `checkDupId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1950` |
| `checkPointEnable` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1957` |
| `checkActivated` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1974` |
| `getPriority` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1983` |
| `evaluateNode` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1995` |
| `checkReq` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2011` |
| `checkRequirements` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2214` |
| `wrapYoutubePlayer` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2232` |
| `wrapAudioPlayer` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2270` |
| `createAudioPlayer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2349` |
| `retryAudioPlayer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2361` |
| `bgmFadeIn` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2371` |
| `bgmPlay` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2372` |
| `playProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2380` |
| `bgmFadeOut` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2491` |
| `playBgm` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2556` |
| `loadYouTubeAPI` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2633` |
| `initYoutubePlayer` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2645` |
| `base64ToArrayBuffer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2674` |
| `getCtx` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2684` |
| `initSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2688` |
| `loadSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2701` |
| `playSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2708` |
| `playSfxOnSelect` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2727` |
| `playSfxOnDeselect` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2758` |
| `initStyling` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2789` |
| `calcStackDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2822` |
| `deleteDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2832` |
| `emptyDiscount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:2855` |
| `fillDiscount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:2973` |
| `deselectDiscount` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:3087` |
| `selectDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3231` |
| `expDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3371` |
| `checkPoints` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3388` |
| `checkAddons` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:3676` |
| `setScoreValue` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3707` |
| `cleanActivated` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3763` |
| `deselectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:3766` |
| `clearProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:3791` |
| `selectForceActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4134` |
| `deselectTempActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4170` |
| `deselectForceActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4193` |
| `selectForceRandomActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4256` |
| `removeCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4334` |
| `addCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4391` |
| `updateCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4459` |
| `deselectUpdateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4482` |
| `selectUpdateScore` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:4876` |
| `activateTempChoices` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:5283` |
| `clearWordDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5322` |
| `clearImgDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5333` |
| `openWordDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5341` |
| `openImgDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5365` |
| `delayProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5386` |
| `deselectDiscountOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5390` |
| `selectDiscountOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5435` |
| `deselectCalculateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5480` |
| `selectCalculateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5566` |
| `deselectActivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5640` |
| `selectActivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5723` |
| `selectDeactivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5771` |
| `deselectMissingReq` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5822` |
| `deselectModifyPoint` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5868` |
| `selectModifyPoint` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6038` |
| `setVariables` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6126` |
| `addAllowedChoice` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6149` |
| `deselectEffectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6184` |
| `selectEffectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6411` |
| `deselectHideContent` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6597` |
| `selectHideContent` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6643` |
| `selectScroll` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6690` |
| `checkAddonDeselectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6734` |
| `checkDeselectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6764` |
| `checkSelectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6773` |
| `deselectObject` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:6871` |
| `selectObject` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7061` |
| `selectedOneMore` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7303` |
| `selectedOneLess` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7596` |
| `updateScores` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:7815` |
| `selectObjectL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8071` |
| `selectedOneMoreL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8360` |
| `selectedOneLessL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8670` |
| `activateProc` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8722` |
| `loadActivated` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:8773` |
| `duplicateRow` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:8777` |
| `getDataURL` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9057` |
| `isDataURL` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9061` |
| `removeNulls` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9313` |
| `initFilterStyling` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9330` |
| `initPrivateStyling` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9351` |
| `loadFromDisk` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:9501` |
| `exportData` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9593` |
| `importRequirement` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9616` |
| `importChoice` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9642` |
| `importData` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:9727` |
| `getMimeFromBlob` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:10142` |
| `initializeApp` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:10152` |
| `replaceFields` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11112` |
| `replaceImages` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11125` |
| `waitForImagesToLoad` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:11204` |
| `forceEagerImageLoading` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11216` |
| `copyComputedStyles` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11225` |
| `deepCopyStyles` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11236` |
| `waitForBorderImagesToLoad` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:11246` |
| `waitForRenderFrames` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11269` |
| `next` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11272` |
| `downloadAsImage` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:11279` |
| `isMediaSupport` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11428` |
| `toggleTheme` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11438` |
| `setShortcut` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11480` |
| `applyTemplate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11498` |
| `revertTemplate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11506` |
| `applyWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11520` |
| `revertWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11528` |
| `getDate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11542` |
| `scrollToLastRow` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11553` |
| `tryScroll` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11558` |
| `applyCustomCSS` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11572` |
| `hexToRgba` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11591` |
| `rgbToHex` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11602` |
| `toggleAltMenu` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11613` |
| `removeAnchor` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11617` |
| `pasteObject` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11627` |
| `clearClipboard` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11757` |
| `closestByClassPrefix` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11790` |
| `copyObject` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11806` |
| `copyScores` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11825` |
| `pasteScore` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11842` |
| `copyAddons` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11857` |
| `pasteAddon` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11873` |
| `copyRequireds` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11916` |
| `pasteRequired` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11932` |
| `copyGroups` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11945` |
| `pasteGroup` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11960` |
| `copyDesignGroups` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11978` |
| `pasteDesignGroup` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11993` |
| `choiceContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12011` |
| `requiredContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12032` |
| `scoreContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12053` |
| `addonContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12074` |
| `groupContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12095` |
| `dGroupContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12112` |

## All named source functions and methods

| Symbol | Kind | Exported | Async | Evidence | Model fields |
| --- | --- | --- | --- | --- | ---: |
| `autoModeWatcher` | function | no | no | `ICCPlus/src/App.svelte:77` | 1 |
| `handleWheel` | function | no | no | `ICCPlus/src/App.svelte:119` | 2 |
| `getSelectedObjectName` | function | no | no | `ICCPlus/src/lib/creator/AppBuildForm.svelte:51` | 9 |
| `handleTab` | function | no | no | `ICCPlus/src/lib/creator/AppCustomCSS.svelte:60` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:94` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:98` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:102` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:106` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:110` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:114` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:118` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:122` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:126` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:130` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:134` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:138` | 1 |
| `exportDesign` | function | no | no | `ICCPlus/src/lib/creator/AppDesign.svelte:188` | 4 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:67` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:71` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:75` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:79` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:83` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:87` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:91` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:95` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:99` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:103` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:107` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppFeature.svelte:111` | 1 |
| `saveProcess` | function | no | no | `ICCPlus/src/lib/creator/AppGlobalSettings.svelte:521` | 0 |
| `importFont` | function | no | yes | `ICCPlus/src/lib/creator/AppGlobalSettings.svelte:528` | 8 |
| `deleteFont` | function | no | no | `ICCPlus/src/lib/creator/AppGlobalSettings.svelte:606` | 3 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1962` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1966` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1970` | 3 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1974` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1975` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1979` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1984` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1985` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1989` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1990` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1994` | 4 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1995` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1999` | 2 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2000` | 1 |
| `changeObjectId` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2300` | 9 |
| `createNewAddon` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2337` | 23 |
| `createNewScore` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2355` | 14 |
| `cloneObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2369` | 25 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2460` | 7 |
| `deleteDesignGroup` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2471` | 5 |
| `deleteObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2482` | 24 |
| `deleteProc` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2483` | 19 |
| `deleteAddon` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2556` | 6 |
| `moveChoiceLeft` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2574` | 3 |
| `moveChoiceRight` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2582` | 3 |
| `setFilters` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2590` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2703` | 7 |
| `toggleAutoActive` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2726` | 16 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/creator/AppObject.svelte:2752` | 11 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2776` | 17 |
| `toggleActive` | function | no | yes | `ICCPlus/src/lib/creator/AppObject.svelte:2813` | 9 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2838` | 5 |
| `handleDndConsider` | function | no | no | `ICCPlus/src/lib/creator/AppObjectList.svelte:59` | 0 |
| `handleDndFinalize` | function | no | no | `ICCPlus/src/lib/creator/AppObjectList.svelte:63` | 6 |
| `scrollToObject` | function | no | no | `ICCPlus/src/lib/creator/AppObjectList.svelte:74` | 6 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:137` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:141` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:145` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:149` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:153` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:157` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:161` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:165` | 1 |
| `removeInvalidStyles` | function | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:218` | 11 |
| `checkPrivateDesign` | function | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:251` | 10 |
| `exportDesign` | function | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:262` | 4 |
| `copyToAnotherRow` | function | no | no | `ICCPlus/src/lib/creator/AppObjectSettings.svelte:281` | 25 |
| `renderIcon` | function | no | no | `ICCPlus/src/lib/creator/AppPointBar.svelte:68` | 8 |
| `beforeClose` | function | no | no | `ICCPlus/src/lib/creator/AppRequirement.svelte:150` | 1 |
| `addNewRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRequirement.svelte:155` | 25 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRequirement.svelte:207` | 8 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:470` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:471` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:475` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:479` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:483` | 4 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:484` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:488` | 2 |
| `changeRowId` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:799` | 7 |
| `createNewObject` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:830` | 29 |
| `createNewObjects` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:865` | 0 |
| `reqContext` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:871` | 11 |
| `copyRequireds` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:891` | 8 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:907` | 6 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:919` | 4 |
| `buttonActivate` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:940` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:1087` | 5 |
| `handleDndConsider` | function | no | no | `ICCPlus/src/lib/creator/AppRowList.svelte:64` | 0 |
| `handleDndFinalize` | function | no | no | `ICCPlus/src/lib/creator/AppRowList.svelte:68` | 6 |
| `scrollToRow` | function | no | no | `ICCPlus/src/lib/creator/AppRowList.svelte:79` | 7 |
| `scrollToObject` | function | no | no | `ICCPlus/src/lib/creator/AppRowList.svelte:92` | 8 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:194` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:198` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:202` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:206` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:210` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:214` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:218` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:222` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:226` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:230` | 1 |
| `removeInvalidStyles` | function | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:283` | 6 |
| `checkPrivateDesign` | function | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:306` | 12 |
| `exportDesign` | function | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:319` | 4 |
| `sortObjects` | function | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:338` | 6 |
| `mergeRow` | function | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:377` | 5 |
| `copyObjects` | function | no | no | `ICCPlus/src/lib/creator/AppRowSettings.svelte:397` | 19 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:144` | 0 |
| `beforeClosed` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:165` | 1 |
| `addImage` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:170` | 0 |
| `viewerImgSeparation` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:182` | 3 |
| `imageSeparation` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:200` | 20 |
| `exportZip` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:497` | 8 |
| `exportWithViewer` | function | no | yes | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:528` | 24 |
| `getMime` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:648` | 2 |
| `getExt` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:654` | 0 |
| `loadApp` | function | no | yes | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:664` | 5 |
| `loadAutoSave` | function | no | yes | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:681` | 5 |
| `saveToDisk` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:698` | 6 |
| `saveApp` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:718` | 7 |
| `removeSave` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:745` | 1 |
| `getChoiceLabel` | function | no | no | `ICCPlus/src/lib/creator/AppSearchForm.svelte:111` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:290` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:296` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:302` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:308` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:314` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:321` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:327` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:333` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:339` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:345` | 1 |
| `rowContext` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:484` | 10 |
| `calTime` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:504` | 0 |
| `cloneRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:514` | 29 |
| `createNewRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:629` | 38 |
| `copyRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:695` | 5 |
| `pasteAction` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:703` | 1 |
| `pasteRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:709` | 32 |
| `deleteRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:846` | 22 |
| `deleteProc` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:847` | 17 |
| `moveRowUp` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:922` | 3 |
| `moveRowDown` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:930` | 3 |
| `rowWidthClass` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:938` | 4 |
| `handlePlayButton` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:944` | 5 |
| `handleStopButton` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:989` | 3 |
| `handleMuteButton` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1004` | 2 |
| `handlePlaybarDown` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1017` | 2 |
| `handlePlaybarUp` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1025` | 4 |
| `handleVolumebarDown` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1037` | 0 |
| `handleVolumebarUp` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1041` | 3 |
| `beforeClose` | function | no | no | `ICCPlus/src/lib/creator/DlgCommon.svelte:59` | 1 |
| `cloneRow` | function | no | no | `ICCPlus/src/lib/creator/Features/AppBackpack.svelte:94` | 29 |
| `createNewRow` | function | no | no | `ICCPlus/src/lib/creator/Features/AppBackpack.svelte:209` | 34 |
| `deleteRow` | function | no | no | `ICCPlus/src/lib/creator/Features/AppBackpack.svelte:280` | 23 |
| `deleteProc` | function | no | no | `ICCPlus/src/lib/creator/Features/AppBackpack.svelte:281` | 18 |
| `moveRowUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppBackpack.svelte:357` | 3 |
| `moveRowDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppBackpack.svelte:365` | 3 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:112` | 1 |
| `beforeClosed` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:177` | 2 |
| `switchDesign` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:183` | 2 |
| `createNewCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:194` | 10 |
| `clearCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:212` | 2 |
| `deleteCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:220` | 24 |
| `point` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:233` | 3 |
| `variable` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:234` | 3 |
| `group` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:235` | 3 |
| `word` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:236` | 3 |
| `rDesign` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:237` | 3 |
| `cDesign` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:241` | 3 |
| `globalReq` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:245` | 3 |
| `editName` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:260` | 6 |
| `enterCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppCategories.svelte:280` | 2 |
| `getTextContent` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDefaults.svelte:348` | 0 |
| `idToTitle` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDefaults.svelte:355` | 10 |
| `rowCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:152` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:156` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:157` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:159` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:167` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:168` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:169` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:173` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:181` | 0 |
| `changeDesignId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:187` | 7 |
| `cloneDesign` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:221` | 8 |
| `createNewDesignGroup` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:257` | 10 |
| `deleteDesign` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:280` | 8 |
| `moveDesignUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:321` | 0 |
| `moveDesignDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:329` | 1 |
| `releaseGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:337` | 3 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:347` | 3 |
| `releaseRowElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:355` | 3 |
| `setRowElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:365` | 3 |
| `releaseChoiceElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:373` | 3 |
| `setChoiceElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:384` | 3 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:393` | 5 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte:401` | 6 |
| `rowCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:164` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:168` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:169` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:171` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:179` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:180` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:181` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:185` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:193` | 0 |
| `changeReqId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:199` | 2 |
| `cloneReq` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:212` | 4 |
| `createNewGlobalReq` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:231` | 8 |
| `deleteReq` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:252` | 4 |
| `moveReqUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:263` | 2 |
| `moveReqDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:271` | 2 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:279` | 2 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte:287` | 8 |
| `rowCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:134` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:138` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:139` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:141` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:149` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:150` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:151` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:155` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:163` | 0 |
| `changeGroupId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:169` | 10 |
| `createNewGroup` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:210` | 10 |
| `cloneGroup` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:229` | 9 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:262` | 9 |
| `moveGroupUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:289` | 3 |
| `moveGroupDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:297` | 3 |
| `releaseChoiceElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:305` | 6 |
| `releaseRowElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:322` | 7 |
| `setChoiceElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:338` | 4 |
| `setRowElement` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:347` | 9 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:375` | 2 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppGroups.svelte:383` | 8 |
| `escapeCsv` | function | no | no | `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte:58` | 0 |
| `exportAsCsv` | function | no | no | `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte:72` | 11 |
| `pointCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:212` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:216` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:217` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:219` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:226` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:227` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:228` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:232` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:240` | 0 |
| `changePointId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:246` | 9 |
| `clonePointType` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:289` | 5 |
| `createNewPointType` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:304` | 12 |
| `deletePointType` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:326` | 5 |
| `movePointTypeUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:334` | 3 |
| `movePointTypeDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:342` | 3 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:350` | 2 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:358` | 8 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:91` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:95` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:99` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:103` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:107` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:111` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:115` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:119` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:123` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:127` | 1 |
| `removeInvalidStyles` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:168` | 11 |
| `checkPrivateDesign` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:204` | 13 |
| `exportDesign` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte:219` | 4 |
| `rowCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:178` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:183` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:184` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:186` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:193` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:194` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:195` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:199` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:207` | 0 |
| `changeSfxId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:213` | 1 |
| `uploadNewSfx` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:232` | 16 |
| `deleteSfx` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:273` | 4 |
| `moveSfxUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:283` | 2 |
| `moveSfxDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:291` | 2 |
| `onSliderUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:299` | 1 |
| `getFileSize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte:303` | 0 |
| `cleanAllStyle` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSymbols.svelte:62` | 18 |
| `compressAllImages` | function | no | yes | `ICCPlus/src/lib/creator/Features/AppSymbols.svelte:128` | 7 |
| `compressImage` | function | no | no | `ICCPlus/src/lib/creator/Features/AppSymbols.svelte:192` | 2 |
| `compress` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppSymbols.svelte:214` | 1 |
| `changeStyling` | function | no | no | `ICCPlus/src/lib/creator/Features/AppTemplates.svelte:1648` | 2 |
| `rowCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:123` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:127` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:128` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:130` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:138` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:139` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:140` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:144` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:152` | 0 |
| `changeVariableId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:158` | 2 |
| `createNewVariable` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:171` | 7 |
| `deleteVariable` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:182` | 5 |
| `moveVariableUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:191` | 3 |
| `moveVariableDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:199` | 3 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:207` | 2 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppVariables.svelte:215` | 8 |
| `rowCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:123` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:127` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:128` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:130` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:138` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:139` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:140` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:144` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:152` | 0 |
| `changeWordId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:158` | 2 |
| `createNewWord` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:171` | 7 |
| `deleteWord` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:182` | 5 |
| `moveWordUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:191` | 3 |
| `moveWordDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:199` | 3 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:207` | 2 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppWords.svelte:215` | 8 |
| `addonWidthClass` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2140` | 3 |
| `copyAddon` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2160` | 4 |
| `moveAddonUp` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2168` | 3 |
| `moveAddonDown` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2174` | 3 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2180` | 4 |
| `toggleSelectable` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2191` | 11 |
| `createNewScore` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2218` | 13 |
| `changeAddonId` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2232` | 3 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2245` | 6 |
| `getRadius` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2256` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2296` | 12 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2319` | 17 |
| `getGroupLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte:21` | 3 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte:29` | 4 |
| `releaseGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte:38` | 4 |
| `getGroupLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte:21` | 3 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte:29` | 4 |
| `releaseGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte:38` | 4 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte:241` | 3 |
| `setRowElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte:251` | 3 |
| `deleteInnerReq` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte:261` | 3 |
| `clickCounterPlus` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:95` | 0 |
| `clickCounterMinus` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:99` | 0 |
| `handleSliderUp` | function | no | yes | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:103` | 1 |
| `clickNumber` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:117` | 4 |
| `handleManually` | function | no | yes | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:125` | 2 |
| `copyRequirement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:148` | 5 |
| `deleteInnerReq` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:156` | 4 |
| `moveReqLeft` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:163` | 3 |
| `moveReqRight` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:169` | 3 |
| `moveScoreDown` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:470` | 2 |
| `moveScoreUp` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:476` | 2 |
| `copyScore` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:482` | 4 |
| `getPointTypeLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:493` | 3 |
| `isPointtypeActivated` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:501` | 7 |
| `handlePanelActivate` | function | no | no | `ICCPlus/src/lib/custom/accordion/Accordion.svelte:99` | 1 |
| `handlePanelOpening` | function | no | no | `ICCPlus/src/lib/custom/accordion/Accordion.svelte:122` | 2 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/accordion/Accordion.svelte:141` | 1 |
| `handleClick` | function | no | no | `ICCPlus/src/lib/custom/accordion/Header.svelte:120` | 0 |
| `handleKeyDown` | function | no | no | `ICCPlus/src/lib/custom/accordion/Header.svelte:128` | 0 |
| `addClass` | function | no | no | `ICCPlus/src/lib/custom/accordion/Header.svelte:136` | 0 |
| `removeClass` | function | no | no | `ICCPlus/src/lib/custom/accordion/Header.svelte:142` | 0 |
| `addStyle` | function | no | no | `ICCPlus/src/lib/custom/accordion/Header.svelte:148` | 2 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/accordion/Header.svelte:158` | 1 |
| `handleHeaderActivate` | function | no | no | `ICCPlus/src/lib/custom/accordion/Panel.svelte:224` | 0 |
| `isOpen` | function | yes | no | `ICCPlus/src/lib/custom/accordion/Panel.svelte:237` | 2 |
| `setOpen` | function | yes | no | `ICCPlus/src/lib/custom/accordion/Panel.svelte:241` | 2 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/accordion/Panel.svelte:245` | 1 |
| `performSearch` | function | no | yes | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:482` | 2 |
| `selectOption` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:511` | 4 |
| `deselectOption` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:548` | 4 |
| `toggleOption` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:573` | 2 |
| `isInViewport` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:589` | 2 |
| `getActiveMenuItems` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:601` | 1 |
| `handleTextfieldKeydown` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:610` | 2 |
| `handleElementBlur` | function | no | yes | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:659` | 2 |
| `isInputFocused` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:691` | 1 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:702` | 2 |
| `blur` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:714` | 4 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:730` | 1 |
| `isExpanded` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:734` | 1 |
| `selectAll` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:738` | 6 |
| `selectProc` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:739` | 0 |
| `handleScroll` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:769` | 0 |
| `getLabel` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:776` | 0 |
| `handleAutocompleteSelected` | function | no | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:350` | 2 |
| `handleInputKeydown` | function | no | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:372` | 1 |
| `handleAutocompleteFocusout` | function | no | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:397` | 1 |
| `handleChipInteraction` | function | no | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:424` | 2 |
| `handleChipRemoval` | function | no | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:434` | 0 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:438` | 1 |
| `blur` | function | yes | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:442` | 2 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte:446` | 1 |
| `setSelectedText` | function | no | no | `ICCPlus/src/lib/custom/select/Option.svelte:57` | 0 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/select/Option.svelte:63` | 1 |
| `uninitializedValue` | arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:286` | 0 |
| `isUninitializedValue` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:287` | 1 |
| `setSelectedText` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:626` | 1 |
| `isSelectAnchorFocused` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:629` | 0 |
| `openMenu` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:635` | 0 |
| `closeMenu` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:638` | 0 |
| `getAnchorElement` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:641` | 0 |
| `setMenuAnchorElement` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:642` | 1 |
| `setMenuAnchorCorner` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:645` | 1 |
| `setMenuWrapFocus` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:648` | 1 |
| `getSelectedIndex` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:651` | 0 |
| `setSelectedIndex` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:652` | 2 |
| `focusMenuItemAtIndex` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:658` | 1 |
| `getMenuItemCount` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:661` | 0 |
| `getMenuItemValues` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:662` | 0 |
| `getMenuItemTextAtIndex` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:663` | 1 |
| `isTypeaheadInProgress` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:664` | 0 |
| `typeaheadMatchItem` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:665` | 0 |
| `setRippleCenter` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:672` | 0 |
| `activateBottomLine` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:674` | 0 |
| `deactivateBottomLine` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:675` | 0 |
| `notifyChange` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:677` | 2 |
| `hasOutline` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:689` | 0 |
| `notchOutline` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:690` | 0 |
| `closeOutline` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:692` | 0 |
| `hasLabel` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:695` | 0 |
| `floatLabel` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:696` | 0 |
| `getLabelWidth` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:698` | 0 |
| `setLabelRequired` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:699` | 0 |
| `hasClass` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:728` | 0 |
| `addClass` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:734` | 0 |
| `removeClass` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:740` | 0 |
| `addStyle` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:746` | 2 |
| `addMenuClass` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:756` | 0 |
| `removeMenuClass` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:762` | 0 |
| `getSelectAnchorAttr` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:768` | 1 |
| `addSelectAnchorAttr` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:774` | 2 |
| `removeSelectAnchorAttr` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:780` | 1 |
| `getMenuItemValues` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:786` | 0 |
| `getNormalizedXCoordinate` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:790` | 1 |
| `isTouchEvent` | function | no | no | `ICCPlus/src/lib/custom/select/Select.svelte:802` | 0 |
| `getUseDefaultValidation` | function | yes | no | `ICCPlus/src/lib/custom/select/Select.svelte:806` | 1 |
| `setUseDefaultValidation` | function | yes | no | `ICCPlus/src/lib/custom/select/Select.svelte:816` | 1 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/select/Select.svelte:820` | 1 |
| `layout` | function | yes | no | `ICCPlus/src/lib/custom/select/Select.svelte:824` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/select/Select.svelte:828` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:93` | 1 |
| `hasClass` | function | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:112` | 0 |
| `addClass` | function | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:118` | 0 |
| `removeClass` | function | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:124` | 0 |
| `getAttr` | function | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:130` | 1 |
| `addAttr` | function | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:136` | 2 |
| `removeAttr` | function | no | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:142` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte:148` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:88` | 1 |
| `registerInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:91` | 0 |
| `deregisterInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:93` | 0 |
| `notifyIconAction` | property-arrow | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:95` | 0 |
| `getAttr` | function | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:112` | 1 |
| `addAttr` | function | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:118` | 2 |
| `removeAttr` | function | no | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:124` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/select/icon/Icon.svelte:130` | 1 |
| `getComponents` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:118` | 0 |
| `getTexts` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:125` | 0 |
| `mousedown` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:139` | 1 |
| `keyup` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:150` | 1 |
| `hasColorChanged` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:167` | 0 |
| `updateColor` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:187` | 1 |
| `updateLetter` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:262` | 1 |
| `updateLetters` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:276` | 1 |
| `wrapperBoundaryCheck` | function | no | yes | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte:290` | 3 |
| `clamp` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:33` | 1 |
| `onClick` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:37` | 2 |
| `pickerMousedown` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:52` | 0 |
| `mouseUp` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:60` | 0 |
| `mouseMove` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:64` | 0 |
| `touch` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:68` | 0 |
| `updateColor` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte:81` | 0 |
| `getTexts` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/accessibility/A11yNotice.svelte:26` | 0 |
| `isGradeAchieved` | function | yes | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/accessibility/grades.js:11` | 2 |
| `getNumberOfGradeFailed` | function | yes | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/accessibility/grades.js:14` | 2 |
| `preventDefault` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/Input.svelte:15` | 0 |
| `updateHex` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/TextInput.svelte:45` | 1 |
| `updateRgb` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/TextInput.svelte:53` | 1 |
| `updateHsv` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/TextInput.svelte:66` | 1 |
| `mix` | function | yes | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/colors.js:8` | 1 |
| `average` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/colors.js:18` | 0 |
| `getContrast` | function | yes | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/colors.js:23` | 3 |
| `nbGradeSummary` | property-arrow | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/texts.js:22` | 2 |
| `trapFocusListener` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/trapFocus.js:4` | 0 |
| `isNext` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/trapFocus.js:16` | 0 |
| `isPrevious` | function | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/trapFocus.js:19` | 0 |
| `trapFocus` | arrow | yes | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/trapFocus.js:32` | 0 |
| `destroy` | method | no | no | `ICCPlus/src/lib/custom/svelte-awesome-color-picker/utils/trapFocus.js:39` | 0 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/HelperLine.svelte:30` | 1 |
| `toNumber` | function | no | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:122` | 1 |
| `isInputEvent` | function | no | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:129` | 1 |
| `valueUpdater` | function | no | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:136` | 3 |
| `changeHandler` | function | no | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:200` | 2 |
| `getAttr` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:215` | 2 |
| `addAttr` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:221` | 3 |
| `removeAttr` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:227` | 2 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:233` | 1 |
| `blur` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:237` | 2 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Input.svelte:241` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Prefix.svelte:30` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Suffix.svelte:30` | 1 |
| `changeHandler` | function | no | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:86` | 0 |
| `getAttr` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:93` | 2 |
| `addAttr` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:99` | 3 |
| `removeAttr` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:105` | 2 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:111` | 1 |
| `blur` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:115` | 2 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textarea.svelte:119` | 1 |
| `uninitializedValue` | arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:284` | 0 |
| `isUninitializedValue` | function | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:285` | 1 |
| `registerTextFieldInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:645` | 0 |
| `deregisterTextFieldInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:647` | 0 |
| `registerValidationAttributeChangeHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:649` | 1 |
| `getAttributesList` | arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:650` | 1 |
| `deregisterValidationAttributeChangeHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:666` | 0 |
| `getNativeInput` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:671` | 0 |
| `setInputAttr` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:672` | 2 |
| `removeInputAttr` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:675` | 1 |
| `isFocused` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:678` | 0 |
| `registerInputInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:679` | 0 |
| `deregisterInputInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:691` | 0 |
| `floatLabel` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:699` | 0 |
| `getLabelWidth` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:701` | 0 |
| `hasLabel` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:702` | 0 |
| `shakeLabel` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:703` | 0 |
| `setLabelRequired` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:705` | 0 |
| `activateLineRipple` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:709` | 0 |
| `deactivateLineRipple` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:711` | 0 |
| `setLineRippleTransformOrigin` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:713` | 0 |
| `closeOutline` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:717` | 0 |
| `hasOutline` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:718` | 0 |
| `notchOutline` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:719` | 0 |
| `hasClass` | function | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:770` | 0 |
| `addClass` | function | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:776` | 0 |
| `removeClass` | function | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:782` | 0 |
| `addStyle` | function | no | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:788` | 2 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:798` | 1 |
| `blur` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:802` | 2 |
| `layout` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:806` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/Textfield.svelte:813` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/character-counter/CharacterCounter.svelte:55` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/character-counter/CharacterCounter.svelte:74` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:93` | 1 |
| `hasClass` | function | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:112` | 0 |
| `addClass` | function | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:118` | 0 |
| `removeClass` | function | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:124` | 0 |
| `getAttr` | function | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:130` | 1 |
| `addAttr` | function | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:136` | 2 |
| `removeAttr` | function | no | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:142` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte:148` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:100` | 1 |
| `registerInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:103` | 0 |
| `deregisterInteractionHandler` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:105` | 0 |
| `notifyIconAction` | property-arrow | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:107` | 0 |
| `getAttr` | function | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:135` | 1 |
| `addAttr` | function | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:141` | 2 |
| `removeAttr` | function | no | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:147` | 1 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte:153` | 1 |
| `tooltip` | function | yes | no | `ICCPlus/src/lib/custom/tooltip/store.svelte.ts:18` | 6 |
| `show` | function | no | no | `ICCPlus/src/lib/custom/tooltip/store.svelte.ts:21` | 5 |
| `hide` | function | no | no | `ICCPlus/src/lib/custom/tooltip/store.svelte.ts:41` | 0 |
| `destroy` | method | no | no | `ICCPlus/src/lib/custom/tooltip/store.svelte.ts:55` | 1 |
| `setValue` | function | no | no | `ICCPlus/src/lib/store/CustomAutocomplete.svelte:51` | 2 |
| `ready` | method | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:196` | 2 |
| `setCropPosition` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:232` | 1 |
| `beforeClose` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:281` | 0 |
| `redraw` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:286` | 1 |
| `compressImage` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:293` | 1 |
| `changeAspect` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:299` | 2 |
| `cropImage` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:306` | 2 |
| `drawImage` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:314` | 0 |
| `processNextImage` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:321` | 2 |
| `setImage` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:352` | 1 |
| `getImage` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:363` | 0 |
| `initAspect` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:370` | 5 |
| `setAspectWidth` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:400` | 4 |
| `setAspectHeight` | function | no | no | `ICCPlus/src/lib/store/ImageUpload.svelte:427` | 4 |
| `updateStrings` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:244` | 0 |
| `onClick` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:254` | 0 |
| `onResize` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:261` | 0 |
| `onDragEnter` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:267` | 0 |
| `onDragLeave` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:272` | 0 |
| `onFileDrop` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:277` | 0 |
| `onFileChange` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:282` | 3 |
| `loadImage` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:340` | 2 |
| `drawImage` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:364` | 3 |
| `selectImage` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:408` | 0 |
| `removeImage` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:412` | 5 |
| `rotateImage` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:432` | 0 |
| `resizeCanvas` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:441` | 1 |
| `getOrientation` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:454` | 0 |
| `switchCanvasOrientation` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:460` | 0 |
| `rotateCanvas` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:466` | 0 |
| `setOrientation` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:471` | 0 |
| `getEXIFOrientation` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:482` | 0 |
| `preloadImage` | function | no | no | `ICCPlus/src/lib/store/PictureInput.svelte:514` | 4 |
| `getAllAttributes` | function | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:31` | 2 |
| `createAllAttributesAttr` | function | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:42` | 2 |
| `parseHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:45` | 2 |
| `renderHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:52` | 0 |
| `createGenericNode` | function | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:58` | 3 |
| `parseHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:72` | 0 |
| `getAttrs` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:75` | 0 |
| `renderHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:79` | 0 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:85` | 0 |
| `createGenericMark` | function | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:93` | 1 |
| `parseHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:100` | 0 |
| `getAttrs` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:103` | 0 |
| `renderHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:107` | 0 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:111` | 0 |
| `parseHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:129` | 0 |
| `getAttrs` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:133` | 0 |
| `renderHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:138` | 0 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:142` | 0 |
| `addCommands` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:148` | 2 |
| `customToggleTextAlign` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:151` | 1 |
| `createCustomExtension` | function | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:183` | 0 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:185` | 0 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:194` | 1 |
| `parseHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:199` | 0 |
| `renderHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:200` | 1 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:207` | 1 |
| `parseHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:212` | 0 |
| `renderHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:213` | 0 |
| `parseHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:217` | 1 |
| `renderHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:218` | 1 |
| `parseHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:221` | 0 |
| `renderHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:222` | 0 |
| `parseHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:225` | 0 |
| `renderHTML` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:226` | 0 |
| `addCommands` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:231` | 3 |
| `clearColor` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:234` | 1 |
| `clearBackgroundColor` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:250` | 2 |
| `clearFontSize` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:266` | 1 |
| `clearLineHeight` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:282` | 1 |
| `parseHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:301` | 0 |
| `getAttrs` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:305` | 0 |
| `parseHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:328` | 0 |
| `getAttrs` | property-arrow | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:331` | 0 |
| `renderHTML` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:335` | 0 |
| `addAttributes` | method | no | no | `ICCPlus/src/lib/store/SanitizeExtensions.ts:339` | 0 |
| `isEmpty` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:316` | 1 |
| `onTransaction` | property-arrow | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:378` | 5 |
| `removeNewlinesInsideList` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:449` | 2 |
| `convertNewlinesToBr` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:497` | 1 |
| `convertBrToNewlines` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:517` | 0 |
| `clickOutside` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:528` | 0 |
| `handleClick` | arrow | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:530` | 0 |
| `destroy` | method | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:540` | 0 |
| `toggleBold` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:546` | 0 |
| `toggleItalic` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:552` | 0 |
| `toggleUnderline` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:558` | 0 |
| `toggleStrike` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:564` | 0 |
| `applyTextColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:570` | 0 |
| `unsetTextColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:577` | 0 |
| `applyBackgroundColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:584` | 1 |
| `unsetBackgroundColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:591` | 0 |
| `toggleFontSize` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:598` | 0 |
| `setFontSize` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:602` | 0 |
| `toggleTextColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:613` | 0 |
| `toggleBackgroundColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:620` | 1 |
| `toggleRawHTML` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:627` | 1 |
| `toggleLineHeight` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:649` | 0 |
| `setLineHeight` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:653` | 0 |
| `toggleLink` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:664` | 0 |
| `applyLink` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:676` | 0 |
| `toggleAlignBox` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:688` | 0 |
| `toggleAlign` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:692` | 0 |
| `copy` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:780` | 1 |
| `paste` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:781` | 1 |
| `clear` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:782` | 1 |
| `export` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:783` | 1 |
| `update` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:821` | 0 |
| `getRows` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:861` | 1 |
| `getChoices` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:864` | 1 |
| `getBackpackRows` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:867` | 1 |
| `getBackpackChoices` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:870` | 1 |
| `getGroups` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:873` | 1 |
| `getPointTypes` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:876` | 1 |
| `getVariables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:879` | 1 |
| `getWords` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:882` | 1 |
| `getGlobalRequirement` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:885` | 1 |
| `getDesignGroups` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:888` | 1 |
| `getSelectables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:891` | 1 |
| `getBackpackSelectables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:894` | 1 |
| `getSearchables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:897` | 1 |
| `getSoundEffects` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:900` | 1 |
| `createCyoaPlusDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:905` | 0 |
| `getOldDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:929` | 0 |
| `getDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:937` | 7 |
| `delay` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1183` | 0 |
| `autoSave` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1195` | 11 |
| `buildAutoSave` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1244` | 10 |
| `saveToSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1292` | 5 |
| `deleteSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1315` | 5 |
| `loadFromSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1338` | 1 |
| `getOldAutoSave` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:1348` | 0 |
| `setOldSave` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:1397` | 2 |
| `initStoreSaves` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1415` | 8 |
| `initBuildSaves` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1467` | 7 |
| `getSelectedObjectId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1510` | 22 |
| `getTimestamp` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1589` | 1 |
| `getPointTypeLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1600` | 3 |
| `getChoiceLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1607` | 5 |
| `getGroupLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1619` | 4 |
| `getRowLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1626` | 5 |
| `getGlobalReqLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1636` | 4 |
| `getDesignLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1643` | 4 |
| `getSfxLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1650` | 3 |
| `getReqText` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1657` | 17 |
| `getChoiceTitle` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1733` | 5 |
| `checkInitId` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1740` | 1 |
| `generateId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1743` | 5 |
| `objectWidthToNum` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1759` | 1 |
| `widthToNum` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1776` | 1 |
| `fixedWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1799` | 1 |
| `checkWordChange` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1817` | 4 |
| `getCombinedRegex` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1825` | 3 |
| `replaceText` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1832` | 14 |
| `getStyling` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1859` | 16 |
| `checkDupId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1950` | 2 |
| `checkPointEnable` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1957` | 8 |
| `checkActivated` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1974` | 2 |
| `getPriority` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1983` | 2 |
| `evaluateNode` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1995` | 3 |
| `checkReq` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2011` | 33 |
| `checkRequirements` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2214` | 2 |
| `wrapYoutubePlayer` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2232` | 4 |
| `load` | method | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2235` | 1 |
| `play` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2244` | 0 |
| `pause` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2245` | 0 |
| `stop` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2246` | 0 |
| `mute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2247` | 0 |
| `unMute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2248` | 0 |
| `setVolume` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2250` | 0 |
| `isPlaying` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2252` | 0 |
| `isStopped` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2253` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2254` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2256` | 0 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2261` | 0 |
| `getDuration` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2262` | 0 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2263` | 0 |
| `getTitle` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2265` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2267` | 0 |
| `wrapAudioPlayer` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2270` | 5 |
| `load` | method | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2291` | 1 |
| `play` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2299` | 1 |
| `pause` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2304` | 1 |
| `stop` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2305` | 1 |
| `mute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2310` | 1 |
| `unMute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2314` | 1 |
| `setVolume` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2319` | 2 |
| `isPlaying` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2326` | 1 |
| `isStopped` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2327` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2328` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2330` | 1 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2341` | 1 |
| `getDuration` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2342` | 1 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2343` | 1 |
| `getTitle` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2345` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2346` | 1 |
| `createAudioPlayer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2349` | 1 |
| `retryAudioPlayer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2361` | 2 |
| `bgmFadeIn` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2371` | 20 |
| `bgmPlay` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2372` | 3 |
| `playProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2380` | 19 |
| `bgmFadeOut` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2491` | 12 |
| `playBgm` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2556` | 14 |
| `loadYouTubeAPI` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2633` | 1 |
| `initYoutubePlayer` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2645` | 8 |
| `onReady` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2653` | 6 |
| `base64ToArrayBuffer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2674` | 0 |
| `getCtx` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2684` | 0 |
| `initSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2688` | 2 |
| `loadSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2701` | 2 |
| `playSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2708` | 5 |
| `playSfxOnSelect` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2727` | 11 |
| `playSfxOnDeselect` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2758` | 11 |
| `initStyling` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2789` | 71 |
| `calcStackDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2822` | 3 |
| `deleteDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2832` | 22 |
| `emptyDiscount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:2855` | 25 |
| `fillDiscount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:2973` | 17 |
| `deselectDiscount` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:3087` | 26 |
| `selectDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3231` | 51 |
| `expDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3371` | 10 |
| `checkPoints` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3388` | 41 |
| `checkAddons` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:3676` | 12 |
| `setScoreValue` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3707` | 15 |
| `cleanActivated` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3763` | 104 |
| `deselectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:3766` | 16 |
| `clearProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:3791` | 31 |
| `selectForceActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4134` | 16 |
| `deselectTempActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4170` | 7 |
| `deselectForceActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4193` | 17 |
| `selectForceRandomActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4256` | 18 |
| `removeCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4334` | 12 |
| `addCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4391` | 16 |
| `updateCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4459` | 5 |
| `deselectUpdateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4482` | 44 |
| `selectUpdateScore` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:4876` | 48 |
| `activateTempChoices` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:5283` | 12 |
| `clearWordDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5322` | 8 |
| `clearImgDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5333` | 5 |
| `openWordDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5341` | 9 |
| `openImgDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5365` | 7 |
| `delayProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5386` | 0 |
| `deselectDiscountOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5390` | 11 |
| `selectDiscountOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5435` | 11 |
| `deselectCalculateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5480` | 28 |
| `selectCalculateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5566` | 23 |
| `deselectActivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5640` | 14 |
| `selectActivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5723` | 11 |
| `selectDeactivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5771` | 12 |
| `deselectMissingReq` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5822` | 13 |
| `deselectModifyPoint` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5868` | 16 |
| `selectModifyPoint` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6038` | 23 |
| `setVariables` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6126` | 8 |
| `addAllowedChoice` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6149` | 14 |
| `deselectEffectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6184` | 47 |
| `selectEffectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6411` | 48 |
| `play` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6413` | 4 |
| `deselectHideContent` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6597` | 13 |
| `selectHideContent` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6643` | 14 |
| `selectScroll` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6690` | 14 |
| `checkAddonDeselectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6734` | 10 |
| `checkDeselectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6764` | 1 |
| `checkSelectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6773` | 32 |
| `deselectObject` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:6871` | 48 |
| `deselectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:6890` | 31 |
| `selectObject` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7061` | 64 |
| `tmpAdd` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:7064` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7160` | 32 |
| `selectedOneMore` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7303` | 69 |
| `tmpAdd` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:7306` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7403` | 35 |
| `selectedOneLess` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7596` | 50 |
| `deselectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7623` | 28 |
| `updateScores` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7815` | 36 |
| `selectObjectL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8071` | 52 |
| `selectedOneMoreL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8360` | 51 |
| `selectedOneLessL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8670` | 21 |
| `activateProc` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8722` | 16 |
| `loadActivated` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:8773` | 1 |
| `duplicateRow` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:8777` | 40 |
| `getDataURL` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9057` | 2 |
| `isDataURL` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9061` | 2 |
| `removeNulls` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9313` | 2 |
| `initFilterStyling` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9330` | 21 |
| `initPrivateStyling` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9351` | 16 |
| `loadFromDisk` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:9501` | 6 |
| `exportData` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9593` | 6 |
| `importRequirement` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9616` | 3 |
| `importChoice` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9642` | 7 |
| `importData` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:9727` | 37 |
| `getMimeFromBlob` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:10142` | 1 |
| `initializeApp` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:10152` | 119 |
| `replaceFields` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11112` | 0 |
| `replaceImages` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11125` | 22 |
| `waitForImagesToLoad` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:11204` | 0 |
| `forceEagerImageLoading` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11216` | 0 |
| `copyComputedStyles` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11225` | 0 |
| `deepCopyStyles` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11236` | 0 |
| `waitForBorderImagesToLoad` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:11246` | 1 |
| `waitForRenderFrames` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11269` | 1 |
| `next` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11272` | 1 |
| `downloadAsImage` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:11279` | 21 |
| `filter` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11361` | 2 |
| `filter` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11390` | 2 |
| `isMediaSupport` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11428` | 1 |
| `toggleTheme` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11438` | 2 |
| `setShortcut` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11480` | 2 |
| `applyTemplate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11498` | 6 |
| `revertTemplate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11506` | 7 |
| `applyWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11520` | 7 |
| `revertWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11528` | 7 |
| `getDate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11542` | 2 |
| `scrollToLastRow` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11553` | 2 |
| `tryScroll` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11558` | 1 |
| `applyCustomCSS` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11572` | 5 |
| `hexToRgba` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11591` | 1 |
| `rgbToHex` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11602` | 1 |
| `toggleAltMenu` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11613` | 2 |
| `removeAnchor` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11617` | 6 |
| `pasteObject` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11627` | 29 |
| `clearClipboard` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11757` | 12 |
| `closestByClassPrefix` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11790` | 1 |
| `copyObject` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11806` | 9 |
| `copyScores` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11825` | 7 |
| `pasteScore` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11842` | 7 |
| `copyAddons` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11857` | 6 |
| `pasteAddon` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11873` | 20 |
| `copyRequireds` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11916` | 8 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11932` | 6 |
| `copyGroups` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11945` | 7 |
| `pasteGroup` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11960` | 9 |
| `copyDesignGroups` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11978` | 6 |
| `pasteDesignGroup` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11993` | 7 |
| `choiceContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12011` | 12 |
| `requiredContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12032` | 12 |
| `scoreContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12053` | 12 |
| `addonContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12074` | 11 |
| `groupContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12095` | 8 |
| `dGroupContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12112` | 7 |
| `e` | function | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 2 |
| `i` | function | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `o` | function | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 3 |
| `l` | arrow | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 0 |
| `onError` | method | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `onSuccess` | method | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `maxArea` | method | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `maxHeight` | method | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `maxWidth` | method | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `test` | method | no | no | `ICCPlus/src/lib/utils/canvas-size.esm.min.js:8` | 1 |
| `getSelectedObjectName` | function | no | no | `ICCPlus/src/lib/viewer/AppBuildForm.svelte:51` | 9 |
| `saveProcess` | function | no | no | `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte:279` | 0 |
| `allowDeselectInBackpack` | function | no | no | `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte:286` | 6 |
| `setFilters` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:530` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:643` | 7 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/viewer/AppObject.svelte:666` | 11 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:690` | 17 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:727` | 5 |
| `renderIcon` | function | no | no | `ICCPlus/src/lib/viewer/AppPointBar.svelte:68` | 8 |
| `buttonActivate` | function | no | no | `ICCPlus/src/lib/viewer/AppRow.svelte:398` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/viewer/AppRow.svelte:545` | 5 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:138` | 0 |
| `beforeClosed` | function | no | no | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:158` | 1 |
| `loadApp` | function | no | yes | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:163` | 3 |
| `loadAutoSave` | function | no | yes | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:169` | 3 |
| `loadLegacySave` | function | no | yes | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:175` | 4 |
| `copyBuildCode` | function | no | yes | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:182` | 8 |
| `saveApp` | function | no | no | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:197` | 5 |
| `removeSave` | function | no | no | `ICCPlus/src/lib/viewer/AppSaveLoad.svelte:219` | 1 |
| `getChoiceLabel` | function | no | no | `ICCPlus/src/lib/viewer/AppSearchForm.svelte:111` | 2 |
| `beforeClose` | function | no | no | `ICCPlus/src/lib/viewer/DlgCommon.svelte:59` | 1 |
| `addonWidthClass` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:595` | 3 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:615` | 4 |
| `getRadius` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:626` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:666` | 12 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:689` | 17 |
| `clickCounterPlus` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:95` | 0 |
| `clickCounterMinus` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:99` | 0 |
| `handleSliderUp` | function | no | yes | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:103` | 1 |
| `clickNumber` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:117` | 4 |
| `handleManually` | function | no | yes | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:125` | 2 |
| `isPointtypeActivated` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectScore.svelte:262` | 7 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:203` | 0 |
| `buildContext` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:277` | 2 |
| `calTime` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:284` | 0 |
| `toggleTheme` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:294` | 1 |
| `rowWidthClass` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:318` | 4 |
| `handlePlayButton` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:324` | 5 |
| `handleStopButton` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:369` | 3 |
| `handleMuteButton` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:384` | 2 |
| `handlePlaybarDown` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:397` | 2 |
| `handlePlaybarUp` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:405` | 4 |
| `handleVolumebarDown` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:417` | 0 |
| `handleVolumebarUp` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:421` | 3 |
| `beforeunloadHandler` | arrow | no | no | `ICCPlus/src/main.ts:12` | 0 |
| `manualChunks` | method | no | no | `ICCPlus/vite.config.desktop.ts:23` | 1 |
| `assetFileNames` | property-arrow | no | no | `ICCPlus/vite.config.desktop.ts:28` | 2 |
| `manualChunks` | method | no | no | `ICCPlus/vite.config.ts:44` | 1 |
| `assetFileNames` | property-arrow | no | no | `ICCPlus/vite.config.ts:49` | 2 |
| `replacer` | arrow | no | no | `ICCPlus_Viewer/add-comment.js:23` | 1 |
| `autoModeWatcher` | function | no | no | `ICCPlus_Viewer/src/App.svelte:27` | 1 |
| `loadImagesSequentially` | function | no | yes | `ICCPlus_Viewer/src/App.svelte:61` | 0 |
| `checkAvifSupport` | function | no | yes | `ICCPlus_Viewer/src/App.svelte:83` | 5 |
| `loadProject` | function | no | yes | `ICCPlus_Viewer/src/App.svelte:103` | 8 |
| `performSearch` | function | no | yes | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:482` | 2 |
| `selectOption` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:511` | 4 |
| `deselectOption` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:548` | 4 |
| `toggleOption` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:573` | 2 |
| `isInViewport` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:589` | 2 |
| `getActiveMenuItems` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:601` | 1 |
| `handleTextfieldKeydown` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:610` | 2 |
| `handleElementBlur` | function | no | yes | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:659` | 2 |
| `isInputFocused` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:691` | 1 |
| `focus` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:702` | 2 |
| `blur` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:714` | 4 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:730` | 1 |
| `isExpanded` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:734` | 1 |
| `selectAll` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:738` | 6 |
| `selectProc` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:739` | 0 |
| `handleScroll` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:769` | 0 |
| `getLabel` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:776` | 0 |
| `setSelectedText` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Option.svelte:57` | 0 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/Option.svelte:63` | 1 |
| `uninitializedValue` | arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:286` | 0 |
| `isUninitializedValue` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:287` | 1 |
| `setSelectedText` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:626` | 1 |
| `isSelectAnchorFocused` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:629` | 0 |
| `openMenu` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:635` | 0 |
| `closeMenu` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:638` | 0 |
| `getAnchorElement` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:641` | 0 |
| `setMenuAnchorElement` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:642` | 1 |
| `setMenuAnchorCorner` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:645` | 1 |
| `setMenuWrapFocus` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:648` | 1 |
| `getSelectedIndex` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:651` | 0 |
| `setSelectedIndex` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:652` | 2 |
| `focusMenuItemAtIndex` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:658` | 1 |
| `getMenuItemCount` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:661` | 0 |
| `getMenuItemValues` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:662` | 0 |
| `getMenuItemTextAtIndex` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:663` | 1 |
| `isTypeaheadInProgress` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:664` | 0 |
| `typeaheadMatchItem` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:665` | 0 |
| `setRippleCenter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:672` | 0 |
| `activateBottomLine` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:674` | 0 |
| `deactivateBottomLine` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:675` | 0 |
| `notifyChange` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:677` | 2 |
| `hasOutline` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:689` | 0 |
| `notchOutline` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:690` | 0 |
| `closeOutline` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:692` | 0 |
| `hasLabel` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:695` | 0 |
| `floatLabel` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:696` | 0 |
| `getLabelWidth` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:698` | 0 |
| `setLabelRequired` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:699` | 0 |
| `hasClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:728` | 0 |
| `addClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:734` | 0 |
| `removeClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:740` | 0 |
| `addStyle` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:746` | 2 |
| `addMenuClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:756` | 0 |
| `removeMenuClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:762` | 0 |
| `getSelectAnchorAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:768` | 1 |
| `addSelectAnchorAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:774` | 2 |
| `removeSelectAnchorAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:780` | 1 |
| `getMenuItemValues` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:786` | 0 |
| `getNormalizedXCoordinate` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:790` | 1 |
| `isTouchEvent` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:802` | 0 |
| `getUseDefaultValidation` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:806` | 1 |
| `setUseDefaultValidation` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:816` | 1 |
| `focus` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:820` | 1 |
| `layout` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:824` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/Select.svelte:828` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:93` | 1 |
| `hasClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:112` | 0 |
| `addClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:118` | 0 |
| `removeClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:124` | 0 |
| `getAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:130` | 1 |
| `addAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:136` | 2 |
| `removeAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:142` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte:148` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:88` | 1 |
| `registerInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:91` | 0 |
| `deregisterInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:93` | 0 |
| `notifyIconAction` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:95` | 0 |
| `getAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:112` | 1 |
| `addAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:118` | 2 |
| `removeAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:124` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte:130` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/HelperLine.svelte:30` | 1 |
| `toNumber` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:122` | 1 |
| `isInputEvent` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:129` | 1 |
| `valueUpdater` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:136` | 3 |
| `changeHandler` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:200` | 2 |
| `getAttr` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:215` | 2 |
| `addAttr` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:221` | 3 |
| `removeAttr` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:227` | 2 |
| `focus` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:233` | 1 |
| `blur` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:237` | 2 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte:241` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Prefix.svelte:30` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Suffix.svelte:30` | 1 |
| `changeHandler` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:86` | 0 |
| `getAttr` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:93` | 2 |
| `addAttr` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:99` | 3 |
| `removeAttr` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:105` | 2 |
| `focus` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:111` | 1 |
| `blur` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:115` | 2 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte:119` | 1 |
| `uninitializedValue` | arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:284` | 0 |
| `isUninitializedValue` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:285` | 1 |
| `registerTextFieldInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:645` | 0 |
| `deregisterTextFieldInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:647` | 0 |
| `registerValidationAttributeChangeHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:649` | 1 |
| `getAttributesList` | arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:650` | 1 |
| `deregisterValidationAttributeChangeHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:666` | 0 |
| `getNativeInput` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:671` | 0 |
| `setInputAttr` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:672` | 2 |
| `removeInputAttr` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:675` | 1 |
| `isFocused` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:678` | 0 |
| `registerInputInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:679` | 0 |
| `deregisterInputInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:691` | 0 |
| `floatLabel` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:699` | 0 |
| `getLabelWidth` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:701` | 0 |
| `hasLabel` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:702` | 0 |
| `shakeLabel` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:703` | 0 |
| `setLabelRequired` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:705` | 0 |
| `activateLineRipple` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:709` | 0 |
| `deactivateLineRipple` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:711` | 0 |
| `setLineRippleTransformOrigin` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:713` | 0 |
| `closeOutline` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:717` | 0 |
| `hasOutline` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:718` | 0 |
| `notchOutline` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:719` | 0 |
| `hasClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:770` | 0 |
| `addClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:776` | 0 |
| `removeClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:782` | 0 |
| `addStyle` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:788` | 2 |
| `focus` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:798` | 1 |
| `blur` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:802` | 2 |
| `layout` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:806` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte:813` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/character-counter/CharacterCounter.svelte:55` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/character-counter/CharacterCounter.svelte:74` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:93` | 1 |
| `hasClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:112` | 0 |
| `addClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:118` | 0 |
| `removeClass` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:124` | 0 |
| `getAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:130` | 1 |
| `addAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:136` | 2 |
| `removeAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:142` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte:148` | 1 |
| `setContent` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:100` | 1 |
| `registerInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:103` | 0 |
| `deregisterInteractionHandler` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:105` | 0 |
| `notifyIconAction` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:107` | 0 |
| `getAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:135` | 1 |
| `addAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:141` | 2 |
| `removeAttr` | function | no | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:147` | 1 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte:153` | 1 |
| `tooltip` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/tooltip/store.svelte.ts:18` | 6 |
| `show` | function | no | no | `ICCPlus_Viewer/src/lib/custom/tooltip/store.svelte.ts:21` | 5 |
| `hide` | function | no | no | `ICCPlus_Viewer/src/lib/custom/tooltip/store.svelte.ts:41` | 0 |
| `destroy` | method | no | no | `ICCPlus_Viewer/src/lib/custom/tooltip/store.svelte.ts:55` | 1 |
| `ready` | method | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:196` | 2 |
| `setCropPosition` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:232` | 1 |
| `beforeClose` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:281` | 0 |
| `redraw` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:286` | 1 |
| `compressImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:293` | 1 |
| `changeAspect` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:299` | 2 |
| `cropImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:306` | 2 |
| `drawImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:314` | 0 |
| `processNextImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:321` | 2 |
| `setImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:352` | 1 |
| `getImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:363` | 0 |
| `initAspect` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:370` | 5 |
| `setAspectWidth` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:400` | 4 |
| `setAspectHeight` | function | no | no | `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte:427` | 4 |
| `updateStrings` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:244` | 0 |
| `onClick` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:254` | 0 |
| `onResize` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:261` | 0 |
| `onDragEnter` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:267` | 0 |
| `onDragLeave` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:272` | 0 |
| `onFileDrop` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:277` | 0 |
| `onFileChange` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:282` | 3 |
| `loadImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:340` | 2 |
| `drawImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:364` | 3 |
| `selectImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:408` | 0 |
| `removeImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:412` | 5 |
| `rotateImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:432` | 0 |
| `resizeCanvas` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:441` | 1 |
| `getOrientation` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:454` | 0 |
| `switchCanvasOrientation` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:460` | 0 |
| `rotateCanvas` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:466` | 0 |
| `setOrientation` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:471` | 0 |
| `getEXIFOrientation` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:482` | 0 |
| `preloadImage` | function | no | no | `ICCPlus_Viewer/src/lib/store/PictureInput.svelte:514` | 4 |
| `update` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:798` | 0 |
| `getSearchables` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:808` | 1 |
| `getSoundEffects` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:811` | 1 |
| `createCyoaPlusDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:816` | 0 |
| `getOldDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:840` | 0 |
| `getDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:848` | 7 |
| `delay` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1091` | 0 |
| `buildAutoSave` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1103` | 10 |
| `saveToSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1151` | 5 |
| `deleteSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1170` | 5 |
| `loadFromSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1189` | 1 |
| `initBuildSaves` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1199` | 7 |
| `getSelectedObjectId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1242` | 22 |
| `getTimestamp` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1321` | 1 |
| `getChoiceLabel` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1332` | 5 |
| `getReqText` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1344` | 17 |
| `getChoiceTitle` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1420` | 5 |
| `checkInitId` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1427` | 1 |
| `generateId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1430` | 5 |
| `objectWidthToNum` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1446` | 1 |
| `widthToNum` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1463` | 1 |
| `fixedWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1486` | 1 |
| `checkWordChange` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1504` | 4 |
| `getCombinedRegex` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1512` | 3 |
| `replaceText` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1519` | 14 |
| `getStyling` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1546` | 16 |
| `checkDupId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1637` | 2 |
| `checkPointEnable` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1644` | 8 |
| `checkActivated` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1661` | 2 |
| `getPriority` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1670` | 2 |
| `evaluateNode` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1682` | 3 |
| `checkReq` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1698` | 33 |
| `checkRequirements` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1901` | 2 |
| `wrapYoutubePlayer` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1919` | 4 |
| `load` | method | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1922` | 1 |
| `play` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1931` | 0 |
| `pause` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1932` | 0 |
| `stop` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1933` | 0 |
| `mute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1934` | 0 |
| `unMute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1935` | 0 |
| `setVolume` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1937` | 0 |
| `isPlaying` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1939` | 0 |
| `isStopped` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1940` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1941` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1943` | 0 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1948` | 0 |
| `getDuration` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1949` | 0 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1950` | 0 |
| `getTitle` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1952` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1954` | 0 |
| `wrapAudioPlayer` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1957` | 5 |
| `load` | method | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1978` | 1 |
| `play` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1986` | 1 |
| `pause` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1991` | 1 |
| `stop` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1992` | 1 |
| `mute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1997` | 1 |
| `unMute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2001` | 1 |
| `setVolume` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2006` | 2 |
| `isPlaying` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2013` | 1 |
| `isStopped` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2014` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2015` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2017` | 1 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2028` | 1 |
| `getDuration` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2029` | 1 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2030` | 1 |
| `getTitle` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2032` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2033` | 1 |
| `createAudioPlayer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2036` | 1 |
| `retryAudioPlayer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2048` | 2 |
| `bgmFadeIn` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2058` | 20 |
| `bgmPlay` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2059` | 3 |
| `playProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2067` | 19 |
| `bgmFadeOut` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2178` | 12 |
| `playBgm` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2243` | 14 |
| `loadYouTubeAPI` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2320` | 1 |
| `initYoutubePlayer` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2332` | 8 |
| `onReady` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2340` | 6 |
| `base64ToArrayBuffer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2361` | 0 |
| `getCtx` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2371` | 0 |
| `initSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2375` | 2 |
| `loadSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2388` | 2 |
| `playSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2395` | 5 |
| `playSfxOnSelect` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2414` | 11 |
| `playSfxOnDeselect` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2445` | 11 |
| `initStyling` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2476` | 71 |
| `calcStackDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2509` | 3 |
| `deleteDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2519` | 22 |
| `emptyDiscount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2542` | 25 |
| `fillDiscount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2660` | 17 |
| `deselectDiscount` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2774` | 26 |
| `selectDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2918` | 51 |
| `expDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3058` | 10 |
| `checkPoints` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3075` | 41 |
| `checkAddons` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3363` | 12 |
| `setScoreValue` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3394` | 15 |
| `cleanActivated` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3450` | 104 |
| `deselectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3453` | 16 |
| `clearProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3478` | 31 |
| `selectForceActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3821` | 16 |
| `deselectTempActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3857` | 7 |
| `deselectForceActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3880` | 17 |
| `selectForceRandomActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3943` | 18 |
| `removeCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4021` | 12 |
| `addCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4078` | 16 |
| `updateCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4146` | 5 |
| `deselectUpdateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4169` | 44 |
| `selectUpdateScore` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4563` | 48 |
| `activateTempChoices` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4970` | 12 |
| `clearWordDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5009` | 8 |
| `clearImgDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5020` | 5 |
| `openWordDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5028` | 9 |
| `openImgDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5052` | 7 |
| `delayProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5073` | 0 |
| `deselectDiscountOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5077` | 11 |
| `selectDiscountOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5122` | 11 |
| `deselectCalculateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5167` | 28 |
| `selectCalculateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5253` | 23 |
| `deselectActivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5327` | 14 |
| `selectActivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5410` | 11 |
| `selectDeactivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5458` | 12 |
| `deselectMissingReq` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5509` | 13 |
| `deselectModifyPoint` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5555` | 16 |
| `selectModifyPoint` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5725` | 23 |
| `setVariables` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5813` | 8 |
| `addAllowedChoice` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5836` | 14 |
| `deselectEffectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5871` | 47 |
| `selectEffectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6098` | 48 |
| `play` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6100` | 4 |
| `deselectHideContent` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6284` | 13 |
| `selectHideContent` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6330` | 14 |
| `selectScroll` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6377` | 14 |
| `checkAddonDeselectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6421` | 10 |
| `checkDeselectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6451` | 1 |
| `checkSelectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6460` | 32 |
| `deselectObject` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6558` | 48 |
| `deselectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6577` | 31 |
| `selectObject` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6748` | 64 |
| `tmpAdd` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6751` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6847` | 32 |
| `selectedOneMore` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6990` | 69 |
| `tmpAdd` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6993` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7090` | 35 |
| `selectedOneLess` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7283` | 50 |
| `deselectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7310` | 28 |
| `updateScores` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7502` | 36 |
| `selectObjectL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7758` | 52 |
| `selectedOneMoreL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8047` | 51 |
| `selectedOneLessL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8357` | 21 |
| `activateProc` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8409` | 16 |
| `loadActivated` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8460` | 1 |
| `duplicateRow` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8464` | 40 |
| `getDataURL` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8744` | 2 |
| `isDataURL` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8748` | 2 |
| `isAvif` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8752` | 2 |
| `removeNulls` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9007` | 2 |
| `initFilterStyling` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9024` | 21 |
| `initPrivateStyling` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9045` | 16 |
| `initializeApp` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9195` | 113 |
| `waitForImagesToLoad` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10098` | 0 |
| `forceEagerImageLoading` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10109` | 0 |
| `copyComputedStyles` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10117` | 0 |
| `deepCopyStyles` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10127` | 0 |
| `waitForBorderImagesToLoad` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10136` | 1 |
| `waitForRenderFrames` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10159` | 1 |
| `next` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10162` | 1 |
| `downloadAsImage` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10169` | 21 |
| `filter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10251` | 2 |
| `filter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10280` | 2 |
| `isMediaSupport` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10318` | 1 |
| `toggleTheme` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10328` | 2 |
| `applyTemplate` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10370` | 6 |
| `revertTemplate` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10378` | 7 |
| `applyWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10392` | 7 |
| `revertWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10400` | 7 |
| `applyCustomCSS` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10414` | 5 |
| `hexToRgba` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10433` | 1 |
| `closestByClassPrefix` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10444` | 1 |
| `e` | function | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 2 |
| `i` | function | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `o` | function | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 3 |
| `l` | arrow | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 0 |
| `onError` | method | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `onSuccess` | method | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `maxArea` | method | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `maxHeight` | method | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `maxWidth` | method | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `test` | method | no | no | `ICCPlus_Viewer/src/lib/utils/canvas-size.esm.min.js:9` | 1 |
| `getSelectedObjectName` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppBuildForm.svelte:51` | 9 |
| `saveProcess` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte:279` | 0 |
| `allowDeselectInBackpack` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte:286` | 6 |
| `beforeClose` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte:297` | 13 |
| `setFilters` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:530` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:643` | 7 |
| `handleCounter` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:666` | 11 |
| `activateObject` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:690` | 17 |
| `copyTooltip` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:727` | 5 |
| `renderIcon` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppPointBar.svelte:68` | 8 |
| `buttonActivate` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte:398` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte:545` | 5 |
| `action` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:138` | 0 |
| `beforeClosed` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:158` | 1 |
| `loadApp` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:163` | 3 |
| `loadAutoSave` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:169` | 3 |
| `loadLegacySave` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:175` | 4 |
| `copyBuildCode` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:182` | 8 |
| `saveApp` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:197` | 5 |
| `removeSave` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte:219` | 1 |
| `getChoiceLabel` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppSearchForm.svelte:111` | 2 |
| `beforeClose` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/DlgCommon.svelte:59` | 1 |
| `addonWidthClass` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:595` | 3 |
| `copyTooltip` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:615` | 4 |
| `getRadius` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:626` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:666` | 12 |
| `activateObject` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:689` | 17 |
| `clickCounterPlus` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:95` | 0 |
| `clickCounterMinus` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:99` | 0 |
| `handleSliderUp` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:103` | 1 |
| `clickNumber` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:117` | 4 |
| `handleManually` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:125` | 2 |
| `isPointtypeActivated` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectScore.svelte:262` | 7 |
| `action` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:178` | 0 |
| `buildContext` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:247` | 2 |
| `calTime` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:254` | 0 |
| `toggleTheme` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:264` | 1 |
| `rowWidthClass` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:288` | 4 |
| `handlePlayButton` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:294` | 5 |
| `handleStopButton` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:339` | 3 |
| `handleMuteButton` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:354` | 2 |
| `handlePlaybarDown` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:367` | 2 |
| `handlePlaybarUp` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:375` | 4 |
| `handleVolumebarDown` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:387` | 0 |
| `handleVolumebarUp` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:391` | 3 |
| `beforeunloadHandler` | arrow | no | no | `ICCPlus_Viewer/src/main.ts:12` | 0 |
| `assetFileNames` | property-arrow | no | no | `ICCPlus_Viewer/vite.config.local.ts:25` | 2 |
| `manualChunks` | method | no | no | `ICCPlus_Viewer/vite.config.ts:46` | 1 |
| `assetFileNames` | property-arrow | no | no | `ICCPlus_Viewer/vite.config.ts:51` | 2 |

## Svelte components

| Component | Lines | Model fields | Extracted UI labels |
| --- | ---: | ---: | ---: |
| `ICCPlus/src/App.svelte` | 172 | 17 | 4 |
| `ICCPlus/src/lib/creator/AppBuildForm.svelte` | 122 | 13 | 6 |
| `ICCPlus/src/lib/creator/AppButtonSettings.svelte` | 181 | 21 | 8 |
| `ICCPlus/src/lib/creator/AppCreateMultipleChoice.svelte` | 40 | 5 | 4 |
| `ICCPlus/src/lib/creator/AppCustomCSS.svelte` | 76 | 11 | 3 |
| `ICCPlus/src/lib/creator/AppDesign.svelte` | 206 | 24 | 4 |
| `ICCPlus/src/lib/creator/AppFeature.svelte` | 117 | 21 | 2 |
| `ICCPlus/src/lib/creator/AppGlobalSettings.svelte` | 641 | 62 | 14 |
| `ICCPlus/src/lib/creator/AppObject.svelte` | 2848 | 417 | 43 |
| `ICCPlus/src/lib/creator/AppObjectList.svelte` | 89 | 15 | 2 |
| `ICCPlus/src/lib/creator/AppObjectSettings.svelte` | 367 | 64 | 7 |
| `ICCPlus/src/lib/creator/AppPointBar.svelte` | 75 | 33 | 0 |
| `ICCPlus/src/lib/creator/AppProjectStats.svelte` | 210 | 13 | 2 |
| `ICCPlus/src/lib/creator/AppRequirement.svelte` | 229 | 38 | 17 |
| `ICCPlus/src/lib/creator/AppRow.svelte` | 1097 | 214 | 14 |
| `ICCPlus/src/lib/creator/AppRowList.svelte` | 108 | 20 | 2 |
| `ICCPlus/src/lib/creator/AppRowSettings.svelte` | 454 | 56 | 11 |
| `ICCPlus/src/lib/creator/AppSaveLoad.svelte` | 751 | 58 | 7 |
| `ICCPlus/src/lib/creator/AppSearchForm.svelte` | 124 | 18 | 2 |
| `ICCPlus/src/lib/creator/AppViewerConfig.svelte` | 195 | 26 | 6 |
| `ICCPlus/src/lib/creator/CreatorMain.svelte` | 1052 | 133 | 6 |
| `ICCPlus/src/lib/creator/Design/AppAddonDesign.svelte` | 348 | 60 | 27 |
| `ICCPlus/src/lib/creator/Design/AppAddonImage.svelte` | 185 | 35 | 13 |
| `ICCPlus/src/lib/creator/Design/AppBackground.svelte` | 244 | 33 | 2 |
| `ICCPlus/src/lib/creator/Design/AppBackpack.svelte` | 99 | 19 | 3 |
| `ICCPlus/src/lib/creator/Design/AppChoiceDesign.svelte` | 290 | 54 | 27 |
| `ICCPlus/src/lib/creator/Design/AppChoiceImage.svelte` | 172 | 36 | 13 |
| `ICCPlus/src/lib/creator/Design/AppFilter.svelte` | 435 | 104 | 10 |
| `ICCPlus/src/lib/creator/Design/AppMultiChoice.svelte` | 123 | 17 | 4 |
| `ICCPlus/src/lib/creator/Design/AppPointbar.svelte` | 96 | 23 | 7 |
| `ICCPlus/src/lib/creator/Design/AppRowDesign.svelte` | 261 | 57 | 34 |
| `ICCPlus/src/lib/creator/Design/AppRowImage.svelte` | 171 | 34 | 13 |
| `ICCPlus/src/lib/creator/Design/AppText.svelte` | 270 | 49 | 4 |
| `ICCPlus/src/lib/creator/DlgBackpack.svelte` | 79 | 25 | 2 |
| `ICCPlus/src/lib/creator/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus/src/lib/creator/Features/AppBackpack.svelte` | 372 | 69 | 3 |
| `ICCPlus/src/lib/creator/Features/AppCategories.svelte` | 304 | 34 | 3 |
| `ICCPlus/src/lib/creator/Features/AppDefaults.svelte` | 412 | 47 | 23 |
| `ICCPlus/src/lib/creator/Features/AppDesignGroups.svelte` | 433 | 38 | 6 |
| `ICCPlus/src/lib/creator/Features/AppGlobalRequirements.svelte` | 319 | 29 | 8 |
| `ICCPlus/src/lib/creator/Features/AppGroups.svelte` | 415 | 33 | 6 |
| `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte` | 100 | 12 | 3 |
| `ICCPlus/src/lib/creator/Features/AppPointSettings.svelte` | 246 | 34 | 5 |
| `ICCPlus/src/lib/creator/Features/AppPoints.svelte` | 390 | 42 | 12 |
| `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte` | 237 | 38 | 4 |
| `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte` | 308 | 32 | 6 |
| `ICCPlus/src/lib/creator/Features/AppSymbols.svelte` | 235 | 25 | 5 |
| `ICCPlus/src/lib/creator/Features/AppTemplates.svelte` | 1651 | 206 | 10 |
| `ICCPlus/src/lib/creator/Features/AppVariables.svelte` | 247 | 24 | 6 |
| `ICCPlus/src/lib/creator/Features/AppWords.svelte` | 247 | 24 | 6 |
| `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte` | 2351 | 397 | 38 |
| `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte` | 48 | 9 | 1 |
| `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte` | 48 | 9 | 1 |
| `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte` | 266 | 32 | 10 |
| `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte` | 136 | 34 | 0 |
| `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte` | 174 | 34 | 4 |
| `ICCPlus/src/lib/creator/Object/ObjectScore.svelte` | 523 | 95 | 10 |
| `ICCPlus/src/lib/creator/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus/src/lib/custom/accordion/Accordion.svelte` | 145 | 5 | 0 |
| `ICCPlus/src/lib/custom/accordion/Header.svelte` | 162 | 6 | 0 |
| `ICCPlus/src/lib/custom/accordion/Panel.svelte` | 249 | 6 | 0 |
| `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte` | 780 | 24 | 0 |
| `ICCPlus/src/lib/custom/chip-input/ChipInput.svelte` | 450 | 10 | 0 |
| `ICCPlus/src/lib/custom/select/Option.svelte` | 67 | 4 | 0 |
| `ICCPlus/src/lib/custom/select/Select.svelte` | 832 | 21 | 0 |
| `ICCPlus/src/lib/custom/select/helper-text/HelperText.svelte` | 152 | 7 | 0 |
| `ICCPlus/src/lib/custom/select/icon/Icon.svelte` | 134 | 7 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/ColorPicker.svelte` | 513 | 15 | 1 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/Picker.svelte` | 177 | 7 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/accessibility/A11yHorizontalWrapper.svelte` | 90 | 10 | 1 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/accessibility/A11yNotice.svelte` | 124 | 11 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/accessibility/A11ySingleNotice.svelte` | 99 | 8 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/chrome-picker/Wrapper.svelte` | 72 | 8 | 1 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/Input.svelte` | 105 | 8 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/NullabilityCheckbox.svelte` | 56 | 5 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/PickerIndicator.svelte` | 34 | 4 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/TextInput.svelte` | 212 | 10 | 0 |
| `ICCPlus/src/lib/custom/svelte-awesome-color-picker/components/variant/default/Wrapper.svelte` | 61 | 7 | 1 |
| `ICCPlus/src/lib/custom/textfield/HelperLine.svelte` | 34 | 3 | 0 |
| `ICCPlus/src/lib/custom/textfield/Input.svelte` | 245 | 8 | 0 |
| `ICCPlus/src/lib/custom/textfield/Prefix.svelte` | 34 | 3 | 0 |
| `ICCPlus/src/lib/custom/textfield/Suffix.svelte` | 34 | 3 | 0 |
| `ICCPlus/src/lib/custom/textfield/Textarea.svelte` | 123 | 7 | 0 |
| `ICCPlus/src/lib/custom/textfield/Textfield.svelte` | 817 | 15 | 0 |
| `ICCPlus/src/lib/custom/textfield/character-counter/CharacterCounter.svelte` | 78 | 5 | 0 |
| `ICCPlus/src/lib/custom/textfield/helper-text/HelperText.svelte` | 152 | 7 | 0 |
| `ICCPlus/src/lib/custom/textfield/icon/Icon.svelte` | 157 | 8 | 0 |
| `ICCPlus/src/lib/custom/tooltip/Tooltip.svelte` | 46 | 6 | 0 |
| `ICCPlus/src/lib/custom/tooltip/Wrapper.svelte` | 10 | 2 | 0 |
| `ICCPlus/src/lib/information/InfoMain.svelte` | 1723 | 58 | 0 |
| `ICCPlus/src/lib/information/InfoPanel.svelte` | 17 | 2 | 0 |
| `ICCPlus/src/lib/store/CustomAutocomplete.svelte` | 54 | 4 | 0 |
| `ICCPlus/src/lib/store/CustomChipInput.svelte` | 51 | 6 | 1 |
| `ICCPlus/src/lib/store/ImageUpload.svelte` | 454 | 18 | 14 |
| `ICCPlus/src/lib/store/PictureInput.svelte` | 567 | 14 | 0 |
| `ICCPlus/src/lib/store/Tiptap.svelte` | 698 | 14 | 17 |
| `ICCPlus/src/lib/viewer/AppBuildForm.svelte` | 122 | 13 | 6 |
| `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte` | 296 | 38 | 7 |
| `ICCPlus/src/lib/viewer/AppObject.svelte` | 737 | 237 | 0 |
| `ICCPlus/src/lib/viewer/AppPointBar.svelte` | 75 | 33 | 0 |
| `ICCPlus/src/lib/viewer/AppRow.svelte` | 555 | 160 | 0 |
| `ICCPlus/src/lib/viewer/AppSaveLoad.svelte` | 225 | 22 | 3 |
| `ICCPlus/src/lib/viewer/AppSearchForm.svelte` | 124 | 17 | 2 |
| `ICCPlus/src/lib/viewer/DlgBackpack.svelte` | 79 | 24 | 2 |
| `ICCPlus/src/lib/viewer/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte` | 721 | 252 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte` | 136 | 34 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectRequired.svelte` | 53 | 13 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectScore.svelte` | 284 | 80 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus/src/lib/viewer/ViewerMain.svelte` | 432 | 69 | 7 |
| `ICCPlus_Viewer/src/App.svelte` | 272 | 12 | 0 |
| `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte` | 780 | 24 | 0 |
| `ICCPlus_Viewer/src/lib/custom/select/Option.svelte` | 67 | 4 | 0 |
| `ICCPlus_Viewer/src/lib/custom/select/Select.svelte` | 832 | 21 | 0 |
| `ICCPlus_Viewer/src/lib/custom/select/helper-text/HelperText.svelte` | 152 | 7 | 0 |
| `ICCPlus_Viewer/src/lib/custom/select/icon/Icon.svelte` | 134 | 7 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/HelperLine.svelte` | 34 | 3 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/Input.svelte` | 245 | 8 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/Prefix.svelte` | 34 | 3 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/Suffix.svelte` | 34 | 3 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/Textarea.svelte` | 123 | 7 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/Textfield.svelte` | 817 | 15 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/character-counter/CharacterCounter.svelte` | 78 | 5 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/helper-text/HelperText.svelte` | 152 | 7 | 0 |
| `ICCPlus_Viewer/src/lib/custom/textfield/icon/Icon.svelte` | 157 | 8 | 0 |
| `ICCPlus_Viewer/src/lib/custom/tooltip/Tooltip.svelte` | 46 | 6 | 0 |
| `ICCPlus_Viewer/src/lib/custom/tooltip/Wrapper.svelte` | 10 | 2 | 0 |
| `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte` | 454 | 18 | 14 |
| `ICCPlus_Viewer/src/lib/store/PictureInput.svelte` | 567 | 14 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppBuildForm.svelte` | 122 | 13 | 6 |
| `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte` | 316 | 38 | 7 |
| `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte` | 737 | 237 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppPointBar.svelte` | 75 | 33 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte` | 555 | 160 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte` | 225 | 22 | 3 |
| `ICCPlus_Viewer/src/lib/viewer/AppSearchForm.svelte` | 124 | 17 | 2 |
| `ICCPlus_Viewer/src/lib/viewer/DlgBackpack.svelte` | 79 | 24 | 2 |
| `ICCPlus_Viewer/src/lib/viewer/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte` | 721 | 252 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte` | 136 | 34 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectRequired.svelte` | 53 | 13 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectScore.svelte` | 284 | 81 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte` | 402 | 69 | 5 |
