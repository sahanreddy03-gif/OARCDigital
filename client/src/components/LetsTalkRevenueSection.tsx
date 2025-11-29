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
      className="relative py-12 lg:py-16 overflow-hidden" 
      data-testid="section-ai-revenue-engine"
      style={{
        background: 'radial-gradient(ellipse 100% 80% at 50% 80%, rgba(20, 20, 25, 1) 0%, rgba(8, 8, 10, 1) 50%, rgba(5, 5, 8, 1) 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-10 lg:mb-14">
          <h2 
            className="font-bold text-white mb-4 uppercase tracking-[0.15em]" 
            data-testid="text-revenue-engine-heading" 
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Revenue Automation
          </h2>
          <p 
            className="font-medium text-white/80 mb-3" 
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '-0.01em', lineHeight: '1.3' }}
          >
            Growth systems that run while you sleep.
          </p>
          <p className="text-xs text-white/40 max-w-lg mx-auto leading-relaxed">
            End-to-end automation engines that optimize pipelines, acquire customers, and validate ideas on autopilot.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start group"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-85 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1.5 font-medium">
                    {service.metric}
                  </p>
                  <h3 className="text-sm font-medium text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/ai-revenue-engine">
            <button 
              className="group inline-flex items-center gap-2.5 px-7 py-3 bg-white text-black text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/90"
              data-testid="button-explore-revenue-engine"
            >
              <span>Explore Revenue Engine</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
