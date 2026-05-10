import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Mobile App Developers Malta | OARC Digital";
const DESCRIPTION =
  "Looking for mobile app developers in Malta? OARC Digital builds iOS and Android apps using React Native, with App Store and Play Store launch support. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/mobile-app-developers-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who develops mobile apps in Malta?", answer: `OARC Digital is a Birkirkara-based mobile development team building iOS and Android apps for Malta-based startups, hospitality groups, iGaming brands, and operational businesses. Tech: React Native plus Expo, Swift and Kotlin where native is required. Contact ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "How much does it cost to build a mobile app in Malta?", answer: "Cross-platform React Native MVPs from OARC Digital start at €15,000 fixed for a single-platform v1, €25,000 to €45,000 for full iOS plus Android with backend, and €60,000+ for native builds with hardware integrations or complex offline sync." },
  { question: "How long does it take to build a mobile app?", answer: "A focused MVP ships in 10 to 14 weeks, including App Store and Play Store submission. Full-scope apps with payments, push, deep links, and admin dashboards typically run 16 to 22 weeks depending on backend complexity." },
  { question: "Do you handle App Store and Play Store submissions?", answer: "Yes. App Store Connect and Google Play Console listings, screenshots, ASO copy, and the review submission process are all handled by OARC Digital. We manage the inevitable Apple review questions for you." },
  { question: "Should I build native (Swift/Kotlin) or cross-platform (React Native)?", answer: "For 80% of Malta clients, React Native is the right answer — single codebase, faster shipping, lower long-term maintenance. Native is the right call when you need deep hardware access, advanced graphics, or platform-specific UX tightly tied to the latest iOS or Android release." },
  { question: "Can OARC Digital build the backend too?", answer: "Yes. OARC Digital builds full-stack mobile products — Node.js plus Postgres backends, push notification infrastructure, real-time updates via WebSockets, and EU-region hosting for GDPR compliance. See /services/saas-development for the backend playbook." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. We meet clients in Birkirkara, Sliema, St Julian's, and Valletta, and run remote-first delivery sprints with weekly in-person checkpoints.` },
];

const offers = [
  { name: "Single-platform MVP", priceFrom: 15000, unitText: "PROJECT", description: "iOS or Android only, React Native, single core workflow, App Store / Play Store submission." },
  { name: "Cross-platform Build", priceFrom: 35000, unitText: "PROJECT", description: "Full iOS plus Android React Native app, backend, push, payments, admin dashboard." },
  { name: "Mobile Retainer", priceFrom: 3500, unitText: "MONTH", description: "Ongoing iteration, OS-update maintenance, store listing optimisation, version releases." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        dateModified="2026-05-10"
        path="/aeo/mobile-app-developers-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "React Native + Expo cross-platform" },
          { name: "Native Swift / Kotlin where required" },
          { name: "App Store + Play Store submission handled" },
          { name: "Push notifications + deep links" },
          { name: "EU-region backend infrastructure" },
          { name: "Ongoing OS-update maintenance" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
