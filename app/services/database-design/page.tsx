import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

const SLUG = "database-design";
const SCHEMA = SERVICE_SCHEMAS[SLUG];
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: SCHEMA.title,
  description: SCHEMA.description,
  alternates: { canonical: URL },
  openGraph: { title: SCHEMA.title, description: SCHEMA.description, url: URL, type: "article" },
  twitter: { card: "summary_large_image", title: SCHEMA.title, description: SCHEMA.description },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={SCHEMA.title}
        description={SCHEMA.description}
        features={SCHEMA.features}
        offers={SCHEMA.offers}
        faqs={SCHEMA.faqs}
        serviceType="Database Engineering"
        dateModified="2026-05-10"
      />
      <PageContent />
    </>
  );
}
