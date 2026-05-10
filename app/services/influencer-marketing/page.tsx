import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Influencer Marketing | Creator Partnerships | OARC Digital",
  description: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
  alternates: getHreflangAlternates("/services/influencer-marketing"),
  openGraph: {
    images: ogImageEntry({ title: "Influencer Marketing | Creator Partnerships | OARC Digital", subtitle: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships." }),
    title: "Influencer Marketing | Creator Partnerships | OARC Digital",
    description: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
    url: "https://oarcdigital.com/services/influencer-marketing",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Influencer Marketing | Creator Partnerships | OARC Digital", subtitle: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships." })],
    card: "summary_large_image",
    title: "Influencer Marketing | Creator Partnerships | OARC Digital",
    description: "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["influencer-marketing"];
    return (
      <>
        <SpeakableJsonLd path="/services/influencer-marketing" />
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
  