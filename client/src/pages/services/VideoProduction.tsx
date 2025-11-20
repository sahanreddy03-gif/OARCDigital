import { useEffect } from "react";
import { Link } from "wouter";
import { Video, Film, Sparkles, ArrowRight, Play, CheckCircle2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { creativeServicesSEO } from "@/data/seoMetadata";
import { serviceImagesBySlug } from "@/assets/serviceImages";
import videoImg1 from "@assets/stock_images/professional_video_p_57625a3b.jpg";
import videoImg2 from "@assets/stock_images/professional_video_p_4775d034.jpg";
import videoImg3 from "@assets/stock_images/professional_video_p_5547a3ec.jpg";

const heroImage = serviceImagesBySlug['video-production'];

export default function VideoProduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={creativeServicesSEO.videoProduction.title}
        description={creativeServicesSEO.videoProduction.description}
        canonicalUrl={`https://oarcdigital.com${creativeServicesSEO.videoProduction.path}`}
        ogType={creativeServicesSEO.videoProduction.ogType}
      />
    <div className="video-production">
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Video production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Video storytelling that <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">captivates and converts</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Full-service video production from concept to delivery. Explainer videos, testimonials, ads, and social content. Cinematic quality, 14-day turnaround, built to drive results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90" data-testid="button-get-started">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Creating video content for
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['SaaS Companies', 'E-learning Platforms', 'Real Estate', 'Hospitality', 'Health Tech', 'DTC Brands'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-3">VIDEO IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Video content that drives business results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven to increase engagement, conversions, and brand recall
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "86%", label: "Higher conversion with video", gradient: "from-purple-600 to-pink-600" },
              { value: "1200%", label: "More shares than static", gradient: "from-blue-600 to-cyan-600" },
              { value: "95%", label: "Message retention rate", gradient: "from-orange-600 to-red-600" },
              { value: "14 days", label: "Avg. production time", gradient: "from-green-600 to-emerald-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text mb-3`}>{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Video */}
      <section className="py-20 px-4 bg-[hsl(270,100%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">STORYTELLING</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Every frame tells <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">your story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to final delivery, we create videos that capture attention, build trust, and drive action—whether it's explainers, testimonials, or ads.
            </p>
          </div>
        </div>
      </section>

      {/* Production Options - Large Cards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">VIDEO TYPES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every video format. <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Every use case.</span>
          </h2>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { name: "Explainer Videos", desc: "Clear, engaging videos that simplify complex products. Perfect for SaaS, fintech, and tech companies. 60-90s optimized for conversion.", img: videoImg1 },
              { name: "Customer Testimonials", desc: "Authentic testimonial videos that build trust and social proof. Real customers, real results, powerful storytelling.", img: videoImg2 },
              { name: "Product Demo Videos", desc: "Show your product in action. Highlight features, benefits, and use cases. Perfect for e-commerce and SaaS.", img: videoImg3 },
              { name: "Social Media Ads", desc: "15s-60s video ads for Facebook, Instagram, TikTok, YouTube. Hook-first, platform-optimized, built to convert.", img: videoImg1 },
              { name: "Brand Storytelling", desc: "Cinematic brand videos that communicate your mission, values, and vision. Build emotional connection with your audience.", img: videoImg2 },
              { name: "Animated Videos", desc: "2D/3D animation, motion graphics, and kinetic typography. Perfect when live-action isn't the right fit.", img: videoImg3 },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] group" data-testid={`card-video-type-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Video content for <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">every industry</span> and use case
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-border" data-testid="use-case-saas">
              <h3 className="text-xl font-bold mb-4">SaaS & Tech Companies</h3>
              <p className="text-muted-foreground mb-4">
                Explainer videos that simplify complex products and drive trial signups. Perfect for companies needing to educate prospects quickly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Product explainer videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Demo & tutorial videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Customer testimonials</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-border" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4">E-commerce & DTC Brands</h3>
              <p className="text-muted-foreground mb-4">
                Product videos and social ads that stop scrollers and drive sales. Built for brands needing content that converts.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Product showcase videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Lifestyle & brand storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>UGC-style social ads</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-border" data-testid="use-case-realestate">
              <h3 className="text-xl font-bold mb-4">Real Estate & Hospitality</h3>
              <p className="text-muted-foreground mb-4">
                Cinematic property tours and venue showcases that sell premium experiences and accelerate decision-making.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Property tour videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Aerial drone footage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Virtual walkthroughs</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-border" data-testid="use-case-healthcare">
              <h3 className="text-xl font-bold mb-4">Healthcare & Medical</h3>
              <p className="text-muted-foreground mb-4">
                Patient education and testimonial videos that build trust and communicate complex medical information clearly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Patient testimonials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Procedure explainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Medical device demos</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-border" data-testid="use-case-education">
              <h3 className="text-xl font-bold mb-4">Education & E-learning</h3>
              <p className="text-muted-foreground mb-4">
                Engaging educational content and course marketing videos that drive enrollments and improve learning outcomes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Course promo videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Animated lesson content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Student success stories</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-border" data-testid="use-case-corporate">
              <h3 className="text-xl font-bold mb-4">Corporate & Enterprise</h3>
              <p className="text-muted-foreground mb-4">
                Internal communications, recruitment videos, and brand documentaries for large organizations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Company culture videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Executive messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Training & onboarding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[hsl(270,100%,98%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">CASE STUDIES</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Videos that <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">drive measurable ROI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                industry: "SaaS Platform", 
                challenge: "Creating explainer video to improve trial conversions",
                result: "4.8x signups",
                metric1: "73% increase in trial conversion",
                metric2: "$2.1M ARR from video traffic",
                icon: Video
              },
              { 
                industry: "Real Estate", 
                challenge: "Producing property tour videos for luxury listings",
                result: "12M views",
                metric1: "58% faster sale cycles",
                metric2: "$47M in property sales",
                icon: Camera
              },
              { 
                industry: "Health Tech", 
                challenge: "Building trust with patient testimonial videos",
                result: "5.2x leads",
                metric1: "64% increase in consultations",
                metric2: "$1.3M in new patient revenue",
                icon: Film
              },
            ].map((study, i) => (
              <div key={i} className="group p-8 bg-white rounded-xl border border-border hover:border-purple-600 hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <study.icon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm uppercase tracking-wider text-purple-600 mb-2">{study.industry}</div>
                <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">{study.result}</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{study.metric1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{study.metric2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Quality */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">PRODUCTION QUALITY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cinematic quality. <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Commercial-grade production.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We bring full production capabilities: professional crew, cinema cameras, lighting, sound design, color grading, and motion graphics. Every frame is intentional.
              </p>
              <div className="space-y-4">
                {[
                  "Full-service production from concept to delivery",
                  "Professional scriptwriting and storyboarding",
                  "Cinema-grade cameras and lighting",
                  "Sound design, color grading, and VFX",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Videos Produced", value: "1,000+" },
                { label: "Production Time", value: "14d" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Revisions Included", value: "3" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-3">{stat.value}</div>
                  <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services / Internal CTAs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-purple-600 mb-4">AMPLIFY YOUR IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pair video with these <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">powerful services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Great video content deserves great distribution. Maximize ROI by combining video production with our complementary services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/web-design">
              <div className="group p-8 bg-purple-50 rounded-xl border border-border hover:border-purple-600 hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-web">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">Web Design</h3>
                  <ArrowRight className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Embed your video content in high-converting landing pages and product showcases that turn viewers into customers.
                </p>
                <div className="text-sm text-purple-600 font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-purple-50 rounded-xl border border-border hover:border-purple-600 hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-social">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">Social Media Creative</h3>
                  <ArrowRight className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Repurpose your video content into scroll-stopping social assets optimized for Instagram, TikTok, LinkedIn, and Facebook.
                </p>
                <div className="text-sm text-purple-600 font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-purple-50 rounded-xl border border-border hover:border-purple-600 hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Drive targeted traffic to your video content with YouTube ads, Facebook video campaigns, and LinkedIn sponsored content.
                </p>
                <div className="text-sm text-purple-600 font-semibold">Learn More →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to tell your <span className="italic">story on video?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get professional video production that captures attention and drives results
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 h-12 px-8" data-testid="button-cta-demo">
              Start Your Project
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
