import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const CANONICAL = "https://oarcdigital.com/ai-native-marketing-agency";
const TITLE = "What Is an AI-Native Marketing Agency? | OARC Digital";
const DESCRIPTION =
  "An AI-native marketing agency combines human strategy and creative direction with AI workers, automation, and measurable operating systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const definitionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable='definition']", "[data-speakable='answer']"],
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${CANONICAL}#term`,
      name: "AI-native marketing agency",
      description:
        "A marketing agency designed around AI-assisted creative production, AI workers, automation, and measurement from the beginning rather than adding those capabilities after the fact.",
      inDefinedTermSet: CANONICAL,
    },
  ],
};

export default function AiNativeMarketingAgencyPage() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }} />
      <article className="mx-auto max-w-4xl px-6 py-20 md:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
          Definition
        </p>
        <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl" data-speakable="definition">
          What is an AI-native marketing agency?
        </h1>
        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground" data-speakable="answer">
          An AI-native marketing agency combines human strategy and creative direction with AI workers,
          workflow automation, and measurement designed into the operating model from the start. It
          delivers marketing assets and helps operate the workflows those assets create.
        </p>

        <section className="mb-12 rounded-2xl border bg-card p-6 md:p-8" aria-labelledby="short-answer">
          <h2 id="short-answer" className="mb-3 text-2xl font-bold">
            Short answer
          </h2>
          <p className="leading-relaxed text-foreground/80">
            Traditional agencies usually recommend, create, or distribute. An AI-native agency can do
            those things while connecting approved AI workers and automations to sales, support,
            booking, CRM, and reporting workflows. Humans remain responsible for strategy, creative
            judgement, permissions, compliance, and escalation.
          </p>
        </section>

        <div className="space-y-10 text-foreground/80">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">What “native” means</h2>
            <p className="leading-relaxed">
              “Native” describes the operating model, not a claim that people disappear. The team
              starts with the customer journey, the business systems, and the decisions that need
              judgement. It then assigns repeatable work to suitable AI workers or automations, with
              approved knowledge, explicit permissions, monitoring, and a human handoff.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">What an AI-native agency can deliver</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Human-directed brand, social, video, web, and paid-media creative.</li>
              <li>AI workers for lead qualification, support, booking, administration, and reporting.</li>
              <li>Voice coverage that answers calls, takes approved actions, and hands off decisions.</li>
              <li>CRM, WhatsApp, lifecycle, and workflow automation connected to existing tools.</li>
              <li>Measurement against an agreed baseline rather than impressions alone.</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">How OARC Digital applies the model</h2>
            <p className="leading-relaxed">
              OARC Digital brings creative, AI workers, Voice AI Worker, and business systems together
              for Malta and EU businesses. The right starting point depends on the constraint: demand
              generation, missed calls, slow follow-up, support load, or manual operations. Pricing is
              tailored to the brief, with affordable entry packages and results-based structures where
              they fit the engagement.
            </p>
          </section>
        </div>

        <nav className="mt-14 flex flex-wrap gap-4 border-t pt-8" aria-label="Related OARC resources">
          <Link className="text-orange-600 underline-offset-4 hover:underline" href="/ai-agents">Explore AI Workers</Link>
          <Link className="text-orange-600 underline-offset-4 hover:underline" href="/voice-ai-worker">Explore Voice AI Worker</Link>
          <Link className="text-orange-600 underline-offset-4 hover:underline" href="/solutions">Explore Business Systems</Link>
        </nav>
      </article>
    </Layout>
  );
}