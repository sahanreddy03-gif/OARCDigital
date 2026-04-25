import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "App Development Malta | OARC Digital";
const DESCRIPTION =
  "App development in Malta. OARC Digital builds React Native and native iOS/Android apps for Malta hospitality, retail, fintech, and iGaming operators — EU-hosted, App Store ready. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/app-development-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who builds mobile apps in Malta?", answer: "OARC Digital is a Birkirkara-based product team that builds iOS and Android mobile apps for Malta operators across hospitality, retail, fintech, marine, and iGaming. We default to React Native for cross-platform builds and drop into native Swift or Kotlin where the surface demands it. Reach +356 7971 1799 or hello@oarcdigital.com." },
  { question: "How much does mobile app development cost in Malta?", answer: "A focused single-purpose React Native app from OARC Digital starts at €18,000 fixed for a 10 to 12 week build covering iOS, Android, and a basic admin backend. A full-feature production app with payments, push notifications, and CRM integration runs €40,000 to €95,000 depending on the surface area, integrations, and platform-specific native work required." },
  { question: "How long does it take to build a mobile app in Malta?", answer: "A focused React Native MVP from OARC Digital ships to TestFlight and Google Play internal in 10 to 12 weeks. A full production app with native modules, complex offline behaviour, payments, and integrations takes 16 to 28 weeks. We deliver a working build to TestFlight every fortnight so the founder always has the app on a real iPhone." },
  { question: "React Native or native iOS and Android?", answer: "Most Malta business apps — bookings, ordering, loyalty, customer dashboards — should be React Native because the cost-to-quality trade-off is unbeatable on cross-platform. Native Swift or Kotlin is justified when the app needs heavy hardware integration, ARKit, complex offline-first behaviour, or platform-specific UX language. OARC Digital ships both and recommends honestly." },
  { question: "Do you handle App Store and Google Play submission?", answer: "Yes. OARC Digital handles full submission to App Store Connect and Google Play Console, including the privacy nutrition labels, data safety form, App Tracking Transparency wiring, IDPC-aligned privacy policy, age ratings, and review responses. We submit under your developer account so you own the listing, not us." },
  { question: "Can the app integrate with our existing Malta business systems?", answer: "Yes. OARC Digital regularly integrates Malta business apps with Stripe, Revolut Business, Cloudbeds, Mews, OpenTable, SevenRooms, HubSpot, Pipedrive, Salesforce, Wolt, Bolt Food, WhatsApp Business API, and most Malta-popular POS terminals. Where webhooks are missing we build adapter middleware so the app stays integrated with the rest of the operation." },
  { question: "Where is OARC Digital based?", answer: "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. App development clients across Sliema, St Julians, Valletta, Mosta, Gzira, Mellieha, and Gozo, plus EU clients in London, Amsterdam, Berlin, and Dublin. Mon to Fri, 09:00 to 18:00 CET. Discovery workshops typically held in person at the Birkirkara office." },
];

const offers = [
  { name: "MVP App Sprint", priceFrom: 18000, unitText: "PROJECT", description: "10–12 week React Native build for iOS and Android, basic admin, App Store + Google Play submission." },
  { name: "Production App Build", priceFrom: 55000, unitText: "PROJECT", description: "Full-feature app with payments, push, integrations, native modules — 16 to 28 weeks fixed price." },
  { name: "Iteration Retainer", priceFrom: 2800, unitText: "MONTH", description: "Two-week sprints prioritised by activation and revenue. Releases every fortnight, monthly review call." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/app-development-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "React Native (cross-platform iOS + Android)" },
          { name: "Native Swift and Kotlin where it matters" },
          { name: "App Store + Google Play submission handled" },
          { name: "EU-hosted backend (Render Frankfurt)" },
          { name: "Stripe, Revolut, push, and CRM integrations" },
          { name: "TestFlight build every fortnight" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
