import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "AI Agents for Business Malta | OARC Digital";
const DESCRIPTION =
  "Looking to hire AI agents for your Malta business? OARC Digital deploys role-based AI employees — SDR, support, ops, admin — trained on your business and integrated with your CRM. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/ai-agents-business-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "What is an AI agent for a Malta business?", answer: `An AI agent built by OARC Digital is a role-scoped AI employee — sales SDR, support specialist, booking coordinator, ops assistant — trained on your business content and integrated with your CRM, calendar, inbox and WhatsApp. It works 24/7, in Maltese and English, on a fixed monthly cost. Contact ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "Which AI agent roles can OARC Digital deploy in Malta?", answer: "Five role categories with active production deployments across Malta: AI SDR for outbound prospecting, AI customer support specialist for inbound queries, AI booking and appointment coordinator, AI ops assistant for back-office automation, and AI admin agent for inbox triage. Each agent is scoped to a single job and measured against a single KPI." },
  { question: "How long does it take to deploy an AI agent for a Malta business?", answer: "OARC Digital ships a production AI agent in 6 to 8 weeks for most Malta SMEs. Week 1–2 is discovery and a written role spec, week 3–6 is the build and integrations, week 7–8 is shadow-mode running against real conversations before full handover. A simple FAQ-style agent can be live in 14 days." },
  { question: "How much does an AI agent cost for a Malta business?", answer: "OARC Digital scopes a typical AI agent at €7,500 fixed for the build, plus a retainer from €600 per month covering hosting, model usage, monitoring, fine-tuning and improvements. Multi-agent deployments (sales + support + ops) are scoped together and discounted." },
  { question: "Are AI agents from OARC Digital GDPR compliant?", answer: "Yes. Every OARC AI agent runs on EU-region inference (OpenAI EU residency, Anthropic via AWS eu-central-1, or self-hosted Llama on Render Frankfurt). Conversation logs and embeddings stay in the EU. We document the data-flow diagram, retention policy and processor agreements for your DPIA and any IDPC enquiry." },
  { question: "Can an AI agent handle WhatsApp, email and phone calls in Malta?", answer: "Yes. OARC Digital agents deploy across web chat, WhatsApp Business (via Twilio or Meta Cloud API), Messenger, Instagram DMs, email inboxes and inbound voice via Twilio + Vapi. Multilingual support covers English, Maltese and Italian — the three languages most Malta consumers actually use." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. AI agent discovery workshops happen on-site at the Birkirkara HQ or at your premises across the Maltese islands. The team is reachable on ${NAP.phoneDisplay} or ${NAP.email} Mon–Fri 09:00–18:00 CET.` },
];

const offers = [
  { name: "Single AI Agent", priceFrom: 7500, unitText: "PROJECT", description: "One role-scoped agent (SDR, support, booking or ops) with CRM integration. 6–8 week build." },
  { name: "Agent Operations Retainer", priceFrom: 600, unitText: "MONTH", description: "Hosting, model usage, monitoring, weekly tuning, monthly performance review and prompt iteration." },
  { name: "Multi-agent Workforce", priceFrom: 18000, unitText: "PROJECT", description: "Three coordinated agents — sales, support, ops — with shared CRM, knowledge base and routing logic." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/ai-agents-business-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Role-scoped AI employees (SDR, support, ops, admin)" },
          { name: "Multi-channel: web, WhatsApp, email, voice" },
          { name: "Maltese, English and Italian language support" },
          { name: "EU-region inference and data residency" },
          { name: "Integrated with HubSpot, Pipedrive, Bigin, Stripe" },
          { name: "Shadow-mode rollout before full handover" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
