import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/roadmap-2026"),
  title: supportingPagesSEO.roadmap.title,
  description: supportingPagesSEO.roadmap.description,
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
  return (
    <>
      <SpeakableJsonLd path="/roadmap-2026" />
        <RouteSchema
          type="pillar"
          path="/roadmap-2026"
          title="OARC Digital Roadmap 2026 — AI, Creative & Automation Direction"
          description="OARC Digital's 2026 roadmap: AI agent expansion, creative practice growth, automation tooling, and new markets. The product and capability commitments for the year."
          faqs={SUPPORTING_PAGE_SCHEMAS["/roadmap-2026"].faqs}
        />
      <PageContent />
    </>
  );
}
