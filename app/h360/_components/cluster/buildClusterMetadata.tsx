import type { Metadata } from 'next';
import { ogImageEntry } from '@/lib/seo/ogImageUrl';

const OARC = 'https://oarcdigital.com';

export type ClusterMetaConfig = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  og: { title: string; subtitle: string; eyebrow: string };
  breadcrumbName: string;
  faqs: readonly { question: string; answer: string }[];
  /** pain pages get Article + FAQPage; pillars get Service + FAQPage */
  pageType: 'pillar' | 'pain' | 'faq';
  serviceName?: string;
  headline?: string;
};

export function buildClusterMetadata(c: ClusterMetaConfig): Metadata {
  const url = `${OARC}${c.path}`;
  return {
    title: c.title,
    description: c.description,
    keywords: [...c.keywords, 'h360', 'oarcdigital', 'restaurant malta'],
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

export function buildClusterJsonLd(c: ClusterMetaConfig) {
  const url = `${OARC}${c.path}`;
  const graph: Record<string, unknown>[] = [
    { '@type': 'Organization', '@id': `${OARC}/#organization`, name: 'OARC Digital', url: OARC },
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
  ];

  if (c.pageType === 'pillar' && c.serviceName) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: c.serviceName,
      description: c.description,
      url,
      provider: { '@id': `${OARC}/#organization` },
      brand: { '@type': 'Brand', name: 'H360', parentOrganization: { '@id': `${OARC}/#organization` } },
      areaServed: { '@type': 'Country', name: 'Malta' },
      isPartOf: { '@type': 'WebPage', '@id': `${OARC}/h360#h360` },
    });
  }

  if (c.pageType === 'pain' && c.headline) {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: c.headline,
      description: c.description,
      url,
      author: { '@id': `${OARC}/#organization` },
      publisher: { '@id': `${OARC}/#organization` },
      isPartOf: { '@type': 'WebPage', '@id': `${OARC}/h360#h360` },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function ClusterJsonLdScript({ config }: { config: ClusterMetaConfig }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildClusterJsonLd(config)) }} />
  );
}
