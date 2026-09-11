/**
 * Content enrichment for Owner Hero Gates uniqueness batches.
 * Separate from uniquenessOverlay.ts (quality allowlist / gate) to avoid
 * circular imports with generateUniquePageContent.
 */

import batch1 from "@/seo-manifest/uniqueness-batch1.json";
import batch2 from "@/seo-manifest/uniqueness-batch2.json";

export type UniquenessFaq = { q: string; a: string };
export type UniquenessLink = { href: string; label: string };
export type UniquenessHero2 = { heading: string; body: string };

export type UniquenessContentEntry = {
  title?: string;
  description?: string;
  h1?: string;
  hero1Intro?: string;
  hero2?: UniquenessHero2;
  challenge?: string;
  opportunity?: string;
  regulationNote?: string;
  faqs?: UniquenessFaq[];
  links?: UniquenessLink[];
};

type ContentBatch = {
  schemaVersion: number;
  batch: number;
  paths: readonly string[];
  entries: Record<string, UniquenessContentEntry>;
};

const BATCHES: readonly ContentBatch[] = [
  batch1 as ContentBatch,
  batch2 as ContentBatch,
];

const byPath = new Map<string, UniquenessContentEntry>();
for (const batch of BATCHES) {
  for (const [path, entry] of Object.entries(batch.entries)) {
    byPath.set(path, entry);
  }
}

export const UNIQUENESS_CONTENT_BATCH1_PATHS: readonly string[] = (
  batch1 as ContentBatch
).paths;

export const UNIQUENESS_CONTENT_BATCH2_PATHS: readonly string[] = (
  batch2 as ContentBatch
).paths;

export function getUniquenessContent(
  path: string,
): UniquenessContentEntry | undefined {
  return byPath.get(path);
}

export function matrixContentPath(
  location: string,
  industry: string,
  service: string,
): string {
  return `/malta/${location}/${industry}/${service}`;
}
