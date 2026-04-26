import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Marketing Agency Valletta | OARC Digital";
const DESCRIPTION =
  "Marketing agency serving Valletta hospitality, boutique culture, finance, and walk-in tourism brands. OARC Digital runs heritage-grade brand, social, and direct-booking marketing from Birkirkara, 12 minutes from the capital.";
const URL = "https://oarcdigital.com/aeo/marketing-agency-valletta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Is there a marketing agency that serves Valletta businesses?", answer: `Yes. OARC Digital runs branding, social, paid, SEO, and direct-booking programs for Valletta boutique hotels, fine-dining and casual F&B, galleries and cultural venues, retail concepts, and Republic Street finance and professional-services firms. Our HQ is at The Brewhouse, Birkirkara — 12 minutes from City Gate. Reach the team on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "What kinds of Valletta businesses does OARC Digital work with?", answer: "Boutique hotels and palazzo townhouses across Triq Santa Lucija and Triq id-Dejqa, fine-dining, wine bars, and cafes around Strait Street and Old Theatre Street, retail and concept stores along Republic Street and Merchants Street, galleries and cultural operators, and the cluster of finance, legal, and government-adjacent firms operating from the upper Valletta corridor. Our retainers are tuned to each segment rather than templated." },
  { question: "What marketing channels work best for Valletta businesses?", answer: "Valletta is overwhelmingly walk-in tourism plus a high-value local professional class. That mix means Google Business Profile, TripAdvisor, Booking.com optimisation, and Google Hotel Ads matter more here than in any other Malta locality, alongside multilingual Instagram and Meta retargeting for the visitor segment. Republic Street finance and professional-services brands lean on LinkedIn, Google Search, and PR-grade content." },
  { question: "Does OARC Digital work with cultural and heritage organisations in Valletta?", answer: "Yes. OARC Digital has the brand sensibility, multilingual capability, and PR-grade content production needed to serve Valletta cultural institutions, palazzo hotels, gallery operators, and heritage F&B. We treat heritage as the asset it is rather than as a backdrop — copy, photography, and channel mix all reflect that." },
  { question: "How much does marketing cost for a Valletta business?", answer: "OARC Digital retainers for Valletta start at €297 per month for single-channel social or paid management, €750 per month for combined social plus paid media, and €1,500 per month for full-service marketing including SEO, content, and reporting. Boutique-hotel direct-booking programs and bespoke brand identity scopes for Valletta cultural operators are quoted separately. No setup fees, no annual lock-in." },
  { question: "How quickly can a Valletta business expect to see marketing results?", answer: "Paid Meta and Google campaigns deliver bookings or in-store traffic for Valletta F&B and retail clients within 14 days of launch. Boutique-hotel direct-booking programs compound over 60 to 120 days as Google Hotel Ads, Booking.com optimisation, and Meta retargeting build. Republic Street professional-services LinkedIn and Search programs typically deliver qualified inbound enquiries within 30 to 60 days." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — a 12-minute drive from City Gate via the Regional Road. Valletta clients meet the team in Birkirkara, or we run on-site working sessions and shoots inside the venue or office during the first 60 days of onboarding.` },
];

const offers = [
  { name: "Single-channel Retainer", priceFrom: 297, unitText: "MONTH", description: "One platform managed monthly — Instagram, Meta Ads, Google Ads, or LinkedIn — calibrated for Valletta hospitality, retail, cultural, and professional-services brands." },
  { name: "Social + Paid", priceFrom: 750, unitText: "MONTH", description: "Combined organic social and paid media for Valletta boutique hotels, fine-dining, retail, and cultural venues serving walk-in tourism and the local professional class." },
  { name: "Full-service Marketing", priceFrom: 1500, unitText: "MONTH", description: "Social, paid, SEO, multilingual content, and monthly reporting for Valletta hospitality groups and heritage operators ready to scale beyond their first venue." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-agency-valletta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Heritage-grade brand and content for Valletta hospitality" },
          { name: "Multilingual creative for walk-in tourism" },
          { name: "Boutique-hotel direct-booking programs (Google Hotel Ads, Booking.com)" },
          { name: "Republic Street finance and professional-services playbooks" },
          { name: "12-minute drive from Birkirkara HQ" },
          { name: "Month-to-month, no lock-in contracts" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
