import type { Metadata } from "next";
import "../insights-ports.css";
import JsonLd from "@/components/JsonLd";
import OarcLandingClient from "./OarcLandingClient";

const TITLE = "OARC Digital Malta | Creative + AI Systems Agency";
const DESCRIPTION =
  "OARC Digital — Malta’s Creative + AI systems agency in Birkirkara. Film-led creative, paid growth, SEO/AEO, and automation. WhatsApp +356 7971 1799.";
const URL = "https://oarcdigital.com/insights/oarc-digital-malta";

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
    question: "What is OARC Digital?",
    answer:
      "OARC Digital is Malta’s Creative + AI Systems agency — strategy, creative production, paid media, SEO/AEO, and automation in one team based in Birkirkara.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Hospitality, iGaming, retail, real estate, fintech, and ambitious local brands that want serious creative and systems.",
  },
  {
    question: "How do engagements start?",
    answer:
      "Discovery call, clear scope, month-to-month retainer. WhatsApp +356 7971 1799 or oarcdigital.com/contact.",
  },
  {
    question: "Where are you based?",
    answer:
      "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road, Birkirkara, Malta.",
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
        name: "OARC Digital Malta",
        item: "https://oarcdigital.com/insights/oarc-digital-malta",
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={orgLd} />
      <OarcLandingClient />
    </>
  );
}
