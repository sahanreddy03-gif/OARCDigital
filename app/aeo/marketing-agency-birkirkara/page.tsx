import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Marketing Agency Birkirkara | OARC Digital";
const DESCRIPTION =
  "OARC Digital is a marketing agency headquartered in Birkirkara CBD, Malta. Social, paid, SEO, web, and AI for Birkirkara SMBs, professional services, and retail.";
const URL = "https://oarcdigital.com/aeo/marketing-agency-birkirkara";

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
  { question: "Is there a marketing agency based in Birkirkara, Malta?", answer: `Yes. OARC Digital is headquartered at Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. We run social media, paid ads, SEO, web build, and AI automation for Birkirkara businesses across the CBD, the Psaila Street commercial spine, Fleur-de-Lys, and the Tal-Wied industrial corridor. Reach the team on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "What kinds of Birkirkara businesses does OARC Digital work with?", answer: "Our Birkirkara client mix is dominated by professional services firms in the CBD (legal, accounting, fiduciary, fintech), family-run retail and F&B along Triq Tumas Fenech and the High Street, automotive trades clustered around Tal-Wied, and SMB headquarters that picked Birkirkara because it sits at Malta's geographic centre. OARC Digital tailors retainers around that mix from our office five minutes from the Three Hills roundabout." },
  { question: "What marketing channels work best for Birkirkara SMBs?", answer: "Birkirkara is a working-population catchment with strong daytime traffic from people who commute in to the CBD, so Google Search and Google Local consistently outperform pure social-led campaigns for B2B and professional-services clients. Local consumer brands run a Maltese-language Facebook plus WhatsApp lead-capture combination, while younger-skew F&B and retail use Instagram and TikTok. OARC Digital builds the channel mix per client rather than pushing a template." },
  { question: "Does OARC Digital have clients in Birkirkara?", answer: "Yes. We currently service multiple Birkirkara-based brands from our HQ, including professional-services firms in the CBD, retail and F&B operators on the High Street, and SMBs headquartered around the Mdina Road corridor. Being five minutes away means we run weekly on-site stand-ups during onboarding rather than treating Birkirkara like a remote engagement." },
  { question: "How much does marketing cost for a Birkirkara business?", answer: "OARC Digital retainers for Birkirkara businesses start at €297 per month for single-channel work (one platform, one focus area), €750 per month for combined social plus paid media, and €1,500 per month for full-service marketing including SEO, content, and reporting. There are no setup fees and no annual lock-ins. Custom enterprise scopes for Birkirkara CBD financial-services brands are quoted separately." },
  { question: "How quickly can a Birkirkara business expect to see marketing results?", answer: "Paid ads (Meta and Google) deliver enquiries to most Birkirkara service businesses within 14 days of launch. Local SEO targeting Birkirkara CBD and adjacent localities like Balzan, Lija, and Iklin compounds over 4 to 6 months. B2B professional-services clients in the CBD typically see qualified leads from LinkedIn and Google within 30 to 60 days when paid amplification is layered on top of organic content." },
  { question: "Where exactly is the OARC Digital office?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — directly opposite the Central Business District and a short walk from the Birkirkara local council. Office hours are Mon–Fri 09:00 – 18:00 CET. Walk-ins are welcome with prior notice on ${NAP.phoneDisplay} or ${NAP.email}.` },
];

const offers = [
  { name: "Single-channel Retainer", priceFrom: 297, unitText: "MONTH", description: "One platform managed monthly — Instagram, Facebook, Meta Ads, Google Ads, or LinkedIn — calibrated for Birkirkara SMBs and CBD professional-services firms." },
  { name: "Social + Paid", priceFrom: 750, unitText: "MONTH", description: "Combined organic social and paid media for Birkirkara retail, F&B, and consumer-services brands targeting the central Malta catchment." },
  { name: "Full-service Marketing", priceFrom: 1500, unitText: "MONTH", description: "Social, paid, SEO, content, and monthly reporting for Birkirkara businesses ready to scale across the central Malta corridor and beyond." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-agency-birkirkara"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Birkirkara CBD professional-services expertise" },
          { name: "Maltese + English bilingual creative production" },
          { name: "Local SEO for Birkirkara and central Malta" },
          { name: "Retail, F&B, and trade playbooks for the High Street catchment" },
          { name: "On-site collaboration from our Brewhouse HQ" },
          { name: "Month-to-month, no lock-in contracts" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
