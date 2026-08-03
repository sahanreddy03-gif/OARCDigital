import { buildVoiceServiceMetadata, VoiceServicePage } from '@/lib/voice-products/buildVoiceServicePage';

const SLUG = 'ai-voice-dispatcher';

export const metadata = buildVoiceServiceMetadata(SLUG);

export default function Page() {
  return <VoiceServicePage slug={SLUG} />;
}
