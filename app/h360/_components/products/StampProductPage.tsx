'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { STAMP_PAGE } from './stampProductContent';

export default function StampProductPage() {
  return <StandaloneProductPage config={buildStandalone(STAMP_PAGE, STANDALONE_EXTRAS.stamp, true)} />;
}
