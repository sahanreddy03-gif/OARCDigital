import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, CheckCircle2, Smartphone, TrendingUp, Users, Zap, Globe, Clock, BarChart3, Target, Shield, LayoutGrid, Filter, Calendar, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import cricketBettingApp from '@assets/generated_images/cricket_betting_mobile_app_mockup.png';
import cricketStadium from '@assets/generated_images/vibrant_ipl_cricket_stadium.png';

export default function CricketPulseIndiaCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '340%', label: 'Conversion Increase', icon: TrendingUp },
    { value: '280%', label: 'Mobile Engagement', icon: Smartphone },
    { value: '4.2M', label: 'Monthly Users', icon: Users },
    { value: '12 Weeks', label: 'Time to Launch', icon: Clock }
  ];

  const markets = ['India', 'Bangladesh', 'United Kingdom', 'Australia'];

  const features = [
    { 
      icon: LayoutGrid, 
      title: 'Match Pods', 
      description: 'Redesigned match pods displaying live odds with a compact, mobile-optimized view ensuring easy scrolling with optimal information hierarchy for IPL, PSL, and international matches.' 
    },
    { 
      icon: Target, 
      title: 'Strategic Affiliate Placement', 
      description: 'Relocated affiliate links to strike a balance between directing traffic and maintaining seamless user experience—key promotional areas dedicated to partner highlights.' 
    },
    { 
      icon: Filter, 
      title: 'Multi-Regional Predictions', 
      description: 'Implemented filterable match predictions according to different leagues—IPL, Bangladesh Premier League, The Hundred, Big Bash League, and international test matches.' 
    },
    { 
      icon: Calendar, 
      title: 'Chronological Ordering', 
      description: 'Sorted matches into live and scheduled games, arranged by match times with real-time updates during high-traffic IPL matches.' 
    },
    { 
      icon: Award, 
      title: 'Expert Integration', 
      description: 'Integrated cricket analysts and former players into all posts and match predictions, emphasising the expertise behind each prediction for credibility.' 
    },
    { 
      icon: Shield, 
      title: 'Regulatory Compliance', 
      description: 'Ensured adherence to regulatory standards across India, UK, and international markets—safeguarding platform integrity and user trust.' 
    }
  ];

  const outcomes = [
    { title: 'Tripled Conversion Rates', description: 'Strategic UX improvements and affiliate placement optimization drove 340% increase in conversions' },
    { title: 'Massive Mobile Growth', description: '280% increase in mobile engagement from the mobile-first redesign optimized for Indian users' },
    { title: 'Multi-Market Expansion', description: 'Platform now serves cricket fans across India, Bangladesh, UK, and Australia seamlessly' },
    { title: 'Industry Leadership', description: 'CricketPulse became the go-to platform for IPL predictions, serving 4.2M monthly users during peak season' }
  ];

  return (
    <Layout>
      <SEOHead
        title="CricketPulse India | iGaming Platform Case Study | OARC Digital"
        description="How OARC Digital transformed a leading Indian cricket predictions platform with mobile-first UX that boosted conversions by 340%. iGaming and sports tech case study."
        canonicalUrl="https://oarcdigital.com/case-studies/cricketpulse-india"
        ogType="article"
      />

      {/* Hero Section - Vibrant Cricket Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
        
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/our-work">
                <button className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to Our Work</span>
                </button>
              </Link>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                  iGaming
                </span>
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
                  Sports Tech
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                  Mobile-First
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl leading-tight" data-testid="heading-case-study-title">
                How We Built India's Leading{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">
                  Cricket Predictions Platform
                </span>
              </h1>

              <p className="text-xl text-white/80 max-w-3xl mb-10">
                CricketPulse India caters to millions of cricket lovers across South Asia, offering expert match predictions 
                backed by data analysis and former player insights. We transformed their outdated platform into a 
                mobile-first powerhouse that tripled conversions.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                {markets.map((market, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                    <Globe className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm font-medium">{market}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-green-400 mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-black text-white mb-1" data-testid={`stat-value-${idx}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="relative bg-black py-0" data-testid="section-showcase">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-orange-500/10" />
              <img 
                src={cricketBettingApp}
                alt="CricketPulse mobile app showing live IPL match odds, predictions, and betting interface"
                className="w-full h-auto relative z-10"
                loading="lazy"
                data-testid="img-hero-product"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="bg-gradient-to-b from-black to-zinc-900 py-24 px-6" data-testid="section-about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-bold text-green-400 tracking-widest uppercase mb-4">01 — Client Overview</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                India's Premier Cricket Predictions Platform
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Established in 2019, CricketPulse India caters to cricket lovers across South Asia, offering detailed 
                match predictions backed by thorough analyses and expert insights. Beyond the odds, CricketPulse delves 
                into the narratives behind each run, wicket, and boundary.
              </p>
              <p className="text-lg text-white/80 mb-8">
                With a team of seasoned cricket analysts—including former IPL players and sports journalists—the platform 
                delivers comprehensive match predictions for IPL, international test matches, and emerging leagues like 
                the Bangladesh Premier League and The Hundred.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-green-400/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Industry</div>
                  <div className="text-white font-bold">iGaming & Sports Tech</div>
                </div>
                <div className="border-l-2 border-green-400/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Primary Market</div>
                  <div className="text-white font-bold">India</div>
                </div>
                <div className="border-l-2 border-green-400/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Scope</div>
                  <div className="text-white font-bold">Full Platform Redesign</div>
                </div>
                <div className="border-l-2 border-green-400/40 pl-4">
                  <div className="text-sm text-white/40 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-white font-bold">12 Weeks</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-2xl blur-xl" />
              <img 
                src={cricketStadium}
                alt="IPL cricket stadium atmosphere"
                className="relative rounded-xl shadow-2xl border border-white/10"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-zinc-900 py-24 px-6" data-testid="section-challenge">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-orange-400 tracking-widest uppercase mb-4">02 — The Challenge</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              An Outdated Platform Losing Cricket Fans
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              CricketPulse faced declining engagement with an outdated website that failed its mobile-first audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Poor Mobile Experience', description: 'The existing website wasn\'t optimized for mobile—despite 85% of Indian users accessing via smartphone' },
              { title: 'Cluttered Affiliate Links', description: 'Aggressive affiliate placement overshadowed the core value proposition of expert predictions' },
              { title: 'Broken Information Hierarchy', description: 'Users struggled to find live IPL odds and match insights buried in poor navigation' },
              { title: 'Low Conversion Rates', description: 'Despite high traffic during IPL season, conversion to affiliate partners remained below industry benchmarks' },
              { title: 'Single Market Focus', description: 'Platform served only Indian users, missing opportunities in Bangladesh, UK expat communities, and Australia' },
              { title: 'No Expert Credibility', description: 'Predictions lacked visible attribution to the expert analysts behind them' }
            ].map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl border-l-4 border-l-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-white/70">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-black py-24 px-6" data-testid="section-solution">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-green-400 tracking-widest uppercase mb-4">03 — The Solution</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Mobile-First Platform Redesign
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We designed a mobile-first web application with strategic elements to optimize 
              CricketPulse's conversion rates and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="bg-black py-24 px-6" data-testid="section-outcome">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-green-400 tracking-widest uppercase mb-4">04 — The Outcome</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              From Struggling Platform to Industry Leader
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Through these strategic enhancements, CricketPulse enhanced user experience, increased conversion rates, 
              and strengthened its position as a leading platform for cricket enthusiasts globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl border-l-4 border-l-green-500/50"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{outcome.title}</h3>
                    <p className="text-white/70">{outcome.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-block p-12 bg-gradient-to-br from-green-500/10 to-orange-500/10 border border-white/10 rounded-2xl max-w-3xl">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
                "OARC understood the Indian cricket market like no other agency. They transformed our platform 
                into something our users love—especially during IPL season when traffic is at its peak."
              </p>
              <p className="text-white/60">Product Director, CricketPulse India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-zinc-900 py-24 px-6" data-testid="section-cta">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Building an iGaming Platform?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you're targeting cricket fans in South Asia, football enthusiasts in Europe, or 
              global sports betting markets, OARC delivers mobile-first platforms that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8"
                  data-testid="button-cta-contact"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/our-work">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/5"
                  data-testid="button-view-more"
                >
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
