import type { Metadata } from "next";
import { pdfPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: pdfPagesSEO.capabilitiesDeck.title,
  description: pdfPagesSEO.capabilitiesDeck.description,
  alternates: { canonical: `https://oarcdigital.com${pdfPagesSEO.capabilitiesDeck.path}` },
  openGraph: {
    images: ogImageEntry({ title: pdfPagesSEO.capabilitiesDeck.title, subtitle: pdfPagesSEO.capabilitiesDeck.description }),
    title: pdfPagesSEO.capabilitiesDeck.title,
    description: pdfPagesSEO.capabilitiesDeck.description,
    url: `https://oarcdigital.com${pdfPagesSEO.capabilitiesDeck.path}`,
    type: pdfPagesSEO.capabilitiesDeck.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: pdfPagesSEO.capabilitiesDeck.title, subtitle: pdfPagesSEO.capabilitiesDeck.description })],
    card: "summary_large_image",
    title: pdfPagesSEO.capabilitiesDeck.title,
    description: pdfPagesSEO.capabilitiesDeck.description,
  },
};

export default function Page() {
  return <PageContent />;
}
