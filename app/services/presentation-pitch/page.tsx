import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Presentation Design | Pitch Decks | OARC Digital Malta",
  description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  alternates: { canonical: "https://oarcdigital.com/services/presentation-pitch" },
  openGraph: {
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
    url: "https://oarcdigital.com/services/presentation-pitch",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description: "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["presentation-pitch"];
    return (
      <>
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
  