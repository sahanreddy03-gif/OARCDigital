// Computes the index sitemap.xml's per-child <lastmod> as the actual
// max(entry.lastmod) of the UrlEntry[] each child route serves. Routes are
// force-static so this runs once per build.

import type { UrlEntry } from "./sitemapHelpers";
import { DEPLOY_BASELINE } from "./sitemapHelpers";
import { MATRIX_SITEMAP_PARTITIONS } from "./sitemapIndexConfig";

type EntriesBuilder = () => Promise<UrlEntry[]> | UrlEntry[];

// Lazy imports so this module doesn't pull every route's deps eagerly.
const ENTRIES_BUILDERS: Record<string, () => Promise<EntriesBuilder>> = {
  "sitemap-core.xml": async () =>
    (await import("@/app/sitemap-core.xml/route")).buildEntries,
  "sitemap-h360.xml": async () =>
    (await import("@/app/sitemap-h360.xml/route")).buildEntries,
  "sitemap-services.xml": async () =>
    (await import("@/app/sitemap-services.xml/route")).buildEntries,
  "sitemap-malta-locations.xml": async () =>
    (await import("@/app/sitemap-malta-locations.xml/route")).buildEntries,
  "sitemap-malta-location-services.xml": async () =>
    (await import("@/app/sitemap-malta-location-services.xml/route")).buildEntries,
  "sitemap-malta-priority-matrix.xml": async () =>
    (await import("@/app/sitemap-malta-priority-matrix.xml/route")).buildEntries,
  "sitemap-malta-expanded-matrix.xml": async () =>
    (await import("@/app/sitemap-malta-expanded-matrix.xml/route")).buildEntries,
  // Legacy aliases (not in primary index): combined malta discovery + matrix index helper.
  "sitemap-malta.xml": async () =>
    (await import("@/app/sitemap-malta.xml/route")).buildEntries,
  // buildEntries = priority∪expanded for guards; GET serves a sitemap index.
  "sitemap-malta-matrix.xml": async () =>
    (await import("@/app/sitemap-malta-matrix.xml/route")).buildEntries,
  "sitemap-industries.xml": async () =>
    (await import("@/app/sitemap-industries.xml/route")).buildEntries,
  "sitemap-case-studies.xml": async () =>
    (await import("@/app/sitemap-case-studies.xml/route")).buildEntries,
  "sitemap-aeo.xml": async () =>
    (await import("@/app/sitemap-aeo.xml/route")).buildEntries,
  "sitemap-blog.xml": async () =>
    (await import("@/app/sitemap-blog.xml/route")).buildEntries,
};

function maxLastmod(entries: UrlEntry[]): string {
  let max = "";
  for (const e of entries) {
    if (e.lastmod && e.lastmod > max) max = e.lastmod;
  }
  return max || DEPLOY_BASELINE;
}

export async function getSitemapLastmod(name: string): Promise<string> {
  if (name === "image-sitemap.xml") {
    const { buildLastmod } = await import("@/app/image-sitemap.xml/route");
    return buildLastmod() || DEPLOY_BASELINE;
  }
  // Avoid recursion when legacy matrix index asks for partition lastmods.
  if (name === "sitemap-malta-matrix.xml") {
    const dates = await Promise.all(
      MATRIX_SITEMAP_PARTITIONS.map((part) => getSitemapLastmod(part)),
    );
    return dates.reduce((a, b) => (a > b ? a : b), DEPLOY_BASELINE);
  }
  const loader = ENTRIES_BUILDERS[name];
  if (!loader) return DEPLOY_BASELINE;
  const buildEntries = await loader();
  const entries = await buildEntries();
  return maxLastmod(entries);
}
