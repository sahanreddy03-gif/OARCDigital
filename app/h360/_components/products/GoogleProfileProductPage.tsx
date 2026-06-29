'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { GOOGLE_PROFILE_PAGE } from './googleProfileProductContent';

export default function GoogleProfileProductPage() {
  return <H360ProductPageLayout config={{ ...GOOGLE_PROFILE_PAGE, live: true }} />;
}
