import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "AI Agents for Business Malta | AI Employees | OARC Digital",
  description: "AI agents for Malta businesses — sales agents, support agents, booking agents, and operations automation. OARC Digital deploys AI that works 24/7 for your business.",
  alternates: { canonical: "https://oarcdigital.com/aeo/ai-agents-business-malta" },
  openGraph: {
    title: "AI Agents for Business Malta | AI Employees | OARC Digital",
    description: "AI agents for Malta businesses — sales agents, support agents, booking agents, and operations automation. OARC Digital deploys AI that works 24/7 for your business.",
    url: "https://oarcdigital.com/aeo/ai-agents-business-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents for Business Malta | AI Employees | OARC Digital",
    description: "AI agents for Malta businesses — sales agents, support agents, booking agents, and operations automation. OARC Digital deploys AI that works 24/7 for your business.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/aeo/ai-agents-business-malta"
        title="AI Agents for Business Malta | AI Employees | OARC Digital"
        description="AI agents for Malta businesses — sales agents, support agents, booking agents, and operations automation. OARC Digital deploys AI that works 24/7 for your business."
        datePublished="2026-01-15"
      />
      <PageContent />
    </>
  );
}
