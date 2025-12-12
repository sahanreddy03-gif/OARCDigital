import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MessageCircle, MapPin, Clock, ArrowDown } from "lucide-react";
import { Link } from "wouter";
import contactBokehBg from "@assets/contact-bokeh-bg.jpg";

export default function Contact() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.contact.title}
        description={supportingPagesSEO.contact.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.contact.path}`}
        ogType={supportingPagesSEO.contact.ogType}
      />
      
      {/* Hero Section with Two Options */}
      <section className="relative bg-zinc-950 pt-32 pb-20 overflow-hidden">
        {/* Bokeh background image */}
        <img 
          src={contactBokehBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#ff914d] uppercase tracking-[0.2em] text-xs font-medium mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's build something <span className="italic text-[#ff914d]">remarkable</span>
            </h1>
            <p className="text-lg text-white/70">
              We're here to help bring your vision to life. Choose how you'd like to connect with us.
            </p>
          </div>

          {/* Two Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <button 
              onClick={() => scrollToSection('message-form')}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-[#ff914d]/30 transition-all duration-300"
              data-testid="button-send-message"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff914d]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#ff914d]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Send us a Message</h3>
                  <p className="text-white/60 text-sm">Fill out our quick form and we'll get back to you within 24 hours</p>
                </div>
              </div>
              <ArrowDown className="absolute bottom-4 right-4 w-5 h-5 text-white/40 group-hover:text-[#ff914d] transition-colors" />
            </button>

            <button 
              onClick={() => scrollToSection('call-section')}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              data-testid="button-call-us"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us Directly</h3>
                  <p className="text-white/60 text-sm">Speak with our team right away</p>
                </div>
              </div>
              <ArrowDown className="absolute bottom-4 right-4 w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mt-10 text-white/50 text-sm">
            <Clock className="w-4 h-4" />
            <span>Average response time: 4 hours</span>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Call Options */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div id="message-form">
              <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
              <p className="text-white/60 mb-8">Tell us about your project and we'll be in touch soon.</p>
              <ContactForm />
            </div>

            {/* Call Us Section */}
            <div id="call-section" className="lg:pt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Call Us Directly</h2>
              <p className="text-white/60 mb-8">Prefer to talk? Reach our team directly.</p>

              <div className="space-y-6">
                {/* Phone - Malta */}
                <a 
                  href="tel:+35679711799" 
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#ff914d]/30 transition-all group"
                  data-testid="link-call-malta"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#ff914d]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Malta</p>
                    <p className="text-lg font-semibold text-white group-hover:text-[#ff914d] transition-colors">+356 7971 1799</p>
                  </div>
                </a>

                {/* Phone - India */}
                <a 
                  href="tel:+919900555588" 
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#ff914d]/30 transition-all group"
                  data-testid="link-call-india"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#ff914d]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">India</p>
                    <p className="text-lg font-semibold text-white group-hover:text-[#ff914d] transition-colors">+91 99005 55588</p>
                  </div>
                </a>

                {/* Phone - Dubai */}
                <a 
                  href="tel:+971526472981" 
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#ff914d]/30 transition-all group"
                  data-testid="link-call-dubai"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#ff914d]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Dubai</p>
                    <p className="text-lg font-semibold text-white group-hover:text-[#ff914d] transition-colors">+971 52 647 2981</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:hello@oarcdigital.com" 
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all group"
                  data-testid="link-email"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Email Us</p>
                    <p className="text-lg font-semibold text-white group-hover:text-zinc-300 transition-colors">hello@oarcdigital.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/35679711799" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all group"
                  data-testid="link-whatsapp"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#25D366]/70 mb-1">WhatsApp</p>
                    <p className="text-lg font-semibold text-[#25D366]">Chat with us</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices - Subtle Section */}
      <section className="bg-zinc-900 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-10 text-center">Our Offices</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Malta */}
            <div className="text-center" data-testid="office-malta">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Malta</h3>
              <address className="text-zinc-500 text-sm not-italic leading-relaxed">
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

      {/* Data Protection Notice */}
      <section className="bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
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
