import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import PayProductPage from '../_components/products/PayProductPage';
import { PAY_META } from '../_components/products/payProductContent';

export const metadata = buildProductMetadata(PAY_META);

export default function RestaurantQrPaymentPage() {
  return (
    <>
      <ProductJsonLdScript config={PAY_META} />
      <PayProductPage />
    </>
  );
}
