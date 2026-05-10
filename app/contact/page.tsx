import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: supportingPagesSEO.contact.title,
  description: supportingPagesSEO.contact.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.contact.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.contact.title, subtitle: supportingPagesSEO.contact.description }),
    title: supportingPagesSEO.contact.title,
    description: supportingPagesSEO.contact.description,
    url: `https://oarcdigital.com${supportingPagesSEO.contact.path}`,
    type: supportingPagesSEO.contact.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.contact.title, subtitle: supportingPagesSEO.contact.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.contact.title,
    description: supportingPagesSEO.contact.description,
  },
};

export default function Page() {
  return <PageContent />;
}
