import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Marketing Agency Sliema | OARC Digital";
const DESCRIPTION =
  "Marketing agency serving Sliema retail, F&B, and lifestyle brands. OARC Digital runs Instagram-led social, paid, and SEO for the Tigne and Strand corridor. 8 minutes from Sliema in Birkirkara.";
const URL = "https://oarcdigital.com/aeo/marketing-agency-sliema";

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
  { question: "Is there a marketing agency that serves Sliema businesses?", answer: `Yes. OARC Digital runs Instagram-led social, paid, SEO, and creative production for Sliema retail, F&B, beauty, fitness, and lifestyle brands across the Tigne Point, The Strand, Bisazza Street, and Tower Road corridors. Our HQ is at The Brewhouse, Birkirkara — an 8-minute drive from Tigne Point. Reach us on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "What marketing channels work best for Sliema businesses?", answer: "Sliema skews younger, more affluent, more visual, and more international than the Maltese average — so Instagram and TikTok consistently outperform Facebook for almost every category we run, with Google and Apple Maps driving discovery for retail and F&B. Influencer-led content and high-production reels move the needle on Tigne Point and Tower Road, and English-only creative is usually correct for the local audience." },
  { question: "Does OARC Digital have clients in Sliema?", answer: "Yes — we currently manage marketing for multiple Sliema-based brands, including F&B operators on Triq Manwel Dimech, retail concepts inside The Point and along Bisazza Street, and lifestyle brands operating from the Strand. We have direct campaign data from the Sliema consumer market rather than borrowed insight from other catchments." },
  { question: "How much does marketing cost for a Sliema business?", answer: "OARC Digital is a whole marketing team for Sliema businesses for €500 a month: strategy, filming, social media, Meta and Google ads, your website and enquiry follow-up. No setup fee and no contract, so you can cancel any month. Your ad budget is paid to Meta and Google directly. Groups and brands already spending €2,000 or more a month get more for the same budget." },
  { question: "What types of Sliema businesses does OARC Digital work with?", answer: "Restaurants, cafes, cocktail bars, gelaterias, boutique retail, beauty and aesthetic clinics, gyms and Pilates studios, fashion brands, salons, and short-stay or boutique-hotel operators. Sliema&apos;s consumer mix is what OARC Digital is built for — visually-led, internationally exposed, and brand-conscious." },
  { question: "How quickly can a Sliema business expect to see marketing results?", answer: "Paid Meta and TikTok campaigns deliver bookings or in-store traffic for Sliema F&B and retail clients within 14 days of launch. Organic Instagram compounds over 60 to 90 days as content density and reels velocity build. Local SEO targeting Sliema postcodes typically pays back in 4 to 6 months when reviews and Google Business Profile work are run alongside the on-page program." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta — an 8-minute drive from Tigne Point via the Regional Road. Sliema clients meet the team in Birkirkara, or we shoot, plan, and run weekly working sessions on-site at the venue during the first 60 days of onboarding.` },
];

const offers = [
  { name: "Your whole marketing team", priceFrom: 500, unitText: "MONTH", description: "Strategy, filming, social media, Meta and Google ads, your website and enquiry follow-up. Cancel any month. Ad spend is paid to Meta and Google, not to OARC." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-agency-sliema"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Instagram + TikTok-led creative for Sliema F&B and retail" },
          { name: "Tigne Point and Strand corridor expertise" },
          { name: "Local SEO for Sliema search terms and Apple Maps" },
          { name: "Boutique-hotel and short-stay direct-booking playbooks" },
          { name: "8-minute drive from Birkirkara HQ" },
          { name: "Month-to-month, no lock-in contracts" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
