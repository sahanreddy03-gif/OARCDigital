import type { Metadata } from 'next';
import PillarContent from './PillarContent';

const TITLE = 'Restaurant Marketing Malta | Diagnose & Fix — H360';
const DESCRIPTION =
  'Restaurant marketing in Malta that starts with diagnosis — why you are invisible on Google, losing margin to Wolt, and missing repeat guests. H360: built by operators who run Maltese venues.';
const URL = 'https://oarcdigital.com/h360/restaurant-marketing-malta';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'H360',
    images: [{ url: 'https://oarcdigital.com/og-h360.jpg', width: 1200, height: 630, alt: 'Restaurant Marketing Malta — H360' }],
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
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Restaurant Marketing Malta — H360',
      description: DESCRIPTION,
      url: URL,
      provider: {
        '@type': 'Organization',
        name: 'H360',
        url: 'https://oarcdigital.com/h360',
      },
      areaServed: { '@type': 'Country', name: 'Malta' },
      serviceType: 'Restaurant Marketing',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who does restaurant marketing in Malta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H360 is restaurant marketing built by operators who run Maltese venues including Louisiana Mama and Palino. We diagnose why a restaurant is invisible on Google, losing margin to delivery apps, or failing to bring guests back — then fix each layer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is H360 different from a marketing agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most agencies sell activity — posts, ads, reports. H360 starts with diagnosis: why tables are empty while a worse place nearby is full. We operate restaurants in Malta, so the fix follows operations — Google visibility, review velocity, direct ordering without Wolt commission, and a repeat-guest system.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a big budget for restaurant marketing in Malta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You need the right sequence, not the biggest ad spend. Malta is a small market — ranking on Google Maps and collecting reviews often beats blasting Meta ads to cold traffic. H360 prioritises findability, direct orders, and guests who return.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does restaurant marketing include with H360?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The core stack covers Google Business Profile, Maps and local SEO, review collection, QR table ordering, digital stamp loyalty, and WhatsApp follow-ups where live. Other modules are on roadmap where not yet shipped.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'H360', item: 'https://oarcdigital.com/h360' },
        { '@type': 'ListItem', position: 2, name: 'Restaurant Marketing Malta', item: URL },
      ],
    },
  ],
};

export default function RestaurantMarketingMaltaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PillarContent />
    </>
  );
}
