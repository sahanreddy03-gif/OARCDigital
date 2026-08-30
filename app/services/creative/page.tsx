import type { Metadata } from "next";
import Script from "next/script";
import CreativePageClient from "./CreativePageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Creative Agency Malta — Make Us Look Like a Billion | OARC";
const DESCRIPTION =
  "OARC is a creative and AI software agency in Malta that makes a business look like a billion-dollar brand — the big idea and campaigns, an always-on social and content studio, brand identity, film and motion, ad creative that converts, and an on-brand AI creative engine you own outright.";
const CANONICAL = "https://oarcdigital.com/services/creative";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital",
      description:
        "OARC is a creative and AI software agency in Malta that makes a business look like a billion-dollar brand: big ideas and campaigns, an always-on social and content studio, brand identity, film and motion, ad creative built to convert, and an on-brand AI creative engine the client owns in full IP control.",
      areaServed: "Malta",
      serviceType: "Creative agency Malta, branding, social content and ad creative",
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        name: "Creative engagement",
        description:
          "One team covering the big idea and campaigns, social and content, brand identity, film, ad creative, and an owned AI creative engine — built to make a Malta business look like the category leader and be worth more.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does creative make a business worth more?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Creative is the biggest single lever in marketing ROI — around half of the return comes from the work itself, not the targeting. A stronger idea, a distinctive brand and content people remember make a business look bigger, feel more trusted, and able to charge more for the same product.",
          },
        },
        {
          "@type": "Question",
          name: "How can a small business look like a big brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With creative firepower, not a bigger budget. Buyers judge you in milliseconds, so a sharp idea, a distinctive identity, and enough on-brand content to be everywhere at once make a small company read as the category leader. People buy the business that looks like the leader.",
          },
        },
        {
          "@type": "Question",
          name: "Do you make ads, or buy media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We make the ad creative — the hooks, static and video ads, and the variations tested to win — so your spend actually pays. The media buying, targeting and budgets live on our Media card; here we make the creative that makes the spend work.",
          },
        },
        {
          "@type": "Question",
          name: "Do I own the designs and assets you create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in full. Every asset, the brand system, and the on-brand AI creative engine we build are handed to you in your complete IP control. You keep them and reuse them freely.",
          },
        },
        {
          "@type": "Question",
          name: "Is this design, or strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both, plus social, film, ad creative and AI. We are a creative and AI software agency — one team covering the idea and campaigns, the identity, the social and content, the film, the ad creative, and a system you own that makes on-brand work at scale.",
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

export default function CreativeServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <CreativePageClient />
    </>
  );
}
