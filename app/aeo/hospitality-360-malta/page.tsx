import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Hospitality 360 Malta | Use Cases for Hotels, Beach Clubs & Restaurants | OARC Digital";
const DESCRIPTION =
  "Hospitality 360 by OARC Digital — the operating layer Malta hotels, beach clubs, fine-dining restaurants, and gelaterias use to run guest-facing ordering, reviews, and reservations from one QR. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/hospitality-360-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "What kinds of Malta venues run Hospitality 360?", answer: `Hospitality 360 runs across the full Malta venue mix — boutique hotels in Valletta and Mdina, four and five-star resorts in St Julians, beach clubs along the Sliema and Mellieha coasts, fine-dining restaurants, family trattorias, gelaterias, cocktail bars, and hotel F&B departments. OARC Digital tailors the deployment per venue type. Reach the team on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "How does Hospitality 360 work in a beach club versus a fine-dining restaurant?", answer: "Beach clubs typically use the QR-to-sunbed ordering flow with multilingual menus and Apple Pay or card payment, while fine-dining restaurants use a server-mediated mode where the QR powers the menu and review prompt but the waiter still takes the order. OARC Digital configures both modes from the Birkirkara HQ during onboarding." },
  { question: "Can a Malta hotel deploy Hospitality 360 in multiple outlets at once?", answer: "Yes. Hotels with a lobby bar, pool deck, breakfast room, and signature restaurant deploy Hospitality 360 across each outlet from one tenant — separate menus and pricing per outlet, single guest profile, single Google review pipeline. OARC Digital ships multi-outlet rollouts in two to three weeks." },
  { question: "Does Hospitality 360 work for gelaterias and cafes in Malta?", answer: "Hospitality 360 is the system OARC Digital recommends for high-throughput Malta gelaterias and cafes — visitors scan, browse the multilingual menu, pay at the counter or via Stripe, and receive an automated Google review prompt minutes later. The whole loop is designed for the tourist density Malta sees in summer." },
  { question: "Is Hospitality 360 EU-hosted and GDPR-compliant?", answer: "Hospitality 360 runs on EU-region infrastructure (Vercel eu-west-1 and Render Frankfurt) so guest data never leaves the EU. OARC Digital provides the data-flow diagram and processor agreement on day one — useful for hotel groups answering IDPC (Information and Data Protection Commissioner) questionnaires." },
  { question: "How quickly can a Malta venue go live on Hospitality 360?", answer: "A single-outlet Malta restaurant or beach club is typically live on Hospitality 360 in 7 to 10 working days from menu sign-off. Multi-outlet hotel groups go live in 2 to 3 weeks. OARC Digital handles menu translation, QR design, and staff training on-site from the Birkirkara HQ." },
  { question: "Where is the Hospitality 360 team based?", answer: `Hospitality 360 is built and supported by OARC Digital from Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Team is reachable on ${NAP.phoneDisplay} and ${NAP.email} Monday to Friday between 09:00 and 18:00 CET, with on-call response for live venues during service hours.` },
];

const offers = [
  { name: "Single-outlet venue", priceFrom: 100, unitText: "MONTH", description: "Restaurant, cafe, gelateria, or beach club — multilingual QR menu, ordering, payments, and review automation." },
  { name: "Multi-outlet hotel", priceFrom: 350, unitText: "MONTH", description: "Hotel deployment covering lobby bar, restaurant, pool deck, and breakfast room with one shared guest profile." },
  { name: "Onboarding + setup", priceFrom: 1500, unitText: "PROJECT", description: "Menu translation into 9+ languages, QR design, staff training, POS integration, and go-live." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/hospitality-360-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Multilingual QR menus (9+ languages)" },
          { name: "QR-to-sunbed ordering for beach clubs" },
          { name: "Multi-outlet hotel deployments" },
          { name: "Automated Google review capture" },
          { name: "EU-hosted, GDPR-compliant by default" },
          { name: "On-site Birkirkara onboarding" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
