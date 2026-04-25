import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Influencer Partners | Creator Campaigns | OARC Digital",
  description: "Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish.",
  alternates: { canonical: "https://oarcdigital.com/services/influencer-marketing" },
  openGraph: {
    title: "Influencer Partners | Creator Campaigns | OARC Digital",
    description: "Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish.",
    url: "https://oarcdigital.com/services/influencer-marketing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Partners | Creator Campaigns | OARC Digital",
    description: "Connect with vetted creators who align with your brand. We handle sourcing, outreach, contracts, and campaign management from start to finish.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["influencer"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/influencer"
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
  