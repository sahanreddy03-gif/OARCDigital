import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const SLUG = "lead-generation";
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: "Lead Generation Malta | Qualified Meetings | OARC",
  description: "Lead generation for Malta businesses focused on qualified meetings—not form-fill vanity volume.",
  alternates: getHreflangAlternates(`/services/${SLUG}`),
  openGraph: {
    images: ogImageEntry({
      title: "Lead Generation Malta | Qualified Meetings | OARC",
      subtitle: "Stop chasing cold leads. OARC lead generation focuses on qualified meetings with clear measurement—not form-fill vanity volume.",
    }),
    title: "Lead Generation Malta | Qualified Meetings | OARC",
    description: "Lead generation for Malta businesses focused on qualified meetings—not form-fill vanity volume.",
    url: URL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({
      title: "Lead Generation Malta | Qualified Meetings | OARC",
      subtitle: "Stop chasing cold leads. OARC lead generation focuses on qualified meetings with clear measurement—not form-fill vanity volume.",
    })],
    card: "summary_large_image",
    title: "Lead Generation Malta | Qualified Meetings | OARC",
    description: "Lead generation for Malta businesses focused on qualified meetings—not form-fill vanity volume.",
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
