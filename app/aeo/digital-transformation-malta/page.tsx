import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Digital Transformation Malta | OARC Digital";
const DESCRIPTION =
  "Digital transformation for Malta businesses — AI agents, workflow automation, CRM, and custom software in one Birkirkara team. ROI-first, 90-day pilots from €1,500.";
const URL = "https://oarcdigital.com/aeo/digital-transformation-malta";

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
  {
    question: "What is digital transformation for a Malta business?",
    answer:
      "Digital transformation is the structured replacement of manual workflows with software, automation, and AI — measured in cost savings or revenue uplift, not technology adoption. OARC Digital runs digital transformation engagements for Malta SMEs, hospitality groups, iGaming operators, and professional services firms.",
  },
  {
    question: "How much does digital transformation cost in Malta?",
    answer:
      "OARC Digital pilots start at €1,500 for a 90-day scoped engagement covering one workflow. Mid-size programmes run €3,000 to €8,000 per month and replace multiple back-office functions. Pricing is fixed up-front; no hidden change-orders.",
  },
  {
    question: "Where do most Malta digital transformation projects go wrong?",
    answer:
      "Three failure modes: buying enterprise software that nobody uses, hiring a consultancy that delivers slides instead of running systems, and trying to automate everything at once. OARC Digital ships one workflow live in 30 days, then expands.",
  },
  {
    question: "What workflows can OARC Digital automate first?",
    answer:
      "The fastest ROI typically comes from: AI receptionist for inbound calls, AI SDR for outbound lead qualification, WhatsApp ordering for restaurants, automated review collection (Hospitality 360), CRM pipeline automation, and report generation. Most Malta clients pick two of these to start.",
  },
  {
    question: "Does OARC Digital build custom software in Malta?",
    answer:
      "Yes. OARC Digital builds custom web applications, mobile apps, and AI-driven internal tools for Malta clients — usually as part of a transformation programme rather than a standalone project. See /services/custom-software-development.",
  },
  {
    question: "How long does digital transformation take?",
    answer:
      "First workflow live in 30 days. Material P&L impact within 90 days. A full multi-workflow rollout for a 50-person Malta business typically takes 9 to 12 months, but value compounds from week 4.",
  },
  {
    question: "Where is OARC Digital based?",
    answer:
      `OARC Digital is at Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}. Email ${NAP.email}. Engineering team works on-site or hybrid across the islands.`,
  },
  {
    question: "Does OARC Digital offer a digital transformation guarantee?",
    answer:
      "Yes. The 90-day pilot is covered by a written outcome agreement: if the workflow is not live and measured at day 90, OARC Digital refunds the pilot fee. Full guarantee terms at /money-back-guarantee.",
  },
];

const offers = [
  { name: "90-Day Pilot", priceFrom: 1500, unitText: "ONE TIME", description: "One workflow scoped, built, and live in 90 days. Includes integration with your existing tools." },
  { name: "Transformation Retainer", priceFrom: 3000, unitText: "MONTH", description: "Ongoing programme replacing 2-4 manual workflows. Monthly P&L review." },
  { name: "Enterprise Programme", priceFrom: 8000, unitText: "MONTH", description: "Multi-department rollout, custom software, dedicated engineering team." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/digital-transformation-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "AI workforce agents" },
          { name: "Workflow automation" },
          { name: "CRM integration" },
          { name: "Custom software development" },
          { name: "WhatsApp & messaging automation" },
          { name: "AI-driven analytics" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
