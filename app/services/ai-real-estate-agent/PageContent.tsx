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
              Three production deployments across Sliema, St Julian's, and Gzira brokerages — portal triage, multilingual qualification, and the conversion dashboard the senior team checks every Monday.
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            A Maltese real-estate agent that never misses a portal lead
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Malta brokerages bleed leads at the inbox</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Frank Salt, Belair, RE/MAX Malta, Dhalia, Engel & Völkers, the Maltese property aggregators — every brokerage on the islands is connected to the same handful of portals, and every brokerage has the same problem: portal enquiries arrive at all hours, in mixed languages, with tyre-kickers and serious buyers indistinguishable in the inbox. By the time an agent triages and replies, the buyer has already been answered by three competitors. The OARC AI Real Estate Agent is built to win that thirty-minute window.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It connects to your portal-feed and your inbound web channels, reads each enquiry, qualifies it on budget / timeline / financing / intent, books a viewing across the right agent's calendar, and sends a CRM-ready briefing to the agent who will run the viewing. Cold leads go into a long-cycle reactivation cadence so that the broker who follows up nine months later — when a buyer's circumstances change — is your firm, not the next listing on Property Malta.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built for Malta's particular buyer pool</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Forty percent of Malta property enquiries originate outside the islands — Italian buyers from Sicily and Lazio, British retirees, Russian and Ukrainian relocations, EU citizenship-by-investment applicants, and a long tail of remote-working professionals. The agent is multilingual out of the box (English, Maltese, Italian, French, German, Spanish, Russian) and triages each enquiry in the buyer's language without a manual translation step.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It also reads value signals that local brokers know to look for — cash buyer mentions, citizenship-programme enquiries, declared budget bands above €1.5m — and routes those to a senior agent within minutes, with a written briefing. Lower-value enquiries (lettings, sub-€300k purchases, casual tyre-kickers) get the same qualification but route to junior agents or the long-cycle nurture queue. The senior team's calendar is protected by triage that runs around the clock.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Integrations and viewing logistics</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Native portal integrations with Frank Salt, Belair, RE/MAX Malta, Dhalia, RE/MAX international, Engel & Völkers, and the major aggregators. CRM integrations with HubSpot, Salesforce, Pipedrive, Reapit, and Apto, with bespoke webhook integrations for brokerages on internal CRMs. Viewing booking writes to each agent's individual Google Calendar or Outlook, with travel-time buffers configured per locality (Sliema agents get tighter buffers than Gozo agents).
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              For the viewing itself, the agent generates a one-page brief — the buyer's stated requirements, the listings being shown, the questions the buyer has already asked, and the negotiation context (how long the listing has been on market, recent price changes, comparable closures in the locality). The agent walks in prepared instead of stalling at the gate.
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
              We do not displace the agents — we buy back their selling time. A senior Maltese real-estate agent's hourly cost is high, and the marginal hour is best spent in viewings and negotiations, not in the inbox at 11pm on a Sunday. The Real Estate Agent does the inbox-and-calendar layer; the human agent does the viewings, the negotiations, the local-market judgement calls.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              For brokerages that also want help on top-of-funnel lead acquisition, we pair this with /services/paid-advertising for portal-supplemented Meta and Google campaigns, and /services/seo-services for the long-tail buyer-intent queries ("sea view apartment Sliema", "Gozo farmhouse for sale") that compound over years. The AI Real Estate Agent then qualifies whatever the marketing layer brings in.
            </p>
          </div>
        </div>
      </section>
    );
  }
  