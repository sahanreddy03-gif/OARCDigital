import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/intelligence"),
  title: "Business Diagnostics | OARC Intelligence",
  description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  openGraph: {
    images: ogImageEntry({ title: "Business Diagnostics | OARC Intelligence", subtitle: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries." }),
    title: "Business Diagnostics | OARC Intelligence",
    description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
  twitter: {
    images: [ogImageUrl({ title: "Business Diagnostics | OARC Intelligence", subtitle: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries." })],
    card: "summary_large_image",
    title: "Business Diagnostics | OARC Intelligence",
    description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/intelligence" />
        <RouteSchema
          type="pillar"
          path="/intelligence"
          title="OARC Intelligence — Business Diagnostics & Market Intel | Malta"
          description="OARC Intelligence is the diagnostic layer: industry scans, growth simulators, and AI workforce design tools that surface where revenue is leaking and what to fix first."
          faqs={SUPPORTING_PAGE_SCHEMAS["/intelligence"].faqs}
        />
      <PageContent />
    </>
  );
}
