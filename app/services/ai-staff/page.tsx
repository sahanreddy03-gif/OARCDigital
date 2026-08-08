import type { Metadata } from "next";
import AIStaffPageClient from "./AIStaffPageClient";

const TITLE = "AI Staff Malta — Hire Your AI Employee | OARC";
const DESCRIPTION =
  "Hire AI staff for your Malta business: sales, bookings, missed-call return, reviews, support and admin across WhatsApp, phone, DMs and email. Trained in plain language, live in days, with human handoff built in.";
const CANONICAL = "https://oarcdigital.com/services/ai-staff";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital — AI Staff",
      description:
        "AI employees for Malta businesses: sales, bookings, missed-call return, reviews, support and admin across WhatsApp, phone, DMs and email. Trained in plain language, live in days, with human handoff.",
      areaServed: { "@type": "Country", name: "Malta" },
      address: { "@type": "PostalAddress", addressLocality: "Birkirkara", addressCountry: "MT" },
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Staff deployment",
          serviceType: "AI agents for sales, bookings, reviews, support and admin",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Will an AI employee sound like a robot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — it is trained on your tone, phrases and menu, and answers honestly if a guest asks whether it is AI.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when the AI doesn't know the answer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It says so, takes a message and hands the conversation to a human with full context — it never invents answers.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can AI staff go live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Days. OARC connects your existing WhatsApp, phone numbers and inboxes, so nothing changes for your team.",
          },
        },
        {
          "@type": "Question",
          name: "Is OARC an AI company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — OARC is a Malta agency that makes businesses grow. AI staff is one of its services, delivered and supported by people.",
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

export default function AIStaffPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <AIStaffPageClient />
    </>
  );
}
