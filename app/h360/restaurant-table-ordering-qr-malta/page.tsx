import type { Metadata } from 'next';
import OrderProductPage from '../_components/products/OrderProductPage';
import { ogImageEntry } from '@/lib/seo/ogImageUrl';
import {
  ORDER_META,
  ORDER_PATH,
  ORDER_FAQS,
  ORDER_GATE2,
  ORDER_BRAIN_ID,
} from '../_components/products/orderProductContent';

const OARC = 'https://oarcdigital.com';
const URL = `${OARC}${ORDER_PATH}`;

export const metadata: Metadata = {
  title: ORDER_META.title,
  description: ORDER_META.description,
  keywords: [
    'restaurant table ordering qr malta',
    'qr menu ordering malta',
    'direct orders restaurant malta',
    'zero commission restaurant ordering',
    'h360 order',
    'oarcdigital',
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: ORDER_META.title,
    description: ORDER_META.description,
    siteName: 'OARC Digital',
    images: ogImageEntry({
      title: 'Restaurant table ordering by QR',
      subtitle: 'Zero commission · Malta · H360 by OARC Digital',
      eyebrow: 'H360 · Direct Orders',
    }),
  },
  twitter: {
    card: 'summary_large_image',
    title: ORDER_META.title,
    description: ORDER_META.description,
    images: ogImageEntry({
      title: 'Restaurant table ordering by QR',
      subtitle: 'Zero commission · Malta · H360 by OARC Digital',
    }),
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
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'H360 Restaurant Table Ordering by QR — Malta',
      alternateName: ORDER_BRAIN_ID,
      description: ORDER_META.description,
      url: URL,
      provider: { '@id': `${OARC}/#organization` },
      brand: { '@type': 'Brand', name: 'H360', parentOrganization: { '@id': `${OARC}/#organization` } },
      areaServed: { '@type': 'Country', name: 'Malta' },
      serviceType: 'Restaurant QR Table Ordering',
      isPartOf: { '@type': 'WebPage', '@id': `${OARC}/h360#h360` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OARC Digital', item: OARC },
        { '@type': 'ListItem', position: 2, name: 'H360', item: `${OARC}/h360` },
        { '@type': 'ListItem', position: 3, name: 'Table ordering QR Malta', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: ORDER_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RestaurantTableOrderingQrMaltaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OrderProductPage />
    </>
  );
}
