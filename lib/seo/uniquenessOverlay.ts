import overlayBatch1 from "@/seo-manifest/uniqueness-overlay-batch1.json";
import { buildLocationIndustryServiceContent } from "@/lib/seo/generateUniquePageContent";
import { MALTA_PRIORITY_MATRIX_PATHS } from "@/lib/seo/maltaMatrixCohorts";
import { LOCATION_IND_SVC_GLOBAL_KEEP } from "@/lib/seo/seoSets";

export type UniquenessOverlayEntry = {
  path: string;
  ownerHero?: boolean;
  distinctFields?: string[];
  source?: string;
};

export type UniquenessOverlayDoc = {
  version: number;
  batch: string;
  generatedAt: string;
  minDistinctFields: number;
  requiredFields: string[];
  note?: string;
  entries: UniquenessOverlayEntry[];
};

export const UNIQUENESS_OVERLAY_BATCH1 = overlayBatch1 as UniquenessOverlayDoc;

const overlayByPath = new Map(
  UNIQUENESS_OVERLAY_BATCH1.entries.map((e) => [e.path, e] as const),
);

export function getUniquenessOverlay(path: string): UniquenessOverlayEntry | undefined {
  return overlayByPath.get(path);
}

function readField(content: Record<string, unknown>, dotted: string): unknown {
  const parts = dotted.split(".");
  let cur: unknown = content;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

function fieldPresent(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value as object).length > 0;
  return true;
}

/** Minimum distinct fields from programmatic content builder (floor for all priority paths). */
export function passesMinimumDistinctFields(
  location: string,
  industry: string,
  service: string,
  minFields = UNIQUENESS_OVERLAY_BATCH1.minDistinctFields,
  required = UNIQUENESS_OVERLAY_BATCH1.requiredFields,
): { ok: boolean; reason?: string; present: string[] } {
  const content = buildLocationIndustryServiceContent(location, industry, service);
  if (!content) {
    return { ok: false, reason: "content-builder-null", present: [] };
  }
  const present: string[] = [];
  for (const field of required) {
    if (fieldPresent(readField(content as unknown as Record<string, unknown>, field))) {
      present.push(field);
    }
  }
  if (present.length < minFields) {
    return {
      ok: false,
      reason: `distinct-fields ${present.length}<${minFields}`,
      present,
    };
  }
  // Differentiation: title+h1+eyebrow must mention the locality profile name or slug.
  const blob = `${content.title} ${content.hero.h1} ${content.hero.eyebrow}`.toLowerCase();
  const locToken = location.replace(/-/g, " ").toLowerCase();
  const locOk =
    blob.includes(locToken) ||
    blob.includes(location.toLowerCase()) ||
    content.canonical.includes(`/malta/${location}/`);
  if (!locOk) {
    return { ok: false, reason: "missing-location-token", present };
  }
  return { ok: true, present };
}

export function passesUniquenessOverlay(path: string): { ok: boolean; reason?: string } {
  const entry = getUniquenessOverlay(path);
  if (!entry) return { ok: false, reason: "not-in-overlay" };
  const fields = entry.distinctFields ?? [];
  if (fields.length < UNIQUENESS_OVERLAY_BATCH1.minDistinctFields) {
    return {
      ok: false,
      reason: `overlay-fields ${fields.length}<${UNIQUENESS_OVERLAY_BATCH1.minDistinctFields}`,
    };
  }
  if (entry.ownerHero !== true) {
    return { ok: false, reason: "overlay-missing-ownerHero" };
  }
  return { ok: true };
}

/**
 * Priority-matrix quality rule when batch1 overlay exists:
 * path passes if (in overlay AND overlay ok) OR minimum distinct fields from builder.
 * Never flips LOCATION_IND_SVC_GLOBAL_KEEP.
 */
export function priorityPathPassesUniquenessGate(path: string): {
  ok: boolean;
  via: "overlay" | "min-distinct" | "fail";
  reason?: string;
} {
  const parts = path.split("/").filter(Boolean);
  if (parts.length !== 4 || parts[0] !== "malta") {
    return { ok: false, via: "fail", reason: "not-matrix-path" };
  }
  const [, location, industry, service] = parts;
  const overlay = passesUniquenessOverlay(path);
  if (overlay.ok) return { ok: true, via: "overlay" };
  const min = passesMinimumDistinctFields(location!, industry!, service!);
  if (min.ok) return { ok: true, via: "min-distinct" };
  return {
    ok: false,
    via: "fail",
    reason: `overlay:${overlay.reason}; min:${min.reason}`,
  };
}

export function assertPriorityMatrixUniquenessGate(): {
  checked: number;
  overlayPass: number;
  minDistinctPass: number;
  failures: string[];
} {
  if (LOCATION_IND_SVC_GLOBAL_KEEP !== true) {
    throw new Error(
      "uniqueness gate refuses to run while LOCATION_IND_SVC_GLOBAL_KEEP is false — do not flip GLOBAL_KEEP",
    );
  }
  if (!UNIQUENESS_OVERLAY_BATCH1?.entries?.length) {
    throw new Error("uniqueness-overlay-batch1.json missing or empty");
  }

  let overlayPass = 0;
  let minDistinctPass = 0;
  const failures: string[] = [];

  for (const path of MALTA_PRIORITY_MATRIX_PATHS) {
    const result = priorityPathPassesUniquenessGate(path);
    if (!result.ok) {
      failures.push(`${path} → ${result.reason}`);
      continue;
    }
    if (result.via === "overlay") overlayPass += 1;
    else minDistinctPass += 1;
  }

  // Batch1 overlay entries themselves must all pass overlay checks.
  for (const entry of UNIQUENESS_OVERLAY_BATCH1.entries) {
    const r = passesUniquenessOverlay(entry.path);
    if (!r.ok) failures.push(`overlay-entry ${entry.path} → ${r.reason}`);
  }

  if (failures.length) {
    throw new Error(
      `uniqueness quality gate failed (${failures.length}):\n${failures.slice(0, 20).join("\n")}`,
    );
  }

  return {
    checked: MALTA_PRIORITY_MATRIX_PATHS.length,
    overlayPass,
    minDistinctPass,
    failures,
  };
}
