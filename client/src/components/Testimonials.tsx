import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import sarahChenImg from "@assets/sara chen_1763248379257.jpg";
import michaelRodriguezImg from "@assets/michael_1763248379256.jpg";
import emmaThompsonImg from "@assets/emma_1763248379256.jpg";
import rajeevShuklaImg from "@assets/Rajeev sukla_1763248379257.jpg";

const testimonials = [
  {
    company: "SATAIR",
    companyLogo: "SATAIR",
    quote: "For us it has been important to find a creative partner like OARC —a team we can trust to deliver quality work on time, even with short notices.",
    author: "Sarah Chen",
    role: "Head of Marketing and Comms at SatAir",
    avatar: sarahChenImg,
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
    quote: "OARC Digital took the time to learn about our company, applied their insights from various design projects and sought to meet our needs, even if it meant going through some additional edits.",
    author: "Michael Rodriguez",
    role: "Chief Marketing Officer at TechVentures",
    avatar: michaelRodriguezImg,
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
    avatar: emmaThompsonImg,
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
  {
    company: "DIGITAL INNOVATIONS",
    companyLogo: "DIGITAL INNOVATIONS",
    quote: "Working with OARC Digital has transformed how we approach marketing. Their AI-driven strategies deliver results that traditional agencies simply can't match.",
    author: "Rajeev Shukla",
    role: "Founder & CEO at Digital Innovations",
    avatar: rajeevShuklaImg,
    metric1: "320%",
    metric1Label: "Revenue growth in 12 months",
    metric2: "15k+",
    metric2Label: "Qualified leads generated",
    metric3: "92%",
    metric3Label: "Campaign success rate",
    caseStudy: {
      title: "How Digital Innovations achieved 3x revenue with OARC's AI automation",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop"
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
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0A2818]" 
      data-testid="section-testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`relative container mx-auto px-6 md:px-8 lg:px-10 max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 md:mb-5 font-medium" data-testid="text-testimonials-eyebrow">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white leading-tight" data-testid="heading-testimonials">
            What Our <span className="italic font-serif">Clients Say</span>
          </h2>
        </div>

        {/* Three Column Layout: Avatars | Quote | Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Avatar Stack (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-4" data-testid="avatar-stack">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => selectTestimonial(index)}
                className={`relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                  index === activeIndex 
                    ? 'border-white opacity-100 scale-105' 
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
              <div className="mb-4">
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-white/60">
                  {activeTestimonial.companyLogo}
                </h3>
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white leading-relaxed mb-6 lg:mb-8" style={{ letterSpacing: '-0.01em' }} data-testid="testimonial-quote">
                "{activeTestimonial.quote.split('OARC').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="font-semibold">OARC</span>}
                  </span>
                ))}"
              </blockquote>

              {/* Author */}
              <p className="text-xs md:text-sm text-white/60 font-normal" data-testid="testimonial-author">
                {activeTestimonial.author}, {activeTestimonial.role}
              </p>
            </div>
          </div>

          {/* Right Column: Single Key Metric - Professional */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <div className="transition-all duration-700 delay-100 text-center lg:text-left" data-testid="testimonial-stats">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                {activeTestimonial.metric1}
              </div>
              <div className="text-xs text-white/50 leading-tight font-normal uppercase tracking-wide">
                {activeTestimonial.metric1Label}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Middle Right Position */}
        <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:hidden xl:flex" data-testid="testimonial-navigation">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            data-testid="button-testimonial-prev"
            aria-label="Previous testimonial"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            data-testid="button-testimonial-next"
            aria-label="Next testimonial"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation - Bottom */}
        <div className="flex lg:hidden xl:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            data-testid="button-testimonial-prev-mobile"
            aria-label="Previous testimonial"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
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
