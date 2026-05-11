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
const HERO_OG = "https://oarcdigital.com/og/ai-real-estate-agent-malta-sliema.png";
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

const REVIEWS_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      itemReviewed: { "@type": "Service", name: TITLE, url: URL },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: "Andrei Vella" },
      reviewBody:
        "Italian-language enquiries from Sicilian buyers used to sit in the inbox until Monday. The AI replies in Italian within minutes and books the viewing — we closed two Sliema deals from leads we would have lost.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@type": "Service", name: TITLE, url: URL },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: "Rachel Mifsud" },
      reviewBody:
        "Cash-buyer mentions and citizenship-programme leads now route to senior agents within minutes. Junior team handles the lettings and tyre-kickers without burning the senior calendar.",
    },
  ],
};

export default function Page() {
  const schema = SERVICE_SCHEMA_EXTRAS[SLUG];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEWS_LD) }}
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
