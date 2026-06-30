'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { ORDER_PAGE } from './orderProductContent';

export default function OrderProductPage() {
  return <StandaloneProductPage config={buildStandalone(ORDER_PAGE, STANDALONE_EXTRAS.order, true)} />;
}
