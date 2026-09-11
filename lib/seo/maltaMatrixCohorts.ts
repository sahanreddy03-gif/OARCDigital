import priorityManifest from "@/seo-manifest/malta-priority-matrix.json";
import {
  historicalIndustries,
  historicalMatrixLocations,
  historicalMatrixPaths,
  historicalServices,
} from "@/shared/historicalProgrammaticInventory";

/**
 * Malta matrix sitemap cohorts.
 *
 * Priority ≤2000: Sahan ranked malta-priority-1000 seed + high-demand fill
 * (AI / automation / hospitality / healthcare / iGaming preferred).
 * Expanded: remaining historical 49×15×10 triples (live via GLOBAL_KEEP,
 * omitted from sitemap index until quality gate).
 */

const prioritySet = new Set(priorityManifest.paths as readonly string[]);

export const MALTA_PRIORITY_MATRIX_PATHS: readonly string[] = priorityManifest.paths;
export const MALTA_PRIORITY_MATRIX_COUNT = MALTA_PRIORITY_MATRIX_PATHS.length;
export const MALTA_PRIORITY_MATRIX_SHA256 = priorityManifest.sha256 as string;

export function isPriorityMatrixPath(path: string): boolean {
  return prioritySet.has(path);
}

export function* maltaPriorityMatrixPaths(): Generator<string> {
  for (const path of MALTA_PRIORITY_MATRIX_PATHS) yield path;
}

export function* maltaExpandedMatrixPaths(): Generator<string> {
  for (const path of historicalMatrixPaths()) {
    if (!prioritySet.has(path)) yield path;
  }
}

export function maltaExpandedMatrixPathList(): string[] {
  return [...maltaExpandedMatrixPaths()];
}

/** Runtime sanity — used by validate + guard. */
export function assertMatrixCohortPartition(): {
  priority: number;
  expanded: number;
  total: number;
} {
  const total =
    historicalMatrixLocations.length *
    historicalIndustries.length *
    historicalServices.length;
  const priority = MALTA_PRIORITY_MATRIX_PATHS.length;
  const expanded = maltaExpandedMatrixPathList().length;
  if (priority + expanded !== total) {
    throw new Error(
      `malta matrix cohort partition broken: priority=${priority} expanded=${expanded} total=${total}`,
    );
  }
  if (priority > 2000) {
    throw new Error(`priority matrix exceeds 2000 (got ${priority})`);
  }
  if (priority < 1500) {
    throw new Error(`priority matrix below 1500 floor (got ${priority})`);
  }
  for (const path of MALTA_PRIORITY_MATRIX_PATHS) {
    const parts = path.split("/").filter(Boolean);
    if (
      parts.length !== 4 ||
      parts[0] !== "malta" ||
      !historicalMatrixLocations.includes(parts[1]) ||
      !historicalIndustries.includes(parts[2]) ||
      !historicalServices.includes(parts[3])
    ) {
      throw new Error(`priority path not in historical ledger: ${path}`);
    }
  }
  return { priority, expanded, total };
}
