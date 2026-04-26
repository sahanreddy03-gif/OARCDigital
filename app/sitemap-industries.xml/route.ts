import { maltaIndustries } from "@/shared/seoConfig";
import {
  SITE_BASE,
  lastmodForPath,
  lastmodForPaths,
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
    // All industry slug pages are served by the dynamic
    // `app/industries/[industry]/page.tsx` route — there are no per-slug
    // directories. Date them by the last edit to that single template plus
    // the data file that drives the slug list, so a content edit on either
    // bumps every industry URL's lastmod honestly.
    ...maltaIndustries.map((slug) => ({
      loc: `${SITE_BASE}/industries/${slug}`,
      lastmod: lastmodForPaths([
        "app/industries/[industry]/page.tsx",
        "shared/seoConfig.ts",
      ]),
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];
  return xmlResponse(urlsetXml(entries));
}
