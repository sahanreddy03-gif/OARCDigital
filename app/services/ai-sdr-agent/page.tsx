import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const SLUG = "ai-sdr-agent";
const SCHEMA = SERVICE_SCHEMAS[SLUG];
const URL = `https://oarcdigital.com/services/${SLUG}`;
const TITLE = "AI SDR Agent Malta | Lead Qualification & Booking";
const DESCRIPTION = SCHEMA.description;
const HERO_OG = "https://oarcdigital.com/attached_assets/ai-sdr-agent-optimized.webp";
const AUDIENCE = [
  "B2B SaaS",
  "Professional Services",
  "Sales Teams",
  "Malta SMB",
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getHreflangAlternates(`/services/${SLUG}`),
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

const REVIEWS_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      itemReviewed: { "@type": "Service", name: TITLE, url: URL },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: "Luca Spiteri" },
      reviewBody:
        "We moved from one human SDR to the OARC AI SDR plus a single closer. Qualified meetings tripled in 60 days and the pre-call briefs are better than what our reps used to write.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@type": "Service", name: TITLE, url: URL },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: "Sarah Grech" },
      reviewBody:
        "Web chat, email, and WhatsApp under one agent — and the CRM is finally clean. Inbound time-to-first-touch dropped from 6 hours to 90 seconds.",
    },
  ],
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path={`/services/${SLUG}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEWS_LD) }}
      />
      {/* SSR-safe speakable shim: the client-rendered hero is gated by a
          loading state that suppresses [data-speakable] from initial HTML;
          this hidden h1/p is always present for the Speakable selector. */}
      <h1 className="sr-only" data-speakable>{TITLE}</h1>
      <p className="sr-only" data-speakable>{DESCRIPTION}</p>
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={TITLE}
        description={DESCRIPTION}
        features={SCHEMA.features}
        offers={SCHEMA.offers}
        faqs={SCHEMA.faqs}
        audience={AUDIENCE}
        areaServed="Malta"
      />
      <PageContent slug={SLUG} emitFaqJsonLd={false} extraSeoContent={<DeepContent />} />
    </>
  );
}
