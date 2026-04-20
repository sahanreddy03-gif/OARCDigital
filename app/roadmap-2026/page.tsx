import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: supportingPagesSEO.roadmap.title,
  description: supportingPagesSEO.roadmap.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.roadmap.path}` },
  openGraph: {
    title: supportingPagesSEO.roadmap.title,
    description: supportingPagesSEO.roadmap.description,
    url: `https://oarcdigital.com${supportingPagesSEO.roadmap.path}`,
    type: supportingPagesSEO.roadmap.ogType,
  },
  twitter: {
    card: "summary_large_image",
    title: supportingPagesSEO.roadmap.title,
    description: supportingPagesSEO.roadmap.description,
  },
};

export default function Page() {
  return <PageContent />;
}
