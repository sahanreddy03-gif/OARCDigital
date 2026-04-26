import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import TrustBlock from "@/components/seo/TrustBlock";
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const stack = [
  { name: 'React Native + Expo', role: 'Default cross-platform stack — one codebase shipping to iOS and Android, with EAS Build and over-the-air updates for fortnightly releases.' },
  { name: 'Swift / SwiftUI', role: 'Native iOS where the surface needs deep ARKit, CoreML, HealthKit, or Apple-specific UX language. Built by senior iOS engineers.' },
  { name: 'Kotlin + Jetpack Compose', role: 'Native Android where the use case demands platform-specific behaviour — background services, intents, complex offline-first patterns.' },
  { name: 'Stripe + Revolut Business', role: 'Payments default for Malta operators — Apple Pay, Google Pay, SEPA Direct Debit, EU VAT handling, and recurring subscription billing.' },
  { name: 'Firebase + Sentry', role: 'Push notifications, crash reporting, real-time database where appropriate, and structured error tracking with Slack alerting.' },
  { name: 'Render Frankfurt backend', role: 'Node.js or Next.js API hosted in EU — GDPR-clean by design, daily encrypted backups, log retention aligned to MFSA and IDPC expectations.' },
];

const phases = [
  { week: 'Week 1–2', title: 'Discovery + Spec', detail: 'On-site workshop in Birkirkara, user journey mapping, written feature spec, ER diagram, fixed-price proposal for the build.' },
  { week: 'Week 3–6', title: 'Core Build + First TestFlight', detail: 'Auth, navigation, the primary user flow, backend API, first build to TestFlight and Google Play internal by end of week 6.' },
  { week: 'Week 7–10', title: 'Integrations + Polish', detail: 'Payments, push notifications, third-party APIs, deep linking, App Tracking Transparency wiring, motion polish.' },
  { week: 'Week 11–12', title: 'Submission + Launch', detail: 'Store assets, privacy nutrition labels, data safety form, IDPC-aligned privacy policy, App Store and Play submission.' },
];

const reasons = [
  'React Native by default, native by exception — we recommend the cheaper path unless your spec genuinely needs Swift or Kotlin.',
  'Fortnightly TestFlight builds — the founder always has the actual app on a real iPhone, never just slides and a Loom.',
  'Submission handled end-to-end — store assets, privacy labels, IDPC-aligned policy, App Tracking Transparency, age ratings.',
  'EU-region backend (Render Frankfurt) by default — your customer data never leaves the EU unless your spec demands it.',
];

export default function AppDevelopmentMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">App Development Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">App Development in Malta — React Native and Native iOS/Android, Built in Birkirkara</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds production iOS and Android apps for Malta operators in hospitality, retail, fintech, marine, and iGaming. React Native by default, native Swift and Kotlin where the surface deserves it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Malta Operators Need a Real App, Not a Wrapped Website</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta is a mobile-first market by every measurable signal. Over seventy percent of web traffic to local operator sites is mobile, the daily commute on the X1 and X2 routes is a captive scrolling audience, tourists in Sliema and St Julians are choosing restaurants and excursions on their phones, and almost every hospitality booking made on the islands now starts on iOS or Android. A wrapped-website hybrid app — a thin shell around a webview — looks fine in a sales deck and behaves badly in production: slow first paint, broken offline behaviour, no real push notifications, App Store rejections.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital builds proper mobile apps for that market. React Native with Expo is our default because it lets one senior engineering team ship to both iOS and Android in the same calendar week, with native modules dropped in where the user experience requires them. We move to native Swift or Kotlin only when the spec actually demands it — heavy ARKit work, CoreML on-device inference, complex background services, or platform-specific UX language that simply cannot be faked in a cross-platform layer.
            </p>
            <p className="text-foreground leading-relaxed">
              The Birkirkara HQ matters here in a practical way. Mobile app projects involve a lot of in-person work that asynchronous engagements struggle with — testing the app on real devices in the actual environment (a fine-dining floor, a hotel reception, a yacht marina), capturing screenshots in the right physical setting, watching real users hold the prototype for the first time and noticing where their thumb lands. Being thirty minutes from any client on the islands turns a fortnight of remote feedback loops into a single afternoon working session.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Malta Operators Pick OARC Digital</h2>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The App Stack We Build On</h2>
            <p className="text-muted-foreground mb-6">React Native by default. Native Swift and Kotlin where it earns the cost.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {stack.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 12-Week MVP Sprint</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in {NAP.addressLocality}</h2>
            <TrustBlock variant="visit" />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why an App Compounds for Malta Operators</h2>
            <p className="text-foreground leading-relaxed">
              Once a customer installs your icon on their home screen, you have a direct channel that does not require Meta, Google, or a Wolt commission to reach them. Push notifications, loyalty mechanics, repeat-booking flows, and referral incentives all become available without paying a platform tax on every interaction. For a Malta hospitality group, retail chain, or marine operator, owning the customer relationship through a real app is the closest thing to a permanent acquisition advantage in a market where margins are tight and OTA commissions are not.
            </p>
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

          <RelatedLinks slug="/aeo/app-development-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to brief an app?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a written feature inventory, a recommendation on React Native versus native, and a rough scope.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
