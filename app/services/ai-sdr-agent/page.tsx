import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";

export const metadata: Metadata = {
  title: "Sales Development Rep Agent | AI-Powered Lead Qualification | OARC Digital",
  description: "Precision lead qualification with 3x conversion lift. Our AI SDR Agent qualifies prospects, books meetings, and nurtures leads—so your sales team only talks to buyers ready to convert.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-sdr-agent" },
  openGraph: {
    title: "Sales Development Rep Agent | AI-Powered Lead Qualification | OARC Digital",
    description: "Precision lead qualification with 3x conversion lift. Our AI SDR Agent qualifies prospects, books meetings, and nurtures leads—so your sales team only talks to buyers ready to convert.",
    url: "https://oarcdigital.com/services/ai-sdr-agent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Development Rep Agent | AI-Powered Lead Qualification | OARC Digital",
    description: "Precision lead qualification with 3x conversion lift. Our AI SDR Agent qualifies prospects, books meetings, and nurtures leads—so your sales team only talks to buyers ready to convert.",
  },
};

export default function Page() {
  return <PageContent slug="ai-sdr-agent" />;
}
