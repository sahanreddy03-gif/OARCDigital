import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const SLUG = "customer-acquisition";
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: "Customer Acquisition Malta | Predictable Growth | OARC",
  description: "Customer acquisition systems for Malta businesses—tight offers, channels, and conversion paths aimed at steadier CPA discipline (no fake CPA promises).",
  alternates: getHreflangAlternates(`/services/${SLUG}`),
  openGraph: {
    images: ogImageEntry({
      title: "Customer Acquisition Malta | Predictable CPA | OARC Digital",
      subtitle: "Full-funnel customer acquisition measured by CPA, not impressions. First-party attribution, multi-channel execution, weekly reporting.",
    }),
    title: "Customer Acquisition Malta | Predictable CPA | OARC Digital",
    description: "End-to-end customer acquisition engineering for Malta and EU brands — attribution, channels, and one number that matters.",
    url: URL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({
      title: "Customer Acquisition Malta | Predictable CPA | OARC Digital",
      subtitle: "Full-funnel customer acquisition measured by CPA, not impressions.",
    })],
    card: "summary_large_image",
    title: "Customer Acquisition Malta | Predictable CPA | OARC Digital",
    description: "End-to-end customer acquisition for Malta and EU brands. CPA-first, attribution-honest, multi-channel.",
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
        title={schema?.title ?? "Customer Acquisition Malta"}
        description={schema?.description ?? metadata.description as string}
        features={schema?.features}
        offers={schema?.offers}
        faqs={schema?.faqs}
      />
      <PageContent />
    </>
  );
}
