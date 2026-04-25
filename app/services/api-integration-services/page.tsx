import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

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
    const schema = SERVICE_SCHEMA_EXTRAS["api-integration-services"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/api-integration-services"
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
  