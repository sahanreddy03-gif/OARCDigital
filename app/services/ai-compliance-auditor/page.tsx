import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";

export const metadata: Metadata = {
  title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital",
  description: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-compliance-auditor" },
  openGraph: {
    title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital",
    description: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7.",
    url: "https://oarcdigital.com/services/ai-compliance-auditor",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital",
    description: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7.",
  },
};

export default function Page() {
  return <PageContent slug="ai-compliance-auditor" />;
}
