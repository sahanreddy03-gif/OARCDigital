import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: supportingPagesSEO.services.title,
  description: supportingPagesSEO.services.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.services.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.services.title, subtitle: supportingPagesSEO.services.description }),
    title: supportingPagesSEO.services.title,
    description: supportingPagesSEO.services.description,
    url: `https://oarcdigital.com${supportingPagesSEO.services.path}`,
    type: supportingPagesSEO.services.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.services.title, subtitle: supportingPagesSEO.services.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.services.title,
    description: supportingPagesSEO.services.description,
  },
};

export default function Page() {
  return <PageContent />;
}
