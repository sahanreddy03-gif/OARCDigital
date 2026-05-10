import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: supportingPagesSEO.ourWork.title,
  description: supportingPagesSEO.ourWork.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.ourWork.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.ourWork.title, subtitle: supportingPagesSEO.ourWork.description }),
    title: supportingPagesSEO.ourWork.title,
    description: supportingPagesSEO.ourWork.description,
    url: `https://oarcdigital.com${supportingPagesSEO.ourWork.path}`,
    type: supportingPagesSEO.ourWork.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.ourWork.title, subtitle: supportingPagesSEO.ourWork.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.ourWork.title,
    description: supportingPagesSEO.ourWork.description,
  },
};

export default function Page() {
  return <PageContent />;
}
