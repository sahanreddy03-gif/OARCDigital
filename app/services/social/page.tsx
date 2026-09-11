import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Social Media Strategy Malta | Audit + Plan | OARC",
  description:
    "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind.",
  alternates: getHreflangAlternates("/services/social"),
  openGraph: {
    images: ogImageEntry({ title: "Social Media Strategy Malta | Audit + Plan | OARC", subtitle: "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind." }),
    title: "Social Media Strategy Malta | Audit + Plan | OARC",
    description:
      "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind.",
    url: "https://oarcdigital.com/services/social",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Social Media Strategy Malta | Audit + Plan | OARC", subtitle: "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind." })],
    card: "summary_large_image",
    title: "Social Media Strategy Malta | Audit + Plan | OARC",
    description:
      "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind.",
  },
};

export default function Page() {
  const schema = SERVICE_SCHEMA_EXTRAS["social"];
  return (
    <>
      <SpeakableJsonLd path="/services/social" />
      <RouteSchema
        type="service"
        path="/services/social"
        title={schema.title}
        description={schema.description}
        features={schema.features}
        offers={schema.offers}
        faqs={schema.faqs}
        serviceType={schema.serviceType}
      />
      <PageContent />
    </>
  );
}
