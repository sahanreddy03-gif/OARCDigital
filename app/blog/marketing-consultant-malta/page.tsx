import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const TITLE =
  "Marketing Consultant Malta: Cost, What They Do & When an Agency Wins (2027)";
const DESCRIPTION =
  "What a marketing consultant in Malta actually does, what advisory and operator retainers cost, the 7-question test that decides consultant vs agency — and a copy-paste RFP. Published by an operator that runs the work.";

export const metadata: Metadata = {
  title: `${TITLE} | OARC Digital`,
  description: DESCRIPTION,
  alternates: { canonical: "https://oarcdigital.com/blog/marketing-consultant-malta" },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: "https://oarcdigital.com/blog/marketing-consultant-malta",
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
    question: "What does a marketing consultant in Malta actually do?",
    answer:
      "A marketing consultant sells judgement, not production. In Malta they typically audit what you already have (Google Business Profile, website, ads, content), decide what to stop and what to start, write the plan, then meet you monthly to keep it on track. They usually do not produce the work — no video edits, no ad builds, no daily posting. If the plan is only as good as the person executing it, and nobody is executing it, you have bought a document.",
  },
  {
    question: "How much does a marketing consultant in Malta cost?",
    answer:
      "Malta pricing moves with the buying model, not the title. Advisory is usually bought by the day (a one-off audit or a strategy day) or as a monthly advisory retainer for a set number of hours. Execution retainers — where the same team produces and publishes the work — are priced monthly by scope. OARC Digital's published retainer range is €297 to €2,997 per month depending on scope and channels. Any quote that does not state what is produced per month, who produces it and what happens if it underperforms is not a price, it is a number.",
  },
  {
    question: "Is a consultant or an agency better for a Malta business?",
    answer:
      "It depends on one thing: who executes. If you have a capable person in-house who will actually do the work, a consultant is the cheaper, faster buy — you are renting senior judgement. If nobody internally will produce the posts, the ads, the videos and the pages, a consultant adds a plan to an empty pipeline and nothing changes. In that case an operator retainer, where the same team plans and produces, removes the hiring problem instead of describing it.",
  },
  {
    question: "How long before marketing in Malta shows results?",
    answer:
      "Split it by channel, because they do not move at the same speed. Paid media can produce measurable traffic and enquiries inside the first month if tracking is set up before launch. Google Business Profile and review work typically moves within weeks in most Maltese towns, because local competition is thin. Organic search and content take months — ranking for competitive Malta commercial terms is a quarter-scale job, not a fortnight. Treat anyone promising page-one organic results in 30 days as a warning sign.",
  },
  {
    question: "What should be in a marketing consultant's first 30 days?",
    answer:
      "Week 1: a written audit of the channels you already pay for, with the accounts and numbers named, plus the two or three things to stop. Week 2: a plan with owners and dates, not themes. Week 3: the first piece of work shipped — a page fixed, a profile completed, a campaign live — so you can see quality before you commit further. Week 4: a measurement decision, including what the next 30 days will be judged on. If week 3 produces nothing shipped, you bought meetings.",
  },
  {
    question: "What are the red flags when hiring a consultant or agency in Malta?",
    answer:
      "No named person on the account. No written scope of what is produced each month. No access to your own ad, analytics and Google Business accounts. Results reported as impressions and reach only, never enquiries or revenue. Contracts with six or twelve month lock-ins when the work is not yet proven. Case studies that mention no client, no numbers and no dates. Any guarantee that cannot be written down precisely — including review counts or ratings that do not match the live listing.",
  },
  {
    question: "Can a consultant and an agency work together?",
    answer:
      "Yes, and it is often the best structure for a mid-sized Malta company. The consultant owns strategy and holds the operator accountable; the operator produces. What kills the arrangement is ambiguity about who owns the calendar and who approves public work. Write down which of the two has final say on what is published, and how a disagreement is escalated, before you sign either.",
  },
  {
    question: "How do I check an agency or consultant before I pay them?",
    answer:
      "Four checks that take under an hour. First, their own Google Business Profile and website: if their rating, review count or claimed numbers do not match the live listing, stop. Second, search the exact service they sold you and read their position honestly. Third, ask for one client you can speak to who bought the same scope. Fourth, ask them to name the two things they would stop doing in your current marketing — a real operator will answer immediately, an order-taker will ask for a discovery call first.",
  },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/marketing-consultant-malta"
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
