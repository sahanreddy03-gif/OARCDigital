import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import VoiceAIExperience from "./VoiceAIExperience";

const title = "AI Phone Receptionist Malta | Voice AI Worker | OARC";
const description = "Voice AI Worker for Malta businesses: answers calls, acts in your systems, books work, and hands off decisions that need a person. Birkirkara.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://oarcdigital.com/voice-ai-worker" },
  openGraph: { title, description, url: "https://oarcdigital.com/voice-ai-worker", type: "website" },
  twitter: { card: "summary_large_image", title: "Voice AI Worker", description },
};

export default function VoiceAIWorkerPage() {
  return <Layout navTheme="dark" showMobileNav><RouteSchema type="service" path="/voice-ai-worker" title="Voice AI Worker" description={description} serviceType="Managed Voice AI Worker" audience={["Hospitality","Sales","Healthcare","Finance","Real estate","Logistics","Home services"]}/><VoiceAIExperience /></Layout>;
}
