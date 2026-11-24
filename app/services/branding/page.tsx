import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

// The one main branding page (Nov 2026). It carries the branding design that used to
// sit on /blog/branding-agency-malta; that address and /aeo/branding-agency-malta now
// redirect here (next.config.mjs). Title and description stay the ones this URL already
// ranks with. No price offers in the schema: branding is priced per business.
const SLUG = "branding";
const SCHEMA = SERVICE_SCHEMAS[SLUG];
const URL = `https://oarcdigital.com/services/${SLUG}`;

export const metadata: Metadata = {
  title: SCHEMA.title,
  description: SCHEMA.description,
  alternates: getHreflangAlternates(`/services/${SLUG}`),
  openGraph: {
    images: ogImageEntry({ title: SCHEMA.title, subtitle: SCHEMA.description }),
    title: SCHEMA.title,
    description: SCHEMA.description,
    url: URL,
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: SCHEMA.title, subtitle: SCHEMA.description })],
    card: "summary_large_image",
    title: SCHEMA.title,
    description: SCHEMA.description,
  },
};

const faqs = [
  { question: "What does a branding agency do?", answer: "A branding agency decides how your business looks, sounds and feels, and why people should pick you. At OARC Digital that covers research, brand strategy, your name and story, your logo and full look, your guidelines, and then the launch. We also market and sell the brand after it is built." },
  { question: "What is the difference between a logo and a brand?", answer: "A logo is your badge. A brand identity is your whole look and sound: colours, letters, photos and words. A brand is the feeling people get when they hear your name. You can buy a logo in a day. A brand is built on purpose, over time." },
  { question: "How much does branding cost in Malta?", answer: "It depends on your stage and how much you need. A new name and identity for a small business is a very different job from a full rebrand of a group. We do not use fixed price lists. Send us your business name on WhatsApp and we send you a price." },
  { question: "How long does branding take?", answer: "A new identity for a small business can be done in a few weeks. A full rebrand with a new name, website and launch takes longer. We give you the dates for each step before we start." },
  { question: "Do I need a branding agency?", answer: "You need one if people confuse you with your rivals, if you compete only on price, if you are launching something new, or if your look no longer fits the business you have become. If you only need a quick logo for a small side project, you may not need an agency yet." },
  { question: "I only have an idea. Can you help?", answer: "Yes. We start before the business exists. Send us your idea and we tell you the honest truth: keep it, fix it or drop it. Then we help you name it, shape the offer, set the price and plan the first 30 days." },
  { question: "Can you name my business?", answer: "Yes. Naming is part of our work. We look for a name people can remember, say and spell, and we check that the website address and social media names are free." },
  { question: "Rebrand or refresh: which do I need?", answer: "A refresh keeps your name and what people know, and tidies the look. A rebrand changes more: the name, the story or the whole identity. We check what still works for you first, so you do not throw away something valuable." },
  { question: "What is colour psychology in branding?", answer: "Colours hint at feelings. Studies show the same brand is read differently in red than in blue. There is no magic colour that sells. What matters is that your colours fit what you sell and help people tell you apart." },
  { question: "What is neuro-branding?", answer: "Neuro-branding means designing a brand using tested psychology: how people notice things, remember them and feel about them. For example, people judge a face in a tenth of a second, and they like what they see often. There is no buy button in the brain, and we do not sell tricks." },
  { question: "Do I own my brand files?", answer: "Yes. Everything we make for you stays yours: your name, your logo files, your guidelines and your content." },
  { question: "Do you build the website and run the marketing too?", answer: "Yes. OARC Digital has 8 departments under one roof, so the team that builds your brand also builds your website, films your content, runs your ads and helps you sell." },
  { question: "Will branding bring me more sales?", answer: "A clear brand makes every part of selling easier: people understand you faster, remember you longer and trust you sooner. Branding alone does not close sales, which is why we also plan the launch, the marketing and the offer." },
  { question: "What is in the free brand blueprint?", answer: "The honest truth about your idea or brand, what makes you different from your rivals, where your first 10 customers are, and a 30-day plan. For a new idea you also get a name and a one-line offer. You get it on WhatsApp within 48 hours." },
  { question: "Where is OARC Digital based?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. You can meet the team in person. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path={`/services/${SLUG}`} />
      <RouteSchema
        type="service"
        path={`/services/${SLUG}`}
        title={SCHEMA.title}
        description={SCHEMA.description}
        features={SCHEMA.features}
        faqs={faqs}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
