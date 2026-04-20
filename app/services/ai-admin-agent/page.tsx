import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";

export const metadata: Metadata = {
  title: "Administrative Workflow Agent | AI Virtual Assistant | OARC Digital",
  description: "Reclaim 50% of your day from routine tasks. Deploy an AI administrative agent that handles scheduling, email management, and workflows automatically.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-admin-agent" },
  openGraph: {
    title: "Administrative Workflow Agent | AI Virtual Assistant | OARC Digital",
    description: "Reclaim 50% of your day from routine tasks. Deploy an AI administrative agent that handles scheduling, email management, and workflows automatically.",
    url: "https://oarcdigital.com/services/ai-admin-agent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Administrative Workflow Agent | AI Virtual Assistant | OARC Digital",
    description: "Reclaim 50% of your day from routine tasks. Deploy an AI administrative agent that handles scheduling, email management, and workflows automatically.",
  },
};

export default function Page() {
  return <PageContent slug="ai-admin-agent" />;
}
