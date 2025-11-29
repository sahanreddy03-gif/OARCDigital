import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

const services = [
  {
    title: "Lead Generation & Qualification Engine",
    subtitle: "AI-Powered Pipeline Builder",
    description: "Stop chasing cold leads. Our engine identifies, scores, and nurtures high-intent prospects automatically—so your sales team only talks to buyers ready to convert.",
    image: leadGenImage,
    slug: "lead-generation-engine",
    metrics: "3x qualified leads"
  },
  {
    title: "Customer Acquisition Accelerator",
    subtitle: "Multi-Channel Growth System",
    description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs while scaling what works.",
    image: customerAcquisitionImage,
    slug: "customer-acquisition-accelerator",
    metrics: "40% lower CAC"
  },
  {
    title: "Funnel Optimization Agent",
    subtitle: "Conversion Intelligence",
    description: "Every visitor is a revenue opportunity. Our AI continuously tests, learns, and optimizes your entire funnel—from first click to closed deal.",
    image: funnelOptimizationImage,
    slug: "funnel-optimization-agent",
    metrics: "2.5x conversion rate"
  },
  {
    title: "Marketing Automation Suite",
    subtitle: "End-to-End Campaign Orchestration",
    description: "Kill manual marketing tasks forever. Automate email sequences, social campaigns, and customer journeys with workflows that scale without extra headcount.",
    image: marketingAutomationImage,
    slug: "marketing-automation-suite",
    metrics: "85% time saved"
  },
  {
    title: "Idea Validation & Growth Hacker",
    subtitle: "Rapid Market Testing",
    description: "Launch with confidence, not guesswork. Validate product-market fit in weeks, not months—with AI-driven testing frameworks used by top startups.",
    image: ideaValidationImage,
    slug: "idea-validation-engine",
    metrics: "10x faster validation"
  },
];

export default function LetsTalkRevenueSection() {
  const trackRef = useSmoothCarouselDrag({
    enableAutoScroll: true,
    dragMultiplier: 1.6,
    momentumDamping: 0.92
  });
  
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden" data-testid="section-ai-revenue-engine">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900"></div>
      
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4ff4d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c4ff4d]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4ff4d]/30 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-10 md:mb-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c4ff4d]/70 font-medium mb-3">
            Fuel Your Growth
          </p>
          <h2 className="font-heading font-bold text-white mb-4" data-testid="text-revenue-engine-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            AI Revenue Ignition Engine
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/60 tracking-tight max-w-3xl mx-auto leading-relaxed">
            End-to-end automation systems that optimize pipelines, acquire customers, and validate ideas on autopilot
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="carousel-track" data-testid="revenue-carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <a
              key={index}
              href={`/services/${service.slug}`}
              className="carousel-card group cursor-pointer"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-slate-800 shadow-lg shadow-black/20">
                <img
                  src={service.image}
                  alt={`${service.title} - AI Revenue Ignition Engine service`}
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-115"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#c4ff4d]/20 text-[#c4ff4d] backdrop-blur-sm border border-[#c4ff4d]/30">
                    {service.metrics}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-xs md:text-sm font-medium text-[#c4ff4d] mb-1.5 md:mb-2 uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mt-10 md:mt-14">
        <div className="flex justify-center">
          <a
            href="/services/ai-revenue-engine"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            data-testid="button-explore-revenue-engine"
          >
            <span>Explore AI Revenue Engine</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
