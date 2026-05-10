import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Solutions for Malta Businesses | Complete Implementation Guide 2025",
  description: "The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business.",
  alternates: { canonical: "https://oarcdigital.com/blog/ai-solutions-malta" },
  openGraph: {
    images: ogImageEntry({ title: "AI Solutions for Malta Businesses | Complete Implementation Guide 2025", subtitle: "The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business." }),
    title: "AI Solutions for Malta Businesses | Complete Implementation Guide 2025",
    description: "The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business.",
    url: "https://oarcdigital.com/blog/ai-solutions-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Solutions for Malta Businesses | Complete Implementation Guide 2025", subtitle: "The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business." })],
    card: "summary_large_image",
    title: "AI Solutions for Malta Businesses | Complete Implementation Guide 2025",
    description: "The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/ai-solutions-malta"
        title="AI Solutions for Malta Businesses | Complete Implementation Guide 2025"
        description="The definitive guide to building AI systems in Malta. Learn about custom AI development costs, use cases for iGaming and Tourism, and how to automate your business."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
