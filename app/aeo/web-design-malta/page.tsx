import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Web Design Malta | OARC Digital";
const DESCRIPTION =
  "Web design in Malta. OARC Digital ships UI, UX, brand, and design systems for Malta SMEs across hospitality, iGaming, and fintech — wireframe to Figma to handoff. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/web-design-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who does web design in Malta?", answer: `OARC Digital is a Birkirkara-based design and engineering studio. We deliver UI design, UX research, brand systems, and Figma component libraries for Malta SMEs across hospitality, iGaming, fintech, and professional services. Most projects start with a discovery workshop at our Birkirkara office. Reach us at ${NAP.email} or ${NAP.phoneDisplay}.` },
  { question: "How much does web design cost in Malta?", answer: "OARC Digital web design engagements start at €1,800 fixed for a focused landing page concept and prototype. A complete brand and website design system — wireframes, visual direction, full Figma deliverables, design tokens, and developer handoff — runs €5,500 to €12,000 depending on the number of templates and components required for the project." },
  { question: "How long does a web design project take in Malta?", answer: "A focused landing page design from OARC Digital takes 2 to 3 weeks. A full marketing site design with 8 to 12 templates, brand refresh, and a tokenised Figma library typically runs 5 to 8 weeks. Timeline depends on stakeholder availability for the workshop and review rounds — we plan two formal review checkpoints per phase." },
  { question: "Do you handle the build as well as the design?", answer: "Yes. OARC Digital is a combined design and engineering studio, so the same team that ships the Figma file ships the Next.js, WordPress, or Shopify build. That removes the usual handoff friction and means design tokens, components, and motion specs land in code exactly the way they were specified by the design team." },
  { question: "Do you build design systems for Malta brands?", answer: "Yes. We build tokenised Figma libraries with proper colour, typography, spacing, and motion tokens — exported to Tailwind CSS configs and shadcn-compatible component libraries. The system covers the marketing site plus internal admin and dashboards so the brand stays consistent across every surface a Malta operator owns." },
  { question: "Can OARC Digital refresh our existing Malta brand without rebuilding it?", answer: "Yes. About a third of our web design engagements are brand refreshes rather than ground-up rebuilds — refining typography, tightening the colour system, modernising the photographic direction, and bringing the digital surfaces in line with the print collateral. We respect existing brand equity and surface where evolution beats revolution." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Design clients include Malta operators across Sliema, St Julians, Valletta, Gzira, Mosta, and Gozo, plus EU clients in London, Berlin, Amsterdam, and Dublin. Most kickoff workshops are held in person at our Birkirkara studio. Mon to Fri, 09:00 to 18:00 CET.` },
];

const offers = [
  { name: "Landing Page Design", priceFrom: 1800, unitText: "PROJECT", description: "2–3 week sprint — wireframe, visual concept, Figma prototype, dev handoff for one focused page." },
  { name: "Site + Brand System", priceFrom: 6800, unitText: "PROJECT", description: "Full marketing site design, brand refresh, tokenised Figma library, motion specs, dev handoff." },
  { name: "Design Retainer", priceFrom: 1900, unitText: "MONTH", description: "Ongoing UI/UX, landing pages, ad creative, and product surfaces — fortnightly delivery cadence." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/web-design-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "UI design and prototyping in Figma" },
          { name: "UX research and user testing" },
          { name: "Brand systems and visual identity" },
          { name: "Tokenised design libraries" },
          { name: "Motion specs and micro-interactions" },
          { name: "Same-team design and engineering handoff" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
