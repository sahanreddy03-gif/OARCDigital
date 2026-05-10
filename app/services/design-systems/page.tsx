import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Design Systems | Scalable UI Frameworks | OARC Digital",
  description: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
  alternates: { canonical: "https://oarcdigital.com/services/design-systems" },
  openGraph: {
    images: ogImageEntry({ title: "Design Systems | Scalable UI Frameworks | OARC Digital", subtitle: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture." }),
    title: "Design Systems | Scalable UI Frameworks | OARC Digital",
    description: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
    url: "https://oarcdigital.com/services/design-systems",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Design Systems | Scalable UI Frameworks | OARC Digital", subtitle: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture." })],
    card: "summary_large_image",
    title: "Design Systems | Scalable UI Frameworks | OARC Digital",
    description: "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["design-systems"];
    return (
      <>
        <SpeakableJsonLd path="/services/design-systems" />
        <RouteSchema
          type="service"
          path="/services/design-systems"
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
  