'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { BOOKING_PAGE } from './bookingProductContent';

export default function BookingProductPage() {
  return <StandaloneProductPage config={buildStandalone(BOOKING_PAGE, STANDALONE_EXTRAS.booking, true)} />;
}
