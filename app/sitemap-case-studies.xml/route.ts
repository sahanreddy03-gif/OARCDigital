import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";
import { caseStudiesArray } from "@/data/caseStudies";

export const dynamic = "force-static";
export const revalidate = false;

// Exported so lib/seo/sitemapSources.ts derives the index lastmod from
// the same entries the GET handler serves.
export async function buildEntries(): Promise<UrlEntry[]> {
  return caseStudiesArray.map((study) => ({
    loc: `${SITE_BASE}/case-studies/${study.slug}`,
    lastmod: lastmodForPath(`app/case-studies/${study.slug}`),
    changefreq: "monthly" as const,
    priority: 0.7,
  }));
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
