import { useEffect } from "react";
import { Link } from "wouter";
import { Film, Zap, Play, Sparkles, Move, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import heroImage from '@assets/motion design_1763084597887.avif';
import motionImg1 from "@assets/stock_images/motion_graphics_anim_30522a7b.jpg";
import motionImg2 from "@assets/stock_images/motion_graphics_anim_efb22394.jpg";
import motionImg3 from "@assets/stock_images/motion_graphics_anim_aae15d3e.jpg";

const motionDesignFAQs: FAQItem[] = [
  { question: "What types of motion design do you create?", answer: "Logo animations, explainer videos, social media motion graphics, UI animations, and full animated commercials. From subtle to spectacular." },
  { question: "How long does motion design take?", answer: "Simple animations take 1-2 weeks. Complex explainer videos and commercials typically require 4-8 weeks from concept to delivery." },
  { question: "What makes OARC's motion design different?", answer: "We design motion that tells stories, not just moves. Every animation serves a purpose—engagement, clarity, or emotional connection." },
  { question: "What file formats do you deliver?", answer: "MP4, MOV, GIF, and Lottie files for web. Platform-specific exports optimized for Instagram, TikTok, YouTube, and LinkedIn." },
  { question: "Do you handle audio and music?", answer: "Yes, we source licensed music and create sound design. Voiceover production and audio mixing included for video projects." },
  { question: "Can you animate our existing brand assets?", answer: "Absolutely. We bring static logos, icons, and graphics to life while maintaining brand consistency and guidelines." },
  { question: "What is the investment for motion design?", answer: "Logo animations start from €500. Explainer videos range from €3,000-10,000 depending on length and complexity." },
  { question: "Do you offer motion design packages?", answer: "Yes, we offer monthly content packages for consistent social media animation needs. Retainer clients get priority and discounts." }
];

export default function MotionDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.motionDesign.title}
        description={creativeServicesSEO.motionDesign.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.motionDesign.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Motion Design Services",
          creativeServicesSEO.motionDesign.description,
          "Motion Graphics & Animation"
        )}
        schemaId="service-motion-design"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Motion graphics and animation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Motion that <span className="italic text-[#c4ff4d]">moves people</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Motion graphics that command attention and drive engagement. From logo reveals to complex explainer videos—we make your brand impossible to ignore in a scroll-obsessed world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-get-started">
                Animate Your Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-[#1a2e29]/60 mb-8">
            Creating motion for ambitious brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SaaS Platforms', 'Streaming Services', 'Mobile Apps', 'B2B Tech Companies', 'Digital Agencies', 'Fintech Startups'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-[#1a2e29]">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - REDUCED SIZE */}
      <section className="py-16 px-4 bg-[#a8b892]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#1a2e29] mb-3">PROVEN ENGAGEMENT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2e29]">
              Static is dead. <span className="italic text-white">Motion wins.</span>
            </h2>
            <p className="text-lg text-[#1a2e29]/80 max-w-2xl mx-auto">
              Motion graphics capture attention, explain complex ideas simply, and boost engagement across every channel.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "4,100+", label: "Motion projects delivered" },
              { value: "3.2x", label: "Engagement lift vs static" },
              { value: "7 days", label: "30s animation turnaround" },
              { value: "94%", label: "Year-over-year retention" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl border border-[#1a2e29]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold text-[#23AACA] mb-3">{stat.value}</div>
                <div className="text-base text-[#1a2e29]/60 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">CLIENT SPOTLIGHT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            How animated explainers boosted <span className="italic text-[#c4ff4d]">a SaaS platform's conversions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-lg text-white/70 mb-6">
                A B2B project management platform had a complex feature set that confused prospects. Their homepage bounce rate was 68%, and demo request rates were stagnant. They needed to simplify their value proposition and make their platform feel approachable.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Created 90s animated explainer for homepage hero',
                  'Designed feature-specific micro-animations (15-30s each)',
                  'Developed social media cut-downs for LinkedIn/Twitter',
                  'Built kinetic typography ads for retargeting campaigns'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#23AACA] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-white">Results After 60 Days</h3>
              <div className="space-y-6">
                {[
                  { metric: '-43%', label: 'Homepage bounce rate reduction' },
                  { metric: '+218%', label: 'Demo request conversion lift' },
                  { metric: '+156%', label: 'Social media engagement increase' },
                  { metric: '5.7x', label: 'ROI on motion design investment' }
                ].map((result, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-zinc-800 last:border-0">
                    <span className="text-white/70">{result.label}</span>
                    <span className="text-2xl font-bold text-[#c4ff4d]">{result.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motion Services */}
      <section className="py-20 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">MOTION DESIGN SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29]">
            Every style. <span className="italic text-orange-500">Every platform.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Logo Animations", 
                desc: "Transform your static logo into a memorable brand moment. Perfect for video intros, app launches, and social stingers.",
                features: ['Intro sequences', 'YouTube outros', 'App splash screens', 'Social stingers'],
                icon: Sparkles 
              },
              { 
                name: "Explainer Videos", 
                desc: "Simplify complex products and services with engaging animated stories that educate and convert.",
                features: ['SaaS product demos', 'How-it-works videos', 'Script to render', '60-90s optimal length'],
                icon: Play 
              },
              { 
                name: "Kinetic Typography", 
                desc: "Make text dance. Lyric videos, quote animations, and announcement videos that stop thumbs mid-scroll.",
                features: ['Lyric videos', 'Quote animations', 'Announcement videos', 'Music sync'],
                icon: Move 
              },
              { 
                name: "Social Motion Graphics", 
                desc: "Platform-optimized animations designed to capture attention in crowded feeds and drive engagement.",
                features: ['Instagram Reels', 'TikTok videos', 'LinkedIn posts', 'GIFs & stickers'],
                icon: Zap 
              },
              { 
                name: "Data Visualization", 
                desc: "Transform boring statistics into compelling animated stories. Make data memorable and shareable.",
                features: ['Animated charts', 'Number counters', 'Progress bars', 'Timeline animations'],
                icon: Layers 
              },
              { 
                name: "Title Sequences", 
                desc: "Broadcast-quality opening sequences for videos, podcasts, webinars, and events.",
                features: ['Video intros', 'Podcast openers', 'Webinar titles', 'Customizable templates'],
                icon: Film 
              },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[420px] group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#1a2e29]/10 h-full">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={[motionImg1, motionImg2, motionImg3][i % 3]} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1a2e29]">{service.name}</h3>
                    <p className="text-sm text-[#1a2e29]/60 mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[#1a2e29]">
                          <CheckCircle2 className="h-4 w-4 text-[#23AACA]" />
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
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-saas-startups">
              <h3 className="text-2xl font-bold mb-4">SaaS & Tech Startups</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Explain complex products simply with animated explainers that boost conversion rates and reduce support queries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Product explainer videos for landing pages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Feature highlight animations for updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Onboarding tutorial animations</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-social-brands">
              <h3 className="text-2xl font-bold mb-4">Social Media Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Stand out in crowded feeds with eye-catching motion graphics that stop scrolls and drive engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Instagram Reels and TikTok animations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Animated quotes and text graphics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">GIFs and stickers for Stories</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-content-creators">
              <h3 className="text-2xl font-bold mb-4">Content Creators & YouTubers</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Professional motion graphics elevate your content quality and build recognizable brand identity across all videos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Channel intro and outro sequences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Animated lower thirds and titles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Subscribe and like button animations</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-agencies">
              <h3 className="text-2xl font-bold mb-4">Agencies & Design Studios</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Add motion design capabilities to your service offering without hiring full-time animators or learning complex software.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">White-label motion design services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fast turnaround for client projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Scalable production capacity</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-elearning">
              <h3 className="text-2xl font-bold mb-4">E-learning & Education</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Make complex subjects engaging and memorable with animated educational content that boosts comprehension and retention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Animated lesson explainers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Data visualization and infographic animations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Interactive learning modules</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-corporate">
              <h3 className="text-2xl font-bold mb-4">Corporate & Enterprise</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Professional motion graphics for internal communications, training, and investor presentations that command attention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Executive presentation animations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Training and onboarding videos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Brand guideline video assets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Services That Work Great Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/illustration">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-illustration">
                <h3 className="text-xl font-bold mb-3 text-white">Illustration Services</h3>
                <p className="text-white/70 mb-4">
                  Combine custom illustrations with motion design for truly unique animated content that stands out.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-social-creative">
                <h3 className="text-xl font-bold mb-3 text-white">Social Media Creative</h3>
                <p className="text-white/70 mb-4">
                  Pair motion graphics with strategic social content for maximum engagement and platform growth.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/branding">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#23AACA] cursor-pointer transition-all" data-testid="related-service-branding">
                <h3 className="text-xl font-bold mb-3 text-white">Branding Services</h3>
                <p className="text-white/70 mb-4">
                  Bring your brand identity to life with animated logos and motion-first brand guidelines.
                </p>
                <div className="flex items-center text-[#23AACA] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={motionDesignFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about motion design" 
        schemaId="faq-motion-design" 
      />

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#23AACA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to add motion to your brand?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's create motion graphics that captivate audiences, explain ideas, and elevate your content.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta-primary">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
