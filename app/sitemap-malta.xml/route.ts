import { maltaLocations, maltaIndustries, locationServices } from "@/shared/seoConfig";
import { SITE_BASE, TODAY, urlsetXml, xmlResponse, type UrlEntry } from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const entries: UrlEntry[] = [];

  for (const loc of maltaLocations) {
    entries.push({
      loc: `${SITE_BASE}/malta/${loc}`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: 0.8,
    });
    for (const svc of locationServices) {
      entries.push({
        loc: `${SITE_BASE}/malta/${loc}/${svc}`,
        lastmod: TODAY,
        changefreq: "monthly",
        priority: 0.7,
      });
      for (const ind of maltaIndustries) {
        entries.push({
          loc: `${SITE_BASE}/malta/${loc}/${ind}/${svc}`,
          lastmod: TODAY,
          changefreq: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return xmlResponse(urlsetXml(entries));
}
