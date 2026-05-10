import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
  description: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
  alternates: getHreflangAlternates("/services/lead-generation"),
  openGraph: {
    images: ogImageEntry({ title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta", subtitle: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands." }),
    title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
    description: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
    url: "https://oarcdigital.com/services/lead-generation",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta", subtitle: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands." })],
    card: "summary_large_image",
    title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
    description: "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["lead-generation"];
    return (
      <>
        <SpeakableJsonLd path="/services/lead-generation" />
        <RouteSchema
          type="service"
          path="/services/lead-generation"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="lead-generation" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  