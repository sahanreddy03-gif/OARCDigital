import { aiTeamMembers } from "@/components/ai/aiAgentsData";
import { ALL_WORK_SLUGS } from "@/lib/data/premium-work/workSlugs";
import { RESEARCH } from "@/lib/research/data";
import {
  SITE_BASE,
  lastmodForPaths,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Pages generated from data arrays, built from the same arrays as each
 * route's generateStaticParams (those routes 404 any other slug):
 *   /our-work/{slug}   case studies   (app/our-work/[slug])
 *   /research/{slug}   reports        (app/research/[slug])
 *   /ai-agents/{id}    agent profiles (app/ai-agents/[agentId])
 *
 * All are 200, index,follow and self-canonical (checked live 2026-11-16).
 * Their hubs (/our-work, /research, /ai-agents) stay in sitemap-core.xml.
 *
 * lastmod: one data file feeds all pages of a section, so git can't date a
 * single slug. Each URL gets the newest change to its route, template and
 * data, which is when its rendered content last changed.
 */
const WORK_SOURCES = ["app/our-work/[slug]", "components/premium-work", "lib/data/premium-work"];
const RESEARCH_SOURCES = ["app/research/[slug]", "lib/research"];
const AGENT_SOURCES = ["app/ai-agents/[agentId]", "components/ai/aiAgentsData.ts"];

export function buildEntries(): UrlEntry[] {
  const workDate = lastmodForPaths(WORK_SOURCES);
  const researchDate = lastmodForPaths(RESEARCH_SOURCES);
  const agentDate = lastmodForPaths(AGENT_SOURCES);
  return [
    ...ALL_WORK_SLUGS.map((slug) => ({
      loc: `${SITE_BASE}/our-work/${slug}`,
      lastmod: workDate,
      changefreq: "monthly" as const,
      priority: 0.8,
    })),
    ...RESEARCH.map((r) => ({
      loc: `${SITE_BASE}/research/${r.slug}`,
      lastmod: researchDate,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
    ...aiTeamMembers.map((a) => ({
      loc: `${SITE_BASE}/ai-agents/${a.id}`,
      lastmod: agentDate,
      changefreq: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
