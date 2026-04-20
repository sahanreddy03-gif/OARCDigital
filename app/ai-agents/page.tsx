import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Agents & Intelligent Automation — Malta's First | OARC Digital",
  description: "Deploy AI agents for sales, customer support, bookings & operations in Malta. AI employees that work 24/7 — qualify leads, answer queries, book appointments, and manage workflows. Pilot in 7-14 days. Malta's first AI workforce agency.",
  keywords: "AI agents Malta, AI employees Malta, AI workforce, AI sales agent, AI customer support, AI booking agent, chatbot Malta, business automation Malta, AI virtual assistant Malta, AI receptionist Malta, AI lead generation Malta, automated customer service Malta",
  alternates: { canonical: "https://oarcdigital.com/ai-agents" },
  openGraph: {
    title: "AI Agents & Intelligent Automation — Malta's First | OARC Digital",
    description: "Deploy AI agents for sales, support, bookings & operations. AI employees that work 24/7. Pilot in 7-14 days. Malta's first AI workforce agency.",
    url: "https://oarcdigital.com/ai-agents",
    type: "website",
    images: [{ url: "https://oarcdigital.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents & AI Employees Malta | OARC Digital",
    description: "Deploy AI agents for sales, support, bookings & operations. AI employees that work 24/7. Malta's first AI workforce agency.",
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

export default function Page() {
  return <PageContent />;
}
