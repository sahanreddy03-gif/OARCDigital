import type { Metadata } from "next";
import TransformationPageClient from "./TransformationPageClient";

const TITLE = "Digital Transformation Malta — Change How the Business Runs | OARC";
const DESCRIPTION =
  "Production-ready transformation for Malta businesses: the full guest lifecycle automated on OARC-built platforms — QR ordering, kitchen display, kiosk, dashboards, reviews and loyalty — shipped in weeks and owned by you.";
const CANONICAL = "https://oarcdigital.com/services/transformation";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital — Transformation",
      description:
        "Production-ready digital transformation for Malta businesses: the full guest lifecycle automated on OARC-built platforms — multilingual QR ordering, kitchen display, self-order kiosk, owner dashboards, review capture and loyalty — integrated with existing POS and payments, shipped in weeks and owned by the client.",
      areaServed: { "@type": "Country", name: "Malta" },
      address: { "@type": "PostalAddress", addressLocality: "Birkirkara", addressCountry: "MT" },
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guest-lifecycle transformation",
          serviceType: "Restaurant and venue operating systems, automation and integration",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do we have to replace our POS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. OARC bridges into existing POS, payment terminals and printers, and only replaces systems when the numbers prove it is worth it.",
          },
        },
        {
          "@type": "Question",
          name: "Who owns the system after the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The client owns everything — code, data and accounts are handed over with no vendor lock-in.",
          },
        },
        {
          "@type": "Question",
          name: "How disruptive is the rollout?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rollout happens one stage at a time during quiet hours, with staff trained in minutes per tool, so service never stops.",
          },
        },
        {
          "@type": "Question",
          name: "Is this off-the-shelf software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We build custom software designed around how your business actually works — plus we have production-tested platforms already running in Malta venues that we configure and integrate for you.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see ROI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "First working software ships in seven days. Every stage has a number attached — orders, covers, reviews, hours saved. If it doesn't move a number, it doesn't ship.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "website",
    siteName: "OARC Digital",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function TransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <TransformationPageClient />
    </>
  );
}
