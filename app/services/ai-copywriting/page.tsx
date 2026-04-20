import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Copywriting | Conversion-Focused Copy | OARC Digital",
  description: "Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-copywriting" },
  openGraph: {
    title: "AI Copywriting | Conversion-Focused Copy | OARC Digital",
    description: "Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.",
    url: "https://oarcdigital.com/services/ai-copywriting",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Copywriting | Conversion-Focused Copy | OARC Digital",
    description: "Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.",
  },
};

export default function Page() {
  return <PageContent />;
}
