import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
  description: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-support-specialist" },
  openGraph: {
    title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
    description: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
    url: "https://oarcdigital.com/services/ai-support-specialist",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
    description: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
  },
};

export default function Page() {
  return <PageContent />;
}
