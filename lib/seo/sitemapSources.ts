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

const STATIC_SITEMAP_SOURCES: Record<string, string[]> = {
  "sitemap-services.xml": [
    "app/services",
    "shared/seoConfig.ts",
    "lib/seo/seoSets.ts",
  ],
  "sitemap-malta.xml": ["shared/seoConfig.ts", "lib/seo/locationData.ts"],
  "sitemap-aeo.xml": ["app/aeo"],
  "sitemap-blog.xml": ["app/blog"],
  "sitemap-case-studies.xml": ["app/case-studies"],
  "sitemap-industries.xml": ["app/industries", "shared/seoConfig.ts"],
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
