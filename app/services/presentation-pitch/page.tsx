import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Presentation Design | Pitch Decks | OARC Digital Malta",
  description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  alternates: getHreflangAlternates("/services/presentation-pitch"),
  openGraph: {
    images: ogImageEntry({ title: "Presentation Design | Pitch Decks | OARC Digital Malta", subtitle: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action." }),
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
    url: "https://oarcdigital.com/services/presentation-pitch",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Presentation Design | Pitch Decks | OARC Digital Malta", subtitle: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action." })],
    card: "summary_large_image",
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["presentation-pitch"];
    return (
      <>
        <SpeakableJsonLd path="/services/presentation-pitch" />
        <RouteSchema
          type="service"
          path="/services/presentation-pitch"
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
  