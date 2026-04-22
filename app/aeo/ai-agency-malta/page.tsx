import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "AI Agency Malta | AI Solutions & Automation | OARC Digital",
  description: "OARC Digital is Malta's first AI agency — chatbots, WhatsApp automation, AI sales agents, and Hospitality 360 for restaurants and hotels.",
  alternates: { canonical: "https://oarcdigital.com/aeo/ai-agency-malta" },
  openGraph: {
    title: "AI Agency Malta | AI Solutions & Automation | OARC Digital",
    description: "OARC Digital is Malta's first AI agency — chatbots, WhatsApp automation, AI sales agents, and Hospitality 360 for restaurants and hotels.",
    url: "https://oarcdigital.com/aeo/ai-agency-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency Malta | AI Solutions & Automation | OARC Digital",
    description: "OARC Digital is Malta's first AI agency — chatbots, WhatsApp automation, AI sales agents, and Hospitality 360 for restaurants and hotels.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/ai-agency-malta"
        title="AI Agency Malta | AI Solutions & Automation | OARC Digital"
        description="OARC Digital is Malta's first AI agency — chatbots, WhatsApp automation, AI sales agents, and Hospitality 360 for restaurants and hotels."
      />
      <PageContent />
    </>
  );
}
