import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Media Buying | Programmatic Advertising | OARC Digital Malta",
  description: "Strategic media buying and programmatic advertising from OARC Digital. Optimize ad spend and maximize reach with elite media planning and execution.",
  alternates: { canonical: "https://oarcdigital.com/services/media-buying" },
  openGraph: {
    title: "Media Buying | Programmatic Advertising | OARC Digital Malta",
    description: "Strategic media buying and programmatic advertising from OARC Digital. Optimize ad spend and maximize reach with elite media planning and execution.",
    url: "https://oarcdigital.com/services/media-buying",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Buying | Programmatic Advertising | OARC Digital Malta",
    description: "Strategic media buying and programmatic advertising from OARC Digital. Optimize ad spend and maximize reach with elite media planning and execution.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["media-buying"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/media-buying"
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
  