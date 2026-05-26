import Link from "next/link";
import TrustBlock from "@/components/seo/TrustBlock";
import RelatedServices from "@/components/RelatedServices";

export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-speakable>
            An AI admin that actually clears your inbox before you arrive
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What an AI Admin Agent is — and what it isn&apos;t</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most Malta SMEs hit a wall when one or two operators end up doing every recurring administrative task: triaging the shared inbox, booking and rescheduling client meetings, filing supplier invoices into the right Drive folder, and chasing missing documents before month-end. The OARC AI Admin Agent is built for exactly that wall — it does the routine, repeatable, well-defined work that a junior PA or a virtual assistant would do, but does it 24 hours a day, in under thirty seconds per task, and without forgetting the follow-up two weeks later.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It is not a chatbot, and it is not a replacement for a senior assistant. The agent runs as a managed service inside your Google Workspace or Microsoft 365 tenant, with least-privilege OAuth scopes, audit logging, and a human-in-the-loop review queue for anything below a configured confidence threshold. Senior PAs use it the way a senior engineer uses a junior — to absorb the obvious volume so the human time goes to judgement work.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What the agent does between 8am and 9am — before your team logs on</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Before your first team member opens their laptop, the Admin Agent has already processed the overnight inbox: flagged the three emails that need a human reply by 10am, drafted responses to the twelve that are routine, filed the four supplier confirmations into the correct Drive folders, declined the meeting request that conflicts with the quarterly planning block, and sent a reminder to the contractor whose NDA has been outstanding for six days.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The average production client sees inbox triage complete before 8:30am, a daily action list in Slack by 9:00am, and zero missed follow-ups across the working week. What used to take two hours of the ops manager&apos;s morning takes twelve minutes of human review. The rest is verification and sign-off, not handling.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Malta SMEs deploy this first</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Malta sits in a particular hiring squeeze. The local labour pool for skilled administrative talent is thin, multilingual EU candidates are expensive, and turnover for EA / PA roles in Sliema and Valletta finance houses runs above twenty percent annually. The maths gets ugly: a properly-trained PA at €32–42k fully-loaded compensation, with a re-recruit-and-onboard cost of roughly €18k every time someone leaves. That is the budget the Admin Agent compresses.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Production deployments we run from Birkirkara cover bilingual English / Maltese correspondence common to local hospitality groups, the bilingual English / Italian flows used by Maltese real-estate agencies serving Sicilian buyers, and the all-English ops inboxes used by EU SaaS scaleups headquartered on the islands. The training data and the prompt voice card are tuned per client during onboarding — the agent does not arrive sounding like generic AI.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What the client receives every week</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every Friday the principal receives a one-page written summary: total tasks handled, auto-send rate on outbound replies, tasks routed to human review with reason codes, follow-ups that closed in the week, and any SOPs that surfaced exception cases requiring a rule update. There is no dashboard login required; the summary arrives in the inbox.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Weekly tuning calls in the first ninety days cover reply quality, exception handling, and prompt drift. Most clients reach 80–85% auto-approval by week six and steady-state by month three, at which point tuning cadence drops to monthly unless a significant SOP changes.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How we deploy it across your stack</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every deployment starts with a one-week SOP capture. We sit with the human owner of each recurring workflow — typically the office manager, head of operations, or executive assistant — and document the steps in plain English, the exception cases, and the criteria for human escalation. That document becomes the runbook the agent works to, and the same document is what an internal team can use to operate the agent without us six months later.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Week two wires the integrations: Gmail or Outlook for inbox, Google Calendar or Microsoft 365 for scheduling, Drive or SharePoint for document filing, plus any line-of-business tools (Xero, HubSpot, Salesforce, your ERP) the SOPs touch. Week three is paired-review — the agent runs alongside the human owner, every action queued for approval. By week four most clients are at 70–80% auto-approval, and we shift to weekly tuning calls.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Industries where this is already running in Malta</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Hospitality groups managing multiple properties use it for reservation overflow, supplier correspondence, and pre-arrival guest briefings. Financial services firms in Valletta and Sliema use it for client onboarding document chasing, meeting scheduling across CEST and GMT time zones, and compliance-adjacent filing workflows. Real-estate agencies use it for portal enquiry triage, viewing confirmation flows, and the bilingual English/Italian/Maltese correspondence that dominates a typical agency inbox.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Professional services firms — architects, engineering consultancies, legal practices — use it to handle the scheduling-heavy intake process: initial enquiry to scoping call to proposal sending to follow-up, all tracked in the CRM without a human touching any step below proposal review.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Investment, ROI, and what&apos;s actually included</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Solo Operator deployments start at €990/month for a single user with one core SOP, and most clients recover the monthly cost inside six weeks from inbox time alone. Team Admin Agent at €2,400/month covers up to ten seats with three SOPs and is the most common Malta SME entry point. Operations Pod at €5,800/month is for multi-team rollouts that need a dedicated solutions engineer and custom CRM / ERP connectors.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every tier includes onboarding, weekly tuning during the first 90 days, the audit log, the human-review queue, and quarterly business reviews. EU-only inference (Azure OpenAI West Europe) and customer-held encryption keys are available on Operations Pod. There is no per-action billing, no surprise model-credit invoice — the monthly retainer covers it.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where this fits next to your other AI hires</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The Admin Agent is the foundation. Once the recurring administrative load is offloaded, most clients add a second agent within ninety days — typically the{" "}
              <Link href="/services/ai-sdr-agent" className="text-orange-600 hover:text-orange-700 underline">AI SDR</Link>{" "}
              for outbound, the{" "}
              <Link href="/services/ai-support-specialist" className="text-orange-600 hover:text-orange-700 underline">AI Support Specialist</Link>{" "}
              for tier-one customer service, or the{" "}
              <Link href="/services/ai-appointment-booker" className="text-orange-600 hover:text-orange-700 underline">AI Appointment Booker</Link>{" "}
              for hospitality or clinic scheduling overflow. Because every agent on the OARC platform shares the same data layer and audit infrastructure, adding the second agent is a fortnight, not a project.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If you are evaluating multiple admin / EA tooling options — Lindy, Relevance AI, Cassidy, MS Copilot — the practical difference is that OARC ships and operates the agent for you, in EU regions, with humans who answer the phone in Malta time zone when something needs tuning. The product is the managed service, not the model.
            </p>
          </div>

          <div className="mt-12 p-5 rounded-xl border bg-muted/40">
            <h2 className="text-base font-semibold mb-3">Part of the OARC AI Employees programme</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              The Admin Agent is one of ten pre-built AI roles available through the OARC platform. If you are scoping a broader AI employee rollout — or want to compare the Admin Agent alongside the SDR, Support Specialist, and Appointment Booker — start at the AI Agents hub or the full employee roster.
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

          <div className="mt-12">
            <TrustBlock variant="visit" />
          </div>
        </div>

      <RelatedServices slug="/services/ai-admin-agent" />
      </section>
    );
  }
