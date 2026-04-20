import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: supportingPagesSEO.contact.title,
  description: supportingPagesSEO.contact.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.contact.path}` },
  openGraph: {
    title: supportingPagesSEO.contact.title,
    description: supportingPagesSEO.contact.description,
    url: `https://oarcdigital.com${supportingPagesSEO.contact.path}`,
    type: supportingPagesSEO.contact.ogType ?? "website",
  },
  twitter: {
    card: "summary_large_image",
    title: supportingPagesSEO.contact.title,
    description: supportingPagesSEO.contact.description,
  },
};

export default function Page() {
  return <PageContent />;
}
