/**
 * OARC Digital lead-magnet LPs — Superside-style format, OARC doctrine + Malta truth.
 * Routes mirror /lp/* for paid + organic capture; homepage untouched.
 */

export type GuideStat = { value: string; label: string };

export type GuideSection = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  bullets?: readonly string[];
};

export type GuideContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  formTitle: string;
  formSubtitle: string;
  ctaLabel: string;
  /** Lead magnet name sent to Formspree */
  leadName: string;
  heroEyebrow?: string;
  h1: string;
  h1Serif: string;
  heroSub: string;
  gate2Question: string;
  gate2Answer: string;
  sections: readonly GuideSection[];
  stats?: readonly GuideStat[];
  thumbnailTips: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

export const LP_GUIDES: GuideContent[] = [
  {
    slug: 'ai-tips-marketers-guide',
    path: '/lp/ai-tips-marketers-guide',
    metaTitle: 'AI Tips for Malta Business Owners | OARC Digital Guide',
    metaDescription:
      'Seven practical AI tips for Malta business owners who want better results—not just faster drafts. From operators who run venues and build AI systems in Malta.',
    heroImage: '/lp/lp-ai-tips-hero.png',
    heroImageAlt: 'Abstract editorial visual for OARC Digital AI tips guide',
    formTitle: 'Get the Malta AI tips checklist',
    formSubtitle: 'Short, thumb-friendly tips you can act on this week—quality, margin, and findability.',
    ctaLabel: 'Get the guide',
    leadName: 'LP — AI Tips Malta Guide',
    heroEyebrow: 'FREE GUIDE · MALTA',
    h1: 'AI tips for owners who want',
    h1Serif: 'better, not just faster',
    heroSub:
      'Tools got cheap. Judgment got expensive. Seven operator-tested tips on quality, margin, and getting found—built for Malta, not Silicon Valley.',
    gate2Question: 'What are the best AI tips for Malta business owners?',
    gate2Answer:
      'OARC Digital\'s Malta AI tips guide covers seven practical rules: train AI on your real offers and tone, keep a human handoff path, use AI for repeat guest questions—not vanity content, wire phone and booking data back to your dashboard, check Malta-local search and review gaps monthly, never publish unverified claims, and approve what the brain learns weekly. Written by operators who run Maltese venues and build AI systems at oarcdigital.com.',
    sections: [
      {
        eyebrow: 'BETTER DECISIONS',
        title: 'Better AI choices make better revenue',
        subtitle: 'The more accessible the tools get, the more your judgment matters.',
        bullets: [
          'Train on your menu, services, and tone—not a generic prompt',
          'One brain for phone, reviews, and bookings—not five disconnected bots',
          'Human handoff when allergies, events, or complaints show up',
        ],
      },
      {
        eyebrow: 'INSIDE THE GUIDE',
        title: 'Seven tips. One page you can skim in five minutes.',
        bullets: [
          'Stop defaulting to “good enough” copy that sounds like every agency',
          'Capture calls and chats as training data you actually own',
          'Malta-local findability: Maps, reviews, and direct orders before Wolt margin',
        ],
      },
    ],
    stats: [
      { value: '7', label: 'operator tips' },
      { value: '1', label: 'Malta-focused checklist' },
      { value: '0', label: 'hype guarantees' },
    ],
    thumbnailTips: [
      'Tip 1 — Brief the brain on what you sell, not what AI thinks you sell',
      'Tip 2 — Phone + chat: one voice, one log, one owner dashboard',
      'Tip 3 — Malta hours, festa nights, bilingual guests: train for reality',
      'Tip 4 — Reviews and Maps: AI helps follow-up, not fake stars',
      'Tip 5 — Margin first: direct orders beat platform fees when guests can find you',
      'Tip 6 — Escalate complaints and VIPs to humans with full context',
      'Tip 7 — Weekly approve what it learned—never set-and-forget',
    ],
    faqs: [
      {
        question: 'Is this guide for restaurants only?',
        answer:
          'It is written for Malta hospitality and retail owners first—because OARC operates venues—but every tip applies to any local business using AI for customer-facing work.',
      },
      {
        question: 'Do I need to use OARC to apply the tips?',
        answer:
          'No. The checklist is standalone. If you want phone AI, bookings, and review systems wired together, see /ai-agents and /h360 on oarcdigital.com.',
      },
      {
        question: 'Will this teach me to prompt ChatGPT?',
        answer:
          'It goes beyond prompts: workflows, handoffs, data you keep, and Malta-local findability—what owners actually need after the demo wears off.',
      },
      {
        question: 'Is the guide free?',
        answer:
          'Yes. Enter your details and we email the PDF checklist. OARC may follow up once if you ask for help implementing—no spam sequence.',
      },
      {
        question: 'Who wrote it?',
        answer:
          'OARC Digital—operators who run Maltese hospitality venues and build AI marketing systems in Malta. Not a distant SaaS helpdesk.',
      },
    ],
  },
  {
    slug: 'ai-adoption-guide',
    path: '/lp/ai-adoption-guide',
    metaTitle: 'AI Adoption Guide for Malta Teams | OARC Digital Playbook',
    metaDescription:
      'A five-step playbook to move Malta teams from AI experiments to on-brand systems—with guardrails, workflows, and operator approval.',
    heroImage: '/lp/lp-ai-adoption-hero.png',
    heroImageAlt: 'Abstract editorial visual for OARC Digital AI adoption playbook',
    formTitle: 'Get The Malta AI Reset playbook',
    formSubtitle: 'Five steps from pilot chaos to one system your team trusts.',
    ctaLabel: 'Get the playbook',
    leadName: 'LP — AI Adoption Malta Playbook',
    h1: 'The AI reset for teams who need',
    h1Serif: 'results, not more pilots',
    heroSub:
      'Everyone is “using AI.” Few Malta teams have workflows, guardrails, and owner approval in one place. This playbook shows the reset.',
    gate2Question: 'How do Malta businesses adopt AI without chaos?',
    gate2Answer:
      'OARC Digital\'s Malta AI adoption playbook uses a five-step reset: assess readiness on real customer touchpoints, pick high-impact use cases (phone, reviews, bookings), build on-brand workflows with human handoff, train the team and set approval gates, then scale one brain across channels. Built for Maltese operators at oarcdigital.com—not a generic creative-agency deck.',
    sections: [
      {
        eyebrow: 'STUCK IN PILOT MODE?',
        title: 'Awareness is not the problem. Workflow is.',
        subtitle: 'Without guardrails, AI stays fragmented—and your brand pays for it.',
      },
      {
        eyebrow: '5-STEP RESET',
        title: 'A clear path from experiment to system',
        bullets: [
          'Assess readiness on calls, reviews, and bookings—not slide decks',
          'Pick use cases that move margin and covers, not vanity demos',
          'Build workflows + on-brand voice with owner approval gates',
          'Train staff on handoff rules and what the brain may not say',
          'Scale one operator-trained brain across phone, web, and social',
        ],
      },
    ],
    stats: [
      { value: '5', label: 'reset steps' },
      { value: '3', label: 'channels unified' },
      { value: '1', label: 'owner approval gate' },
    ],
    thumbnailTips: [
      'Step 1 — Map where guests actually contact you (phone beats guesswork)',
      'Step 2 — Score use cases by money saved or covers gained',
      'Step 3 — Document tone, allergies, events, escalation paths',
      'Step 4 — Run test calls and fix gaps before go-live',
      'Step 5 — Feed transcripts back weekly—you approve updates',
    ],
    faqs: [
      {
        question: 'Is this for marketing teams or owners?',
        answer:
          'Both—but the playbook is owner-first. If you run a Malta venue or local business, you will recognise the phone, review, and booking pain immediately.',
      },
      {
        question: 'Does OARC install the system for us?',
        answer:
          'This guide is self-serve. OARC builds and trains operator-grade systems—voice host, H360 hospitality stack, AI agents—for clients who want done-with-you implementation.',
      },
      {
        question: 'How long does adoption take?',
        answer:
          'Most Malta venues we onboard run a first workflow in one working session when bookings or phone lines are already defined. Scale happens over weeks, not a single hackathon.',
      },
      {
        question: 'What about GDPR and guest data?',
        answer:
          'The playbook includes guardrails: consent on outbound, transcript retention you control, and human handoff for sensitive requests—aligned with how we build for EU/Malta operators.',
      },
      {
        question: 'Can creative teams use this too?',
        answer:
          'Yes. Creative and marketing teams benefit from the same reset—brand voice, approval gates, and workflows—especially when AI touches client-facing copy and ads.',
      },
    ],
  },
  {
    slug: 'the-no-hype-ai-report',
    path: '/lp/the-no-hype-ai-report',
    metaTitle: 'No-Hype AI Report for Malta Business | OARC Digital',
    metaDescription:
      'What actually works when Maltese operators use AI for phone, reviews, and direct demand—without inflated stats or vendor hype.',
    heroImage: '/lp/lp-no-hype-hero.png',
    heroImageAlt: 'Abstract editorial visual for OARC Digital no-hype AI report',
    formTitle: 'Get the no-hype Malta AI report',
    formSubtitle: 'What we see operating venues and building systems—facts you can cite.',
    ctaLabel: 'Get the report',
    leadName: 'LP — No-Hype AI Report Malta',
    h1: 'The real story behind AI',
    h1Serif: 'for Malta operators',
    heroSub:
      'You have heard the hype. This report cuts to what changes covers, reviews, and direct orders when AI is wired to operations—not slideware.',
    gate2Question: 'Does AI actually work for Malta restaurants and local businesses?',
    gate2Answer:
      'OARC Digital\'s no-hype AI report summarises what works when Maltese operators use AI for inbound phone answering, review follow-up, booking sync, and local search visibility—based on systems OARC builds and venues OARC operates. It avoids inflated industry stats and focuses on phone-to-booking workflows, owner-controlled training, and margin from direct demand rather than platform fees.',
    sections: [
      {
        eyebrow: 'WHY BOTHER?',
        title: 'Most teams dabble. Few integrate.',
        subtitle: 'Integration wins when phone, reviews, and bookings share one brain you control.',
      },
      {
        eyebrow: 'FROM PROMISE TO PROOF',
        title: 'Where to invest first',
        bullets: [
          'Inbound phone → answered → booked (missed calls = empty tables)',
          'Review follow-up that feeds Google visibility—not rewarded fake stars',
          'Direct order and booking paths that cut Wolt/Bolt margin leak',
          'Owner dashboard: transcripts, approvals, peak-hour insight',
        ],
      },
    ],
    stats: [
      { value: '24/7', label: 'phone coverage when wired' },
      { value: '3', label: 'venues OARC operates' },
      { value: '1', label: 'domain authority stack' },
    ],
    thumbnailTips: [
      'Finding 1 — Generic chatbots without phone lines do not fix Friday rush',
      'Finding 2 — Training weekly beats dumping a FAQ once',
      'Finding 3 — Malta bilingual callers need tone, not translation gimmicks',
      'Finding 4 — Review velocity follows service fixes, not incentive scams',
      'Finding 5 — Direct demand rises when Maps + site + phone align',
    ],
    faqs: [
      {
        question: 'Are the numbers in this report verified industry-wide?',
        answer:
          'No inflated vendor stats. We report patterns from OARC-built systems and venues we operate in Malta—qualified, operator-grade observations you can sanity-check.',
      },
      {
        question: 'Is this only about restaurants?',
        answer:
          'Hospitality is the deepest proof because OARC runs venues—but phone AI, review systems, and local search apply to clinics, retail, and services in Malta too.',
      },
      {
        question: 'How is this different from Superside or global AI reports?',
        answer:
          'Those reports serve global creative teams. OARC\'s report is Malta-local, operator-first, and tied to phone, bookings, reviews, and margin—not enterprise subscription creative.',
      },
      {
        question: 'Will AI replace my staff?',
        answer:
          'It replaces missed calls and repetitive answers—not your floor team. Handoff rules keep humans on complaints, VIPs, and edge cases.',
      },
      {
        question: 'What should I do after reading?',
        answer:
          'Pick one workflow—usually phone or reviews—wire it with approval gates, then expand. Book a discovery call at oarcdigital.com/contact if you want OARC to build it with you.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideContent | undefined {
  return LP_GUIDES.find((g) => g.slug === slug);
}

export const LP_HUB = {
  path: '/lp',
  metaTitle: 'AI Guides for Malta Business | OARC Digital',
  metaDescription:
    'Free AI guides for Malta owners and marketers—tips, adoption playbook, and a no-hype report from operators at OARC Digital.',
};
