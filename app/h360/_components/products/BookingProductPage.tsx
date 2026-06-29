'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { BOOKING_PAGE } from './bookingProductContent';

export default function BookingProductPage() {
  return <H360ProductPageLayout config={{ ...BOOKING_PAGE, live: true }} />;
}
