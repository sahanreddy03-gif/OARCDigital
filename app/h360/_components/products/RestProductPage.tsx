'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { REST_PAGE } from './restProductContent';

export default function RestProductPage() {
  return <StandaloneProductPage config={buildStandalone(REST_PAGE, STANDALONE_EXTRAS.rest, true)} />;
}
