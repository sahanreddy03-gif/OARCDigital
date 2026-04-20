import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
  description: "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
  alternates: { canonical: "https://oarcdigital.com/services/illustration" },
  openGraph: {
    title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
    description: "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
    url: "https://oarcdigital.com/services/illustration",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
    description: "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
  },
};

export default function Page() {
  return <PageContent />;
}
