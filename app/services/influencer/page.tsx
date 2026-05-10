import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE =
  "Malta Influencer Marketing | Local Creator Network for Hospitality, Lifestyle & iGaming";
const DESCRIPTION =
  "Malta-local creator partnerships for hospitality, lifestyle, sport, food and MGA-licensed iGaming brands. Maltese creators briefed and contracted to move bookings, deposits and footfall.";
const CANONICAL = "https://oarcdigital.com/services/influencer";

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
  const schema = SERVICE_SCHEMA_EXTRAS["influencer"];
  return (
    <>
      <RouteSchema
        type="service"
        path="/services/influencer"
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
