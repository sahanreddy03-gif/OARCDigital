'use client';

import VoiceProductPage from './VoiceProductPage';
import { buildStandalone } from './buildStandalone';
import { VOICE_PAGE } from './voiceProductContent';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';

export default function VoiceHostProductPage() {
  const config = buildStandalone(VOICE_PAGE, STANDALONE_EXTRAS.voiceAi, true);
  return <VoiceProductPage config={config} />;
}
