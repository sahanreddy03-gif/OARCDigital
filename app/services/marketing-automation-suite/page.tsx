import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Marketing Automation Suite | Campaign Orchestration | OARC Digital",
  description: "Kill manual marketing tasks forever. Automate email sequences, social campaigns, and customer journeys with workflows that scale without extra headcount.",
  alternates: { canonical: "https://oarcdigital.com/services/marketing-automation-suite" },
  openGraph: {
    title: "Marketing Automation Suite | Campaign Orchestration | OARC Digital",
    description: "Kill manual marketing tasks forever. Automate email sequences, social campaigns, and customer journeys with workflows that scale without extra headcount.",
    url: "https://oarcdigital.com/services/marketing-automation-suite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Automation Suite | Campaign Orchestration | OARC Digital",
    description: "Kill manual marketing tasks forever. Automate email sequences, social campaigns, and customer journeys with workflows that scale without extra headcount.",
  },
};

export default function Page() {
  return <PageContent slug="marketing-automation-suite" />;
}
