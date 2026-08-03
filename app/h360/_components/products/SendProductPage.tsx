'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { SEND_PAGE } from './sendProductContent';

export default function SendProductPage() {
  return <StandaloneProductPage config={buildStandalone(SEND_PAGE, STANDALONE_EXTRAS.send, true)} />;
}
