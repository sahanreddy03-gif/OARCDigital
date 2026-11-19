import type { ReactNode } from "react";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { WaForm, WaIcon } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";
import { hasTwins, isMtOnly, localeHref, localeUrl } from "@/lib/i18n/twins";
import type { ArticleBlock, BlogArticle } from "@/lib/blog/articles/types";

// One layout for the blog articles that exist in English and Maltese. It uses the site's
// own look (the flagship system: white page, serif headlines, yellow button, black closing
// section), the same as the SEO, branding and websites pages. The text comes from
// lib/blog/articles/*.ts, so both languages share the exact same structure.

const SITE = "https://oarcdigital.com";

// Reading styles for long text. Scoped under .fs .art* so nothing else on the site changes.
const ARTICLE_CSS = `
.fs .art-hero .big{margin-left:auto;margin-right:auto;max-width:22ch;font-size:clamp(36px,5.2vw,74px);line-height:1.02}
.fs .art-hero .hsub{max-width:60ch}
.fs .art-by{margin:22px auto 0;max-width:60ch;font-size:15px;line-height:1.5;color:var(--mute)}
.fs .art-by a{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
.fs .art-cta{margin-top:30px}
.fs .art-img{display:block;width:100%;max-width:1080px;margin:0 auto;aspect-ratio:16/9;object-fit:cover;border-radius:22px}
.fs .art{padding:clamp(44px,6vw,84px) 0 clamp(64px,8vw,120px)}
.fs .art-body{max-width:760px;margin:0 auto}
.fs .art-body h2{margin:clamp(44px,5vw,68px) 0 18px;font:400 clamp(30px,3.3vw,44px)/1.06 var(--se);letter-spacing:-.018em;text-wrap:balance}
.fs .art-body h2:first-child{margin-top:0}
.fs .art-body h3{margin:36px 0 12px;font:400 clamp(24px,2.3vw,30px)/1.12 var(--se);letter-spacing:-.01em}
.fs .art-body p{margin:0 0 20px;font-size:clamp(17.5px,1.35vw,19.5px);line-height:1.62;color:var(--ink2)}
.fs .art-body ul,.fs .art-body ol{margin:0 0 26px;padding-left:1.3em;font-size:clamp(17.5px,1.35vw,19.5px);line-height:1.6;color:var(--ink2)}
.fs .art-body ul{list-style:disc}
.fs .art-body ol{list-style:decimal}
.fs .art-body li{margin:0 0 10px;padding-left:.2em}
.fs .art-body strong{font-weight:600;color:var(--ink)}
.fs .art-body a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--acc);text-decoration-thickness:2px;text-underline-offset:4px}
.fs .art-body a:hover{color:var(--acc)}
.fs .art-body p.art-note{margin:34px 0;padding:4px 0 4px 26px;border-left:4px solid var(--acc);color:var(--ink);font:400 clamp(24px,2.3vw,31px)/1.22 var(--se);letter-spacing:-.01em}
.fs .art-body ul.art-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:30px 0 36px;padding:0;list-style:none}
.fs .art-body .art-stats li{margin:0;padding:24px 22px 22px;border-radius:18px;background:var(--paper);display:flex;flex-direction:column;gap:8px}
.fs .art-stat-v{font:400 clamp(44px,4.4vw,60px)/.95 var(--se);letter-spacing:-.025em;color:var(--ink)}
.fs .art-stat-l{font-size:16px;line-height:1.4;color:var(--ink2)}
.fs .art-stat-c{margin-top:auto;padding-top:10px;border-top:1px solid var(--line);font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--mute)}
.fs .art-body .art-stat-c a{color:var(--ink);text-decoration:none}
.fs .art-body .art-stat-c a:hover{color:var(--acc)}
@media (max-width:600px){
.fs .art-body ul.art-stats{grid-template-columns:1fr 1fr;gap:8px}
.fs .art-body .art-stats li{padding:18px 14px 14px;gap:6px}
.fs .art-body .art-stats li:last-child:nth-child(odd){grid-column:1/-1}
.fs .art-stat-v{font-size:36px}
.fs .art-stat-l{font-size:14px}
.fs .art-stat-c{font-size:11px}
}
.fs .art-quote{margin:38px 0;padding:0}
.fs .art-quote blockquote{margin:0;font:400 clamp(27px,2.7vw,38px)/1.16 var(--se);letter-spacing:-.012em;color:var(--ink);text-wrap:pretty}
.fs .art-quote blockquote::before{content:"\\201C";display:block;height:.5em;font-size:1.9em;line-height:1;color:var(--acc)}
.fs .art-quote figcaption{margin-top:16px;font-size:15px;font-weight:600;color:var(--mute)}
.fs .art-body ul.art-brands{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 34px;padding:0;list-style:none}
.fs .art-body .art-brands li{margin:0;padding:9px 16px;border:1px solid var(--line);border-radius:999px;font:400 19px/1.1 var(--se);color:var(--ink)}
.fs .art-fin .lead{margin:22px auto 0;color:var(--kmute)}
.fs .art-fin .onote{justify-content:center}
`;

const FIELD: Record<"en" | "mt", string> = { en: "Your business name", mt: "Isem in-negozju tiegħek" };

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
      out.push(
        t.href.startsWith("/") ? (
          <Link key={key++} href={t.href} hrefLang={t.english ? "en" : undefined}>{m[1]}</Link>
        ) : (
          <a key={key++} href={t.href} target="_blank" rel="noopener noreferrer">{m[1]}</a>
        ),
      );
    } else {
      out.push(<strong key={key++}>{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ block, locale }: { block: ArticleBlock; locale: "en" | "mt" }) {
  if ("h2" in block) return <h2>{block.h2}</h2>;
  if ("h3" in block) return <h3>{block.h3}</h3>;
  if ("p" in block) return <p>{rich(block.p, locale)}</p>;
  if ("ul" in block) return <ul>{block.ul.map((item, i) => <li key={i}>{rich(item, locale)}</li>)}</ul>;
  if ("ol" in block) return <ol>{block.ol.map((item, i) => <li key={i}>{rich(item, locale)}</li>)}</ol>;
  if ("stats" in block)
    return (
      <ul className="art-stats">
        {block.stats.map((s) => (
          <li key={s.client + s.value}>
            <span className="art-stat-v">{s.value}</span>
            <span className="art-stat-l">{s.label}</span>
            <span className="art-stat-c">
              {s.href ? <Link href={target(s.href, locale).href} hrefLang={target(s.href, locale).english ? "en" : undefined}>{s.client}</Link> : s.client}
            </span>
          </li>
        ))}
      </ul>
    );
  if ("quote" in block)
    return (
      <figure className="art-quote">
        <blockquote lang={block.quote.lang}>{block.quote.text}</blockquote>
        <figcaption>{block.quote.credit}</figcaption>
      </figure>
    );
  if ("brands" in block) return <ul className="art-brands">{block.brands.map((b) => <li key={b}>{b}</li>)}</ul>;
  return <p className="art-note">{rich(block.note, locale)}</p>;
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

  return (
    <FlagshipShell locale={locale === "mt" ? "mt" : undefined} langPath={locale === "mt" ? article.path : undefined}>
      <style dangerouslySetInnerHTML={{ __html: ARTICLE_CSS }} />
      {locale === "mt" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}

      <article id="top">
        <section className="hero art-hero">
          <div className="wrap">
            <p className="kick">{article.kicker}</p>
            <h1 className="big" data-speakable>{article.h1}</h1>
            <p className="hsub" data-speakable data-testid="text-article-intro">{article.intro}</p>
            <p className="art-by">
              {article.byline.before}
              <Link href={home} data-testid="link-home-context">OARC Digital</Link>
              {article.byline.after}{" "}
              <Link href={other} hrefLang={locale === "en" ? "mt" : "en"} lang={locale === "en" ? "mt" : "en"} data-testid="link-article-other-language">
                {article.otherLanguageLabel}
              </Link>
            </p>
            <p className="art-cta">
              <a className="btn btn-y" href={whatsapp} target="_blank" rel="noopener noreferrer" data-testid="button-article-cta">
                <WaIcon />{article.cta.label}
              </a>
            </p>
          </div>
        </section>

        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="art-img" src={article.image.src} alt={article.image.alt} width={article.image.width} height={article.image.height} loading="eager" />
        </div>

        <section className="art">
          <div className="wrap">
            <div className="art-body">
              {article.blocks.map((block, i) => <Block key={i} block={block} locale={locale} />)}
            </div>
          </div>
        </section>

        <section className="sec paper">
          <div className="wrap">
            <h2 className="h2">{article.faqTitle}</h2>
            <div className="faq">
              {article.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="fin dark art-fin">
          <div className="wrap">
            <h2 className="h2">{article.closing.title}</h2>
            <p className="lead">{article.closing.text}</p>
            <WaForm id="article-plan" message={`${article.cta.whatsapp}{x}`} button={article.cta.label} placeholder={FIELD[locale]} label={FIELD[locale]} />
            <p className="onote">
              <Link href={contact} data-testid="link-article-contact">{article.closing.contactLabel}</Link>
            </p>
          </div>
        </section>
      </article>
    </FlagshipShell>
  );
}
