import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Paid Ads Management | Meta, Google, TikTok, LinkedIn | OARC Digital",
  description: "Strategic paid campaigns across Meta, Google, TikTok, and LinkedIn. We optimize targeting, creative, and bidding to maximize your return on ad spend.",
  alternates: { canonical: "https://oarcdigital.com/services/paid-advertising" },
  openGraph: {
    title: "Paid Ads Management | Meta, Google, TikTok, LinkedIn | OARC Digital",
    description: "Strategic paid campaigns across Meta, Google, TikTok, and LinkedIn. We optimize targeting, creative, and bidding to maximize your return on ad spend.",
    url: "https://oarcdigital.com/services/paid-advertising",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Ads Management | Meta, Google, TikTok, LinkedIn | OARC Digital",
    description: "Strategic paid campaigns across Meta, Google, TikTok, and LinkedIn. We optimize targeting, creative, and bidding to maximize your return on ad spend.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["paid"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/paid"
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
  