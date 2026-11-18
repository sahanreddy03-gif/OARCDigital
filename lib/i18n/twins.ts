// Language twins: the English pages that also exist in Italian (/it/...) and Maltese (/mt/...).
//
// This file is the ONE list. The language tags (hreflang), the language switch, the
// translated footer and sitemap-languages.xml all read it, so they cannot disagree.
//
// Rules:
// - English keeps its address. A twin is the same path with /it or /mt in front.
// - Add a path here only when BOTH app/it/<path>/page.tsx and app/mt/<path>/page.tsx exist
//   (scripts/audit-language-twins.ts checks this).
// - A page that is not listed gets nothing extra: every helper below returns "no change".

import { isTopPage } from "@/lib/seo/topPages";

export const SITE = "https://oarcdigital.com";

export type Locale = "it" | "mt";
export type AnyLocale = "en" | Locale;

export const LOCALES: readonly Locale[] = ["it", "mt"];

export const LOCALE_INFO: Record<AnyLocale, { label: string; og: string }> = {
  en: { label: "English", og: "en_GB" },
  it: { label: "Italiano", og: "it_IT" },
  mt: { label: "Malti", og: "mt_MT" },
};

/** English paths with an Italian and a Maltese twin, with the short name each footer shows. */
export const TWINS: readonly { path: string; it: string; mt: string }[] = [
  { path: "/", it: "Home", mt: "Paġna ewlenija" },
  { path: "/aeo/digital-marketing-agency-malta", it: "Marketing digitale", mt: "Marketing diġitali" },
  { path: "/aeo/seo-agency-malta", it: "SEO", mt: "SEO" },
  { path: "/aeo/web-development-agency-malta", it: "Siti web", mt: "Websajts" },
  { path: "/ai", it: "Sistemi AI", mt: "Sistemi tal-AI" },
  { path: "/ai/hotels", it: "AI per hotel", mt: "AI għal-lukandi" },
  { path: "/ai/real-estate", it: "AI per agenzie immobiliari", mt: "AI għall-proprjetà" },
  { path: "/ai/law-firms", it: "AI per studi legali", mt: "AI għad-ditti legali" },
  { path: "/ai/casinos", it: "Casinò", mt: "Każinojiet" },
  { path: "/h360", it: "H360 per ristoranti", mt: "H360 għar-ristoranti" },
  { path: "/contact", it: "Contatti", mt: "Ikkuntattjana" },
];

const TWIN_SET = new Set(TWINS.map((t) => t.path));

export function hasTwins(path: string): boolean {
  return TWIN_SET.has(path);
}

/** Site-relative address of a page in one language. `localeHref("it", "/")` is "/it". */
export function localeHref(locale: AnyLocale, path: string): string {
  if (locale === "en") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Full address. The homepage has no trailing slash, the same as the English canonical. */
export function localeUrl(locale: AnyLocale, path: string): string {
  const href = localeHref(locale, path);
  return href === "/" ? SITE : `${SITE}${href}`;
}

/**
 * The extra hreflang entries for a page with twins, or `undefined` when it has none.
 * Spread it into `alternates.languages` next to whatever the page already emits.
 */
export function twinLanguageExtras(path: string): Record<string, string> | undefined {
  if (!hasTwins(path)) return undefined;
  return { it: localeUrl("it", path), mt: localeUrl("mt", path) };
}

/**
 * The complete hreflang set for one twin group. English, Italian and Maltese pages of the
 * same group must all emit exactly this, or search engines ignore the tags.
 */
export function twinLanguages(path: string): Record<string, string> | undefined {
  const extras = twinLanguageExtras(path);
  if (!extras) return undefined;
  const en = localeUrl("en", path);
  // Top pages already announce English for Malta and the UK; the rest announce plain English.
  const english: Record<string, string> = isTopPage(path) ? { "en-MT": en, "en-GB": en } : { en };
  return { ...english, ...extras, "x-default": en };
}

/** `metadata.alternates` for a translated page: it is its own canonical. */
export function localeAlternates(locale: Locale, path: string) {
  return { canonical: localeUrl(locale, path), languages: twinLanguages(path) };
}
