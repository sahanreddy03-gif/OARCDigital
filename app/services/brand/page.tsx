import type { Metadata } from "next";
import BrandPageClient from "./BrandPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Brand Strategy Malta — Creative and Brand Identity | OARC";
const DESCRIPTION =
  "OARC builds the brand foundation a Malta business is chosen and charges more for: purpose, positioning, personality, promise and a consistent brand system — the strategic layer beneath the creative.";
const CANONICAL = "https://oarcdigital.com/services/brand";

const LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OARC — Brand",
  description:
    "A brand strategy team in Malta that builds the foundation a business is chosen and charges more for: purpose, positioning, personality, promise and a consistent brand system — the strategic layer beneath creative production.",
  areaServed: "Malta",
  url: CANONICAL,
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Brand strategy Malta and brand identity",
      description:
        "Brand purpose, positioning, naming and voice, brand promise and a consistent brand system, handed to the creative team to produce. AI-assisted consistency checking is included as a bonus.",
    },
  },
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Isn't a brand just a logo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A logo is one asset. A brand is the reason a customer chooses you over someone cheaper — what you stand for, the space you own, and the promise people remember.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from your creative work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creative makes a business look worth more — the video, identity and assets. Brand decides what it's worth in the first place — the strategy and foundation that all the creative is built on.",
        },
      },
      {
        "@type": "Question",
        name: "What does a brand foundation actually change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It lets you stop competing on price, be remembered, charge more, and make every piece of creative consistent and stronger.",
        },
      },
      {
        "@type": "Question",
        name: "Are you an AI company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Real brand strategists and designers build your foundation. A small tool that checks brand consistency is included as a bonus, not the main thing.",
        },
      },
    ],
  },
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

export default function BrandServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <BrandPageClient />
    </>
  );
}
