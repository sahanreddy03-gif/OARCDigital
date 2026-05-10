import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Web Design in Malta: What It Costs and What You Actually Need (2026)",
  description: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026.",
  alternates: { canonical: "https://oarcdigital.com/blog/web-design-malta" },
  openGraph: {
    images: ogImageEntry({ title: "Web Design in Malta: What It Costs and What You Actually Need (2026)", subtitle: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026." }),
    title: "Web Design in Malta: What It Costs and What You Actually Need (2026)",
    description: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026.",
    url: "https://oarcdigital.com/blog/web-design-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Web Design in Malta: What It Costs and What You Actually Need (2026)", subtitle: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026." })],
    card: "summary_large_image",
    title: "Web Design in Malta: What It Costs and What You Actually Need (2026)",
    description: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/web-design-malta"
        title="Web Design in Malta: What It Costs and What You Actually Need (2026)"
        description="Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
