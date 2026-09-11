import type { Metadata } from "next";
import Link from "next/link";
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
      "When scoped, Voice AI Worker can book into your calendar or booking tools and hand off decisions that need a person—with full context.",
  },
  {
    question: "Is Voice AI Worker only for restaurants?",
    answer:
      "No. Hospitality is a strong fit, and the same worker covers clinics, sales teams, home services, logistics, and other Malta operators who lose calls. See industry pages under /voice-ai-worker.",
  },
  {
    question: "How does Voice AI Worker relate to OARC AI agents and creative?",
    answer:
      "Voice covers the phone. Chat and CRM agents live on /ai-agents. Creative on /creative creates demand those agents catch. One Birkirkara team owns the stack.",
  },
  {
    question: "Who builds Voice AI Worker?",
    answer:
      "OARC Digital in Birkirkara—the same marketing and AI studio behind creative, AI agents, H360, and automation. Phone +356 7971 1799.",
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
      <>
        <section className="px-6 py-8 bg-black text-white" data-testid="voice-entity-block">
          <p className="max-w-3xl mx-auto text-center text-base text-white/80" data-speakable>
            OARC Digital is a Birkirkara AI phone receptionist partner for Malta businesses that miss calls—Voice AI Worker answers, acts in your systems, and hands off decisions that need a person.
          </p>
          <p className="mt-4 text-center text-sm text-white/50" data-testid="voice-money-links">
            Explore: <Link href="/" className="underline-offset-2 hover:underline">Home</Link>
            {" · "}<Link href="/ai-agents" className="underline-offset-2 hover:underline">AI agents</Link>
            {" · "}<Link href="/creative" className="underline-offset-2 hover:underline">Creative</Link>
            {" · "}<Link href="/solutions" className="underline-offset-2 hover:underline">Solutions</Link>
            {" · "}<Link href="/services/automation" className="underline-offset-2 hover:underline">Automation</Link>
            {" · "}<Link href="/aeo/ai-agents-business-malta" className="underline-offset-2 hover:underline">AI agents Malta</Link>
            {" · "}<Link href="/malta" className="underline-offset-2 hover:underline">Malta hubs</Link>
            {" · "}<Link href="/h360" className="underline-offset-2 hover:underline">H360</Link>
          </p>
        </section>
        <VoiceAIExperience />
      </>
    </Layout>
  );
}
