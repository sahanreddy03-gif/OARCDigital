'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { GOOGLE_PROFILE_PAGE } from './googleProfileProductContent';
import { VisibilityScoreVisual } from './sharedVisuals';

export default function GoogleProfileProductPage() {
  return <H360ProductPageLayout config={{ ...GOOGLE_PROFILE_PAGE, flowFooter: <VisibilityScoreVisual /> }} />;
}
