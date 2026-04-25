import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const phases = [
  { week: 'Week 1–2', title: 'Discovery + UX', detail: 'User-flow workshop, screen inventory, native vs cross-platform decision, App Store Connect + Play Console setup, written spec.' },
  { week: 'Week 3–8', title: 'Cross-platform Build', detail: 'React Native plus Expo build covering the core flows. Push notifications, deep links, in-app payments wired to Stripe or RevenueCat.' },
  { week: 'Week 9–11', title: 'Backend + Hardening', detail: 'Node.js plus Postgres backend, EU-region hosting, monitoring, crash reporting via Sentry, and TestFlight + Internal Testing rollout.' },
  { week: 'Week 12–14', title: 'Submission + Launch', detail: 'Store listings, screenshots, ASO copy, Apple and Google review handling, production launch and the first OS-update maintenance window.' },
];

const verticals = [
  { name: 'Hospitality + F&B', detail: 'Booking, ordering, loyalty cards, and table management for Malta restaurant groups and hotel chains.' },
  { name: 'iGaming + fintech', detail: 'Native-feel companion apps with KYC flows, biometric auth, and EU-hosted user data.' },
  { name: 'Marine + logistics', detail: 'Skipper, charter, and crew apps with offline sync, GPS tracking, and document capture.' },
  { name: 'Field services', detail: 'Engineer, courier, and inspector apps with route, signature, and photo-evidence flows.' },
];

export default function MobileAppDevelopersMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Mobile App Developers Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Mobile App Developers in Malta — iOS &amp; Android in 12–14 Weeks</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds native-feel iOS and Android apps for Malta-based hospitality, iGaming, marine, and field-services businesses. App Store and Play Store submission included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Scope your app <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Mobile in Malta is a Two-Track Problem</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Building a mobile app in Malta usually means solving two distinct problems at once. Track one is the consumer-facing app the market actually downloads — almost always a polished iOS-first build because Malta&apos;s smartphone share skews heavily Apple, especially among the audiences that matter for premium hospitality, iGaming, and lifestyle brands. Track two is the operational layer behind it — the admin dashboard, the staff-side device app, the integrations with the existing PMS, POS, or back-office system.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital builds both tracks from one Birkirkara team. Most Malta clients ship a React Native cross-platform consumer app — single codebase, faster shipping, lower long-term maintenance — paired with a custom Next.js admin and a Node.js backend in EU-region infrastructure. For a small subset of clients (typically marine and field-services operators with deep hardware needs) we drop down into native Swift or Kotlin where the performance or platform integration warrants it.
            </p>
            <p className="text-foreground leading-relaxed">
              The honest answer to the &quot;native or cross-platform&quot; question: 80% of Malta mobile builds should be cross-platform. The remaining 20% — apps that need offline-first sync over patchy 4G between Comino and Malta, deep BLE integration, or platform-specific UX tied to the latest iOS or Android release — justify the cost premium of going native.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 14-Week Mobile Build</h2>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.title} className="p-5 rounded-xl bg-card border">
                  <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-2">{p.week}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Verticals We Build For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {verticals.map((v) => (
                <div key={v.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{v.name}</div>
                  <div className="text-sm text-muted-foreground">{v.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">App Store + Play Store Submission</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Apple&apos;s review process catches roughly 30% of first-time submissions on edge-case interpretations of guideline 4.2 (minimum functionality), 5.1.1 (data and privacy), or the in-app purchase rules. Google Play is less strict on functionality but stricter on data-safety declarations and target-API-level compliance. Both routinely surprise founders who assumed submission was a formality.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital handles App Store Connect and Google Play Console end-to-end — listing copy, screenshots in all required device sizes, ASO keyword optimisation, privacy manifests, data-safety disclosures, and the dialogue with the Apple App Review team when (not if) the first submission gets a guideline note. Production launch is a milestone in our timeline, not your problem.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {offers.map((o) => (
                <div key={o.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{o.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{o.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{o.unitText === 'MONTH' ? 'per month' : 'fixed project'}</p>
                  <p className="text-sm text-muted-foreground flex-1">{o.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in Birkirkara</h2>
            <div className="rounded-xl border bg-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <address className="not-italic text-foreground leading-relaxed">
                    Level 1, The Brewhouse,<br />
                    Zone 2, Central Business District,<br />
                    Mdina Road, Birkirkara CBD 2010, Malta
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">App Store + Play Store submission included</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region backend infrastructure</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Ongoing OS-update maintenance available</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <RelatedLinks slug="/aeo/mobile-app-developers-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Got an app idea? Let&apos;s scope it.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a rough scope, a recommended platform decision, and a fixed-price proposal for your discovery sprint.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
