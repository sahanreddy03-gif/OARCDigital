import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Business Diagnostics | OARC Intelligence",
  description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  openGraph: {
    images: ogImageEntry({ title: "Business Diagnostics | OARC Intelligence", subtitle: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries." }),
    title: "Business Diagnostics | OARC Intelligence",
    description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
  twitter: {
    images: [ogImageUrl({ title: "Business Diagnostics | OARC Intelligence", subtitle: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries." })],
    card: "summary_large_image",
    title: "Business Diagnostics | OARC Intelligence",
    description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
};

export default function Page() {
  return <PageContent />;
}
