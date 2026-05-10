import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const SCHEMA = SERVICE_SCHEMAS["email-marketing"];

const platforms = [
  {
    name: "Klaviyo",
    best: "Shopify and WooCommerce ecommerce — best-of-breed revenue attribution, predictive segmentation, and product-feed personalisation. Default choice when 60% or more of revenue moves through email.",
  },
  {
    name: "Mailchimp",
    best: "B2C content brands and SMB ecommerce under 25,000 contacts. Cheapest path to a working welcome flow and a weekly broadcast when revenue attribution is not yet the bottleneck.",
  },
  {
    name: "ActiveCampaign",
    best: "Service businesses, agencies, and clinics with longer sales cycles and conditional automations spanning email, SMS, and CRM tasks. Strong sales-pipeline integration in the same tool.",
  },
  {
    name: "HubSpot",
    best: "B2B teams that want the email list and the sales CRM on one contact record. Fits when marketing-qualified leads need to hand off cleanly to a sales rep with full context.",
  },
  {
    name: "Customer.io",
    best: "Product-led SaaS with event-driven onboarding, behavioural triggers from the application, and high-volume transactional sends that need engineering control.",
  },
];

const lifecycleFlows = [
  {
    title: "Welcome series",
    detail:
      "5–7 emails over the first 14 days. Sets expectations, delivers the lead-magnet promise, escalates from brand introduction to product education to first soft conversion. Single primary call to action per send.",
  },
  {
    title: "Abandoned cart and abandoned checkout",
    detail:
      "Three sends at +1 hour, +24 hours, and +72 hours with social proof, FAQ handling, and a soft incentive on the third send only. Recovers 8–14% of abandoned baskets in Malta consumer accounts.",
  },
  {
    title: "Post-purchase and review request",
    detail:
      "Thank-you, shipping notification, review request timed to product-arrival, and a replenishment reminder for consumables. Lifts repeat-purchase rate and Google or Trustpilot review velocity.",
  },
  {
    title: "Win-back and sunset",
    detail:
      "Quarterly automated sweep of disengaged subscribers — soft opener, value reminder, and a sunset email that protects domain reputation by removing chronic non-openers from active sending.",
  },
  {
    title: "Browse abandonment and price-drop",
    detail:
      "Triggered from product-view events for high-intent categories. Price-drop and back-in-stock alerts run from inventory webhooks and consistently rank in the top three revenue-per-recipient flows.",
  },
];

const triggers = [
  {
    source: "Shopify",
    events: "Cart created, checkout started, order placed, order fulfilled, refund issued, customer created.",
  },
  {
    source: "Stripe",
    events: "Subscription created, trial ending, payment failed, invoice paid, subscription cancelled.",
  },
  {
    source: "HubSpot / Salesforce",
    events: "Lifecycle stage change, deal stage moved, meeting booked, form submitted, lead score crossed threshold.",
  },
  {
    source: "Booking and PMS",
    events: "Booking confirmed, booking cancelled, no-show recorded, post-stay or post-appointment review window opened.",
  },
];

export default function EmailMarketingContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="absolute inset-0 opacity-25">
            <img
              src="/attached_assets/marketing-automation-optimized.webp"
              alt="Email marketing automation flow diagram on a dashboard"
              className="w-full h-full object-cover"
              data-testid="img-hero-email-automation"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-900/40" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">Email Marketing Automation</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Automation &amp; Lifecycle</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Email Marketing Automation for Malta Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and Customer.io — built, monitored, and reported on monthly by a Birkirkara team that owns deliverability, segmentation, and triggered revenue end-to-end.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-book-audit">Book an automation audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
            <p className="mt-6 text-xs text-zinc-500" data-testid="text-last-updated">Last updated: 10 May 2026</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Automation, Not Broadcast</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta accounts we audit are still treating email as a weekly broadcast channel — one campaign, one segment, one send. Automation flips that model. The same list, with five well-built triggered flows in place, will out-earn a year of broadcast effort because the messages reach a subscriber at the moment of intent rather than on a calendar the marketer guessed at. Welcome flows convert 4–6x better than a one-off welcome blast. Abandoned-cart sequences recover revenue that would otherwise leak silently. Post-purchase replenishment compounds repeat-rate without any additional acquisition spend.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital is platform-agnostic by design — we run Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and Customer.io daily and pick the platform that matches your list size, list source, and revenue model. The work is the same on every platform: clean authentication, segmentation that maps to behaviour, triggered flows wired into the systems that already record buyer intent, and reporting that answers what each flow paid back this month.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Platforms We Work With</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {platforms.map((p) => (
                <div key={p.name} className="p-5 rounded-xl bg-card border" data-testid={`card-platform-${p.name.toLowerCase()}`}>
                  <h3 className="font-bold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.best}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Platform recommendation comes out of the discovery call, not a default. We have rebuilt accounts in every direction — Mailchimp into Klaviyo for an ecommerce client whose revenue attribution was broken, Klaviyo into ActiveCampaign for a clinic that needed conditional SMS branches, HubSpot into Customer.io for a SaaS product whose onboarding events lived in the application database.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Lifecycle Flows We Build First</h2>
            <div className="space-y-4">
              {lifecycleFlows.map((f, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold">{f.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{f.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Every flow ships with documented triggers, exit conditions, and a kill switch — so it can be paused for a sale, a launch, or a reputation incident without losing the underlying configuration. Monthly reports break revenue out by flow versus campaign so the client can see exactly which automations are doing the compounding work.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Triggered Campaigns From Your Stack</h2>
            <p className="text-foreground leading-relaxed mb-6">
              The most valuable emails in any account are the ones triggered by an event the buyer already cared about. We wire your platform directly into the systems that record those events — Shopify, Stripe, HubSpot, Salesforce, your booking platform — so triggers fire in seconds, not on a daily sync.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {triggers.map((t) => (
                <div key={t.source} className="p-5 rounded-xl bg-card border" data-testid={`card-trigger-${t.source.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <h3 className="font-bold mb-1">{t.source}</h3>
                  <p className="text-sm text-muted-foreground">{t.events}</p>
                </div>
              ))}
            </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Deliverability: SPF, DKIM, DMARC</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Since Google and Yahoo published their bulk-sender requirements in February 2024, deliverability is a technical discipline as much as a creative one. Sending domains without correctly-configured SPF, DKIM, and DMARC alignment are silently filtered into Promotions or the spam folder. Most Malta sending domains we audit have at least one of the three records misconfigured — over-10-lookup SPF, missing platform-specific DKIM selectors, or a DMARC policy stuck on `p=none` reporting mode forever.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The fix is methodical, not creative. We flatten and consolidate the SPF record, publish DKIM keys for every active sender (Klaviyo, Mailchimp, ActiveCampaign, and HubSpot each need their own selector — they cannot share), align the From-domain so DMARC actually validates, and move DMARC from `p=none` to `p=quarantine` once a clean two-week window confirms alignment. One-click unsubscribe headers are added to every campaign because both Gmail and Yahoo now require them on bulk senders.
            </p>
            <p className="text-foreground leading-relaxed">
              Postmaster Tools, Microsoft SNDS, and the platform's own deliverability dashboard are checked weekly. Inbox placement is measured against Apple Mail, Gmail, Outlook, and Yahoo separately because the Malta consumer mailbox mix favours Apple Mail and Gmail in roughly equal measure, and Outlook still dominates B2B.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Segmentation That Actually Changes Revenue</h2>
            <p className="text-foreground leading-relaxed mb-4">
              At the size of the Maltese market, persona-based segmentation is theatre. Behaviour beats demographics every time. A typical account ends up with 12–18 active segments built from product views, cart events, purchase recency, lifetime-value bands, and engagement decay — each tied to at least one triggered campaign. Recency-segmented broadcasts routinely double revenue per recipient compared to a single send to the whole list.
            </p>
            <p className="text-foreground leading-relaxed">
              Every segment definition is documented in plain English in the client workspace, so a future in-house marketer can edit without rebuilding the logic from scratch. We deliberately avoid platform-locked custom properties when a native event will do the same job — segments survive a future platform migration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Reporting That Stands Up to a Finance Review</h2>
            <p className="text-foreground leading-relaxed">
              Every retainer reports against four durable metrics rather than vanity ones. Revenue per recipient is the dollar impact of each send, more durable than open rate after Apple Mail Privacy Protection and corporate inbox scanning. Per-flow attributed revenue isolates what each automation paid back this month versus the campaign calendar. List growth net of unsubscribes and suppressions measures the real growth of the audience. Lifetime-value lift compares subscribers who entered a flow against those who did not, controlling for acquisition channel — the only metric that proves automation is moving the business forward rather than cannibalising existing demand. Monthly reports include written commentary, the raw export, and the underlying flow definitions so a future in-house marketer can pick up where we left off without rebuilding the measurement model.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent retainers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col" data-testid={`card-offer-${offer.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
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

          <section className="mb-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">Email Marketing Automation vs Email Creative — design partner inside the same team</h2>
            <p className="text-sm text-muted-foreground mb-4">
              This page is the platform and automation side of email — Klaviyo, Mailchimp, ActiveCampaign, HubSpot, the deliverability stack, the segmentation logic, the triggered flows wired into Shopify and Stripe. The visual design of every send — templates, modular blocks, mobile-first layouts, on-brand campaign creative — is the responsibility of <strong className="text-foreground">Email Creative</strong>, our design-led email service. The two work as one team on most accounts: automation builds the flow, creative ships the email that makes the flow convert.
            </p>
            <Link href="/services/email-creative" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm" data-testid="link-email-creative">
              Email Creative — template design and on-brand campaign visuals <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <RelatedLinks slug="/services/email-marketing" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want a Free Email Automation Audit?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will review your platform, score deliverability, list the broken or missing flows, and send you a 30-day automation plan with no obligation.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-request-audit">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
