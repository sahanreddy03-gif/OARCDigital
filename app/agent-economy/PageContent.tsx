import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import Link from "next/link";
import { NAP, ADDRESS_ONE_LINE } from "@/lib/seo/nap";
import {
  ArrowRight,
  Phone,
  Search,
  Palette,
  Send,
  MapPin,
  Mic,
  Sparkles,
  Network,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface Props {
  faqs: FAQItem[];
}

type EconomyAgent = {
  id: string;
  name: string;
  job: string;
  channel: string;
  channelKind: "web/search" | "creative" | "outreach" | "GBP" | "voice";
  ownerGets: string;
  serviceHref: string;
  serviceLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  icon: "search" | "palette" | "send" | "map" | "mic";
};

const AGENTS: EconomyAgent[] = [
  {
    id: "seo-aeo",
    name: "SEO / AEO Agent",
    job: "Make OARC and client pages the best agent-citable Malta source — entity facts, FAQ, speakable copy, internal graph.",
    channel: "Web + search (AEO / GEO / LEO)",
    channelKind: "web/search",
    ownerGets: "Pages structured for Google + answer engines; fresh facts agents can cite; clear path to book.",
    serviceHref: "/services/seo-services",
    serviceLabel: "SEO services",
    secondaryHref: "/aeo/ai-agents-business-malta",
    secondaryLabel: "AI agents AEO hub",
    icon: "search",
  },
  {
    id: "creative",
    name: "Creative Agent",
    job: "Ship brand, social, and campaign assets that create demand — then hand warm attention to AI staff and voice.",
    channel: "Web + creative surfaces",
    channelKind: "creative",
    ownerGets: "Owner-hero creative tied to the same brief as agents and automation — not a separate social shop.",
    serviceHref: "/creative",
    serviceLabel: "Creative",
    secondaryHref: "/services/social-media-creative-management",
    secondaryLabel: "Social creative",
    icon: "palette",
  },
  {
    id: "outreach",
    name: "Outreach Agent",
    job: "Qualify and follow up across email, WhatsApp, and LinkedIn — first contact that books calendars, not spam.",
    channel: "Email · WhatsApp · LinkedIn",
    channelKind: "outreach",
    ownerGets: "Always-on qualification and sequencing wired to CRM — warm leads, not Facebook-group noise.",
    serviceHref: "/services/ai-sdr-agent",
    serviceLabel: "AI SDR agent",
    secondaryHref: "/services/lead-generation",
    secondaryLabel: "Lead generation",
    icon: "send",
  },
  {
    id: "gbp",
    name: "GBP Agent",
    job: "Keep Google Business Profile accurate, answered, and NAP-consistent so local + voice agents cite the right place.",
    channel: "Google Business Profile",
    channelKind: "GBP",
    ownerGets: "Reviews answered, posts drafted, entity/NAP locked — local pack and LEO-ready presence.",
    serviceHref: "/services/reputation",
    serviceLabel: "Reputation",
    secondaryHref: "/services/seo-services",
    secondaryLabel: "Local SEO",
    icon: "map",
  },
  {
    id: "voice",
    name: "Voice Agent",
    job: "Answer and book on the phone 24/7 — Voice AI Worker as the live channel for missed-call revenue.",
    channel: "Voice / phone",
    channelKind: "voice",
    ownerGets: "Missed calls recovered, appointments booked, handoff to humans with context.",
    serviceHref: "/voice-ai-worker",
    serviceLabel: "Voice AI Worker",
    secondaryHref: "/services/ai-staff",
    secondaryLabel: "AI staff",
    icon: "mic",
  },
];

const RAILS = [
  {
    title: "Agentic web",
    body: "Agents live publicly — discoverable pages, not buried demos — so humans and machines both find the work.",
  },
  {
    title: "Capability registry",
    body: "Each agent card is a clear capability: job, channel, owner outcome, and the real OARC service that ships it.",
  },
  {
    title: "Entity graph + NAP",
    body: `${ADDRESS_ONE_LINE}. Same name, address, phone across schema and copy so AEO/GEO/LEO cite one entity.`,
  },
  {
    title: "MCP-action endpoints",
    body: "Callable actions where the site already supports contact: book (/contact), call, WhatsApp quote — no fake APIs.",
  },
];

function AgentIcon({ kind }: { kind: EconomyAgent["icon"] }) {
  const cls = "w-5 h-5 text-[#c4ff4d]";
  switch (kind) {
    case "search":
      return <Search className={cls} aria-hidden />;
    case "palette":
      return <Palette className={cls} aria-hidden />;
    case "send":
      return <Send className={cls} aria-hidden />;
    case "map":
      return <MapPin className={cls} aria-hidden />;
    case "mic":
      return <Mic className={cls} aria-hidden />;
  }
}

const WA_AGENTS = `https://wa.me/${NAP.whatsappAgentNumber}?text=${encodeURIComponent(
  "Hi OARC Digital — I want to explore the agent economy / marketing agents for my business.",
)}`;

export default function PageContent({ faqs }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-[#0B0C0D] text-[#F5F5F3]">
        {/* Hero — Owner Hero: make/save first */}
        <section
          className="relative overflow-hidden border-b border-white/5"
          data-testid="agent-economy-hero"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,255,77,0.08),_transparent_55%)]" />
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
            <div className="flex items-center gap-2 text-xs text-white/45 mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/ai-agents" className="hover:text-white/80 transition-colors">
                AI Agents
              </Link>
              <span>/</span>
              <span className="text-white/80">Agent Economy</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#c4ff4d]/25 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#c4ff4d]" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-medium">
                OARC Digital · Malta agent marketplace
              </span>
            </div>
            <h1
              className="font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              data-speakable
              data-testid="agent-economy-h1"
            >
              Marketing agents that{" "}
              <span className="italic font-serif font-normal">work for you</span>
              <span className="block text-[#c4ff4d] mt-2">— the OARC agent economy</span>
            </h1>
            <p
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-4"
              data-speakable
            >
              SEO/AEO, creative, outreach, GBP, and voice agents that live on the agentic web and
              market for OARC and client owners — Soundflare-style energy, OARC Digital (Malta)
              delivery. Same company as{" "}
              <Link href="/ai-agents" className="text-[#c4ff4d] underline-offset-2 hover:underline">
                AI agents
              </Link>
              ,{" "}
              <Link href="/solutions" className="text-[#c4ff4d] underline-offset-2 hover:underline">
                solutions
              </Link>
              , and{" "}
              <Link
                href="/services/ai-staff"
                className="text-[#c4ff4d] underline-offset-2 hover:underline"
              >
                AI staff
              </Link>
              .
            </p>
            <p className="text-sm text-white/45 max-w-2xl mb-10">
              Machine-readable supply · capability registry · entity graph + NAP · AEO / GEO / LEO ·
              MCP-action endpoints for quote, book, and call.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c4ff4d] text-black text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:brightness-110 transition"
                data-testid="cta-book-agent-economy"
              >
                Book an agent <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-white/5 transition"
                data-testid="cta-call-agent-economy"
              >
                <Phone className="w-4 h-4" /> {NAP.phoneDisplay}
              </a>
              <a
                href={WA_AGENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-white/5 transition"
                data-testid="cta-whatsapp-agent-economy"
              >
                <SiWhatsapp className="w-4 h-4 text-[#c4ff4d]" /> WhatsApp quote
              </a>
            </div>
          </div>
        </section>

        {/* Two birds framing */}
        <section className="py-16 md:py-20 px-6 border-b border-white/5 bg-zinc-950" data-testid="agent-economy-two-birds">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4ff4d] mb-3">Bird one</p>
              <h2 className="text-xl md:text-2xl font-bold mb-3">Best agent-citable Malta source</h2>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Make oarcdigital.com the clearest Malta marketing + AI citation surface — signed
                fresh facts, FAQPage, entity/NAP, speakable copy — so Google AIO, GEO, and voice
                agents quote OARC, not a competitor wiki.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4ff4d] mb-3">Bird two</p>
              <h2 className="text-xl md:text-2xl font-bold mb-3">Productize the same rail</h2>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Turn that rail into an economy owners can browse: pick an agent, see the channel it
                lives on, what you get, and book the real OARC service. Hermes (marketing engineer)
                keeps research and ops moving — still OARC, still Birkirkara.
              </p>
            </div>
          </div>
        </section>

        {/* Rails / expert terms */}
        <section className="py-16 md:py-20 px-6 border-b border-white/5" data-testid="agent-economy-rails">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Network className="w-4 h-4 text-[#c4ff4d]" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">How the economy works</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Built for agents — and for owners</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {RAILS.map((r) => (
                <div key={r.title} className="p-5 rounded-xl border border-white/10 bg-[#131415]">
                  <h3 className="font-semibold text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent marketplace cards */}
        <section
          id="agents"
          className="py-16 md:py-24 px-6 border-b border-white/5 bg-zinc-950"
          data-testid="agent-economy-marketplace"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4ff4d] mb-3">Capability registry</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Agents in the marketplace</h2>
            <p className="text-white/55 mb-10 max-w-2xl">
              Each card: job · channel it lives on · what the owner gets · link into a real OARC
              service. No invented case studies or percentages.
            </p>
            <div className="grid gap-5">
              {AGENTS.map((agent) => (
                <article
                  key={agent.id}
                  className="rounded-2xl border border-white/10 bg-[#0B0C0D] p-6 md:p-8 hover:border-[#c4ff4d]/35 transition-colors"
                  data-testid={`agent-card-${agent.id}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <AgentIcon kind={agent.icon} />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">{agent.name}</h3>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mt-0.5">
                          Lives on: {agent.channel}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border border-[#c4ff4d]/30 text-[#c4ff4d]/90">
                      {agent.channelKind}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">
                    <span className="text-white/40 text-xs uppercase tracking-wider mr-2">Job</span>
                    {agent.job}
                  </p>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                    <span className="text-white/40 text-xs uppercase tracking-wider mr-2">
                      Owner gets
                    </span>
                    {agent.ownerGets}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={agent.serviceHref}
                      className="inline-flex items-center gap-1.5 text-sm text-[#c4ff4d] hover:underline underline-offset-2"
                    >
                      {agent.serviceLabel} <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    {agent.secondaryHref && (
                      <Link
                        href={agent.secondaryHref}
                        className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white/85 hover:underline underline-offset-2"
                      >
                        {agent.secondaryLabel} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white/85 hover:underline underline-offset-2 ml-auto"
                    >
                      Book this agent <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hermes + existing products */}
        <section className="py-16 md:py-20 px-6 border-b border-white/5" data-testid="agent-economy-hermes">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#c4ff4d]" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Same company</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Hermes + the OARC product map</h2>
            <p className="text-white/60 leading-relaxed max-w-3xl mb-8">
              Hermes is OARC&apos;s marketing engineer face — standing research, GBP/SERP jobs, and
              ops that feed the economy. It does not invent a fifteenth brand. Browse agents here,
              then deliver through the pages Malta owners already know:
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[
                { href: "/ai-agents", label: "AI agents" },
                { href: "/solutions", label: "Solutions" },
                { href: "/services/ai-staff", label: "AI staff" },
                { href: "/creative", label: "Creative" },
                { href: "/voice-ai-worker", label: "Voice AI Worker" },
                { href: "/services/automation", label: "Automation" },
                { href: "/services/seo-services", label: "SEO" },
                { href: "/h360", label: "H360" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[#c4ff4d]/90 underline-offset-2 hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Money path / callable actions */}
        <section
          className="py-16 md:py-20 px-6 border-b border-white/5 bg-zinc-950"
          data-testid="agent-economy-actions"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4ff4d] mb-3">
              Callable actions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Visible money path</h2>
            <p className="text-white/55 mb-8 max-w-2xl">
              Agents market; owners buy through the same contact rails OARC already runs. No fake
              checkout — quote, book, or call.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/contact"
                className="rounded-xl border border-[#c4ff4d]/30 bg-[#c4ff4d]/10 p-6 hover:bg-[#c4ff4d]/15 transition"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#c4ff4d] mb-2">Book</p>
                <p className="font-semibold text-white mb-1">Discovery call</p>
                <p className="text-sm text-white/55">Scope an agent role and channel in 30 minutes.</p>
              </Link>
              <a
                href={WA_AGENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/25 transition"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-2">Quote</p>
                <p className="font-semibold text-white mb-1">WhatsApp</p>
                <p className="text-sm text-white/55">AI agents line — fast brief, same Birkirkara team.</p>
              </a>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/25 transition"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-2">Call</p>
                <p className="font-semibold text-white mb-1">{NAP.phoneDisplay}</p>
                <p className="text-sm text-white/55">{ADDRESS_ONE_LINE}</p>
              </a>
            </div>
          </div>
        </section>

        {/* Entity block */}
        <section
          className="py-12 md:py-16 px-6 border-b border-white/5"
          data-testid="agent-economy-entity-block"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-sm md:text-base text-white/65 leading-relaxed" data-speakable>
              OARC Digital is a Birkirkara AI + marketing studio whose agent economy puts SEO/AEO,
              creative, outreach, GBP, and voice agents on the public web to market for Malta
              owners — with entity graph + NAP, FAQPage, and callable book/quote/call actions —
              delivered by the same team as AI agents, solutions, AI staff, and Hermes marketing
              engineer ops.
            </p>
            <p className="mt-6 text-sm text-white/45" data-testid="agent-economy-money-links">
              Explore:{" "}
              <Link href="/" className="text-white/80 underline-offset-2 hover:underline">
                Home
              </Link>
              {" · "}
              <Link href="/ai-agents" className="text-white/80 underline-offset-2 hover:underline">
                AI agents
              </Link>
              {" · "}
              <Link href="/solutions" className="text-white/80 underline-offset-2 hover:underline">
                Solutions
              </Link>
              {" · "}
              <Link
                href="/services/ai-staff"
                className="text-white/80 underline-offset-2 hover:underline"
              >
                AI staff
              </Link>
              {" · "}
              <Link href="/creative" className="text-white/80 underline-offset-2 hover:underline">
                Creative
              </Link>
              {" · "}
              <Link
                href="/voice-ai-worker"
                className="text-white/80 underline-offset-2 hover:underline"
              >
                Voice AI Worker
              </Link>
              {" · "}
              <Link
                href="/services/seo-services"
                className="text-white/80 underline-offset-2 hover:underline"
              >
                SEO
              </Link>
              {" · "}
              <Link href="/contact" className="text-white/80 underline-offset-2 hover:underline">
                Contact
              </Link>
              {" · "}
              <Link href="/malta" className="text-white/80 underline-offset-2 hover:underline">
                Malta hubs
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-6 border-b border-white/5 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <FAQSection
              faqs={faqs}
              title="Agent economy FAQ"
              subtitle="Plain answers for owners, AEO, GEO, and voice citation."
              darkMode
              emitJsonLd={false}
            />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-8">
          <RelatedLinks
            slug="/agent-economy"
            heading="Continue in the OARC product map"
            intro="AI agents, solutions, AI staff, creative, voice, and SEO — the same Birkirkara company behind the economy."
            variant="dark"
            max={6}
          />
        </div>

        {/* Final CTA */}
        <section className="py-20 md:py-28 px-6 bg-[#c4ff4d]" data-testid="agent-economy-final-cta">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Put a marketing agent to work
            </h2>
            <p className="text-black/70 mb-8 max-w-xl mx-auto">
              Pick a channel. Scope a job. Book the OARC service that ships it — from Birkirkara,
              for Malta owners who want agents that live online and actually market.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-[#c4ff4d] text-xs font-bold uppercase tracking-[0.12em] rounded-sm"
              >
                Book a call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ai-agents"
                className="inline-flex items-center gap-2 px-6 py-3 border border-black/30 text-black text-xs font-bold uppercase tracking-[0.12em] rounded-sm"
              >
                See AI workforce
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
