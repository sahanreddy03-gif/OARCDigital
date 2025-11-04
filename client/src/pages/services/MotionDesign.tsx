import { useEffect } from "react";
import { Link } from "wouter";
import { Film, Zap, Play, Sparkles, Move, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/motion_graphics_anim_5e0b9119.jpg";
import motionImg1 from "@assets/stock_images/motion_graphics_anim_30522a7b.jpg";
import motionImg2 from "@assets/stock_images/motion_graphics_anim_efb22394.jpg";
import motionImg3 from "@assets/stock_images/motion_graphics_anim_aae15d3e.jpg";

export default function MotionDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Motion Design Services - Animation & Motion Graphics | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Motion graphics, kinetic typography, logo animations, and explainer videos. Bring your brand to life with professional motion design.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Motion Design Services - Bring Your Brand to Life | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Motion graphics and animation that captivates. Logo animations, explainer videos, kinetic typography, and more.');
  }, []);

  return (
    <Layout>
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
            Motion that <span className="italic bg-gradient-to-r from-[hsl(280,70%,50%)] via-[hsl(290,65%,55%)] to-[hsl(310,70%,60%)] text-transparent bg-clip-text">moves people</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Motion graphics that command attention and drive engagement. From logo reveals to complex explainer videos—we make your brand impossible to ignore in a scroll-obsessed world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[hsl(280,70%,50%)] hover:bg-white/90" data-testid="button-get-started">
                Animate Your Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Creating motion for ambitious brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SaaS Platforms', 'Streaming Services', 'Mobile Apps', 'B2B Tech Companies', 'Digital Agencies', 'Fintech Startups'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - REDUCED SIZE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,50%)] mb-3">PROVEN ENGAGEMENT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Static is dead. <span className="italic text-[hsl(310,70%,60%)]">Motion wins.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <div key={i} className="text-center p-6 bg-gradient-to-br from-[hsl(280,10%,98%)] to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(280,70%,50%)] to-[hsl(310,70%,60%)] text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-[hsl(280,10%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,50%)] mb-4">CLIENT SPOTLIGHT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            How animated explainers boosted <span className="italic text-[hsl(310,70%,60%)]">a SaaS platform's conversions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A B2B project management platform had a complex feature set that confused prospects. Their homepage bounce rate was 68%, and demo request rates were stagnant. They needed to simplify their value proposition and make their platform feel approachable.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Created 90s animated explainer for homepage hero',
                  'Designed feature-specific micro-animations (15-30s each)',
                  'Developed social media cut-downs for LinkedIn/Twitter',
                  'Built kinetic typography ads for retargeting campaigns'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(280,70%,50%)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Results After 60 Days</h3>
              <div className="space-y-6">
                {[
                  { metric: '-43%', label: 'Homepage bounce rate reduction' },
                  { metric: '+218%', label: 'Demo request conversion lift' },
                  { metric: '+156%', label: 'Social media engagement increase' },
                  { metric: '5.7x', label: 'ROI on motion design investment' }
                ].map((result, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{result.label}</span>
                    <span className="text-2xl font-bold text-[hsl(280,70%,50%)]">{result.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motion Services */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(280,70%,50%)] mb-4">MOTION DESIGN SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Every style. <span className="italic text-[hsl(310,70%,60%)]">Every platform.</span>
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
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border h-full">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={[motionImg1, motionImg2, motionImg3][i % 3]} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(280,70%,50%)]" />
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
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(280,70%,50%)] to-[hsl(310,70%,60%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to add motion to your brand?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's create motion graphics that captivate audiences, explain ideas, and elevate your content.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(280,70%,50%)] hover:bg-white/90" data-testid="button-cta-primary">
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
