import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import StampProductPage from '../_components/products/StampProductPage';
import { STAMP_META } from '../_components/products/stampProductContent';

export const metadata = buildProductMetadata(STAMP_META);

export default function DigitalStampCardPage() {
  return (
    <>
      <ProductJsonLdScript config={STAMP_META} />
      <StampProductPage />
    </>
  );
}
