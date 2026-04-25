import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Funnel Optimization Agent | Conversion Intelligence | OARC Digital Malta",
  description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal. 2.5x conversion rate.",
  alternates: { canonical: "https://oarcdigital.com/services/funnel-optimization-agent" },
  openGraph: {
    title: "Funnel Optimization Agent | Conversion Intelligence | OARC Digital Malta",
    description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal. 2.5x conversion rate.",
    url: "https://oarcdigital.com/services/funnel-optimization-agent",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnel Optimization Agent | Conversion Intelligence | OARC Digital Malta",
    description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal. 2.5x conversion rate.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["funnel-optimization-agent"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/funnel-optimization-agent"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="funnel-optimization-agent" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  