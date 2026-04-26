import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Marketing Agency St Julians Malta | OARC Digital";
const DESCRIPTION =
  "Marketing agency serving St Julian's and Paceville hospitality, iGaming, and retail brands. OARC Digital runs multilingual social, paid, and influencer for the Spinola, Portomaso, and Paceville corridors. 10 minutes from Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/marketing-agency-st-julians";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Is there a marketing agency that serves St Julian's businesses?", answer: `Yes. OARC Digital runs social, paid, influencer, and content for St Julian's hospitality, retail, boutique hotels, and Malta-based iGaming HQs across Paceville, Spinola Bay, Portomaso, Ta' Xbiex Marina, and the Triq San Gorg corridor. Our HQ is at The Brewhouse, Birkirkara — a 10-minute drive from Spinola. Call ${NAP.phoneDisplay} or email ${NAP.email}.` },
  { question: "What marketing channels work best for St Julian's businesses?", answer: "St Julian's is the most internationally exposed catchment in Malta — Italian, German, British, Scandinavian, Eastern European, and now South American visitors and residents. Multilingual creative on Instagram, TikTok, and Meta Ads consistently outperforms single-language work. For iGaming employer-branding, LinkedIn plus targeted Google is dominant. For Paceville hospitality, TikTok velocity and influencer-led reels move the needle." },
  { question: "Does OARC Digital work with iGaming companies in St Julian's?", answer: "Yes. OARC Digital supports MGA-licensed operators and Malta-based iGaming suppliers headquartered around Triq San Gorg, Portomaso, and the Spinola Park / Quad Business Towers cluster — typically with employer branding, B2B marketing, content production, and event activation. We respect MGA advertising rules and never run unlicensed gambling acquisition." },
  { question: "What kinds of St Julian's businesses does OARC Digital work with?", answer: "Hospitality (restaurants, cocktail bars, beach clubs, lounges), boutique and 4 to 5-star hotels, retail across The Point and Bay Street, fitness and wellness concepts, language schools clustered in the Paceville hinterland, and B2B brands inside the iGaming, fintech, and DLT cluster. The St Julian's mix is broader than people assume — and our retainers reflect that." },
  { question: "How much does marketing cost for a St Julian's business?", answer: "OARC Digital retainers for St Julian's start at €297 per month for single-channel social or paid management, €750 per month for combined social plus paid media, and €1,500 per month for full-service marketing including SEO, content, and reporting. iGaming and hotel scopes that include shoot production, influencer programs, or multilingual content tracks are quoted separately. No setup fees, no annual lock-in." },
  { question: "How quickly can a St Julian's business expect to see marketing results?", answer: "Paid Meta and TikTok campaigns deliver bookings or walk-ins to St Julian's F&B and bar clients within 14 days of launch. Hotel direct-booking programs compound over 60 to 120 days as Google Hotel Ads and Meta retargeting build. iGaming employer-branding LinkedIn programs typically deliver qualified inbound applicants within 30 to 45 days of launch." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — a 10-minute drive from Spinola Bay via the Regional Road. St Julian's clients meet the team in Birkirkara, or we run on-site shoots and weekly working sessions at the venue or office during the first 60 days of onboarding.` },
];

const offers = [
  { name: "Single-channel Retainer", priceFrom: 297, unitText: "MONTH", description: "One platform managed monthly — Instagram, TikTok, Meta Ads, LinkedIn, or Google Ads — calibrated for St Julian's hospitality, retail, and iGaming brands." },
  { name: "Social + Paid", priceFrom: 750, unitText: "MONTH", description: "Combined organic social and paid media for St Julian's F&B, hotels, and consumer brands across Paceville, Spinola, and Portomaso." },
  { name: "Full-service Marketing", priceFrom: 1500, unitText: "MONTH", description: "Social, paid, SEO, multilingual content, and monthly reporting — for St Julian's hospitality groups and Malta-based iGaming HQs ready to scale." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-agency-st-julians"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Paceville + Spinola Bay hospitality expertise" },
          { name: "Multilingual creative for international visitors" },
          { name: "MGA-aware iGaming employer-branding playbooks" },
          { name: "Boutique and 4 to 5-star hotel direct-booking programs" },
          { name: "10-minute drive from Birkirkara HQ" },
          { name: "Month-to-month, no lock-in contracts" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
