import type { Metadata } from "next";
import "../insights-ports.css";
import JsonLd from "@/components/JsonLd";
import AutomationClient from "./AutomationClient";

const TITLE = "AI Automation Malta | OARC Digital Operators";
const DESCRIPTION =
  "OARC Digital builds AI automation systems in Malta — CRM, WhatsApp agents, reporting, and ops loops. Birkirkara. WhatsApp +356 7971 1799.";
const URL = "https://oarcdigital.com/insights/ai-automation-malta";

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
    question: "What is OARC automation?",
    answer:
      "OARC Digital designs and runs AI operators for Malta businesses — lead follow-up, CRM, reporting, booking, and WhatsApp agents.",
  },
  {
    question: "Do we need a technical team?",
    answer:
      "No. We map the work, build the stack, train the operators, and stay on month-to-month.",
  },
  {
    question: "How long until something ships?",
    answer:
      "First useful loop is usually inside 2–4 weeks: one workflow, one channel, one report.",
  },
  {
    question: "Is this replacing staff?",
    answer:
      "No. We cut the busywork that keeps closers off the phone.",
  },
  {
    question: "How do we start?",
    answer:
      "WhatsApp +356 7971 1799. Birkirkara HQ. Month-to-month after a scoped discovery.",
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

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OARC Digital",
    url: "https://oarcdigital.com/",
    telephone: "+35679711799",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Birkirkara",
      addressCountry: "MT",
    },
  };


  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Malta",
    provider: {
      "@type": "Organization",
      name: "OARC Digital",
      url: "https://oarcdigital.com/",
      telephone: "+35679711799",
    },
    areaServed: "Malta",
    description:
      "OARC Digital builds AI automation systems in Malta — CRM, WhatsApp agents, reporting, and ops loops.",
    url: "https://oarcdigital.com/insights/ai-automation-malta",
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
        name: "AI Automation Malta",
        item: "https://oarcdigital.com/insights/ai-automation-malta",
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />
      <JsonLd data={orgLd} />
      <AutomationClient />
    </>
  );
}
