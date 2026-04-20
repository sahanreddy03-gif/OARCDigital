import type { Metadata } from "next";
import { creativeServicesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";

const seo = creativeServicesSEO.printPackaging;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `https://oarcdigital.com${seo.path}` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `https://oarcdigital.com${seo.path}`,
    type: seo.ogType ?? "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function Page() {
  return <PageContent />;
}
