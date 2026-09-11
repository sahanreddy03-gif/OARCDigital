import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import VoiceAIExperience from "./VoiceAIExperience";

const title = "AI Phone Receptionist Malta | Voice AI Worker | OARC";
const description = "Voice AI Worker for Malta businesses: answers calls, acts in your systems, books work, and hands off decisions that need a person. Birkirkara.";

const FAQS = [
  {
    question: "Can AI answer my business phone in Malta after hours?",
    answer:
      "Yes. OARC's Voice AI Worker answers Malta business calls after hours, follows your rules, and books or routes work so you miss fewer revenue calls.",
  },
  {
    question: "Does the voice agent book appointments into my calendar?",
    answer:
      "When scoped, yes—it books into your calendar or CRM and hands off exceptions that need a human decision.",
  },
  {
    question: "How is a Voice AI Worker different from a basic IVR menu?",
    answer:
      "IVR is button trees. A Voice AI Worker understands speech, completes tasks in your systems, and escalates judgment calls to people.",
  },
  {
    question: "Is voice AI suitable for restaurants in Malta?",
    answer:
      "Yes. Restaurants use voice for bookings and FAQs; see also H360 hospitality phone AI for venue-specific packaging.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://oarcdigital.com/voice-ai-worker" },
  openGraph: { title, description, url: "https://oarcdigital.com/voice-ai-worker", type: "website" },
  twitter: { card: "summary_large_image", title: "Voice AI Worker", description },
};

export default function VoiceAIWorkerPage() {
  return (
    <Layout navTheme="dark" showMobileNav>
      <RouteSchema
        type="service"
        path="/voice-ai-worker"
        title="Voice AI Worker"
        description={description}
        serviceType="Managed Voice AI Worker"
        audience={[
          "Hospitality",
          "Sales",
          "Healthcare",
          "Finance",
          "Real estate",
          "Logistics",
          "Home services",
        ]}
        faqs={FAQS}
      />
      <VoiceAIExperience />
    </Layout>
  );
}
