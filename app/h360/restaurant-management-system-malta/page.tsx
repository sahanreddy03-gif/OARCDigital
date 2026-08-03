import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import RestProductPage from '../_components/products/RestProductPage';
import { REST_META } from '../_components/products/restProductContent';

export const metadata = buildProductMetadata(REST_META);

export default function RestaurantManagementSystemPage() {
  return (
    <>
      <ProductJsonLdScript config={REST_META} />
      <RestProductPage />
    </>
  );
}
