import type { Metadata } from "next";
import ClarityPageClient from "./ClarityPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Marketing Analytics Malta — We Tell You What's Working | OARC";
const DESCRIPTION =
  "OARC cuts through the noise to tell you what's actually driving revenue, what's wasting budget, and the one move that will move the needle most. Straight answers on your Malta marketing spend — no vanity metrics.";
const CANONICAL = "https://oarcdigital.com/services/clarity";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital — Clarity",
      description:
        "A data and analytics team that tells Malta businesses what marketing is actually working, what is wasting money, and what one move will move the needle most — with plain-language verdicts, spend-to-sales tracking, AI anomaly alerts and weekly guidance.",
      areaServed: { "@type": "Country", name: "Malta" },
      address: { "@type": "PostalAddress", addressLocality: "Birkirkara", addressCountry: "MT" },
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing analytics and clarity",
          serviceType: "Marketing data analysis, spend-to-sales attribution, performance verdicts and strategic guidance",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a clarity engagement actually deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A plain-language verdict on every channel you're spending on — what's working, what's wasting, and the one priority move. Plus ongoing tracking so the picture updates as you act.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to give you access to all our data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We need ad accounts, Google Analytics and your POS or booking data to connect spend to revenue. Read-only access is sufficient — we never touch your settings.",
          },
        },
        {
          "@type": "Question",
          name: "We already have a marketing agency — why do we need this?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because agencies measure what looks good. We measure what makes money. If your agency can show you a direct line from spend to sales, you may not need us. If they can't, you do.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will we see the first insights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most businesses get their first verdict within five to seven days of connecting their data. The AI anomaly alerts start firing from day one.",
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
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function ClarityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <ClarityPageClient />
    </>
  );
}
