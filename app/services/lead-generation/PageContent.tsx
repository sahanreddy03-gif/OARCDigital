export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Lead generation that delivers qualified meetings, not raw form-fills
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What 'lead generation' means here, and what it does not mean</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most agencies sell 'lead generation' and deliver email-list-purchases, contest-form-fills, and gated PDF downloads — leads in the loosest possible sense, none of which translate to revenue. OARC sells lead generation as 'qualified meetings booked into your closer's calendar with a pre-call brief'. The economic unit is the qualified meeting; the unit cost is reported as cost-per-qualified-meeting; the leading indicator is reply rate, the lagging indicator is closed-won attribution. Anything else is theatre.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Definition of 'qualified' is locked in the SOW per client. Typical B2B B2B-services rubric: matches ICP firmographics (industry, headcount, geography), has buyer-side authority (decision-maker or budget-holder), shows present intent (active hiring, recent funding round, declared problem in the discovery message). Meetings that fail the rubric do not count toward the monthly target. This is non-negotiable — we will not pad numbers to look better at a quarterly review.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Channels we run, and how we choose them</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              For Malta-headquartered B2B SaaS selling into EU mid-market, the dominant channels are LinkedIn outbound + cold email + targeted paid ads on LinkedIn / Google. For Malta-based services businesses selling into the islands, Google Local + Meta + LinkedIn for higher-ticket services + outbound email for senior-decision-maker targets. For EU-wide B2B with deal sizes above €25k ARR, multi-channel outbound + paid + content distribution.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We are channel-agnostic but opinionated against doing channels we cannot measure. If the deal cycle is six months, attribution on a one-month engagement is meaningless and we will tell you so. Engagement length and channel choice are calibrated to your sales-cycle reality, not to what is fashionable.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Cold-email infrastructure and deliverability</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Cold-email deliverability is the silent killer of every DIY lead-gen attempt. We send from a separate sending domain (yourcompany.io for a yourcompany.com primary), warm the new domain over four to six weeks before any prospect sees a message, and monitor inbox placement daily via Postmaster Tools and seed-list testing. Reply-rate-by-day pacing throttles automatically when deliverability degrades. The discipline here is the difference between a deliverable two-year programme and a two-month rocket that burns the domain.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Prospect data sources are GDPR-compliance-checked at source (Apollo, Cognism, Lusha, ZoomInfo, LinkedIn Sales Navigator). Opt-out signals are honoured across the entire prospect graph, not just the source list. We sign a DPA with every client and our cold-email playbook respects EU-PECR and the Maltese Data Protection Act in addition to GDPR.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing tiers and meeting-volume targets</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Lead Gen Pilot at €2,900/month is a single-channel programme with AI qualification, target twenty-five qualified meetings per month after the warm-up period. Multi-Channel Lead Gen at €5,900/month combines outbound, paid inbound, AI qualification, and CRM routing for a target of sixty-plus qualified meetings per month. Lead Gen Engine Build at €18,000 is the twelve-week project to ship a permanent lead gen engine handed over to your team.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We commit a meeting-volume range in the SOW (e.g. twenty-five to thirty-five for the Pilot). Miss the floor by more than twenty percent and the next month is credited; hit it and both sides know the engagement is working. We do not commit to closed-won numbers because we do not control the close — that is your sales team's job.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How this differs from /services/lead-generation-engine</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              /services/lead-generation is the buyer-intent gateway — the page someone lands on when they search 'lead generation Malta' or 'lead generation services'. /services/lead-generation-engine is the AI-agent-native, deeper version of the offering — same outcome targets, different content emphasis on the underlying technology and the productised packaging. Most clients land on this page first; some convert directly into the Engine programme.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If your bottleneck is not the lead supply but the close rate, see /services/funnel-automation or /services/revenue-automation. If you have plenty of leads but cannot tell which channels they came from, /services/performance-analytics fixes the attribution layer. Lead Generation works best when the close-rate floor is healthy and the bottleneck is genuinely top-of-funnel volume.
            </p>
          </div>
        </div>
      </section>
    );
  }
  