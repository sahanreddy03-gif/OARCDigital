import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Pricing Plans | OARC Digital",
  description: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.pricing.path}` },
  openGraph: {
    title: "Pricing Plans | OARC Digital",
    description: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
    url: `https://oarcdigital.com${supportingPagesSEO.pricing.path}`,
    type: supportingPagesSEO.pricing.ogType,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | OARC Digital",
    description: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
  },
};

export default function Page() {
  return <PageContent />;
}
