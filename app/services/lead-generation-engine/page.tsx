import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
  description: "Stop chasing cold leads. OARC's Lead Generation Engine identifies, scores, and nurtures high-intent prospects automatically—3x qualified leads guaranteed.",
  alternates: { canonical: "https://oarcdigital.com/services/lead-generation-engine" },
  openGraph: {
    title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
    description: "Stop chasing cold leads. OARC's Lead Generation Engine identifies, scores, and nurtures high-intent prospects automatically—3x qualified leads guaranteed.",
    url: "https://oarcdigital.com/services/lead-generation-engine",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation & Qualification Engine | AI-Powered Pipeline | OARC Digital",
    description: "Stop chasing cold leads. OARC's Lead Generation Engine identifies, scores, and nurtures high-intent prospects automatically—3x qualified leads guaranteed.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["lead-generation-engine"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/lead-generation-engine"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="lead-generation-engine" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  