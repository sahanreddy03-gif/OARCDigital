import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Web Design in Malta: What It Costs and What You Actually Need (2026)",
  description: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026.",
  alternates: { canonical: "https://oarcdigital.com/blog/web-design-malta" },
  openGraph: {
    title: "Web Design in Malta: What It Costs and What You Actually Need (2026)",
    description: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026.",
    url: "https://oarcdigital.com/blog/web-design-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design in Malta: What It Costs and What You Actually Need (2026)",
    description: "Most Malta businesses overpay for websites they don't need or underpay for websites that kill their credibility. Here's how to navigate the market in 2026.",
  },
};

export default function Page() {
  return <PageContent />;
}
