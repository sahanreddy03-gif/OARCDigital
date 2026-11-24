import type { Metadata } from "next";
import ArticlePage from "@/components/blog/ArticlePage";
import RouteSchema from "@/components/RouteSchema";
import article from "@/lib/blog/articles/number-one-marketing-ai-agency-malta.en";
import { mtOnlyLanguages } from "@/lib/i18n/twins";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const URL = `https://oarcdigital.com${article.path}`;
const og = { title: article.title.replace(" | OARC", ""), subtitle: article.description, eyebrow: article.kicker };

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  // The same article exists in Maltese at /mt + this path.
  alternates: { canonical: URL, languages: mtOnlyLanguages(article.path) },
  openGraph: { images: ogImageEntry(og), title: article.title, description: article.description, url: URL, type: "article" },
  twitter: { images: [ogImageUrl(og)], card: "summary_large_image", title: article.title, description: article.description },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path={article.path}
        title={article.title}
        description={article.description}
        datePublished={article.published}
        dateModified={article.updated}
        image={`https://oarcdigital.com${article.image.src}`}
        faqs={article.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <ArticlePage article={article} />
    </>
  );
}
