import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import SendProductPage from '../_components/products/SendProductPage';
import { SEND_META } from '../_components/products/sendProductContent';

export const metadata = buildProductMetadata(SEND_META);

export default function WhatsappMarketingPage() {
  return (
    <>
      <ProductJsonLdScript config={SEND_META} />
      <SendProductPage />
    </>
  );
}
