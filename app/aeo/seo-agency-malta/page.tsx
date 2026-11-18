import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { twinLanguages } from "@/lib/i18n/twins";


// The title is unchanged on purpose: the page ranks with it.
const TITLE = "SEO Agency Malta | Own Searches That Bring Customers | OARC";
const DESCRIPTION =
  "SEO agency in Malta. We make your business rank on Google, Google Maps and AI answers like ChatGPT and Gemini. Free ranking blueprint in 48 hours.";
const URL = "https://oarcdigital.com/aeo/seo-agency-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL, languages: twinLanguages("/aeo/seo-agency-malta") },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "What does an SEO agency do?", answer: "An SEO agency gets your business found when people search. At OARC Digital that means four jobs: we fix your website, we find the words your customers type, we write the pages and articles that answer them, and we get trusted sites and AI tools to mention you. You get a written report every month." },
  { question: "How much does SEO cost in Malta?", answer: "It depends on your industry, how strong your rivals are and how many places you want to be found. We do not use fixed price lists, because a small shop and a hotel group need very different work. Send us your business name on WhatsApp and we send you a price." },
  { question: "How long does SEO take to work?", answer: "Small fixes can show in a few weeks. Strong, steady rankings usually take a few months, because Google needs time to trust a website. Anyone who promises results by next week is guessing." },
  { question: "Can you guarantee number 1 on Google?", answer: "No. Nobody can, and you should be careful with anyone who says they can. Google decides the order, not agencies. What we promise is the full work, done properly, and a clear report that shows what moved." },
  { question: "What is the difference between SEO, AEO and GEO?", answer: "SEO gets your website to the top of Google and Bing. AEO, answer engine optimisation, gets your words picked as the one answer by Google's AI and by voice assistants. GEO, generative engine optimisation, gets AI chats like ChatGPT, Gemini and Perplexity to recommend your business by name. They share the same base, so we run them as one plan." },
  { question: "How do I get ChatGPT to recommend my business?", answer: "AI tools recommend businesses they can find, understand and trust. So your website needs clear facts and clear answers, your name, address and phone must match everywhere, and trusted sites and reviews need to mention you. We set up all three, then we check what the AI tools say about you each month." },
  { question: "How do I know if AI mentions my business?", answer: "Ask us for the free ranking blueprint. We ask ChatGPT, Gemini and Perplexity the questions your customers ask, and we show you who they recommend today and where you stand." },
  { question: "Do you do SEO in Maltese as well as English?", answer: "Yes. We research searches in both English and Maltese, because people in Malta use both. Many agencies only look at English." },
  { question: "Do you work with my industry?", answer: "Yes. We build a separate plan for each industry: restaurants, hotels, clinics, real estate, law firms, shops, iGaming, fintech, construction, schools, tourism and more. If you have customers who search, we can help them find you." },
  { question: "Do I need a new website for SEO?", answer: "Not always. We check your website first. Often it only needs fixing. If it is too slow or too old to rank, our web team can rebuild it." },
  { question: "SEO consultant or SEO agency: which is better?", answer: "A consultant is one person who gives advice. An agency does the work too. At OARC Digital your plan is carried out by writers, web developers, a film crew and AI engineers in one team, so nothing waits on someone else." },
  { question: "What is in the free ranking blueprint?", answer: "Where you rank today on Google and Google Maps, what ChatGPT, Gemini and Perplexity say about you, the searches your customers type, what your closest rivals do better, and your first 5 fixes in order. You get it on WhatsApp within 48 hours." },
  { question: "Where is OARC Digital based?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. You can meet the team in person. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/seo-agency-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        features={[
          { name: "Technical SEO and Core Web Vitals" },
          { name: "Keyword research in English and Maltese" },
          { name: "AEO and GEO for ChatGPT, Gemini, Perplexity and Claude" },
          { name: "Local SEO and Google Business Profile" },
          { name: "Voice search answers" },
          { name: "Links from press and trusted directories" },
          { name: "Monthly written report" },
        ]}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
