import { NAP } from "@/lib/seo/nap";
import { SITE, localeUrl, type Locale } from "@/lib/i18n/twins";

const HOME_NAME: Record<Locale, string> = { it: "OARC Digital", mt: "OARC Digital" };

export type LocaleFaq = { question: string; answer: string };

/**
 * Structured data for a translated page. Every node says which language it is in
 * (`inLanguage`), and the company node points at the one organisation the English site
 * already declares, so search engines and AI tools see one company in three languages.
 */
export default function LocaleSchema({
  locale,
  path,
  title,
  description,
  serviceName,
  serviceType,
  faqs,
  crumbs = [],
}: {
  locale: Locale;
  /** The ENGLISH path of this page, for example "/ai/hotels". */
  path: string;
  title: string;
  description: string;
  /** Leave out on pages that are not one service (home, contact). */
  serviceName?: string;
  serviceType?: string;
  faqs?: readonly LocaleFaq[];
  /** Steps between the home page and this page, as [name, ENGLISH path]. */
  crumbs?: readonly (readonly [string, string])[];
}) {
  const url = localeUrl(locale, path);
  const home = localeUrl(locale, "/");
  const org = { "@type": "Organization", "@id": `${SITE}/#organization`, name: NAP.name, url: SITE };

  const trail: (readonly [string, string])[] = [[HOME_NAME[locale], home], ...crumbs.map(([n, p]) => [n, localeUrl(locale, p)] as const)];
  if (path !== "/") trail.push([title.split(" | ")[0], url]);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: NAP.name },
      about: org,
      translationOfWork: { "@type": "WebPage", "@id": localeUrl("en", path), inLanguage: "en" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: trail.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
    },
  ];

  if (serviceName) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: serviceName,
      ...(serviceType ? { serviceType } : {}),
      description,
      url,
      inLanguage: locale,
      areaServed: { "@type": "Country", name: "Malta" },
      provider: org,
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: locale,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
