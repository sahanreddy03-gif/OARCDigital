import type { Metadata } from "next";
import PageContent from "./PageContent";

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
  return <PageContent />;
}
