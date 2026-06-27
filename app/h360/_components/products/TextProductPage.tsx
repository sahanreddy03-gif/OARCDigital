'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { TEXT_PAGE } from './textProductContent';
import { WinBackVisual } from './sharedVisuals';

export default function TextProductPage() {
  return <H360ProductPageLayout config={{ ...TEXT_PAGE, flowFooter: <WinBackVisual /> }} />;
}
