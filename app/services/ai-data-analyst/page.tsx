import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
  description: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-data-analyst" },
  openGraph: {
    images: ogImageEntry({ title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital", subtitle: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics." }),
    title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
    description: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
    url: "https://oarcdigital.com/services/ai-data-analyst",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital", subtitle: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics." })],
    card: "summary_large_image",
    title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
    description: "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
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
  