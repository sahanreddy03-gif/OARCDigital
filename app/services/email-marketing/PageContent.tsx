import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["email-marketing"];

const flows = [
  { title: "Welcome / onboarding", detail: "5-email sequence triggered on signup. Sets expectations, delivers immediate value, and primes the first conversion. Typical open rate 50–65% in Malta consumer lists, 35–45% B2B." },
  { title: "Abandoned cart and browse", detail: "For ecommerce: a 3-email sequence at +1h, +24h, +72h with social proof, FAQ, and a soft incentive on the third send. Recovers 8–14% of abandoned baskets." },
  { title: "Post-purchase and review", detail: "Thank-you email, shipping notification, review request, and replenishment reminder. Drives repeat-purchase rate and lifts Google or Trustpilot review velocity." },
  { title: "Re-engagement and win-back", detail: "Quarterly automated sweep of disengaged subscribers — a soft opener, a value reminder, and a sunset email that protects domain reputation." },
  { title: "Newsletter and broadcast", detail: "Weekly or monthly editorial broadcasts written by our team and approved by you, with subject-line A/B tests and segment-by-segment send-time optimisation." },
];

const platforms = [
  { name: "Klaviyo", best: "Shopify and ecommerce — top-tier segmentation and revenue attribution." },
  { name: "Mailchimp", best: "Small business and B2C with simple needs and existing lists." },
  { name: "HubSpot", best: "B2B with sales-aligned funnels and CRM-driven personalisation." },
  { name: "ActiveCampaign", best: "Service businesses with longer sales cycles and complex automations." },
];

export default function EmailMarketingContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">Email Marketing</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Lifecycle &amp; Retention</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Email Marketing for Malta Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Klaviyo, Mailchimp, HubSpot, and ActiveCampaign — designed, written, automated, and reported on monthly by a Birkirkara team that lives in your account every week.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book an email audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Email Is Still the Highest-ROI Channel</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta brands underinvest in email and overinvest in paid social. The maths does not support that allocation. A list of 5,000 engaged subscribers, sent to weekly with proper segmentation and automated lifecycle flows, will typically out-earn the same brand&apos;s entire Meta ad spend — at a fraction of the cost. The reason is simple: email reaches people who already opted in, on a channel they check daily, with no algorithm in between.
            </p>
            <p className="text-foreground leading-relaxed">
              The reason email underperforms in most accounts is not the channel. It is operational neglect — broken automations, unsegmented broadcasts, weak subject lines, and zero attribution back to revenue. OARC Digital fixes those four things on every account inside the first 60 days.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Five Flows Every Account Needs</h2>
            <div className="space-y-4">
              {flows.map((f, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2"><span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span><h3 className="font-bold">{f.title}</h3></div>
                  <p className="text-muted-foreground pl-8">{f.detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Platforms We Run Daily</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {platforms.map((p) => (
                <div key={p.name} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.best}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">No preference for any one tool — we recommend the platform that fits your list size, list source, and revenue model.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Retainer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCHEMA.features.map((f) => (
                <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Deliverability Is Not Optional</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Since Google and Yahoo&apos;s 2024 sender requirements, email deliverability is a technical discipline as much as a creative one. Domains without correctly-configured SPF, DKIM, and DMARC are silently filtered into the Promotions tab — or worse, the spam folder. Most Malta brands we audit have at least one of these three records misconfigured.
            </p>
            <p className="text-foreground leading-relaxed">
              Every OARC engagement begins with a deliverability audit, fixes the three records, sets up subdomain warming if you are migrating platforms, and monitors postmaster data weekly. We measure inbox placement against Apple Mail, Gmail, Outlook, and Yahoo separately because Malta&apos;s consumer mailbox mix favours Apple Mail and Gmail in roughly equal measure.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Deliverability Is Half the Job</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Most Malta-based brands we audit have at least one deliverability problem hiding in plain sight. The most common failures are missing or misaligned DMARC, SPF records that exceed the 10-DNS-lookup limit, DKIM signing that breaks on forwarding, and shared IP reputation damage from an old marketing platform that someone forgot to disable. Each one quietly erodes inbox placement until a campaign sends and only 60% of subscribers ever see it.
              </p>
              <p className="text-foreground leading-relaxed">
                We start every email retainer with a deliverability audit covering authentication records, sender reputation across Microsoft and Google, list hygiene, engagement segmentation, and unsubscribe flow correctness. The audit produces a written remediation plan and we resolve the findings before a single new send goes out — because firing more campaigns at a damaged reputation only deepens the hole.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Lifecycle Email That Mirrors a Real Buyer Journey</h2>
              <p className="text-foreground leading-relaxed mb-4">
                A welcome flow is not a campaign — it is the first product experience for half of your subscribers. Our welcome flows are sequenced to mirror the buyer's actual journey, with content that escalates from brand introduction to product education to soft conversion across five to seven sends. Every send has a single primary call to action, a single secondary reading suggestion, and a measurable engagement event we track downstream against revenue.
              </p>
              <p className="text-foreground leading-relaxed">
                Beyond welcome, we operate post-purchase, browse-abandonment, win-back, and quarterly re-engagement flows. Every flow has documented triggers, exit conditions, and a kill switch so it can be paused for a sale, a launch, or a reputation incident without losing the underlying configuration. Monthly reports break revenue out by flow versus campaign so the client can see exactly which automations are doing the compounding work and which campaigns are contributing incremental lift.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Reporting and Revenue Attribution That Stands Up</h2>
            <p className="text-foreground leading-relaxed">
              Every email retainer reports against three durable metrics rather than vanity ones. Net new subscribers measures the real growth of the audience after suppressions and unsubscribes. Revenue per recipient measures the dollar impact of each send rather than open or click rates, which have been increasingly distorted by Apple Mail Privacy Protection and corporate inbox scanning. Lifetime value lift compares the LTV of subscribers who entered a flow versus those who did not, controlling for acquisition channel — the only metric that proves email is actually moving the business forward rather than cannibalising existing demand. Reports include written commentary, the raw export, and the underlying flow definitions so a future in-house marketer can pick up where we left off without rebuilding the measurement model.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent retainers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <MaltaContextBlock slug="email-marketing" />
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {SCHEMA.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>
          <RelatedLinks slug="/services/email-marketing" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want a Free Email Audit?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will review your account, flag the broken automations, and send you a 30-day improvement plan with no obligation.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
