/**
 * Single source of truth for which child sitemaps /sitemap.xml advertises,
 * and which urlset partitions cover the historical Malta matrix.
 *
 * Order follows Sahan CSV priority cohorts (own-site → malta-priority → rest).
 */
export const CHILD_SITEMAPS = [
  // Own-site priority first (CSV ranks 1–88 live in these registries)
  "sitemap-core.xml",
  "sitemap-services.xml",
  "sitemap-h360.xml",
  "sitemap-aeo.xml",
  "sitemap-industries.xml",
  "sitemap-case-studies.xml",
  "sitemap-blog.xml",
  // Malta priority cohort (≤2000; contains malta-priority-1000)
  "sitemap-malta-priority-matrix.xml",
  // Remaining historical matrix (~5350)
  "sitemap-malta-expanded-matrix.xml",
  // Parents + locality hubs
  "sitemap-malta-locations.xml",
  "sitemap-malta-location-services.xml",
  // Media
  "image-sitemap.xml",
] as const;

export type ChildSitemapName = (typeof CHILD_SITEMAPS)[number];

/** Matrix urlset partitions — priority ∪ expanded must equal full 7350 ledger. */
export const MATRIX_SITEMAP_PARTITIONS = [
  "sitemap-malta-priority-matrix.xml",
  "sitemap-malta-expanded-matrix.xml",
] as const;

export type MatrixSitemapPartition = (typeof MATRIX_SITEMAP_PARTITIONS)[number];
