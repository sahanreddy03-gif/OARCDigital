import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Business Diagnostics | OARC Intelligence",
  description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  openGraph: {
    title: "Business Diagnostics | OARC Intelligence",
    description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Diagnostics | OARC Intelligence",
    description: "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
};

export default function Page() {
  return <PageContent />;
}
