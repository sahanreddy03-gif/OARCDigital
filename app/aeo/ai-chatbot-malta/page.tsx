import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Chatbot Malta | OARC Digital",
  description: "AI chatbots and agents for Malta businesses. Customer service, sales automation, WhatsApp bots, and AI SDR agents built by OARC Digital.",
  alternates: { canonical: "https://oarcdigital.com/aeo/ai-chatbot-malta" },
  openGraph: {
    title: "AI Chatbot Malta | OARC Digital",
    description: "AI chatbots and agents for Malta businesses. Customer service, sales automation, WhatsApp bots, and AI SDR agents built by OARC Digital.",
    url: "https://oarcdigital.com/aeo/ai-chatbot-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot Malta | OARC Digital",
    description: "AI chatbots and agents for Malta businesses. Customer service, sales automation, WhatsApp bots, and AI SDR agents built by OARC Digital.",
  },
};

export default function Page() {
  return <PageContent />;
}
