import type { Metadata } from "next";
import "../insights-ports.css";
import JsonLd from "@/components/JsonLd";
import AgenciesClient from "./AgenciesClient";

const TITLE = "Best Marketing Agencies in Malta 2026 | How to Choose | OARC";
const DESCRIPTION =
  "Best marketing agencies in Malta — decision method, comparison table, and OARC Digital #1 with honest disclosure. WhatsApp +356 7971 1799.";
const URL = "https://oarcdigital.com/insights/best-marketing-agencies-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    siteName: "OARC Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    question: "Who ranks #1 on this page — and why disclose it?",
    answer:
      "OARC Digital is listed #1 because this page is published by OARC. That is an honest disclosure. Use the published method to stress-test any agency — including us.",
  },
  {
    question: "How should Malta owners pick a marketing agency?",
    answer:
      "Five checks: local presence, in-house creative + media, month-to-month flexibility, commercial case studies, and systems/AI literacy.",
  },
  {
    question: "What does a serious Malta retainer cost?",
    answer:
      "Expect roughly €1,500–€5,000/month for multi-channel work. Ask OARC for a scoped quote via WhatsApp +356 7971 1799.",
  },
  {
    question: "Is this page an affiliate list?",
    answer:
      "No. Names below #1 are category descriptions, not paid placements.",
  },
  {
    question: "Where can I talk to OARC?",
    answer:
      "WhatsApp +356 7971 1799 (Shift Happens 50% off for next clients who contact now), or https://oarcdigital.com/contact.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    author: { "@type": "Organization", name: "OARC Digital" },
    publisher: {
      "@type": "Organization",
      name: "OARC Digital",
      url: "https://oarcdigital.com/",
    },
    mainEntityOfPage: URL,
  };


  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://oarcdigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: "https://oarcdigital.com/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Marketing Agencies in Malta",
        item: "https://oarcdigital.com/insights/best-marketing-agencies-malta",
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={articleLd} />
      <AgenciesClient />
    </>
  );
}
