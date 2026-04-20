import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital",
  description: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies.",
  alternates: { canonical: "https://oarcdigital.com/blog/ai-automation-malta" },
  openGraph: {
    title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital",
    description: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies.",
    url: "https://oarcdigital.com/blog/ai-automation-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital",
    description: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies.",
  },
};

export default function Page() {
  return <PageContent />;
}
