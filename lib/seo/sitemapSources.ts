// Computes the index sitemap.xml's per-child <lastmod>: the newest of the
// entries' own lastmods and the date the child's URL list last changed (its
// route file, plus extra list sources such as the matrix exclusions ledger).
// Routes are force-static so this runs once per build. No date -> omitted.

import type { UrlEntry } from "./sitemapHelpers";
import { lastmodForPaths } from "./sitemapHelpers";
import { MATRIX_SITEMAP_PARTITIONS } from "./sitemapIndexConfig";

type EntriesBuilder = () => Promise<UrlEntry[]> | UrlEntry[];

// Lazy imports so this module doesn't pull every route's deps eagerly.
const ENTRIES_BUILDERS: Record<string, () => Promise<EntriesBuilder>> = {
  "sitemap-core.xml": async () =>
    (await import("@/app/sitemap-core.xml/route")).buildEntries,
  "sitemap-h360.xml": async () =>
    (await import("@/app/sitemap-h360.xml/route")).buildEntries,
  "sitemap-languages.xml": async () =>
    (await import("@/app/sitemap-languages.xml/route")).buildEntries,
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
  "sitemap-aeo.xml": async () =>
    (await import("@/app/sitemap-aeo.xml/route")).buildEntries,
  "sitemap-blog.xml": async () =>
    (await import("@/app/sitemap-blog.xml/route")).buildEntries,
  "sitemap-work.xml": async () =>
    (await import("@/app/sitemap-work.xml/route")).buildEntries,
};

// Files (besides app/<name>/route.ts) that decide which URLs a child lists.
// The 2026-11-09 retirement of 3,525 matrix URLs only touched the ledger.
const LIST_SOURCES: Record<string, string[]> = {
  "sitemap-languages.xml": ["lib/i18n/twins.ts"],
  "sitemap-malta-priority-matrix.xml": [
    "seo-manifest/sitemap-matrix-exclusions.json",
    "lib/seo/maltaMatrixCohorts.ts",
  ],
  "sitemap-malta-expanded-matrix.xml": [
    "seo-manifest/sitemap-matrix-exclusions.json",
    "lib/seo/maltaMatrixCohorts.ts",
  ],
};

function listChangedAt(name: string): string | undefined {
  return lastmodForPaths([`app/${name}/route.ts`, ...(LIST_SOURCES[name] ?? [])]);
}

function newest(...dates: (string | undefined)[]): string | undefined {
  let max: string | undefined;
  for (const d of dates) if (d && (!max || d > max)) max = d;
  return max;
}

function maxLastmod(entries: UrlEntry[]): string | undefined {
  return newest(...entries.map((e) => e.lastmod));
}

export async function getSitemapLastmod(name: string): Promise<string | undefined> {
  if (name === "image-sitemap.xml") {
    const { buildLastmod } = await import("@/app/image-sitemap.xml/route");
    return newest(buildLastmod(), listChangedAt(name));
  }
  // Avoid recursion when legacy matrix index asks for partition lastmods.
  if (name === "sitemap-malta-matrix.xml") {
    const dates = await Promise.all(
      MATRIX_SITEMAP_PARTITIONS.map((part) => getSitemapLastmod(part)),
    );
    return newest(...dates);
  }
  const loader = ENTRIES_BUILDERS[name];
  if (!loader) return listChangedAt(name);
  const buildEntries = await loader();
  const entries = await buildEntries();
  return newest(maxLastmod(entries), listChangedAt(name));
}
