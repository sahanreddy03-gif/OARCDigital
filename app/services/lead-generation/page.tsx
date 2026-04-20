import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
  description: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
  alternates: { canonical: "https://oarcdigital.com/services/lead-generation" },
  openGraph: {
    title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
    description: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
    url: "https://oarcdigital.com/services/lead-generation",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
    description: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
  },
};

export default function Page() {
  return <PageContent slug="lead-generation" />;
}
