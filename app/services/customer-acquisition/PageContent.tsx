import RelatedServices from "@/components/RelatedServices";

export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Customer acquisition for Malta and EU brands, measured in CPA not impressions
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What customer acquisition means at OARC</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Customer acquisition, in our definition, is the end-to-end engineering of getting a stranger to become a paying customer at a known, repeatable cost. That means paid channels, organic channels, the landing page, the lifecycle email, the AI qualification, and the attribution model that ties them together — measured against one number, cost-per-acquired-customer, and benchmarked against contribution margin per cohort. Anything that is not measured against that number is theatre.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most Malta SMEs we audit have functional pieces — a Meta account, a Google account, a Mailchimp list, a Hubspot CRM — but the pieces do not talk to each other. CPA is unknowable because attribution is broken; channel decisions are made on platform-reported numbers (which lie) instead of first-party data (which does not). The first month of any Acquisition Retainer is dedicated to fixing that, because spending more before you can measure is how you waste two quarters.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Channels we run and why we pick them</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Channel-agnostic but opinionated. For Malta DTC and B2C clients we typically lean Meta + Google + targeted SEO, often with influencer creator content as paid amplification. For Malta-headquartered B2B SaaS selling into EU mid-market, the mix tilts toward LinkedIn paid + outbound SDR + content distribution. For local services (clinics, restaurants, professional services with Malta-only catchment), Google + local SEO + Facebook neighbourhood targeting compounds best.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We do not chase channels because they are trendy. TikTok works when your buyer is on TikTok and your product photographs well; for a fifty-year-old Maltese accountancy looking for SME clients, it is a distraction. The channel-mix recommendation comes out of the Acquisition Audit and gets re-evaluated quarterly against attribution data, not LinkedIn thought-leadership.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Attribution: the work that makes everything else honest</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Post-iOS 14, post-cookie-deprecation, attribution is hard. We default to a three-layer model: (1) server-side conversion APIs on every paid platform (Meta CAPI, Google Enhanced Conversions, TikTok Events API, LinkedIn CAPI) so platform-reported numbers are usable; (2) first-party warehouse data joined on session, user, and customer ID so we can build cohorts and LTV; (3) quarterly geo-incrementality testing as the source of truth for incremental contribution per channel.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The dashboard layer is built in Looker, Hex, or whatever BI you already run. Every metric has a curated definition; every channel has a contribution number; every report ships with written commentary so leadership can see what changed and why, not just what the number is.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing tiers and what each one delivers</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Acquisition Audit at €2,400 is a two-week diagnostic — every channel, every tracker, every funnel step measured and a 90-day execution roadmap delivered. Acquisition Retainer at €4,900/month is multi-channel ongoing delivery with weekly CPA reporting and quarterly business reviews. Growth Engine Build at €18,000 is the twelve-week project to ship a permanent acquisition engine — attribution, AI agents, lifecycle automation, dashboards — handed over to your team.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Minimum monthly ad spend for the Retainer to make commercial sense is roughly €8k/month — below that, the management fee is a disproportionate share of total cost, and a freelancer plus a quarterly OARC audit is a better fit. Above €100k/month spend, we move clients to a Performance Media Pod with embedded buying capacity.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How this fits next to /services/customer-acquisition-accelerator</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Customer Acquisition is the always-on offering — ongoing delivery, ongoing tuning, ongoing reporting. The Customer Acquisition Accelerator is a fixed-scope ninety-day sprint built around one thing: compress CPA by 30% inside one quarter. Most clients run the Accelerator first to prove the model, then move into the Retainer to operate it.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If you want the broader strategic layer above acquisition — channel-mix decisions, segment definitions, market-entry questions — that lives in /services/growth-strategy. If your bottleneck is not enough qualified meetings (rather than too-expensive meetings), see /services/lead-generation-engine. We are deliberate about what each page sells, because misaligned engagements waste both sides' time.
            </p>
          </div>
        </div>

      <RelatedServices slug="/services/customer-acquisition" />
      </section>
    );
  }
  