import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { EventProductPage } from '../_components/products/RoadmapProductPages';
import { EVENT_META } from '../_components/products/eventProductContent';

export const metadata = buildProductMetadata(EVENT_META);

export default function RestaurantEventPromotionPage() {
  return (
    <>
      <ProductJsonLdScript config={EVENT_META} />
      <EventProductPage />
    </>
  );
}
