import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
  description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-virtual-talent-hub" },
  openGraph: {
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
    url: "https://oarcdigital.com/services/ai-virtual-talent-hub",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  },
};

export default function Page() {
  return <PageContent />;
}
