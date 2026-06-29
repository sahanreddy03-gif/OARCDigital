import { H360_PATHS, h360SourcePath } from "@/lib/seo/h360Paths";
import {
  SITE_BASE,
  DEPLOY_BASELINE,
  lastmodForPath,
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

function dateFor(entry: (typeof H360_PATHS)[number]): string {
  return lastmodForPath(h360SourcePath(entry)) || DEPLOY_BASELINE;
}

export function buildEntries(): UrlEntry[] {
  return H360_PATHS.map((entry) => ({
    loc: `${SITE_BASE}${entry.path}`,
    lastmod: dateFor(entry),
    changefreq: entry.changefreq,
    priority: entry.priority,
  }));
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
