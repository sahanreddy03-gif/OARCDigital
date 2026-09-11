import { buildEntries as buildLocationEntries } from "@/app/sitemap-malta-locations.xml/route";
import { buildEntries as buildLocationServiceEntries } from "@/app/sitemap-malta-location-services.xml/route";
import {
  urlsetXml,
  xmlResponse,
  type UrlEntry,
} from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Legacy combined Malta discovery sitemap (hubs + location-services).
 * Not listed in sitemap index — prefer the split cohort sitemaps.
 * Kept so older Search Console submissions do not 404.
 */
export function buildEntries(): UrlEntry[] {
  return [...buildLocationEntries(), ...buildLocationServiceEntries()];
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
