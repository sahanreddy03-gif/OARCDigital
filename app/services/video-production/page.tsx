import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const SLUG = "video-production";
const SCHEMA = SERVICE_SCHEMAS[SLUG];
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: SCHEMA.title,
  description: SCHEMA.description,
  alternates: getHreflangAlternates(`/services/${SLUG}`),
  openGraph: {
    title: SCHEMA.title,
    description: SCHEMA.description,
    url: URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SCHEMA.title,
    description: SCHEMA.description,
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path={`/services/${SLUG}`} />
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={SCHEMA.title}
        description={SCHEMA.description}
        features={SCHEMA.features}
        offers={SCHEMA.offers}
        faqs={SCHEMA.faqs}
      />
      <PageContent />
    </>
  );
}
