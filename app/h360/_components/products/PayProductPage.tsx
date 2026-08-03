'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { PAY_PAGE } from './payProductContent';

export default function PayProductPage() {
  return <StandaloneProductPage config={buildStandalone(PAY_PAGE, STANDALONE_EXTRAS.pay, true)} />;
}
