import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import BookingProductPage from '../_components/products/BookingProductPage';
import { BOOKING_META } from '../_components/products/bookingProductContent';

export const metadata = buildProductMetadata(BOOKING_META);

export default function RestaurantBookingPage() {
  return (
    <>
      <ProductJsonLdScript config={BOOKING_META} />
      <BookingProductPage />
    </>
  );
}
