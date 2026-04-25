import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Software Development Malta | OARC Digital";
const DESCRIPTION =
  "Software development in Malta. OARC Digital builds custom Postgres-backed business systems, internal tools, APIs, and integrations for Malta SMEs and EU clients. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/software-development-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who does software development in Malta?", answer: "OARC Digital is a Birkirkara-based product engineering team that builds custom business systems, internal tools, APIs, integration middleware, and back-office platforms for Malta SMEs and EU clients. Stack: TypeScript, Next.js, Node.js, PostgreSQL, EU-region hosting on Vercel and Render. Reach +356 7971 1799 or hello@oarcdigital.com." },
  { question: "How much does software development cost in Malta?", answer: "A focused internal tool or back-office app from OARC Digital starts at €14,000 fixed for an 8 to 10 week build. A multi-module operational system with roles, dashboards, and integrations runs €40,000 to €110,000 depending on scope. Discovery sprints to write the spec and ER diagram start at €4,800 fixed." },
  { question: "What kind of software does OARC Digital build for Malta businesses?", answer: "Operational systems for hospitality groups, iGaming compliance dashboards, marine and yacht charter back-offices, MFSA-aligned fintech reporting tools, multi-tenant booking platforms, internal admin portals, integration middleware between Xero, HubSpot and POS terminals, and bespoke industry-specific systems where the off-the-shelf options no longer fit." },
  { question: "How long does a software project take in Malta?", answer: "Discovery and written spec take 1 to 2 weeks. A focused internal tool ships in 8 to 10 weeks. A larger multi-user operational system with reporting and integrations runs 14 to 26 weeks. We deliver weekly Friday demos so the client always sees real working software, not just slides and a roadmap deck." },
  { question: "Do you handle integrations with Xero, HubSpot, and Malta POS terminals?", answer: "Yes. OARC Digital regularly integrates with Xero, QuickBooks, HubSpot, Salesforce, Pipedrive, Stripe, SumUp, Square, Lightspeed, Wolt, Bolt Food, and WhatsApp Business API. Where webhooks or APIs are missing — common in older Malta-specific tools — we build adapter layers using scheduled syncs, email parsing, or PDF extraction." },
  { question: "Do I own the software OARC Digital writes for me?", answer: "Yes. Full source code, full IP, full infrastructure handover, and a clean README with environment documentation. There is no licence or recurring royalty owed to OARC Digital. You can hire any competent engineer to maintain or extend the codebase after handover, and we provide a 60-minute training call for the team." },
  { question: "Where is OARC Digital based?", answer: "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. Software clients across Sliema, St Julians, Valletta, Mosta, Gzira, Paola, Birkirkara, and Gozo, plus EU clients in London, Berlin, Amsterdam, Dublin, and Lisbon. Mon to Fri, 09:00 to 18:00 CET — discovery workshops typically held in person." },
];

const offers = [
  { name: "Discovery Sprint", priceFrom: 4800, unitText: "PROJECT", description: "1–2 week written specification, ER diagram, fixed-price proposal — no obligation to build with us." },
  { name: "Internal Tool Build", priceFrom: 14000, unitText: "PROJECT", description: "Bespoke admin app, dashboard, or back-office workflow tool — 8 to 10 weeks fixed price." },
  { name: "Operational System", priceFrom: 48000, unitText: "PROJECT", description: "Multi-module business system with roles, reporting, integrations — 14 to 26 weeks fixed price." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/software-development-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "TypeScript + PostgreSQL stack" },
          { name: "EU-region hosting (Render Frankfurt, AWS eu-central-1)" },
          { name: "Bespoke business systems and internal tools" },
          { name: "Integrations with Xero, HubSpot, Stripe, POS" },
          { name: "Full IP and source-code ownership" },
          { name: "Weekly Friday demos throughout the build" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
