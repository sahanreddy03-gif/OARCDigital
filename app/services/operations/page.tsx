import type { Metadata } from "next";
import OperationsPageClient from "./OperationsPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Operations Help Malta | Get Your Week Back | OARC";
const DESCRIPTION =
  "Operations and admin relief for Malta owners—automation and AI admin agents that take boring loops off your week.";
const CANONICAL = "https://oarcdigital.com/services/operations";

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "OARC Digital — Operations",
      description:
        "An operations and automation team that removes the boring, repetitive work from a Malta business owner's week — time audits, job systematisation, automated ops, and a single oversight view — so the business runs without them having to run it.",
      areaServed: { "@type": "Country", name: "Malta" },
      address: { "@type": "PostalAddress", addressLocality: "Birkirkara", addressCountry: "MT" },
      url: CANONICAL,
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations management and systemisation",
          serviceType: "Business process audit, workflow systemisation, operations automation and oversight",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kind of work do you take off my plate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chasing, reminding, confirming, scheduling, reporting, reordering — the work that fills your week but doesn't need to be you doing it. We identify it, then remove it from your daily load.",
          },
        },
        {
          "@type": "Question",
          name: "Will my team need to learn new systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build on your existing tools wherever possible. When something new is introduced, staff typically need minutes to learn it, not days — because it matches how they already work.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stay in control?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get a single overview of everything running — what's on, what's pending, what's waiting. You step in when you want; the system runs the rest.",
          },
        },
        {
          "@type": "Question",
          name: "How fast do I get time back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Malta businesses start seeing hours freed up within the first two weeks. The time audit alone usually surfaces three to five jobs you can hand off immediately.",
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

export default function OperationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <OperationsPageClient />
      <p data-speakable data-testid="dept-entity-sentence" style={{background:"#0E0D0C",color:"rgba(242,239,233,.75)",margin:0,padding:"1.5rem 22px 0",fontSize:13,lineHeight:1.75,maxWidth:"58ch"}}>
        OARC Digital is a Birkirkara operations partner for Malta owners who need systems that run—AI staff, automation, and creative under one accountable team.
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
