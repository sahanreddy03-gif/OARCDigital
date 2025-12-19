import { useState, useEffect } from "react";
// Contact page - OARC Digital - Updated Dec 2025
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MessageCircle, MapPin, Bot, Sparkles, ArrowRight, Send } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import contactBokehBg from "@assets/contact-bokeh-bg.jpg";

const FloatingParticle = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) => (
  <motion.div
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

export default function Contact() {
  const [showChatPrompt, setShowChatPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChatPrompt(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.contact.title}
        description={supportingPagesSEO.contact.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.contact.path}`}
        ogType={supportingPagesSEO.contact.ogType}
      />
      
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 pt-24 md:pt-28 pb-16">
        {/* Bokeh background */}
        <img 
          src={contactBokehBg} 
          alt="" 
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
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-[#ff914d]" />
              <span className="text-sm text-white/70">AI-Powered Agency</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              <span className="block text-white">Let's Build Something</span>
              <span className="block bg-gradient-to-r from-[#ff914d] via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Whether you need AI automation, creative campaigns, or growth strategy—we're here to transform your vision into reality.
            </p>
          </motion.div>

          {/* Two Premium Cards - Speak With Us first, AI Strategist second */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Speak With Us Card - First */}
            <motion.div 
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
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Speak With Us</h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    Prefer a conversation? Call our Malta office directly or schedule a video call.
                  </p>

                  {/* Malta Phone - Featured */}
                  <a 
                    href="tel:+35679711799"
                    className="flex items-center gap-4 p-4 mb-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group/phone"
                    data-testid="link-call-malta-hero"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-cyan-400/70 uppercase tracking-wider">Malta</p>
                      <p className="text-lg font-semibold text-white group-hover/phone:text-cyan-400 transition-colors">+356 7971 1799</p>
                    </div>
                  </a>
                  
                  <button 
                    onClick={scrollToForm}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    data-testid="button-send-message-hero"
                  >
                    <Send className="w-5 h-5" />
                    Send a Message Instead
                  </button>
                </div>
              </div>
            </motion.div>

            {/* AI Strategist Card - Second */}
            <motion.div 
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
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Chat with AI Strategist</h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    Get instant answers about our services, pricing, and how we can help your business grow.
                  </p>

                  {/* Sample prompts */}
                  <div className="space-y-2 mb-6">
                    {["Get a quote", "Explore AI services", "See case studies"].map((prompt, i) => (
                      <div 
                        key={i}
                        className="inline-block mr-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 hover:bg-white/10 hover:text-white/80 transition-colors cursor-pointer"
                      >
                        {prompt}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#ff914d] to-orange-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#ff914d]/20 transition-all duration-300 group/btn"
                    data-testid="button-ai-strategist"
                  >
                    <Bot className="w-5 h-5" />
                    Launch AI Strategist
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative bg-zinc-950 py-24 overflow-hidden">
        {/* Extended bokeh background */}
        <img 
          src={contactBokehBg} 
          alt="" 
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-white/50 text-lg">
                    Tell us about your goals and we'll craft a tailored strategy.
                  </p>
                </motion.div>
                
                <ContactForm />
              </div>

              {/* Contact Methods Column */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Direct Contact</h3>
                  
                  {/* Malta - Featured/Larger */}
                  <a 
                    href="tel:+35679711799" 
                    className="group flex items-center gap-4 p-6 mb-4 bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/5 border border-[#ff914d]/20 rounded-2xl hover:border-[#ff914d]/40 transition-all"
                    data-testid="link-call-malta"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#ff914d]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#ff914d]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#ff914d]/70 mb-1 font-medium">Malta</p>
                      <p className="text-xl font-bold text-white group-hover:text-[#ff914d] transition-colors">+356 7971 1799</p>
                    </div>
                  </a>

                  {/* India & Dubai - Smaller */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <a 
                      href="tel:+919900555588" 
                      className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                      data-testid="link-call-india"
                    >
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-1">India</p>
                      <p className="text-sm font-semibold text-white group-hover:text-[#ff914d] transition-colors">+91 99005 55588</p>
                    </a>
                    
                    <a 
                      href="tel:+971526472981" 
                      className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                      data-testid="link-call-dubai"
                    >
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Dubai</p>
                      <p className="text-sm font-semibold text-white group-hover:text-[#ff914d] transition-colors">+971 52 647 2981</p>
                    </a>
                  </div>

                  {/* Email */}
                  <a 
                    href="mailto:hello@oarcdigital.com" 
                    className="group flex items-center gap-4 p-4 mb-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                    data-testid="link-email"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Email</p>
                      <p className="font-semibold text-white group-hover:text-white/80 transition-colors">hello@oarcdigital.com</p>
                    </div>
                  </a>

                  {/* WhatsApp - Prominent */}
                  <a 
                    href="https://wa.me/35679711799" 
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
                      <p className="font-semibold text-[#25D366]">Chat instantly</p>
                    </div>
                  </a>

                  {/* AI Chatbot Card */}
                  <motion.div 
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
                        <p className="font-semibold text-white">AI Strategist</p>
                        <p className="text-xs text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Online now
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-white/50 mb-4">
                      Need quick answers? Our AI can help you explore services, get estimates, and book calls.
                    </p>
                    <button 
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                      data-testid="button-ai-chat-sidebar"
                    >
                      Start Conversation
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="relative bg-zinc-900 border-t border-white/5 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={contactBokehBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-10 text-center">Global Presence</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Malta - Larger */}
            <div className="text-center md:scale-110" data-testid="office-malta">
              <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 border border-[#ff914d]/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-[#ff914d]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Malta</h3>
              <address className="text-zinc-400 text-sm not-italic leading-relaxed">
                Seaside Spirit<br />
                Triq ix-Xatt, Ta' Xbiex<br />
                XBX 1020
              </address>
            </div>

            {/* India */}
            <div className="text-center" data-testid="office-india">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">India</h3>
              <address className="text-zinc-500 text-sm not-italic leading-relaxed">
                Olympia Tech Park<br />
                Guindy, Chennai<br />
                600032
              </address>
            </div>

            {/* Dubai */}
            <div className="text-center" data-testid="office-dubai">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Dubai</h3>
              <address className="text-zinc-500 text-sm not-italic leading-relaxed">
                Cluster F<br />
                Jumeirah Lake Towers<br />
                UAE
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-zinc-950 border-t border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Malta Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>50+ Clients Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Notice */}
      <section className="bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 py-8">
          <p className="text-xs text-zinc-600 text-center max-w-3xl mx-auto" data-testid="text-gdpr-notice">
            When you contact us, we process your information in accordance with our{' '}
            <Link href="/privacy-policy" className="underline hover:text-zinc-400 transition-colors">Privacy Policy</Link>. 
            OARC Digital is registered in Malta and complies with GDPR.
          </p>
        </div>
      </section>
    </Layout>
  );
}
