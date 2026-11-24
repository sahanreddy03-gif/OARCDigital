import type { Metadata } from "next";
import ArticlePage from "@/components/blog/ArticlePage";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import article from "@/lib/blog/articles/number-one-marketing-ai-agency-malta.mt";
import { LOCALE_INFO, localeUrl, mtOnlyLanguages } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// Maltese version of /blog/number-one-marketing-ai-agency-malta. The text lives in lib/blog/articles/number-one-marketing-ai-agency-malta.mt.ts.
const URL = localeUrl("mt", article.path);
const og = { title: article.title.replace(" | OARC", ""), subtitle: article.description, eyebrow: article.kicker };

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: URL, languages: mtOnlyLanguages(article.path) },
  openGraph: { images: ogImageEntry(og), title: article.title, description: article.description, url: URL, type: "article", locale: LOCALE_INFO.mt.og },
  twitter: { images: [ogImageUrl(og)], card: "summary_large_image", title: article.title, description: article.description },
};

export default function Page() {
  return (
    <>
      <LocaleSchema
        locale="mt"
        path={article.path}
        title={article.title}
        description={article.description}
        faqs={article.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <ArticlePage article={article} />
    </>
  );
}
