import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Idea Validation & Growth Hacker | Rapid Market Testing | OARC Digital",
  description: "Launch with confidence, not guesswork. Validate product-market fit in weeks with AI-driven testing frameworks used by top startups. 10x faster validation.",
  alternates: { canonical: "https://oarcdigital.com/services/idea-validation-engine" },
  openGraph: {
    title: "Idea Validation & Growth Hacker | Rapid Market Testing | OARC Digital",
    description: "Launch with confidence, not guesswork. Validate product-market fit in weeks with AI-driven testing frameworks used by top startups. 10x faster validation.",
    url: "https://oarcdigital.com/services/idea-validation-engine",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea Validation & Growth Hacker | Rapid Market Testing | OARC Digital",
    description: "Launch with confidence, not guesswork. Validate product-market fit in weeks with AI-driven testing frameworks used by top startups. 10x faster validation.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["idea-validation-engine"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/idea-validation-engine"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="idea-validation-engine" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  