import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Data Analyst Malta | Insights Assistant | OARC",
  description: "AI data analysts that help Malta teams pull decision-ready insights from approved datasets—with human verification on critical calls.",
  alternates: getHreflangAlternates("/services/ai-data-analyst"),
  openGraph: {
    images: ogImageEntry({ title: "AI Data Analyst Malta | Insights Assistant | OARC", subtitle: "AI data analysts that help Malta teams pull decision-ready insights from approved datasets—with human verification on critical calls." }),
    title: "AI Data Analyst Malta | Insights Assistant | OARC",
    description: "AI data analysts that help Malta teams pull decision-ready insights from approved datasets—with human verification on critical calls.",
    url: "https://oarcdigital.com/services/ai-data-analyst",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Data Analyst Malta | Insights Assistant | OARC", subtitle: "AI data analysts that help Malta teams pull decision-ready insights from approved datasets—with human verification on critical calls." })],
    card: "summary_large_image",
    title: "AI Data Analyst Malta | Insights Assistant | OARC",
    description: "AI data analysts that help Malta teams pull decision-ready insights from approved datasets—with human verification on critical calls.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-data-analyst"];
    return (
      <>
        <SpeakableJsonLd path="/services/ai-data-analyst" />
        <RouteSchema
          type="service"
          path="/services/ai-data-analyst"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="ai-data-analyst" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  