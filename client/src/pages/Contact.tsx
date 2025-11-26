import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.contact.title}
        description={supportingPagesSEO.contact.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.contact.path}`}
        ogType={supportingPagesSEO.contact.ogType}
      />
      
      {/* Hero Section */}
      <section className="relative bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-wider text-muted-foreground mb-4">Get in Touch</p>
            <h1 className="text-heading-xl font-bold mb-6">
              Let's build something <span className="italic text-[#16a34a]">remarkable</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              We're here to help bring your vision to life. Reach out to our team across three continents.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Contact */}
      <section className="bg-[#FAF9F6] border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="group" data-testid="contact-email">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <p className="text-caption uppercase tracking-wider text-muted-foreground font-medium">Email</p>
              </div>
              <a 
                href="mailto:hello@oarcdigital.com" 
                className="text-heading-sm font-semibold text-foreground hover:text-[#16a34a] transition-colors"
                data-testid="link-email-primary"
              >
                hello@oarcdigital.com
              </a>
            </div>
            
            <div className="group" data-testid="contact-phone-primary">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <p className="text-caption uppercase tracking-wider text-muted-foreground font-medium">Malta HQ</p>
              </div>
              <a 
                href="tel:+35679711799" 
                className="text-heading-sm font-semibold text-foreground hover:text-[#16a34a] transition-colors"
                data-testid="link-phone-primary"
              >
                +356 7971 1799
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-caption uppercase tracking-wider text-muted-foreground mb-12 font-medium">Our Offices</h2>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Malta */}
            <div data-testid="office-malta">
              <div className="mb-6">
                <h3 className="text-heading-sm font-bold mb-4">Malta</h3>
                <address className="text-muted-foreground text-sm not-italic leading-relaxed">
                  Seaside Spirit<br />
                  Triq ix-Xatt, Ta' Xbiex<br />
                  XBX 1020, Malta
                </address>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">General Enquiries</p>
                  <a href="tel:+35679711799" className="text-sm text-foreground hover:text-[#16a34a] transition-colors" data-testid="link-malta-general">
                    +356 7971 1799
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Sales</p>
                  <a href="tel:+35699312258" className="text-sm text-foreground hover:text-[#16a34a] transition-colors" data-testid="link-malta-sales">
                    +356 9931 2258
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">EU Business Line</p>
                  <a href="tel:+31631160151" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-malta-eu">
                    +31 6311 60151
                  </a>
                </div>
              </div>
            </div>

            {/* Chennai */}
            <div data-testid="office-chennai">
              <div className="mb-6">
                <h3 className="text-heading-sm font-bold mb-4">Chennai</h3>
                <address className="text-muted-foreground text-sm not-italic leading-relaxed">
                  OARC Digital<br />
                  Olympia Tech Park, SIDCO Industrial Estate<br />
                  Guindy, Chennai 600032, India
                </address>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">General Enquiries</p>
                  <a href="tel:+919900555588" className="text-sm text-foreground hover:text-[#16a34a] transition-colors" data-testid="link-chennai-general">
                    +91 99005 55588
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Operations Desk</p>
                  <a href="tel:+918056158924" className="text-sm text-foreground hover:text-[#16a34a] transition-colors" data-testid="link-chennai-operations">
                    +91 80561 58924
                  </a>
                </div>
              </div>
            </div>

            {/* Dubai */}
            <div data-testid="office-dubai">
              <div className="mb-6">
                <h3 className="text-heading-sm font-bold mb-4">Dubai</h3>
                <address className="text-muted-foreground text-sm not-italic leading-relaxed">
                  OARC Digital<br />
                  Cluster F, Jumeirah Lake Towers<br />
                  Dubai, United Arab Emirates
                </address>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Business Enquiries</p>
                  <a href="tel:+971526472981" className="text-sm text-foreground hover:text-[#16a34a] transition-colors" data-testid="link-dubai-business">
                    +971 52 647 2981
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAF9F6] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
          <h3 className="text-heading-lg font-bold mb-4">Ready to get started?</h3>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a call with our team to discuss your project and discover how we can help you achieve your goals.
          </p>
          <Link href="/">
            <button className="px-8 py-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2" data-testid="button-book-call">
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
