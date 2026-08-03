import { buildProductMetadata, ProductJsonLdScript } from '../_components/products/buildProductMetadata';
import ReviewsProductPage from '../_components/products/ReviewsProductPage';
import { REVIEWS_META } from '../_components/products/reviewsProductContent';

export const metadata = buildProductMetadata(REVIEWS_META);

export default function GoogleReviewsPage() {
  return (
    <>
      <ProductJsonLdScript config={REVIEWS_META} />
      <ReviewsProductPage />
    </>
  );
}
