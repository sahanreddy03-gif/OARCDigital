import { maltaIndustries } from "@/shared/seoConfig";
import {
  SITE_BASE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const entries = [
    {
      loc: `${SITE_BASE}/industries`,
      lastmod: lastmodForPath("app/industries/page.tsx"),
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    ...maltaIndustries.map((slug) => ({
      loc: `${SITE_BASE}/industries/${slug}`,
      lastmod: lastmodForPath(`app/industries/${slug}`),
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];
  return xmlResponse(urlsetXml(entries));
}
