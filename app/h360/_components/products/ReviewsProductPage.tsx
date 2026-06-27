'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { REVIEWS_PAGE } from './reviewsProductContent';
import { ReviewsClimbVisual } from './sharedVisuals';

export default function ReviewsProductPage() {
  return <H360ProductPageLayout config={{ ...REVIEWS_PAGE, flowFooter: <ReviewsClimbVisual /> }} />;
}
