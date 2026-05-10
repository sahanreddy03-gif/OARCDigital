import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Motion Design | Animation & Motion Graphics | OARC Digital",
  description: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
  alternates: getHreflangAlternates("/services/motion-design"),
  openGraph: {
    images: ogImageEntry({ title: "Motion Design | Animation & Motion Graphics | OARC Digital", subtitle: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences." }),
    title: "Motion Design | Animation & Motion Graphics | OARC Digital",
    description: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
    url: "https://oarcdigital.com/services/motion-design",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Motion Design | Animation & Motion Graphics | OARC Digital", subtitle: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences." })],
    card: "summary_large_image",
    title: "Motion Design | Animation & Motion Graphics | OARC Digital",
    description: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["motion-design"];
    return (
      <>
        <SpeakableJsonLd path="/services/motion-design" />
        <RouteSchema
          type="service"
          path="/services/motion-design"
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
  