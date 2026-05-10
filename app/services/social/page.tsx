import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Social Media Strategy & Audit | OARC Digital Malta",
  description:
    "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
  alternates: { canonical: "https://oarcdigital.com/services/social" },
  openGraph: {
    title: "Social Media Strategy & Audit | OARC Digital Malta",
    description:
      "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
    url: "https://oarcdigital.com/services/social",
    type: "article",
  },
  twitter: {
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
