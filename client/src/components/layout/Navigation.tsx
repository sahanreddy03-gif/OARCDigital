import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import oarcLogoOnly from "@assets/IMG_8813_(1)_1764796694787.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/our-work", label: "Our Work" },
    { href: "/why-us", label: "Why Us" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ];

  const textShadow = '0 1px 3px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,0.25)';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
            <img 
              src={oarcLogoOnly} 
              alt="Oarc Digital logo" 
              className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
              style={{ filter: 'drop-shadow(0 2px 12px rgba(0, 0, 0, 0.5))' }}
              data-testid="img-logo"
            />
            <span 
              className="font-logo text-white text-xl md:text-2xl lg:text-3xl tracking-[0.02em] font-bold" 
              style={{ textShadow }}
            >
              <span className="text-[#ff914d] text-2xl md:text-3xl lg:text-4xl">O</span>
              <span>arc</span>
              <span className="ml-1.5">D</span>
              <span>igital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs lg:text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-[#c4ff4d]"
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
              className="bg-white text-black px-5 py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-white/90 transition-all shadow-lg"
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
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === link.href
                      ? "text-[#c4ff4d]"
                      : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 bg-white text-black px-6 py-3 rounded-full font-semibold text-center shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
