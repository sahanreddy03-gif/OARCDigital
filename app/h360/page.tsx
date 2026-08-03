import type { Metadata } from 'next';
import H360Hero from './_components/Hero';
import OarcBridge from './_components/OarcBridge';
import H360FeatureCards from './_components/FeatureCards';
import H360BelowHero from './_components/BelowHero';

const TITLE = 'Restaurant Marketing Malta | OARC Digital — H360 Hospitality';
const DESCRIPTION =
  'OARC Digital helps Malta restaurants rank on Google, collect reviews, take direct orders with zero commission, and turn guests into regulars. H360 is our hospitality product line — one platform for every margin.';
const URL = 'https://oarcdigital.com/h360';
const OARC = 'https://oarcdigital.com';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'restaurant marketing malta',
    'restaurant marketing Malta',
    'google maps restaurant malta',
    'restaurant reviews malta',
    'direct orders restaurant malta',
    'h360',
    'oarcdigital',
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'OARC Digital',
    images: [{ url: 'https://oarcdigital.com/og-h360.jpg', width: 1200, height: 630, alt: 'H360 — Restaurant Marketing Malta' }],
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
      '@id': `${OARC}/#organization`,
      name: 'OARC Digital',
      url: OARC,
      logo: `${OARC}/logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/oarcdigital',
        'https://instagram.com/oarcdigital',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${OARC}/#website`,
      url: OARC,
      name: 'OARC Digital',
      publisher: { '@id': `${OARC}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${OARC}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${URL}#h360`,
      name: 'OARC Digital — H360 Restaurant Marketing Malta',
      alternateName: 'H360',
      description: DESCRIPTION,
      url: URL,
      isPartOf: { '@id': `${OARC}/#website` },
      provider: { '@id': `${OARC}/#organization` },
      parentOrganization: { '@id': `${OARC}/#organization` },
      brand: { '@type': 'Brand', name: 'H360', parentOrganization: { '@id': `${OARC}/#organization` } },
      areaServed: { '@type': 'Country', name: 'Malta' },
      serviceType: ['Restaurant Marketing', 'Restaurant Technology', 'Google Business Profile Management'],
      offers: {
        '@type': 'Offer',
        description: 'Free ARC AI restaurant audit — Google presence, reviews, and direct order analysis.',
        url: `${URL}#h360-audit`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OARC Digital', item: OARC },
        { '@type': 'ListItem', position: 2, name: 'H360 Restaurant Marketing Malta', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who does restaurant marketing in Malta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OARC Digital (oarcdigital.com) is Malta\'s operator-built marketing and AI studio. Its H360 hospitality line covers Google Maps visibility, smart review collection, direct QR ordering with zero commission, WhatsApp loyalty, and restaurant tools on one platform — built by teams who run real Maltese venues.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can a restaurant in Malta stop losing money to Wolt and Bolt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OARC Digital\'s H360 replaces delivery-app dependency with direct QR ordering — guests order and pay at the table with zero commission. The platform builds a direct guest database so repeat customers re-order through WhatsApp or SMS rather than third-party apps.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my restaurant not showing on Google Maps in Malta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google Maps ranking depends on review volume, recency, keyword optimisation in your Business Profile, and local citation consistency. OARC Digital\'s H360 and ARC AI audit these factors, fix missing keywords and images, and automate review collection so your restaurant climbs toward the local top 3.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is H360 and how is it related to OARC Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H360 is the hospitality product line from OARC Digital (oarcdigital.com). It lives at oarcdigital.com/h360 — same domain authority, specialist tools and evergreen content for Malta restaurant owners. OARC Digital is the company; H360 is how restaurants access hospitality marketing.',
          },
        },
      ],
    },
  ],
};

export default function H360Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <H360Hero />
      <OarcBridge />
      <H360FeatureCards />
      <H360BelowHero />
    </>
  );
}
