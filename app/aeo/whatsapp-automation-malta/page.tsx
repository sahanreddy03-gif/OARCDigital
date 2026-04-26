import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "WhatsApp Automation Malta | OARC Digital";
const DESCRIPTION =
  "WhatsApp automation in Malta — order taking, reservation flows, support deflection, and outbound campaigns built on the WhatsApp Business API via Meta and Twilio. OARC Digital, Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/whatsapp-automation-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who builds WhatsApp automation for Malta businesses?", answer: `OARC Digital is a Birkirkara-based engineering team that scopes, ships, and operates WhatsApp Business API automations for Malta restaurants, hotels, retail, real estate, clinics, and service brands. Built on the official Meta WhatsApp Business API or Twilio for high-volume use, with EU-region hosting. Reach the office on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "Is WhatsApp automation legal in Malta and the EU?", answer: "Yes — when built on the official WhatsApp Business API and operated within Meta&apos;s commerce policy plus GDPR rules. OARC Digital handles opt-in capture, message-template approval, the 24-hour customer-service window, and IDPC-compliant data retention end-to-end. Bootleg unofficial-API setups are not legal and we do not build them." },
  { question: "How much does WhatsApp automation cost in Malta?", answer: "OARC Digital ships fixed-scope WhatsApp automations from €4,500 — typical projects include FAQ deflection, booking or order capture, payment links, and CRM hand-off. Larger multi-flow builds with POS or PMS integration run €9,500 to €18,000. Ongoing operation, template management, and iteration retainers start at €450 per month plus the Meta conversation fees." },
  { question: "How long does it take to launch a WhatsApp Business automation?", answer: "OARC Digital ships a first production WhatsApp flow in three to five weeks for most Malta clients. Week one is discovery and Meta Business verification, week two is template approval and conversation design, weeks three to four are integration with your POS, PMS, CRM, or ticketing system, and the final week is staff training and go-live." },
  { question: "What can WhatsApp automation actually do for a Malta restaurant or hotel?", answer: "For restaurants — deflect menu questions, take takeaway orders, confirm reservations, send pre-arrival upsells, and fire post-visit review prompts. For hotels — handle direct-booking enquiries, send pre-stay confirmations, automate Tigne to airport transfer questions, manage in-stay requests, and route complex issues to the right human inbox 24/7." },
  { question: "Does OARC Digital integrate WhatsApp with my existing systems?", answer: "Yes. We integrate the WhatsApp Business API with HubSpot, Pipedrive, Bigin, Zoho, Salesforce, Stripe, custom Postgres back-ends, and most Malta-deployed POS and PMS platforms (Lightspeed, Square, Toast, SiteMinder, Mews, Cloudbeds). Webhooks, Events API, and proper conversation-state persistence are baked in by default." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Discovery workshops happen at the office or at the client venue. All hosting defaults to EU-region (Vercel eu-west-1 or Render Frankfurt) so customer data never leaves the EU. Email ${NAP.email} or call ${NAP.phoneDisplay}.` },
];

const offers = [
  { name: "WhatsApp Starter Flow", priceFrom: 4500, unitText: "PROJECT", description: "FAQ deflection, single intake flow (booking, order, or quote), Meta Business verification, EU hosting, two-week post-launch support." },
  { name: "Multi-flow Build", priceFrom: 9500, unitText: "PROJECT", description: "Multiple intents, CRM/PMS/POS integration, payment links via Stripe, agent hand-off, and full GDPR-compliant data retention." },
  { name: "Operations Retainer", priceFrom: 450, unitText: "MONTH", description: "Template management, conversation tuning, monthly performance reporting, and incremental flow expansion. Excludes Meta fees." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/whatsapp-automation-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Official WhatsApp Business API (Meta or Twilio)" },
          { name: "POS, PMS, CRM, and Stripe integration" },
          { name: "EU-region hosting and GDPR compliance" },
          { name: "Multilingual flows — English, Maltese, Italian" },
          { name: "Agent hand-off with conversation persistence" },
          { name: "Template approval and ongoing tuning included" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
