import type { Metadata } from "next";
import AIStaffPageClient from "./AIStaffPageClient";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = "AI Staff Malta | Hire AI Employees | OARC";
const DESCRIPTION =
  "Hire AI staff for sales, support, booking, and admin—Malta-deployed agents that finish work and hand off to humans when needed.";
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
        {
          "@type": "Question",
          name: "What is AI staff from OARC Digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Role-based AI employees for Malta businesses—sales, support, booking, admin—that complete defined jobs with human handoff.",
          },
        },
        {
          "@type": "Question",
          name: "How do I supervise AI staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transcripts, escalation rules, and a Malta team on call—agents are not set-and-forget toys.",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Priority Malta markets for AI staff",
      "numberOfItems": 8,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Valletta digital services", "url": "https://oarcdigital.com/malta/valletta" },
        { "@type": "ListItem", "position": 2, "name": "Sliema digital services", "url": "https://oarcdigital.com/malta/sliema" },
        { "@type": "ListItem", "position": 3, "name": "St Julian's digital services", "url": "https://oarcdigital.com/malta/st-julians" },
        { "@type": "ListItem", "position": 4, "name": "Mosta digital services", "url": "https://oarcdigital.com/malta/mosta" },
        { "@type": "ListItem", "position": 5, "name": "Birkirkara digital services", "url": "https://oarcdigital.com/malta/birkirkara" },
        { "@type": "ListItem", "position": 6, "name": "Qormi digital services", "url": "https://oarcdigital.com/malta/qormi" },
        { "@type": "ListItem", "position": 7, "name": "Hamrun digital services", "url": "https://oarcdigital.com/malta/hamrun" },
        { "@type": "ListItem", "position": 8, "name": "Naxxar digital services", "url": "https://oarcdigital.com/malta/naxxar" }
      ]
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

export default function AIStaffPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
      />
      <AIStaffPageClient />
      <p data-speakable data-testid="dept-entity-sentence" style={{background:"#0E0D0C",color:"rgba(242,239,233,.75)",margin:0,padding:"1.5rem 22px 0",fontSize:13,lineHeight:1.75,maxWidth:"58ch"}}>
        OARC Digital is a Birkirkara AI staff partner for Malta owners who need sales, support, booking, and admin covered by AI employees—with human handoff—and the same team for creative and voice.
      </p>
      <p className="px-6 pb-10 text-sm text-muted-foreground" data-testid="dept-money-links" style={{background:"#0E0D0C",color:"rgba(242,239,233,.55)",margin:0,padding:"1.25rem 22px 1rem"}}>
        Explore: <a href="/" style={{color:"#F2EFE9"}}>Home</a>
        {" · "}<a href="/creative" style={{color:"#F2EFE9"}}>Creative</a>
        {" · "}<a href="/ai-agents" style={{color:"#F2EFE9"}}>AI agents</a>
        {" · "}<a href="/solutions" style={{color:"#F2EFE9"}}>Solutions</a>
        {" · "}<a href="/services/automation" style={{color:"#F2EFE9"}}>Automation</a>
        {" · "}<a href="/services/seo-services" style={{color:"#F2EFE9"}}>SEO</a>
        {" · "}<a href="/voice-ai-worker" style={{color:"#F2EFE9"}}>Voice AI Worker</a>
        {" · "}<a href="/h360" style={{color:"#F2EFE9"}}>H360</a>
        {" · "}<a href="/malta" style={{color:"#F2EFE9"}}>Malta hubs</a>
      </p>
      <p className="px-6 pb-10 text-sm" data-testid="dept-malta-location-links" style={{background:"#0E0D0C",color:"rgba(242,239,233,.45)",margin:0,padding:"0 22px 2.5rem"}}>
        Malta markets: <a href="/malta/valletta" style={{color:"#F2EFE9"}}>Valletta</a>
        {" · "}<a href="/malta/sliema" style={{color:"#F2EFE9"}}>Sliema</a>
        {" · "}<a href="/malta/st-julians" style={{color:"#F2EFE9"}}>St Julian&apos;s</a>
        {" · "}<a href="/malta/mosta" style={{color:"#F2EFE9"}}>Mosta</a>
        {" · "}<a href="/malta/birkirkara" style={{color:"#F2EFE9"}}>Birkirkara</a>
        {" · "}<a href="/malta/qormi" style={{color:"#F2EFE9"}}>Qormi</a>
        {" · "}<a href="/malta/hamrun" style={{color:"#F2EFE9"}}>Ħamrun</a>
        {" · "}<a href="/malta/naxxar" style={{color:"#F2EFE9"}}>Naxxar</a>
      </p>
    </>
  );
}