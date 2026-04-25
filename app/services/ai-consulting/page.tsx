import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
  description: "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-consulting" },
  openGraph: {
    title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
    description: "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
    url: "https://oarcdigital.com/services/ai-consulting",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
    description: "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-consulting"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-consulting"
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
  