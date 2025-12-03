import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import companyLogo from "@assets/IMG_8775_1764722473830.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/our-work", label: "Our Work" },
    { href: "/why-us", label: "Why Us" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "/enterprise", label: "Enterprise" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
            <img 
              src={companyLogo} 
              alt="Oarc Digital logo" 
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
              data-testid="img-logo"
            />
            <span 
              className="text-foreground text-xl sm:text-2xl font-medium uppercase"
              style={{ letterSpacing: '0.15em', fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Oarc Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover-elevate transition-all"
              data-testid="button-contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border backdrop-blur-md bg-background/95">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium ${
                  location === link.href
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-center hover-elevate transition-all"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="button-mobile-contact"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
