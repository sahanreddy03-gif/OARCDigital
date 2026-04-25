export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Wire the funnel from ad-click to closed deal, instrumented and self-tuning
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why funnels leak — and what we automate</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The typical Malta SME funnel looks great in a slide deck and leaks like a sieve in production. Forms post to a CRM that nobody opens until Tuesday. Lead-routing is a Slack message someone might or might not see. The lifecycle email cadence is two emails written in 2021. The dashboard says 'pipeline created' but nobody can answer 'why is the conversion rate from MQL to SQL 12% in May and 4% in June'. Funnel Automation is the engineering job that fixes all of that.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We instrument every funnel stage so the drop-off curve is observable. We automate the ad-click-to-CRM-record handoff so leads land in the right pipeline with the right owner within seconds. We deploy AI qualification so the closer's calendar is protected from tyre-kickers. We rebuild the lifecycle automation so prospects who are not ready right now stay engaged for the year that follows. And we wire the dashboard so every metric has a curated definition, every change has commentary, and every quarter the leadership team can see where the bottleneck is.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What we mean by 'funnel automation', precisely</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Six layers, each shipped to production: (1) Form-to-CRM piping with enrichment, dedup, and routing rules — typical effort is two to three weeks. (2) AI qualification (the OARC AI SDR or the Lead Generation Engine) deciding which leads earn a meeting and which earn a long-cycle nurture. (3) Calendar booking with no-show recovery and rebooking sequences. (4) Lifecycle email cadences keyed to behaviour, not arbitrary day-counts. (5) CRM stage hygiene rules so deal stages mean the same thing across reps. (6) Dashboards joining all of the above so the funnel-stage conversion rates are visible weekly, not quarterly.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Each layer ships independently and each layer is observable. We deliberately do not bundle them into one big monolithic 'platform' — that pattern fails because every shipped layer is held hostage by the unfinished layers. Ship layer one, prove the lift, move to layer two.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tools we build on, and why</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              CRM: HubSpot for SMB and mid-market, Salesforce for enterprise, Pipedrive for sub-twenty-seat sales teams, Close and Attio for fast-moving startups. We are CRM-agnostic but opinionated — fragmented stacks dilute the gains. Email automation: Klaviyo for ecommerce, Customer.io and Iterable for SaaS, HubSpot for B2B. Booking: Calendly, Cal.com, Chili Piper for high-volume routing. Workflow glue: n8n, Workato, Make, or custom Node.js workers depending on volume.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We do not take vendor commissions. Tool selection is purely on stack-fit and cost-per-event. License direct from the vendors so you own the data and can leave OARC at any time without re-platforming. This is a deliberate choice — it makes the relationship a service-quality contest, not a switching-cost trap.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Investment and typical first-quarter results</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Funnel Audit at €1,800 is a two-week diagnostic that maps every funnel stage, names the friction points, and produces a top-three fix list with effort estimates. Funnel Build at €9,500 is a six-to-eight-week sprint that ships the rebuild — typically the form-to-CRM layer plus AI qualification plus the lifecycle email refresh. Funnel Retainer at €2,900/month is the ongoing iteration tier — A/B tests, lifecycle tweaks, AI agent tuning, weekly performance reviews.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Median client outcome ninety days after a Funnel Build is a 35-60% lift in funnel-conversion-end-to-end. The biggest contributors are usually the AI qualification step (which protects closer time) and the no-show recovery step (which recovers 25-40% of would-be-lost meetings). Reported per stage so leadership can see exactly where the lift came from.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where this overlaps with our other services</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Funnel Automation is the broadest of the revenue-engineering offerings — it touches every layer from acquisition to close. /services/marketing-automation-suite is the email-and-lifecycle-led cousin; /services/revenue-automation is the wider-scope RevOps-led version that adds billing, customer-success, and finance integration. /services/lead-generation-engine is the AI-agent-native deeper version of the qualification layer.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most clients land on Funnel Automation when they have working pieces but a leaky integration layer. Clients with broken acquisition land on /services/customer-acquisition first, fix the upstream channel, then commission funnel work. Clients with broken sales-team execution land on /services/growth-strategy first to fix the GTM motion before automating around it. We try to point each engagement to the offering that solves the actual bottleneck.
            </p>
          </div>
        </div>
      </section>
    );
  }
  