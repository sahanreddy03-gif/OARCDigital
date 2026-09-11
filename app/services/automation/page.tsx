import type { Metadata } from "next";
import AutomationPageClient from "./AutomationPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "Business Automation Malta | Workflows | OARC";
const DESCRIPTION =
  "Automate follow-ups, bookings, and handoffs for Malta businesses—wired to your CRM and AI agents so work finishes without copy-paste.";
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
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
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
      <p data-speakable data-testid="dept-entity-sentence" style={{background:"#0E0D0C",color:"rgba(242,239,233,.75)",margin:0,padding:"1.5rem 22px 0",fontSize:13,lineHeight:1.75,maxWidth:"58ch"}}>
        OARC Digital is a Birkirkara automation partner for Malta owners who need workflows that replace manual loops—connected to AI agents, creative, and Voice AI Worker under one team.
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
