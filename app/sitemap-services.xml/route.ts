import { allServiceSlugs } from "@/shared/seoConfig";
import { SITE_BASE, TODAY, urlsetXml, xmlResponse, listRouteSlugs } from "@/lib/seo/sitemapHelpers";
import { REDIRECTING_SERVICE_SLUGS } from "@/lib/seo/seoSets";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const fsSlugs = await listRouteSlugs("app/services");
  const set = new Set<string>([...allServiceSlugs, ...fsSlugs]);
  // Drop slugs that the middleware permanently redirects away — they
  // should not advertise themselves to Google as canonical URLs.
  for (const slug of REDIRECTING_SERVICE_SLUGS) set.delete(slug);
  const entries = Array.from(set)
    .sort()
    .map((slug) => ({
      loc: `${SITE_BASE}/services/${slug}`,
      lastmod: TODAY,
      changefreq: "weekly" as const,
      priority: 0.8,
    }));
  return xmlResponse(urlsetXml(entries));
}
