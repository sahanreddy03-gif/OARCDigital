import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import TextProductPage from '../_components/products/TextProductPage';
import { TEXT_META } from '../_components/products/textProductContent';

export const metadata = buildProductMetadata(TEXT_META);

export default function RestaurantSmsMarketingPage() {
  return (
    <>
      <ProductJsonLdScript config={TEXT_META} />
      <TextProductPage />
    </>
  );
}
