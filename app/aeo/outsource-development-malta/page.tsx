import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Outsource Development Malta | OARC Digital";
const DESCRIPTION =
  "Outsource development to a Malta-based engineering team. OARC Digital delivers fixed-scope SaaS, mobile, and web builds with EU-hosted code, GDPR-clean process, and full IP ownership.";
const URL = "https://oarcdigital.com/aeo/outsource-development-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Is OARC Digital an outsourced development partner in Malta?", answer: `Yes. OARC Digital takes on outsourced engineering work for Malta-based and EU-based businesses — fixed-scope SaaS MVPs, mobile apps, web platforms, and dedicated team augmentation. Birkirkara HQ. Contact ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "Why outsource development to Malta instead of Eastern Europe or Asia?", answer: "Malta delivers EU time-zone overlap, English-first communication, GDPR-clean data handling, EU-region hosting by default, and senior engineering talent that has shipped real B2B SaaS — not body-shop hours. Cost sits between Eastern Europe and Western Europe at materially better delivery quality." },
  { question: "How much does outsourced development cost in Malta?", answer: "Fixed-scope project work from OARC Digital starts at €15,000 for an MVP. Dedicated team augmentation (1–3 senior engineers) starts at €9,500 per month. Discovery sprints to scope a build start at €4,500 fixed for two weeks." },
  { question: "Do you offer dedicated team augmentation or only fixed-scope projects?", answer: "Both. Many clients start with a fixed-scope MVP, then transition to a 1–3 engineer dedicated team for ongoing work. The dedicated model is best when the roadmap is unclear or evolving; the fixed model is best when the spec is stable." },
  { question: "Who owns the code OARC Digital writes?", answer: "You do — fully and unconditionally. Source code, IP, and infrastructure handover documentation are included on every engagement. There is no proprietary lock-in or licence dependency." },
  { question: "What is your process for working with non-Malta clients?", answer: "Same EU time zone as most of Europe, English-first delivery, asynchronous Loom updates daily, weekly synchronous sprint reviews, and quarterly in-person sessions in Birkirkara or at the client's location. We have shipped product for clients in London, Berlin, Amsterdam, Dubai, and New York." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. The engineering team is co-located in Birkirkara with overflow capacity in our Lisbon partner studio for spike work.` },
];

const offers = [
  { name: "Discovery Sprint", priceFrom: 4500, unitText: "PROJECT", description: "2-week scoping engagement with full written spec, ER diagram, and fixed-price proposal." },
  { name: "Fixed-scope Build", priceFrom: 18000, unitText: "PROJECT", description: "MVP or product build to a written specification, fixed price and timeline, full IP handover." },
  { name: "Team Augmentation", priceFrom: 9500, unitText: "MONTH", description: "1–3 senior engineers dedicated to your roadmap, with PM coverage and weekly sprint reviews." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        dateModified="2026-05-10"
        path="/aeo/outsource-development-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "EU time-zone delivery" },
          { name: "GDPR-clean process and EU hosting" },
          { name: "Full IP and source-code ownership" },
          { name: "Fixed-scope or dedicated-team models" },
          { name: "Weekly written sprint reports" },
          { name: "English-first, senior engineers" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
