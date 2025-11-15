import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    company: "SATAIR",
    quote: "For us it has been important to find a creative partner like OARC —a team we can trust to deliver quality work on time, even with short notices.",
    author: "Sarah Chen",
    role: "Head of Marketing and Comms at SatAir",
    metric: "100",
    metricLabel: "Average NPS for design projects",
    detail: "24h-48h",
    detailLabel: "Turnaround time"
  },
  {
    company: "TECHVENTURES",
    quote: "Working with OARC has been transformative. Their strategic approach to AI-powered marketing helped us achieve unprecedented growth.",
    author: "Michael Rodriguez",
    role: "Chief Marketing Officer at TechVentures",
    metric: "68%",
    metricLabel: "ROI increase in 8 months",
    detail: "$850K",
    detailLabel: "Annual revenue growth"
  },
  {
    company: "INNOVATECO",
    quote: "The combination of creativity and technology sets OARC apart. They've helped us scale 4x while maintaining exceptional quality.",
    author: "Emma Thompson",
    role: "VP of Marketing at InnovateCo",
    metric: "4x",
    metricLabel: "Business scaling achieved",
    detail: "98%",
    detailLabel: "Client satisfaction rate"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden bg-[#E8E3D8]" 
      data-testid="section-testimonials"
    >
      <div className={`relative container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Minimal Company Header */}
        <div className="mb-12">
          <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-8">
            {activeTestimonial.company}
          </h3>
          
          {/* Quote */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-12 max-w-4xl" style={{ letterSpacing: '-0.02em' }}>
            "{activeTestimonial.quote}"
          </blockquote>

          {/* Author */}
          <p className="text-sm text-zinc-700 font-normal mb-12">
            {activeTestimonial.author}, {activeTestimonial.role}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-12 mb-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
                {activeTestimonial.metric}
              </div>
              <div className="text-sm text-zinc-600">
                {activeTestimonial.metricLabel}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
                {activeTestimonial.detail}
              </div>
              <div className="text-sm text-zinc-600">
                {activeTestimonial.detailLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end gap-3">
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
      </div>
    </section>
  );
}
