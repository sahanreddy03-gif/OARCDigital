import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "HealthPath AI Healthcare Automation Case Study | OARC Digital",
  description: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/healthpath-ai" },
  openGraph: {
    images: ogImageEntry({ title: "HealthPath AI Healthcare Automation Case Study | OARC Digital", subtitle: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services." }),
    title: "HealthPath AI Healthcare Automation Case Study | OARC Digital",
    description: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.",
    url: "https://oarcdigital.com/case-studies/healthpath-ai",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "HealthPath AI Healthcare Automation Case Study | OARC Digital", subtitle: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services." })],
    card: "summary_large_image",
    title: "HealthPath AI Healthcare Automation Case Study | OARC Digital",
    description: "How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.",
  },
};

export default function Page() {
  return <PageContent />;
}
