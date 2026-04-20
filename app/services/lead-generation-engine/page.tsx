import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
  description: "Stop chasing cold leads. OARC's Lead Generation Engine identifies, scores, and nurtures high-intent prospects automatically—3x qualified leads guaranteed.",
  alternates: { canonical: "https://oarcdigital.com/services/lead-generation-engine" },
  openGraph: {
    title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
    description: "Stop chasing cold leads. OARC's Lead Generation Engine identifies, scores, and nurtures high-intent prospects automatically—3x qualified leads guaranteed.",
    url: "https://oarcdigital.com/services/lead-generation-engine",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
    description: "Stop chasing cold leads. OARC's Lead Generation Engine identifies, scores, and nurtures high-intent prospects automatically—3x qualified leads guaranteed.",
  },
};

export default function Page() {
  return <PageContent slug="lead-generation-engine" />;
}
