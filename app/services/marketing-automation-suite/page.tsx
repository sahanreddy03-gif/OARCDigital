import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const SLUG = "marketing-automation-suite";
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
      {/* SSR-safe speakable shim: the client-rendered hero is gated by a
          loading state that suppresses [data-speakable] from initial HTML;
          this hidden h1/p is always present for the Speakable selector. */}
      <h1 className="sr-only" data-speakable>{SCHEMA.title}</h1>
      <p className="sr-only" data-speakable>{SCHEMA.description}</p>
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={SCHEMA.title}
        description={SCHEMA.description}
        features={SCHEMA.features}
        offers={SCHEMA.offers}
        faqs={SCHEMA.faqs}
      />
      <PageContent slug={SLUG} emitFaqJsonLd={false} extraSeoContent={<DeepContent />} />
    </>
  );
}
