import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Building2, Users, Globe, Camera, TrendingUp, Brain } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const heroImage = "/attached_assets/stock_images/real_estate_agent_pr_d5449235.jpg";

export const metadata: Metadata = {
  title: "Real Estate Marketing Agency Malta | Property Lead Generation & Video | OARC Digital",
  description: "Malta real estate marketing: qualified buyer lead generation, property video production, international buyer campaigns, and AI-powered enquiry qualification for agencies and developers.",
  alternates: { canonical: "https://oarcdigital.com/industries/real-estate" },
  openGraph: {
    title: "Real Estate Marketing Agency Malta | OARC Digital",
    description: "Qualified buyer leads, property video, international buyer campaigns, and AI enquiry qualification for Malta real estate agencies and developers.",
    url: "https://oarcdigital.com/industries/real-estate",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Marketing Agency Malta | OARC Digital",
    description: "Property lead generation, video production, and AI-powered enquiry qualification for Malta real estate agencies.",
  },
};

const painPoints = [
  {
    icon: Building2,
    title: "Portal listings indistinguishable from competitors",
    detail: "Every agency in Malta is on Property Malta, Frank Salt's platform, and the international portals. The agencies that win are the ones with video tours, professional photography, and paid campaigns driving traffic to their own landing pages — not just the portal's default listing.",
  },
  {
    icon: Globe,
    title: "International buyers are missed at the first contact",
    detail: "Over 40% of Malta property enquiries originate outside the islands — UK retirees, Italian buyers, EU citizenship applicants. These buyers email in English, Italian, French, or German at 11pm on a Sunday. Without a 24/7 multilingual qualification system, the reply comes 18 hours later and the buyer has already booked a viewing with a competitor.",
  },
  {
    icon: TrendingUp,
    title: "Senior agent time wasted on unqualified enquiries",
    detail: "The Malta property market has a high tyre-kicker rate — particularly from citizenship-by-investment enquiries and leisure browsers. Without triage automation, senior agents spend half their week on contacts who will never buy, while serious buyers wait for a callback.",
  },
];

const services = [
  {
    slug: "video-production",
    title: "Property Video Production",
    desc: "Cinematic property walkthroughs, aerial footage, development showcases, and agent profile videos. Our productions are built for portal thumbnail differentiation and social media performance.",
    icon: Camera,
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising — Buyer Targeting",
    desc: "Google Ads targeting buying-intent search terms ('buy apartment Malta', 'property for sale Sliema'). Meta lead gen campaigns reaching UK, Italian, Scandinavian and Middle Eastern buyers. Retargeting sequences that follow portal visitors with your listings for 90 days.",
    icon: TrendingUp,
  },
  {
    slug: "social-media-creative-management",
    title: "Social Media & Content",
    desc: "Property showcases, market insight posts, agent credibility content, and development launch campaigns on Instagram and Facebook. Content strategy built around the Malta property buyer's 3–6 month search cycle.",
    icon: Users,
  },
  {
    slug: "ai-real-estate-agent",
    title: "AI Real Estate Agent",
    desc: "An AI that reads every portal enquiry 24/7, qualifies buyers on budget, timeline, and intent, books viewings into the right agent's calendar, and briefs the agent before the meeting. Responds in English, Italian, Maltese, French, German, Spanish, and Russian.",
    icon: Brain,
  },
  {
    slug: "web-design",
    title: "Lead-Generating Property Website",
    desc: "Agency websites with property search, advanced filters, map view, mortgage calculator, and a valuation request tool. Conversion-optimised for both local buyers and international investors.",
    icon: Globe,
  },
  {
    slug: "ai-sdr-agent",
    title: "AI SDR — Developer Outreach",
    desc: "For developers and larger agencies: an AI SDR that identifies and contacts architects, letting agents, property solicitors, and institutional investors in key source markets — qualifying relationships that become exclusive mandates.",
    icon: Building2,
  },
];

const buyerMarkets = [
  { market: "UK", detail: "Retirees and semi-retirees drawn by climate, low crime, English-speaking environment, and EU residency access. Typical search horizon: 9–24 months. Price ceiling: €350k–€650k." },
  { market: "Italy (Sicily, Lazio)", detail: "Cross-channel buyers — proximity to Sicily makes Malta a logical second property or relocation. Strong in the Cottonera and central Malta markets. Typically Italian-language outreach is essential." },
  { market: "EU Citizenship applicants", detail: "High-net-worth buyers qualifying for Malta's citizenship-by-investment programmes. Require a compliant rental or purchase. Budgets typically €375k+. This segment drives the Sliema, St Julian's, and Valletta premium market." },
  { market: "Remote working professionals", detail: "EU-based professionals leveraging Malta's Nomad Residence Permit and Digital Nomad Visa. Typically younger buyers in the €200k–€350k bracket. Strong on Instagram and LinkedIn." },
];

const results = [
  { metric: "40%+", label: "of Malta property enquiries", note: "originate outside the islands" },
  { metric: "30 min", label: "response window", note: "to win the inquiry before competitors" },
  { metric: "3–6 mo", label: "buyer search cycle", note: "requiring a long nurture strategy" },
];

const faqs = [
  {
    q: "Can you target international property buyers in specific markets?",
    a: "Yes — we run campaigns targeting buyers in the UK, Italy, Germany, Scandinavia, and the Middle East who are actively searching for Malta properties, using language and creative tailored to each market. We segment by buyer persona (retiree, investor, citizenship applicant, remote worker) and run separate message tracks for each.",
  },
  {
    q: "Do you produce property photography and video in Malta?",
    a: "Video production is one of our core services. We create professional property walkthroughs, aerial footage using licensed drone operators, and development showcase videos that stand out from standard portal listings. For photography, we coordinate with trusted Malta-based photographers as part of a broader content package.",
  },
  {
    q: "How do you qualify leads — particularly for high-value properties?",
    a: "The OARC AI Real Estate Agent reads every enquiry 24/7 in the buyer's language, qualifies on budget, timeline, financing situation, and intent, and routes accordingly. High-value signals (cash buyer, citizenship programme, declared budget above €1.5m) trigger an immediate brief to a senior agent. All other enquiries go into segmented nurture sequences calibrated to the Malta market's 3–6 month search cycle.",
  },
  {
    q: "Can you help with new development launch campaigns?",
    a: "Yes — we build end-to-end launch campaigns for new developments: project branding and visual identity, landing page, paid campaigns across Google and Meta, social media strategy, and an AI system to handle the enquiry volume that a successful launch generates. We have experience with both residential and mixed-use developments in the Sliema, St Julian's, and Three Cities areas.",
  },
  {
    q: "What platforms do you run paid campaigns on for property?",
    a: "Google Search (capturing active buying intent), Meta (Facebook + Instagram, for awareness and retargeting), and LinkedIn (for developer outreach and B2B mandates). For UK buyers, we also run targeted YouTube pre-roll campaigns against property-research content. We do not use portal-only strategies — the goal is to own the buyer relationship, not share it with the platform.",
  },
];

export default function RealEstateMaltaPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Real estate marketing Malta" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-white">Real Estate</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <MapPin className="w-3 h-3 text-orange-400" />
              <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">Malta Real Estate Marketing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-speakable>
              Real Estate Marketing Agency Malta
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl leading-relaxed" data-speakable>
              Qualified buyer lead generation, property video production, international buyer campaigns, and AI-powered enquiry qualification — for Malta agencies and developers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  Book a strategy call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services/ai-real-estate-agent">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  See the AI Real Estate Agent
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">

          {/* Market Context */}
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">The Malta Property Market</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">One of Europe&apos;s most competitive property markets — on four square kilometres of rock</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Malta&apos;s property market is structurally different from most EU markets. Constrained land supply, high international demand (EU citizenship programmes, remote worker relocation, UK retirement migration), and a large number of local agencies competing for a finite number of listings create a market where marketing quality — not just price — determines which agency gets the mandate.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The agencies that dominate — Frank Salt, Dhalia, RE/MAX Malta, Belair, Engel &amp; Völkers — all have recognisable brands, professional video content, and international buyer reach. Independent agencies and smaller developers competing in the same market need the same marketing infrastructure, without the same marketing headcount.
            </p>
          </section>

          {/* Pain Points */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Where Malta agencies lose revenue every week</h2>
            <div className="space-y-4">
              {painPoints.map((p, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border flex items-start gap-5">
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results/metrics */}
          <section className="bg-zinc-950 text-white rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">The Malta Real Estate Buyer in Numbers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {results.map((r, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-orange-400 mb-2">{r.metric}</div>
                  <div className="text-white font-medium mb-1">{r.label}</div>
                  <div className="text-zinc-500 text-sm">{r.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Services for Malta Real Estate Agencies &amp; Developers</h2>
            <p className="text-muted-foreground mb-8">Every service below is available individually or as a packaged programme. Most agencies start with video + paid, then add AI qualification once lead volume reaches 50+ enquiries per month.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s) => (
                <Link href={`/services/${s.slug}`} key={s.slug} className="block p-6 rounded-xl bg-card border hover:border-orange-400 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <s.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-orange-600 transition-colors">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* International buyer markets */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">International Buyer Markets We Target</h2>
            <p className="text-muted-foreground mb-6">Each buyer market has a different language, search behaviour, and buying timeline. We build separate message tracks for each.</p>
            <div className="space-y-3">
              {buyerMarkets.map((bm, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border flex items-start gap-4">
                  <span className="font-bold text-orange-600 text-sm w-24 flex-shrink-0">{bm.market}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{bm.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Real Estate Agent spotlight */}
          <section className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">AI Real Estate Agent — never miss an enquiry again</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Portal enquiries arrive at 11pm on a Sunday in Italian. By the time a human reads and replies — 14 hours later — the buyer has already booked a viewing with Frank Salt. The OARC AI Real Estate Agent connects to your portal feeds and inbound web channels, reads every enquiry 24 hours a day, qualifies buyers on budget, timeline, financing, and intent, books viewings into the right agent&apos;s calendar, and sends the agent a written briefing before the meeting.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              It responds in English, Maltese, Italian, French, German, Spanish, and Russian. High-value signals — declared budget above €1.5m, cash-buyer mention, citizenship-programme enquiry — route to a senior agent within minutes. Lower-priority enquiries enter a calibrated long-cycle nurture sequence rather than being discarded.
            </p>
            <Link href="/services/ai-real-estate-agent" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              Full AI Real Estate Agent details <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MaltaContextBlock */}
          <MaltaContextBlock slug="real-estate-agency-malta" />

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>

          <RelatedLinks slug="/industries/real-estate" />

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Real Estate Marketing Audit</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We will review your portal listings, paid campaigns, and enquiry handling — and send you a prioritised action plan in five working days.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
                Book the audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </article>
      </main>
    </Layout>
  );
}
