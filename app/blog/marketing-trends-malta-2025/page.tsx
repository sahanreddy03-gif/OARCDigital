import type { Metadata } from "next";
import PageContent from "./PageContent";

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
  return <PageContent />;
}
