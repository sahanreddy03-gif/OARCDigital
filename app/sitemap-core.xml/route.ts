import {
  SITE_BASE,
  DEPLOY_BASELINE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

// Exported so `lib/seo/sitemapSources.ts` can derive the index `lastmod` for
// /sitemap-core.xml from the actual underlying page sources, not just the
// route file itself.
export interface CoreEntry {
  path: string;
  priority: number;
  changefreq: UrlEntry["changefreq"];
  /** Repo path used to date this URL. Defaults to `app${path}/page.tsx`. */
  source?: string;
}

export function coreSourcePath(c: CoreEntry): string {
  return c.source ?? `app${c.path === "/" ? "" : c.path}`;
}

export const CORE: CoreEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly", source: "app/page.tsx" },
  { path: "/h360", priority: 0.9, changefreq: "weekly" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/our-work", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  { path: "/research", priority: 0.7, changefreq: "weekly" },
  { path: "/tools/malta-digital-score", priority: 0.7, changefreq: "monthly" },
  { path: "/pricing", priority: 0.8, changefreq: "monthly" },
  { path: "/creative", priority: 0.9, changefreq: "weekly" },
  { path: "/ai-agents", priority: 0.9, changefreq: "weekly" },
  { path: "/automation", priority: 0.9, changefreq: "weekly" },
  { path: "/solutions", priority: 0.8, changefreq: "monthly" },
  { path: "/why-us", priority: 0.8, changefreq: "monthly" },
  { path: "/why-oarc", priority: 0.7, changefreq: "monthly" },
  { path: "/comparison", priority: 0.7, changefreq: "monthly" },
  { path: "/tools", priority: 0.8, changefreq: "monthly" },
  { path: "/diagnostics", priority: 0.8, changefreq: "monthly" },
  { path: "/intelligence", priority: 0.8, changefreq: "monthly" },
  // Task #116: /diagnostic 308 → /diagnostics; /roadmap 308 → /roadmap-2026.
  // Removed from sitemap so we never advertise the redirecting URL.
  { path: "/industries", priority: 0.8, changefreq: "monthly" },
  { path: "/enterprise", priority: 0.7, changefreq: "monthly" },
  { path: "/roadmap-2026", priority: 0.6, changefreq: "monthly" },
  { path: "/resources", priority: 0.6, changefreq: "monthly" },
  { path: "/pdf-hub", priority: 0.6, changefreq: "monthly" },
  { path: "/lp", priority: 0.65, changefreq: "monthly", source: "app/lp/page.tsx" },
  { path: "/lp/ai-tips-marketers-guide", priority: 0.65, changefreq: "monthly", source: "app/lp/ai-tips-marketers-guide/page.tsx" },
  { path: "/lp/ai-adoption-guide", priority: 0.65, changefreq: "monthly", source: "app/lp/ai-adoption-guide/page.tsx" },
  { path: "/lp/the-no-hype-ai-report", priority: 0.65, changefreq: "monthly", source: "app/lp/the-no-hype-ai-report/page.tsx" },
  { path: "/pdf/company-profile", priority: 0.5, changefreq: "monthly" },
  { path: "/pdf/one-pager", priority: 0.5, changefreq: "monthly" },
  { path: "/pdf/capabilities-deck", priority: 0.5, changefreq: "monthly" },
  { path: "/pdf/ai-creative-profile", priority: 0.5, changefreq: "monthly" },
  { path: "/legal/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/legal/cookie-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/legal/terms-conditions", priority: 0.3, changefreq: "yearly" },
];

function dateFor(c: CoreEntry): string {
  const date = lastmodForPath(coreSourcePath(c));
  // If the directory exists but has no git history (rare), fall back to the
  // baseline rather than emitting nothing.
  return date || DEPLOY_BASELINE;
}

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export function buildEntries(): UrlEntry[] {
  return CORE.map((c) => ({
    loc: `${SITE_BASE}${c.path}`,
    lastmod: dateFor(c),
    changefreq: c.changefreq,
    priority: c.priority,
  }));
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
