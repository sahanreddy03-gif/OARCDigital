export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            An AI that runs your CRO programme while your team runs the business
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">CRO programmes fail because nobody owns them</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Conversion-rate optimisation is the textbook example of work that looks easy and pays off if you actually do it consistently. Run hypothesis-driven A/B tests every week, document the wins and losses, compound the learnings. Six months later your funnel converts twice as well. In practice, most teams attempt a CRO programme for two months and then it dies under the weight of more urgent work. The OARC Funnel Optimization Agent exists to keep the programme alive when the human attention runs out.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It watches every funnel stage for anomalies, generates hypotheses against a curated CRO hypothesis library, prioritises them by expected ROI, drafts the test plans, deploys the low-risk tests automatically through your A/B platform, and queues the higher-risk tests for human approval. The cadence is not optional any more — it runs whether anyone in your team thinks about it or not.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How the agent generates hypotheses</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Three sources, weighted by your funnel and industry. First: anomaly detection on funnel-stage drop-off rates, sliced by source / device / cohort, surfacing where the funnel is leaking now versus a four-week baseline. Second: heatmap and session-replay analysis from Hotjar, FullStory, or Microsoft Clarity, surfacing actual user friction (rage-clicks, dead clicks, scroll-depth fall-off, form-field abandonment). Third: a curated hypothesis library mapped to industry, funnel stage, and customer-survey themes — the things that have worked across hundreds of similar funnels.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The agent then stack-ranks the hypotheses by ICE (Impact, Confidence, Effort) and proposes the next-best test. Tests deemed low-risk (copy, button labels, image swaps, headline variants) deploy automatically; higher-risk tests (page-structure changes, removing a step, pricing-page restructures) require a human approval click. The human stays in the loop on judgement; the agent does the volume.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Statistical rigor and rollback discipline</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Tests run for the time required to reach statistical significance — typically seven to fourteen days at meaningful traffic levels — not for an arbitrary duration. We use sequential testing where appropriate to avoid the 'peeking problem' (the temptation to call a winner early). Tests that show a clear loser-with-significance get auto-rolled-back; tests that show a clear winner get promoted to the canonical version. Tests in the inconclusive zone get filed with the hypothesis and the test data so the next iteration can build on them.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every test ships with the hypothesis, the expected lift, the metric, the audience, and the success criteria written down before the test starts. This is the discipline that separates a real CRO programme from a vanity 'we tried lots of stuff' deck. The agent enforces the discipline; the team does not have to police it.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing and platform integrations</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              CRO Agent Pilot at €1,490/month covers a single funnel with two tests per week, set-up included. CRO Agent Pro at €2,900/month covers up to three funnels with six tests per week, dashboard access, and a monthly executive briefing. Embedded CRO at €5,900/month adds a senior CRO consultant for one day per week — strategy, hypothesis backlog, and a human reviewer for higher-risk tests.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Platform integrations cover VWO, Optimizely, Convert, Statsig, and the major CMSes (WordPress, Webflow, Shopify, Next.js with Vercel Edge Config). For clients without an A/B platform, we deploy a thin in-house Edge-Config-based test runner during onboarding — most engagements do not need a paid A/B vendor unless the test volume is very high.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where it sits next to traditional CRO consulting</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Traditional CRO consultancies sell senior strategists doing quarterly audits and proposing big-bang rebuilds. The Funnel Optimization Agent sells continuous low-risk testing that compounds. They are complementary — many clients run a quarterly senior-CRO review for the strategic re-thinks, and the agent for the weekly cadence between reviews. The Embedded CRO tier bundles both into one engagement.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If you do not have an A/B testing culture yet, the Pilot tier is the safe entry point — it proves the cadence is viable on one funnel, and the team gets used to the discipline before scaling. If you already have a CRO function but it is bottlenecked on senior time, the Pro tier acts as an analyst layer that frees the senior strategist for the higher-leverage work.
            </p>
          </div>
        </div>
      </section>
    );
  }
  