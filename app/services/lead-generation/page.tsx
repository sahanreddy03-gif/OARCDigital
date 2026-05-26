import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const SLUG = "lead-generation";
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: "Lead Generation Malta | Qualified Meetings, Not Form Fills | OARC Digital",
  description: "AI-powered lead generation for Malta and EU businesses. We deliver qualified meetings booked into your closer's calendar — measured by cost-per-qualified-meeting, not impressions.",
  alternates: getHreflangAlternates(`/services/${SLUG}`),
  openGraph: {
    images: ogImageEntry({
      title: "Lead Generation Malta | Qualified Meetings | OARC Digital",
      subtitle: "Stop chasing cold leads. OARC's AI-powered lead generation delivers qualified meetings with pre-call briefs — guaranteed meeting volumes in your SOW.",
    }),
    title: "Lead Generation Malta | Qualified Meetings | OARC Digital",
    description: "AI-powered lead generation for Malta and EU businesses. We deliver qualified meetings booked into your closer's calendar — measured by cost-per-qualified-meeting, not impressions.",
    url: URL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({
      title: "Lead Generation Malta | Qualified Meetings | OARC Digital",
      subtitle: "Stop chasing cold leads. OARC's AI-powered lead generation delivers qualified meetings with pre-call briefs — guaranteed meeting volumes in your SOW.",
    })],
    card: "summary_large_image",
    title: "Lead Generation Malta | Qualified Meetings | OARC Digital",
    description: "AI-powered lead generation for Malta and EU businesses. Qualified meetings, not form fills.",
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
        title={schema?.title ?? "Lead Generation Malta"}
        description={schema?.description ?? metadata.description as string}
        features={schema?.features}
        offers={schema?.offers}
        faqs={schema?.faqs}
      />
      <PageContent />
    </>
  );
}
