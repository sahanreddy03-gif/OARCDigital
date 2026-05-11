import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Social Media Strategy & Audit | OARC Digital Malta",
  description:
    "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
  alternates: getHreflangAlternates("/services/social"),
  openGraph: {
    images: ogImageEntry({ title: "Social Media Strategy & Audit | OARC Digital Malta", subtitle: "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan." }),
    title: "Social Media Strategy & Audit | OARC Digital Malta",
    description:
      "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
    url: "https://oarcdigital.com/services/social",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Social Media Strategy & Audit | OARC Digital Malta", subtitle: "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan." })],
    card: "summary_large_image",
    title: "Social Media Strategy & Audit | OARC Digital Malta",
    description:
      "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
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
