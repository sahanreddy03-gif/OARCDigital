import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FAQSection, { FAQItem } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CreativeNavigation from '@/components/CreativeNavigation';
import QuickLeadModal from '@/components/QuickLeadModal';
import { 
  ArrowRight, Check, Clock, Zap, Users, BarChart3, 
  Calendar, Bot, Workflow, Settings, ChevronLeft, ChevronRight
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const clientLogos = [
  { name: 'Spinola Development', initial: 'SD' },
  { name: 'Atlas Insurance', initial: 'AI' },
  { name: 'MaltaPost', initial: 'MP' },
  { name: 'Pharma MT', initial: 'PM' },
  { name: 'Heritage Hotels', initial: 'HH' },
  { name: 'Gaming Malta', initial: 'GM' },
];

const testimonials = [
  {
    quote: "OARC set up our entire operations in a way that keeps everything organized and moving fast. I spend less time managing and more time building. If you want a system that actually works, OARC is the team to call.",
    name: "Mark Borg",
    title: "Managing Director",
    company: "Spinola Development",
    avatar: "MB"
  },
  {
    quote: "Having someone come in and say, 'We're the experts in this. Let us show you the way.' I can tell you: The grass is greener on this side with proper automation over spreadsheets.",
    name: "Sarah Camilleri",
    title: "Operations Lead",
    company: "Heritage Hotels Malta",
    avatar: "SC"
  },
  {
    quote: "I wasted so much time building my first few companies. I wish I had a system like this helping me delegate 80% of my daily tasks. Now, I finally have time to focus on growth.",
    name: "David Grech",
    title: "Founder",
    company: "TechMalta Ventures",
    avatar: "DG"
  },
  {
    quote: "OARC helped our team remove manual steps in several of our processes. They were thorough throughout to make sure the tech worked through very nuanced use cases.",
    name: "Maria Vella",
    title: "CEO",
    company: "Pharma MT",
    avatar: "MV"
  },
  {
    quote: "OARC was amazing to work with - organized, didn't need handholding, and brought us a very useful automation deliverable that saves us hours daily.",
    name: "Joseph Attard",
    title: "Co-Founder",
    company: "Atlas Insurance",
    avatar: "JA"
  },
  {
    quote: "OARC crushed our CRM build. Great documentation and adaptations to the needs of our business. Highly recommended for Malta businesses.",
    name: "Anna Zammit",
    title: "Director",
    company: "Gaming Malta",
    avatar: "AZ"
  },
];

const whatWeAutomate = [
  {
    icon: BarChart3,
    title: "Revenue Operations",
    description: "Pipeline tracking, lead scoring, and sales automation that converts more prospects into customers."
  },
  {
    icon: Users,
    title: "Client Onboarding",
    description: "Automated welcome sequences, document collection, and setup workflows that delight new clients."
  },
  {
    icon: Workflow,
    title: "Project Delivery",
    description: "Task automation, milestone tracking, and team coordination that keeps projects on schedule."
  },
  {
    icon: Settings,
    title: "Billing & Invoicing",
    description: "Automated invoicing, payment reminders, and financial reporting that improves cash flow."
  },
];

const benefits = [
  { metric: "20+", label: "hours saved weekly" },
  { metric: "3x", label: "faster client onboarding" },
  { metric: "90%", label: "fewer missed follow-ups" },
  { metric: "€15K+", label: "annual cost reduction" },
];

const faqItems: FAQItem[] = [
  {
    question: "What types of businesses in Malta do you work with?",
    answer: "We work with businesses across all sectors in Malta including real estate, legal, finance, healthcare, hospitality, iGaming, retail, and professional services. Our automation solutions are customized for each industry's specific workflows and challenges."
  },
  {
    question: "How long does it take to implement automation?",
    answer: "Most clients see their first automations live within 2-3 weeks. A complete operational overhaul typically takes 6-8 weeks. We prioritize quick wins that deliver immediate ROI while building toward comprehensive automation."
  },
  {
    question: "Do I need technical knowledge to use the systems you build?",
    answer: "Not at all. We design every automation to be user-friendly and require zero technical knowledge. We also provide training and documentation so your team can confidently manage day-to-day operations."
  },
  {
    question: "What tools and platforms do you integrate with?",
    answer: "We integrate with all major business tools including CRMs (HubSpot, Salesforce, Pipedrive), project management (ClickUp, Asana, Monday), accounting (Xero, QuickBooks), and custom software. If you use it, we can automate it."
  },
  {
    question: "How do you measure the ROI of automation?",
    answer: "We track time saved, tasks automated, error reduction, and revenue impact. Every client receives monthly reports showing exactly how automation is benefiting their business with clear metrics."
  },
  {
    question: "What makes OARC different from other automation agencies?",
    answer: "We're based in Malta and understand the local business landscape. We combine AI-powered solutions with deep operational expertise, and we focus on revenue-driving automations rather than just technical implementations."
  },
  {
    question: "Can you help with AI beyond automation?",
    answer: "Absolutely. We offer AI chatbots, AI employees for sales and support, custom AI products, and strategic AI consulting. Our automation work often evolves into broader AI transformation projects."
  },
  {
    question: "What does ongoing support look like?",
    answer: "All packages include dedicated support. We monitor your automations, handle updates and improvements, and are available via WhatsApp for quick questions. Growth and Enterprise clients get priority support with faster response times."
  },
];

export default function RevenueSolutionsLanding() {
  const [showModal, setShowModal] = useState(false);
  const [modalSource, setModalSource] = useState('Automation Page');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const openModal = (source: string) => {
    setModalSource(source);
    setShowModal(true);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Business Automation Malta | AI-Powered Operations | OARC Digital</title>
        <meta name="description" content="Stop losing money to operational chaos. OARC Digital automates RevOps, onboarding, delivery, and billing for Malta businesses. Save 20+ hours weekly with AI automation." />
        <meta name="keywords" content="business automation Malta, AI automation, RevOps Malta, workflow automation, operational efficiency, Malta business solutions" />
        <link rel="canonical" href="https://oarcdigital.com/solutions" />
        <meta property="og:title" content="Business Automation Malta | OARC Digital" />
        <meta property="og:description" content="AI-powered automation for Malta businesses. Save 20+ hours weekly." />
        <meta property="og:type" content="website" />
      </Helmet>

      <CreativeNavigation />

      <main className="bg-black min-h-screen">
        
        {/* ========== HERO SECTION ========== */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
            {/* Gradient orbs */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6" data-testid="text-hero-headline">
                Never lose another Client<br />
                or Employee due to<br />
                <span className="text-white">Operational Chaos</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
                Your growth is breaking your operations. We automate RevOps, Onboarding,
                Delivery, and Billing with AI — so projects flow smoothly, teams focus on
                high-impact work, and margins stay healthy.
              </p>

              <a
                href="https://wa.me/35679711799?text=Hi%20OARC%2C%20I%27d%20like%20to%20explore%20automation%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold gap-3 h-auto"
                  data-testid="button-hero-cta"
                >
                  <Calendar className="w-5 h-5" />
                  Explore Your AI Powered Future
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ========== LOGO STRIP ========== */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-white/50 text-sm mb-8">
              Our clients save <span className="text-white font-semibold">20+ hours every week</span> by automating repeated tasks
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((logo, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10"
                >
                  <span className="text-white/40 font-bold text-lg">{logo.initial}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PROBLEM SECTION ========== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Manual & broken ops force your talented team to waste time and money
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  We build AI automations that eliminate manual steps, wasted clicks, and status-check messages.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "20+ hours saved per week",
                    "Immediate workflow wins",
                    "No hiring bloat, no extra software"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-[#c4ff4d]/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#c4ff4d]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/35679711799?text=Hi%20OARC%2C%20I%27d%20like%20to%20book%20a%20discovery%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold gap-3 h-auto"
                    data-testid="button-discovery-cta"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Discovery Call
                  </Button>
                </a>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <Card 
                    key={i}
                    className="p-6 bg-white/[0.02] border-white/10 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#c4ff4d] mb-2">
                      {benefit.metric}
                    </div>
                    <div className="text-white/50 text-sm">
                      {benefit.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS CAROUSEL ========== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative">
              {/* Testimonial Card */}
              <Card className="p-8 md:p-12 bg-white/[0.02] border-white/10 relative">
                <div className="absolute left-8 md:left-12 top-6 text-6xl text-white/10 font-serif">"</div>
                <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 relative z-10">
                  {testimonials[testimonialIndex].quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c4ff4d]/20 flex items-center justify-center">
                    <span className="text-[#c4ff4d] font-bold">{testimonials[testimonialIndex].avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[testimonialIndex].name}</div>
                    <div className="text-white/50 text-sm">{testimonials[testimonialIndex].title}, {testimonials[testimonialIndex].company}</div>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/5 hover:text-white transition-all"
                  data-testid="button-testimonial-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === testimonialIndex ? 'bg-[#c4ff4d] w-6' : 'bg-white/20'
                      }`}
                      data-testid={`button-testimonial-dot-${i}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/5 hover:text-white transition-all"
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHAT WE AUTOMATE ========== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                What We Automate
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                End-to-end automation for the operations that matter most to Malta businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeAutomate.map((item, i) => (
                <Card 
                  key={i}
                  className="p-6 bg-white/[0.02] border-white/10 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c4ff4d]/10 flex items-center justify-center mb-4 group-hover:bg-[#c4ff4d]/20 transition-all">
                    <item.icon className="w-6 h-6 text-[#c4ff4d]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Choose the package that fits your automation needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Starter */}
              <Card className="p-8 bg-white/[0.02] border-white/10 relative">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Automation Pilot</h3>
                  <p className="text-white/50 text-sm">Perfect for testing automation in your business</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">€2,497</span>
                  <span className="text-white/50 ml-2">one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Operations audit", "3 workflow automations", "Team training", "30-day support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-[#c4ff4d]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openModal('Automation Pilot')}
                  className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full py-6 h-auto"
                  data-testid="button-pricing-pilot"
                >
                  Get Started
                </Button>
              </Card>

              {/* Growth - Popular */}
              <Card className="p-8 bg-white/[0.04] border-[#c4ff4d]/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#c4ff4d] text-black text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Growth Engine</h3>
                  <p className="text-white/50 text-sm">Full operational transformation</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">€4,997</span>
                  <span className="text-white/50 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Everything in Pilot", "Unlimited automations", "AI employee integration", "Priority support", "Monthly optimization"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-[#c4ff4d]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openModal('Growth Engine')}
                  className="w-full bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] rounded-full py-6 h-auto font-semibold"
                  data-testid="button-pricing-growth"
                >
                  Get Started
                </Button>
              </Card>

              {/* Enterprise */}
              <Card className="p-8 bg-white/[0.02] border-white/10 relative">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                  <p className="text-white/50 text-sm">Custom solutions for larger operations</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Everything in Growth", "Custom AI development", "Dedicated account manager", "SLA guarantee", "On-site workshops"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-[#c4ff4d]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openModal('Enterprise')}
                  className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full py-6 h-auto"
                  data-testid="button-pricing-enterprise"
                >
                  Contact Us
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQSection 
              faqs={faqItems} 
              schemaId="solutions-faq"
              darkMode={true}
            />
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to stop losing money to manual processes?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Book a free discovery call and we'll show you exactly where automation can save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/35679711799?text=Hi%20OARC%2C%20I%27d%20like%20to%20discuss%20automation%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] rounded-full px-10 py-6 text-lg font-semibold gap-3 h-auto"
                  data-testid="button-final-cta"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Message Us on WhatsApp
                </Button>
              </a>
              <a href="tel:+35679711799">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg border-white/20 text-white hover:bg-white/10 h-auto"
                  data-testid="button-call-cta"
                >
                  Or Call +356 7971 1799
                </Button>
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              We respond within 2 hours during business hours
            </p>
          </div>
        </section>

      </main>

      <Footer />

      <QuickLeadModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        source={modalSource}
      />
    </>
  );
}
