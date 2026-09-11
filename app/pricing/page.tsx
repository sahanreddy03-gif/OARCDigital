import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { supportingPagesSEO } from "@/data/seoMetadata";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/pricing"),
  title: "Pricing | OARC Digital Malta",
  description: "OARC pricing is scoped to outcomes—creative, AI employees, H360, growth—not mystery retainers. Book a call for a clear commercial fit.",
  openGraph: {
    images: ogImageEntry({ title: "Pricing | OARC Digital Malta", subtitle: "OARC pricing is scoped to outcomes—creative, AI employees, H360, growth—not mystery retainers. Book a call for a clear commercial fit." }),
    title: "Pricing | OARC Digital Malta",
    description: "OARC pricing is scoped to outcomes—creative, AI employees, H360, growth—not mystery retainers. Book a call for a clear commercial fit.",
    url: `https://oarcdigital.com${supportingPagesSEO.pricing.path}`,
    type: supportingPagesSEO.pricing.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Pricing | OARC Digital Malta", subtitle: "OARC pricing is scoped to outcomes—creative, AI employees, H360, growth—not mystery retainers. Book a call for a clear commercial fit." })],
    card: "summary_large_image",
    title: "Pricing | OARC Digital Malta",
    description: "OARC pricing is scoped to outcomes—creative, AI employees, H360, growth—not mystery retainers. Book a call for a clear commercial fit.",
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/pricing" />
        <RouteSchema
          type="pillar"
          path="/pricing"
          title="Pricing | OARC Digital Malta"
          description="Transparent pricing for OARC Digital's services. Project-scoped, outcome-led: brand sprints, social retainers, AI agents, automation suites, and bespoke engagements."
          faqs={SUPPORTING_PAGE_SCHEMAS["/pricing"].faqs}
        />
      <PageContent />
    </>
  );
}
