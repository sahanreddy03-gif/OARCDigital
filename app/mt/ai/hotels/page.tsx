import type { Metadata } from "next";
import LocalePage from "@/components/i18n/LocalePage";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import AiSystemPageLocale from "@/components/ai-systems/i18n/AiSystemPageLocale";
import c from "@/lib/ai-systems/i18n/mt/hotels";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const LOCALE = "mt" as const;
const PATH = "/ai/hotels";
const URL = localeUrl(LOCALE, PATH);
const og = { title: c.metaTitle.replace(" | OARC Digital", ""), subtitle: c.hub.body, eyebrow: "Sistemi tal-AI" };

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
        serviceName="Sistema tal-AI għal-lukandi f'Malta"
        serviceType={c.serviceType}
        faqs={c.faq.map((f) => ({ question: f.q, answer: f.a }))}
        crumbs={[["Sistemi tal-AI", "/ai"]]}
      />
      <AiSystemPageLocale c={c} locale={LOCALE} />
    </LocalePage>
  );
}
