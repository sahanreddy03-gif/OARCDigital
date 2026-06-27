import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { AnalyticsProductPage } from '../_components/products/RoadmapProductPages';
import { ANALYTICS_META } from '../_components/products/analyticsProductContent';

export const metadata = buildProductMetadata(ANALYTICS_META);

export default function RestaurantAnalyticsPage() {
  return (
    <>
      <ProductJsonLdScript config={ANALYTICS_META} />
      <AnalyticsProductPage />
    </>
  );
}
