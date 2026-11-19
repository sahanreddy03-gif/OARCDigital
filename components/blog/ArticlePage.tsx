import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import LocalePage from "@/components/i18n/LocalePage";
import { NAP } from "@/lib/seo/nap";
import { hasTwins, isMtOnly, localeHref, localeUrl } from "@/lib/i18n/twins";
import type { ArticleBlock, BlogArticle } from "@/lib/blog/articles/types";

// One layout for the blog articles that exist in English and Maltese. It keeps the look of
// the older blog posts (dark header, orange accent, one readable column). The content comes
// from lib/blog/articles/*.ts, so both languages share the exact same structure.

const SITE = "https://oarcdigital.com";

/** Where an internal ENGLISH path should point for this article's language. */
function target(href: string, locale: "en" | "mt"): { href: string; english: boolean } {
  if (!href.startsWith("/")) return { href, english: false };
  if (locale === "en") return { href, english: false };
  const [path, hash = ""] = href.split("#");
  if (hasTwins(path) || isMtOnly(path)) return { href: localeHref("mt", path) + (hash ? `#${hash}` : ""), english: false };
  return { href, english: true };
}

/** Turns `[label](/path)` and `**bold**` into links and bold text. */
function rich(text: string, locale: "en" | "mt"): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const t = target(m[2], locale);
      const cls = "text-[#c2410c] underline underline-offset-4 hover:text-[#9a3412]";
      out.push(
        t.href.startsWith("/") ? (
          <Link key={key++} href={t.href} className={cls} hrefLang={t.english ? "en" : undefined}>{m[1]}</Link>
        ) : (
          <a key={key++} href={t.href} className={cls} target="_blank" rel="noopener noreferrer">{m[1]}</a>
        ),
      );
    } else {
      out.push(<strong key={key++} className="font-semibold text-gray-900">{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ block, locale }: { block: ArticleBlock; locale: "en" | "mt" }) {
  if ("h2" in block) return <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">{block.h2}</h2>;
  if ("h3" in block) return <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">{block.h3}</h3>;
  if ("p" in block) return <p className="text-gray-700 mb-6 text-lg leading-relaxed">{rich(block.p, locale)}</p>;
  if ("ul" in block) {
    return (
      <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 text-lg">
        {block.ul.map((item, i) => <li key={i}>{rich(item, locale)}</li>)}
      </ul>
    );
  }
  if ("ol" in block) {
    return (
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700 text-lg">
        {block.ol.map((item, i) => <li key={i}>{rich(item, locale)}</li>)}
      </ol>
    );
  }
  return (
    <p className="mb-8 rounded-xl border-l-4 border-[#ff914d] bg-orange-50 px-6 py-5 text-lg font-medium leading-relaxed text-gray-900">
      {rich(block.note, locale)}
    </p>
  );
}

export default function ArticlePage({ article }: { article: BlogArticle }) {
  const { locale } = article;
  const url = localeUrl(locale, article.path);
  const home = localeHref(locale, "/");
  const contact = localeHref(locale, "/contact");
  const other = locale === "en" ? localeHref("mt", article.path) : article.path;
  const whatsapp = `https://wa.me/${NAP.whatsappNumber}?text=${encodeURIComponent(article.cta.whatsapp)}`;

  // English articles get their Article and FAQ schema from RouteSchema in page.tsx, and
  // Maltese ones get their question list from LocaleSchema. This adds the Article node
  // for Maltese only.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.h1,
    description: article.description,
    inLanguage: locale,
    image: [`${SITE}${article.image.src}`],
    mainEntityOfPage: url,
    author: { "@type": "Organization", "@id": `${SITE}/#organization`, name: NAP.name, url: SITE },
    publisher: { "@type": "Organization", "@id": `${SITE}/#organization`, name: NAP.name, logo: { "@type": "ImageObject", url: `${SITE}/oarc-logo.png` } },
    datePublished: article.published,
    dateModified: article.updated,
  };
  const body = (
    <div className="min-h-screen bg-white">
      {locale === "mt" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">{article.kicker}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-speakable>{article.h1}</h1>
          <p className="text-xl text-gray-300 mb-8" data-speakable data-testid="text-article-intro">{article.intro}</p>
          <p className="text-sm text-gray-400 -mt-4 mb-8">
            {article.byline.before}
            <Link href={home} className="text-white underline underline-offset-4 hover:text-orange-400" data-testid="link-home-context">OARC Digital</Link>
            {article.byline.after}{" "}
            <Link href={other} hrefLang={locale === "en" ? "mt" : "en"} lang={locale === "en" ? "mt" : "en"} className="text-white underline underline-offset-4 hover:text-orange-400" data-testid="link-article-other-language">
              {article.otherLanguageLabel}
            </Link>
          </p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors" data-testid="button-article-cta">
            {article.cta.label}
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image.src} alt={article.image.alt} width={article.image.width} height={article.image.height} loading="eager" className="mb-12 w-full rounded-2xl object-cover" style={{ aspectRatio: "16 / 9" }} />

        {article.blocks.map((block, i) => <Block key={i} block={block} locale={locale} />)}

        <div className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{article.faqTitle}</h2>
          <div className="space-y-6">
            {article.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">{article.closing.title}</h2>
          <p className="text-lg text-gray-300 mb-8">{article.closing.text}</p>
          <div className="flex flex-wrap gap-4">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors" data-testid="button-article-cta-bottom">
              {article.cta.label}
            </a>
            <Link href={contact} className="inline-block rounded-lg border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10" data-testid="link-article-contact">
              {article.closing.contactLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  if (locale === "mt") return <LocalePage locale="mt" path={article.path}>{body}</LocalePage>;
  return <Layout>{body}</Layout>;
}
