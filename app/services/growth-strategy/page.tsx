import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
  description: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
  alternates: { canonical: "https://oarcdigital.com/services/growth-strategy" },
  openGraph: {
    images: ogImageEntry({ title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital", subtitle: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders." }),
    title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
    description: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
    url: "https://oarcdigital.com/services/growth-strategy",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital", subtitle: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders." })],
    card: "summary_large_image",
    title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
    description: "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["growth-strategy"];
    return (
      <>
        <SpeakableJsonLd path="/services/growth-strategy" />
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
  