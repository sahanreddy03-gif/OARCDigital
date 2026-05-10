import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "API Integration Services | Connect Any System | OARC Digital",
  description: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability.",
  alternates: { canonical: "https://oarcdigital.com/services/api-integration-services" },
  openGraph: {
    images: ogImageEntry({ title: "API Integration Services | Connect Any System | OARC Digital", subtitle: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability." }),
    title: "API Integration Services | Connect Any System | OARC Digital",
    description: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability.",
    url: "https://oarcdigital.com/services/api-integration-services",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "API Integration Services | Connect Any System | OARC Digital", subtitle: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability." })],
    card: "summary_large_image",
    title: "API Integration Services | Connect Any System | OARC Digital",
    description: "Seamlessly connect your systems with custom API integrations. Stripe, Salesforce, Twilio, and 500+ platforms. Enterprise-grade reliability.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["api-integration"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/api-integration"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <PageContent />
      </>
    );
  }
  