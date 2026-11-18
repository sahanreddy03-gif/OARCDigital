import type { Metadata } from "next";
import LocalePage from "@/components/i18n/LocalePage";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import AiSystemPageLocale from "@/components/ai-systems/i18n/AiSystemPageLocale";
import c from "@/lib/ai-systems/i18n/it/law-firms";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const LOCALE = "it" as const;
const PATH = "/ai/law-firms";
const URL = localeUrl(LOCALE, PATH);
const og = { title: c.metaTitle.replace(" | OARC Digital", ""), subtitle: c.hub.body, eyebrow: "Sistemi AI" };

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: localeAlternates(LOCALE, PATH),
  openGraph: { images: ogImageEntry(og), title: c.metaTitle, description: c.metaDescription, url: URL, type: "website", locale: LOCALE_INFO[LOCALE].og },
  twitter: { images: [ogImageUrl(og)], card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
};

export default function Page() {
  return (
    <LocalePage locale={LOCALE} path={PATH} navTheme="dark">
      <LocaleSchema
        locale={LOCALE}
        path={PATH}
        title={c.metaTitle}
        description={c.schemaDescription}
        serviceName="Sistema AI per studi legali a Malta"
        serviceType={c.serviceType}
        faqs={c.faq.map((f) => ({ question: f.q, answer: f.a }))}
        crumbs={[["Sistemi AI", "/ai"]]}
      />
      <AiSystemPageLocale c={c} locale={LOCALE} />
    </LocalePage>
  );
}
