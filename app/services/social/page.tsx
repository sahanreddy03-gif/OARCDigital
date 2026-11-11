import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Social Media Strategy Malta | Audit + Plan | OARC",
  description:
    "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind.",
  alternates: getHreflangAlternates("/services/social"),
  openGraph: {
    images: ogImageEntry({ title: "Social Media Strategy Malta | Audit + Plan | OARC", subtitle: "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind." }),
    title: "Social Media Strategy Malta | Audit + Plan | OARC",
    description:
      "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind.",
    url: "https://oarcdigital.com/services/social",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Social Media Strategy Malta | Audit + Plan | OARC", subtitle: "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind." })],
    card: "summary_large_image",
    title: "Social Media Strategy Malta | Audit + Plan | OARC",
    description:
      "Social strategy and audits for Malta brands—clarify platforms, offers, and creative system before you waste another month posting blind.",
  },
};

export default function Page() {
  const schema = SERVICE_SCHEMA_EXTRAS["social"];
  return (
    <>
      <SpeakableJsonLd path="/services/social" />
      <RouteSchema
        type="service"
        path="/services/social"
        title={schema.title}
        description={schema.description}
        features={schema.features}
        offers={schema.offers}
        faqs={schema.faqs}
        serviceType={schema.serviceType}
      />
      <PageContent />
      <p data-speakable data-testid="dept-entity-sentence" style={{background:"#0E0D0C",color:"rgba(242,239,233,.75)",margin:0,padding:"1.5rem 22px 0",fontSize:13,lineHeight:1.75,maxWidth:"58ch"}}>
        OARC Digital is a Birkirkara social strategy partner for Malta owners who need social that leads to bookings—not vanity likes—backed by creative, AI agents, and Voice AI Worker.
      </p>
      <p className="px-6 pb-10 text-sm text-muted-foreground" data-testid="dept-money-links" style={{background:"#0E0D0C",color:"rgba(242,239,233,.55)",margin:0,padding:"1.25rem 22px 2.5rem"}}>
        Explore: <a href="/" style={{color:"#F2EFE9"}}>Home</a>
        {" · "}<a href="/creative" style={{color:"#F2EFE9"}}>Creative</a>
        {" · "}<a href="/ai-agents" style={{color:"#F2EFE9"}}>AI agents</a>
        {" · "}<a href="/solutions" style={{color:"#F2EFE9"}}>Solutions</a>
        {" · "}<a href="/voice-ai-worker" style={{color:"#F2EFE9"}}>Voice AI Worker</a>
        {" · "}<a href="/h360" style={{color:"#F2EFE9"}}>H360</a>
      </p>
    </>
  );
}
