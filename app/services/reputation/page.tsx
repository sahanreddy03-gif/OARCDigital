import type { Metadata } from "next";
import ReputationPageClient from "./ReputationPageClient";

const TITLE = "Reputation Management Malta — Make Me Famous | OARC";
const DESCRIPTION =
  "OARC makes a Malta business or founder famous with videos and reels that get you seen, press coverage that makes you legit, and the right people talking about you — until you are the name everyone knows. PR agency Malta.";
const CANONICAL = "https://oarcdigital.com/services/reputation";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital",
      description:
        "OARC is a creative and content team in Malta that makes a business or founder famous: videos and reels that get you seen, press coverage that makes you legit, and the right people and creators talking about you, spread everywhere. Reputation management Malta.",
      areaServed: "Malta",
      serviceType: "Creative content, video, PR and brand fame, reputation management Malta",
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        name: "Fame engagement",
        description:
          "One team that makes a Malta business the name everyone knows: videos and reels, press and news, creators talking about you, and reach everywhere — with a bonus tool that hears every mention.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you make a business or founder famous?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We do four simple things, over and over: make videos and reels that get you seen, get you in the news, get the right people talking about you, and put you everywhere people look. Each one makes the next one bigger, so your name keeps growing instead of resetting.",
          },
        },
        {
          "@type": "Question",
          name: "Do you actually make the videos and content?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — that is the heart of it. We produce the reels, short videos and social content that get watched and shared, which is how brands get famous today. Video is the number one way people discover a business they have never heard of.",
          },
        },
        {
          "@type": "Question",
          name: "Why is being known better than running ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ads stop the moment you stop paying — you disappear. Being known keeps working for free. Videos, press and a name people trust stay with you and grow every time your name comes up. Around 88% of people trust a real person over any ad.",
          },
        },
        {
          "@type": "Question",
          name: "Are you an AI company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We are a creative and content team — the famous part is the work people do: videos, press and getting the right people to talk about you. We include a small AI tool that hears your mentions as a bonus, but that is an extra, not the main thing.",
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

export default function ReputationServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <ReputationPageClient />
    </>
  );
}
