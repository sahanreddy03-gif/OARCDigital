export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            The marketing automation layer your stack actually needs
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why most marketing automation projects underdeliver</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Marketing automation has been sold for fifteen years and most Malta SMEs have at least one piece of it deployed — a Mailchimp account, a HubSpot trial, a Klaviyo install on a Shopify store. The reason it underdelivers in production is rarely the tool: it is that the team-of-one who set up the welcome flow in 2022 is now doing other work, and nobody has touched the cadence since. The OARC Marketing Automation Suite is the operated version of marketing automation — built, run, tuned, and reported on weekly so the cadence stays alive.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We do not sell software licences and we do not take vendor commissions. The retainer covers the strategy, the engineering, the copy, the design, the deployment, the deliverability, the reporting, and the quarterly executive review. Tools are licensed direct by the client to avoid switching-cost lock-in. The product is the operating discipline; the tools are interchangeable.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What the suite covers, by funnel stage</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Top-of-funnel: lead-magnet welcome flows, content-series nurture, behavioural-trigger educational sequences. Mid-funnel: SQL-to-MQL re-engagement, demo-no-show recovery, free-trial activation cadences, sales-team prompted re-engagement triggers. Bottom-of-funnel: post-purchase onboarding, upgrade prompts, churn-prevention warnings, win-back cadences for cancelled customers. Plus the broadcast layer: editorial campaigns, product-launch announcements, seasonal campaigns, post-event follow-ups.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Each cadence is keyed to behavioural triggers, not arbitrary day-counts. 'Send the email three days after they signed up if they have not yet completed onboarding step three' is a useful trigger; 'send the email three days after signup' is not. The triggers come out of the behavioural data in your CRM and product analytics, which is why every engagement starts with an audit of the data sources before any cadence ships.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tools we deploy on, and how we choose</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              ESPs: Klaviyo for ecommerce, HubSpot for B2B, Customer.io and Iterable for product-led SaaS, Mailchimp / Brevo for SMEs, Active Campaign for service businesses. CRMs: HubSpot, Salesforce, Pipedrive, Close. Product analytics: Mixpanel, Amplitude, PostHog, Heap. Reverse ETL: Hightouch, Census. Workflow glue: n8n, Workato, Make, custom Node.js workers depending on volume.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Choice is on stack-fit, cost-per-event, and team comfort. We do not insist on the OARC-favourite tool. We do insist on a single source of customer truth — fragmented stacks dilute the automation gains and we will recommend consolidation before bolting on more cadences. That recommendation often saves clients more annual licence cost than the OARC retainer.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing and engagement model</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Suite Audit at €2,400 is a two-week diagnostic of every cadence, every tool, every data source. Output: a prioritised remediation roadmap with effort and expected-impact estimates. Suite Build at €9,500 is a six-week sprint to ship the first wave of cadences (typically welcome + onboarding + win-back). Suite Retainer at €3,400/month is the ongoing operation tier — monthly cadence iteration, weekly performance review, quarterly strategic review.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most clients combine the Build and Retainer — the Build ships the foundation, the Retainer keeps it alive. About 70% of Audit clients commission the Build; about 90% of Build clients move into the Retainer. Engagement length is six-month minimum on the Retainer because cadence performance compounds and a thirty-day judgement is not informative.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where this fits next to /services/funnel-automation and /services/revenue-automation</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Marketing Automation Suite is email-and-lifecycle-led. Funnel Automation is the wider funnel-engineering view — adds form-to-CRM piping, AI qualification, calendar booking, dashboards. Revenue Automation is the widest scope — adds billing automation, customer-success ops, finance integration, and fractional RevOps leadership. The three offerings overlap deliberately because clients have different bottlenecks; the Audit step tells us which one fits.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If your bottleneck is 'we have a list and we email it once a month and revenue is flat', this is the right starting point. If your bottleneck is 'leads come in but nothing happens to them', start with Funnel Automation. If your bottleneck is 'the CRM is a mess and we cannot tell which deals are real', start with Revenue Automation. We try to scope each engagement to the actual bottleneck rather than upsell into the broadest contract.
            </p>
          </div>
        </div>
      </section>
    );
  }
  