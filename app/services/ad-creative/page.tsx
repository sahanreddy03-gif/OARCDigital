import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
  description: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
  alternates: { canonical: "https://oarcdigital.com/services/ad-creative" },
  openGraph: {
    images: ogImageEntry({ title: "Ad Creative Design | Performance Marketing Creative | OARC Digital", subtitle: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising." }),
    title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
    description: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
    url: "https://oarcdigital.com/services/ad-creative",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Ad Creative Design | Performance Marketing Creative | OARC Digital", subtitle: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising." })],
    card: "summary_large_image",
    title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
    description: "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ad-creative"];
    return (
      <>
        <SpeakableJsonLd path="/services/ad-creative" />
        <RouteSchema
          type="service"
          path="/services/ad-creative"
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
  