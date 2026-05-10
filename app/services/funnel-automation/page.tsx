import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
  description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  alternates: { canonical: "https://oarcdigital.com/services/funnel-automation" },
  openGraph: {
    images: ogImageEntry({ title: "Funnel Automation | Conversion Optimization | OARC Digital Malta", subtitle: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth." }),
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
    url: "https://oarcdigital.com/services/funnel-automation",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Funnel Automation | Conversion Optimization | OARC Digital Malta", subtitle: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth." })],
    card: "summary_large_image",
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description: "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["funnel-automation"];
    return (
      <>
        <SpeakableJsonLd path="/services/funnel-automation" />
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
  