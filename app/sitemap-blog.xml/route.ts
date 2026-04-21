import { SITE_BASE, TODAY, urlsetXml, xmlResponse, listRouteSlugs } from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const slugs = await listRouteSlugs("app/blog");
  const entries = [
    {
      loc: `${SITE_BASE}/blog`,
      lastmod: TODAY,
      changefreq: "weekly" as const,
      priority: 0.8,
    },
    ...slugs.map((slug) => ({
      loc: `${SITE_BASE}/blog/${slug}`,
      lastmod: TODAY,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];
  return xmlResponse(urlsetXml(entries));
}
