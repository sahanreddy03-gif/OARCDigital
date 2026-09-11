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
  const entries: UrlEntry[] = [
    {
      loc: `${SITE_BASE}/case-studies`,
      lastmod: lastmodForPath("app/case-studies/page.tsx"),
      changefreq: "monthly",
      priority: 0.8,
    },
  ];

  for (const study of caseStudiesArray) {
    entries.push({
      loc: `${SITE_BASE}/case-studies/${study.slug}`,
      lastmod: lastmodForPath(`app/case-studies/${study.slug}`),
      changefreq: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}

export async function GET() {
  return xmlResponse(urlsetXml(await buildEntries()));
}
