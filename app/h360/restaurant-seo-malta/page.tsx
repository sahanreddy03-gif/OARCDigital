import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import GoogleProfileProductPage from '../_components/products/GoogleProfileProductPage';
import type { ProductMetaConfig } from '../_components/products/buildProductMetadata';

/** SEARCH / LOCAL — canonical visibility page; SEO-specific URL per build spec §3B */
const SEO_META: ProductMetaConfig = {
  brainId: 'SEARCH',
  path: '/h360/restaurant-seo-malta',
  title: 'Restaurant SEO Malta | OARC Digital — H360',
  description:
    'Restaurant SEO for Malta — rank on Google when guests search "best pizza Malta". H360 improves ranking without 20-page reports. OARC Digital.',
  keywords: ['restaurant seo malta', 'restaurant google ranking malta', 'how to rank restaurant google malta'],
  og: { title: 'Restaurant SEO Malta', subtitle: 'Rank without agency fees · H360', eyebrow: 'H360 · SEO' },
  breadcrumbName: 'Restaurant SEO Malta',
  serviceName: 'H360 Restaurant SEO — Malta',
  serviceType: 'Restaurant Search Engine Optimization',
  faqs: [
    {
      question: 'How do I get my restaurant to show on Google?',
      answer:
        'Focus on fundamentals Google rewards in Malta\'s small market: active Google Business Profile, consistent reviews, a real website with your menu, and regular posts. OARC Digital H360 SEARCH improves ranking automatically — you don\'t read 20-page SEO reports; the system handles GBP posts, review keywords, and content.',
    },
    {
      question: 'Does SEO work for small Malta restaurants?',
      answer:
        'Malta\'s small market is an advantage — 300 restaurants in Sliema vs 3,000 in London means ranking #1 for "restaurant Sliema" is achievable. GBP posting shows movement in 1–2 weeks.',
    },
  ],
};

export const metadata = buildProductMetadata(SEO_META);

export default function RestaurantSeoPage() {
  return (
    <>
      <ProductJsonLdScript config={SEO_META} />
      <GoogleProfileProductPage />
    </>
  );
}
