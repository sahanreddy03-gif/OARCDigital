import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const TITLE = "AI Agent Economy Malta | Marketing Agents That Work for You | OARC";
const DESCRIPTION =
  "OARC Digital's agent economy: SEO/AEO, creative, outreach, GBP, and voice agents that live on the agentic web and market for Malta owners. Capability registry, entity graph + NAP, bookable actions. Birkirkara.";
const PATH = "/agent-economy";
const URL = `https://oarcdigital.com${PATH}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "AI agent economy Malta, marketing agents that work for you, agentic web Malta, AEO GEO LEO, capability registry, MCP action endpoints, SEO AEO agent, GBP agent, voice agent Malta, OARC Digital Birkirkara",
  alternates: getHreflangAlternates("/agent-economy", { canonical: URL }),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: ogImageEntry({
      title: "AI Agent Economy Malta",
      subtitle: "Marketing agents that live on the internet — OARC Digital",
      eyebrow: "OARC · Birkirkara",
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      ogImageUrl({
        title: "AI Agent Economy Malta",
        subtitle: "Marketing agents that live on the internet — OARC Digital",
        eyebrow: "OARC · Birkirkara",
      }),
    ],
  },
};

const faqs = [
  {
    question: "What is the OARC agent economy?",
    answer:
      "A public marketplace of marketing agents that live on the internet — SEO/AEO, creative, outreach, Google Business Profile, and voice — built by OARC Digital in Birkirkara. Each agent has a job, a channel, and a callable action (quote, book, call). It is the same OARC team behind /ai-agents, /solutions, /services/ai-staff, and the Hermes marketing engineer rail — not a separate company.",
  },
  {
    question: "How is this different from hiring an AI chatbot?",
    answer:
      "Chatbots sit in a widget. OARC economy agents are framed for the agentic web: machine-readable capability registry, entity graph + NAP, AEO/GEO/LEO citation surfaces, and MCP-style action endpoints for book/quote/call where the site already supports contact. They market for the owner on search, GBP, creative, outreach, and phone — then hand warm demand to humans.",
  },
  {
    question: "Which agents are in the economy today?",
    answer:
      "Five live roles: SEO/AEO agent (web/search), creative agent (brand + content), outreach agent (email/WhatsApp/LinkedIn), GBP agent (Google Business Profile), and voice agent (phone). Each card links to the real OARC service page that delivers the work.",
  },
  {
    question: "What does an owner get when they book an agent?",
    answer:
      "A scoped job on a named channel, connected to OARC's existing service delivery — SEO services, creative, AI SDR / lead generation, reputation/GBP, Voice AI Worker, or AI staff. Money path is always visible: book a call, WhatsApp, or phone. No invented case-study metrics.",
  },
  {
    question: "What is Hermes in this story?",
    answer:
      "Hermes is OARC's marketing engineer rail — research, SERP/GBP ops, and standing jobs that keep agents and campaigns honest. It is an OARC operating face, not a second agency brand. Strategy and client work stay under OARC Digital, Birkirkara.",
  },
  {
    question: "Where is OARC Digital and how do I start?",
    answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Call ${NAP.phoneDisplay}, email ${NAP.email}, WhatsApp the AI agents line, or book via /contact. Same NAP across the entity graph so agents and humans cite one address.`,
  },
];

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/agent-economy" />
      <RouteSchema
        type="service"
        path="/agent-economy"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        serviceType="AI Agent Economy / Marketing Agents"
        features={[
          { name: "SEO/AEO agent on web and search" },
          { name: "Creative agent for brand and content" },
          { name: "Outreach agent across email, WhatsApp, LinkedIn" },
          { name: "GBP agent for Google Business Profile" },
          { name: "Voice agent for phone and LEO citation" },
          { name: "Callable actions: quote, book, call" },
          { name: "Entity graph + NAP for AEO/GEO/LEO" },
        ]}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
