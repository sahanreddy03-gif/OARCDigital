// Computes the index sitemap.xml's per-child <lastmod> as the actual
// max(entry.lastmod) of the UrlEntry[] each child route serves. Routes are
// force-static so this runs once per build.

import type { UrlEntry } from "./sitemapHelpers";
import { DEPLOY_BASELINE } from "./sitemapHelpers";

type EntriesBuilder = () => Promise<UrlEntry[]> | UrlEntry[];

// Lazy imports so this module doesn't pull every route's deps eagerly.
const ENTRIES_BUILDERS: Record<string, () => Promise<EntriesBuilder>> = {
  "sitemap-core.xml": async () =>
    (await import("@/app/sitemap-core.xml/route")).buildEntries,
  "sitemap-services.xml": async () =>
    (await import("@/app/sitemap-services.xml/route")).buildEntries,
  "sitemap-malta.xml": async () =>
    (await import("@/app/sitemap-malta.xml/route")).buildEntries,
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
  const loader = ENTRIES_BUILDERS[name];
  if (!loader) return DEPLOY_BASELINE;
  const buildEntries = await loader();
  const entries = await buildEntries();
  return maxLastmod(entries);
}
