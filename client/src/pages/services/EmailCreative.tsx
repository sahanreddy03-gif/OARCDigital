import { useEffect } from "react";
import { Link } from "wouter";
import { Mail, TrendingUp, Zap, Users, BarChart, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/email craetion_1763085804635.avif';

export default function EmailCreative() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.emailCreative.title}
        description={creativeServicesSEO.emailCreative.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.emailCreative.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Email Creative Design Services",
          creativeServicesSEO.emailCreative.description,
          "Email Marketing Design"
        )}
        schemaId="service-email-creative"
      />
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
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[hsl(25,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(25,85%,55%)] to-[hsl(45,85%,65%)] text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
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

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-2xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Online retailers sending hundreds of emails monthly need beautiful, conversion-focused templates that work flawlessly across all devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Product showcase emails optimized for mobile shopping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Abandoned cart sequences that recover revenue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Promotional campaign templates for launches and sales</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-saas">
              <h3 className="text-2xl font-bold mb-4">SaaS Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Software companies need email designs that nurture free trials, onboard users, and reduce churn with educational content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Multi-step onboarding sequences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Feature announcement and product update emails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Trial expiration and upgrade reminder campaigns</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-publishers">
              <h3 className="text-2xl font-bold mb-4">Media & Publishing</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Publishers and content creators need newsletter designs that maximize readership, engagement, and subscriber retention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Scannable newsletter layouts with clear hierarchy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Digest-style templates for curated content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Subscription upsell and renewal campaigns</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-b2b-services">
              <h3 className="text-2xl font-bold mb-4">B2B Services</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Professional services firms need polished email designs that build credibility and nurture long B2B sales cycles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Thought leadership newsletters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Case study and white paper promotion emails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Event invitation and webinar registration templates</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-course-creators">
              <h3 className="text-2xl font-bold mb-4">Course Creators & Educators</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Online educators need email designs that sell courses, deliver lessons, and keep students engaged throughout their learning journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Course launch and sales funnel emails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Lesson delivery and drip content templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Student engagement and completion reminders</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-subscriptions">
              <h3 className="text-2xl font-bold mb-4">Subscription Boxes & Memberships</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Subscription businesses need emails that reduce churn, encourage referrals, and maximize customer lifetime value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Monthly box reveal and unboxing emails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Renewal reminders and win-back campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Referral program promotion templates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-[hsl(25,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Services That Work Great Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/ai-copywriting">
              <div className="p-6 bg-white border border-border rounded-xl hover-elevate cursor-pointer transition-all" data-testid="related-service-ai-copywriting">
                <h3 className="text-xl font-bold mb-3">AI Copywriting</h3>
                <p className="text-muted-foreground mb-4">
                  Beautiful emails need compelling copy—scale your email content with AI-powered writing that converts.
                </p>
                <div className="flex items-center text-[hsl(25,85%,55%)] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/funnel-automation">
              <div className="p-6 bg-white border border-border rounded-xl hover-elevate cursor-pointer transition-all" data-testid="related-service-funnel-automation">
                <h3 className="text-xl font-bold mb-3">Funnel Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automate your email sequences and nurture leads on autopilot with intelligent marketing automation.
                </p>
                <div className="flex items-center text-[hsl(25,85%,55%)] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/digital-marketing">
              <div className="p-6 bg-white border border-border rounded-xl hover-elevate cursor-pointer transition-all" data-testid="related-service-digital-marketing">
                <h3 className="text-xl font-bold mb-3">Digital Marketing Services</h3>
                <p className="text-muted-foreground mb-4">
                  Integrate email with a full-funnel marketing strategy for maximum customer acquisition and retention.
                </p>
                <div className="flex items-center text-[hsl(25,85%,55%)] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
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
