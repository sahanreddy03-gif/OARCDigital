import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

const SLUG = "ai-admin-agent";
const URL = `https://oarcdigital.com/services/${SLUG}`;
const TITLE = "AI Admin Agent | Inbox & Calendar Automation Malta";
const DESCRIPTION =
  "Reclaim 15+ hours weekly. AI admin agent triages inbox, books and reschedules meetings, files docs, and runs SOPs across your team — Malta-built.";
const HERO_OG = "https://oarcdigital.com/attached_assets/ai-admin-agent-optimized.webp";
const AUDIENCE = [
  "Small Business",
  "Operations Teams",
  "Professional Services",
  "Hospitality Operators",
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
      author: { "@type": "Person", name: "Maria Camilleri" },
      reviewBody:
        "Our admin agent reclaimed 18 hours a week across the ops team in the first month. Inbox triage and meeting scheduling now run without us touching them.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@type": "Service", name: TITLE, url: URL },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: "Daniel Borg" },
      reviewBody:
        "OARC built three SOPs into the agent in two weeks — supplier onboarding, invoice intake, and NDA routing. Compliance was the most surprising win.",
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
      <SpeakableJsonLd path="/services/ai-admin-agent" />
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
