import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Pitch Deck Design Malta | Presentations That Close | OARC",
  description: "Presentation and pitch deck design for Malta teams—clear narrative and visuals that help close rooms, not decorate slides.",
  alternates: getHreflangAlternates("/services/presentation-pitch"),
  openGraph: {
    images: ogImageEntry({ title: "Pitch Deck Design Malta | Presentations That Close | OARC", subtitle: "Presentation and pitch deck design for Malta teams—clear narrative and visuals that help close rooms, not decorate slides." }),
    title: "Pitch Deck Design Malta | Presentations That Close | OARC",
    description: "Presentation and pitch deck design for Malta teams—clear narrative and visuals that help close rooms, not decorate slides.",
    url: "https://oarcdigital.com/services/presentation-pitch",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Pitch Deck Design Malta | Presentations That Close | OARC", subtitle: "Presentation and pitch deck design for Malta teams—clear narrative and visuals that help close rooms, not decorate slides." })],
    card: "summary_large_image",
    title: "Pitch Deck Design Malta | Presentations That Close | OARC",
    description: "Presentation and pitch deck design for Malta teams—clear narrative and visuals that help close rooms, not decorate slides.",
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
  