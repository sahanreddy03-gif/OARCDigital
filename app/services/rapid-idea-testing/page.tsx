import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Rapid Idea Testing | Marketing Experimentation | OARC Digital",
  description: "Validate marketing ideas fast with OARC Digital's rapid testing framework. Reduce risk and accelerate innovation with AI-powered experimentation.",
  alternates: { canonical: "https://oarcdigital.com/services/rapid-idea-testing" },
  openGraph: {
    title: "Rapid Idea Testing | Marketing Experimentation | OARC Digital",
    description: "Validate marketing ideas fast with OARC Digital's rapid testing framework. Reduce risk and accelerate innovation with AI-powered experimentation.",
    url: "https://oarcdigital.com/services/rapid-idea-testing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Idea Testing | Marketing Experimentation | OARC Digital",
    description: "Validate marketing ideas fast with OARC Digital's rapid testing framework. Reduce risk and accelerate innovation with AI-powered experimentation.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["rapid-idea-testing"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/rapid-idea-testing"
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
  