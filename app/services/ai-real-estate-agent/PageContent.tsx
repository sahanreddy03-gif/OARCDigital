import Link from "next/link";

const CASE_IMAGES = [
  {
    src: "/images/registry/death-by-missed-leads-sliema-real-estate-malta.webp",
    alt: "Sliema real estate agency dashboard showing missed portal leads recovered by AI",
    caption: "Sliema brokerage — 38% of after-hours portal leads recovered in week one.",
  },
  {
    src: "/images/registry/real-estate-ai-receptionist-malta-property-agency.webp",
    alt: "AI receptionist handling Maltese and English property enquiries for a Malta agency",
    caption: "AI receptionist triaging EN / MT / IT enquiries before agents log on.",
  },
  {
    src: "/images/registry/real-estate-malta-conversion-dashboard.webp",
    alt: "Malta real estate conversion dashboard tracking AI-qualified viewings and revenue",
    caption: "Conversion dashboard — qualified viewings up 2.4x in 90 days.",
  },
];

export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Recent Malta property work</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
              Three production deployments across Sliema, St Julian&apos;s, and Gzira brokerages — portal triage, multilingual qualification, and the conversion dashboard the senior team checks every Monday.
            </p>
            <div
              className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible"
              data-testid="carousel-real-estate-cases"
              role="region"
              aria-label="AI real estate agent — Malta case examples"
            >
              {CASE_IMAGES.map((img, i) => (
                <figure
                  key={img.src}
                  className="snap-center shrink-0 w-[80%] md:w-auto"
                  data-testid={`figure-case-${i}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 md:h-44 object-cover rounded-md border border-border"
                  />
                  <figcaption className="mt-2 text-sm text-foreground/70">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-speakable>
            A Maltese real-estate agent that never misses a portal lead
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Malta brokerages bleed leads at the inbox</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Frank Salt, Belair, RE/MAX Malta, Dhalia, Engel &amp; Völkers, the Maltese property aggregators — every brokerage on the islands is connected to the same handful of portals, and every brokerage has the same problem: portal enquiries arrive at all hours, in mixed languages, with tyre-kickers and serious buyers indistinguishable in the inbox. By the time an agent triages and replies, the buyer has already been answered by three competitors. The OARC AI Real Estate Agent is built to win that thirty-minute window.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It connects to your portal-feed and your inbound web channels, reads each enquiry, qualifies it on budget / timeline / financing / intent, books a viewing across the right agent&apos;s calendar, and sends a CRM-ready briefing to the agent who will run the viewing. Cold leads go into a long-cycle reactivation cadence so that the broker who follows up nine months later — when a buyer&apos;s circumstances change — is your firm, not the next listing on Property Malta.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How it books viewings — step by step</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              An enquiry arrives at 11pm on a Sunday in Italian — a Sicilian buyer asking about a two-bedroom in Sliema. The agent reads it within forty seconds, replies in Italian, asks four scoping questions (budget, preferred area, timeline, financing status), and waits for replies. The buyer responds at 11:15pm. By 11:20pm the agent has identified two listings that match, proposed three viewing slots across two agents&apos; calendars for the following Tuesday and Wednesday, and requested a preferred time.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              When the buyer confirms a slot, the agent writes a one-page briefing for the agent: the buyer&apos;s stated requirements, the two listings being viewed, every question the buyer has asked in the conversation thread, any negotiation context (days on market, recent price changes, comparable closures in the locality), and a recommended opening line. The agent arrives at the viewing prepared. The buyer&apos;s first impression is of an agency that responds in their language, at their hour, with full preparation.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built for Malta&apos;s particular buyer pool</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Forty percent of Malta property enquiries originate outside the islands — Italian buyers from Sicily and Lazio, British retirees, Russian and Ukrainian relocations, EU citizenship-by-investment applicants, and a long tail of remote-working professionals. The agent is multilingual out of the box (English, Maltese, Italian, French, German, Spanish, Russian) and triages each enquiry in the buyer&apos;s language without a manual translation step.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It also reads value signals that local brokers know to look for — cash buyer mentions, citizenship-programme enquiries, declared budget bands above €1.5m — and routes those to a senior agent within minutes, with a written briefing. Lower-value enquiries (lettings, sub-€300k purchases, casual tyre-kickers) get the same qualification but route to junior agents or the long-cycle nurture queue. The senior team&apos;s calendar is protected by triage that runs around the clock.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">GDPR, data residency, and compliance for EU property marketing</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              All buyer data processed by the agent is stored on EU-region infrastructure — Azure OpenAI West Europe. The agent does not retain conversation content beyond the period specified in your DPA; it passes qualified lead records to the CRM and then purges the raw conversation unless you have opted into an extended retention period for training purposes. PII fields (name, phone, email) are tokenised at ingestion and only expanded at the point of CRM handoff.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              For citizenship-by-investment enquiries — where the language used in marketing is regulated under Malta&apos;s CBI programme rules — the agent has a hard-coded compliance escalation: any enquiry that includes CBI language bypasses automated handling entirely and routes to a human agent flagged as CBI-cleared. We do not automate the regulated part of the CBI funnel; we only automate the triage that sits upstream of it.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Integrations and viewing logistics</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Native portal integrations with Frank Salt, Belair, RE/MAX Malta, Dhalia, RE/MAX international, Engel &amp; Völkers, and the major aggregators. CRM integrations with HubSpot, Salesforce, Pipedrive, Reapit, and Apto, with bespoke webhook integrations for brokerages on internal CRMs. Viewing booking writes to each agent&apos;s individual Google Calendar or Outlook, with travel-time buffers configured per locality (Sliema agents get tighter buffers than Gozo agents).
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              For the viewing itself, the agent generates a one-page brief — the buyer&apos;s stated requirements, the listings being shown, the questions the buyer has already asked, and the negotiation context (how long the listing has been on market, recent price changes, comparable closures in the locality). The agent walks in prepared instead of stalling at the gate.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Investment and ROI for a typical Maltese brokerage</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Listing Qualifier at €990/month covers up to 1,000 enquiries per month and is the right entry point for a single-office brokerage of three to seven agents. Sales Agent Assistant at €1,890/month adds the viewing booking, calendar sync per agent, and the CRM-ready handoff briefing. Brokerage Pod at €4,500/month is the multi-office tier with cold-lead reactivation, EN/MT/IT scripting, and weekly broker performance reports.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              ROI in this segment is straightforward: most brokerages recover the monthly fee within thirty to forty-five days from after-hours enquiries that previously bounced. The bigger lift is from cold-lead reactivation — typical clients see eight to fifteen percent of the previously-dormant enquiry pool re-engage to a viewing within the first ninety days, which is pure incremental commission.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where this fits next to traditional Maltese real-estate marketing</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We do not displace the agents — we buy back their selling time. A senior Maltese real-estate agent&apos;s hourly cost is high, and the marginal hour is best spent in viewings and negotiations, not in the inbox at 11pm on a Sunday. The Real Estate Agent does the inbox-and-calendar layer; the human agent does the viewings, the negotiations, the local-market judgement calls.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              For brokerages that also want help on top-of-funnel lead acquisition, we pair this with{" "}
              <Link href="/services/paid-advertising" className="text-orange-600 hover:text-orange-700 underline">paid advertising</Link>{" "}
              for portal-supplemented Meta and Google campaigns, and{" "}
              <Link href="/services/seo-services" className="text-orange-600 hover:text-orange-700 underline">SEO services</Link>{" "}
              for the long-tail buyer-intent queries that compound over years. The AI Real Estate Agent then qualifies whatever the marketing layer brings in.
            </p>
          </div>

          <div className="mt-12 p-5 rounded-xl border bg-muted/40">
            <h2 className="text-base font-semibold mb-3">Part of the OARC AI Employees programme</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              The AI Real Estate Agent is one of ten pre-built AI roles on the OARC platform. To compare it alongside other agent roles — or to understand how a multi-agent deployment works — see the full AI Agents hub or the employee roster.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/ai-agents" className="text-orange-600 hover:text-orange-700 font-medium underline">
                AI Agents hub — all ten roles
              </Link>
              <Link href="/services/hire-ai-employees" className="text-orange-600 hover:text-orange-700 font-medium underline">
                Hire AI Employees — full roster and pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
