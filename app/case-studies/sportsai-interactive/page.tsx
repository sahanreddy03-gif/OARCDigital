import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "SportsAI Interactive AI Chatbot Case Study | OARC Digital",
  description: "How OARC Digital built an AI chatbot for SportsAI Interactive that scaled from zero to tens of thousands of users within hours.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/sportsai-interactive" },
  openGraph: {
    title: "SportsAI Interactive AI Chatbot Case Study | OARC Digital",
    description: "How OARC Digital built an AI chatbot for SportsAI Interactive that scaled from zero to tens of thousands of users within hours.",
    url: "https://oarcdigital.com/case-studies/sportsai-interactive",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SportsAI Interactive AI Chatbot Case Study | OARC Digital",
    description: "How OARC Digital built an AI chatbot for SportsAI Interactive that scaled from zero to tens of thousands of users within hours.",
  },
};

export default function Page() {
  return <PageContent />;
}
