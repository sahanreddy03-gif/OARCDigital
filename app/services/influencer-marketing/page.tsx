import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Influencer Marketing | Creator Partnerships | OARC Digital",
  description: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
  alternates: { canonical: "https://oarcdigital.com/services/influencer-marketing" },
  openGraph: {
    title: "Influencer Marketing | Creator Partnerships | OARC Digital",
    description: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
    url: "https://oarcdigital.com/services/influencer-marketing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing | Creator Partnerships | OARC Digital",
    description: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["influencer-marketing"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/influencer-marketing"
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
  