import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "NexGen Retail Group | Full AI Transformation Case Study | OARC Digital",
  description: "How OARC deployed AI customer support agents, AI sales reps, and workflow automation to achieve 65% cost reduction and 4.8/5 CSAT for a mid-market retail group.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/nexgen-retail-ai-transformation" },
  openGraph: {
    title: "NexGen Retail Group | Full AI Transformation Case Study | OARC Digital",
    description: "How OARC deployed AI customer support agents, AI sales reps, and workflow automation to achieve 65% cost reduction and 4.8/5 CSAT for a mid-market retail group.",
    url: "https://oarcdigital.com/case-studies/nexgen-retail-ai-transformation",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Retail Group | Full AI Transformation Case Study | OARC Digital",
    description: "How OARC deployed AI customer support agents, AI sales reps, and workflow automation to achieve 65% cost reduction and 4.8/5 CSAT for a mid-market retail group.",
  },
};

export default function Page() {
  return <PageContent />;
}
