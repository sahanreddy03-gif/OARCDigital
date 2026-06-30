'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { PASS_PAGE } from './passProductContent';

export default function PassProductPage() {
  return <StandaloneProductPage config={buildStandalone(PASS_PAGE, STANDALONE_EXTRAS.pass, true)} />;
}
