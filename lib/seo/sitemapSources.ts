/**
 * Per-sitemap source-path declarations. Each child sitemap declares which
 * repo-relative paths represent the source-of-truth for the URLs it lists,
 * so the index sitemap can compute an honest `lastmod` per child as the
 * max date across those paths.
 *
 * Used by `app/sitemap.xml/route.ts`. Per-URL `lastmod` inside each child
 * sitemap is computed from the URL's own source path (e.g. for
 * `/services/seo-services` the source is `app/services/seo-services`).
 *
 * For `sitemap-core.xml` we derive sources from the actual `CORE` array in
 * the route file rather than hard-coding paths here, so changes to the
 * core URL list automatically flow into the index `lastmod` calculation
 * without a separate edit.
 */

import { lastmodForPath, lastmodForPaths } from "./sitemapHelpers";
import { CORE, coreSourcePath } from "@/app/sitemap-core.xml/route";

// Source paths MUST be a SUPERSET of every path the corresponding child
// sitemap route uses for its per-URL `lastmod` calls. This guarantees that
// `getSitemapLastmod(name)` returns the maximum date present in the child,
// so the index `lastmod` is honest (== max(children)).
const STATIC_SITEMAP_SOURCES: Record<string, string[]> = {
  "sitemap-services.xml": [
    "app/services",
    "shared/seoConfig.ts",
    "lib/seo/seoSets.ts",
  ],
  // Mirrors `MALTA_SOURCES` in app/sitemap-malta.xml/route.ts.
  "sitemap-malta.xml": [
    "shared/seoConfig.ts",
    "lib/seo/locationData.ts",
    "app/malta",
  ],
  "sitemap-aeo.xml": ["app/aeo"],
  "sitemap-blog.xml": ["app/blog"],
  "sitemap-case-studies.xml": ["app/case-studies"],
  // Mirrors what app/sitemap-industries.xml/route.ts dates from: the
  // listing page, the dynamic [industry] template, and the slug data.
  "sitemap-industries.xml": [
    "app/industries/page.tsx",
    "app/industries/[industry]/page.tsx",
    "shared/seoConfig.ts",
  ],
  "image-sitemap.xml": [
    "public/assets",
    "public/agents",
    "public/media",
    "public/static",
  ],
};

function coreSourcePaths(): string[] {
  return CORE.map((c) => coreSourcePath(c));
}

export function getSitemapLastmod(name: string): string {
  if (name === "sitemap-core.xml") {
    return lastmodForPaths(coreSourcePaths());
  }
  const paths = STATIC_SITEMAP_SOURCES[name];
  if (!paths) return lastmodForPath(`app/${name}/route.ts`);
  return lastmodForPaths(paths);
}

export const SITEMAP_SOURCES: Record<string, string[] | (() => string[])> = {
  "sitemap-core.xml": coreSourcePaths,
  ...STATIC_SITEMAP_SOURCES,
};
