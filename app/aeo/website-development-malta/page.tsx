import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

const TITLE = "Website Development Malta | OARC Digital";
const DESCRIPTION =
  "Website development in Malta. OARC Digital builds Next.js, WordPress, and Shopify business websites for Malta SMEs — fast, SEO-clean, conversion-led, EU-hosted. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/website-development-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "Who builds business websites in Malta?", answer: "OARC Digital is a Birkirkara-based studio that builds business websites for Malta SMEs across hospitality, retail, professional services, iGaming, and fintech. Every site ships SEO-clean, mobile-first, EU-hosted on Vercel eu-west-1, and integrated with the bookings, CRM, or commerce stack the operator already runs. Call +356 7971 1799 or email hello@oarcdigital.com to scope a build." },
  { question: "How much does website development cost in Malta?", answer: "OARC Digital website projects start at €2,400 fixed for a 5–7 page Next.js or WordPress brochure site. A small business site with bookings or commerce integration runs €4,500 to €8,500. A larger Shopify or custom Next.js build with multilingual content, blog, and CRM hand-off lands between €9,000 and €18,000 depending on integrations and content production scope." },
  { question: "How long does a website project take in Malta?", answer: "A focused brochure site from OARC Digital ships in 3 to 5 weeks. Sites with bookings, e-commerce, or multilingual content take 6 to 9 weeks. Timeline depends mostly on how quickly the client supplies copy approvals and brand assets — we run weekly Friday demos so the founder is never surprised by what lands the following Monday." },
  { question: "What technology does OARC Digital use for website builds?", answer: "Most OARC Digital builds run on Next.js with TypeScript and a headless CMS (Sanity, Payload, or Contentful), hosted on Vercel eu-west-1. WordPress is used where the client already maintains a WordPress estate. Shopify is the default for product-led commerce. Every site includes Plausible or GA4, schema.org markup, and an EU-region image CDN by default." },
  { question: "Do you handle SEO for Malta websites?", answer: "Yes. Every OARC Digital build leaves with proper title and meta tags, schema.org Organisation and LocalBusiness markup, sitemap.xml, robots.txt, FAQ schema where relevant, and Core Web Vitals scores in the green on real Malta 4G connections. We also offer ongoing SEO retainers from €950 per month if the client wants us to keep iterating after launch." },
  { question: "Can you integrate the website with our booking and CRM tools?", answer: "Yes. OARC Digital regularly integrates Malta business websites with OpenTable, SevenRooms, Cloudbeds, Mews, Stripe, HubSpot, Pipedrive, Mailchimp, Klaviyo, WhatsApp Business API, and most Malta-popular POS terminals. Where APIs are missing we build adapter layers using webhooks, scheduled syncs, or email parsing so the website does not stand alone." },
  { question: "Where is OARC Digital based?", answer: "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. Most kickoff workshops happen in person at our Birkirkara office, with on-site visits to client premises across Sliema, St Julians, Valletta, Mosta, Gzira, and Gozo when the project warrants it. Reach us at hello@oarcdigital.com or +356 7971 1799." },
];

const offers = [
  { name: "Brochure Site", priceFrom: 2400, unitText: "PROJECT", description: "5–7 page Next.js or WordPress site with on-page SEO, contact form, schema, and EU-region hosting." },
  { name: "Business Site + Integrations", priceFrom: 6500, unitText: "PROJECT", description: "Bookings, CRM, payments, blog, and multilingual content for hospitality, retail, and services." },
  { name: "Care + Iteration", priceFrom: 450, unitText: "MONTH", description: "Hosting, security, content updates, conversion experiments, and quarterly performance reviews." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/website-development-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Next.js, WordPress, and Shopify builds" },
          { name: "EU-region hosting on Vercel eu-west-1" },
          { name: "SEO-clean from launch (schema, sitemap, OG)" },
          { name: "Bookings, CRM, and payments integrations" },
          { name: "Mobile-first for Malta 4G" },
          { name: "Care plan for iteration after launch" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
