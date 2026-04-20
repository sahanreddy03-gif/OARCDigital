import type { Metadata } from "next";
import { revenueServicesSEO } from "@/data/seoMetadata";
import PageContent from "@/components/services/RevenueServiceClient";

const seo = revenueServicesSEO.ideaValidationEngine;

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
