import type { Metadata } from "next";
import { pdfPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: pdfPagesSEO.capabilitiesDeck.title,
  description: pdfPagesSEO.capabilitiesDeck.description,
  alternates: { canonical: `https://oarcdigital.com${pdfPagesSEO.capabilitiesDeck.path}` },
  openGraph: {
    title: pdfPagesSEO.capabilitiesDeck.title,
    description: pdfPagesSEO.capabilitiesDeck.description,
    url: `https://oarcdigital.com${pdfPagesSEO.capabilitiesDeck.path}`,
    type: pdfPagesSEO.capabilitiesDeck.ogType,
  },
  twitter: {
    card: "summary_large_image",
    title: pdfPagesSEO.capabilitiesDeck.title,
    description: pdfPagesSEO.capabilitiesDeck.description,
  },
};

export default function Page() {
  return <PageContent />;
}
