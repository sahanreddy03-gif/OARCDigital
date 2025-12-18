import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { Play, Pause, ArrowRight, Volume2, VolumeX, Eye, Share2, TrendingUp, Youtube, Instagram, Monitor, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { FAQItem } from "@/components/FAQSection";

import showreelVideo from "@assets/55555_1764634237326.mp4";
import videoImg1 from "@assets/stock_images/professional_video_p_57625a3b.jpg";
import videoImg2 from "@assets/stock_images/professional_video_p_4775d034.jpg";
import videoImg3 from "@assets/stock_images/professional_video_p_5547a3ec.jpg";
import behindScenesImg1 from "@assets/stock_images/behind_the_scenes_vi_512df08f.jpg";
import behindScenesImg2 from "@assets/stock_images/behind_the_scenes_vi_80403517.jpg";
import creativeTeamImg from "@assets/stock_images/creative_team_workin_79883382.jpg";

const videoProductionFAQs: FAQItem[] = [
  { question: "What types of videos does OARC Digital produce?", answer: "We produce explainer videos, brand films, social ads, testimonials, product demos, and corporate videos. From 15-second ads to full documentary-style brand films." },
  { question: "How long does video production take from concept to delivery?", answer: "Typical projects take 3-6 weeks depending on complexity. Simple social ads can be delivered in 1-2 weeks. Large productions may take 8-12 weeks." },
  { question: "What makes OARC's video production different from other agencies?", answer: "We handle everything in-house—concept, scripting, filming, editing, and distribution strategy. Plus our AI tools accelerate editing by 50%." },
  { question: "Do you handle video distribution and advertising?", answer: "Yes, we offer full distribution services including YouTube optimization, social media posting, and paid video advertising on Meta and TikTok." },
  { question: "What equipment and technology do you use?", answer: "We use cinema-grade cameras, professional lighting, and industry-standard editing software. Our AI-powered tools enhance efficiency without sacrificing quality." },
  { question: "Can you work with existing brand guidelines?", answer: "Absolutely. We follow your brand guidelines precisely while bringing creative vision. We can also help develop video-specific brand standards." },
  { question: "What is the typical investment for video production?", answer: "Projects start from €2,500 for simple social content. Brand films and explainer videos typically range from €5,000-15,000 depending on complexity." },
  { question: "Do you offer video packages or retainer options?", answer: "Yes, we offer monthly video packages for consistent content needs. Retainer clients enjoy priority scheduling and discounted rates." }
];

export default function VideoProduction() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeReel, setActiveReel] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const reelCategories = [
    { name: "Explainers", count: 47 },
    { name: "Social Ads", count: 120 },
    { name: "Brand Films", count: 23 },
    { name: "Testimonials", count: 65 },
  ];

  return (
    <Layout>
      <SEOHead
        title="Video Production | Full-Service Studio | OARC Digital"
        description="Full-service video production studio. From concept to distribution. Explainer videos, brand films, social ads, testimonials. Watch our reel."
        canonicalUrl="https://oarcdigital.com/services/video-production"
        ogType="article"
        structuredData={createServiceSchema(
          "Video Production Services",
          "Full-service video production studio from concept to distribution.",
          "Video Production"
        )}
        schemaId="service-video-production"
      />

      {/* HERO: Full-Screen Showreel */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-showreel"
        >
          <source src={showreelVideo} type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-2">Our Showreel</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4" data-testid="heading-video">
              See what we make.
            </h1>
            
            {/* Video controls */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={togglePlay}
                data-testid="button-play-toggle"
                className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
              </button>
              <button 
                onClick={toggleMute}
                data-testid="button-mute-toggle"
                className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
              </button>
              <span className="text-white/80 text-sm">Sound {isMuted ? 'off' : 'on'}</span>
            </div>

            {/* Reel categories */}
            <div className="flex flex-wrap gap-3">
              {reelCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReel(i)}
                  data-testid={`button-reel-${i}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeReel === i 
                      ? 'bg-white text-black' 
                      : 'bg-zinc-800 text-white/90 hover:bg-zinc-700'
                  }`}
                >
                  {cat.name} <span className="opacity-60 ml-1">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Work Gallery - Masonry Style */}
      <ScrollReveal>
        <section className="py-16 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Recent Work</h2>
                <p className="text-white/70 mt-2">Hover to preview</p>
              </div>
              <Link href="/our-work">
                <span className="text-white/70 hover:text-white flex items-center gap-2 text-sm" data-testid="link-view-all-work">
                  View all work <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Masonry grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { img: videoImg1, title: "Tech Startup Explainer", type: "Explainer", duration: "2:30" },
                { img: videoImg2, title: "Meta Ad Campaign", type: "Social", duration: "0:30" },
                { img: videoImg3, title: "Founder Story", type: "Brand Film", duration: "4:15" },
                { img: behindScenesImg1, title: "Customer Testimonial", type: "Testimonial", duration: "1:45" },
                { img: behindScenesImg2, title: "Product Launch", type: "Commercial", duration: "1:00" },
                { img: creativeTeamImg, title: "Company Culture", type: "Brand Film", duration: "3:20" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    i === 0 || i === 5 ? 'row-span-2' : ''
                  }`}
                  data-testid={`work-item-${i}`}
                >
                  <div className={`relative ${i === 0 || i === 5 ? 'h-[400px]' : 'h-[200px]'}`}>
                    <img 
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center justify-between text-white/80 text-xs mb-1">
                        <span>{item.type}</span>
                        <span>{item.duration}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm md:text-base">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Behind The Scenes - Production Story */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">Behind the scenes</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  How we make it happen
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  We're a small team that moves fast. No bloated agency overhead. Just talented people who love making great video.
                </p>
                
                <div className="space-y-6">
                  {[
                    { label: "Pre-production", detail: "Script, storyboard, casting, locations" },
                    { label: "Production", detail: "Cinema cameras, lighting, professional audio" },
                    { label: "Post-production", detail: "Edit, color grade, sound design, motion graphics" },
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-400 font-bold text-sm">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{phase.label}</h3>
                        <p className="text-white/70 text-sm">{phase.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BTS images */}
              <div className="grid grid-cols-2 gap-4">
                <img src={behindScenesImg1} alt="Behind the scenes" className="rounded-xl h-48 object-cover" />
                <img src={behindScenesImg2} alt="Production" className="rounded-xl h-48 object-cover mt-8" />
                <img src={creativeTeamImg} alt="Creative team" className="rounded-xl h-48 object-cover col-span-2" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: Distribution - Where Your Video Goes */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Made for distribution
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-12">
              Every video is optimized and formatted for the platforms where your audience actually watches.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Youtube, platform: "YouTube", formats: "16:9, Shorts" },
                { icon: Instagram, platform: "Instagram", formats: "Reels, Feed, Stories" },
                { icon: Monitor, platform: "Website", formats: "Hero, Landing, Product" },
                { icon: Linkedin, platform: "LinkedIn", formats: "Feed, Ads" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 group hover:border-orange-500/50 transition-colors"
                  data-testid={`platform-${i}`}
                >
                  <item.icon className="w-10 h-10 text-white/70 group-hover:text-orange-400 transition-colors mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-1">{item.platform}</h3>
                  <p className="text-white/80 text-sm">{item.formats}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Client Success Story */}
      <section className="py-16 px-4 bg-[#a8b892]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#1a2e29] text-sm uppercase tracking-widest mb-6 font-medium">Featured Project</p>
          <blockquote className="text-2xl md:text-3xl font-bold text-[#1a2e29] mb-6 leading-relaxed">
            "OARC delivered our product launch video in 3 weeks. It became our highest-performing ad ever."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a2e29]/10"></div>
            <div className="text-left">
              <p className="text-[#1a2e29] font-medium">Marketing Director</p>
              <p className="text-[#1a2e29]/70 text-sm">Series A Fintech Startup</p>
            </div>
          </div>
          <Link href="/our-work">
            <span className="inline-block mt-8 text-[#1a2e29] hover:text-[#1a2e29]/80 font-medium underline underline-offset-4" data-testid="link-see-case-study">
              See the full case study →
            </span>
          </Link>
        </div>
      </section>

      {/* SECTION 6: Paired Services */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-[#f5f0e6]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-[#1a2e29]">
              Pair video with these powerful services
            </h2>
            <p className="text-[#1a2e29]/60 text-center mb-12 max-w-xl mx-auto">
              Great video content deserves great distribution. Maximize ROI by combining video production with our complementary services.
            </p>

            <div className="space-y-4">
              {[
                { title: "Web Design", desc: "Embed your video content in high-converting landing pages and product showcases that turn viewers into customers.", link: "/services/web-design" },
                { title: "Social Media Creative", desc: "Repurpose your video content into scroll-stopping social assets optimized for Instagram, TikTok, LinkedIn, and Facebook.", link: "/services/social-media-management/content-creation" },
                { title: "Paid Advertising", desc: "Run your video ads with strategic targeting across Meta, YouTube, and TikTok to maximize reach and conversions.", link: "/services/paid-advertising" },
              ].map((service, i) => (
                <Link key={i} href={service.link}>
                  <div 
                    className="group p-6 rounded-2xl bg-white hover:bg-white/80 transition-colors flex items-center justify-between cursor-pointer border border-[#1a2e29]/10"
                    data-testid={`paired-service-${i}`}
                  >
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#1a2e29]">{service.title}</h3>
                      <p className="text-[#1a2e29]/60 text-sm">{service.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#1a2e29]/40 group-hover:text-[#1a2e29] transition-colors flex-shrink-0 ml-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FAQSection faqs={videoProductionFAQs} title="Frequently Asked Questions" subtitle="Everything you need to know about our video production services" schemaId="faq-video-production" />

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let's make something great.
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Tell us about your project and we'll share ideas over a quick call.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-orange-500 text-white rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-orange-600 transition-colors"
              data-testid="button-cta-contact"
            >
              Start a Project
              <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
