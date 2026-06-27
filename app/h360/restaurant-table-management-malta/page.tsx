import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { FloorPlanProductPage } from '../_components/products/RoadmapProductPages';
import { FLOOR_PLAN_META } from '../_components/products/floorPlanProductContent';

export const metadata = buildProductMetadata(FLOOR_PLAN_META);

export default function RestaurantTableManagementPage() {
  return (
    <>
      <ProductJsonLdScript config={FLOOR_PLAN_META} />
      <FloorPlanProductPage />
    </>
  );
}
