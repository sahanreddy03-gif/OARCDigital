import { SITE_BASE, TODAY, urlsetXml, xmlResponse, type UrlEntry } from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

const CORE: { path: string; priority: number; changefreq: UrlEntry["changefreq"] }[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/our-work", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
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
  { path: "/diagnostic", priority: 0.7, changefreq: "monthly" },
  { path: "/industries", priority: 0.8, changefreq: "monthly" },
  { path: "/enterprise", priority: 0.7, changefreq: "monthly" },
  { path: "/roadmap", priority: 0.6, changefreq: "monthly" },
  { path: "/roadmap-2026", priority: 0.6, changefreq: "monthly" },
  { path: "/resources", priority: 0.6, changefreq: "monthly" },
  { path: "/pdf-hub", priority: 0.6, changefreq: "monthly" },
  { path: "/pdf/company-profile", priority: 0.5, changefreq: "monthly" },
  { path: "/pdf/one-pager", priority: 0.5, changefreq: "monthly" },
  { path: "/pdf/capabilities-deck", priority: 0.5, changefreq: "monthly" },
  { path: "/pdf/ai-creative-profile", priority: 0.5, changefreq: "monthly" },
  { path: "/legal/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/legal/cookie-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/legal/terms-conditions", priority: 0.3, changefreq: "yearly" },
];

export async function GET() {
  const entries: UrlEntry[] = CORE.map((c) => ({
    loc: `${SITE_BASE}${c.path}`,
    lastmod: TODAY,
    changefreq: c.changefreq,
    priority: c.priority,
  }));
  return xmlResponse(urlsetXml(entries));
}
