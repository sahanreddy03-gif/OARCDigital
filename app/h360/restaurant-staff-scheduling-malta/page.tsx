import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { StaffProductPage } from '../_components/products/RoadmapProductPages';
import { STAFF_META } from '../_components/products/staffProductContent';

export const metadata = buildProductMetadata(STAFF_META);

export default function RestaurantStaffSchedulingPage() {
  return (
    <>
      <ProductJsonLdScript config={STAFF_META} />
      <StaffProductPage />
    </>
  );
}
