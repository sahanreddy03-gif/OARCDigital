import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const SLUG = "web-apps-development";
const SCHEMA = SERVICE_SCHEMAS[SLUG];
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: SCHEMA.title,
  description: SCHEMA.description,
  alternates: getHreflangAlternates("/services/web-apps-development"),
  openGraph: { images: ogImageEntry({ title: SCHEMA.title, subtitle: SCHEMA.description }),
 title: SCHEMA.title, description: SCHEMA.description, url: URL, type: "article" },
  twitter: { images: [ogImageUrl({ title: SCHEMA.title, subtitle: SCHEMA.description })],
 card: "summary_large_image", title: SCHEMA.title, description: SCHEMA.description },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/services/web-apps-development" />
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
