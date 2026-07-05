import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getHreflangAlternates, SpeakableJsonLd } from '@/lib/seo/discoveryTags';
import { ogImageEntry, ogImageUrl } from '@/lib/seo/ogImageUrl';
import RouteSchema from '@/components/RouteSchema';
import { LP_GUIDES, LP_HUB } from '@/lib/lp/guidesContent';
import LpMinimalHeader from '@/components/lp/LpMinimalHeader';
import LpMinimalFooter from '@/components/lp/LpMinimalFooter';

export const metadata: Metadata = {
  alternates: getHreflangAlternates(LP_HUB.path),
  title: LP_HUB.metaTitle,
  description: LP_HUB.metaDescription,
  openGraph: {
    title: LP_HUB.metaTitle,
    description: LP_HUB.metaDescription,
    url: `https://oarcdigital.com${LP_HUB.path}`,
    images: ogImageEntry({ title: LP_HUB.metaTitle, subtitle: LP_HUB.metaDescription }),
  },
  twitter: {
    card: 'summary_large_image',
    title: LP_HUB.metaTitle,
    description: LP_HUB.metaDescription,
    images: [ogImageUrl({ title: LP_HUB.metaTitle, subtitle: LP_HUB.metaDescription })],
  },
};

export default function LpHubPage() {
  return (
    <>
      <SpeakableJsonLd path={LP_HUB.path} />
      <RouteSchema
        type="pillar"
        path={LP_HUB.path}
        title={LP_HUB.metaTitle}
        description={LP_HUB.metaDescription}
        faqs={[
          {
            question: 'What AI guides does OARC Digital offer for Malta?',
            answer:
              'OARC Digital publishes free lead-magnet guides for Malta business owners: AI tips checklist, AI adoption playbook, and a no-hype AI report—focused on phone, reviews, bookings, and direct demand.',
          },
        ]}
      />
      <LpMinimalHeader />
      <main className="lp-main">
        <section className="lp-hero">
          <div className="lp-container lp-narrow">
            <p className="lp-eyebrow">OARC DIGITAL · GUIDES</p>
            <h1 className="lp-h1">
              AI guides for Malta operators—<span className="lp-serif">no hype</span>
            </h1>
            <p className="lp-lead" data-speakable>
              Three short guides from operators who run venues and build AI systems in Malta. Download free—homepage unchanged.
            </p>
          </div>
        </section>
        <section className="lp-section lp-section-tint">
          <div className="lp-container">
            <div className="lp-hub-grid">
              {LP_GUIDES.map((g) => (
                <Link key={g.slug} href={g.path} className="lp-hub-card">
                  <Image src={g.heroImage} alt={g.heroImageAlt} width={400} height={160} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                  <div className="lp-hub-card-body">
                    <h3>{g.metaTitle.replace(' | OARC Digital', '').replace(' | OARC Digital Playbook', '')}</h3>
                    <p>{g.metaDescription.slice(0, 120)}…</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LpMinimalFooter />
    </>
  );
}
