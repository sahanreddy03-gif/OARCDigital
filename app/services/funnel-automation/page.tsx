import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
  description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  alternates: { canonical: "https://oarcdigital.com/services/funnel-automation" },
  openGraph: {
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
    url: "https://oarcdigital.com/services/funnel-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  },
};

export default function Page() {
  return <PageContent slug="funnel-automation" />;
}
