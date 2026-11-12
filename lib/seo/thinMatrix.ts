import { isPriorityMatrixPath } from "@/lib/seo/maltaMatrixCohorts";
import { isRetiredMatrixPath } from "@/lib/seo/retiredMatrix";
import overlayBatch1 from "@/seo-manifest/uniqueness-overlay-batch1.json";
import overlayBatch2 from "@/seo-manifest/uniqueness-overlay-batch2.json";
import overlayBatch3 from "@/seo-manifest/uniqueness-overlay-batch3.json";
import overlayBatch4 from "@/seo-manifest/uniqueness-overlay-batch4.json";
import overlayBatch5 from "@/seo-manifest/uniqueness-overlay-batch5.json";

/**
 * Expanded /malta/{locality}/{industry}/{service} pages that stay reachable
 * (HTTP 200, internal links intact) but are noindex,follow and omitted from
 * sitemaps. The priority cohort and any owner uniqueness overlay stay
 * indexable. Retired paths use their own reason and are not classified here.
 */
const overlayPaths = new Set<string>(
  [overlayBatch1, overlayBatch2, overlayBatch3, overlayBatch4, overlayBatch5].flatMap(
    (batch) => (batch.entries as { path: string }[]).map((entry) => entry.path),
  ),
);

export function isThinMatrixPath(path: string): boolean {
  const parts = path.split("/").filter(Boolean);
  if (parts.length !== 4 || parts[0] !== "malta") return false;
  if (isRetiredMatrixPath(path)) return false;
  if (isPriorityMatrixPath(path)) return false;
  if (overlayPaths.has(path)) return false;
  return true;
}
