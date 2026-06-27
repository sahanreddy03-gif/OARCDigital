import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { InventoryProductPage } from '../_components/products/RoadmapProductPages';
import { INVENTORY_META } from '../_components/products/inventoryProductContent';

export const metadata = buildProductMetadata(INVENTORY_META);

export default function RestaurantStockManagementPage() {
  return (
    <>
      <ProductJsonLdScript config={INVENTORY_META} />
      <InventoryProductPage />
    </>
  );
}
