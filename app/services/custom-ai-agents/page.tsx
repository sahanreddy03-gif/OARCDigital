import type { Metadata } from "next";
import OarcEditorialServicePage from "@/components/services/OarcEditorialServicePage";
import { editorialServices } from "../editorial-services";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const service = editorialServices["custom-ai-agents"];
export const metadata: Metadata = { title: "Custom AI Agents Malta | Finish the Work | OARC", description: "Custom AI agents built around your workflows—tools, guardrails, and human handoff—so unique jobs actually finish.", alternates: getHreflangAlternates("/services/custom-ai-agents"), openGraph: { title: service.title, description: service.intro, url: "https://oarcdigital.com/services/custom-ai-agents", images: [{ url: "https://oarcdigital.com/images/services/custom-ai-agents-hero.jpg", alt: service.imageAlt }] }, twitter: { card: "summary_large_image", title: service.title, description: service.intro, images: [service.image] } };
export default function Page() { return <><SpeakableJsonLd path="/services/custom-ai-agents" /><RouteSchema type="service" path="/services/custom-ai-agents" title={service.title} description={service.intro} features={service.capabilities.map(x => ({ name: x.title, description: x.copy }))} faqs={service.faqs.map(x => ({ question: x.q, answer: x.a }))} includeLocalBusiness={false} audience={["Sales teams", "Operations teams", "Finance teams", "Recruiting teams"]} /><OarcEditorialServicePage service={service} /></>; }