import type { Metadata } from 'next';
import H360Hero from './_components/Hero';
import H360FeatureCards from './_components/FeatureCards';
import H360BelowHero from './_components/BelowHero';

const TITLE = 'H360 — Restaurant Marketing, Reviews & Direct Orders | Malta';
const DESCRIPTION =
  'H360 by OARC Digital helps Malta restaurants stop paying Wolt 30%, rank #1 on Google, fill tables every night, and own every repeat guest — powered by ARC AI.';
const URL = 'https://oarcdigital.com/h360';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'OARC Digital · H360',
    images: [{ url: 'https://oarcdigital.com/og-h360.jpg', width: 1200, height: 630, alt: 'H360 — Restaurant Growth Platform Malta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://oarcdigital.com/#organization',
      name: 'OARC Digital',
      url: 'https://oarcdigital.com',
      sameAs: [
        'https://www.linkedin.com/company/oarcdigital',
        'https://instagram.com/oarcdigital',
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': URL + '#h360',
      name: 'H360 — Restaurant Growth Platform',
      description: DESCRIPTION,
      url: URL,
      provider: { '@id': 'https://oarcdigital.com/#organization' },
      areaServed: {
        '@type': 'Country',
        name: 'Malta',
      },
      serviceType: 'Restaurant Marketing & Technology',
      offers: {
        '@type': 'Offer',
        description: 'Free ARC AI restaurant audit — Google presence, reviews, and direct order analysis.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can a restaurant in Malta stop losing money to Wolt and Bolt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H360 by OARC Digital replaces delivery-app dependency with direct QR ordering — guests order and pay at the table with zero commission, keeping the full margin for the restaurant. The platform also builds a direct guest database so repeat customers re-order through WhatsApp or email rather than third-party apps.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my restaurant not showing on Google Maps in Malta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google Maps ranking depends on review volume, recency, keyword optimisation in your Business Profile, and local citation consistency. H360\'s ARC AI audits all these factors, fixes missing keywords and images, and automates review collection so your restaurant climbs from page two to the local top-3 within weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who does restaurant marketing in Malta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OARC Digital — through its H360 hospitality platform — is Malta\'s specialist in restaurant marketing, Google visibility, direct ordering, and guest loyalty. Unlike generic agencies, OARC operates real Maltese venues and diagnoses the exact reason a restaurant is invisible before fixing it.',
          },
        },
      ],
    },
  ],
};

export default function H360Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <H360Hero />
      <H360FeatureCards />
      <H360BelowHero />
    </>
  );
}
