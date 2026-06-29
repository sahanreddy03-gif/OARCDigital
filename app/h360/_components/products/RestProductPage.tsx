'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { REST_PAGE } from './restProductContent';

export default function RestProductPage() {
  return <H360ProductPageLayout config={{ ...REST_PAGE, live: true }} />;
}
