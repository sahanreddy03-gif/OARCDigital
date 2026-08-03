import type { Metadata } from 'next';
import { ogImageEntry } from '@/lib/seo/ogImageUrl';
import type { BrainProductId } from '../product-cards/productCardsData';

const OARC = 'https://oarcdigital.com';

export type ProductMetaConfig = {
  brainId: BrainProductId;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  og: { title: string; subtitle: string; eyebrow: string };
  breadcrumbName: string;
  serviceName: string;
  serviceType: string;
  faqs: readonly { question: string; answer: string }[];
};

export function buildProductMetadata(c: ProductMetaConfig): Metadata {
  const url = `${OARC}${c.path}`;
  return {
    title: c.title,
    description: c.description,
    keywords: [...c.keywords, 'h360', 'oarcdigital'],
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: c.title,
      description: c.description,
      siteName: 'OARC Digital',
      images: ogImageEntry({ title: c.og.title, subtitle: c.og.subtitle, eyebrow: c.og.eyebrow }),
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: ogImageEntry({ title: c.og.title, subtitle: c.og.subtitle }),
    },
  };
}

export function buildProductJsonLd(c: ProductMetaConfig) {
  const url = `${OARC}${c.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${OARC}/#organization`, name: 'OARC Digital', url: OARC },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: c.serviceName,
        alternateName: c.brainId,
        description: c.description,
        url,
        provider: { '@id': `${OARC}/#organization` },
        brand: { '@type': 'Brand', name: 'H360', parentOrganization: { '@id': `${OARC}/#organization` } },
        areaServed: { '@type': 'Country', name: 'Malta' },
        serviceType: c.serviceType,
        isPartOf: { '@type': 'WebPage', '@id': `${OARC}/h360#h360` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'OARC Digital', item: OARC },
          { '@type': 'ListItem', position: 2, name: 'H360', item: `${OARC}/h360` },
          { '@type': 'ListItem', position: 3, name: c.breadcrumbName, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: c.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}

export function ProductJsonLdScript({ config }: { config: ProductMetaConfig }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductJsonLd(config)) }} />
  );
}
