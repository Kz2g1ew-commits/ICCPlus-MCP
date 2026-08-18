# ICC Plus v2.10.1 codebase inventory

This inventory is generated from commit `b33bfb9b29e0a84a035a56d7e1827e42fe0f7000`.
It is evidence for MCP model coverage; `src/generated/source-analysis.json` contains
the field-level occurrence map and UI strings.

## Coverage

- Audited authored code/text files: 227
- Creator TypeScript/Svelte files: 119
- Exact audited source bytes: 3310217
- Deployment files: 75
- Deployment bytes: 24748251
- Upstream third-party packages with license metadata: 209
- Declared model types: 59
- Unique model fields: 893
- Fields referenced by implementation code: 891
- Store functions: 190
- Exported store functions: 100
- Named source functions/methods: 1411
- Exported source functions: 246

## State engine functions

| Function | Visibility | Async | Evidence |
| --- | --- | --- | --- |
| `getRows` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:863` |
| `getChoices` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:866` |
| `getBackpackRows` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:869` |
| `getBackpackChoices` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:872` |
| `getGroups` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:875` |
| `getPointTypes` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:878` |
| `getVariables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:881` |
| `getWords` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:884` |
| `getGlobalRequirement` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:887` |
| `getDesignGroups` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:890` |
| `getSelectables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:893` |
| `getBackpackSelectables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:896` |
| `getSearchables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:899` |
| `getSoundEffects` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:902` |
| `createCyoaPlusDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:907` |
| `getOldDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:931` |
| `getDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:939` |
| `delay` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1185` |
| `autoSave` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1197` |
| `buildAutoSave` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1246` |
| `saveToSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1294` |
| `deleteSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1317` |
| `loadFromSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1340` |
| `getOldAutoSave` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:1350` |
| `setOldSave` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:1399` |
| `initStoreSaves` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1417` |
| `initBuildSaves` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1469` |
| `getSelectedObjectId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1512` |
| `getTimestamp` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1591` |
| `getPointTypeLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1602` |
| `getChoiceLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1609` |
| `getGroupLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1621` |
| `getRowLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1628` |
| `getGlobalReqLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1638` |
| `getDesignLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1645` |
| `getSfxLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1652` |
| `getReqText` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1659` |
| `getChoiceTitle` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1735` |
| `checkInitId` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1742` |
| `generateId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1745` |
| `objectWidthToNum` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1761` |
| `widthToNum` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1778` |
| `fixedWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1801` |
| `checkWordChange` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1819` |
| `getCombinedRegex` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1827` |
| `replaceText` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1834` |
| `getStyling` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1861` |
| `checkDupId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1952` |
| `checkPointEnable` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1959` |
| `checkActivated` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1976` |
| `getPriority` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1985` |
| `evaluateNode` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1997` |
| `checkReq` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2013` |
| `checkRequirements` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2216` |
| `wrapYoutubePlayer` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2234` |
| `wrapAudioPlayer` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2272` |
| `createAudioPlayer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2351` |
| `retryAudioPlayer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2363` |
| `bgmFadeIn` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2373` |
| `bgmPlay` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2374` |
| `playProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2382` |
| `bgmFadeOut` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2493` |
| `playBgm` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2558` |
| `loadYouTubeAPI` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2635` |
| `initYoutubePlayer` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2647` |
| `base64ToArrayBuffer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2676` |
| `getCtx` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2686` |
| `initSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2690` |
| `loadSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2703` |
| `playSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2710` |
| `playSfxOnSelect` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2729` |
| `playSfxOnDeselect` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2760` |
| `initStyling` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2791` |
| `calcStackDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2824` |
| `deleteDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2834` |
| `emptyDiscount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:2857` |
| `fillDiscount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:2975` |
| `deselectDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3089` |
| `selectDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3241` |
| `expDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3382` |
| `checkPoints` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3399` |
| `checkAddons` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:3732` |
| `setScoreValue` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3763` |
| `cleanActivated` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:3819` |
| `deselectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:3822` |
| `clearProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:3847` |
| `selectForceActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4191` |
| `deselectTempActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4227` |
| `deselectForceActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4254` |
| `selectForceRandomActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4317` |
| `removeCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4395` |
| `addCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4452` |
| `updateCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4520` |
| `deselectUpdateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4570` |
| `selectUpdateScore` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:4992` |
| `activateTempChoices` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:5448` |
| `clearWordDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5489` |
| `clearImgDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5500` |
| `openWordDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5508` |
| `openImgDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5532` |
| `delayProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5553` |
| `deselectDiscountOther` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5557` |
| `selectDiscountOther` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5602` |
| `deselectCalculateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5647` |
| `selectCalculateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5733` |
| `deselectActivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5807` |
| `selectActivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5890` |
| `selectDeactivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5939` |
| `deselectMissingReq` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5998` |
| `deselectModifyPoint` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6044` |
| `selectModifyPoint` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6214` |
| `setVariables` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6302` |
| `addAllowedChoice` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6325` |
| `deselectEffectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6360` |
| `selectEffectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6587` |
| `deselectHideContent` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6773` |
| `selectHideContent` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6819` |
| `selectScroll` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6866` |
| `checkAddonDeselectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6910` |
| `checkDeselectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6940` |
| `checkSelectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6949` |
| `deselectObject` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7047` |
| `selectObject` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7236` |
| `selectedOneMore` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7486` |
| `selectedOneLess` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7789` |
| `updateScores` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8008` |
| `selectObjectL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8268` |
| `selectedOneMoreL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8557` |
| `selectedOneLessL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8867` |
| `activateProc` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8919` |
| `loadActivated` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:8970` |
| `duplicateRow` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:8974` |
| `getDataURL` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9255` |
| `isDataURL` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9259` |
| `removeNulls` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9511` |
| `initFilterStyling` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9528` |
| `initPrivateStyling` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9549` |
| `loadFromDisk` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:9699` |
| `exportData` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9791` |
| `importRequirement` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9814` |
| `importChoice` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9840` |
| `importData` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:9925` |
| `getMimeFromBlob` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:10340` |
| `compareVersion` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:10350` |
| `initializeApp` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:10375` |
| `replaceFields` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11347` |
| `replaceImages` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11360` |
| `waitForImagesToLoad` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:11439` |
| `forceEagerImageLoading` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11451` |
| `copyComputedStyles` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11461` |
| `deepCopyStyles` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11472` |
| `waitForBorderImagesToLoad` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:11482` |
| `waitForRenderFrames` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11505` |
| `next` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11508` |
| `downloadAsImage` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:11515` |
| `isMediaSupport` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11664` |
| `toggleTheme` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11674` |
| `setShortcut` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11716` |
| `applyTemplate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11734` |
| `revertTemplate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11742` |
| `applyWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11756` |
| `revertWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11764` |
| `getDate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11778` |
| `scrollToLastRow` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11789` |
| `tryScroll` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11794` |
| `applyCustomCSS` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11808` |
| `hexToRgba` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11827` |
| `rgbToHex` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11838` |
| `toggleAltMenu` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11849` |
| `removeAnchor` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11853` |
| `pasteObject` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11863` |
| `clearClipboard` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11993` |
| `closestByClassPrefix` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12026` |
| `copyObject` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12042` |
| `copyScores` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12061` |
| `pasteScore` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12078` |
| `copyAddons` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12093` |
| `pasteAddon` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12109` |
| `copyRequireds` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12152` |
| `pasteRequired` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12168` |
| `copyGroups` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12181` |
| `pasteGroup` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12196` |
| `copyDesignGroups` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12214` |
| `pasteDesignGroup` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12229` |
| `choiceContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12247` |
| `requiredContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12268` |
| `scoreContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12289` |
| `addonContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12310` |
| `groupContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12331` |
| `dGroupContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12348` |

## All named source functions and methods

| Symbol | Kind | Exported | Async | Evidence | Model fields |
| --- | --- | --- | --- | --- | ---: |
| `autoModeWatcher` | function | no | no | `ICCPlus/src/App.svelte:77` | 1 |
| `handleWheel` | function | no | no | `ICCPlus/src/App.svelte:119` | 2 |
| `getSelectedObjectName` | function | no | no | `ICCPlus/src/lib/creator/AppBuildForm.svelte:51` | 13 |
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
| `saveProcess` | function | no | no | `ICCPlus/src/lib/creator/AppGlobalSettings.svelte:529` | 0 |
| `importFont` | function | no | yes | `ICCPlus/src/lib/creator/AppGlobalSettings.svelte:536` | 8 |
| `deleteFont` | function | no | no | `ICCPlus/src/lib/creator/AppGlobalSettings.svelte:614` | 3 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1978` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1982` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1986` | 3 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1990` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1991` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:1995` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2000` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2001` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2005` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2006` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2010` | 4 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2011` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2015` | 2 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2016` | 1 |
| `changeObjectId` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2316` | 9 |
| `createNewAddon` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2353` | 23 |
| `createNewScore` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2371` | 14 |
| `cloneObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2385` | 25 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2476` | 7 |
| `deleteDesignGroup` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2487` | 5 |
| `deleteObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2498` | 24 |
| `deleteProc` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2499` | 19 |
| `deleteAddon` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2572` | 6 |
| `moveChoiceLeft` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2590` | 3 |
| `moveChoiceRight` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2598` | 3 |
| `setFilters` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2606` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2719` | 8 |
| `toggleAutoActive` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2742` | 16 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/creator/AppObject.svelte:2768` | 11 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2792` | 17 |
| `toggleActive` | function | no | yes | `ICCPlus/src/lib/creator/AppObject.svelte:2829` | 9 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2854` | 5 |
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
| `renderIcon` | function | no | no | `ICCPlus/src/lib/creator/AppPointBar.svelte:70` | 8 |
| `beforeClose` | function | no | no | `ICCPlus/src/lib/creator/AppRequirement.svelte:150` | 1 |
| `addNewRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRequirement.svelte:155` | 25 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRequirement.svelte:207` | 8 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:478` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:479` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:483` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:487` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:491` | 4 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:492` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:496` | 2 |
| `changeRowId` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:807` | 7 |
| `createNewObject` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:838` | 29 |
| `createNewObjects` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:873` | 0 |
| `reqContext` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:879` | 11 |
| `copyRequireds` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:899` | 8 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:915` | 6 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:927` | 6 |
| `buttonActivate` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:949` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:1096` | 5 |
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
| `addonWidthClass` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2164` | 4 |
| `copyAddon` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2185` | 4 |
| `moveAddonUp` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2193` | 3 |
| `moveAddonDown` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2199` | 3 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2205` | 4 |
| `toggleSelectable` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2217` | 11 |
| `createNewScore` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2244` | 13 |
| `changeAddonId` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2258` | 3 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2271` | 6 |
| `getRadius` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2282` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2322` | 12 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2345` | 17 |
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
| `blur` | arrow | no | no | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:104` | 1 |
| `clickNumber` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:130` | 4 |
| `handleManually` | function | no | yes | `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte:138` | 2 |
| `copyRequirement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:148` | 5 |
| `deleteInnerReq` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:156` | 4 |
| `moveReqLeft` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:163` | 3 |
| `moveReqRight` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte:169` | 3 |
| `moveScoreDown` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:499` | 2 |
| `moveScoreUp` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:505` | 2 |
| `copyScore` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:511` | 4 |
| `getPointTypeLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:522` | 3 |
| `isPointtypeActivated` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:530` | 7 |
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
| `isEmpty` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:317` | 1 |
| `onTransaction` | property-arrow | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:382` | 5 |
| `removeNewlinesInsideList` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:453` | 2 |
| `convertNewlinesToBr` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:501` | 1 |
| `convertBrToNewlines` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:521` | 0 |
| `clickOutside` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:532` | 0 |
| `handleClick` | arrow | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:534` | 0 |
| `destroy` | method | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:544` | 0 |
| `toggleBold` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:550` | 0 |
| `toggleItalic` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:556` | 0 |
| `toggleUnderline` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:562` | 0 |
| `toggleStrike` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:568` | 0 |
| `applyTextColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:574` | 0 |
| `unsetTextColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:581` | 0 |
| `applyBackgroundColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:588` | 1 |
| `unsetBackgroundColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:595` | 0 |
| `toggleFontSize` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:602` | 0 |
| `setFontSize` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:606` | 0 |
| `toggleTextColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:617` | 0 |
| `toggleBackgroundColor` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:624` | 1 |
| `toggleRawHTML` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:631` | 1 |
| `toggleLineHeight` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:653` | 0 |
| `setLineHeight` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:657` | 0 |
| `toggleLink` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:668` | 0 |
| `applyLink` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:680` | 0 |
| `toggleAlignBox` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:692` | 0 |
| `toggleAlign` | function | no | no | `ICCPlus/src/lib/store/Tiptap.svelte:696` | 0 |
| `copy` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:782` | 1 |
| `paste` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:783` | 1 |
| `clear` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:784` | 1 |
| `export` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:785` | 1 |
| `update` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:823` | 0 |
| `getRows` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:863` | 1 |
| `getChoices` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:866` | 1 |
| `getBackpackRows` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:869` | 1 |
| `getBackpackChoices` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:872` | 1 |
| `getGroups` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:875` | 1 |
| `getPointTypes` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:878` | 1 |
| `getVariables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:881` | 1 |
| `getWords` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:884` | 1 |
| `getGlobalRequirement` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:887` | 1 |
| `getDesignGroups` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:890` | 1 |
| `getSelectables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:893` | 1 |
| `getBackpackSelectables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:896` | 1 |
| `getSearchables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:899` | 1 |
| `getSoundEffects` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:902` | 1 |
| `createCyoaPlusDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:907` | 0 |
| `getOldDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:931` | 0 |
| `getDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:939` | 7 |
| `delay` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1185` | 0 |
| `autoSave` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1197` | 11 |
| `buildAutoSave` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1246` | 10 |
| `saveToSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1294` | 5 |
| `deleteSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1317` | 5 |
| `loadFromSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1340` | 1 |
| `getOldAutoSave` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:1350` | 0 |
| `setOldSave` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:1399` | 2 |
| `initStoreSaves` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1417` | 8 |
| `initBuildSaves` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1469` | 7 |
| `getSelectedObjectId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1512` | 22 |
| `getTimestamp` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1591` | 1 |
| `getPointTypeLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1602` | 3 |
| `getChoiceLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1609` | 5 |
| `getGroupLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1621` | 4 |
| `getRowLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1628` | 5 |
| `getGlobalReqLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1638` | 4 |
| `getDesignLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1645` | 4 |
| `getSfxLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1652` | 3 |
| `getReqText` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1659` | 17 |
| `getChoiceTitle` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1735` | 5 |
| `checkInitId` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1742` | 1 |
| `generateId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1745` | 5 |
| `objectWidthToNum` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1761` | 1 |
| `widthToNum` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1778` | 1 |
| `fixedWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1801` | 1 |
| `checkWordChange` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1819` | 4 |
| `getCombinedRegex` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1827` | 3 |
| `replaceText` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1834` | 14 |
| `getStyling` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1861` | 16 |
| `checkDupId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1952` | 2 |
| `checkPointEnable` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1959` | 8 |
| `checkActivated` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1976` | 2 |
| `getPriority` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1985` | 2 |
| `evaluateNode` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1997` | 3 |
| `checkReq` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2013` | 33 |
| `checkRequirements` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2216` | 2 |
| `wrapYoutubePlayer` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2234` | 4 |
| `load` | method | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2237` | 1 |
| `play` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2246` | 0 |
| `pause` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2247` | 0 |
| `stop` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2248` | 0 |
| `mute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2249` | 0 |
| `unMute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2250` | 0 |
| `setVolume` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2252` | 0 |
| `isPlaying` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2254` | 0 |
| `isStopped` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2255` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2256` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2258` | 0 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2263` | 0 |
| `getDuration` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2264` | 0 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2265` | 0 |
| `getTitle` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2267` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2269` | 0 |
| `wrapAudioPlayer` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2272` | 5 |
| `load` | method | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2293` | 1 |
| `play` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2301` | 1 |
| `pause` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2306` | 1 |
| `stop` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2307` | 1 |
| `mute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2312` | 1 |
| `unMute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2316` | 1 |
| `setVolume` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2321` | 2 |
| `isPlaying` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2328` | 1 |
| `isStopped` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2329` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2330` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2332` | 1 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2343` | 1 |
| `getDuration` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2344` | 1 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2345` | 1 |
| `getTitle` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2347` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2348` | 1 |
| `createAudioPlayer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2351` | 1 |
| `retryAudioPlayer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2363` | 2 |
| `bgmFadeIn` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2373` | 20 |
| `bgmPlay` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2374` | 3 |
| `playProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2382` | 19 |
| `bgmFadeOut` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2493` | 12 |
| `playBgm` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2558` | 14 |
| `loadYouTubeAPI` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2635` | 1 |
| `initYoutubePlayer` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2647` | 8 |
| `onReady` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2655` | 6 |
| `base64ToArrayBuffer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2676` | 0 |
| `getCtx` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2686` | 0 |
| `initSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2690` | 2 |
| `loadSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2703` | 2 |
| `playSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2710` | 5 |
| `playSfxOnSelect` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2729` | 11 |
| `playSfxOnDeselect` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2760` | 11 |
| `initStyling` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2791` | 71 |
| `calcStackDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2824` | 3 |
| `deleteDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2834` | 22 |
| `emptyDiscount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:2857` | 25 |
| `fillDiscount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:2975` | 17 |
| `deselectDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3089` | 26 |
| `selectDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3241` | 51 |
| `expDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3382` | 10 |
| `checkPoints` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3399` | 47 |
| `checkAddons` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:3732` | 12 |
| `setScoreValue` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3763` | 15 |
| `cleanActivated` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:3819` | 104 |
| `deselectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:3822` | 16 |
| `clearProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:3847` | 31 |
| `selectForceActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4191` | 16 |
| `deselectTempActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4227` | 7 |
| `deselectForceActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4254` | 17 |
| `selectForceRandomActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4317` | 18 |
| `removeCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4395` | 12 |
| `addCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4452` | 16 |
| `updateCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4520` | 14 |
| `deselectUpdateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4570` | 46 |
| `selectUpdateScore` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:4992` | 50 |
| `activateTempChoices` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:5448` | 12 |
| `clearWordDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5489` | 8 |
| `clearImgDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5500` | 5 |
| `openWordDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5508` | 9 |
| `openImgDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5532` | 7 |
| `delayProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5553` | 0 |
| `deselectDiscountOther` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5557` | 11 |
| `selectDiscountOther` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5602` | 11 |
| `deselectCalculateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5647` | 29 |
| `selectCalculateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5733` | 23 |
| `deselectActivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5807` | 14 |
| `selectActivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5890` | 11 |
| `selectDeactivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5939` | 13 |
| `deselectMissingReq` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5998` | 13 |
| `deselectModifyPoint` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6044` | 16 |
| `selectModifyPoint` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6214` | 23 |
| `setVariables` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6302` | 8 |
| `addAllowedChoice` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6325` | 14 |
| `deselectEffectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6360` | 47 |
| `selectEffectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6587` | 48 |
| `play` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6589` | 4 |
| `deselectHideContent` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6773` | 13 |
| `selectHideContent` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6819` | 14 |
| `selectScroll` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6866` | 14 |
| `checkAddonDeselectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6910` | 10 |
| `checkDeselectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6940` | 1 |
| `checkSelectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6949` | 32 |
| `deselectObject` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7047` | 48 |
| `deselectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7066` | 31 |
| `selectObject` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7236` | 64 |
| `tmpAdd` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:7239` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7335` | 33 |
| `selectedOneMore` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7486` | 69 |
| `tmpAdd` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:7489` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7586` | 35 |
| `selectedOneLess` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7789` | 50 |
| `deselectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7816` | 28 |
| `updateScores` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8008` | 37 |
| `selectObjectL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8268` | 52 |
| `selectedOneMoreL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8557` | 51 |
| `selectedOneLessL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8867` | 21 |
| `activateProc` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8919` | 16 |
| `loadActivated` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:8970` | 1 |
| `duplicateRow` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:8974` | 40 |
| `getDataURL` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9255` | 2 |
| `isDataURL` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9259` | 2 |
| `removeNulls` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9511` | 2 |
| `initFilterStyling` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9528` | 21 |
| `initPrivateStyling` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9549` | 16 |
| `loadFromDisk` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:9699` | 6 |
| `exportData` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9791` | 6 |
| `importRequirement` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9814` | 3 |
| `importChoice` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9840` | 7 |
| `importData` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:9925` | 37 |
| `getMimeFromBlob` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:10340` | 1 |
| `compareVersion` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:10350` | 0 |
| `initializeApp` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:10375` | 121 |
| `replaceFields` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11347` | 0 |
| `replaceImages` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11360` | 22 |
| `waitForImagesToLoad` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:11439` | 0 |
| `forceEagerImageLoading` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11451` | 0 |
| `copyComputedStyles` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11461` | 0 |
| `deepCopyStyles` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11472` | 0 |
| `waitForBorderImagesToLoad` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:11482` | 1 |
| `waitForRenderFrames` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11505` | 1 |
| `next` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11508` | 1 |
| `downloadAsImage` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:11515` | 21 |
| `filter` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11597` | 2 |
| `filter` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11626` | 2 |
| `isMediaSupport` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11664` | 1 |
| `toggleTheme` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11674` | 2 |
| `setShortcut` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11716` | 2 |
| `applyTemplate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11734` | 6 |
| `revertTemplate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11742` | 7 |
| `applyWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11756` | 7 |
| `revertWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11764` | 7 |
| `getDate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11778` | 2 |
| `scrollToLastRow` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11789` | 2 |
| `tryScroll` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11794` | 1 |
| `applyCustomCSS` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11808` | 5 |
| `hexToRgba` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11827` | 1 |
| `rgbToHex` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11838` | 1 |
| `toggleAltMenu` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11849` | 2 |
| `removeAnchor` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11853` | 6 |
| `pasteObject` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11863` | 29 |
| `clearClipboard` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11993` | 12 |
| `closestByClassPrefix` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12026` | 1 |
| `copyObject` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12042` | 9 |
| `copyScores` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12061` | 7 |
| `pasteScore` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12078` | 7 |
| `copyAddons` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12093` | 6 |
| `pasteAddon` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12109` | 20 |
| `copyRequireds` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12152` | 8 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12168` | 6 |
| `copyGroups` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12181` | 7 |
| `pasteGroup` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12196` | 9 |
| `copyDesignGroups` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12214` | 6 |
| `pasteDesignGroup` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12229` | 7 |
| `choiceContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12247` | 12 |
| `requiredContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12268` | 12 |
| `scoreContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12289` | 12 |
| `addonContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12310` | 11 |
| `groupContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12331` | 8 |
| `dGroupContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12348` | 7 |
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
| `getSelectedObjectName` | function | no | no | `ICCPlus/src/lib/viewer/AppBuildForm.svelte:51` | 13 |
| `saveProcess` | function | no | no | `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte:279` | 0 |
| `allowDeselectInBackpack` | function | no | no | `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte:286` | 6 |
| `setFilters` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:530` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:643` | 8 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/viewer/AppObject.svelte:666` | 11 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:690` | 17 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/viewer/AppObject.svelte:727` | 5 |
| `renderIcon` | function | no | no | `ICCPlus/src/lib/viewer/AppPointBar.svelte:70` | 8 |
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
| `addonWidthClass` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:614` | 4 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:635` | 4 |
| `getRadius` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:647` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:687` | 12 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte:710` | 17 |
| `clickCounterPlus` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:95` | 0 |
| `clickCounterMinus` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:99` | 0 |
| `handleSliderUp` | function | no | yes | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:103` | 1 |
| `blur` | arrow | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:104` | 1 |
| `clickNumber` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:130` | 4 |
| `handleManually` | function | no | yes | `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte:138` | 2 |
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
| `update` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:800` | 0 |
| `getSearchables` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:810` | 1 |
| `getSoundEffects` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:813` | 1 |
| `createCyoaPlusDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:818` | 0 |
| `getOldDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:842` | 0 |
| `getDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:850` | 7 |
| `delay` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1093` | 0 |
| `buildAutoSave` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1105` | 10 |
| `saveToSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1153` | 5 |
| `deleteSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1172` | 5 |
| `loadFromSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1191` | 1 |
| `initBuildSaves` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1201` | 7 |
| `getSelectedObjectId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1244` | 22 |
| `getTimestamp` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1323` | 1 |
| `getChoiceLabel` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1334` | 5 |
| `getReqText` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1346` | 17 |
| `getChoiceTitle` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1422` | 5 |
| `checkInitId` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1429` | 1 |
| `generateId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1432` | 5 |
| `objectWidthToNum` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1448` | 1 |
| `widthToNum` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1465` | 1 |
| `fixedWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1488` | 1 |
| `checkWordChange` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1506` | 4 |
| `getCombinedRegex` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1514` | 3 |
| `replaceText` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1521` | 14 |
| `getStyling` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1548` | 16 |
| `checkDupId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1639` | 2 |
| `checkPointEnable` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1646` | 8 |
| `checkActivated` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1663` | 2 |
| `getPriority` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1672` | 2 |
| `evaluateNode` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1684` | 3 |
| `checkReq` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1700` | 33 |
| `checkRequirements` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1903` | 2 |
| `wrapYoutubePlayer` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1921` | 4 |
| `load` | method | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1924` | 1 |
| `play` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1933` | 0 |
| `pause` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1934` | 0 |
| `stop` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1935` | 0 |
| `mute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1936` | 0 |
| `unMute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1937` | 0 |
| `setVolume` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1939` | 0 |
| `isPlaying` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1941` | 0 |
| `isStopped` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1942` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1943` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1945` | 0 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1950` | 0 |
| `getDuration` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1951` | 0 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1952` | 0 |
| `getTitle` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1954` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1956` | 0 |
| `wrapAudioPlayer` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1959` | 5 |
| `load` | method | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1980` | 1 |
| `play` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1988` | 1 |
| `pause` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1993` | 1 |
| `stop` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1994` | 1 |
| `mute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1999` | 1 |
| `unMute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2003` | 1 |
| `setVolume` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2008` | 2 |
| `isPlaying` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2015` | 1 |
| `isStopped` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2016` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2017` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2019` | 1 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2030` | 1 |
| `getDuration` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2031` | 1 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2032` | 1 |
| `getTitle` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2034` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2035` | 1 |
| `createAudioPlayer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2038` | 1 |
| `retryAudioPlayer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2050` | 2 |
| `bgmFadeIn` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2060` | 20 |
| `bgmPlay` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2061` | 3 |
| `playProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2069` | 19 |
| `bgmFadeOut` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2180` | 12 |
| `playBgm` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2245` | 14 |
| `loadYouTubeAPI` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2322` | 1 |
| `initYoutubePlayer` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2334` | 8 |
| `onReady` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2342` | 6 |
| `base64ToArrayBuffer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2363` | 0 |
| `getCtx` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2373` | 0 |
| `initSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2377` | 2 |
| `loadSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2390` | 2 |
| `playSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2397` | 5 |
| `playSfxOnSelect` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2416` | 11 |
| `playSfxOnDeselect` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2447` | 11 |
| `initStyling` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2478` | 71 |
| `calcStackDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2511` | 3 |
| `deleteDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2521` | 22 |
| `emptyDiscount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2544` | 25 |
| `fillDiscount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2662` | 17 |
| `deselectDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2776` | 26 |
| `selectDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2928` | 51 |
| `expDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3069` | 10 |
| `checkPoints` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3086` | 47 |
| `checkAddons` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3419` | 12 |
| `setScoreValue` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3450` | 15 |
| `cleanActivated` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3506` | 104 |
| `deselectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3509` | 16 |
| `clearProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3534` | 31 |
| `selectForceActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3878` | 16 |
| `deselectTempActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3914` | 7 |
| `deselectForceActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3941` | 17 |
| `selectForceRandomActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4004` | 18 |
| `removeCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4082` | 12 |
| `addCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4139` | 16 |
| `updateCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4207` | 14 |
| `deselectUpdateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4257` | 46 |
| `selectUpdateScore` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4679` | 50 |
| `activateTempChoices` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5135` | 12 |
| `clearWordDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5176` | 8 |
| `clearImgDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5187` | 5 |
| `openWordDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5195` | 9 |
| `openImgDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5219` | 7 |
| `delayProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5240` | 0 |
| `deselectDiscountOther` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5244` | 11 |
| `selectDiscountOther` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5289` | 11 |
| `deselectCalculateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5334` | 29 |
| `selectCalculateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5420` | 23 |
| `deselectActivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5494` | 14 |
| `selectActivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5577` | 11 |
| `selectDeactivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5626` | 13 |
| `deselectMissingReq` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5685` | 13 |
| `deselectModifyPoint` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5731` | 16 |
| `selectModifyPoint` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5901` | 23 |
| `setVariables` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5989` | 8 |
| `addAllowedChoice` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6012` | 14 |
| `deselectEffectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6047` | 47 |
| `selectEffectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6274` | 48 |
| `play` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6276` | 4 |
| `deselectHideContent` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6460` | 13 |
| `selectHideContent` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6506` | 14 |
| `selectScroll` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6553` | 14 |
| `checkAddonDeselectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6597` | 10 |
| `checkDeselectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6627` | 1 |
| `checkSelectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6636` | 32 |
| `deselectObject` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6734` | 48 |
| `deselectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6753` | 31 |
| `selectObject` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6923` | 64 |
| `tmpAdd` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6926` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7022` | 33 |
| `selectedOneMore` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7173` | 69 |
| `tmpAdd` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7176` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7273` | 35 |
| `selectedOneLess` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7476` | 50 |
| `deselectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7503` | 28 |
| `updateScores` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7695` | 37 |
| `selectObjectL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7955` | 52 |
| `selectedOneMoreL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8244` | 51 |
| `selectedOneLessL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8554` | 21 |
| `activateProc` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8606` | 16 |
| `loadActivated` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8657` | 1 |
| `duplicateRow` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8661` | 40 |
| `getDataURL` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8941` | 2 |
| `isDataURL` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8945` | 2 |
| `isAvif` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8949` | 2 |
| `removeNulls` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9204` | 2 |
| `initFilterStyling` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9221` | 21 |
| `initPrivateStyling` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9242` | 16 |
| `compareVersion` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9392` | 0 |
| `initializeApp` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9417` | 115 |
| `waitForImagesToLoad` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10334` | 0 |
| `forceEagerImageLoading` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10345` | 0 |
| `copyComputedStyles` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10353` | 0 |
| `deepCopyStyles` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10363` | 0 |
| `waitForBorderImagesToLoad` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10372` | 1 |
| `waitForRenderFrames` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10395` | 1 |
| `next` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10398` | 1 |
| `downloadAsImage` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10405` | 21 |
| `filter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10487` | 2 |
| `filter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10516` | 2 |
| `isMediaSupport` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10554` | 1 |
| `toggleTheme` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10564` | 2 |
| `applyTemplate` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10606` | 6 |
| `revertTemplate` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10614` | 7 |
| `applyWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10628` | 7 |
| `revertWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10636` | 7 |
| `applyCustomCSS` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10650` | 5 |
| `hexToRgba` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10669` | 1 |
| `closestByClassPrefix` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10680` | 1 |
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
| `getSelectedObjectName` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppBuildForm.svelte:51` | 13 |
| `saveProcess` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte:279` | 0 |
| `allowDeselectInBackpack` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte:286` | 6 |
| `beforeClose` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte:297` | 13 |
| `setFilters` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:530` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:643` | 8 |
| `handleCounter` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:666` | 11 |
| `activateObject` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:690` | 17 |
| `copyTooltip` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte:727` | 5 |
| `renderIcon` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppPointBar.svelte:70` | 8 |
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
| `addonWidthClass` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:614` | 4 |
| `copyTooltip` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:635` | 4 |
| `getRadius` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:647` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:687` | 12 |
| `activateObject` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte:710` | 17 |
| `clickCounterPlus` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:95` | 0 |
| `clickCounterMinus` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:99` | 0 |
| `handleSliderUp` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:103` | 1 |
| `blur` | arrow | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:104` | 1 |
| `clickNumber` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:130` | 4 |
| `handleManually` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte:138` | 2 |
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
| `ICCPlus/src/lib/creator/AppBuildForm.svelte` | 126 | 17 | 6 |
| `ICCPlus/src/lib/creator/AppButtonSettings.svelte` | 181 | 21 | 8 |
| `ICCPlus/src/lib/creator/AppCreateMultipleChoice.svelte` | 40 | 5 | 4 |
| `ICCPlus/src/lib/creator/AppCustomCSS.svelte` | 76 | 11 | 3 |
| `ICCPlus/src/lib/creator/AppDesign.svelte` | 206 | 24 | 4 |
| `ICCPlus/src/lib/creator/AppFeature.svelte` | 117 | 21 | 2 |
| `ICCPlus/src/lib/creator/AppGlobalSettings.svelte` | 649 | 63 | 14 |
| `ICCPlus/src/lib/creator/AppObject.svelte` | 2865 | 420 | 43 |
| `ICCPlus/src/lib/creator/AppObjectList.svelte` | 89 | 15 | 2 |
| `ICCPlus/src/lib/creator/AppObjectSettings.svelte` | 367 | 64 | 7 |
| `ICCPlus/src/lib/creator/AppPointBar.svelte` | 77 | 33 | 0 |
| `ICCPlus/src/lib/creator/AppProjectStats.svelte` | 210 | 13 | 2 |
| `ICCPlus/src/lib/creator/AppRequirement.svelte` | 229 | 38 | 17 |
| `ICCPlus/src/lib/creator/AppRow.svelte` | 1106 | 215 | 14 |
| `ICCPlus/src/lib/creator/AppRowList.svelte` | 108 | 20 | 2 |
| `ICCPlus/src/lib/creator/AppRowSettings.svelte` | 454 | 56 | 11 |
| `ICCPlus/src/lib/creator/AppSaveLoad.svelte` | 751 | 58 | 7 |
| `ICCPlus/src/lib/creator/AppSearchForm.svelte` | 124 | 18 | 2 |
| `ICCPlus/src/lib/creator/AppViewerConfig.svelte` | 195 | 26 | 6 |
| `ICCPlus/src/lib/creator/CreatorMain.svelte` | 1051 | 134 | 6 |
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
| `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte` | 2377 | 399 | 38 |
| `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte` | 48 | 9 | 1 |
| `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte` | 48 | 9 | 1 |
| `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte` | 266 | 32 | 10 |
| `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte` | 149 | 34 | 0 |
| `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte` | 174 | 34 | 4 |
| `ICCPlus/src/lib/creator/Object/ObjectScore.svelte` | 552 | 96 | 11 |
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
| `ICCPlus/src/lib/information/InfoMain.svelte` | 1763 | 58 | 0 |
| `ICCPlus/src/lib/information/InfoPanel.svelte` | 17 | 2 | 0 |
| `ICCPlus/src/lib/store/CustomAutocomplete.svelte` | 54 | 4 | 0 |
| `ICCPlus/src/lib/store/CustomChipInput.svelte` | 51 | 6 | 1 |
| `ICCPlus/src/lib/store/ImageUpload.svelte` | 454 | 18 | 14 |
| `ICCPlus/src/lib/store/PictureInput.svelte` | 567 | 14 | 0 |
| `ICCPlus/src/lib/store/Tiptap.svelte` | 702 | 14 | 17 |
| `ICCPlus/src/lib/viewer/AppBuildForm.svelte` | 126 | 17 | 6 |
| `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte` | 296 | 38 | 7 |
| `ICCPlus/src/lib/viewer/AppObject.svelte` | 738 | 238 | 0 |
| `ICCPlus/src/lib/viewer/AppPointBar.svelte` | 77 | 33 | 0 |
| `ICCPlus/src/lib/viewer/AppRow.svelte` | 555 | 160 | 0 |
| `ICCPlus/src/lib/viewer/AppSaveLoad.svelte` | 225 | 22 | 3 |
| `ICCPlus/src/lib/viewer/AppSearchForm.svelte` | 124 | 17 | 2 |
| `ICCPlus/src/lib/viewer/DlgBackpack.svelte` | 79 | 24 | 2 |
| `ICCPlus/src/lib/viewer/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte` | 742 | 252 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte` | 149 | 34 | 0 |
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
| `ICCPlus_Viewer/src/lib/viewer/AppBuildForm.svelte` | 126 | 17 | 6 |
| `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte` | 316 | 38 | 7 |
| `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte` | 738 | 238 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppPointBar.svelte` | 77 | 33 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte` | 555 | 160 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte` | 225 | 22 | 3 |
| `ICCPlus_Viewer/src/lib/viewer/AppSearchForm.svelte` | 124 | 17 | 2 |
| `ICCPlus_Viewer/src/lib/viewer/DlgBackpack.svelte` | 79 | 24 | 2 |
| `ICCPlus_Viewer/src/lib/viewer/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte` | 742 | 252 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte` | 149 | 34 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectRequired.svelte` | 53 | 13 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectScore.svelte` | 284 | 80 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte` | 402 | 69 | 5 |
