import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital",
  description: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies.",
  alternates: { canonical: "https://oarcdigital.com/blog/ai-automation-malta" },
  openGraph: {
    images: ogImageEntry({ title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital", subtitle: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies." }),
    title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital",
    description: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies.",
    url: "https://oarcdigital.com/blog/ai-automation-malta",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital", subtitle: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies." })],
    card: "summary_large_image",
    title: "AI Automation Malta: Save 20+ Hours Per Week | OARC Digital",
    description: "Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/ai-automation-malta"
        title="AI Automation Malta: Save 20+ Hours Per Week | OARC Digital"
        description="Discover how AI automation is transforming Maltese businesses. Learn which tasks to automate first, expected time savings, and how OARC Digital builds AI systems for Malta companies."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
