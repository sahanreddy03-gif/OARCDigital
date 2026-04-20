import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Sales Automation in Malta: How Businesses Are Replacing SDRs With AI Agents",
  description: "Malta businesses are deploying AI SDR agents to automate outreach, follow-ups, and lead qualification — at a fraction of the cost of a human sales rep. Here's how it works.",
  alternates: { canonical: "https://oarcdigital.com/blog/ai-sales-automation-malta" },
  openGraph: {
    title: "AI Sales Automation in Malta: How Businesses Are Replacing SDRs With AI Agents",
    description: "Malta businesses are deploying AI SDR agents to automate outreach, follow-ups, and lead qualification — at a fraction of the cost of a human sales rep. Here's how it works.",
    url: "https://oarcdigital.com/blog/ai-sales-automation-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Automation in Malta: How Businesses Are Replacing SDRs With AI Agents",
    description: "Malta businesses are deploying AI SDR agents to automate outreach, follow-ups, and lead qualification — at a fraction of the cost of a human sales rep. Here's how it works.",
  },
};

export default function Page() {
  return <PageContent />;
}
