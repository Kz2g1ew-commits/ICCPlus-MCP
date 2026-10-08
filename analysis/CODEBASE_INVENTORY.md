# ICC Plus v2.10.9 codebase inventory

This inventory is generated from commit `2573ebc29c6b48ccad8d0213a2582087af29f4d6`.
It is evidence for MCP model coverage; `src/generated/source-analysis.json` contains
the field-level occurrence map and UI strings.

## Coverage

- Audited authored code/text files: 227
- Creator TypeScript/Svelte files: 119
- Exact audited source bytes: 3337779
- Deployment files: 75
- Deployment bytes: 24828033
- Upstream third-party packages with license metadata: 209
- Declared model types: 59
- Unique model fields: 903
- Fields referenced by implementation code: 901
- Store functions: 191
- Exported store functions: 100
- Named source functions/methods: 1422
- Exported source functions: 246

## State engine functions

| Function | Visibility | Async | Evidence |
| --- | --- | --- | --- |
| `getRows` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:868` |
| `getChoices` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:871` |
| `getBackpackRows` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:874` |
| `getBackpackChoices` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:877` |
| `getGroups` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:880` |
| `getPointTypes` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:883` |
| `getVariables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:886` |
| `getWords` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:889` |
| `getGlobalRequirement` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:892` |
| `getDesignGroups` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:895` |
| `getSelectables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:898` |
| `getBackpackSelectables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:901` |
| `getSearchables` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:904` |
| `getSoundEffects` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:907` |
| `createCyoaPlusDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:912` |
| `getOldDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:936` |
| `getDB` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:944` |
| `delay` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1190` |
| `autoSave` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1217` |
| `buildAutoSave` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1269` |
| `saveToSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1317` |
| `deleteSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1340` |
| `loadFromSlot` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1363` |
| `getOldAutoSave` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:1373` |
| `setOldSave` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:1422` |
| `initStoreSaves` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1440` |
| `initBuildSaves` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:1492` |
| `getSelectedObjectId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1535` |
| `getTimestamp` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1614` |
| `getPointTypeLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1625` |
| `getChoiceLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1632` |
| `getGroupLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1644` |
| `getRowLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1651` |
| `getGlobalReqLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1661` |
| `getDesignLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1668` |
| `getSfxLabel` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1675` |
| `getReqText` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1682` |
| `getChoiceTitle` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1758` |
| `checkInitId` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1765` |
| `generateId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1768` |
| `objectWidthToNum` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1784` |
| `widthToNum` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1801` |
| `fixedWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1824` |
| `checkWordChange` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1842` |
| `getCombinedRegex` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:1850` |
| `replaceText` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1857` |
| `getStyling` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1884` |
| `checkDupId` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1975` |
| `checkPointEnable` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1982` |
| `checkActivated` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:1999` |
| `getPriority` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2008` |
| `evaluateNode` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2020` |
| `checkReq` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2036` |
| `checkRequirements` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2239` |
| `wrapYoutubePlayer` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2257` |
| `wrapAudioPlayer` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2295` |
| `createAudioPlayer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2374` |
| `retryAudioPlayer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2386` |
| `bgmFadeIn` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2396` |
| `bgmPlay` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2397` |
| `playProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2405` |
| `bgmFadeOut` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2516` |
| `playBgm` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2581` |
| `loadYouTubeAPI` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2658` |
| `initYoutubePlayer` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2670` |
| `base64ToArrayBuffer` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2699` |
| `getCtx` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:2709` |
| `initSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2713` |
| `loadSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2726` |
| `playSfx` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:2733` |
| `playSfxOnSelect` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2752` |
| `playSfxOnDeselect` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2783` |
| `initStyling` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2814` |
| `calcStackDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2847` |
| `deleteDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:2857` |
| `emptyDiscount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:2880` |
| `fillDiscount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:2998` |
| `deselectDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3112` |
| `selectDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3264` |
| `expDiscount` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3405` |
| `checkPoints` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3422` |
| `checkAddons` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:3755` |
| `setScoreValue` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:3786` |
| `cleanActivated` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:3842` |
| `deselectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:3845` |
| `clearProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:3870` |
| `selectForceActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4215` |
| `deselectTempActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4251` |
| `deselectForceActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4278` |
| `selectForceRandomActivate` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4341` |
| `removeCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4419` |
| `addCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4476` |
| `updateCount` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4544` |
| `deselectUpdateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:4594` |
| `selectUpdateScore` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:5016` |
| `activateTempChoices` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:5472` |
| `clearWordDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5513` |
| `clearImgDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5524` |
| `openWordDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5532` |
| `openImgDialog` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5556` |
| `delayProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5577` |
| `cancelDelayProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5581` |
| `deselectDiscountOther` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5586` |
| `selectDiscountOther` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:5631` |
| `deselectCalculateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5676` |
| `selectCalculateScore` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5762` |
| `deselectActivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5836` |
| `selectActivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5919` |
| `selectDeactivateOther` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:5968` |
| `deselectMissingReq` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:6027` |
| `deselectModifyPoint` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6074` |
| `selectModifyPoint` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6244` |
| `setVariables` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6332` |
| `addAllowedChoice` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6355` |
| `deselectEffectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6390` |
| `selectEffectProc` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6617` |
| `deselectHideContent` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6803` |
| `selectHideContent` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6849` |
| `selectScroll` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6896` |
| `checkAddonDeselectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6941` |
| `checkDeselectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6971` |
| `checkSelectable` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:6980` |
| `deselectObject` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7078` |
| `selectObject` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7282` |
| `selectedOneMore` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7547` |
| `selectedOneLess` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:7865` |
| `updateScores` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8099` |
| `selectObjectL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8359` |
| `selectedOneMoreL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8648` |
| `selectedOneLessL` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:8958` |
| `activateProc` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:9010` |
| `loadActivated` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:9061` |
| `duplicateRow` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9065` |
| `getDataURL` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9346` |
| `isDataURL` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9350` |
| `removeNulls` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9602` |
| `initFilterStyling` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9619` |
| `initPrivateStyling` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9640` |
| `loadFromDisk` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:9790` |
| `exportData` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:9882` |
| `importRequirement` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9905` |
| `importChoice` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:9931` |
| `importData` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:10016` |
| `getMimeFromBlob` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:10431` |
| `compareVersion` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:10441` |
| `initializeApp` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:10466` |
| `replaceFields` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11440` |
| `replaceImages` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11453` |
| `waitForImagesToLoad` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:11532` |
| `forceEagerImageLoading` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11544` |
| `copyComputedStyles` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11554` |
| `deepCopyStyles` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11565` |
| `waitForBorderImagesToLoad` | internal | yes | `ICCPlus/src/lib/store/store.svelte.ts:11575` |
| `waitForRenderFrames` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11598` |
| `next` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11601` |
| `downloadAsImage` | public | yes | `ICCPlus/src/lib/store/store.svelte.ts:11608` |
| `isMediaSupport` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11757` |
| `toggleTheme` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11767` |
| `setShortcut` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11809` |
| `applyTemplate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11827` |
| `revertTemplate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11835` |
| `applyWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11849` |
| `revertWidth` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11859` |
| `getDate` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11875` |
| `scrollToLastRow` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11886` |
| `tryScroll` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:11891` |
| `applyCustomCSS` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11905` |
| `hexToRgba` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11924` |
| `rgbToHex` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11935` |
| `toggleAltMenu` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11946` |
| `removeAnchor` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11950` |
| `pasteObject` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:11960` |
| `clearClipboard` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12090` |
| `closestByClassPrefix` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12123` |
| `copyObject` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12139` |
| `copyScores` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12158` |
| `pasteScore` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12175` |
| `copyAddons` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12190` |
| `pasteAddon` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12206` |
| `copyRequireds` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12249` |
| `pasteRequired` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12265` |
| `copyGroups` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12278` |
| `pasteGroup` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12293` |
| `copyDesignGroups` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12311` |
| `pasteDesignGroup` | internal | no | `ICCPlus/src/lib/store/store.svelte.ts:12326` |
| `choiceContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12344` |
| `requiredContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12365` |
| `scoreContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12386` |
| `addonContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12407` |
| `groupContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12428` |
| `dGroupContext` | public | no | `ICCPlus/src/lib/store/store.svelte.ts:12445` |

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
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2002` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2006` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2010` | 3 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2014` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2015` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2019` | 0 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2024` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2025` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2029` | 0 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2030` | 2 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2034` | 4 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2035` | 1 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2039` | 2 |
| `contextAction` | property-arrow | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2040` | 1 |
| `changeObjectId` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2340` | 9 |
| `createNewAddon` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2377` | 23 |
| `createNewScore` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2395` | 14 |
| `cloneObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2409` | 25 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2500` | 7 |
| `deleteDesignGroup` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2511` | 5 |
| `deleteObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2522` | 24 |
| `deleteProc` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2523` | 19 |
| `deleteAddon` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2596` | 6 |
| `moveChoiceLeft` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2614` | 3 |
| `moveChoiceRight` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2622` | 3 |
| `setFilters` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2630` | 82 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2743` | 8 |
| `toggleAutoActive` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2766` | 16 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/creator/AppObject.svelte:2792` | 11 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2816` | 17 |
| `toggleActive` | function | no | yes | `ICCPlus/src/lib/creator/AppObject.svelte:2853` | 9 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/AppObject.svelte:2878` | 5 |
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
| `renderIcon` | function | no | no | `ICCPlus/src/lib/creator/AppPointBar.svelte:72` | 8 |
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
| `deselectAll` | function | no | yes | `ICCPlus/src/lib/creator/AppRow.svelte:781` | 7 |
| `changeRowId` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:810` | 7 |
| `createNewObject` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:841` | 29 |
| `createNewObjects` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:876` | 0 |
| `reqContext` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:882` | 11 |
| `copyRequireds` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:902` | 8 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:918` | 6 |
| `objectWidthClass` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:930` | 6 |
| `buttonActivate` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:952` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/AppRow.svelte:1099` | 5 |
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
| `exportZip` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:497` | 9 |
| `exportWithViewer` | function | no | yes | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:529` | 25 |
| `getMime` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:651` | 2 |
| `getExt` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:657` | 0 |
| `loadApp` | function | no | yes | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:667` | 5 |
| `loadAutoSave` | function | no | yes | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:684` | 5 |
| `saveToDisk` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:701` | 6 |
| `saveApp` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:721` | 7 |
| `removeSave` | function | no | no | `ICCPlus/src/lib/creator/AppSaveLoad.svelte:748` | 1 |
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
| `rowContext` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:495` | 10 |
| `calTime` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:515` | 0 |
| `cloneRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:525` | 29 |
| `createNewRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:640` | 38 |
| `copyRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:706` | 5 |
| `pasteAction` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:714` | 1 |
| `pasteRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:720` | 32 |
| `deleteRow` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:857` | 22 |
| `deleteProc` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:858` | 17 |
| `moveRowUp` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:933` | 3 |
| `moveRowDown` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:941` | 3 |
| `rowWidthClass` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:949` | 4 |
| `handlePlayButton` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:955` | 5 |
| `handleStopButton` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1000` | 3 |
| `handleMuteButton` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1015` | 2 |
| `handlePlaybarDown` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1028` | 2 |
| `handlePlaybarUp` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1036` | 4 |
| `handleVolumebarDown` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1048` | 0 |
| `handleVolumebarUp` | function | no | no | `ICCPlus/src/lib/creator/CreatorMain.svelte:1052` | 3 |
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
| `escapeCsv` | function | no | no | `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte:71` | 0 |
| `exportAsCsv` | function | no | no | `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte:85` | 13 |
| `removeParagraph` | function | no | no | `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte:124` | 0 |
| `pointCount` | arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:235` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:239` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:240` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:242` | 0 |
| `getScrollElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:249` | 0 |
| `estimateSize` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:250` | 0 |
| `measureElement` | property-arrow | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:251` | 0 |
| `observeResize` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:255` | 1 |
| `destroy` | method | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:263` | 0 |
| `changePointId` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:269` | 9 |
| `clonePointType` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:312` | 5 |
| `createNewPointType` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:327` | 12 |
| `deletePointType` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:349` | 5 |
| `movePointTypeUp` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:357` | 3 |
| `movePointTypeDown` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:365` | 3 |
| `getCategoryLabel` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:373` | 2 |
| `swapCategory` | function | no | no | `ICCPlus/src/lib/creator/Features/AppPoints.svelte:381` | 8 |
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
| `addonWidthClass` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2178` | 4 |
| `copyAddon` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2199` | 4 |
| `moveAddonUp` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2207` | 3 |
| `moveAddonDown` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2213` | 3 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2219` | 4 |
| `toggleSelectable` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2231` | 11 |
| `createNewScore` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2258` | 13 |
| `changeAddonId` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2272` | 3 |
| `deleteGroup` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2285` | 6 |
| `getRadius` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2296` | 5 |
| `handleCounter` | function | no | yes | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2336` | 12 |
| `activateObject` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte:2359` | 17 |
| `getGroupLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte:21` | 3 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte:29` | 4 |
| `releaseGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte:38` | 4 |
| `getGroupLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte:21` | 3 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte:29` | 4 |
| `releaseGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte:38` | 4 |
| `setGroupElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte:242` | 3 |
| `setRowElement` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte:252` | 3 |
| `deleteInnerReq` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte:262` | 3 |
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
| `moveScoreDown` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:514` | 2 |
| `moveScoreUp` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:520` | 2 |
| `copyScore` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:526` | 4 |
| `getPointTypeLabel` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:537` | 3 |
| `isPointtypeActivated` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:545` | 7 |
| `changePointType` | function | no | no | `ICCPlus/src/lib/creator/Object/ObjectScore.svelte:568` | 6 |
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
| `deselectOption` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:551` | 4 |
| `toggleOption` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:576` | 2 |
| `isInViewport` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:592` | 2 |
| `getActiveMenuItems` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:604` | 1 |
| `handleTextfieldKeydown` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:613` | 2 |
| `handleElementBlur` | function | no | yes | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:662` | 2 |
| `isInputFocused` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:699` | 1 |
| `focus` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:710` | 2 |
| `blur` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:722` | 4 |
| `getElement` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:738` | 1 |
| `isExpanded` | function | yes | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:742` | 1 |
| `selectAll` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:746` | 6 |
| `selectProc` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:747` | 0 |
| `handleScroll` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:777` | 0 |
| `getLabel` | function | no | no | `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte:784` | 0 |
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
| `copy` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:786` | 1 |
| `paste` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:787` | 1 |
| `clear` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:788` | 1 |
| `export` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:789` | 1 |
| `update` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:827` | 0 |
| `getRows` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:868` | 1 |
| `getChoices` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:871` | 1 |
| `getBackpackRows` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:874` | 1 |
| `getBackpackChoices` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:877` | 1 |
| `getGroups` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:880` | 1 |
| `getPointTypes` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:883` | 1 |
| `getVariables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:886` | 1 |
| `getWords` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:889` | 1 |
| `getGlobalRequirement` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:892` | 1 |
| `getDesignGroups` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:895` | 1 |
| `getSelectables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:898` | 1 |
| `getBackpackSelectables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:901` | 1 |
| `getSearchables` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:904` | 1 |
| `getSoundEffects` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:907` | 1 |
| `createCyoaPlusDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:912` | 0 |
| `getOldDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:936` | 0 |
| `getDB` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:944` | 7 |
| `delay` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1190` | 0 |
| `cleanup` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1199` | 0 |
| `onAbort` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1204` | 0 |
| `autoSave` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1217` | 11 |
| `buildAutoSave` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1269` | 10 |
| `saveToSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1317` | 5 |
| `deleteSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1340` | 5 |
| `loadFromSlot` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1363` | 1 |
| `getOldAutoSave` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:1373` | 0 |
| `setOldSave` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:1422` | 2 |
| `initStoreSaves` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1440` | 8 |
| `initBuildSaves` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:1492` | 7 |
| `getSelectedObjectId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1535` | 22 |
| `getTimestamp` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1614` | 1 |
| `getPointTypeLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1625` | 3 |
| `getChoiceLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1632` | 5 |
| `getGroupLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1644` | 4 |
| `getRowLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1651` | 5 |
| `getGlobalReqLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1661` | 4 |
| `getDesignLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1668` | 4 |
| `getSfxLabel` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1675` | 3 |
| `getReqText` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1682` | 17 |
| `getChoiceTitle` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1758` | 5 |
| `checkInitId` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1765` | 1 |
| `generateId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1768` | 5 |
| `objectWidthToNum` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1784` | 1 |
| `widthToNum` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1801` | 1 |
| `fixedWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1824` | 1 |
| `checkWordChange` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1842` | 4 |
| `getCombinedRegex` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:1850` | 3 |
| `replaceText` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1857` | 14 |
| `getStyling` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1884` | 16 |
| `checkDupId` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1975` | 2 |
| `checkPointEnable` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1982` | 8 |
| `checkActivated` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:1999` | 2 |
| `getPriority` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2008` | 2 |
| `evaluateNode` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2020` | 3 |
| `checkReq` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2036` | 33 |
| `checkRequirements` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2239` | 2 |
| `wrapYoutubePlayer` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2257` | 4 |
| `load` | method | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2260` | 1 |
| `play` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2269` | 0 |
| `pause` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2270` | 0 |
| `stop` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2271` | 0 |
| `mute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2272` | 0 |
| `unMute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2273` | 0 |
| `setVolume` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2275` | 0 |
| `isPlaying` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2277` | 0 |
| `isStopped` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2278` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2279` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2281` | 0 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2286` | 0 |
| `getDuration` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2287` | 0 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2288` | 0 |
| `getTitle` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2290` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2292` | 0 |
| `wrapAudioPlayer` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2295` | 5 |
| `load` | method | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2316` | 1 |
| `play` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2324` | 1 |
| `pause` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2329` | 1 |
| `stop` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2330` | 1 |
| `mute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2335` | 1 |
| `unMute` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2339` | 1 |
| `setVolume` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2344` | 2 |
| `isPlaying` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2351` | 1 |
| `isStopped` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2352` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2353` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2355` | 1 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2366` | 1 |
| `getDuration` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2367` | 1 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2368` | 1 |
| `getTitle` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2370` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2371` | 1 |
| `createAudioPlayer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2374` | 1 |
| `retryAudioPlayer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2386` | 2 |
| `bgmFadeIn` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2396` | 20 |
| `bgmPlay` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2397` | 3 |
| `playProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2405` | 19 |
| `bgmFadeOut` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2516` | 12 |
| `playBgm` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2581` | 14 |
| `loadYouTubeAPI` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2658` | 1 |
| `initYoutubePlayer` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2670` | 8 |
| `onReady` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2678` | 6 |
| `base64ToArrayBuffer` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2699` | 0 |
| `getCtx` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:2709` | 0 |
| `initSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2713` | 2 |
| `loadSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2726` | 2 |
| `playSfx` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:2733` | 5 |
| `playSfxOnSelect` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2752` | 11 |
| `playSfxOnDeselect` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2783` | 11 |
| `initStyling` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2814` | 71 |
| `calcStackDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2847` | 3 |
| `deleteDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:2857` | 22 |
| `emptyDiscount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:2880` | 25 |
| `fillDiscount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:2998` | 17 |
| `deselectDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3112` | 26 |
| `selectDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3264` | 51 |
| `expDiscount` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3405` | 10 |
| `checkPoints` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3422` | 47 |
| `checkAddons` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:3755` | 12 |
| `setScoreValue` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:3786` | 15 |
| `cleanActivated` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:3842` | 104 |
| `deselectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:3845` | 16 |
| `clearProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:3870` | 31 |
| `selectForceActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4215` | 16 |
| `deselectTempActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4251` | 7 |
| `deselectForceActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4278` | 17 |
| `selectForceRandomActivate` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4341` | 18 |
| `removeCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4419` | 12 |
| `addCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4476` | 16 |
| `updateCount` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4544` | 14 |
| `deselectUpdateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:4594` | 46 |
| `selectUpdateScore` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:5016` | 50 |
| `activateTempChoices` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:5472` | 12 |
| `clearWordDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5513` | 8 |
| `clearImgDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5524` | 5 |
| `openWordDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5532` | 9 |
| `openImgDialog` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5556` | 7 |
| `delayProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5577` | 0 |
| `cancelDelayProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5581` | 0 |
| `deselectDiscountOther` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5586` | 11 |
| `selectDiscountOther` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:5631` | 11 |
| `deselectCalculateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5676` | 29 |
| `selectCalculateScore` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5762` | 23 |
| `deselectActivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5836` | 14 |
| `selectActivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5919` | 11 |
| `selectDeactivateOther` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:5968` | 13 |
| `deselectMissingReq` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:6027` | 14 |
| `deselectModifyPoint` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6074` | 16 |
| `selectModifyPoint` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6244` | 23 |
| `setVariables` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6332` | 8 |
| `addAllowedChoice` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6355` | 14 |
| `deselectEffectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6390` | 47 |
| `selectEffectProc` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6617` | 48 |
| `play` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6619` | 4 |
| `deselectHideContent` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6803` | 13 |
| `selectHideContent` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6849` | 14 |
| `selectScroll` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6896` | 15 |
| `checkAddonDeselectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6941` | 10 |
| `checkDeselectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6971` | 1 |
| `checkSelectable` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:6980` | 33 |
| `deselectObject` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7078` | 49 |
| `deselectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7097` | 31 |
| `selectObject` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7282` | 66 |
| `tmpAdd` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:7285` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7381` | 33 |
| `selectedOneMore` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7547` | 71 |
| `tmpAdd` | arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:7550` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7647` | 35 |
| `selectedOneLess` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:7865` | 51 |
| `deselectProcess` | arrow | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:7892` | 28 |
| `updateScores` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8099` | 37 |
| `selectObjectL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8359` | 52 |
| `selectedOneMoreL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8648` | 51 |
| `selectedOneLessL` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:8958` | 21 |
| `activateProc` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:9010` | 16 |
| `loadActivated` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:9061` | 1 |
| `duplicateRow` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9065` | 40 |
| `getDataURL` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9346` | 2 |
| `isDataURL` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9350` | 2 |
| `removeNulls` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9602` | 2 |
| `initFilterStyling` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9619` | 21 |
| `initPrivateStyling` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9640` | 16 |
| `loadFromDisk` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:9790` | 6 |
| `exportData` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:9882` | 6 |
| `importRequirement` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9905` | 3 |
| `importChoice` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:9931` | 7 |
| `importData` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:10016` | 37 |
| `getMimeFromBlob` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:10431` | 1 |
| `compareVersion` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:10441` | 0 |
| `initializeApp` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:10466` | 121 |
| `replaceFields` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11440` | 0 |
| `replaceImages` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11453` | 22 |
| `waitForImagesToLoad` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:11532` | 0 |
| `forceEagerImageLoading` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11544` | 0 |
| `copyComputedStyles` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11554` | 0 |
| `deepCopyStyles` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11565` | 0 |
| `waitForBorderImagesToLoad` | function | no | yes | `ICCPlus/src/lib/store/store.svelte.ts:11575` | 1 |
| `waitForRenderFrames` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11598` | 1 |
| `next` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11601` | 1 |
| `downloadAsImage` | function | yes | yes | `ICCPlus/src/lib/store/store.svelte.ts:11608` | 21 |
| `filter` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11690` | 2 |
| `filter` | property-arrow | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11719` | 2 |
| `isMediaSupport` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11757` | 1 |
| `toggleTheme` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11767` | 2 |
| `setShortcut` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11809` | 2 |
| `applyTemplate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11827` | 6 |
| `revertTemplate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11835` | 7 |
| `applyWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11849` | 9 |
| `revertWidth` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11859` | 9 |
| `getDate` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11875` | 2 |
| `scrollToLastRow` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11886` | 2 |
| `tryScroll` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:11891` | 1 |
| `applyCustomCSS` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11905` | 5 |
| `hexToRgba` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11924` | 1 |
| `rgbToHex` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11935` | 1 |
| `toggleAltMenu` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11946` | 2 |
| `removeAnchor` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11950` | 6 |
| `pasteObject` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:11960` | 29 |
| `clearClipboard` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12090` | 12 |
| `closestByClassPrefix` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12123` | 1 |
| `copyObject` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12139` | 9 |
| `copyScores` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12158` | 7 |
| `pasteScore` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12175` | 7 |
| `copyAddons` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12190` | 6 |
| `pasteAddon` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12206` | 20 |
| `copyRequireds` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12249` | 8 |
| `pasteRequired` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12265` | 6 |
| `copyGroups` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12278` | 7 |
| `pasteGroup` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12293` | 9 |
| `copyDesignGroups` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12311` | 6 |
| `pasteDesignGroup` | function | no | no | `ICCPlus/src/lib/store/store.svelte.ts:12326` | 7 |
| `choiceContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12344` | 12 |
| `requiredContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12365` | 12 |
| `scoreContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12386` | 12 |
| `addonContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12407` | 11 |
| `groupContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12428` | 8 |
| `dGroupContext` | function | yes | no | `ICCPlus/src/lib/store/store.svelte.ts:12445` | 7 |
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
| `renderIcon` | function | no | no | `ICCPlus/src/lib/viewer/AppPointBar.svelte:72` | 8 |
| `deselectAll` | function | no | yes | `ICCPlus/src/lib/viewer/AppRow.svelte:372` | 7 |
| `buttonActivate` | function | no | no | `ICCPlus/src/lib/viewer/AppRow.svelte:401` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus/src/lib/viewer/AppRow.svelte:548` | 5 |
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
| `isPointtypeActivated` | function | no | no | `ICCPlus/src/lib/viewer/Object/ObjectScore.svelte:263` | 7 |
| `action` | property-arrow | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:203` | 0 |
| `buildContext` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:305` | 2 |
| `calTime` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:312` | 0 |
| `toggleTheme` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:322` | 1 |
| `rowWidthClass` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:346` | 4 |
| `handlePlayButton` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:352` | 5 |
| `handleStopButton` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:397` | 3 |
| `handleMuteButton` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:412` | 2 |
| `handlePlaybarDown` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:425` | 2 |
| `handlePlaybarUp` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:433` | 4 |
| `handleVolumebarDown` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:445` | 0 |
| `handleVolumebarUp` | function | no | no | `ICCPlus/src/lib/viewer/ViewerMain.svelte:449` | 3 |
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
| `deselectOption` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:551` | 4 |
| `toggleOption` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:576` | 2 |
| `isInViewport` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:592` | 2 |
| `getActiveMenuItems` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:604` | 1 |
| `handleTextfieldKeydown` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:613` | 2 |
| `handleElementBlur` | function | no | yes | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:662` | 2 |
| `isInputFocused` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:699` | 1 |
| `focus` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:710` | 2 |
| `blur` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:722` | 4 |
| `getElement` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:738` | 1 |
| `isExpanded` | function | yes | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:742` | 1 |
| `selectAll` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:746` | 6 |
| `selectProc` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:747` | 0 |
| `handleScroll` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:777` | 0 |
| `getLabel` | function | no | no | `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte:784` | 0 |
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
| `update` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:804` | 0 |
| `getSearchables` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:815` | 1 |
| `getSoundEffects` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:818` | 1 |
| `createCyoaPlusDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:823` | 0 |
| `getOldDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:847` | 0 |
| `getDB` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:855` | 7 |
| `delay` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1098` | 0 |
| `cleanup` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1107` | 0 |
| `onAbort` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1112` | 0 |
| `buildAutoSave` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1125` | 10 |
| `saveToSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1173` | 5 |
| `deleteSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1192` | 5 |
| `loadFromSlot` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1211` | 1 |
| `initBuildSaves` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1221` | 7 |
| `getSelectedObjectId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1264` | 22 |
| `getTimestamp` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1343` | 1 |
| `getChoiceLabel` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1354` | 5 |
| `getReqText` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1366` | 17 |
| `getChoiceTitle` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1442` | 5 |
| `checkInitId` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1449` | 1 |
| `generateId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1452` | 5 |
| `objectWidthToNum` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1468` | 1 |
| `widthToNum` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1485` | 1 |
| `fixedWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1508` | 1 |
| `checkWordChange` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1526` | 4 |
| `getCombinedRegex` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1534` | 3 |
| `replaceText` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1541` | 14 |
| `getStyling` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1568` | 16 |
| `checkDupId` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1659` | 2 |
| `checkPointEnable` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1666` | 8 |
| `checkActivated` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1683` | 2 |
| `getPriority` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1692` | 2 |
| `evaluateNode` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1704` | 3 |
| `checkReq` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1720` | 33 |
| `checkRequirements` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1923` | 2 |
| `wrapYoutubePlayer` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1941` | 4 |
| `load` | method | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1944` | 1 |
| `play` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1953` | 0 |
| `pause` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1954` | 0 |
| `stop` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1955` | 0 |
| `mute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1956` | 0 |
| `unMute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1957` | 0 |
| `setVolume` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1959` | 0 |
| `isPlaying` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1961` | 0 |
| `isStopped` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1962` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1963` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1965` | 0 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1970` | 0 |
| `getDuration` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1971` | 0 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1972` | 0 |
| `getTitle` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1974` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1976` | 0 |
| `wrapAudioPlayer` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:1979` | 5 |
| `load` | method | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2000` | 1 |
| `play` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2008` | 1 |
| `pause` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2013` | 1 |
| `stop` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2014` | 1 |
| `mute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2019` | 1 |
| `unMute` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2023` | 1 |
| `setVolume` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2028` | 2 |
| `isPlaying` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2035` | 1 |
| `isStopped` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2036` | 0 |
| `isMuted` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2037` | 0 |
| `seekTo` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2039` | 1 |
| `getCurrentTime` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2050` | 1 |
| `getDuration` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2051` | 1 |
| `getPlayerState` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2052` | 1 |
| `getTitle` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2054` | 1 |
| `getId` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2055` | 1 |
| `createAudioPlayer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2058` | 1 |
| `retryAudioPlayer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2070` | 2 |
| `bgmFadeIn` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2080` | 20 |
| `bgmPlay` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2081` | 3 |
| `playProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2089` | 19 |
| `bgmFadeOut` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2200` | 12 |
| `playBgm` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2265` | 14 |
| `loadYouTubeAPI` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2342` | 1 |
| `initYoutubePlayer` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2354` | 8 |
| `onReady` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2362` | 6 |
| `base64ToArrayBuffer` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2383` | 0 |
| `getCtx` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2393` | 0 |
| `initSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2397` | 2 |
| `loadSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2410` | 2 |
| `playSfx` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2417` | 5 |
| `playSfxOnSelect` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2436` | 11 |
| `playSfxOnDeselect` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2467` | 11 |
| `initStyling` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2498` | 71 |
| `calcStackDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2531` | 3 |
| `deleteDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2541` | 22 |
| `emptyDiscount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2564` | 25 |
| `fillDiscount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2682` | 17 |
| `deselectDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2796` | 26 |
| `selectDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:2948` | 51 |
| `expDiscount` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3089` | 10 |
| `checkPoints` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3106` | 47 |
| `checkAddons` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3439` | 12 |
| `setScoreValue` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3470` | 15 |
| `cleanActivated` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3527` | 104 |
| `deselectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3530` | 16 |
| `clearProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3555` | 31 |
| `selectForceActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3900` | 16 |
| `deselectTempActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3936` | 7 |
| `deselectForceActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:3963` | 17 |
| `selectForceRandomActivate` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4026` | 18 |
| `removeCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4104` | 12 |
| `addCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4161` | 16 |
| `updateCount` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4229` | 14 |
| `deselectUpdateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4279` | 46 |
| `selectUpdateScore` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:4701` | 50 |
| `activateTempChoices` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5157` | 12 |
| `clearWordDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5198` | 8 |
| `clearImgDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5209` | 5 |
| `openWordDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5217` | 9 |
| `openImgDialog` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5241` | 7 |
| `delayProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5262` | 0 |
| `cancelDelayProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5266` | 0 |
| `deselectDiscountOther` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5271` | 11 |
| `selectDiscountOther` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5316` | 11 |
| `deselectCalculateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5361` | 29 |
| `selectCalculateScore` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5447` | 23 |
| `deselectActivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5521` | 14 |
| `selectActivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5604` | 11 |
| `selectDeactivateOther` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5653` | 13 |
| `deselectMissingReq` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5712` | 14 |
| `deselectModifyPoint` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5759` | 16 |
| `selectModifyPoint` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:5929` | 23 |
| `setVariables` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6017` | 8 |
| `addAllowedChoice` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6040` | 14 |
| `deselectEffectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6075` | 47 |
| `selectEffectProc` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6302` | 48 |
| `play` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6304` | 4 |
| `deselectHideContent` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6488` | 13 |
| `selectHideContent` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6534` | 14 |
| `selectScroll` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6581` | 15 |
| `checkAddonDeselectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6626` | 10 |
| `checkDeselectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6656` | 1 |
| `checkSelectable` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6665` | 33 |
| `deselectObject` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6763` | 49 |
| `deselectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6782` | 31 |
| `selectObject` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6967` | 66 |
| `tmpAdd` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:6970` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7066` | 33 |
| `selectedOneMore` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7232` | 71 |
| `tmpAdd` | arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7235` | 6 |
| `selectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7332` | 35 |
| `selectedOneLess` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7550` | 51 |
| `deselectProcess` | arrow | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7577` | 28 |
| `updateScores` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:7784` | 37 |
| `selectObjectL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8044` | 52 |
| `selectedOneMoreL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8333` | 51 |
| `selectedOneLessL` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8643` | 21 |
| `activateProc` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8695` | 16 |
| `loadActivated` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8746` | 1 |
| `duplicateRow` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:8750` | 40 |
| `getDataURL` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9030` | 2 |
| `isDataURL` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9034` | 2 |
| `isAvif` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9038` | 2 |
| `removeNulls` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9293` | 2 |
| `initFilterStyling` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9310` | 21 |
| `initPrivateStyling` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9331` | 16 |
| `compareVersion` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9481` | 0 |
| `initializeApp` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:9506` | 115 |
| `waitForImagesToLoad` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10425` | 0 |
| `forceEagerImageLoading` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10436` | 0 |
| `copyComputedStyles` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10444` | 0 |
| `deepCopyStyles` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10454` | 0 |
| `waitForBorderImagesToLoad` | function | no | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10463` | 1 |
| `waitForRenderFrames` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10486` | 1 |
| `next` | function | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10489` | 1 |
| `downloadAsImage` | function | yes | yes | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10496` | 21 |
| `filter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10578` | 2 |
| `filter` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10607` | 2 |
| `isMediaSupport` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10645` | 1 |
| `toggleTheme` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10655` | 2 |
| `applyTemplate` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10697` | 6 |
| `revertTemplate` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10705` | 7 |
| `applyWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10719` | 9 |
| `revertWidth` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10729` | 9 |
| `applyCustomCSS` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10745` | 5 |
| `hexToRgba` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10764` | 1 |
| `closestByClassPrefix` | function | yes | no | `ICCPlus_Viewer/src/lib/store/store.svelte.ts:10775` | 1 |
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
| `renderIcon` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppPointBar.svelte:72` | 8 |
| `deselectAll` | function | no | yes | `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte:372` | 7 |
| `buttonActivate` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte:401` | 38 |
| `copyTooltip` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte:548` | 5 |
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
| `isPointtypeActivated` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/Object/ObjectScore.svelte:263` | 7 |
| `action` | property-arrow | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:178` | 0 |
| `buildContext` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:275` | 2 |
| `calTime` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:282` | 0 |
| `toggleTheme` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:292` | 1 |
| `rowWidthClass` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:316` | 4 |
| `handlePlayButton` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:322` | 5 |
| `handleStopButton` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:367` | 3 |
| `handleMuteButton` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:382` | 2 |
| `handlePlaybarDown` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:395` | 2 |
| `handlePlaybarUp` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:403` | 4 |
| `handleVolumebarDown` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:415` | 0 |
| `handleVolumebarUp` | function | no | no | `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte:419` | 3 |
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
| `ICCPlus/src/lib/creator/AppObject.svelte` | 2889 | 421 | 43 |
| `ICCPlus/src/lib/creator/AppObjectList.svelte` | 89 | 15 | 2 |
| `ICCPlus/src/lib/creator/AppObjectSettings.svelte` | 367 | 64 | 7 |
| `ICCPlus/src/lib/creator/AppPointBar.svelte` | 79 | 34 | 0 |
| `ICCPlus/src/lib/creator/AppProjectStats.svelte` | 210 | 13 | 2 |
| `ICCPlus/src/lib/creator/AppRequirement.svelte` | 229 | 38 | 17 |
| `ICCPlus/src/lib/creator/AppRow.svelte` | 1109 | 215 | 14 |
| `ICCPlus/src/lib/creator/AppRowList.svelte` | 108 | 20 | 2 |
| `ICCPlus/src/lib/creator/AppRowSettings.svelte` | 454 | 56 | 11 |
| `ICCPlus/src/lib/creator/AppSaveLoad.svelte` | 754 | 58 | 7 |
| `ICCPlus/src/lib/creator/AppSearchForm.svelte` | 124 | 18 | 2 |
| `ICCPlus/src/lib/creator/AppViewerConfig.svelte` | 195 | 26 | 6 |
| `ICCPlus/src/lib/creator/CreatorMain.svelte` | 1062 | 138 | 6 |
| `ICCPlus/src/lib/creator/Design/AppAddonDesign.svelte` | 348 | 60 | 27 |
| `ICCPlus/src/lib/creator/Design/AppAddonImage.svelte` | 185 | 35 | 13 |
| `ICCPlus/src/lib/creator/Design/AppBackground.svelte` | 244 | 33 | 2 |
| `ICCPlus/src/lib/creator/Design/AppBackpack.svelte` | 99 | 19 | 3 |
| `ICCPlus/src/lib/creator/Design/AppChoiceDesign.svelte` | 290 | 54 | 27 |
| `ICCPlus/src/lib/creator/Design/AppChoiceImage.svelte` | 172 | 36 | 13 |
| `ICCPlus/src/lib/creator/Design/AppFilter.svelte` | 435 | 104 | 10 |
| `ICCPlus/src/lib/creator/Design/AppMultiChoice.svelte` | 123 | 17 | 4 |
| `ICCPlus/src/lib/creator/Design/AppPointbar.svelte` | 138 | 30 | 8 |
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
| `ICCPlus/src/lib/creator/Features/AppIdSearch.svelte` | 131 | 14 | 3 |
| `ICCPlus/src/lib/creator/Features/AppPointSettings.svelte` | 258 | 35 | 5 |
| `ICCPlus/src/lib/creator/Features/AppPoints.svelte` | 413 | 45 | 14 |
| `ICCPlus/src/lib/creator/Features/AppPrivateDesign.svelte` | 237 | 38 | 4 |
| `ICCPlus/src/lib/creator/Features/AppSoundEffects.svelte` | 308 | 32 | 6 |
| `ICCPlus/src/lib/creator/Features/AppSymbols.svelte` | 235 | 25 | 5 |
| `ICCPlus/src/lib/creator/Features/AppTemplates.svelte` | 1651 | 206 | 10 |
| `ICCPlus/src/lib/creator/Features/AppVariables.svelte` | 247 | 24 | 6 |
| `ICCPlus/src/lib/creator/Features/AppWords.svelte` | 247 | 24 | 6 |
| `ICCPlus/src/lib/creator/Object/ObjectAddon.svelte` | 2391 | 399 | 38 |
| `ICCPlus/src/lib/creator/Object/ObjectDesignGroup.svelte` | 48 | 9 | 1 |
| `ICCPlus/src/lib/creator/Object/ObjectGroup.svelte` | 48 | 9 | 1 |
| `ICCPlus/src/lib/creator/Object/ObjectInnerReq.svelte` | 267 | 32 | 10 |
| `ICCPlus/src/lib/creator/Object/ObjectMultiChoice.svelte` | 149 | 34 | 0 |
| `ICCPlus/src/lib/creator/Object/ObjectRequired.svelte` | 174 | 34 | 4 |
| `ICCPlus/src/lib/creator/Object/ObjectScore.svelte` | 584 | 101 | 11 |
| `ICCPlus/src/lib/creator/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus/src/lib/custom/accordion/Accordion.svelte` | 145 | 5 | 0 |
| `ICCPlus/src/lib/custom/accordion/Header.svelte` | 162 | 6 | 0 |
| `ICCPlus/src/lib/custom/accordion/Panel.svelte` | 249 | 6 | 0 |
| `ICCPlus/src/lib/custom/autocomplete/Autocomplete.svelte` | 788 | 24 | 0 |
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
| `ICCPlus/src/lib/custom/tooltip/Tooltip.svelte` | 48 | 6 | 0 |
| `ICCPlus/src/lib/custom/tooltip/Wrapper.svelte` | 10 | 2 | 0 |
| `ICCPlus/src/lib/information/InfoMain.svelte` | 1850 | 58 | 0 |
| `ICCPlus/src/lib/information/InfoPanel.svelte` | 17 | 2 | 0 |
| `ICCPlus/src/lib/store/CustomAutocomplete.svelte` | 54 | 4 | 0 |
| `ICCPlus/src/lib/store/CustomChipInput.svelte` | 51 | 6 | 1 |
| `ICCPlus/src/lib/store/ImageUpload.svelte` | 454 | 18 | 14 |
| `ICCPlus/src/lib/store/PictureInput.svelte` | 567 | 14 | 0 |
| `ICCPlus/src/lib/store/Tiptap.svelte` | 702 | 14 | 17 |
| `ICCPlus/src/lib/viewer/AppBuildForm.svelte` | 126 | 17 | 6 |
| `ICCPlus/src/lib/viewer/AppGlobalSettings.svelte` | 296 | 38 | 7 |
| `ICCPlus/src/lib/viewer/AppObject.svelte` | 738 | 238 | 0 |
| `ICCPlus/src/lib/viewer/AppPointBar.svelte` | 79 | 34 | 0 |
| `ICCPlus/src/lib/viewer/AppRow.svelte` | 558 | 160 | 0 |
| `ICCPlus/src/lib/viewer/AppSaveLoad.svelte` | 225 | 22 | 3 |
| `ICCPlus/src/lib/viewer/AppSearchForm.svelte` | 124 | 17 | 2 |
| `ICCPlus/src/lib/viewer/DlgBackpack.svelte` | 79 | 24 | 2 |
| `ICCPlus/src/lib/viewer/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus/src/lib/viewer/Object/ObjectAddon.svelte` | 742 | 252 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectMultiChoice.svelte` | 149 | 34 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectRequired.svelte` | 53 | 13 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectScore.svelte` | 285 | 84 | 0 |
| `ICCPlus/src/lib/viewer/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus/src/lib/viewer/ViewerMain.svelte` | 460 | 73 | 7 |
| `ICCPlus_Viewer/src/App.svelte` | 272 | 12 | 0 |
| `ICCPlus_Viewer/src/lib/custom/autocomplete/Autocomplete.svelte` | 788 | 24 | 0 |
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
| `ICCPlus_Viewer/src/lib/custom/tooltip/Tooltip.svelte` | 48 | 6 | 0 |
| `ICCPlus_Viewer/src/lib/custom/tooltip/Wrapper.svelte` | 10 | 2 | 0 |
| `ICCPlus_Viewer/src/lib/store/ImageUpload.svelte` | 454 | 18 | 14 |
| `ICCPlus_Viewer/src/lib/store/PictureInput.svelte` | 567 | 14 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppBuildForm.svelte` | 126 | 17 | 6 |
| `ICCPlus_Viewer/src/lib/viewer/AppGlobalSettings.svelte` | 316 | 38 | 7 |
| `ICCPlus_Viewer/src/lib/viewer/AppObject.svelte` | 738 | 238 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppPointBar.svelte` | 79 | 34 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppRow.svelte` | 558 | 160 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/AppSaveLoad.svelte` | 225 | 22 | 3 |
| `ICCPlus_Viewer/src/lib/viewer/AppSearchForm.svelte` | 124 | 17 | 2 |
| `ICCPlus_Viewer/src/lib/viewer/DlgBackpack.svelte` | 79 | 24 | 2 |
| `ICCPlus_Viewer/src/lib/viewer/DlgCommon.svelte` | 68 | 11 | 3 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectAddon.svelte` | 742 | 252 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectMultiChoice.svelte` | 149 | 34 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectRequired.svelte` | 53 | 13 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectScore.svelte` | 285 | 84 | 0 |
| `ICCPlus_Viewer/src/lib/viewer/Object/ObjectSelectDialog.svelte` | 41 | 4 | 4 |
| `ICCPlus_Viewer/src/lib/viewer/ViewerMain.svelte` | 430 | 73 | 5 |
