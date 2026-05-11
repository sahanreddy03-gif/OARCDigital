import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "Content Creation Malta | OARC Digital";
const DESCRIPTION =
  "Looking for content creation in Malta? OARC Digital produces bilingual Maltese + English photo, video, social, and editorial content for Malta hospitality, retail, and B2B brands. Birkirkara HQ.";
const URL = "https://oarcdigital.com/aeo/content-creation-malta";

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
  { question: "Who does content creation in Malta?", answer: `OARC Digital is a Birkirkara-based content studio that produces photo, video, social-first content, editorial articles, and ad creative for Malta hospitality, retail, fintech, and iGaming brands. Our team shoots on location across the islands and writes in both Maltese and English. Reach us on ${NAP.phoneDisplay} or ${NAP.email}.` },
  { question: "How much does content creation cost in Malta?", answer: "OARC Digital content retainers start at €450 per month for a single-channel social pack (12 deliverables, one half-day shoot per month). Mid-tier hospitality and retail packages run €950 per month for video plus photo plus copy. Brand-film and campaign productions are quoted by scope and typically start at €3,500." },
  { question: "Do you produce content in Maltese as well as English?", answer: "Yes. Roughly 60 percent of Malta&apos;s residents respond more strongly to Maltese-language creative for B2C categories — particularly in hospitality, retail, automotive, and home services. OARC Digital writes captions, voiceover scripts, and on-screen copy in both languages, with native Maltese review for every deliverable." },
  { question: "What kind of content does OARC Digital produce?", answer: "Instagram Reels, TikTok edits, brand films, product photography, lifestyle shoots, food and beverage stills, drone footage of Malta locations, podcast video, blog articles, email newsletters, ad creative for Meta and Google, and motion graphics. Everything is shot on location across Malta and Gozo, never stock." },
  { question: "Can OARC Digital shoot at my Malta venue?", answer: "Yes. We regularly shoot at restaurants in Sliema and Valletta, hotels along the St Julians strip, beach clubs in Mellieha, retail spaces in Birkirkara, and B2B offices across the Central Business District. Our equipment travels and we are insured for commercial production across the Maltese islands." },
  { question: "How fast can you turn around content?", answer: "Standard social packages deliver 12 finished pieces inside 14 days of the shoot day. Reels and TikTok edits ship within 5 working days. Brand films land in 4 to 6 weeks depending on scope. Urgent ad creative can ship in 48 hours from a Birkirkara studio session if briefed clearly." },
  { question: "Where is OARC Digital based?", answer: `Level 1, The Brewhouse, Mdina Road, ${NAP.addressLocality} ${NAP.postalCode}, Malta. We host pre-production meetings on site Monday to Friday from 09:00 to 18:00 CET, and the studio space is available for tabletop product shoots and podcast recordings. Phone ${NAP.phoneDisplay} or email ${NAP.email}.` },
];

const offers = [
  { name: "Social Content Pack", priceFrom: 450, unitText: "MONTH", description: "12 social deliverables per month, one half-day shoot, captions in Maltese + English, scheduling included." },
  { name: "Hospitality Studio Retainer", priceFrom: 950, unitText: "MONTH", description: "Video, photo, copy, and ad creative for restaurants, hotels, and beach clubs across Malta. Two shoot days per month." },
  { name: "Brand Film Production", priceFrom: 3500, unitText: "PROJECT", description: "Concept, script, location shoot across Malta or Gozo, edit, motion, music licensing, and delivery in all aspect ratios." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/content-creation-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        offers={offers}
        features={[
          { name: "Bilingual Maltese + English production" },
          { name: "On-location shoots across Malta + Gozo" },
          { name: "Reels, TikTok, and short-form video" },
          { name: "Hospitality + F&B specialism" },
          { name: "In-house Birkirkara studio" },
          { name: "14-day standard turnaround" },
        ]}
      />
      <PageContent faqs={faqs} offers={offers} />
    </>
  );
}
