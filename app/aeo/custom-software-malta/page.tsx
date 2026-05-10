import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Custom Software Malta | OARC Digital";
const DESCRIPTION =
  "Custom software development in Malta. OARC Digital builds bespoke business systems, internal tools, dashboards, and integrations for Malta SMEs and EU enterprises. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/custom-software-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who builds custom software in Malta?", answer: `OARC Digital builds bespoke business systems, internal tools, operational dashboards, and integration platforms for Malta-based SMEs and EU clients. We replace patchwork spreadsheet workflows with proper systems that scale. Birkirkara HQ. ${NAP.phoneDisplay}.` },
  { question: "How much does custom software cost in Malta?", answer: "A typical internal-tool or dashboard build from OARC Digital runs €12,000 to €30,000 fixed. Larger operational systems with multi-user permissions, integrations, and reporting run €40,000 to €120,000. Discovery sprints to scope a build start at €4,500 fixed." },
  { question: "What kinds of custom software does OARC Digital build?", answer: "Internal admin tools, operational dashboards, ERP-style systems for hospitality groups and retail chains, custom CRM extensions, integration middleware, partner portals, booking systems, and bespoke industry-specific tools for iGaming, fintech, and professional services." },
  { question: "How long does custom software development take?", answer: "Discovery and spec take 1 to 2 weeks. A focused internal tool typically ships in 6 to 10 weeks. Larger operational systems with multiple modules, integrations, and user roles take 16 to 28 weeks depending on scope." },
  { question: "Can OARC Digital integrate with our existing tools — HubSpot, SAP, NetSuite, Xero?", answer: "Yes. OARC Digital builds integrations with HubSpot, Salesforce, SAP, NetSuite, Xero, QuickBooks, Stripe, Shopify, WhatsApp Business, and most public-API SaaS products. Where webhooks or APIs are missing we build adapter layers." },
  { question: "Do I own the custom software OARC Digital builds for me?", answer: "Yes — full source code, full IP, full infrastructure handover. There is no licence or ongoing royalty owed to OARC Digital. You can hire any engineer to maintain or extend the codebase after handover." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Custom software clients across Sliema, St Julian's, Valletta, Birkirkara, Mosta, Msida, and Gozo, plus EU clients in London, Dublin, Berlin, and Amsterdam.` },
];

const offers = [
  { name: "Discovery Sprint", priceFrom: 4500, unitText: "PROJECT", description: "2-week written specification, ER diagram, fixed-price proposal for the build." },
  { name: "Internal Tool Build", priceFrom: 18000, unitText: "PROJECT", description: "Bespoke internal app — admin, dashboard, workflow tool, partner portal — 6 to 10 weeks." },
  { name: "Operational System", priceFrom: 55000, unitText: "PROJECT", description: "Multi-module business system with roles, reporting, integrations — 16 to 28 weeks." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        dateModified="2026-05-10"
        path="/aeo/custom-software-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Bespoke business systems" },
          { name: "Internal admin and dashboard tools" },
          { name: "Integration middleware" },
          { name: "EU-region hosting + GDPR-clean" },
          { name: "Full IP and code handover" },
          { name: "Replace spreadsheet workflows" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
