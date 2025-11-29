import { useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

const services = [
  {
    title: "Lead Generation Engine",
    metric: "3x qualified leads",
    image: leadGenImage,
    slug: "lead-generation-engine"
  },
  {
    title: "Customer Acquisition",
    metric: "40% lower CAC",
    image: customerAcquisitionImage,
    slug: "customer-acquisition-accelerator"
  },
  {
    title: "Funnel Optimization",
    metric: "2.5x conversion",
    image: funnelOptimizationImage,
    slug: "funnel-optimization-agent"
  },
  {
    title: "Marketing Automation",
    metric: "85% time saved",
    image: marketingAutomationImage,
    slug: "marketing-automation-suite"
  },
  {
    title: "Idea Validation",
    metric: "10x faster testing",
    image: ideaValidationImage,
    slug: "idea-validation-engine"
  },
];

export default function LetsTalkRevenueSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="relative py-32 lg:py-40 overflow-hidden" 
      data-testid="section-ai-revenue-engine"
      style={{
        background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20 lg:mb-28">
          <h2 
            className="font-bold text-white mb-8 uppercase tracking-[0.15em]" 
            data-testid="text-revenue-engine-heading" 
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}
          >
            Revenue Automation
          </h2>
          <p 
            className="text-white/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            Growth systems that run while you sleep.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`}
              className="flex-shrink-0 w-[260px] md:w-[300px] snap-start group"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-3 font-medium">
                    {service.metric}
                  </p>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/services/ai-revenue-engine">
            <button 
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/90"
              data-testid="button-explore-revenue-engine"
            >
              <span>Explore Revenue Engine</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
