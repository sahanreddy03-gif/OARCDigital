import { LOCALES, TWINS, localeHref, localeUrl, type Locale } from "@/lib/i18n/twins";
import { lastmodForPath, urlsetXml, xmlResponse, type UrlEntry } from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

// Italian and Maltese twins of the English pages listed in lib/i18n/twins.ts.
// English addresses are NOT repeated here: they stay in their own sitemaps.

function sourcePath(locale: Locale, path: string): string {
  const href = localeHref(locale, path);
  return `app${href}/page.tsx`;
}

export function buildEntries(): UrlEntry[] {
  return LOCALES.flatMap((locale) =>
    TWINS.map((twin) => ({
      loc: localeUrl(locale, twin.path),
      // Real change date or none: no made-up fallback date.
      lastmod: lastmodForPath(sourcePath(locale, twin.path)),
      changefreq: "monthly" as const,
      priority: twin.path === "/" ? 0.8 : 0.6,
    })),
  );
}

export async function GET() {
  return xmlResponse(urlsetXml(buildEntries()));
}
