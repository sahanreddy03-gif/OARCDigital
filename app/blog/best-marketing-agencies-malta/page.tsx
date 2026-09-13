import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const TITLE =
  "Best Marketing Agencies in Malta (2026): The Shortlist, the Method & the 9 Checks";
const DESCRIPTION =
  "A shortlist of marketing agencies in Malta with the method, the measured evidence and nine checks that remove an agency before you call. Published by OARC Digital, who are on the list and say so.";

export const metadata: Metadata = {
  title: `${TITLE} | OARC Digital`,
  description: DESCRIPTION,
  alternates: { canonical: "https://oarcdigital.com/blog/best-marketing-agencies-malta" },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: "https://oarcdigital.com/blog/best-marketing-agencies-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQS = [
  {
    question: "What is the best marketing agency in Malta?",
    answer:
      "There is no single best agency in Malta — there is the best agency for your scope. What can be measured is visibility: on 7 September 2026 we ran seven Malta commercial queries through Google and recorded which agency domains actually appeared. 9H Digital appeared on six of the seven; IB Results, Neural AI and Digital Consulting Pros appeared on four each; Switch, 4Sight Group and Ballotra on three. Use that as a starting shortlist, then use the nine checks below to remove the ones that cannot answer in writing.",
  },
  {
    question: "How do I choose a marketing agency in Malta?",
    answer:
      "Nine checks, in this order: a named owner on the account; a written scope of what is produced each month; access to your own ads, analytics and Google Business accounts; reporting on enquiries rather than impressions; a minimum term you can live with; a published or written price; verifiable claims; shipped work inside 30 days; and a named client of the same scope you can speak to. An agency that fails two of these is a risk, not a partner.",
  },
  {
    question: "How much do marketing agencies in Malta charge?",
    answer:
      "It depends on the structure more than the size of the agency. Single-channel retainers are the cheapest entry, multi-channel operator retainers sit in the middle, and full-service agreements with media management sit at the top. OARC Digital publishes its own range: €297 to €2,997 per month depending on scope. Most Malta agencies publish nothing and ask you to request a quote, which is why the published-scope check in this guide exists.",
  },
  {
    question: "Should I use a Malta agency or a foreign one?",
    answer:
      "For local demand — Google Business Profile, Maps, local search, walk-in customers — a Malta agency has a structural advantage because it can enter the same rooms, speak to the same market and understand Maltese search behaviour in both English and Maltese. For pure performance media at scale and specialist technical work, an international team can compete on price. The practical answer for most Malta SMEs is local for demand generation, international for narrow specialisms.",
  },
  {
    question: "What are the red flags when hiring an agency in Malta?",
    answer:
      "No named person on the account. No written scope. Ad and analytics accounts held in the agency's name. Reporting in impressions and reach only. A twelve-month lock-in offered as a discount. Ratings or client counts that do not match their live Google listing. And case studies with no client name, no numbers and no dates. Any one of these is worth a second conversation; three of them is a no.",
  },
  {
    question: "Do agencies in Malta guarantee results?",
    answer:
      "Some publish guarantees and most do not. A guarantee is only worth what its wording is worth: it must name a measurable number, a date it is measured by, and the exact remedy if it is missed. 'We grow your business' is not a guarantee. If an agency offers one, ask for the sentence in writing and read the remedy clause before you read the promise.",
  },
  {
    question: "How long before an agency shows results in Malta?",
    answer:
      "Paid media and Google Business Profile work can show movement within weeks when tracking is set up before launch. Local rankings in most Maltese towns move faster than in large European cities because the competition is thin. Organic search on competitive commercial terms is a quarter-scale job. Anyone promising page-one organic results in 30 days is telling you something about themselves.",
  },
  {
    question: "Why is OARC Digital on this list?",
    answer:
      "Because we publish the guide, and hiding ourselves would make the list less useful to you, not more. We are listed first with the same evidence everyone else gets — our own measured positions on the same queries — and a disclosure that we wrote this. If a guide like this drops its own author out of the ranking, assume the ranking is advertising.",
  },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/best-marketing-agencies-malta"
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-09-13"
        dateModified="2026-09-13"
        faqs={FAQS}
      />
      <PageContent />
    </>
  );
}
