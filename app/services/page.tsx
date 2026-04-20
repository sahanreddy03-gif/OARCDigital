import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: supportingPagesSEO.services.title,
  description: supportingPagesSEO.services.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.services.path}` },
  openGraph: {
    title: supportingPagesSEO.services.title,
    description: supportingPagesSEO.services.description,
    url: `https://oarcdigital.com${supportingPagesSEO.services.path}`,
    type: supportingPagesSEO.services.ogType,
  },
  twitter: {
    card: "summary_large_image",
    title: supportingPagesSEO.services.title,
    description: supportingPagesSEO.services.description,
  },
};

export default function Page() {
  return <PageContent />;
}
