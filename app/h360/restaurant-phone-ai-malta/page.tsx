import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import VoiceHostProductPage from '../_components/products/VoiceHostProductPage';
import { VOICE_META } from '../_components/products/voiceProductContent';

export const metadata = buildProductMetadata(VOICE_META);

export default function RestaurantPhoneAiMaltaPage() {
  return (
    <>
      <ProductJsonLdScript config={VOICE_META} />
      <VoiceHostProductPage />
    </>
  );
}
