import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowUpRight, ExternalLink, Play, ShoppingBag, Layers, Zap, Shield, Globe, Users, TrendingUp, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { motion } from 'framer-motion';

import pjazzaLogo from '@assets/logo.svg';
import screen1 from '@assets/IMG_0605_1775060265078.jpeg';
import screen2 from '@assets/IMG_0606_1775060265078.jpeg';
import screen3 from '@assets/IMG_0607_1775060265078.jpeg';
import screen4 from '@assets/IMG_0608_1775060265078.jpeg';
import screen5 from '@assets/IMG_0610_1775060265078.jpeg';
import screen6 from '@assets/IMG_0611_1775060265078.jpeg';
import screen7 from '@assets/IMG_0612_1775060265078.jpeg';
import screen8 from '@assets/IMG_0613_1775060265078.jpeg';
import screen9 from '@assets/IMG_0614_1775060265078.png';
import screen10 from '@assets/IMG_0615_1775060265078.jpeg';
import screen11 from '@assets/IMG_0616_1775060265078.jpeg';
import screen12 from '@assets/IMG_0617_1775060265078.jpeg';
import screen13 from '@assets/IMG_0619_1775060265078.png';
import screen14 from '@assets/IMG_0620_1775060265078.jpeg';
import screen15 from '@assets/IMG_0621_1775060265078.png';
import screen16 from '@assets/IMG_0622_1775060265079.jpeg';
import screen17 from '@assets/IMG_0626_1775058380401.jpeg';
import desktopShot from '@assets/screenshot-1775060277130.png';

const stats = [
  { value: '200+', label: 'Founding Businesses', icon: Users },
  { value: '12', label: 'Sectors Covered', icon: Layers },
  { value: 'May 2026', label: 'Launch Date', icon: TrendingUp },
  { value: 'Malta-first', label: 'Live Commerce', icon: Globe },
];

const sectors = [
  'Food & Dining', 'Property', 'Cars & Mobility', 'Yachts & Marine',
  'Home Services', 'Freelancers', 'Wellness & Health', 'Fashion & Retail',
  'Electronics', 'Tourism', 'Education', 'Pets & Animals',
];

const buildPillars = [
  {
    icon: ShoppingBag,
    title: 'Live Commerce Engine',
    desc: 'Real-time streaming marketplace where Malta businesses sell directly to customers — Q&A, bidding, instant purchase, all in one session.',
  },
  {
    icon: Shield,
    title: 'Escrow Trust Layer',
    desc: 'Built-in escrow protection ensures buyers receive what they see live, driving unprecedented trust in a new commerce format.',
  },
  {
    icon: Zap,
    title: 'Business Onboarding',
    desc: 'Streamlined seller dashboard, live studio tools, and analytics from day one — no technical knowledge required.',
  },
  {
    icon: Star,
    title: 'Crowd Intelligence',
    desc: "Real-time crowd signals — live viewer counts, reactions, trending items — amplify the energy of every live session.",
  },
  {
    icon: Globe,
    title: 'Multilingual & Malta-native',
    desc: 'Built for Malta\'s unique bilingual culture, local regulations, and community commerce patterns from the ground up.',
  },
  {
    icon: Play,
    title: 'Full Recording Studio',
    desc: 'Sellers get a professional-grade streaming studio within the app — go live in seconds with broadcast-quality tools.',
  },
];

const appScreens = [
  { img: screen1, caption: 'Live Stream Discovery Feed' },
  { img: screen2, caption: 'Sector Browse — 12 Categories' },
  { img: screen3, caption: 'Active Live Shopping Session' },
  { img: screen4, caption: 'Business Analytics Dashboard' },
  { img: screen5, caption: 'Seller Onboarding Flow' },
  { img: screen6, caption: 'Escrow & Payment Security' },
  { img: screen7, caption: 'Product Listing Detail' },
  { img: screen8, caption: 'Crowd Intelligence Interface' },
  { img: screen9, caption: 'Portal Landing Experience' },
  { img: screen10, caption: 'How It Works — Buyer Flow' },
  { img: screen11, caption: 'Sectors Directory' },
  { img: screen12, caption: 'Business Onboard Pitch' },
  { img: screen13, caption: 'Desktop — Live Commerce' },
  { img: screen14, caption: 'Mobile Checkout Experience' },
  { img: screen15, caption: 'Recording Studio Interface' },
  { img: screen16, caption: 'Community & Reviews' },
  { img: screen17, caption: 'How It Works — Seller Flow' },
];

export default function PjazzaCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title="PJAZZA — Malta's Live Shopping Marketplace | OARC Digital"
        description="OARC Digital's own product: PJAZZA, Malta's first live commerce marketplace. 200+ founding businesses, 12 sectors, launching May 2026 at maltaverse.live."
        canonicalUrl="https://oarcdigital.com/case-studies/pjazza"
        ogType="article"
      />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black" data-testid="section-pjazza-hero">
        {/* Background desktop screenshot */}
        <div className="absolute inset-0">
          <img
            src={desktopShot}
            alt="PJAZZA platform"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        {/* Back nav */}
        <div className="absolute top-24 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Link href="/our-work">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors"
                data-testid="button-back-our-work"
              >
                <ArrowLeft className="w-4 h-4" />
                Our Work
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Built-by badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E11D48]/20 border border-[#E11D48]/40 rounded-full text-[#E11D48] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
              Built by OARC Digital — Our Own Product
            </div>

            {/* Logo */}
            <div className="mb-6">
              <img src={pjazzaLogo} alt="PJAZZA" className="h-16 md:h-20 w-auto" />
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-white leading-[1.02] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              We didn't just market Malta.
              <br />
              <span className="text-[#E11D48]">We built the marketplace.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              PJAZZA is Malta's first live shopping marketplace — 12 sectors, 200+ founding businesses,
              and a platform that transforms how the island buys and sells. Designed, built, and launched by OARC.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-[#E11D48] flex-shrink-0" />
                    <div>
                      <div className="text-xl font-bold text-white leading-none">{stat.value}</div>
                      <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA link */}
            <a
              href="https://maltaverse.live/pjazza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E11D48] text-white font-semibold rounded-xl hover:bg-[#c81a3f] transition-colors"
              data-testid="link-pjazza-live"
            >
              Visit maltaverse.live/pjazza
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-story">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">The Brief</span>
              </div>
              <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
                Malta's commerce needed a revolution.
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>
                  Malta is a small island with a tight-knit economy — but its local businesses were invisible online.
                  Facebook groups, WhatsApp chains, and outdated directories were the status quo. No discoverability.
                  No trust infrastructure. No way to sell live to your community.
                </p>
                <p>
                  The OARC team saw what platforms like Whatnot and TikTok Shop were doing globally and asked:
                  <em className="text-white/80 not-italic"> why doesn't Malta have this?</em>
                </p>
                <p>
                  Rather than pitch the idea to a client, we built it ourselves. PJAZZA — meaning "town square"
                  in Maltese — is the result. A live commerce marketplace where any local business can broadcast,
                  sell, and connect with Malta's community in real time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img src={screen9} alt="PJAZZA portal" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl overflow-hidden border border-white/10 shadow-xl w-40 h-40 md:w-56 md:h-56">
                <img src={screen3} alt="PJAZZA live" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESKTOP FULL-WIDTH */}
      <section className="py-0 bg-black overflow-hidden" data-testid="section-pjazza-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-[2px] bg-[#E11D48]" />
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Platform Preview</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={desktopShot}
              alt="PJAZZA desktop experience"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* 12 SECTORS */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-sectors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-[2px] bg-[#E11D48]" />
              <span className="text-sm font-bold text-white/40 uppercase tracking-widest">12 Sectors</span>
              <div className="w-8 h-[2px] bg-[#E11D48]" />
            </div>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Every corner of Malta's economy
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              From artisan food stalls to luxury yachts — PJAZZA connects all of Malta's commercial life in one live marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-xl text-center"
                data-testid={`sector-${i}`}
              >
                <span className="text-sm text-white/70 font-medium">{sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW OARC BUILT IT */}
      <section className="py-24 md:py-32 bg-black" data-testid="section-pjazza-pillars">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-[2px] bg-[#E11D48]" />
              <span className="text-sm font-bold text-white/40 uppercase tracking-widest">What OARC Built</span>
            </div>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Six pillars of a live commerce platform
            </h2>
            <p className="text-white/50 max-w-xl">
              Every feature was designed from scratch by our team — from UX research with Maltese business owners to final production deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {buildPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 bg-zinc-900 border border-white/[0.06] rounded-2xl"
                  data-testid={`pillar-card-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E11D48]/15 border border-[#E11D48]/25 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL SCREENSHOT GALLERY */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-[2px] bg-[#E11D48]" />
              <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Product Screens</span>
            </div>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Every screen, considered
            </h2>
            <p className="text-white/50 max-w-xl">
              7 core pages, dozens of interaction states. Mobile-first, optimised for Malta's mobile-dominant market.
            </p>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {appScreens.map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.07] bg-zinc-900 ${
                  i === 0 || i === 8 ? 'col-span-2 row-span-2' : ''
                }`}
                data-testid={`screen-${i}`}
              >
                <img
                  src={screen.img}
                  alt={screen.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-white/80 font-medium">{screen.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OARC ANGLE */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden" data-testid="section-pjazza-oarc-angle">
        {/* Red glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E11D48]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Why This Matters</span>
              </div>
              <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
                We don't just advise.
                <br />
                <span className="text-[#E11D48]">We build.</span>
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>
                  PJAZZA is proof of what OARC Digital can do when we're given full creative and technical ownership.
                  We researched the market, designed the product, wrote the code, and shipped the platform — the same
                  capabilities we bring to every client engagement.
                </p>
                <p>
                  With 200+ founding businesses already committed and a May 2026 launch locked in, PJAZZA is on track
                  to become Malta's dominant commerce platform — and a living portfolio piece that no other agency
                  on the island can match.
                </p>
                <p>
                  When you work with OARC, you're working with a team that has built, launched, and owns a marketplace.
                  That's a different conversation entirely.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {[screen5, screen6, screen14, screen16].map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/10 aspect-[9/16] md:aspect-auto md:h-52">
                  <img src={src} alt="PJAZZA screen" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* LAUNCH CALLOUT */}
      <section className="py-20 bg-[#E11D48]" data-testid="section-pjazza-launch">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2">Live at</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white">maltaverse.live/pjazza</h3>
              <p className="text-white/70 mt-2">Launching May 2026 · 200+ founding businesses committed</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maltaverse.live/pjazza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#E11D48] font-bold rounded-xl hover:bg-white/90 transition-colors"
                data-testid="link-pjazza-cta-primary"
              >
                Visit the Platform
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link href="/contact">
                <button
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:border-white/70 transition-colors"
                  data-testid="button-pjazza-contact"
                >
                  Work with OARC
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Ready to build something
              <br />
              <span className="text-[#ff914d]">no one else has?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              PJAZZA is what happens when the best AI-creative team in Malta goes all in. Let's do the same for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff914d] text-zinc-900 font-bold rounded-xl hover:bg-[#ffa366] transition-colors"
                  data-testid="button-cta-contact-bottom"
                >
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/our-work">
                <button
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/30 transition-colors"
                  data-testid="button-back-portfolio"
                >
                  View Full Portfolio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
