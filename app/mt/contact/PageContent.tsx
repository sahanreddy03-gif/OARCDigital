"use client";

import { useState, useEffect } from "react";
// Contact page - OARC Digital - Maltese twin of app/contact/PageContent.tsx
import LocalePage from "@/components/i18n/LocalePage";
import ContactForm from "./ContactForm";
import { Mail, Phone, MessageCircle, MapPin, Bot, ArrowRight, Send, CalendarDays } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { m } from "framer-motion";
const contactBokehBg = "/attached_assets/contact-bokeh-bg.jpg";
import { NAP } from "@/lib/seo/nap";
import { bookingUrl } from "@/lib/utm";
import { buildLocalBusiness } from "@/lib/schema";
import { SITE, localeUrl } from "@/lib/i18n/twins";

const WHATSAPP_NUMBER = NAP.whatsappNumber;
const WHATSAPP_MESSAGE = "Bonġu, nixtieq inkun naf aktar dwar is-servizzi tagħkom";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Maltese version of buildContactShellGraph() (lib/schema/shellSchemas.ts).
// The ContactPage node is in Maltese and points at this page. The LocalBusiness node is
// the same one the English page emits (same @id, address, phone and geo), untouched.
// The breadcrumb and the company reference come from LocaleSchema in page.tsx.
const CONTACT_URL = localeUrl("mt", "/contact");
const CONTACT_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${CONTACT_URL}#webpage`,
      url: CONTACT_URL,
      name: "Ikkuntattja lil OARC Digital — Birkirkara, Malta",
      description: `Ikkuntattja lill-istudjo ta' OARC Digital f'${NAP.addressLocality}, Malta: telefon, WhatsApp, email u l-formola għall-proġett tiegħek.`,
      isPartOf: { "@id": `${SITE}/#website` },
      inLanguage: "mt",
      mainEntity: {
        "@type": "LocalBusiness",
        "@id": `${SITE}/#localbusiness`,
      },
    },
    buildLocalBusiness(),
  ],
};

const FloatingParticle = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) => (
  <m.div
    className="absolute rounded-full bg-gradient-to-r from-[#ff914d]/30 to-purple-500/20 blur-sm"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function PageContent() {
  const [showChatPrompt, setShowChatPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChatPrompt(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LocalePage locale="mt" path="/contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_GRAPH) }}
      />


      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 pt-24 md:pt-28 pb-16">
        {/* Bokeh background */}
        <img
          src={contactBokehBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/90 via-zinc-950/70 to-zinc-950/90" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} duration={4} x="10%" y="20%" size={8} />
        <FloatingParticle delay={0.5} duration={5} x="85%" y="30%" size={6} />
        <FloatingParticle delay={1} duration={4.5} x="70%" y="60%" size={10} />
        <FloatingParticle delay={1.5} duration={5.5} x="20%" y="70%" size={7} />
        <FloatingParticle delay={2} duration={4} x="50%" y="15%" size={5} />
        <FloatingParticle delay={0.8} duration={6} x="30%" y="85%" size={9} />
        <FloatingParticle delay={1.2} duration={4.2} x="90%" y="75%" size={6} />

        <div className="relative z-10 container mx-auto px-6 py-8 md:py-12">
          {/* Hero Content */}
          <m.div
            className="text-center max-w-4xl mx-auto mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              <span className="block text-white">Ikkuntattja lil</span>{" "}
              <span className="block text-[#c4ff4d]">
                OARC Digital
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Ejja nibnu xi ħaġa straordinarja flimkien. Trid awtomazzjoni bl-intelliġenza artifiċjali (AI), kampanji kreattivi jew strateġija biex tikber? Aħna qegħdin hawn biex l-idea tiegħek issir realtà.
            </p>
          </m.div>

          {/* Two Premium Cards - Speak With Us first, AI Strategist second */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Speak With Us Card - First */}
            <m.div
              className="group relative order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 h-full">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/20 flex items-center justify-center mb-6">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Kellimna</h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    Tippreferi titkellem magħna? Ċempel lill-uffiċċju tagħna f'Malta jew ibbukkja video call.
                  </p>

                  {/* Malta Phone - Featured */}
                  <a
                    href={`tel:${NAP.phoneE164}`}
                    className="flex items-center gap-4 p-4 mb-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group/phone"
                    data-testid="link-call-malta-hero"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-cyan-400/70 uppercase tracking-wider">Malta</p>
                      <p className="text-lg font-semibold text-white group-hover/phone:text-cyan-400 transition-colors">{NAP.phoneDisplay}</p>
                    </div>
                  </a>

                  <a
                    href={bookingUrl("/contact")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 mb-4 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-300"
                    data-testid="link-book-call-hero"
                  >
                    <CalendarDays className="w-5 h-5" />
                    Ibbukkja telefonata ta' 20 minuta
                  </a>

                  <button
                    onClick={scrollToForm}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    data-testid="button-send-message-hero"
                  >
                    <Send className="w-5 h-5" />
                    Jew ibgħatilna messaġġ
                  </button>
                </div>
              </div>
            </m.div>

            {/* AI Strategist Card - Second */}
            <m.div
              className="group relative order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff914d]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#ff914d]/30 transition-all duration-500 h-full">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff914d]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff914d]/20 to-[#ff914d]/5 border border-[#ff914d]/20 flex items-center justify-center mb-6">
                    <Bot className="w-8 h-8 text-[#ff914d]" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Iċċettja mal-istrateġist tal-AI</h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    Ikseb tweġibiet minnufih dwar is-servizzi u l-prezzijiet tagħna, u dwar kif nistgħu ngħinu lin-negozju tiegħek jikber.
                  </p>

                  {/* Sample prompts — each opens ARC pre-loaded with that question */}
                  <div className="space-y-2 mb-6">
                    {[
                      { label: "Itlob kwotazzjoni", prompt: "Tistgħu tagħtuni kwotazzjoni għas-servizzi tagħkom?" },
                      { label: "Ara s-servizzi tal-AI", prompt: "Għiduli dwar is-servizzi tal-AI tagħkom." },
                      { label: "Ara studji ta' każijiet", prompt: "Uruni xi studji ta' każijiet." },
                    ].map((chip, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent('arc:open', { detail: { prompt: chip.prompt } }))}
                        className="inline-block mr-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 hover:bg-white/10 hover:text-white/80 transition-colors cursor-pointer"
                        data-testid={`button-arc-prompt-${i}`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('arc:open'))}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#ff914d] to-orange-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#ff914d]/20 transition-all duration-300 group/btn"
                    data-testid="button-ai-strategist"
                  >
                    <Bot className="w-5 h-5" />
                    Iftaħ l-istrateġist tal-AI
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </m.div>
          </div>
        </div>

      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative bg-zinc-950 py-24 overflow-hidden">
        {/* Extended bokeh background */}
        <img
          src={contactBokehBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">

              {/* Form Column */}
              <div className="lg:col-span-3">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ibda l-proġett tiegħek
                  </h2>
                  <p className="text-white/50 text-lg">
                    Għidilna x'inhuma l-għanijiet tiegħek u nfasslulek strateġija apposta għalik.
                  </p>
                </m.div>

                <ContactForm />
              </div>

              {/* Contact Methods Column */}
              <div className="lg:col-span-2">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Kuntatt dirett</h3>

                  {/* Malta - Featured/Larger */}
                  <a
                    href={`tel:${NAP.phoneE164}`}
                    className="group flex items-center gap-4 p-6 mb-4 bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/5 border border-[#ff914d]/20 rounded-2xl hover:border-[#ff914d]/40 transition-all"
                    data-testid="link-call-malta"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#ff914d]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#ff914d]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#ff914d]/70 mb-1 font-medium">Malta</p>
                      <p className="text-xl font-bold text-white group-hover:text-[#ff914d] transition-colors">{NAP.phoneDisplay}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${NAP.email}`}
                    className="group flex items-center gap-4 p-4 mb-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                    data-testid="link-email"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Email</p>
                      <p className="font-semibold text-white group-hover:text-white/80 transition-colors">{NAP.email}</p>
                    </div>
                  </a>

                  {/* WhatsApp - Prominent */}
                  <a
                    href={`https://wa.me/${NAP.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all"
                    data-testid="link-whatsapp"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 relative">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      {/* Pulse animation */}
                      <span className="absolute inset-0 rounded-lg bg-[#25D366]/30 animate-ping" style={{ animationDuration: '2s' }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#25D366]/70 mb-0.5">WhatsApp</p>
                      <p className="font-semibold text-[#25D366]">Iktbilna issa</p>
                    </div>
                  </a>

                  {/* AI Chatbot Card */}
                  <m.div
                    className="mt-8 p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Strateġist tal-AI</p>
                        <p className="text-xs text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Online bħalissa
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-white/50 mb-4">
                      Trid tweġibiet malajr? L-AI tagħna tgħinek tara s-servizzi, tikseb stima u tibbukkja telefonata.
                    </p>
                    <button
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                      data-testid="button-ai-chat-sidebar"
                    >
                      Ibda l-konverżazzjoni
                    </button>
                  </m.div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Malta HQ block — single-office layout, same as the English page. */}
      <section className="relative bg-zinc-900 border-t border-white/5 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={contactBokehBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-10 text-center">Żur l-istudjo</h2>
          <div className="text-center max-w-md mx-auto" data-testid="office-malta">
            <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 border border-[#ff914d]/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-[#ff914d]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Malta — Birkirkara CBD</h3>
            <address className="text-zinc-400 text-sm not-italic leading-relaxed">
              Level 1, The Brewhouse,<br />
              Zone 2, Central Business District,<br />
              Mdina Road, {NAP.addressLocality} {NAP.postalCode}, Malta
            </address>
          </div>

          {/* Google Maps embed — same coordinates as the English page (lib/seo/nap.ts). */}
          <div
            className="mt-12 max-w-3xl mx-auto rounded-md overflow-hidden border border-white/10"
            data-testid="contact-map-embed"
          >
            <iframe
              title="OARC Digital — fejn jinsab l-istudjo f'Birkirkara CBD"
              src={`https://www.google.com/maps?q=${NAP.geo.lat},${NAP.geo.lng}&z=15&output=embed`}
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Service quick-links */}
      <section className="bg-zinc-950 border-t border-white/5 py-16" data-testid="section-services">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-xl font-bold text-white mb-2 text-center">Ma tafx minn fejn tibda?</h2>
          <p className="text-white/60 text-center mb-8 text-sm">Ara s-servizzi l-aktar mitluba min-negozji f'Malta.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/seo-services" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover-elevate block" data-testid="link-contact-seo">
              <div className="text-[#c4ff4d] font-bold text-xs tracking-widest uppercase mb-2">Organiku</div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4ff4d] transition-colors">Servizzi tal-SEO</h3>
              <p className="text-sm text-white/60">Ħalli lin-nies isibuk fit-tiftix mingħajr ma tibqa' tħallas għar-reklami.</p>
            </Link>
            <Link href="/services/social-media-creative-management" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover-elevate block" data-testid="link-contact-social">
              <div className="text-[#c4ff4d] font-bold text-xs tracking-widest uppercase mb-2">Kreattività</div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4ff4d] transition-colors">Kontenut kreattiv għas-social media</h3>
              <p className="text-sm text-white/60">Kontenut u komunità li jibdlu l-followers fi klijenti.</p>
            </Link>
            <Link href="/services/ai-consulting" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover-elevate block" data-testid="link-contact-ai">
              <div className="text-[#c4ff4d] font-bold text-xs tracking-widest uppercase mb-2">AI</div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4ff4d] transition-colors">Konsulenza dwar l-AI</h3>
              <p className="text-sm text-white/60">Għodod tal-AI mibnija skont kif jaħdem tassew in-negozju tiegħek.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-zinc-950 border-t border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Konformi mal-GDPR</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Irreġistrata f'Malta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Qdejna aktar minn 50 klijent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Notice */}
      <section className="bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 py-8">
          <p className="text-xs text-zinc-600 text-center max-w-3xl mx-auto" data-testid="text-gdpr-notice">
            Meta tikkuntattjana, nipproċessaw l-informazzjoni tiegħek skont il-<Link href="/legal/privacy-policy" className="underline hover:text-zinc-400 transition-colors">Politika tal-Privatezza</Link> tagħna.{' '}
            OARC Digital hija rreġistrata f'Malta u tikkonforma mal-GDPR.
          </p>
        </div>
      </section>

      {/* WhatsApp Floating Button - Contact Page Only */}
      <m.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-[9998] cursor-pointer group"
        data-testid="button-whatsapp-float"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />

          {/* Button */}
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:shadow-[#25D366]/50 transition-all group-hover:scale-110">
            <SiWhatsapp className="w-7 h-7 text-white" />
          </div>

          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
        </div>
      </m.a>
    </LocalePage>
  );
}
