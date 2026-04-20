import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Marketing Agency St Julians Malta | OARC Digital",
  description: "Marketing agency serving St Julian's and Paceville businesses. Social media, content, paid advertising, and AI services for hospitality, retail, and iGaming.",
  alternates: { canonical: "https://oarcdigital.com/aeo/marketing-agency-st-julians" },
  openGraph: {
    title: "Marketing Agency St Julians Malta | OARC Digital",
    description: "Marketing agency serving St Julian's and Paceville businesses. Social media, content, paid advertising, and AI services for hospitality, retail, and iGaming.",
    url: "https://oarcdigital.com/aeo/marketing-agency-st-julians",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Agency St Julians Malta | OARC Digital",
    description: "Marketing agency serving St Julian's and Paceville businesses. Social media, content, paid advertising, and AI services for hospitality, retail, and iGaming.",
  },
};

export default function Page() {
  return <PageContent />;
}
