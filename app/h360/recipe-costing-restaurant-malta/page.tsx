import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import { RecipeProductPage } from '../_components/products/RoadmapProductPages';
import { RECIPE_META } from '../_components/products/recipeProductContent';

export const metadata = buildProductMetadata(RECIPE_META);

export default function RecipeCostingPage() {
  return (
    <>
      <ProductJsonLdScript config={RECIPE_META} />
      <RecipeProductPage />
    </>
  );
}
