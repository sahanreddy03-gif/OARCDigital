import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Paid Advertising Malta | OARC Digital";
const DESCRIPTION =
  "Looking for paid advertising in Malta? OARC Digital runs Meta, Google, and TikTok ads for Malta hospitality, retail, fintech, and MGA-licensed iGaming brands. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/paid-advertising-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who runs paid advertising for Malta businesses?", answer: "OARC Digital runs Meta Ads (Facebook + Instagram), Google Ads, TikTok Ads, and YouTube campaigns for Malta hospitality, retail, fintech, SaaS, and MGA-licensed iGaming brands. The team works from Birkirkara and reports monthly in plain English. Reach us on +356 7971 1799 or hello@oarcdigital.com." },
  { question: "How much does paid advertising cost in Malta?", answer: "OARC Digital management fees start at €600 per month for a single platform with up to €3,000 in monthly ad spend, €1,200 per month for multi-platform with creative production included, and custom pricing above €15,000 monthly spend. Fees are management-only — your ad spend goes directly to Meta, Google, or TikTok." },
  { question: "What ad platforms work best for a Malta business?", answer: "For B2C hospitality and retail, Meta Ads dominate Malta because Facebook and Instagram penetration sits above 80 percent of online adults. Google Ads converts strongly for high-intent service categories like accountants, dentists, and trades. TikTok works for Gen-Z hospitality and tourism. WhatsApp Business + Click-to-WhatsApp ads close the loop on local enquiries." },
  { question: "Can OARC Digital handle paid advertising for an MGA-licensed iGaming operator?", answer: "Yes. We work with MGA-licensed casino, sportsbook, and affiliate operators based in St Julians, Sliema, and Ta Xbiex. Our team understands the MGA advertising guidelines, the EU jurisdiction-by-jurisdiction acquisition rules, GamStop-style exclusion handling, and Meta&apos;s gambling-vertical certification process. Compliance is baked into the campaign brief." },
  { question: "Can you target tourists planning to visit Malta?", answer: "Yes. We run geo-targeted prospecting campaigns aimed at the UK, Germany, Italy, France, and Scandinavia (Malta&apos;s top inbound markets) timed against booking-window data, plus on-island retargeting that reaches tourists already in Malta via location radius from St Julians, Sliema, Mellieha, and Valletta hotel zones." },
  { question: "How quickly will paid ads deliver results?", answer: "Click-to-Lead and Click-to-WhatsApp campaigns typically generate enquiries inside 7 days for a Malta service business. Meta Advantage+ shopping for Malta retail compounds within 21 days. Google Search ads start converting from day 1 if intent and bid strategy are calibrated. We share weekly results in the first month and monthly thereafter." },
  { question: "Where is OARC Digital based?", answer: "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta — open Monday to Friday, 09:00 to 18:00 CET. Clients meet the paid team in person for the kickoff workshop and quarterly reviews. Phone +356 7971 1799 or email hello@oarcdigital.com." },
];

const offers = [
  { name: "Single-Platform Retainer", priceFrom: 600, unitText: "MONTH", description: "Meta or Google or TikTok management with up to €3,000 monthly ad spend. Creative refresh every two weeks." },
  { name: "Multi-Platform + Creative", priceFrom: 1200, unitText: "MONTH", description: "Meta + Google + TikTok with in-house creative production, weekly optimisation, and monthly performance reporting." },
  { name: "iGaming + Enterprise", priceFrom: 3500, unitText: "MONTH", description: "MGA-aware paid acquisition for licensed operators, multi-jurisdiction targeting, compliance review, and dedicated strategist." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/paid-advertising-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Meta, Google, TikTok, YouTube" },
          { name: "MGA-aware iGaming acquisition" },
          { name: "Tourist + on-island geo targeting" },
          { name: "In-house creative production" },
          { name: "Weekly optimisation cadence" },
          { name: "Plain-English monthly reporting" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
