import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "HealthPath AI Healthcare Automation Case Study | OARC Digital",
  description: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/healthpath-ai" },
  openGraph: {
    title: "HealthPath AI Healthcare Automation Case Study | OARC Digital",
    description: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.",
    url: "https://oarcdigital.com/case-studies/healthpath-ai",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthPath AI Healthcare Automation Case Study | OARC Digital",
    description: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.",
  },
};

export default function Page() {
  return <PageContent />;
}
