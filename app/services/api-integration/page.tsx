import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const SLUG = "api-integration";
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: "API Integration Malta | Connect Any System | OARC Digital",
  description: "Custom API development and third-party integration for Malta businesses. Stripe, Salesforce, Twilio, and 500+ platforms. REST, GraphQL, webhooks — enterprise-grade reliability.",
  alternates: getHreflangAlternates(`/services/${SLUG}`),
  openGraph: {
    images: ogImageEntry({
      title: "API Integration Malta | Connect Any System | OARC Digital",
      subtitle: "Custom REST and GraphQL APIs, third-party integration, and data synchronisation. 500+ platforms. Enterprise-grade reliability.",
    }),
    title: "API Integration Malta | Connect Any System | OARC Digital",
    description: "Custom API development and third-party integration for Malta businesses. 500+ platforms, REST, GraphQL, webhooks.",
    url: URL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({
      title: "API Integration Malta | Connect Any System | OARC Digital",
      subtitle: "Custom REST and GraphQL APIs for Malta businesses. 500+ platforms, enterprise-grade reliability.",
    })],
    card: "summary_large_image",
    title: "API Integration Malta | Connect Any System | OARC Digital",
    description: "Custom API development and third-party integration for Malta businesses. 500+ platforms.",
  },
};

export default function Page() {
  const schema = SERVICE_SCHEMA_EXTRAS[SLUG];
  return (
    <>
      <SpeakableJsonLd path={`/services/${SLUG}`} />
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={schema?.title ?? "API Integration Malta"}
        description={schema?.description ?? metadata.description as string}
        features={schema?.features}
        offers={schema?.offers}
        faqs={schema?.faqs}
      />
      <PageContent />
    </>
  );
}
