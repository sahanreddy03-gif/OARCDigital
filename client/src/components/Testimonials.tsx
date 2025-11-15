import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    company: "SATAIR",
    companyLogo: "SATAIR",
    quote: "For us it has been important to find a creative partner like OARC —a team we can trust to deliver quality work on time, even with short notices.",
    author: "Sarah Chen",
    role: "Head of Marketing and Comms at SatAir",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    metric1: "100",
    metric1Label: "Average NPS for design projects",
    metric2: "24h-48h",
    metric2Label: "Turnaround time",
    metric3: "250+",
    metric3Label: "Campaigns delivered",
    caseStudy: {
      title: "How SatAir accelerated campaign delivery with OARC Digital",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  },
  {
    company: "TECHVENTURES",
    companyLogo: "TECHVENTURES",
    quote: "Superside took the time to learn about our company, applied their insights from various design projects and sought to meet our needs, even if it meant going through some additional edits.",
    author: "Michael Rodriguez",
    role: "Chief Marketing Officer at TechVentures",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    metric1: "68%",
    metric1Label: "ROI increase in 8 months",
    metric2: "$850K",
    metric2Label: "Annual revenue growth",
    metric3: "4.2x",
    metric3Label: "Conversion rate lift",
    caseStudy: {
      title: "How TechVentures scaled AI-powered campaigns with OARC Digital",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  },
  {
    company: "INNOVATECO",
    companyLogo: "INNOVATECO",
    quote: "The combination of creativity and technology sets OARC apart. They've helped us scale 4x while maintaining exceptional quality.",
    author: "Emma Thompson",
    role: "VP of Marketing at InnovateCo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    metric1: "4x",
    metric1Label: "Business scaling achieved",
    metric2: "98%",
    metric2Label: "Client satisfaction rate",
    metric3: "12M+",
    metric3Label: "Impressions generated",
    caseStudy: {
      title: "How InnovateCo achieved 4x growth with AI creative automation",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
    }
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selectTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#E8E3D8]" 
      data-testid="section-testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Three Column Layout: Avatars | Quote | Stats+Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Avatar Stack (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-6" data-testid="avatar-stack">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => selectTestimonial(index)}
                className={`relative w-24 h-24 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                  index === activeIndex 
                    ? 'border-zinc-900 opacity-100 scale-105' 
                    : 'border-transparent opacity-40 hover:opacity-60 scale-95'
                }`}
                data-testid={`avatar-${index}`}
                aria-label={`View testimonial from ${testimonial.author}`}
              >
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Center Column: Quote Content */}
          <div className="lg:col-span-6 relative">
            <div 
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {/* Company Logo/Name */}
              <div className="mb-8">
                <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-zinc-900">
                  {activeTestimonial.companyLogo}
                </h3>
              </div>
              
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight mb-8 lg:mb-12" style={{ letterSpacing: '-0.02em' }} data-testid="testimonial-quote">
                "{activeTestimonial.quote.split('OARC').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="font-black">OARC</span>}
                  </span>
                ))}"
              </blockquote>

              {/* Author */}
              <p className="text-sm md:text-base text-zinc-700 font-normal" data-testid="testimonial-author">
                {activeTestimonial.author}, {activeTestimonial.role}
              </p>
            </div>
          </div>

          {/* Right Column: Stats + Case Study */}
          <div className="lg:col-span-4 space-y-8">
            {/* Stats Grid (3 metrics) */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6" data-testid="testimonial-stats">
              <div className="transition-all duration-700 delay-100">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-2" style={{ letterSpacing: '-0.03em' }}>
                  {activeTestimonial.metric1}
                </div>
                <div className="text-xs md:text-sm text-zinc-600 leading-tight">
                  {activeTestimonial.metric1Label}
                </div>
              </div>
              <div className="transition-all duration-700 delay-200">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-2" style={{ letterSpacing: '-0.03em' }}>
                  {activeTestimonial.metric2}
                </div>
                <div className="text-xs md:text-sm text-zinc-600 leading-tight">
                  {activeTestimonial.metric2Label}
                </div>
              </div>
              <div className="transition-all duration-700 delay-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-2" style={{ letterSpacing: '-0.03em' }}>
                  {activeTestimonial.metric3}
                </div>
                <div className="text-xs md:text-sm text-zinc-600 leading-tight">
                  {activeTestimonial.metric3Label}
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div 
              className="bg-white rounded-lg overflow-hidden hover-elevate transition-all duration-500 delay-400"
              data-testid="case-study-card"
            >
              <a href="#" className="block">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                    <img 
                      src={activeTestimonial.caseStudy.thumbnail} 
                      alt={activeTestimonial.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-semibold text-zinc-900 leading-tight line-clamp-3">
                      {activeTestimonial.caseStudy.title}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Middle Right Position */}
        <div className="absolute right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:hidden xl:flex" data-testid="testimonial-navigation">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-zinc-900 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
            data-testid="button-testimonial-prev"
            aria-label="Previous testimonial"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-zinc-900 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
            data-testid="button-testimonial-next"
            aria-label="Next testimonial"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation - Bottom */}
        <div className="flex lg:hidden xl:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-zinc-900 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
            data-testid="button-testimonial-prev-mobile"
            aria-label="Previous testimonial"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-zinc-900 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300"
            data-testid="button-testimonial-next-mobile"
            aria-label="Next testimonial"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
