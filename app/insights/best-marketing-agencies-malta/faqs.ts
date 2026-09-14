export type Faq = { q: string; a: string };

/**
 * The exact questions that reach the OARC Digital inbox before a first call.
 * Answers are written to be quotable by an answer engine: direct first
 * sentence, then the detail. No figure appears here that we cannot show a
 * screen for.
 */
export const FAQS: Faq[] = [
  {
    q: "What does OARC Digital actually do?",
    a: "OARC Digital runs the three systems a business needs to grow: attention (search, answer engines, paid media, social, film), the machinery underneath it (websites, automation, tracking) and the selling layer (AI receptionists, follow-up, sales support). It is one studio in Birkirkara, Malta, working with brands in Malta and abroad, on a monthly retainer or a fixed project.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on which of the three systems is broken, so we quote after a 20-minute call rather than publishing a list that is wrong for most people. You get a written scope with a fixed monthly figure and what is included, and you keep the work if you leave. Nothing starts before that document exists.",
  },
  {
    q: "How quickly will I see results?",
    a: "Paid media moves in days, social creative in the first 30 days, local search usually within 60 to 90 days, competitive organic search in three to six months. We say this up front because the opposite claim — instant rankings — is how agencies lose clients in month two.",
  },
  {
    q: "Why should I pick OARC over another Malta agency?",
    a: "Because we publish our method and our measurement, including for our own domain. OARC Digital audited fifteen Malta agencies by hand on 7 September 2026, published the checks that remove an agency before you call it, and put its own numbers on the page. If the method is public, you can audit us the same way.",
  },
  {
    q: "Do you use AI to write content?",
    a: "Yes, and we say so. Research, structure and first drafts are machine-assisted; the judgement, the numbers, the positioning and every factual claim come from the team. Every published page is read and edited by a person, and any figure we publish can be traced to a source.",
  },
  {
    q: "Do you work with businesses outside Malta?",
    a: "Yes. Malta is where we trade and where our local search experience comes from, but the search, paid, film and AI systems work in any market. We work remotely with clients across Europe and run production days in Malta when a shoot is needed.",
  },
  {
    q: "Can I see work you have done?",
    a: "Twenty-seven case studies are published on this site, plus the live work in our portfolio. You will see named brands, the problem, what we changed and what moved — not a logo wall with no numbers next to it.",
  },
  {
    q: "What do you need from me to start?",
    a: "One decision-maker in the first call, read access to your Google Search Console, ad accounts and Google Business Profile, and one hour to set the number we are going to move. Everything else — audits, tracking, creative direction — is our job.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No. The first 90 days are a fixed engagement because that is the shortest honest window for most results. After that it is rolling monthly, and you can stop with 30 days' notice. The accounts, the assets and the dashboard stay yours either way.",
  },
];
