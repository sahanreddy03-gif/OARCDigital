import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
  description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://oarcdigital.com/services/funnel-automation" },
  openGraph: {
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
    url: "https://oarcdigital.com/services/funnel-automation",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["funnel-automation"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/funnel-automation"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="funnel-automation" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  