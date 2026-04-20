import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
  description: "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-consulting" },
  openGraph: {
    title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
    description: "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
    url: "https://oarcdigital.com/services/ai-consulting",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
    description: "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
  },
};

export default function Page() {
  return <PageContent />;
}
