import { buildEntries as buildPriorityEntries } from "@/app/sitemap-malta-priority-matrix.xml/route";
import {
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Legacy matrix sitemap URL. Now serves the priority cohort only (≤2000).
 * Full historical corpus remains live via GLOBAL_KEEP; expanded cohort is
 * available at /sitemap-malta-expanded-matrix.xml but omitted from the index.
 */
export function buildEntries(): UrlEntry[] {
  return buildPriorityEntries();
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
