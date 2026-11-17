import {
  SITE_BASE,
  lastmodForPaths,
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
  /** Repo path(s) used to date this URL. Defaults to the `app${path}` folder. */
  source?: string | string[];
}

export function coreSourcePath(c: CoreEntry): string[] {
  if (c.source) return Array.isArray(c.source) ? c.source : [c.source];
  return [`app${c.path === "/" ? "" : c.path}`];
}

// /voice-ai-worker/{slug} pages (except /hospitality, which has its own
// folder) are one template plus one data file; there is no per-slug folder.
const VOICE_SLUG_SOURCES = [
  "app/voice-ai-worker/[slug]",
  "app/voice-ai-worker/industry-page.tsx",
  "app/voice-ai-worker/voice-ai-worker-data.ts",
];

// Not listed here on purpose (2026-11-16 sitemap fix):
//  - /blog, /h360, /industries: their own section sitemaps list them.
//  - /our-work/{slug}, /research/{slug}, /ai-agents/{id}: sitemap-work.xml.

export const CORE: CoreEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly", source: "app/page.tsx" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/our-work", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/insights/oarc-digital-malta", priority: 0.9, changefreq: "weekly" },
  { path: "/insights/best-marketing-agencies-malta", priority: 0.8, changefreq: "weekly" },
  { path: "/research", priority: 0.7, changefreq: "weekly" },
  { path: "/tools/malta-digital-score", priority: 0.7, changefreq: "monthly" },
  { path: "/pricing", priority: 0.8, changefreq: "monthly" },
  { path: "/creative", priority: 0.9, changefreq: "weekly" },
  { path: "/ai-agents", priority: 0.9, changefreq: "weekly" },
  { path: "/ai-native-marketing-agency", priority: 0.8, changefreq: "monthly" },
  { path: "/voice-ai-worker", priority: 0.9, changefreq: "weekly" },
  { path: "/voice-ai-worker/hospitality", priority: 0.8, changefreq: "monthly" },
  { path: "/voice-ai-worker/sales", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/healthcare", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/finance-insurance", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/real-estate", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/legal", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/logistics", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/home-services", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/education", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/voice-ai-worker/government", priority: 0.8, changefreq: "monthly", source: VOICE_SLUG_SOURCES },
  { path: "/agent-economy", priority: 0.9, changefreq: "weekly" },
  { path: "/automation", priority: 0.9, changefreq: "weekly" },
  { path: "/ai", priority: 0.9, changefreq: "weekly", source: "lib/ai-systems" },
  { path: "/ai/real-estate", priority: 0.9, changefreq: "weekly", source: "lib/ai-systems/real-estate.ts" },
  { path: "/ai/law-firms", priority: 0.9, changefreq: "weekly", source: "lib/ai-systems/law-firms.ts" },
  { path: "/solutions", priority: 0.9, changefreq: "weekly" },
  { path: "/why-us", priority: 0.8, changefreq: "monthly" },
  { path: "/why-oarc", priority: 0.7, changefreq: "monthly" },
  { path: "/comparison", priority: 0.7, changefreq: "monthly" },
  { path: "/tools", priority: 0.8, changefreq: "monthly" },
  { path: "/diagnostics", priority: 0.8, changefreq: "monthly" },
  { path: "/intelligence", priority: 0.8, changefreq: "monthly" },
  // Task #116: /diagnostic 308 → /diagnostics; /roadmap 308 → /roadmap-2026.
  // Removed from sitemap so we never advertise the redirecting URL.
  { path: "/roadmap-2026", priority: 0.6, changefreq: "monthly" },
  { path: "/resources", priority: 0.6, changefreq: "monthly" },
  { path: "/press", priority: 0.6, changefreq: "monthly" },
  { path: "/videos/oarc-digital-malta-film", priority: 0.6, changefreq: "monthly" },
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
  { path: "/legal/data-deletion", priority: 0.3, changefreq: "yearly" },
  { path: "/services/mvp-development/for-software", priority: 0.7, changefreq: "monthly" },
];

// Real change date or none: no made-up fallback date.
function dateFor(c: CoreEntry): string | undefined {
  return lastmodForPaths(coreSourcePath(c));
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
