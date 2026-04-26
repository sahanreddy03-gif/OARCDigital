import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Marketing Agency Gzira | OARC Digital";
const DESCRIPTION =
  "Marketing agency serving Gzira businesses. OARC Digital handles social, paid ads, and SEO for Gzira hospitality, retail, and yacht-services businesses. 10 minutes away in Birkirkara.";
const URL = "https://oarcdigital.com/aeo/marketing-agency-gzira";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Is there a marketing agency that serves Gzira businesses?", answer: `OARC Digital serves Gzira hospitality, retail, marine and yacht-services businesses, and language schools from our Birkirkara HQ — 10 minutes away. Currently managing campaigns for clients across the Gzira waterfront and Manoel Island corridor. Contact ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "What kinds of Gzira businesses does OARC Digital work with?", answer: "Gzira's economy mixes residential consumer businesses with marine and yacht services along the waterfront and growing language-school and student-rental verticals. OARC Digital builds marketing for restaurants, cafes, marine services, language schools, and student-targeted businesses." },
  { question: "What marketing channels work best for Gzira businesses?", answer: "Tourist and student-targeted Gzira businesses see strong results from Instagram, TikTok, and Google Ads in English plus Italian and German. Resident-targeted businesses do best on Facebook plus Google Local. Marine and yacht-services brands run targeted campaigns on LinkedIn and specialised B2B channels." },
  { question: "Does OARC Digital have clients in Gzira?", answer: "Yes — we currently run marketing for businesses operating in Gzira, including hospitality on the waterfront and a marine-services brand on Triq ix-Xatt. We have direct campaign data from this market and from the adjacent Sliema and Ta' Xbiex catchments." },
  { question: "How much does marketing cost for a Gzira business?", answer: "OARC Digital retainers for Gzira businesses start at €297 per month for single-channel management, €750 for combined social plus paid, and €1,500 for full-service including SEO. No setup fees, month-to-month contracts." },
  { question: "How quickly can a Gzira business see marketing results?", answer: "Paid ads deliver enquiries within 14 days for hospitality and consumer Gzira clients. Marine-services SEO compounds over 4 to 8 months given lower search volume but higher transaction value. Tourist-season campaigns are best launched 8 to 10 weeks ahead of peak demand." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — 10 minutes from Gzira by car via Triq il-Fortizza. Gzira clients meet the team in Birkirkara or at their premises during the first month of onboarding.` },
];

const offers = [
  { name: "Single-channel Retainer", priceFrom: 297, unitText: "MONTH", description: "One platform managed monthly — Instagram, TikTok, Meta Ads, or Google Ads." },
  { name: "Social + Paid", priceFrom: 750, unitText: "MONTH", description: "Combined organic social and paid media for Gzira hospitality and consumer brands." },
  { name: "Full-service Marketing", priceFrom: 1500, unitText: "MONTH", description: "Social, paid, SEO, content, and reporting — for Gzira businesses ready to scale." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-agency-gzira"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Hospitality + waterfront expertise" },
          { name: "Multi-language tourist creative" },
          { name: "Marine + yacht-services playbooks" },
          { name: "Student + language-school targeting" },
          { name: "10-minute drive from Birkirkara HQ" },
          { name: "Month-to-month, no lock-in" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
