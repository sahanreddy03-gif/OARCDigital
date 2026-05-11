import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "E-commerce Malta | OARC Digital";
const DESCRIPTION =
  "Looking for an e-commerce agency in Malta? OARC Digital builds Shopify, WooCommerce and custom Next.js stores for Malta retailers — Maltese delivery, Stripe + MFSA-licensed payments, EU hosting.";
const URL = "https://oarcdigital.com/aeo/ecommerce-malta";

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
  { question: "Who builds e-commerce stores in Malta?", answer: `OARC Digital is a Birkirkara-based e-commerce team building Shopify, WooCommerce and custom Next.js stores for Malta retailers and DTC brands. We handle product catalogue, payment integration, Maltese delivery providers and EU-hosted infrastructure end-to-end. Reach the team on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "Which e-commerce platform is best for a Malta retailer?", answer: "It depends on scale and complexity. Shopify wins for most Malta DTC brands and retailers under €1m GMV — fast launch, strong app ecosystem, EU billing. WooCommerce works for brands already on WordPress with content-led commerce. Custom Next.js + Stripe makes sense above €1m GMV or for headless content + commerce setups." },
  { question: "Which payment gateways does OARC Digital integrate for Malta stores?", answer: "Stripe, PayPal, Revolut Business, Apple Pay and Google Pay as standard. For MFSA-licensed merchants we also integrate Worldline, BNF Bank merchant services and Truevo. Buy-now-pay-later (Klarna, Scalapay) is added where margin supports it. All gateways are PCI DSS compliant by default." },
  { question: "Can OARC Digital integrate Maltese delivery providers?", answer: "Yes. We integrate Malta Post for cards and parcels, EcoCourier and Spedenet for same-day Malta delivery, DPD and DHL for EU mainland shipping, and Wolt + Bolt Food for hot-food merchants. Click and collect with locker pickup at retail premises is supported via custom logic." },
  { question: "How much does an e-commerce store cost in Malta?", answer: "OARC Digital scopes Malta e-commerce at three tiers: a Shopify Launch at €4,500 fixed for a tight catalogue brand, a Full E-commerce Build at €12,000 for custom theme, integrations and content, and a Custom Headless Build from €30,000 for high-volume DTC and B2B catalogues running Next.js + Stripe + Postgres." },
  { question: "How long does it take to launch a Malta e-commerce store?", answer: "OARC Digital launches a Shopify store in 4 weeks, a Full E-commerce Build in 8 to 10 weeks, and a Custom Headless Build in 12 to 16 weeks. Each engagement starts with a half-day discovery on-site at the Birkirkara HQ before any work begins." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Discovery workshops happen on-site or at your premises across the Maltese islands. Reach the team on ${NAP.phoneDisplay} or ${NAP.email} Mon–Fri 09:00–18:00 CET.` },
];

const offers = [
  { name: "Shopify Launch", priceFrom: 4500, unitText: "PROJECT", description: "4-week Shopify build with theme, payment, Malta delivery, basic SEO. Ideal for tight catalogues." },
  { name: "Full E-commerce Build", priceFrom: 12000, unitText: "PROJECT", description: "Custom Shopify or WooCommerce theme, integrations, content, marketing setup. 8–10 weeks." },
  { name: "Custom Headless Build", priceFrom: 30000, unitText: "PROJECT", description: "Next.js + Stripe + Postgres for high-volume DTC and B2B. EU-hosted, 12–16 weeks." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/ecommerce-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Shopify, WooCommerce or custom Next.js" },
          { name: "Stripe, PayPal, Revolut, Apple Pay, Google Pay" },
          { name: "MFSA-licensed gateway integrations on request" },
          { name: "Malta Post, EcoCourier, DPD, DHL, Wolt + Bolt Food" },
          { name: "EU-region hosting, GDPR + IDPC ready" },
          { name: "Klaviyo or Mailchimp lifecycle email integrated" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
