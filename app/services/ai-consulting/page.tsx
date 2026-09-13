import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const title = "Free AI & Growth Blueprint Malta | OARC Digital";
const description = "Get a free expert growth blueprint for your Malta business, covering AI consulting, Voice AI, automation, digital marketing, creative priorities and connected operating systems.";

const features = [
  { name: "Channel and creative priority map" },
  { name: "AI-agent and Voice AI use-case shortlist" },
  { name: "Automation workflow and human-handoff map" },
  { name: "Technology and system recommendations" },
  { name: "Sequenced next actions" },
  { name: "Grounded view of expected business impact" },
];

const faqs = [
  {
    question: "Is the OARC Growth Blueprint really free?",
    answer: "Yes. The expert working session and tailored written blueprint summary are free, with no obligation to continue. If implementation or deeper research would help, OARC scopes that separately before anything starts.",
  },
  {
    question: "Do we need to know which service we need?",
    answer: "No. Start with the business problem. OARC considers AI, Voice AI, automation, digital marketing, creative growth and connected operating systems before recommending priorities.",
  },
  {
    question: "Can OARC implement the blueprint?",
    answer: "Yes, where there is a fit. OARC can move from strategy into creative, marketing, AI-agent, automation and operating-system implementation.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: getHreflangAlternates("/services/ai-consulting"),
  openGraph: {
    images: ogImageEntry({ title, subtitle: description }),
    title,
    description,
    url: "https://oarcdigital.com/services/ai-consulting",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title, subtitle: description })],
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/services/ai-consulting" />
      <RouteSchema
        type="service"
        path="/services/ai-consulting"
        title={title}
        description={description}
        features={features}
        offers={[{
          name: "Free OARC Growth Blueprint",
          priceFrom: 0,
          currency: "EUR",
          description: "An expert working session and tailored written blueprint summary mapping priorities across AI, automation, creative, marketing and connected operating systems.",
        }]}
        faqs={faqs}
      />
      <PageContent />
    </>
  );
}