'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { GOOGLE_PROFILE_PAGE } from './googleProfileProductContent';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';

export default function GoogleProfileProductPage() {
  return <StandaloneProductPage config={buildStandalone(GOOGLE_PROFILE_PAGE, STANDALONE_EXTRAS.googleVisibility, true)} />;
}
