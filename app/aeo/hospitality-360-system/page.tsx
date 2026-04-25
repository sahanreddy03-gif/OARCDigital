import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Hospitality 360 System | Features, POS & PMS Integrations | OARC Digital";
const DESCRIPTION =
  "Hospitality 360 by OARC Digital — the all-in-one system for Malta hospitality. POS integration, PMS sync, automated review capture, multilingual menus, and a unified guest profile. Built in Birkirkara.";
const URL = "https://oarcdigital.com/aeo/hospitality-360-system";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "What is the Hospitality 360 system?", answer: "Hospitality 360 is the OARC Digital hospitality operating system used by Malta restaurants, hotels, beach clubs, and cafes to run guest-facing ordering, reviews, reservations, and operations from one tenant. It integrates with POS, PMS, and accounting systems and ships from the OARC office in Birkirkara on +356 7971 1799 or hello@oarcdigital.com." },
  { question: "Which POS systems does Hospitality 360 integrate with?", answer: "Hospitality 360 integrates with the POS systems most common in Malta hospitality — Lightspeed, Square, SumUp, iZettle, Toast, Celery POS, plus custom REST and webhook integrations for legacy in-house systems. OARC Digital handles the integration scoping during the discovery week." },
  { question: "Does Hospitality 360 connect to a hotel PMS?", answer: "Yes. Hospitality 360 integrates with the major hotel PMS platforms used in Malta — Mews, Cloudbeds, Opera, Protel, and Apaleo — so guest profiles, room charges, and outlet check posting flow into the PMS without manual rekeying. The integration is scoped per property during onboarding by OARC Digital." },
  { question: "How does the Google review automation work in Hospitality 360?", answer: "After a guest pays through the Hospitality 360 flow, the system sends an automated review prompt via the receipt screen, email, or WhatsApp, deep-linked into the venue&apos;s Google Business Profile. Most Malta venues see Google review volume rise three to five times within sixty days of switching on the module." },
  { question: "Is Hospitality 360 GDPR-compliant for Malta operators?", answer: "Hospitality 360 runs on EU-region infrastructure (Vercel eu-west-1, Render Frankfurt, AWS eu-central-1) so guest data never leaves the EU. OARC Digital provides the data-flow diagram, processor agreement, and DPIA inputs at the start of every deployment for IDPC compliance." },
  { question: "What does Hospitality 360 cost in Malta?", answer: "Hospitality 360 starts from €100 per month for a single-outlet venue, €350 per month for a multi-outlet hotel deployment, and €1,500 fixed for the onboarding project (menu translation into 9+ languages, QR design, POS integration, and on-site staff training). No setup fees, no annual lock-in." },
  { question: "Where is the Hospitality 360 product team based?", answer: "Hospitality 360 is built and supported by OARC Digital from Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. Team availability is Monday to Friday 09:00 to 18:00 CET on +356 7971 1799 and hello@oarcdigital.com, with on-call support during live service hours for active venues." },
];

const offers = [
  { name: "Single-outlet venue", priceFrom: 100, unitText: "MONTH", description: "QR menu, ordering, payments, and review automation for one restaurant, cafe, or beach club." },
  { name: "Multi-outlet hotel", priceFrom: 350, unitText: "MONTH", description: "Hotel deployment across multiple outlets with PMS sync, shared guest profile, and consolidated reporting." },
  { name: "Onboarding + integration", priceFrom: 1500, unitText: "PROJECT", description: "POS / PMS integration, menu translation in 9+ languages, QR design, on-site training, and go-live." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/hospitality-360-system"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "POS integrations (Lightspeed, Square, SumUp, Toast, Celery)" },
          { name: "PMS sync (Mews, Cloudbeds, Opera, Protel, Apaleo)" },
          { name: "Automated Google review capture" },
          { name: "Multilingual menus (9+ languages)" },
          { name: "Unified guest profile across outlets" },
          { name: "EU-region hosted, GDPR-clean" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
