'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { WEBSITE_PAGE } from './websiteProductContent';

export default function WebsiteProductPage() {
  return <H360ProductPageLayout config={{ ...WEBSITE_PAGE, live: true }} />;
}
