import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Performance Analytics & Reporting | Data-Driven Insights | OARC Digital",
  description: "Custom analytics dashboards, ROI tracking, attribution modeling, and performance insights. Transform data into actionable growth strategies.",
  alternates: { canonical: "https://oarcdigital.com/services/performance-analytics" },
  openGraph: {
    title: "Performance Analytics & Reporting | Data-Driven Insights | OARC Digital",
    description: "Custom analytics dashboards, ROI tracking, attribution modeling, and performance insights. Transform data into actionable growth strategies.",
    url: "https://oarcdigital.com/services/performance-analytics",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Analytics & Reporting | Data-Driven Insights | OARC Digital",
    description: "Custom analytics dashboards, ROI tracking, attribution modeling, and performance insights. Transform data into actionable growth strategies.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["performance-analytics"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/performance-analytics"
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
  