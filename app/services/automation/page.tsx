import type { Metadata } from "next";
import AutomationPageClient from "./AutomationPageClient";

const TITLE = "Business Automation Malta — The Business That Runs Itself | OARC";
const DESCRIPTION =
  "OARC connects your tools into one system and makes the busywork run itself — triggered workflows, AI handling the small decisions, 24/7, while you watch it work. Not more staff; a business that needs fewer hands to run.";
const CANONICAL = "https://oarcdigital.com/services/automation";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital — Automation",
      description:
        "A team that connects a Malta business's tools into one system and automates its work: integrations, triggered workflows, AI-handled decisions, always-on operation and a single view to oversee it — so the business runs with fewer hands.",
      areaServed: { "@type": "Country", name: "Malta" },
      address: { "@type": "PostalAddress", addressLocality: "Birkirkara", addressCountry: "MT" },
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI and automation",
          serviceType: "Tool integration, triggered workflows, AI-assisted decisions, 24/7 operation and oversight",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does automation actually do for me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It connects your tools and makes the repetitive work happen by itself — confirmations, reminders, follow-ups, invoicing, reporting — on time, 24/7, without anyone remembering to do it.",
          },
        },
        {
          "@type": "Question",
          name: "Will it replace my staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It removes the busywork so your team can do the work only people can do, and lets you handle far more volume without hiring more hands.",
          },
        },
        {
          "@type": "Question",
          name: "Where does AI come in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI handles the small judgement calls inside a workflow — sorting a message, drafting a reply, routing a lead — so nothing waits in a queue. It's one tool inside the automation, not the point.",
          },
        },
        {
          "@type": "Question",
          name: "Are you an AI company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We're the team that makes your business run itself. AI is one of the tools we use inside that, not the pitch.",
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

export default function AutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <AutomationPageClient />
    </>
  );
}
