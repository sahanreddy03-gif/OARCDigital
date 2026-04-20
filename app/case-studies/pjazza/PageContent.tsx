"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink, Play, Users, Layers, Globe, TrendingUp, Shield, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

import pjazzaLogo from '@assets/logo.svg';
import heroScreen from '@assets/IMG_0605_1775068068190.jpeg';
import desktopShot from '@assets/screenshot-1775068037591.png';
import howItWorks from '@assets/IMG_0612_1775068068190.jpeg';
import liveFeed from '@assets/IMG_0610_1775068068190.jpeg';
import storeBrowse from '@assets/IMG_0606_1775068068190.jpeg';
import peopleHire from '@assets/IMG_0613_1775068068190.jpeg';
import businessScreen from '@assets/IMG_0620_1775068068190.jpeg';
import whyPjazza from '@assets/IMG_0622_1775068068190.jpeg';

const stats = [
  { value: '24+', label: 'Founding Businesses', icon: Users },
  { value: '12', label: 'Sectors Covered', icon: Layers },
  { value: 'Live', label: 'Commerce Platform', icon: TrendingUp },
  { value: 'Malta-first', label: 'Live Marketplace', icon: Globe },
];

const sectors = [
  'Food & Dining', 'Property & Real Estate', 'Cars & Automotive', 'Yachts & Marine',
  'Home Services & Trades', 'Freelancers & Professionals', 'Health & Wellness', 'Fashion & Retail',
  'Electronics', 'Tourism', 'Education', 'Pets & Animals',
];

export default function PjazzaCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout>
      

      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black" data-testid="section-pjazza-hero">
        <div className="absolute inset-0">
          <img src={heroScreen} alt="PJAZZA live shopping" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E11D48]/20 border border-[#E11D48]/40 rounded-full text-[#E11D48] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
              Built by OARC Digital — Our Own Product
            </div>

            <div className="mb-6">
              <img src={pjazzaLogo} alt="PJAZZA" className="h-14 md:h-18 w-auto" />
            </div>

            <h1 className="font-bold text-white leading-[1.02] tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              Watch it live.<br />
              <span className="text-[#E11D48]">Buy it now.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Malta's live shopping marketplace — see every product, service, and property in real time
              before you buy. We didn't just market Malta. We built the marketplace.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
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

            <a
              href="https://maltaverse.live/pjazza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E11D48] text-white font-semibold rounded-full hover:bg-[#c81a3f] transition-colors"
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">The Brief</span>
              </div>
              <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
                Malta's commerce needed a revolution.
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>Malta's local businesses were invisible online. Facebook groups, WhatsApp chains, and outdated directories were the status quo — no discoverability, no trust infrastructure, no way to sell live to your community.</p>
                <p>The OARC team saw what platforms like Whatnot and TikTok Shop were doing globally and asked: <em className="text-white/80 not-italic">why doesn't Malta have this?</em></p>
                <p>Rather than pitch the idea to a client, we built it ourselves. PJAZZA — meaning "town square" in Maltese — is a live commerce marketplace where any local business can broadcast, sell, and connect with Malta's community in real time.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img src={desktopShot} alt="PJAZZA desktop platform" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl overflow-hidden border border-white/10 shadow-xl w-36 h-52 md:w-44 md:h-64">
                <img src={storeBrowse} alt="PJAZZA store browse" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-black" data-testid="section-pjazza-how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-white/10 max-w-xs mx-auto md:mx-0"
            >
              <img src={howItWorks} alt="See it. Chat it. Buy it." className="w-full h-auto" loading="lazy" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">How It Works</span>
              </div>
              <h2 className="font-bold text-white mb-8 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
                See it. Chat it.<br /><span className="text-[#E11D48]">Buy it.</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Play, num: '01', title: 'Watch live', desc: 'See every product, property, and service streamed live by Malta businesses. No filters. No staging.' },
                  { icon: Users, num: '02', title: 'Chat & negotiate', desc: 'Ask questions in real time, negotiate price, and engage directly with the seller during the live stream.' },
                  { icon: Shield, num: '03', title: 'Protected payment', desc: 'Built-in escrow ensures your money is only released once you receive exactly what you saw live.' },
                ].map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.num} className="flex gap-4 p-4 bg-zinc-900 border border-white/[0.06] rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E11D48]/15 border border-[#E11D48]/25 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#E11D48]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#E11D48] font-bold mb-0.5">{step.num}</div>
                        <h3 className="text-white font-bold mb-1">{step.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIVE FEED + 12 SECTORS */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-sectors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">12 Sectors</span>
              </div>
              <h2 className="font-bold text-white mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Every corner of Malta's economy
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">From artisan food stalls to luxury yachts — PJAZZA connects all of Malta's commercial life in one live marketplace.</p>

              <div className="grid grid-cols-2 gap-2">
                {sectors.map((sector, i) => (
                  <motion.div
                    key={sector}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="px-3 py-2.5 bg-white/[0.03] border border-white/[0.07] rounded-lg"
                    data-testid={`sector-${i}`}
                  >
                    <span className="text-sm text-white/70 font-medium">{sector}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl overflow-hidden border border-white/10 max-w-xs mx-auto md:mx-0 md:max-w-none"
            >
              <img src={liveFeed} alt="PJAZZA live feed and sectors" className="w-full h-auto" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SHOP & HIRE */}
      <section className="py-24 md:py-32 bg-black" data-testid="section-pjazza-shop-hire">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#E11D48]" />
              <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Two-sided marketplace</span>
              <div className="w-8 h-[2px] bg-[#E11D48]" />
            </div>
            <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Shop any store. Hire anyone.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
              data-testid="card-shop"
            >
              <img src={storeBrowse} alt="Shop any store in Malta" className="w-full h-72 md:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#E11D48] text-xs font-bold uppercase tracking-widest mb-2">Shop Live</p>
                <h3 className="text-2xl font-bold text-white mb-2">Shop any store in Malta</h3>
                <p className="text-white/60 text-sm leading-relaxed">Watch streams or video call — see products in real time. Same-day delivery across Malta.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
              data-testid="card-hire"
            >
              <img src={peopleHire} alt="Hire anyone in Malta" className="w-full h-72 md:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#E11D48] text-xs font-bold uppercase tracking-widest mb-2">People</p>
                <h3 className="text-2xl font-bold text-white mb-2">Hire anyone in Malta</h3>
                <p className="text-white/60 text-sm leading-relaxed">Watch them work live. Book instantly. Tradespeople, lawyers, trainers, and more — all verified and live.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOR BUSINESSES */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-business">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">For Businesses</span>
              </div>
              <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
                Your shop window<br /><span className="text-[#E11D48]">is now live.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">Whatever your business — restaurant, trade, retail, freelance — show Malta what you do in real time. No ads. No algorithms. Just real customers watching you, live.</p>

              <div className="space-y-3">
                {[
                  { icon: Zap, text: '60 seconds to go live — upload once, plays 24/7, no editing needed' },
                  { icon: Users, text: 'Built-in audience — every buyer browsing your sector sees you automatically' },
                  { icon: Shield, text: 'Pay only when you earn — 90 days free, zero risk to try' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#E11D48]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-[#E11D48]" />
                      </div>
                      <p className="text-sm text-white/60">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl overflow-hidden border border-white/10 max-w-xs mx-auto md:mx-0"
            >
              <img src={businessScreen} alt="Your shop window is now live" className="w-full h-auto" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY PJAZZA */}
      <section className="py-24 md:py-32 bg-black" data-testid="section-pjazza-why">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-white/10 max-w-xs mx-auto md:mx-0 order-2 md:order-1"
            >
              <img src={whyPjazza} alt="Every objection turned into a strength" className="w-full h-auto" loading="lazy" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#E11D48]" />
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Why This Matters</span>
              </div>
              <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
                We don't just advise.<br /><span className="text-[#E11D48]">We build.</span>
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>PJAZZA is proof of what OARC Digital can do when given full creative and technical ownership. We researched the market, designed the product, wrote the code, and shipped the platform — the same capabilities we bring to every client engagement.</p>
                <p>With founding businesses already committed and Malta's only live shopping marketplace live at maltaverse.live, PJAZZA is on track to become the dominant commerce platform on the island — and a portfolio piece no other agency can match.</p>
                <p>When you work with OARC, you're working with a team that has built, launched, and owns a marketplace. That's a different conversation entirely.</p>
              </div>
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
              <p className="text-white/70 mt-2">Malta's first live shopping marketplace · 12 sectors · Escrow protected</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maltaverse.live/pjazza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#E11D48] font-bold rounded-full hover:bg-white/90 transition-colors"
                data-testid="link-pjazza-cta-primary"
              >
                Visit the Platform
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link href="/contact">
                <button
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:border-white/70 transition-colors"
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

      {/* BOTTOM CTA */}
      <section className="py-24 md:py-32 bg-zinc-950" data-testid="section-pjazza-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Ready to build something<br /><span className="text-[#ff914d]">no one else has?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">PJAZZA is what happens when the best AI-creative team in Malta goes all in. Let's do the same for your brand.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff914d] text-zinc-900 font-bold rounded-full hover:bg-[#ffa366] transition-colors" data-testid="button-cta-contact-bottom">
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/our-work">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-colors" data-testid="button-back-portfolio">
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
