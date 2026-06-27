import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import GoogleProfileProductPage from '../_components/products/GoogleProfileProductPage';
import { GOOGLE_PROFILE_META } from '../_components/products/googleProfileProductContent';

export const metadata = buildProductMetadata(GOOGLE_PROFILE_META);

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <ProductJsonLdScript config={GOOGLE_PROFILE_META} />
      <GoogleProfileProductPage />
    </>
  );
}
