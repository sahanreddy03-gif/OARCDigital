'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { PAY_PAGE } from './payProductContent';
import { PayCompareVisual } from './sharedVisuals';

export default function PayProductPage() {
  return <H360ProductPageLayout config={{ ...PAY_PAGE, flowFooter: <PayCompareVisual /> }} />;
}
