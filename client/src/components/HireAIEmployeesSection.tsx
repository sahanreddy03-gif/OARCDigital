import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

// Import AI Virtual Talent Hub agent images
import sdrAgent from '@assets/stock_images/elite_sales_professi_1c84b4b4.jpg';
import supportSpecialist from '@assets/stock_images/customer_support_spe_789ecb6b.jpg';
import dataAnalyst from '@assets/stock_images/data_analyst_profess_4f5ff172.jpg';
import adminAgent from '@assets/stock_images/administrative_assis_da9e94eb.jpg';
import contentStrategist from '@assets/stock_images/content_strategist_c_61044a33.jpg';
import complianceAuditor from '@assets/stock_images/legal_compliance_off_78808712.jpg';
import appointmentBooker from '@assets/stock_images/appointment_schedule_97373ecb.jpg';
import realEstateAgent from '@assets/stock_images/real_estate_agent_pr_d5449235.jpg';

const agents = [
  {
    title: "Sales Development Rep Agent",
    subtitle: "Precision lead qualification with 3x conversion lift",
    image: sdrAgent,
    slug: "ai-sdr-agent",
    category: "Revenue"
  },
  {
    title: "Customer Support Specialist",
    subtitle: "24/7 empathetic responses, 90% query resolution",
    image: supportSpecialist,
    slug: "ai-support-specialist",
    category: "Operations"
  },
  {
    title: "Data Insights Analyst",
    subtitle: "Turn data chaos into strategic dashboards",
    image: dataAnalyst,
    slug: "ai-data-analyst",
    category: "Intelligence"
  },
  {
    title: "Administrative Workflow Agent",
    subtitle: "Reclaim 50% of your day from routine tasks",
    image: adminAgent,
    slug: "ai-admin-agent",
    category: "Productivity"
  },
  {
    title: "Content Strategy Coordinator",
    subtitle: "Transform scattered ideas into engagement engines",
    image: contentStrategist,
    slug: "ai-content-strategist",
    category: "Marketing"
  },
  {
    title: "Compliance & Legal Auditor",
    subtitle: "GDPR bulletproof, real-time risk scanning",
    image: complianceAuditor,
    slug: "ai-compliance-auditor",
    category: "Legal"
  },
  {
    title: "Appointment Booker Agent",
    subtitle: "Reduce no-shows 20%, intelligent scheduling",
    image: appointmentBooker,
    slug: "ai-appointment-booker",
    category: "Operations"
  },
  {
    title: "Real Estate Sales Specialist",
    subtitle: "Malta-focused, bilingual deal acceleration",
    image: realEstateAgent,
    slug: "ai-real-estate-agent",
    category: "Sales"
  },
];

export default function HireAIEmployeesSection() {
  const trackRef = useSmoothCarouselDrag({
    enableAutoScroll: true,
    dragMultiplier: 1.6,
    momentumDamping: 0.92
  });
  
  const duplicatedAgents = [...agents, ...agents, ...agents];

  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden" 
      data-testid="section-ai-virtual-talent-hub"
      role="region"
      aria-labelledby="talent-hub-heading"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,255,77,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(196,255,77,0.08),transparent_50%)]"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-full text-sm font-medium text-[#c4ff4d] mb-4">
              <span className="w-1.5 h-1.5 bg-[#c4ff4d] rounded-full animate-pulse"></span>
              On-Demand AI Workforce
            </span>
            <h2 
              id="talent-hub-heading"
              className="font-heading font-bold text-white mb-4" 
              data-testid="text-talent-hub-heading" 
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}
            >
              AI Virtual Talent Hub
            </h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Hire autonomous AI agents as on-demand team members—thinking, adapting, and executing 24/7 while slashing your hiring costs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/services/ai-virtual-talent-hub">
              <button 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#c4ff4d] hover:bg-[#d4ff6d] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff4d]/20"
                data-testid="button-explore-talent-hub"
              >
                Explore All Agents
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Smooth Draggable Carousel */}
      <div className="relative w-full" role="list" aria-label="AI Virtual Talent agents carousel">
        <div 
          className="flex gap-4 md:gap-5 lg:gap-6 cursor-grab active:cursor-grabbing pl-6 md:pl-8 lg:pl-12" 
          data-testid="talent-hub-carousel-track" 
          ref={trackRef} 
          style={{ willChange: 'transform' }}
        >
          {duplicatedAgents.map((agent, index) => (
            <Link 
              key={index} 
              href={`/services/${agent.slug}`}
              className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[340px] group focus:outline-none focus:ring-2 focus:ring-[#c4ff4d] focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-2xl"
              role="listitem"
              tabIndex={index < agents.length ? 0 : -1}
              data-testid={`agent-card-${agent.slug}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/10 shadow-2xl transition-all duration-500 group-hover:ring-[#c4ff4d]/40 group-hover:shadow-[#c4ff4d]/10">
                <img
                  src={agent.image}
                  alt={`${agent.title} - AI-powered autonomous agent`}
                  className="w-full h-full object-cover object-center scale-105 transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff4d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white/90">
                    {agent.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 
                    className="font-heading text-xl md:text-2xl font-bold text-white leading-tight mb-2 group-hover:text-[#c4ff4d] transition-colors duration-300" 
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {agent.title}
                  </h3>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 line-clamp-2">
                    {agent.subtitle}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-2 text-[#c4ff4d] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Scroll hint for accessibility */}
      <p className="sr-only">Scroll or drag horizontally to view more AI agents</p>
    </section>
  );
}
