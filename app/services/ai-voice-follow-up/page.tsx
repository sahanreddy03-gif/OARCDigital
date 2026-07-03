import { buildVoiceServiceMetadata, VoiceServicePage } from '@/lib/voice-products/buildVoiceServicePage';

const SLUG = 'ai-voice-follow-up';

export const metadata = buildVoiceServiceMetadata(SLUG);

export default function Page() {
  return <VoiceServicePage slug={SLUG} />;
}
