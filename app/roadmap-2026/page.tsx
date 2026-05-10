import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: supportingPagesSEO.roadmap.title,
  description: supportingPagesSEO.roadmap.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.roadmap.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.roadmap.title, subtitle: supportingPagesSEO.roadmap.description }),
    title: supportingPagesSEO.roadmap.title,
    description: supportingPagesSEO.roadmap.description,
    url: `https://oarcdigital.com${supportingPagesSEO.roadmap.path}`,
    type: supportingPagesSEO.roadmap.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.roadmap.title, subtitle: supportingPagesSEO.roadmap.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.roadmap.title,
    description: supportingPagesSEO.roadmap.description,
  },
};

export default function Page() {
  return <PageContent />;
}
