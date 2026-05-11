import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now",
  description: "Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026. What works, what doesn't, and what OARC actually uses with clients.",
  alternates: { canonical: "https://oarcdigital.com/blog/ai-marketing-malta" },
  openGraph: {
    images: ogImageEntry({ title: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now", subtitle: "Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026. What works, what doesn't, and what OARC actually uses with clients." }),
    title: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now",
    description: "Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026. What works, what doesn't, and what OARC actually uses with clients.",
    url: "https://oarcdigital.com/blog/ai-marketing-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now", subtitle: "Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026. What works, what doesn't, and what OARC actually uses with clients." })],
    card: "summary_large_image",
    title: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now",
    description: "Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026. What works, what doesn't, and what OARC actually uses with clients.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/ai-marketing-malta"
        title="AI Marketing in Malta: What's Actually Useful for Your Business Right Now"
        description="Beyond the hype — the AI marketing tools saving Malta businesses real time and money in 2026. What works, what doesn't, and what OARC actually uses with clients."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
