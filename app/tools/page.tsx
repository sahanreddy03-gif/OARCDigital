import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Tools & Tech Stack | OARC Digital",
  description: "The AI-powered tech stack OARC uses to ship creative, agents, and automation—tools change; doctrine does not.",
  alternates: getHreflangAlternates("/tools"),
  openGraph: {
    images: ogImageEntry({ title: "AI Tools & Tech Stack | OARC Digital", subtitle: "The AI-powered tech stack OARC uses to ship creative, agents, and automation—tools change; doctrine does not." }),
    title: "AI Tools & Tech Stack | OARC Digital",
    description: "The AI-powered tech stack OARC uses to ship creative, agents, and automation—tools change; doctrine does not.",
    url: "https://oarcdigital.com/tools",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Tools & Tech Stack | OARC Digital", subtitle: "The AI-powered tech stack OARC uses to ship creative, agents, and automation—tools change; doctrine does not." })],
    card: "summary_large_image",
    title: "AI Tools & Tech Stack | OARC Digital",
    description: "The AI-powered tech stack OARC uses to ship creative, agents, and automation—tools change; doctrine does not.",
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/tools" />
        <RouteSchema
          type="pillar"
          path="/tools"
          title="AI Tools & Tech Stack — OARC Digital Malta"
          description="The AI sales, marketing automation, creative, and analytics tools OARC Digital deploys. Curated stack of 80+ platforms, including pricing notes and use cases."
          faqs={SUPPORTING_PAGE_SCHEMAS["/tools"].faqs}
        />
      <PageContent />
    </>
  );
}
