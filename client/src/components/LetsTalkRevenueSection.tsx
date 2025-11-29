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
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0f0f0f]" 
      data-testid="section-ai-revenue-engine"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium mb-6">
            Revenue Automation
          </p>
          <h2 
            className="font-semibold text-white mb-6" 
            data-testid="text-revenue-engine-heading" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
          >
            Growth systems that run<br className="hidden md:block" /> while you sleep.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            End-to-end automation engines that optimize pipelines, acquire customers, and validate ideas on autopilot.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111] border border-white/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                    {service.metric}
                  </p>
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services/ai-revenue-engine">
            <button 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:bg-white/90"
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
