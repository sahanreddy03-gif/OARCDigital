import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "API Integration Services | Connect Any System | OARC Digital",
  description: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability.",
  alternates: { canonical: "https://oarcdigital.com/services/api-integration-services" },
  openGraph: {
    title: "API Integration Services | Connect Any System | OARC Digital",
    description: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability.",
    url: "https://oarcdigital.com/services/api-integration-services",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Integration Services | Connect Any System | OARC Digital",
    description: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability.",
  },
};

export default function Page() {
  return <PageContent />;
}
