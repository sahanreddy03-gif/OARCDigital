import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";

export const metadata: Metadata = {
  title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
  description: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-data-analyst" },
  openGraph: {
    title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
    description: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
    url: "https://oarcdigital.com/services/ai-data-analyst",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
    description: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
  },
};

export default function Page() {
  return <PageContent slug="ai-data-analyst" />;
}
