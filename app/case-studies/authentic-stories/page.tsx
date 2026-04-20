import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Authentic Stories TikTok Success Case Study | OARC Digital",
  description: "How OARC Digital's authentic content approach garnered 2 million likes and 400K NEW TikTok followers through genuine storytelling.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/authentic-stories" },
  openGraph: {
    title: "Authentic Stories TikTok Success Case Study | OARC Digital",
    description: "How OARC Digital's authentic content approach garnered 2 million likes and 400K NEW TikTok followers through genuine storytelling.",
    url: "https://oarcdigital.com/case-studies/authentic-stories",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Stories TikTok Success Case Study | OARC Digital",
    description: "How OARC Digital's authentic content approach garnered 2 million likes and 400K NEW TikTok followers through genuine storytelling.",
  },
};

export default function Page() {
  return <PageContent />;
}
