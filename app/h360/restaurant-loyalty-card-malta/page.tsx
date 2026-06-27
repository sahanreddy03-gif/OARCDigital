import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import PassProductPage from '../_components/products/PassProductPage';
import { PASS_META } from '../_components/products/passProductContent';

export const metadata = buildProductMetadata(PASS_META);

export default function RestaurantLoyaltyCardPage() {
  return (
    <>
      <ProductJsonLdScript config={PASS_META} />
      <PassProductPage />
    </>
  );
}
