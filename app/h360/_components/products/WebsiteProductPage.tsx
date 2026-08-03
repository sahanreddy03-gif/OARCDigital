'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { WEBSITE_PAGE } from './websiteProductContent';

export default function WebsiteProductPage() {
  return <StandaloneProductPage config={buildStandalone(WEBSITE_PAGE, STANDALONE_EXTRAS.website, true)} />;
}
