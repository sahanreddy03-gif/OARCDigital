'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { ORDER_PAGE } from './orderProductContent';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';

export default function OrderProductPage() {
  return <StandaloneProductPage config={buildStandalone(ORDER_PAGE, STANDALONE_EXTRAS.order, true)} />;
}
