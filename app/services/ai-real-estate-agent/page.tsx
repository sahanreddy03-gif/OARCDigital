import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";

export const metadata: Metadata = {
  title: "Real Estate Sales Specialist | Malta Property AI | OARC Digital Malta",
  description: "Malta-focused, bilingual deal acceleration for real estate. Our AI Real Estate Specialist qualifies buyers, schedules viewings, and accelerates property sales.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-real-estate-agent" },
  openGraph: {
    title: "Real Estate Sales Specialist | Malta Property AI | OARC Digital Malta",
    description: "Malta-focused, bilingual deal acceleration for real estate. Our AI Real Estate Specialist qualifies buyers, schedules viewings, and accelerates property sales.",
    url: "https://oarcdigital.com/services/ai-real-estate-agent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Sales Specialist | Malta Property AI | OARC Digital Malta",
    description: "Malta-focused, bilingual deal acceleration for real estate. Our AI Real Estate Specialist qualifies buyers, schedules viewings, and accelerates property sales.",
  },
};

export default function Page() {
  return <PageContent slug="ai-real-estate-agent" />;
}
