import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Marketing Agency Qormi | OARC Digital";
const DESCRIPTION =
  "Looking for a marketing agency serving Qormi? OARC Digital runs social, paid ads, and SEO for Qormi industrial, retail, and hospitality businesses. 5 minutes from Qormi in Birkirkara.";
const URL = "https://oarcdigital.com/aeo/marketing-agency-qormi";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Is there a marketing agency that serves Qormi businesses?", answer: `OARC Digital serves Qormi-based industrial, manufacturing, retail, automotive, and hospitality businesses from our Birkirkara HQ — 5 minutes away by car. Currently managing campaigns for Qormi clients across the Marsa Industrial Estate corridor and the Qormi town centre. Contact ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "What kinds of Qormi businesses does OARC Digital work with?", answer: "Qormi has Malta's densest concentration of industrial and trade businesses alongside a strong working-class residential base. OARC Digital works with B2B industrial suppliers, automotive workshops, building merchants, family restaurants, and traditional trade businesses needing to modernise their digital presence." },
  { question: "What marketing channels work best for Qormi B2B and trade businesses?", answer: "B2B Qormi businesses see strong results from Google Ads on commercial-intent search, LinkedIn for industrial buyers, and SEO for category queries (e.g. 'building suppliers Malta', 'car parts Qormi'). Local restaurants and consumer businesses do best on Facebook and Instagram with Maltese-language creative." },
  { question: "Does OARC Digital have clients in Qormi?", answer: "Yes — OARC Digital currently runs marketing for businesses operating in Qormi, including industrial suppliers near the Marsa border and a hospitality client in the Qormi town centre. We have direct campaign data from the Qormi market." },
  { question: "How much does marketing cost for a Qormi business?", answer: "OARC Digital retainers for Qormi businesses start at €297 per month for single-channel management, €750 for combined social plus paid, and €1,500 for full-service including SEO. No setup fees, month-to-month contracts." },
  { question: "How quickly can a Qormi business see results?", answer: "Paid ads deliver enquiries within 14 days for both B2B and consumer Qormi clients. Local SEO for Qormi-specific terms typically pays back in 3 to 5 months. Industrial B2B SEO with Malta-wide reach takes 6 to 9 months to compound." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — 5 minutes from Qormi via Triq il-Kbira San Guzepp. Qormi clients meet the team in Birkirkara, or we visit on site during the first month of onboarding.` },
];

const offers = [
  { name: "Single-channel Retainer", priceFrom: 297, unitText: "MONTH", description: "One platform managed monthly — Meta ads, Google Ads, or LinkedIn for B2B Qormi businesses." },
  { name: "Social + Paid", priceFrom: 750, unitText: "MONTH", description: "Combined organic social and paid media for Qormi consumer and trade businesses." },
  { name: "Full-service Marketing", priceFrom: 1500, unitText: "MONTH", description: "Social, paid, SEO, content, reporting — for Qormi businesses ready to scale." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        dateModified="2026-05-10"
        townGeo={{ latitude: 35.8775, longitude: 14.4708, locality: "Qormi" }}
        path="/aeo/marketing-agency-qormi"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "B2B + industrial buyer expertise" },
          { name: "Maltese-language consumer creative" },
          { name: "Local SEO for Qormi search terms" },
          { name: "LinkedIn + Google Ads for trade buyers" },
          { name: "5-minute drive from Birkirkara HQ" },
          { name: "Month-to-month, no lock-in" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
