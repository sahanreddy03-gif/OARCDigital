import Link from "next/link";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import RelatedServices from "@/components/RelatedServices";

export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-speakable>
            An AI SDR that books qualified meetings while your closers sleep
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why the SDR role is the right first AI hire for most B2B teams</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              An SDR job has three structural traits that make it the cleanest fit for AI: the work is high-volume, the criteria for success are observable and measurable (qualified meetings booked), and the variance in human output is enormous. A great SDR books fifteen meetings a month; an average one books five; a struggling one books one. The OARC AI SDR Agent is closer to the great-SDR floor than the average-SDR median, and it does it across every working hour of every weekday across every relevant time zone.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It prospects against your defined ICP using Apollo, Cognism, Lusha, ZoomInfo, and LinkedIn Sales Navigator data — GDPR-compliance-checked at source — and runs cold-outreach sequences across email and LinkedIn from your domain. Replies go through the agent&apos;s qualification logic, qualified prospects book directly into your closers&apos; calendars, and the closer arrives at the meeting with a one-page brief instead of a cold-call introduction.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The outbound sequence the AI runs, step by step</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Day 1: a short, plain-text cold email lands in the prospect&apos;s inbox from your sending domain — 4–6 sentences, no HTML flourish, referencing something specific to their business or their role. Day 3: a LinkedIn connection request with a one-line note. Day 7: a follow-up email acknowledging the silence, adding a single relevant data point (a case result, a stat, a competitor movement). Day 12: a final short break-up email that leaves the door open.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              At every step, reply detection runs in real time. A positive or curious reply triggers qualification: the agent asks two to three scoping questions over email to establish budget, timeline, and decision-making authority, then offers two booking slots directly. A negative reply closes the contact gracefully, logs the reason in the CRM, and removes them from sequence. An out-of-office reply pauses and resumes on the return date automatically.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              On LinkedIn, the agent uses a matched persona profile (not your main CEO profile — a dedicated SDR-role LinkedIn account you own) to send connection requests, comment on relevant posts, and follow up in LinkedIn DMs after email opens. The combination typically lifts reply rate by 30–50% over email-only.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What &ldquo;qualified&rdquo; actually means in our model</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We refuse to count meeting-volume vanity numbers. Every engagement defines &ldquo;qualified&rdquo; explicitly in the SOW — typically a fit on ICP firmographics (industry, headcount, geography), a buyer-side persona match (decision-maker or budget-holder, not summer interns), and a signal of present intent (active hiring, recent funding, declared problem in the discovery message). Meetings that do not meet that bar do not count toward the monthly target.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The agent is configured against your specific qualification rubric, not a generic one. For Malta-headquartered B2B SaaS clients selling into EU mid-market, that often means a CET-meeting time, English-language capability on the buyer side, and a deal-size fit (typically €5k–€50k ARR). For service-business clients (digital agencies, consultancies, regulated services) the rubric tilts toward authority signals and project-budget signals.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Cold-email deliverability is a first-class workstream</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Cold-email deliverability is the silent killer of every DIY SDR rollout. Send from the wrong domain and your main inbox lands in spam for actual customers. We treat deliverability as the foundation of the engagement: separate sending domain (e.g. yourcompany.io for a yourcompany.com primary), four-to-six week IP warm-up, daily DKIM / SPF / DMARC monitoring, and reply-rate-based pacing that throttles automatically when the inbox-placement signal degrades.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We monitor inbox placement via Google Postmaster Tools, GlockApps seed-list testing, and reply-rate-by-day tracking. Sequences that show declining reply rates are paused for review, not pushed harder. The discipline here is the difference between a deliverable two-year programme and a two-month rocket that burns out and damages your domain reputation for the year that follows.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Handoff to your human sales team — what the closer receives</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              When a prospect books a meeting, the closer receives a one-page pre-call brief in their inbox: the prospect&apos;s role and company, what they responded to in the sequence, the exact questions they asked, the qualification answers they gave (budget range, timeline, current provider or stack), the meeting objective, and two suggested opening lines based on the conversation thread. The brief lands in the calendar invite, not in a separate Slack thread that gets missed.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Post-call, the agent logs the outcome in the CRM: won (move to onboarding), lost with reason (log and suppress for 90 days), or nurture (re-enter at a timed interval). This closes the loop so the SDR data improves the sequence over time — messages that are producing the wrong-fit meetings get revised; messages that produce meetings that close get weighted higher.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing and the typical first-quarter outcome</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              AI SDR Lite at €1,490/month covers single-ICP outbound on email, with an expected target of fifteen to twenty qualified meetings per month after the warm-up period. AI SDR Pro at €2,900/month adds LinkedIn outreach, multi-ICP coverage, and weekly creative iteration on the message library — the expected target is forty to sixty qualified meetings per month. Custom Build at €18,000 is the project-shaped offer for teams that need bespoke ICP modelling, custom CRM hooks, or integration with their own enrichment stack.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most engagements show their first qualified meeting in week three (after warm-up), and reach steady-state output by week ten. Median pipeline ROI in our book of business is positive inside ninety days at the Lite tier and inside sixty days at the Pro tier — measured as attributable closed revenue, not pipeline-created vanity numbers.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How it works alongside your human sales team</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The AI SDR is most effective when paired with strong closers. It does the prospecting, the cold outreach, the inbound qualification, the meeting booking, and the pre-call brief — your humans do the discovery call, the demo, the proposal, the negotiation, the close. Most clients replace one and a half to two SDR seats within the first ninety days and use the saved budget to hire one additional account executive. The fundamental shift is from junior outbound headcount to senior closing capacity.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If you are also running outbound voice calls, our AI Voice Agent can pair with the SDR for cold-call follow-ups in scripted-narrow scenarios. For the inbound side,{" "}
              <Link href="/services/lead-generation-engine" className="text-orange-600 hover:text-orange-700 underline">our lead generation programme</Link>{" "}
              deepens the inbound qualification stack, and{" "}
              <Link href="/services/marketing-automation-suite" className="text-orange-600 hover:text-orange-700 underline">the marketing automation suite</Link>{" "}
              handles lifecycle nurture for prospects who are not ready in the current quarter.
            </p>
          </div>

          <div className="mt-12 p-5 rounded-xl border bg-muted/40">
            <h2 className="text-base font-semibold mb-3">Part of the OARC AI Employees programme</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              The AI SDR is one of ten pre-built AI roles on the OARC platform. If you are comparing SDR coverage alongside an Admin Agent, Support Specialist, and Appointment Booker — or scoping a full AI employee rollout for your Malta-based team — start at the hub.
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
          <MaltaContextBlock slug="ai-sdr-agent" />

      <RelatedServices slug="/services/ai-sdr-agent" />
      </section>
    );
  }
