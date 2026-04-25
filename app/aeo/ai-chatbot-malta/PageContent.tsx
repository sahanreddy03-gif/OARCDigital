import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const surfaces = [
  { name: 'Website widget', role: 'Custom-themed chat widget on your Next.js, WordPress, or Shopify site. Lazy-loaded, mobile-first, brand-coloured, with proactive greetings on key pages.' },
  { name: 'WhatsApp Business API', role: 'The channel Malta customers actually use. Twilio or Meta WhatsApp Business API, template messages approved, opt-in flows compliant with Meta policy.' },
  { name: 'Meta Messenger', role: 'Connected to your Facebook Page for inbound DMs and ad reply automation, with handoff rules to a human agent when intent or sentiment crosses a threshold.' },
  { name: 'Instagram Direct DMs', role: 'Auto-replies to Instagram DMs and story replies — critical for Sliema and St Julians retail and F&B operators getting most enquiries through Instagram.' },
  { name: 'Support inbox (Zendesk / Intercom)', role: 'AI drafts a reply for every inbound ticket and routes to a human agent for review. The agent stays in control while throughput doubles.' },
  { name: 'Internal Slack copilot', role: 'The same trained corpus available to your team in Slack — onboarding answers, policy lookups, supplier contact details, internal standard procedures.' },
];

const phases = [
  { week: 'Week 1', title: 'Discovery + Content Audit', detail: 'Workshop in Birkirkara, intent inventory, content corpus assembly (FAQs, menus, policies, knowledge base), guardrail rules, escalation criteria.' },
  { week: 'Week 2–3', title: 'RAG Pipeline + Staging Bot', detail: 'Document ingestion, embedding index in EU region, retrieval pipeline, system prompt tuning. Staging bot live for internal testing by end of week 3.' },
  { week: 'Week 4–5', title: 'Surface Deployment', detail: 'Web widget styled, WhatsApp Business approved, Messenger and Instagram connected, support inbox integration tested with real tickets.' },
  { week: 'Week 6', title: 'Launch + Tuning', detail: 'Production launch, conversation review, false-positive reduction, escalation rule tuning, weekly performance dashboard wired up.' },
];

const reasons = [
  'RAG over your actual content — the bot answers from your menu, your policy doc, your knowledge base. No hallucinated invoice numbers.',
  'EU-region inference by default — Azure OpenAI EU regions or AWS Bedrock eu-central-1. Prompts and responses never leave the EU.',
  'Multilingual Maltese + English — frontier multilingual models handle code-switched conversation and respect Maltese diacritics.',
  'Human escalation rules built in — the bot hands off to a real agent when intent, sentiment, or risk crosses a defined threshold.',
];

export default function AIChatbotMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">AI Chatbot Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">AI Chatbot Malta — Built, Trained, and Hosted in the EU</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds RAG-powered AI chatbots for Malta operators in Maltese and English. One trained corpus, six deployment surfaces — web widget, WhatsApp, Messenger, Instagram DMs, support inbox, internal Slack.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Off-the-Shelf Chatbots Fail Maltese Operators</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The first wave of chatbot tools that Malta SMEs adopted — flowchart builders, intent-keyword bots, the dropdown-menu widgets bundled into Wix and Squarespace — failed for the same three reasons every time. They could not handle code-switched Maltese and English. They had no idea what was on the operator&apos;s actual menu, policy document, or knowledge base, so they answered every off-script question with a generic apology and a request to email someone. And they never crossed the surfaces customers actually use, leaving the website widget orphaned while the WhatsApp number went unanswered.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital builds the opposite of that. Every bot we ship is a retrieval-augmented generation (RAG) system trained on the operator&apos;s actual content — menus from Sliema bistros, Cloudbeds knowledge base for hotels in St Julians, MFSA policy documents for Birkirkara fintechs, MGA-aligned terms for iGaming operators in Ta&apos; Xbiex. The bot answers from real content, cites the source where the user wants to verify, and falls back to human escalation when intent, sentiment, or risk crosses a threshold defined in the system prompt.
            </p>
            <p className="text-foreground leading-relaxed">
              Critically, the same trained corpus deploys across six surfaces — website widget, WhatsApp Business API, Meta Messenger, Instagram Direct DMs, the support inbox via Zendesk or Intercom, and an internal Slack copilot for the team. Malta operators do not have to pick a channel; the bot answers consistently wherever the customer turns up. EU-region inference (Azure OpenAI EU regions, AWS Bedrock eu-central-1) is the default so the IDPC notification, the GDPR DPIA, and the data residency conversation are all answered before the bot goes live.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Deployment Surfaces We Cover</h2>
            <p className="text-muted-foreground mb-6">One trained corpus. Six places your customers actually message you.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {surfaces.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 6-Week Chatbot Sprint</h2>
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
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region inference (Azure OpenAI EU)</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">PII redaction in the pipeline</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Human escalation rules built in</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why a Real Chatbot Compounds for Malta SMEs</h2>
            <p className="text-foreground leading-relaxed">
              Malta is a high-touch market where a missed WhatsApp at 21:00 is a lost reservation, a slow Instagram DM reply is a lost retail sale, and a customer waiting three hours for a Messenger response is already booking with the next operator on Google. A trained chatbot answering ninety percent of inbound queries instantly — in Maltese or English, with the correct menu, the correct opening hours, the correct booking link — is one of the cheapest revenue lifts a Malta SME can install. It does not replace the team; it gives the team back the hours currently spent typing the same answer for the four-hundredth time.
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

          <RelatedLinks slug="/aeo/ai-chatbot-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to deploy a real AI chatbot?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a written intent inventory, a content readiness assessment, and a rough scope for the build.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
