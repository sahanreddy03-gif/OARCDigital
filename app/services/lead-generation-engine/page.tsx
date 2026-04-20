import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
  description: "Stop chasing cold leads. OARC\\",
  alternates: { canonical: "https://oarcdigital.com/services/lead-generation-engine" },
  openGraph: {
    title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
    description: "Stop chasing cold leads. OARC\\",
    url: "https://oarcdigital.com/services/lead-generation-engine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
    description: "Stop chasing cold leads. OARC\\",
  },
};

export default function Page() {
  return <PageContent slug="lead-generation-engine" />;
}
