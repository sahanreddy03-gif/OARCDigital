import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { twinLanguages } from "@/lib/i18n/twins";


// The title and URL are unchanged on purpose: Google already knows the page by them.
const TITLE = "Web Development Agency Malta | OARC Digital";
const DESCRIPTION =
  "Web development agency in Malta. We build any website, 2D, 3D or interactive, made to sell and to be found on Google and AI. Free website blueprint in 48 hours.";
const URL = "https://oarcdigital.com/aeo/web-development-agency-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL, languages: twinLanguages("/aeo/web-development-agency-malta") },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "What does a web development agency do?", answer: "A web development agency plans, designs and builds your website, and makes sure it works on every phone and computer. At OARC Digital we also write the words, shoot the photos and film, set the website up to be found on Google and AI, and connect it to forms, bookings and WhatsApp." },
  { question: "How much does a website cost in Malta?", answer: "It depends on the kind of website and how big it is. A simple website, an online shop and a 3D website are very different jobs. We do not use fixed price lists. Send us your business name on WhatsApp and we send you a price." },
  { question: "How long does it take to build a website?", answer: "Most websites go live in weeks, not months. A small website is quicker, and an online shop or a web app takes longer. You get the dates for each step before we start." },
  { question: "Which platform should I choose?", answer: "WordPress if your team publishes often. Webflow for design-led sites that change quickly. Shopify for online shops. A custom build with Next.js for speed, 3D, web apps and anything special. We recommend one after we understand your business." },
  { question: "Will I own my website?", answer: "Yes. Your domain, your website and your content are yours. You are not locked in." },
  { question: "Can I edit the website myself?", answer: "Yes. We set up a simple editing screen and train your team, so you can change words, photos and prices without calling a developer." },
  { question: "Is SEO included?", answer: "Yes. Every website we build is set up to be found: fast pages, clear headings, schema labels, a sitemap and an llms.txt file so that Google and AI tools like ChatGPT and Gemini can read it. Ongoing SEO after launch is a separate service." },
  { question: "Can you redesign my website without losing my Google rankings?", answer: "Yes. Before we move anything, we list every page of your old website and point each old link to its new page. After launch we check that Google can still find everything." },
  { question: "Do you build 3D and interactive websites?", answer: "Yes. We build websites with 3D objects you can turn, scenes that move as you scroll and interactive stories. We also make sure they still load fast on a phone." },
  { question: "Can my website take bookings and payments?", answer: "Yes. We build online shops, booking systems and card payments, and we connect them to your calendar, your stock and your customer list." },
  { question: "What is the AI customer support on the website?", answer: "It is an assistant on your website that answers visitors day and night, using your own information: your services, opening hours and common questions. When it is not sure, it hands the conversation to you." },
  { question: "Do you write the words and take the photos?", answer: "Yes. Our writers, designers and film crew are part of the same team as our developers, so you do not get an empty design to fill in." },
  { question: "Do you handle hosting and support after launch?", answer: "Yes. We set up hosting in the EU, the SSL padlock and daily backups, and we offer a care plan for updates and changes after launch." },
  { question: "What is in the free website blueprint?", answer: "A plan for your website: what it should say, how it should look, which kind of website fits your business and what it needs to bring enquiries. If you already have a website, we also check its speed and how Google and AI see it. You get it on WhatsApp within 48 hours." },
  { question: "Where is OARC Digital based?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. You can meet the team in person. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/web-development-agency-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
        features={[
          { name: "Custom website design and development" },
          { name: "3D and interactive websites" },
          { name: "Online shops, booking websites and web apps" },
          { name: "WordPress, Webflow, Shopify and Next.js" },
          { name: "SEO, AEO and GEO set-up" },
          { name: "AI lead forms, booking and AI customer support" },
          { name: "Migrations that keep your rankings" },
          { name: "EU hosting, backups and a care plan" },
        ]}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
