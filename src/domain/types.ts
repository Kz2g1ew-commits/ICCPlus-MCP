export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export type JsonObject = { [key: string]: JsonValue };

export type EntityType =
  | 'row'
  | 'backpack_row'
  | 'choice'
  | 'addon'
  | 'selectable_addon'
  | 'score'
  | 'requirement'
  | 'point'
  | 'variable'
  | 'word'
  | 'group'
  | 'row_design_group'
  | 'choice_design_group'
  | 'global_requirement'
  | 'sound_effect'
  | 'category';

export type DiagnosticSeverity = 'error' | 'warning' | 'info';

export interface Diagnostic {
  code: string;
  severity: DiagnosticSeverity;
  message: string;
  path: string;
  entityId?: string;
  expected?: JsonValue;
  actual?: JsonValue;
  suggestion?: string;
}

export interface ValidationReport {
  valid: boolean;
  errors: number;
  warnings: number;
  diagnostics: Diagnostic[];
}

export interface LocatedEntity {
  type: EntityType;
  id: string;
  value: JsonObject;
  path: string;
  parentId?: string;
  containerPath: string;
  index: number;
}

export interface ProjectSummary {
  version: string | null;
  rows: number;
  backpackRows: number;
  choices: number;
  selectableAddons: number;
  addons: number;
  scores: number;
  requirements: number;
  points: number;
  variables: number;
  words: number;
  groups: number;
  rowDesignGroups: number;
  choiceDesignGroups: number;
  globalRequirements: number;
  soundEffects: number;
  categories: number;
  embeddedAssetBytes: number;
}

export interface ProjectSnapshot {
  revision: number;
  data: JsonObject;
  label: string;
  createdAt: string;
}

export interface ProjectSession {
  id: string;
  path?: string;
  data: JsonObject;
  revision: number;
  savedRevision: number;
  createdAt: string;
  updatedAt: string;
  history: ProjectSnapshot[];
  future: ProjectSnapshot[];
}

export type JsonPatchOperation =
  | { op: 'add'; path: string; value: JsonValue }
  | { op: 'remove'; path: string }
  | { op: 'replace'; path: string; value: JsonValue }
  | { op: 'move'; from: string; path: string }
  | { op: 'copy'; from: string; path: string }
  | { op: 'test'; path: string; value: JsonValue };

export interface RequirementState {
  selected?: Record<string, number> | undefined;
  points?: Record<string, number> | undefined;
  variables?: Record<string, boolean> | undefined;
  words?: Record<string, string> | undefined;
  rowSelections?: Record<string, number> | undefined;
}
