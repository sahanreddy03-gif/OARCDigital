import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Administrative Workflow Agent | AI Virtual Assistant | OARC Digital",
  description: "Reclaim 50% of your day from routine tasks. Deploy an AI administrative agent that handles scheduling, email management, and workflows automatically.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-admin-agent" },
  openGraph: {
    title: "Administrative Workflow Agent | AI Virtual Assistant | OARC Digital",
    description: "Reclaim 50% of your day from routine tasks. Deploy an AI administrative agent that handles scheduling, email management, and workflows automatically.",
    url: "https://oarcdigital.com/services/ai-admin-agent",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Administrative Workflow Agent | AI Virtual Assistant | OARC Digital",
    description: "Reclaim 50% of your day from routine tasks. Deploy an AI administrative agent that handles scheduling, email management, and workflows automatically.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-admin-agent"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-admin-agent"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="ai-admin-agent" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  