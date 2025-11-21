import { useEffect } from "react";
import { Link } from "wouter";
import { Presentation, Sparkles, TrendingUp, Users, FileText, Award, CheckCircle2, DollarSign, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from '@assets/presentation design_1763086077235.avif';

export default function PresentationPitch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.presentationPitch.title}
        description={creativeServicesSEO.presentationPitch.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.presentationPitch.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Presentation & Pitch Design Services",
          creativeServicesSEO.presentationPitch.description,
          "Pitch Decks & Presentations"
        )}
        schemaId="service-presentation-pitch"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Business presentation and pitch deck"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Pitch decks that <span className="italic bg-gradient-to-r from-[hsl(220,70%,50%)] via-[hsl(240,70%,55%)] to-[hsl(260,70%,60%)] text-transparent bg-clip-text">close deals</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            From seed rounds to IPO roadshows, from cold outreach to boardroom keynotes—we craft presentations that command attention and drive action. Every slide tells your story with clarity, impact, and persuasive power.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[hsl(220,70%,50%)] hover:bg-white/90" data-testid="button-get-started">
              Get Your Deck
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-portfolio">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by founders, executives, and deal-makers
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Venture-Backed Startups', 'Enterprise Sales Teams', 'Consulting Firms', 'Investment Funds', 'Product Companies', 'Keynote Speakers'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[hsl(220,10%,98%)]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we helped a Series A startup raise $25M with a killer pitch deck
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[hsl(220,70%,50%)] mb-2">$25M raised</div>
                  <div className="text-sm text-muted-foreground">Series A round oversubscribed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(220,70%,50%)] mb-2">8 of 10 met</div>
                  <div className="text-sm text-muted-foreground">VCs requested follow-up meetings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(220,70%,50%)] mb-2">72 hours</div>
                  <div className="text-sm text-muted-foreground">From brief to final deck</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                A B2B SaaS startup was struggling to communicate their complex product to investors. We distilled their vision into a compelling narrative, created stunning data visualizations of their traction, and designed a deck that told a clear story from problem to solution to massive opportunity. The result: 8 out of 10 VCs requested follow-up meetings, and they closed an oversubscribed $25M Series A within 6 weeks.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Investor Pitch', 'Data Visualization', 'Storytelling', 'Financial Projections', 'Market Analysis'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[hsl(220,10%,95%)] text-[hsl(220,70%,50%)] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Types */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-3">PRESENTATION TYPES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every format. <span className="italic text-[hsl(260,70%,60%)]">Every occasion.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From fundraising to sales to keynotes—we design presentations that persuade and inspire
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Investor Pitch Decks", 
                desc: "Fundraising presentations for seed, Series A-C, IPO roadshows. Tell your story, showcase traction, secure funding.",
                icon: TrendingUp,
                features: ["Narrative structure", "Financial projections", "Market analysis", "Team highlights"]
              },
              { 
                name: "Sales Presentations", 
                desc: "Close enterprise deals with persuasive decks. Discovery, proposals, ROI calculators, case studies for decision-makers.",
                icon: Award,
                features: ["Discovery decks", "ROI calculators", "Case studies", "Tailored messaging"]
              },
              { 
                name: "Keynote & Conference Slides", 
                desc: "Stage-ready presentations for events, conferences, webinars. Visual storytelling for large audiences.",
                icon: Presentation,
                features: ["Speaker support", "Rehearsal decks", "Live presentation", "Audience engagement"]
              },
              { 
                name: "Product Launches", 
                desc: "Launch decks for internal kickoffs, press events, customer announcements. Feature walkthroughs, roadmap reveals.",
                icon: Sparkles,
                features: ["Feature walkthroughs", "Go-to-market", "Competitive positioning", "Launch timeline"]
              },
              { 
                name: "Board & Executive Reports", 
                desc: "Strategic presentations for board meetings, quarterly reviews, executive briefings. KPI tracking and strategic initiatives.",
                icon: FileText,
                features: ["Financial dashboards", "KPI tracking", "Strategic initiatives", "Risk assessments"]
              },
              { 
                name: "Training & Onboarding", 
                desc: "Educational decks for team training, customer onboarding, certification programs. Process documentation and best practices.",
                icon: Users,
                features: ["Process docs", "Best practices", "Interactive workshops", "Certification programs"]
              },
            ].map((type, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-type-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-[hsl(220,70%,50%)]/10 via-[hsl(240,70%,55%)]/10 to-[hsl(260,70%,60%)]/10 overflow-hidden flex items-center justify-center">
                    <type.icon className="h-16 w-16 text-[hsl(220,70%,50%)]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(220,70%,50%)] transition-colors">{type.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{type.desc}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(220,70%,50%)]" />
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

      {/* Our Process */}
      <section className="py-16 px-4 bg-[hsl(220,10%,98%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-[hsl(260,70%,60%)]">Story to slides</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From brief to boardroom-ready in 48-72 hours
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Story & Structure", desc: "We start with your core message, audience, and goals. Build narrative flow, outline key points, and map the emotional arc of your presentation. Clear storytelling beats confusing data dumps every time." },
              { step: "02", title: "Design & Visualization", desc: "Transform your content into stunning slides. Custom graphics, data visualizations, iconography, photography. Brand-aligned color schemes and typography. Every slide designed to communicate one clear idea." },
              { step: "03", title: "Refine & Rehearse", desc: "Polish every detail. Speaker notes, timing guidance, rehearsal support, Q&A prep. We don't deliver until it's flawless. Optional presentation coaching and dry-run sessions available." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-[hsl(220,70%,50%)]/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for those who <span className="italic bg-gradient-to-r from-[hsl(220,70%,50%)] to-[hsl(260,70%,60%)] text-transparent bg-clip-text">need to persuade</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-startups">
              <h3 className="text-xl font-bold mb-4">Venture-Backed Startups</h3>
              <p className="text-muted-foreground mb-4">
                Raise your next round with pitch decks that tell a compelling story. From seed to Series C, communicate traction, vision, and opportunity clearly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Investor pitch decks for seed through Series C</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Financial projections and market analysis visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Demo day presentations and roadshow materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-sales">
              <h3 className="text-xl font-bold mb-4">Enterprise Sales Teams</h3>
              <p className="text-muted-foreground mb-4">
                Close bigger deals faster with sales decks that demonstrate ROI and address decision-maker concerns. Tailored for each prospect, built to convert.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Enterprise sales presentations with ROI calculators</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Customizable templates for prospect-specific pitches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Case study showcases and proof-of-value slides</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-executives">
              <h3 className="text-xl font-bold mb-4">C-Suite Executives</h3>
              <p className="text-muted-foreground mb-4">
                Board presentations, quarterly reviews, and strategic initiatives. Present complex data with clarity and make informed decisions faster.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Board meeting decks with KPI dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Quarterly business reviews and strategic planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Executive briefing materials and decision frameworks</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-consultants">
              <h3 className="text-xl font-bold mb-4">Consulting Firms</h3>
              <p className="text-muted-foreground mb-4">
                Deliver client recommendations with polished, professional presentations. Strategic frameworks, findings, and action plans that drive implementation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Strategy consulting deliverables and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Client presentations and recommendation reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Workshop materials and stakeholder briefings</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-product">
              <h3 className="text-xl font-bold mb-4">Product Teams & PMs</h3>
              <p className="text-muted-foreground mb-4">
                Launch products with compelling narratives. Roadmap presentations, feature announcements, and stakeholder updates that align teams and drive action.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Product launch presentations and go-to-market plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Roadmap reviews and feature prioritization decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Stakeholder alignment and cross-team presentations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[hsl(210,20%,98%)] rounded-xl p-8 border border-border hover-elevate" data-testid="use-case-speakers">
              <h3 className="text-xl font-bold mb-4">Keynote Speakers & Thought Leaders</h3>
              <p className="text-muted-foreground mb-4">
                Command the stage with presentations that inspire and engage. From conference keynotes to webinars, deliver talks that resonate.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Conference keynotes and TEDx-style presentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Webinar slides and virtual presentation materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                  <span>Speaker support decks and rehearsal materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-[hsl(220,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(220,70%,50%)] mb-4">MAXIMIZE IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Amplify your message with <span className="italic bg-gradient-to-r from-[hsl(220,70%,50%)] to-[hsl(260,70%,60%)] text-transparent bg-clip-text">complementary services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A great pitch deck is just the beginning. Strengthen your brand, support it with data, and bring it to life with video.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/branding">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-[hsl(220,70%,50%)] hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-branding">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[hsl(220,70%,50%)] transition-colors">Branding Services</h3>
                  <ArrowRight className="h-5 w-5 text-[hsl(220,70%,50%)] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Strengthen your presentation with a cohesive brand identity. Ensure every slide reflects your professional positioning.
                </p>
              </div>
            </Link>

            <Link href="/services/video-production">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-[hsl(220,70%,50%)] hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-video">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[hsl(220,70%,50%)] transition-colors">Video Production</h3>
                  <ArrowRight className="h-5 w-5 text-[hsl(220,70%,50%)] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Embed product demos and customer testimonials in your deck. Video brings your story to life and increases engagement.
                </p>
              </div>
            </Link>

            <Link href="/services/customer-acquisition">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-[hsl(220,70%,50%)] hover:shadow-xl transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-growth">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[hsl(220,70%,50%)] transition-colors">Customer Acquisition</h3>
                  <ArrowRight className="h-5 w-5 text-[hsl(220,70%,50%)] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Back your pitch with growth data. Show investors and buyers that you have a repeatable, scalable acquisition engine.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,50%)] via-[hsl(240,70%,55%)] to-[hsl(260,70%,60%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to win your next pitch?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's design a presentation that closes deals, secures funding, and leaves a lasting impression. Expert storytelling meets stunning design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(220,70%,50%)] hover:bg-white/90" data-testid="button-cta-primary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
