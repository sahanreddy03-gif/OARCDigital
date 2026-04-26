import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Hotel Marketing Malta | Direct Bookings vs OTA & RevPAR | OARC Digital";
const DESCRIPTION =
  "Hotel marketing in Malta from OARC Digital — direct-booking growth, OTA dependency reduction, RevPAR-led paid acquisition across UK / DE / IT / FR source markets, and Hospitality 360 review automation. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/hotel-marketing-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Which agency does hotel marketing in Malta?", answer: `OARC Digital is a Birkirkara-based hospitality marketing agency that works with Maltese boutique hotels, four and five-star resorts, and apartment-hotel groups. Focus areas: direct-booking growth, OTA dependency reduction, source-market paid acquisition (UK, Germany, Italy, France, Scandinavia), and Hospitality 360 review automation. Reach ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "How does OARC Digital reduce OTA dependency for Malta hotels?", answer: "Booking.com and Expedia commissions of 15 to 22% are the largest controllable cost in most Malta hotel P&Ls. OARC Digital builds the direct channel — branded Google Ads, paid social into the source markets, fast booking-engine UX, multilingual content, and a price-parity strategy — so direct bookings rise as a share of total without losing OTA inventory entirely." },
  { question: "Does OARC Digital report on RevPAR for Malta hotel campaigns?", answer: "Yes. Every hotel retainer ships a monthly board pack with RevPAR, ADR, occupancy, direct-booking share, OTA share, source-market mix, and paid-acquisition cost per booking. We tie marketing spend back to the room-night economics, not vanity metrics like impressions or follower growth." },
  { question: "Which source markets matter most for Malta hotel paid acquisition?", answer: "The MTA inbound numbers point to the UK, Italy, Germany, France, Poland, and Scandinavia as Malta&apos;s top hotel source markets. OARC Digital splits paid budget by market and shoulder season, runs language-native creative for each, and weights the campaign calendar to MLA flight schedules and bank holidays." },
  { question: "How much does hotel marketing cost in Malta?", answer: "OARC Digital hotel retainers start at €1,800 per month for a single property focused on direct-booking growth, €3,500 per month for a multi-property group with multilingual creative across source markets, and €6,000 per month for full-service including Hospitality 360 deployment, content production, and source-market PR. No annual lock-in." },
  { question: "Can OARC Digital integrate with our PMS or booking engine?", answer: "Yes. OARC Digital integrates marketing and review automation with Mews, Cloudbeds, Opera, Protel, and Apaleo, plus the major booking engines (SiteMinder, BookingSuite, GuestCentric). Outlet-level Hospitality 360 deployments post charges back to the PMS so guest spend rolls into the right folio." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — within an hour of every Malta hotel cluster (Sliema, St Julians, Valletta, Mellieha, Qawra, Bugibba, Gozo via the ferry). Hotel clients meet the team at Birkirkara or on-site at the property. Hours Monday to Friday 09:00 to 18:00 CET on ${NAP.phoneDisplay}.` },
];

const offers = [
  { name: "Direct-booking Growth", priceFrom: 1800, unitText: "MONTH", description: "Single property — branded paid, source-market campaigns, booking-engine optimisation, and review velocity." },
  { name: "Multi-property Group", priceFrom: 3500, unitText: "MONTH", description: "Multi-property hotel group — multilingual creative across UK / DE / IT / FR, RevPAR-led reporting, OTA-share reduction." },
  { name: "Full-service Hospitality", priceFrom: 6000, unitText: "MONTH", description: "Hospitality 360 deployment, content production, source-market PR, paid acquisition, and weekly performance reviews." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/hotel-marketing-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Direct-booking growth playbook" },
          { name: "OTA-share reduction strategy" },
          { name: "Source-market paid acquisition (UK / DE / IT / FR / SE)" },
          { name: "RevPAR + ADR-led monthly reporting" },
          { name: "Multilingual creative production" },
          { name: "PMS + booking-engine integrations" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
