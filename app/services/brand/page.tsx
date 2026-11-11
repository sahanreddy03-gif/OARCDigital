import type { Metadata } from "next";
import BrandPageClient from "./BrandPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Brand Strategy Malta | Feel + System | OARC";
const DESCRIPTION =
  "Brand strategy for Malta businesses—positioning and systems so everything customers see, hear, and feel points to one choice.";
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
      <p data-speakable data-testid="dept-entity-sentence" style={{background:"#0E0D0C",color:"rgba(242,239,233,.75)",margin:0,padding:"1.5rem 22px 0",fontSize:13,lineHeight:1.75,maxWidth:"58ch"}}>
        OARC Digital is a Birkirkara brand partner for Malta owners who need identity customers recognise—connected to creative production, AI agents, and growth systems.
      </p>
      <p className="px-6 pb-10 text-sm text-muted-foreground" data-testid="dept-money-links" style={{background:"#0E0D0C",color:"rgba(242,239,233,.55)",margin:0,padding:"1.25rem 22px 2.5rem"}}>
        Explore: <a href="/" style={{color:"#F2EFE9"}}>Home</a>
        {" · "}<a href="/creative" style={{color:"#F2EFE9"}}>Creative</a>
        {" · "}<a href="/ai-agents" style={{color:"#F2EFE9"}}>AI agents</a>
        {" · "}<a href="/solutions" style={{color:"#F2EFE9"}}>Solutions</a>
        {" · "}<a href="/voice-ai-worker" style={{color:"#F2EFE9"}}>Voice AI Worker</a>
        {" · "}<a href="/h360" style={{color:"#F2EFE9"}}>H360</a>
      </p>
    </>
  );
}
