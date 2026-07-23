import type { JsonObject, JsonValue } from './types.js';

export function cloneJson<T extends JsonValue>(value: T): T {
  return structuredClone(value);
}

export function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function asObject(value: JsonValue | undefined): JsonObject | undefined {
  return isJsonObject(value) ? value : undefined;
}

export function asArray(value: JsonValue | undefined): JsonValue[] {
  return Array.isArray(value) ? value : [];
}

export function asObjectArray(value: JsonValue | undefined): JsonObject[] {
  return asArray(value).filter(isJsonObject);
}

export function asString(value: JsonValue | undefined, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

export function asNumber(value: JsonValue | undefined, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function asBoolean(value: JsonValue | undefined, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

export function deepMerge<T extends JsonObject>(base: T, overlay: JsonObject): T {
  const result: JsonObject = cloneJson(base);
  for (const [key, value] of Object.entries(overlay)) {
    const current = result[key];
    if (isJsonObject(current) && isJsonObject(value)) {
      result[key] = deepMerge(current, value);
    } else {
      result[key] = cloneJson(value);
    }
  }
  return result as T;
}

export function removeNulls(value: JsonValue): JsonValue | undefined {
  if (Array.isArray(value)) {
    return value
      .map(removeNulls)
      .filter((item): item is JsonValue => item !== undefined);
  }
  if (isJsonObject(value)) {
    const entries = Object.entries(value)
      .map(([key, child]) => [key, removeNulls(child)] as const)
      .filter((entry): entry is readonly [string, JsonValue] => entry[1] !== undefined);
    return entries.length > 0 ? Object.fromEntries(entries) : undefined;
  }
  return value === null ? undefined : value;
}

export function jsonByteLength(value: JsonValue): number {
  return Buffer.byteLength(JSON.stringify(value), 'utf8');
}

export function compactText(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
