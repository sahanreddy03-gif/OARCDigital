"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
const greenLogo = "/attached_assets/image_1767660951950.png";
const aiExcellence = "/attached_assets/739d30f2ecb844e9c1186e62ca63efbda518ff4a-1050x1200_1761257258076.avif";
const creativeStrategy = "/attached_assets/db64abcfab31dccdde04f1fb8be45337dfb692e9-1392x1392_1761257777037.avif";
const revenueCentered = "/attached_assets/07c35cf0cbddd33390e2f878e287f38703ae7b26-1040x904_1761258187346.avif";

// Reorganized service categories - no overlap, clear purpose
const serviceCategories = [
  {
    title: "Creative Services",
    href: "/creative",
    items: [
      { name: "Social media creative", href: "/services/social-media-creative" },
      { name: "Ad creative", href: "/services/ad-creative" },
      { name: "Branding", href: "/services/branding" },
      { name: "Video production", href: "/services/video-production" },
      { name: "Web design", href: "/services/web-design" },
      { name: "Motion design", href: "/services/motion-design" },
    ]
  },
  {
    title: "Marketing & Growth",
    href: "/services",
    items: [
      { name: "Social media management", href: "/services/social-media-creative-management" },
      { name: "Paid advertising", href: "/services/paid-advertising" },
      { name: "SEO", href: "/services/seo-services" },
      { name: "Email marketing", href: "/services/email-marketing" },
      { name: "Content marketing", href: "/services/content-marketing" },
    ]
  },
  {
    title: "AI Services",
    href: "/services/ai-employees",
    items: [
      { name: "AI employees", href: "/services/ai-employees" },
      { name: "AI-powered creative", href: "/services/ai-creative" },
      { name: "AI consulting", href: "/services/ai-consulting" },
      { name: "Automation solutions", href: "/services/automation" },
    ]
  },
  {
    title: "Custom Development",
    href: "/services/web-development",
    items: [
      { name: "Custom AI products", href: "/services/ai-products" },
      { name: "Mobile applications", href: "/services/mobile-apps" },
      { name: "Web development", href: "/services/web-development" },
    ]
  }
];

// Why Us dropdown — two distinct intents (Task #121):
//   /why-oarc = comparison-stage ("over other Malta agencies")
//   /why-us   = brand-discovery / founder origin story
// Plus /about as the founder bio anchor. Each card targets a separate
// search intent to avoid the cannibalisation the old hash-anchor menu caused.
const whyUsItems = [
  {
    title: "Why Choose OARC",
    description: "Side-by-side comparison vs the typical Malta agency model — speed, cost, AI integration, lock-in.",
    image: aiExcellence,
    href: "/why-oarc"
  },
  {
    title: "Our Founding Story",
    description: "How OARC Digital was founded in Birkirkara, the gap we saw, and the principles we built around.",
    image: creativeStrategy,
    href: "/why-us"
  },
  {
    title: "About the Team",
    description: "The minimal founder bio, how we work, and how to visit the studio for a Friday review.",
    image: revenueCentered,
    href: "/about"
  },
];

export default function Navigation() {
  const location = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showWhyUsMenu, setShowWhyUsMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/creative", label: "Creative" },
    { href: "/ai-agents", label: "AI Agents" },
    { href: "/solutions", label: "Automation" },
    { href: "/our-work", label: "Our Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/tools", label: "Tools" },
  ];

  const textShadow = '0 1px 3px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,0.25)';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
          {/* Logo - Stacked OARC / DIGITAL */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
            <img 
              src={greenLogo} 
              alt="OARC Digital logo" 
              className="h-10 w-10 lg:h-11 lg:w-11 object-contain"
              data-testid="img-logo"
            />
            <div 
              className="flex flex-col items-center leading-none"
              style={{ fontFamily: 'var(--font-heatrobox)' }}
            >
              <span className="text-white text-xl md:text-2xl tracking-[0.2em]">OARC</span>
              <span className="text-[0.45rem] md:text-[0.5rem] tracking-[0.35em]" style={{ color: 'rgba(196, 255, 77, 0.6)' }}>DIGITAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/creative"
              className={`text-xs lg:text-sm font-medium transition-colors ${
                location === "/creative"
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
              style={{ textShadow }}
              data-testid="link-creative"
            >
              Creative
            </Link>

            <Link
              href="/ai-agents"
              className={`text-xs lg:text-sm font-medium transition-colors ${
                location === "/ai-agents"
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
              style={{ textShadow }}
              data-testid="link-ai-agents"
            >
              AI Agents
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <Link 
                href="/services"
                className={`flex items-center gap-1 text-xs lg:text-sm font-medium transition-colors ${
                  location.startsWith("/services")
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ textShadow }}
                data-testid="link-services"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`} />
              </Link>

              {/* Superside-style Mega Menu */}
              <AnimatePresence>
                {showServicesMenu && (
                  <m.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-[#F5F5F0] rounded-2xl shadow-2xl border border-zinc-200/50 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {serviceCategories.map((category, idx) => (
                          <div key={idx}>
                            <Link 
                              href={category.href}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 mb-4 px-3 py-1.5 rounded-full border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-100 transition-all group"
                              data-testid={`link-category-${idx}`}
                            >
                              {category.title}
                              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                            </Link>
                            <ul className="space-y-2 mt-4">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors block py-1"
                                    data-testid={`link-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Browse All Services CTA */}
                      <div className="mt-6 pt-5 border-t border-zinc-200">
                        <Link 
                          href="/services" 
                          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold rounded-xl transition-colors group"
                          data-testid="link-browse-all-services"
                        >
                          Browse all services
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Why Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowWhyUsMenu(true)}
              onMouseLeave={() => setShowWhyUsMenu(false)}
            >
              <button 
                className={`flex items-center gap-1 text-xs lg:text-sm font-medium transition-colors ${
                  location.startsWith("/why-us")
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ textShadow }}
                data-testid="button-why-us"
              >
                Why Us
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showWhyUsMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Why Us Mega Menu with Our Difference content */}
              <AnimatePresence>
                {showWhyUsMenu && (
                  <m.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-[#F5F5F0] rounded-2xl shadow-2xl border border-zinc-200/50 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-zinc-900">Get to <span className="italic">know us</span></h3>
                        <p className="text-xs text-zinc-500">Compare us, read our story, or meet the team</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {whyUsItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="group"
                            data-testid={`link-whyus-${idx}`}
                          >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <h4 className="text-sm font-semibold text-zinc-900 italic">{item.title}</h4>
                            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-zinc-200">
                        <Link 
                          href="/why-us" 
                          className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors group"
                          data-testid="link-whyus-full"
                        >
                          Read the full founding story
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs lg:text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ textShadow }}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-white/20 transition-all"
              data-testid="button-contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu - Dark Glassmorphic */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                <Link
                  href="/creative"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === "/creative" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-creative"
                >
                  Creative
                </Link>
                <Link
                  href="/ai-agents"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === "/ai-agents" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-ai-agents"
                >
                  AI Agents
                </Link>
                <Link
                  href="/services"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location.startsWith("/services") ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-services"
                >
                  Services
                </Link>
                <Link
                  href="/why-oarc"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === "/why-oarc" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-why-oarc"
                >
                  Why Choose OARC
                </Link>
                <Link
                  href="/why-us"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === "/why-us" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-why-us"
                >
                  Our Founding Story
                </Link>
                <Link
                  href="/about"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === "/about" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-about"
                >
                  About the Team
                </Link>
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 text-base font-medium border-b border-white/5 ${
                      location === link.href
                        ? "text-white"
                        : "text-white/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block mt-4 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-white/20 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-contact"
                >
                  Contact Us
                </Link>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
