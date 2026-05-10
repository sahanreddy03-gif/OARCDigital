import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE =
  "Industry-Specific Paid Ads in Malta | Hospitality, iGaming, E-commerce, Real Estate, SaaS";
const DESCRIPTION =
  "Vertical-first paid advertising for Malta hospitality, iGaming, e-commerce, real estate and SaaS brands. Industry buying psychology, channel mix and creative built for each sector.";
const CANONICAL = "https://oarcdigital.com/services/paid";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  const schema = SERVICE_SCHEMA_EXTRAS["paid"];
  return (
    <>
      <RouteSchema
        type="service"
        path="/services/paid"
        title={schema.title}
        description={schema.description}
        features={schema.features}
        offers={schema.offers}
        faqs={schema.faqs}
        serviceType={schema.serviceType}
        audience={schema.audience}
        areaServed={schema.areaServed}
      />
      <PageContent />
    </>
  );
}
