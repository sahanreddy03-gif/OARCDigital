import exclusions from "@/seo-manifest/sitemap-matrix-exclusions.json";

/**
 * Matrix pages (/malta/{location}/{industry}/{service}) that the owner
 * retired from Google on 2026-11-09: zero impressions in 16 months.
 * They still return 200 (proxy keep rules are unchanged) but render
 * noindex,follow and are dropped from the matrix sitemaps.
 * Source of truth: seo-manifest/sitemap-matrix-exclusions.json.
 */
const retired = new Set<string>((exclusions as { paths: string[] }).paths);

export const RETIRED_MATRIX_COUNT = retired.size;

export function isRetiredMatrixPath(path: string): boolean {
  return retired.has(path);
}
