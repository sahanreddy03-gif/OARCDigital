import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/pricing"),
  title: "Pricing Plans | OARC Digital",
  description: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
  openGraph: {
    images: ogImageEntry({ title: "Pricing Plans | OARC Digital", subtitle: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies." }),
    title: "Pricing Plans | OARC Digital",
    description: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
    url: `https://oarcdigital.com${supportingPagesSEO.pricing.path}`,
    type: supportingPagesSEO.pricing.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Pricing Plans | OARC Digital", subtitle: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies." })],
    card: "summary_large_image",
    title: "Pricing Plans | OARC Digital",
    description: "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/pricing" />
        <RouteSchema
          type="pillar"
          path="/pricing"
          title="Pricing — Creative, AI Agents & Automation | OARC Digital Malta"
          description="Transparent pricing for OARC Digital's services. Project-scoped, outcome-led: brand sprints, social retainers, AI agents, automation suites, and bespoke engagements."
          faqs={SUPPORTING_PAGE_SCHEMAS["/pricing"].faqs}
        />
      <PageContent />
    </>
  );
}
