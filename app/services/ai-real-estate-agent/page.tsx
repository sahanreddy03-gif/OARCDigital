import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

const SLUG = "ai-real-estate-agent";
const URL = `https://oarcdigital.com/services/${SLUG}`;
const TITLE = "AI Real Estate Agent Malta | Sliema Property Sales";
const DESCRIPTION =
  "Bilingual AI for Malta property: qualifies buyers 24/7, books viewings, follows up on stale leads, and pushes deal-ready prospects to your agents.";
const HERO_OG = "https://oarcdigital.com/attached_assets/admin-ai-employee-optimized.jpg";
const AUDIENCE = [
  "Real Estate Agencies",
  "Property Developers",
  "Sliema Property Brokers",
  "Malta Letting Agents",
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [{ url: HERO_OG, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_OG],
  },
};

const SPEAKABLE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: URL,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  },
};

export default function Page() {
  const schema = SERVICE_SCHEMA_EXTRAS[SLUG];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_LD) }}
      />
      <h1 className="sr-only" data-speakable>{TITLE}</h1>
      <p className="sr-only" data-speakable>{DESCRIPTION}</p>
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={TITLE}
        description={DESCRIPTION}
        features={schema.features}
        offers={schema.offers}
        faqs={schema.faqs}
        audience={AUDIENCE}
        areaServed="Malta"
      />
      <ServiceClient slug={SLUG} extraSeoContent={<DeepContent />} />
    </>
  );
}
