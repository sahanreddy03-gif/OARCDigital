'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { REVIEWS_PAGE } from './reviewsProductContent';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';

export default function ReviewsProductPage() {
  return <StandaloneProductPage config={buildStandalone(REVIEWS_PAGE, STANDALONE_EXTRAS.reviews, true)} />;
}
