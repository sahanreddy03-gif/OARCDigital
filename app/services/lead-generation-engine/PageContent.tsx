export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            An AI-native lead-generation engine, not a re-skinned SDR agency
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The economic shift AI brings to lead generation</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              An SDR books eight to fifteen qualified meetings per month at a fully-loaded cost of four to six thousand euros. The OARC Lead Generation Engine targets twenty-five to sixty qualified meetings per month at €2,900-€5,900 per month. The trade-off is not 'AI vs human' — humans are still better at nuanced discovery calls and complex negotiations. The trade-off is 'AI for volume, humans for judgement', and most B2B sales teams should be reorganised around it.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Production deployments typically replace one-and-a-half to two SDR seats inside ninety days. The saved budget reinvests in one additional account executive, who closes the increased meeting volume. Net result: same headcount cost, materially higher pipeline and closed revenue. This is the economic logic that makes the Engine a different product from a traditional outbound agency.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What the engine actually does, end-to-end</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Stage one: AI prospecting. We define your ICP precisely (industry, headcount, geography, technographics, intent signals) and the engine pulls the matching prospect set from Apollo, Cognism, Lusha, ZoomInfo, and LinkedIn Sales Navigator daily. GDPR-compliance-checked at source, opt-out signals respected across the graph.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Stage two: outreach. Sequenced email and LinkedIn touches from your domain (or a sending sub-domain we warm), with the message library tuned weekly against reply-rate signals. Stage three: qualification. Replies route through the agent's qualification logic — the prospect either books a meeting (if they fit the rubric and have intent) or enters a long-cycle nurture (if they do not fit now but might in the future). Stage four: pre-call brief. Before every booked meeting the engine generates a one-page brief — prospect background, company context, recent news, predicted objections, recommended opening question. Your closer walks in prepped.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why messages from the engine do not sound like generic AI</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Two reasons. First, we voice-train against your top three reps' actual sequences and call recordings — the engine sounds like your team, not like ChatGPT defaults. Second, we keep messages short, conversational, and specific to the prospect's company; we deliberately avoid the long-paragraph 'AI-style' opening that prospects auto-flag and delete. The reply-rate-floor for production sequences is one percent (above the cold-outreach industry average of 0.4%); below that we re-tune.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every sequence variant goes through human review before deployment. Above-confidence outbound sends automatically; below-confidence drafts route to a reviewer queue. Most clients reach 80%+ auto-send by week six, with the human reviewer focused on the borderline messages where context matters more than template.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing tiers and what each one includes</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Engine Pilot at €2,900/month is single-ICP, AI prospecting + qualification + booking, target twenty-five qualified meetings per month after warm-up. Engine Pro at €5,900/month is multi-ICP, multi-channel (email + LinkedIn + web chat), target sixty-plus qualified meetings per month with weekly tuning. Engine Custom Build at €24,000 is the eight-week build for clients with bespoke ICP modelling, custom CRM hooks, or integration with their own enrichment stack — includes ninety days of post-launch tuning.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every tier includes deliverability infrastructure (sending domain, warm-up, daily monitoring), the AI qualification, the calendar booking, the pre-call brief, the cold-list reactivation cadence, and the weekly performance review. There is no per-message billing and no surprise model-credit invoice. Data residency: EU-only inference by default, customer-held encryption keys available on request.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How the engine pairs with the rest of the OARC stack</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The Engine handles the top-of-funnel through to the booked meeting. /services/marketing-automation-suite handles the lifecycle nurture for prospects who are not ready in the current quarter (because most B2B prospects are not ready in the current quarter, and giving up on them is the most common revenue mistake). /services/revenue-automation handles the rest of the post-meeting flow — CRM hygiene, deal-stage hygiene, billing automation, and the customer-success layer.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If your sales team is small (under three closers), running the Engine alone is the right starting point. Add the lifecycle layer once the meeting volume is consistent. Add the wider revenue automation layer once you have enough closed deals to need post-sale ops to scale. We sequence engagements so each one pays back before the next one starts.
            </p>
          </div>
        </div>
      </section>
    );
  }
  