import { useEffect } from "react";
import { Link } from "wouter";
import { Mail, TrendingUp, Zap, Users, BarChart, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/email_marketing_lapt_bf28184c.jpg";

export default function EmailCreative() {
  useEffect(() => {
    document.title = "Email Creative Services - High-Converting Email Design | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Email templates, campaign design, and newsletter layouts that drive clicks and conversions. Mobile-responsive, tested across all email clients.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Email Creative Services - Emails That Convert | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Email design and templates that drive opens, clicks, and conversions. Tested across all devices and clients.');
  }, []);

  return (
    <Layout>
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Email marketing on laptop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Emails that <span className="italic bg-gradient-to-r from-[hsl(25,85%,55%)] via-[hsl(35,80%,60%)] to-[hsl(45,85%,65%)] text-transparent bg-clip-text">actually get clicked</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Email design that drives opens, clicks, and revenue. Mobile-responsive templates tested across every major email client. Strategic layouts engineered for maximum conversions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(25,85%,55%)] hover:bg-white/90" data-testid="button-get-started">
              Design My Emails
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-templates">
              View Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Designing emails for revenue-driven brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['DTC E-commerce', 'SaaS Companies', 'Media Publishers', 'B2B Services', 'Online Education', 'Subscription Brands'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - REDUCED SIZE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(25,85%,55%)] mb-3">PROVEN PERFORMANCE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Beautiful design. <span className="italic text-[hsl(45,85%,65%)]">Better results.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Great email design isn't just pretty—it's strategic. We optimize every element for opens, clicks, and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "52%", label: "Avg. open rate improvement" },
              { value: "3.8x", label: "Higher CTR vs baseline" },
              { value: "8,200+", label: "Campaigns designed yearly" },
              { value: "100%", label: "Cross-client tested" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(25,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(25,85%,55%)] to-[hsl(45,85%,65%)] text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-[hsl(25,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-[hsl(25,85%,55%)] mb-4">CLIENT SPOTLIGHT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            How email redesigns drove <span className="italic text-[hsl(45,85%,65%)]">$480K in recovered revenue</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground mb-6">
                An e-commerce fashion brand had terrible email performance—18% open rates, 0.9% click rates, and abandoned cart emails that nobody read. Their email revenue had flatlined despite a growing subscriber list. They needed a complete creative overhaul.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Redesigned entire email template system (welcome, campaign, cart, browse)',
                  'Created mobile-first layouts optimized for quick scanning',
                  'Developed urgency-driven abandoned cart sequence (3 emails)',
                  'Built product recommendation module with dynamic personalization'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Results After 90 Days</h3>
              <div className="space-y-6">
                {[
                  { metric: '41%', label: 'New average open rate' },
                  { metric: '4.7%', label: 'Click-through rate (5.2x increase)' },
                  { metric: '$480K', label: 'Recovered cart revenue (vs $142K before)' },
                  { metric: '38%', label: 'Email-attributed revenue share' }
                ].map((result, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{result.label}</span>
                    <span className="text-2xl font-bold text-[hsl(25,85%,55%)]">{result.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Services */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(25,85%,55%)] mb-4">EMAIL DESIGN SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every campaign. <span className="italic text-[hsl(45,85%,65%)]">Every inbox.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Campaign Emails", 
                desc: "High-converting promotional emails for product launches, sales, and seasonal campaigns.",
                features: ['Product launches', 'Flash sales', 'A/B test variants', 'Mobile-optimized'],
                icon: Zap 
              },
              { 
                name: "Newsletter Design", 
                desc: "Content-rich newsletter templates that keep subscribers engaged week after week.",
                features: ['Weekly/monthly layouts', 'Easy-to-scan sections', 'Consistent branding', 'Drag-and-drop friendly'],
                icon: Mail 
              },
              { 
                name: "Welcome Flows", 
                desc: "Multi-email onboarding sequences that turn new subscribers into engaged customers.",
                features: ['Welcome series', 'Product education', 'Feature tours', 'Timed drip sequences'],
                icon: Users 
              },
              { 
                name: "Transactional Emails", 
                desc: "Functional emails that maintain brand consistency and include strategic upsell opportunities.",
                features: ['Order confirmations', 'Shipping updates', 'Password resets', 'Subtle upsells'],
                icon: BarChart 
              },
              { 
                name: "Abandoned Cart Recovery", 
                desc: "Strategic reminder sequences that recover lost sales without being annoying.",
                features: ['1hr/24hr/3day sequence', 'Product images', 'Urgency triggers', 'Discount strategies'],
                icon: TrendingUp 
              },
              { 
                name: "Template Systems", 
                desc: "Complete modular template libraries for in-house teams to build campaigns quickly.",
                features: ['Reusable components', 'Brand guidelines', 'Mailchimp/Klaviyo ready', 'Design documentation'],
                icon: Eye 
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[420px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border h-full">
                  <div className="relative h-[280px] bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-20 w-20 text-[hsl(25,85%,55%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(25,85%,55%)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(25,85%,55%)] to-[hsl(45,85%,65%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to boost email performance?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's design emails that get opened, clicked, and drive real revenue for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(25,85%,55%)] hover:bg-white/90" data-testid="button-cta-primary">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              See Templates
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
