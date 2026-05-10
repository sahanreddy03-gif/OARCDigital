import type { Metadata } from "next";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Tools & Tech Stack | OARC Digital",
  description: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
  alternates: getHreflangAlternates("/tools"),
  openGraph: {
    images: ogImageEntry({ title: "AI Tools & Tech Stack | OARC Digital", subtitle: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma." }),
    title: "AI Tools & Tech Stack | OARC Digital",
    description: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
    url: "https://oarcdigital.com/tools",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Tools & Tech Stack | OARC Digital", subtitle: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma." })],
    card: "summary_large_image",
    title: "AI Tools & Tech Stack | OARC Digital",
    description: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
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
