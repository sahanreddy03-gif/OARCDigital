import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { Play, Pause, ArrowRight, CheckCircle2, Clock, Users, Sparkles, Film, Camera, Clapperboard } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";

import showreelVideo from "@assets/55555_1764634237326.mp4";
import videoImg1 from "@assets/stock_images/professional_video_p_57625a3b.jpg";
import videoImg2 from "@assets/stock_images/professional_video_p_4775d034.jpg";
import videoImg3 from "@assets/stock_images/professional_video_p_5547a3ec.jpg";
import behindScenesImg1 from "@assets/stock_images/behind_the_scenes_vi_512df08f.jpg";
import behindScenesImg2 from "@assets/stock_images/behind_the_scenes_vi_80403517.jpg";
import creativeTeamImg from "@assets/stock_images/creative_team_workin_79883382.jpg";

export default function VideoProduction() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeProcess, setActiveProcess] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const videoTypes = [
    { 
      title: "Explainer Videos", 
      desc: "60-90s product explainers that convert",
      img: videoImg1,
      tag: "Most Popular"
    },
    { 
      title: "Social Ads", 
      desc: "Hook-first content for Meta, TikTok, YouTube",
      img: videoImg2,
      tag: "Fast Turnaround"
    },
    { 
      title: "Testimonials", 
      desc: "Authentic customer stories that build trust",
      img: videoImg3,
      tag: "High ROI"
    },
    { 
      title: "Brand Stories", 
      desc: "Cinematic narratives that connect",
      img: behindScenesImg1,
      tag: "Premium"
    },
    { 
      title: "Product Demos", 
      desc: "Show your product in action",
      img: behindScenesImg2,
      tag: "SaaS Favorite"
    },
    { 
      title: "Motion Graphics", 
      desc: "2D/3D animation and kinetic typography",
      img: creativeTeamImg,
      tag: "Versatile"
    },
  ];

  const processSteps = [
    { 
      icon: Sparkles, 
      title: "Discovery", 
      desc: "We learn your goals, audience, and brand voice",
      days: "Day 1-2"
    },
    { 
      icon: Film, 
      title: "Script & Storyboard", 
      desc: "Creative direction, scripting, and visual planning",
      days: "Day 3-5"
    },
    { 
      icon: Camera, 
      title: "Production", 
      desc: "Professional shoot with our in-house crew",
      days: "Day 6-10"
    },
    { 
      icon: Clapperboard, 
      title: "Post & Delivery", 
      desc: "Editing, color, sound design, and final delivery",
      days: "Day 11-14"
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Video Production | Explainers, Ads & Brand Stories | OARC Digital"
        description="Full-service video production from concept to delivery. Explainer videos, testimonials, social ads, and brand stories. Cinematic quality, 14-day turnaround."
        canonicalUrl="https://oarcdigital.com/services/video-production"
        ogType="article"
        structuredData={createServiceSchema(
          "Video Production Services",
          "Full-service video production including explainer videos, testimonials, social ads, and brand stories.",
          "Video Production"
        )}
        schemaId="service-video-production"
      />

      {/* HERO: Auto-playing Showreel */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-showreel"
        >
          <source src={showreelVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6" data-testid="heading-video-production">
            Video That Converts
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            Explainers. Ads. Brand stories. From concept to delivery in 14 days.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button
                className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors"
                data-testid="button-start-project"
              >
                Start Your Project
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
                </div>
              </button>
            </Link>
            
            <button
              onClick={toggleVideo}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white rounded-full px-8 py-4 text-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
              data-testid="button-toggle-video"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? "Pause" : "Play"} Reel
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Work Grid - Bento Style */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Every Format. Every Platform.
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From 15-second TikToks to 5-minute brand documentaries
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {videoTypes.map((item, i) => (
                <div 
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    i === 0 ? 'col-span-2 md:col-span-2 row-span-2' : ''
                  }`}
                  data-testid={`video-type-${i}`}
                >
                  <div className={`relative ${i === 0 ? 'h-[400px] md:h-[500px]' : 'h-[200px] md:h-[240px]'}`}>
                    <img 
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <span className="inline-block px-3 py-1 bg-[#c4ff4d] text-black text-xs font-bold rounded-full mb-2">
                        {item.tag}
                      </span>
                      <h3 className={`font-bold text-white mb-1 ${i === 0 ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-white/70 ${i === 0 ? 'text-base' : 'text-sm hidden md:block'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Process Timeline - Visual */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Concept to Delivery in 14 Days
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process delivers professional results without the typical agency timeline
              </p>
            </div>

            {/* Visual Timeline */}
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div 
                  key={i}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeProcess === i 
                      ? 'bg-black text-white scale-105 shadow-2xl' 
                      : 'bg-zinc-100 text-black hover:bg-zinc-200'
                  }`}
                  onClick={() => setActiveProcess(i)}
                  data-testid={`process-step-${i}`}
                >
                  {/* Step number */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeProcess === i ? 'bg-[#c4ff4d] text-black' : 'bg-black text-white'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <step.icon className={`w-10 h-10 mb-4 ${activeProcess === i ? 'text-[#c4ff4d]' : 'text-black'}`} />
                  
                  <div className={`text-xs font-bold mb-2 ${activeProcess === i ? 'text-[#c4ff4d]' : 'text-muted-foreground'}`}>
                    {step.days}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`text-sm ${activeProcess === i ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {step.desc}
                  </p>
                  
                  {/* Progress indicator for active */}
                  {activeProcess === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c4ff4d] rounded-b-2xl animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#c4ff4d] transition-all duration-500 rounded-full"
                style={{ width: `${((activeProcess + 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: Stats Bar */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,000+", label: "Videos Produced" },
              { value: "14 Days", label: "Avg. Turnaround" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "4.8x", label: "Avg. ROI Increase" },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-black text-[#c4ff4d] mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Why OARC */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                  Not Just Videos.<br />Revenue Engines.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't just make pretty content. Every frame is engineered to drive specific business outcomes.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Hook-first editing that stops the scroll",
                    "Platform-optimized formats for every channel",
                    "Performance tracking and iteration",
                    "Full rights and raw files included",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#4a7000] flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button
                    className="mt-8 inline-flex items-center gap-3 bg-black text-white rounded-full pl-8 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                    data-testid="button-discuss-project"
                  >
                    Discuss Your Project
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-black" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={behindScenesImg1}
                  alt="Behind the scenes"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img 
                  src={behindScenesImg2}
                  alt="Production setup"
                  className="w-full h-48 object-cover rounded-2xl mt-8"
                />
                <img 
                  src={creativeTeamImg}
                  alt="Creative team"
                  className="w-full h-48 object-cover rounded-2xl col-span-2"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Create Something <span className="text-[#c4ff4d]">Amazing?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss your project and create video content that drives results
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-[#d4ff6d] transition-colors"
              data-testid="button-start-project-cta"
            >
              Start Your Project
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
