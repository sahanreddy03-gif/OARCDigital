import type { Metadata } from "next";
import TransformationPageClient from "./TransformationPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Digital Transformation Malta | Change How It Runs | OARC";
const DESCRIPTION =
  "Practical digital transformation for Malta SMBs—creative, AI employees, and automation that change how demand is captured and fulfilled.";
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
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
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
      <p data-speakable data-testid="dept-entity-sentence" style={{background:"#0E0D0C",color:"rgba(242,239,233,.75)",margin:0,padding:"1.5rem 22px 0",fontSize:13,lineHeight:1.75,maxWidth:"58ch"}}>
        OARC Digital is a Birkirkara digital transformation partner for Malta owners who need creative, AI agents, and automation sequenced so busywork shrinks and revenue work scales.
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
