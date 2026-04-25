import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
  description: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
  alternates: { canonical: "https://oarcdigital.com/services/growth-strategy" },
  openGraph: {
    title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
    description: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
    url: "https://oarcdigital.com/services/growth-strategy",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
    description: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["growth-strategy"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/growth-strategy"
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
  