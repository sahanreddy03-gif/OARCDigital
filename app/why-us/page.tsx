import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import PageContent from "./PageContent";

const TITLE = "Who We Are | Our Founding Story | OARC Digital Malta";
const DESCRIPTION =
  "The founding story of OARC Digital — why Sahan Reddy started a Birkirkara studio that puts creative, AI engineering, and growth automation under one roof for Maltese businesses.";
const URL = "https://oarcdigital.com/why-us";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getHreflangAlternates("/why-us"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    siteName: "OARC Digital",
    images: [
      {
        url: "https://oarcdigital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Our Founding Story — OARC Digital, founded 2023 in Birkirkara, Malta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/why-us" />
        <RouteSchema
          type="pillar"
          path="/why-us"
          title="Why OARC Digital — Founding Story & Operating Principles | Malta"
          description="Why OARC Digital exists, who founded it, and the operating principles that put creative, AI engineering, and revenue automation under one Birkirkara roof."
          faqs={SUPPORTING_PAGE_SCHEMAS["/why-us"].faqs}
        />
      <PageContent />
    </>
  );
}
