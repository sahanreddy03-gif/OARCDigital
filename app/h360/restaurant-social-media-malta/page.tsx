import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { SocialProductPage } from '../_components/products/RoadmapProductPages';
import { SOCIAL_META } from '../_components/products/socialProductContent';

export const metadata = buildProductMetadata(SOCIAL_META);

export default function RestaurantSocialMediaPage() {
  return (
    <>
      <ProductJsonLdScript config={SOCIAL_META} />
      <SocialProductPage />
    </>
  );
}
