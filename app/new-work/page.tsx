/* OARC Design Reminder — Evidence in Motion: New Work is the single combined index; it must preserve the distinction between original OARC records and curated client records. */
import type { Metadata } from "next";
import NewWorkIndex from "@/components/premium-work/NewWorkIndex";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";

const title = "New Work — OARC Digital Client Portfolio | Malta";
const description = "Explore OARC Digital client work across digital marketing, social media management, social video, TikTok campaigns, content production, websites, paid advertising, automation, AI chatbots, digital products, and launch campaigns.";
const keywords = ["digital marketing agency Malta", "social media management Malta", "social media video", "TikTok marketing Malta", "video production Malta", "content creation Malta", "website design Malta", "AI chatbot implementation Malta", "marketing automation Malta", "paid advertising Malta", "digital agency Malta"];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: getHreflangAlternates("/new-work"),
  openGraph: {
    title,
    description,
    url: "https://oarcdigital.com/new-work",
    type: "website",
    images: ogImageEntry({ title: "New Work — OARC Digital Client Portfolio", subtitle: "Brand, content, digital products, systems, events, and launch campaigns." }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl({ title: "New Work — OARC Digital Client Portfolio", subtitle: "Brand, content, digital products, systems, events, and launch campaigns." })],
  },
  robots: { index: true, follow: true },
};

export default function NewWorkPage() {
  return <>
    <SpeakableJsonLd path="/new-work" />
    <RouteSchema type="pillar" path="/new-work" title={title} description={description} faqs={SUPPORTING_PAGE_SCHEMAS["/new-work"].faqs} includeLocalBusiness={false} />
    <NewWorkIndex />
  </>;
}
