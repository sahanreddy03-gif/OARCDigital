import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";


const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://oarcdigital.com/diagnostics",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  },
};

export const metadata: Metadata = {
  title: "Free Business Diagnostics — Malta | OARC Digital",
  description:
    "Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — for Malta SMEs who want a fast read on where revenue is leaking and what to fix first.",
  alternates: getHreflangAlternates("/diagnostics"),
  openGraph: {
    images: ogImageEntry({ title: "Free Business Diagnostics — Malta | OARC Digital", subtitle: "Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — for Malta SMEs who want a fast read on where revenue is leaking and what to fix first." }),
    title: "Free Business Diagnostics — Malta | OARC Digital",
    description:
      "Run four free diagnostic tools on your own business. Industry Scan, Growth Simulator, AI Workforce Designer, Cortex Business Intelligence Scan. No login.",
    url: "https://oarcdigital.com/diagnostics",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Free Business Diagnostics — Malta | OARC Digital", subtitle: "Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — for Malta SMEs who want a fast read on where revenue is leaking and what to fix first." })],
    card: "summary_large_image",
    title: "Free Business Diagnostics — Malta | OARC Digital",
    description:
      "Four free tools for Malta SMEs to diagnose revenue leakage and design an AI workforce. No login, no credit card.",
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/diagnostics" />
      <RouteSchema
        type="pillar"
        path="/diagnostics"
        title="Free Business Diagnostics for Malta SMEs | OARC Digital"
        description="Four free diagnostic tools for Malta SMEs: Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan. No login required."
        faqs={SUPPORTING_PAGE_SCHEMAS["/diagnostics"].faqs}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_JSONLD) }}
      />
      <PageContent />
    </>
  );
}
