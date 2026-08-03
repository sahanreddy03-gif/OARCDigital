import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import WebsiteProductPage from '../_components/products/WebsiteProductPage';
import { WEBSITE_META } from '../_components/products/websiteProductContent';

export const metadata = buildProductMetadata(WEBSITE_META);

export default function RestaurantWebsitePage() {
  return (
    <>
      <ProductJsonLdScript config={WEBSITE_META} />
      <WebsiteProductPage />
    </>
  );
}
