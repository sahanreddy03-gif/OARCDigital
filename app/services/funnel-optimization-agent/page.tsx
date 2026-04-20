import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Funnel Optimization Agent | Conversion Intelligence | OARC Digital Malta",
  description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal. 2.5x conversion rate.",
  alternates: { canonical: "https://oarcdigital.com/services/funnel-optimization-agent" },
  openGraph: {
    title: "Funnel Optimization Agent | Conversion Intelligence | OARC Digital Malta",
    description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal. 2.5x conversion rate.",
    url: "https://oarcdigital.com/services/funnel-optimization-agent",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnel Optimization Agent | Conversion Intelligence | OARC Digital Malta",
    description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal. 2.5x conversion rate.",
  },
};

export default function Page() {
  return <PageContent slug="funnel-optimization-agent" />;
}
