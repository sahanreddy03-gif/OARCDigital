'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { TEXT_PAGE } from './textProductContent';

export default function TextProductPage() {
  return <StandaloneProductPage config={buildStandalone(TEXT_PAGE, STANDALONE_EXTRAS.text, true)} />;
}
