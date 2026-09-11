import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Motion Design Malta | Animation That Moves | OARC",
  description: "Motion design and animation for Malta brands—ads, explainers, and social motion that earn attention without empty spectacle.",
  alternates: getHreflangAlternates("/services/motion-design"),
  openGraph: {
    images: ogImageEntry({ title: "Motion Design Malta | Animation That Moves | OARC", subtitle: "Motion design and animation for Malta brands—ads, explainers, and social motion that earn attention without empty spectacle." }),
    title: "Motion Design Malta | Animation That Moves | OARC",
    description: "Motion design and animation for Malta brands—ads, explainers, and social motion that earn attention without empty spectacle.",
    url: "https://oarcdigital.com/services/motion-design",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Motion Design Malta | Animation That Moves | OARC", subtitle: "Motion design and animation for Malta brands—ads, explainers, and social motion that earn attention without empty spectacle." })],
    card: "summary_large_image",
    title: "Motion Design Malta | Animation That Moves | OARC",
    description: "Motion design and animation for Malta brands—ads, explainers, and social motion that earn attention without empty spectacle.",
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
  