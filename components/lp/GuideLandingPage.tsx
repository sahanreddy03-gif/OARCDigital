import Image from 'next/image';
import Link from 'next/link';
import RouteSchema from '@/components/RouteSchema';
import { SpeakableJsonLd, getHreflangAlternates } from '@/lib/seo/discoveryTags';
import { ogImageEntry, ogImageUrl } from '@/lib/seo/ogImageUrl';
import type { GuideContent } from '@/lib/lp/guidesContent';
import GuideLeadForm from './GuideLeadForm';
import LpMinimalFooter from './LpMinimalFooter';
import LpMinimalHeader from './LpMinimalHeader';

export function guideMetadata(guide: GuideContent) {
  return {
    alternates: getHreflangAlternates(guide.path),
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://oarcdigital.com${guide.path}`,
      type: 'article' as const,
      images: ogImageEntry({ title: guide.metaTitle, subtitle: guide.metaDescription }),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [ogImageUrl({ title: guide.metaTitle, subtitle: guide.metaDescription })],
    },
  };
}

export default function GuideLandingPage({ guide }: { guide: GuideContent }) {
  const faqs = [{ question: guide.gate2Question, answer: guide.gate2Answer }, ...guide.faqs];

  return (
    <>
      <SpeakableJsonLd path={guide.path} />
      <RouteSchema
        type="article"
        path={guide.path}
        title={guide.metaTitle}
        description={guide.metaDescription}
        datePublished="2026-07-05"
        faqs={faqs}
      />
      <LpMinimalHeader />
      <main className="lp-main">
        {/* Hero */}
        <section className="lp-hero">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              {guide.heroEyebrow && <p className="lp-eyebrow">{guide.heroEyebrow}</p>}
              <h1 className="lp-h1">
                {guide.h1} <span className="lp-serif">{guide.h1Serif}</span>
              </h1>
              <p className="lp-lead" data-speakable>
                {guide.heroSub}
              </p>
              <a href="#lp-get-guide" className="lp-cta">
                {guide.ctaLabel}
              </a>
            </div>
            <div className="lp-hero-media">
              <Image src={guide.heroImage} alt={guide.heroImageAlt} width={640} height={480} priority className="lp-hero-img" />
            </div>
          </div>
        </section>

        {/* Thumbnail tips */}
        <section className="lp-section lp-section-tint">
          <div className="lp-container lp-narrow">
            <h2 className="lp-h2">Skim the highlights</h2>
            <ul className="lp-thumb-list">
              {guide.thumbnailTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Content sections */}
        {guide.sections.map((sec) => (
          <section key={sec.eyebrow} className="lp-section">
            <div className="lp-container lp-split">
              <div>
                <p className="lp-eyebrow">{sec.eyebrow}</p>
                <h2 className="lp-h2">{sec.title}</h2>
                {sec.subtitle && (
                  <p className="lp-body" data-speakable>
                    {sec.subtitle}
                  </p>
                )}
              </div>
              {sec.bullets && (
                <ul className="lp-bullets">
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lp-container lp-center">
              <a href="#lp-get-guide" className="lp-cta">
                {guide.ctaLabel}
              </a>
            </div>
          </section>
        ))}

        {/* Stats */}
        {guide.stats && (
          <section className="lp-section lp-section-dark">
            <div className="lp-container">
              <p className="lp-eyebrow lp-eyebrow-light">OARC DIGITAL · MALTA</p>
              <div className="lp-stats">
                {guide.stats.map((s) => (
                  <div key={s.label} className="lp-stat">
                    <div className="lp-stat-value">{s.value}</div>
                    <div className="lp-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Form */}
        <section id="lp-get-guide" className="lp-section lp-form-section">
          <div className="lp-container lp-form-grid">
            <div>
              <p className="lp-eyebrow">GET ACCESS</p>
              <h2 className="lp-h2">{guide.formTitle}</h2>
              <p className="lp-body">{guide.formSubtitle}</p>
            </div>
            <GuideLeadForm leadName={guide.leadName} ctaLabel={guide.ctaLabel} />
          </div>
        </section>

        {/* FAQ */}
        <section className="lp-section lp-section-tint" id="product-faq">
          <div className="lp-container lp-narrow">
            <h2 className="lp-h2">Questions owners ask</h2>
            <div className="lp-faq">
              {faqs.map((faq, i) => (
                <details key={faq.question} className="lp-faq-item">
                  <summary>
                    <span className="lp-faq-num">{String(i + 1).padStart(2, '0')}</span>
                    {faq.question}
                  </summary>
                  <p data-speakable>{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="lp-related">
              Explore{' '}
              <Link href="/ai-agents">AI agents</Link>, <Link href="/creative">creative</Link>, and{' '}
              <Link href="/contact">book a discovery call</Link>.
            </p>
          </div>
        </section>
      </main>
      <LpMinimalFooter />
    </>
  );
}
