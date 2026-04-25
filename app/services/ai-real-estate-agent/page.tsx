import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Real Estate Sales Specialist | Malta Property AI | OARC Digital Malta",
  description: "Malta-focused, bilingual deal acceleration for real estate. Our AI Real Estate Specialist qualifies buyers, schedules viewings, and accelerates property sales.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-real-estate-agent" },
  openGraph: {
    title: "Real Estate Sales Specialist | Malta Property AI | OARC Digital Malta",
    description: "Malta-focused, bilingual deal acceleration for real estate. Our AI Real Estate Specialist qualifies buyers, schedules viewings, and accelerates property sales.",
    url: "https://oarcdigital.com/services/ai-real-estate-agent",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Sales Specialist | Malta Property AI | OARC Digital Malta",
    description: "Malta-focused, bilingual deal acceleration for real estate. Our AI Real Estate Specialist qualifies buyers, schedules viewings, and accelerates property sales.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-real-estate-agent"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-real-estate-agent"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="ai-real-estate-agent" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  