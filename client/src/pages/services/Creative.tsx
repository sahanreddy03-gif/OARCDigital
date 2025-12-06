import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Camera, Palette, Clapperboard, Film, Layers, Sparkles, Wand2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import videoProductionImg from '@assets/pexels-lewis-r-241208113-12341819_1764635856482.jpg';
import cameraMonitorImg from '@assets/pexels-emmali-5400806_1764636075578.jpg';
import designWorkspaceImg from '@assets/stock_images/creative_team_workin_79883382.jpg';
import largeTeamImg from '@assets/stock_images/creative_team_workin_4b023730.jpg';
import fitnessImg1 from '@assets/stock_images/fitness_gym_workout__500a23f2.jpg';

export default function Creative() {
  const [currentService, setCurrentService] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Clapperboard,
      title: 'Production Capabilities',
      description: 'End-to-end creative production for digital platforms',
      items: [
        'Concept Development',
        'Video & Photography',
        'Art Direction',
        'Motion Graphics & Animation',
        'Post-Production'
      ]
    },
    {
      icon: Film,
      title: 'Performance Ads',
      description: 'Conversion-focused creative for paid campaigns',
      items: [
        'Full-Funnel Ad Creative',
        'High-Impact Video Production',
        'UGC-Style Content',
        'Static & Motion Design'
      ]
    },
    {
      icon: Palette,
      title: 'Campaign Creative',
      description: 'Integrated campaigns designed for platform virality',
      items: [
        'Creative Strategy',
        'Campaign Ideation',
        'Scripting & Storyboarding',
        'Production & Post',
        'Performance Analysis'
      ]
    },
    {
      icon: Camera,
      title: 'Production Services',
      description: 'Full-service production management and logistics',
      items: [
        'Talent & Location Scouting',
        'Multi-Location Shoots',
        'Production Coordination',
        'Equipment & Prop Management'
      ]
    },
    {
      icon: Layers,
      title: 'Organic Content',
      description: 'Platform-native content for organic channels',
      items: [
        'Short-Form Video (Reels, TikTok)',
        'User-Generated Content',
        'Brand Design Assets',
        'Story & Feed Content'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Platform-Native Creators',
      description: 'Our team lives on social—they understand what performs because they create for these platforms daily. No traditional agency disconnect here.'
    },
    {
      title: 'In-House Production Studio',
      description: 'Our dedicated studio space means faster turnarounds, lower costs, and the flexibility to iterate quickly without external production delays.'
    },
    {
      title: 'Direct Platform Relationships',
      description: 'Early access to new features and format best practices from our partnerships with major platforms keeps your creative ahead of trends.'
    },
    {
      title: 'Performance-Tested Creative',
      description: 'Every asset we produce is designed with conversion in mind. We track what performs and continuously optimize our creative approach.'
    },
    {
      title: 'Proven Results',
      description: 'From viral organic content to high-converting ad campaigns, our creative consistently outperforms benchmarks and drives measurable business impact.'
    },
    {
      title: 'Flexible Engagement Models',
      description: 'Whether you need ongoing content production or a single campaign, we adapt our team structure to match your needs and budget.'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  return (
    <Layout>
      <SEOHead
        title="Content Creation | Video, Photo & Graphics | OARC Digital"
        description="Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts."
        canonicalUrl="https://oarcdigital.com/services/creative"
        ogType="article"
        structuredData={createServiceSchema(
          "Content Creation Services",
          "Professional content production for social media. Video reels, photography, graphics, and animations.",
          "Content Creation"
        )}
        schemaId="service-creative"
      />
      
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 lg:py-24 px-4 bg-[#f5f0e6] overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-radial"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4 md:mb-6">
            <span className="text-sm md:text-base lg:text-lg uppercase tracking-widest font-medium text-black/70" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Social Media Management
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[88px] font-black text-black mb-8 md:mb-10" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }} data-testid="heading-creative">
            Creative That Converts
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-black/80 mb-8 md:mb-10 max-w-3xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            We combine organic content, paid campaigns, production, and influencer partnerships into one integrated system that drives revenue—not just reach.
          </p>

          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg font-semibold hover-elevate active-elevate-2"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              data-testid="button-lets-chat-hero"
            >
              Start Creating
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Section 1: Text Left + Image Right */}
      <ScrollReveal>
        <section className="relative py-14 md:py-20 lg:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4a7000]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black mb-6 md:mb-8">
                  Built for algorithms, designed for humans
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-black mb-4 md:mb-6">
                  The days of cutting a TVC into social formats are over. Each platform rewards specific content behaviors—and we know exactly what they are.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-black mb-4 md:mb-6">
                  Our creators specialize in social and digital platforms. That's all they do. It's why brands choose us over traditional production houses that treat social as an afterthought.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-black mb-6 md:mb-8">
                  From TikTok trends to Instagram Reels to LinkedIn thought leadership—we produce content native to where it will live.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-1"
                  >
                    Discuss Your Project
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl">
                <img 
                  src={videoProductionImg}
                  alt="Vibrant Miami street art mural - colorful creative design inspiration for social media content and brand campaigns"
                  className="w-full h-[500px] md:h-[560px] lg:h-[640px] object-cover"
                  loading="eager"
                  data-testid="img-video-production"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2: Image Left + Text Right */}
      <ScrollReveal delay={200}>
        <section className="relative py-14 md:py-20 lg:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="image-reveal rounded-3xl glow-lime-subtle">
                <img 
                  src={cameraMonitorImg}
                  alt="Artistic underwater photography - dramatic creative visual production showcasing cinematic lighting and professional content creation"
                  className="w-full h-[500px] md:h-[560px] lg:h-[640px] object-cover"
                  loading="eager"
                  data-testid="img-camera-monitor"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-6 md:w-8 h-0.5 bg-[#c4ff4d]"></div>
                  <div className="w-6 md:w-8 h-0.5 bg-[#c4ff4d]"></div>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black mb-6 md:mb-8">
                  From concept to conversion
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-black mb-4 md:mb-6">
                  Our studio brings together strategists, art directors, copywriters, creators, videographers, designers, and motion artists under one roof.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-black mb-4 md:mb-6">
                  This integrated approach means your creative is strategically aligned from the first concept to final delivery—no handoff gaps or miscommunication.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-black mb-6 md:mb-8">
                  Browse our work below to see what platform-native creative looks like.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-2"
                  >
                    See Our Process
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 3: Text Left + Image Right */}
      <ScrollReveal delay={300}>
        <section className="relative py-14 md:py-20 lg:py-24 px-4 bg-[#f5f0e6] overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black mb-6 md:mb-8">
                  Retained production or campaign sprints
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-black mb-4 md:mb-6">
                  Need ongoing content production for always-on channels? We've got you. Planning a major campaign launch? We scale to match.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-black mb-6 md:mb-8">
                  Our flexible structure means you get exactly the creative firepower you need—no more paying for overhead you don't use.
                </p>

                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg font-semibold hover-elevate active-elevate-2"
                    data-testid="button-get-in-touch-3"
                  >
                    Explore Engagement Models
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="image-reveal rounded-3xl">
                <img 
                  src={designWorkspaceImg}
                  alt="Creative workspace"
                  className="w-full h-[500px] md:h-[560px] lg:h-[640px] object-cover"
                  data-testid="img-design-workspace"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Carousel */}
      <section className="relative py-14 md:py-20 lg:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-soft"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black mb-8 md:mb-10">
            Complete creative solutions...
          </h2>

          <div className="flex items-center justify-start gap-2 md:gap-3 mb-8 md:mb-10">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  idx === currentService ? 'w-8 md:w-10 bg-[#c4ff4d] glow-lime' : 'w-2 md:w-3 bg-zinc-300'
                }`}
                data-testid={`dot-service-${idx}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[0, 1, 2].map((offset) => {
              const actualIdx = (currentService + offset) % services.length;
              const service = services[actualIdx];
              const Icon = service.icon;
              
              return (
                <div key={actualIdx} className="glass-lime-strong rounded-3xl p-8 md:p-10 hover-lift" data-testid={`card-service-${actualIdx}`}>
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#0a0a0a] rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 md:h-12 md:w-12 lg:h-14 lg:w-14 text-[#c4ff4d]" />
                    </div>
                    {offset === 2 && (
                      <button
                        onClick={nextService}
                        className="w-11 h-11 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center hover-elevate"
                        data-testid="button-next-service"
                      >
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-black mb-3 md:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base lg:text-lg text-[#1a2e29]/70 mb-5 md:mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 md:space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#c4ff4d] flex-shrink-0 mt-1" />
                        <span className="text-sm md:text-base lg:text-lg text-[#1a2e29]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-24 lg:py-28 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 md:mb-10">
            Creative success stories
          </h2>

          <Link href="/our-work">
            <button className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-lg md:text-xl font-semibold hover-elevate active-elevate-2 mb-8 md:mb-10" data-testid="button-view-all-case-studies">
              View All Work
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
            </button>
          </Link>

          <Link href="/case-studies/gym-group">
            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl overflow-hidden h-[500px] md:h-[560px] lg:h-[640px] hover-elevate active-elevate-2 cursor-pointer" data-testid="card-case-study">
              <img
                src={fitnessImg1}
                alt="Fitness brand creative campaign"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 md:p-12 lg:p-14 text-white">
                <div className="flex gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap">
                  <span className="px-4 py-2 md:px-5 md:py-2.5 bg-[#c4ff4d] text-black backdrop-blur-sm rounded-full text-sm md:text-base font-semibold">
                    Creative
                  </span>
                  <span className="px-4 py-2 md:px-5 md:py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-semibold">
                    Video Production
                  </span>
                  <span className="px-4 py-2 md:px-5 md:py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-semibold">
                    Campaign
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-4">The Gym Group</h3>
                <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-4 md:mb-6">
                  Multi-platform content driving membership growth.
                </p>
                <div className="grid grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
                  <div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#c4ff4d]">1M</div>
                    <div className="text-sm md:text-base lg:text-lg text-white/70">Video Views</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#c4ff4d]">15M</div>
                    <div className="text-sm md:text-base lg:text-lg text-white/70">Impressions</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#c4ff4d]">500K</div>
                    <div className="text-sm md:text-base lg:text-lg text-white/70">Engagements</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Creative Showcase Section */}
      <ScrollReveal delay={200}>
        <section className="relative py-14 md:py-20 lg:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime"></div>
          <div className="max-w-4xl lg:max-w-6xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 md:mb-4">
              Recent <span style={{ color: '#6b9b12' }}>Campaign Work</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="relative bg-zinc-200 rounded-3xl overflow-hidden h-[400px] md:h-[480px] lg:h-[560px] group hover-lift" data-testid="card-content-campaign-1">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white">Seasonal Launch Campaign</h3>
                </div>
              </div>

              <div className="relative bg-zinc-200 rounded-3xl overflow-hidden h-[400px] md:h-[480px] lg:h-[560px] group hover-lift" data-testid="card-content-campaign-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white">Brand Awareness Series</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why OARC Digital Carousel */}
      <section className="relative py-14 md:py-20 lg:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-soft"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/15 rounded-full blur-3xl animate-float"></div>
        <div className="max-w-4xl lg:max-w-6xl mx-auto relative">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black">
              The OARC Advantage
            </h2>
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={prevBenefit}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-prev-benefit"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-black" />
              </button>
              <button
                onClick={nextBenefit}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-next-benefit"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-black" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 md:gap-3 mb-8 md:mb-10">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBenefit(idx)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  idx === currentBenefit ? 'w-8 md:w-10 bg-[#c4ff4d] glow-lime' : 'w-2 md:w-3 bg-zinc-300'
                }`}
                data-testid={`dot-benefit-${idx}`}
              />
            ))}
          </div>

          <div className="bg-black text-white rounded-3xl p-10 md:p-12 lg:p-14 glow-lime-subtle" data-testid="card-benefit-current">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#c4ff4d] rounded-full flex items-center justify-center mb-6 md:mb-8 stat-glow">
              <Wand2 className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-black" />
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6">
              {benefits[currentBenefit].title}
            </h3>

            <p className="text-lg md:text-xl lg:text-2xl text-white/80">
              {benefits[currentBenefit].description}
            </p>
          </div>

          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-lg md:text-xl font-semibold hover-elevate active-elevate-2 mt-8 md:mt-10"
              data-testid="button-get-in-touch-final"
            >
              Start Your Creative Project
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="relative py-20 md:py-24 lg:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4a7000]/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-sm md:text-base uppercase tracking-wider mb-4 md:mb-6" style={{ color: '#6b9b12' }}>IDEAL FOR</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
              Brands ready to <span className="italic" style={{ color: '#6b9b12' }}>stand out</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: Sparkles,
                title: "Content-Hungry Brands",
                items: [
                  "Need ongoing platform content",
                  "Want consistent quality at scale",
                  "Looking for creative partnership"
                ]
              },
              {
                icon: Film,
                title: "Campaign Launchers",
                items: [
                  "Planning major campaign moments",
                  "Need integrated creative teams",
                  "Want measurable impact"
                ]
              },
              {
                icon: Palette,
                title: "Brand Builders",
                items: [
                  "Developing visual identity",
                  "Establishing platform presence",
                  "Building content libraries"
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="glass-lime rounded-3xl p-8 md:p-10 hover-lift" data-testid={`card-audience-${idx}`}>
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#c4ff4d] rounded-xl flex items-center justify-center mb-6 md:mb-8 stat-glow">
                  <category.icon className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-black mb-4 md:mb-6">{category.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base lg:text-lg text-[#1a2e29]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c4ff4d]/5 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to create content that converts?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our platform-native creative approach can drive results for your brand.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
              data-testid="button-final-cta"
            >
              Start Your Project
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
