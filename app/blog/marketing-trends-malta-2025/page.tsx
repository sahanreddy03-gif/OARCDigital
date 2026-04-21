import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Malta Business Marketing in 2025: What's Working Now | OARC Digital",
  description: "Exclusive 2025 report: discover the marketing trends actually driving revenue in Malta. From TikTok for local business to AI automation, see what's working now.",
  alternates: { canonical: "https://oarcdigital.com/blog/marketing-trends-malta-2025" },
  openGraph: {
    title: "Malta Business Marketing in 2025: What's Working Now | OARC Digital",
    description: "Exclusive 2025 report: discover the marketing trends actually driving revenue in Malta. From TikTok for local business to AI automation, see what's working now.",
    url: "https://oarcdigital.com/blog/marketing-trends-malta-2025",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malta Business Marketing in 2025: What's Working Now | OARC Digital",
    description: "Exclusive 2025 report: discover the marketing trends actually driving revenue in Malta. From TikTok for local business to AI automation, see what's working now.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/marketing-trends-malta-2025"
        title="Malta Business Marketing in 2025: What's Working Now | OARC Digital"
        description="Exclusive 2025 report: discover the marketing trends actually driving revenue in Malta. From TikTok for local business to AI automation, see what's working now."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
