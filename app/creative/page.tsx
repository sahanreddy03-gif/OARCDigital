import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const pillarMeta = PILLAR_SCHEMAS["/creative"];

export const metadata: Metadata = {
  title: pillarMeta.title,
  description: pillarMeta.description,
  keywords: "creative agency Malta, social media agency Malta, branding agency Malta, web design Malta, video production Malta, marketing agency Malta, brand strategy Malta, social media management Malta, content creation Malta, graphic design Malta, paid advertising Malta, Google Ads Malta, Meta Ads Malta, Instagram marketing Malta, digital marketing Malta, social media Malta",
  alternates: getHreflangAlternates("/creative"),
  openGraph: {
    title: pillarMeta.title,
    description: pillarMeta.description,
    url: "https://oarcdigital.com/creative",
    type: "website",
    images: [{ url: "https://oarcdigital.com/attached_assets/ai-enhanced-creative-optimized.jpg", width: 1200, height: 630, alt: "OARC Digital creative studio — AI-augmented brand, video and social production Malta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pillarMeta.title,
    description: pillarMeta.description,
    images: ["https://oarcdigital.com/attached_assets/ai-enhanced-creative-optimized.jpg"],
  },
};

export default function Page() {
  const pillar = PILLAR_SCHEMAS["/creative"];
  return (
    <>
      <SpeakableJsonLd path="/creative" />
      <RouteSchema
        type="pillar"
        path="/creative"
        title={pillar.title}
        description={pillar.description}
        faqs={pillar.faqs}
      />
      <PageContent />
    </>
  );
}
