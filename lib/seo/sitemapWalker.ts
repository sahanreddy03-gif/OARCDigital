/**
 * Fetch the live sitemap-index, then every child sitemap, and return
 * the deduped list of relative URL paths the site advertises to crawlers.
 *
 * Used by `scripts/audit-nap.ts` and `scripts/audit-schema.ts` so target
 * coverage scales automatically with new pages — no static TARGETS list to
 * keep in sync.
 */

const PROD_HOST = "https://oarcdigital.com";

function pathFromLoc(loc: string): string | null {
  try {
    const u = new URL(loc);
    return u.pathname || null;
  } catch {
    return null;
  }
}

function extractLocs(xml: string): string[] {
  const out: string[] = [];
  const re = /<loc>\s*([^<\s][^<]*?)\s*<\/loc>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    out.push(m[1]);
  }
  return out;
}

export async function walkSitemap(
  base: string,
): Promise<{ paths: string[]; childSitemaps: string[] }> {
  const indexRes = await fetch(`${base}/sitemap.xml`);
  if (!indexRes.ok) {
    throw new Error(`sitemap.xml fetch failed: HTTP ${indexRes.status}`);
  }
  const indexXml = await indexRes.text();
  const childUrls = extractLocs(indexXml);
  // Convert each child sitemap URL (production host) to a local path on
  // BASE so the walk runs against the local server.
  const childPaths = childUrls
    .map((u) => pathFromLoc(u))
    .filter((p): p is string => p !== null);
  // Skip the image sitemap — it lists image URLs (with `<image:image>`
  // children), not page URLs we'd want to NAP/schema-audit.
  const pageChildPaths = childPaths.filter((p) => !p.includes("image-sitemap"));
  const allUrls = new Set<string>();
  for (const child of pageChildPaths) {
    const res = await fetch(`${base}${child}`);
    if (!res.ok) continue; // tolerate single-sitemap failures
    const xml = await res.text();
    for (const loc of extractLocs(xml)) {
      const p = pathFromLoc(loc);
      if (p) allUrls.add(p);
    }
  }
  // Strip the production host from any URL that snuck through and ensure
  // every result starts with `/`. Sort for deterministic CI output.
  const paths = Array.from(allUrls)
    .map((p) => p.replace(PROD_HOST, ""))
    .filter((p) => p.startsWith("/"))
    .sort();
  return { paths, childSitemaps: pageChildPaths };
}

/**
 * Map a relative URL path back to its source-file directory under `app/`.
 * Used by audit-nap to permit Ta' Xbiex ONLY for entities that legitimately
 * originate from `lib/seo/locationData.ts`-driven pages — currently the
 * `/aeo/*` and `/malta/*` location surfaces.
 *
 * Returns the "origin tag" for a path — `location-data` for any URL whose
 * source is the locationData-driven page tree, `core` otherwise.
 */
export function originTagForPath(path: string): "location-data" | "core" {
  if (path.startsWith("/aeo/") || path.startsWith("/malta/")) {
    return "location-data";
  }
  return "core";
}
