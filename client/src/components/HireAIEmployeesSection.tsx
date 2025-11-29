import { useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

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
    title: "Sales Development Rep",
    metric: "3x conversion lift",
    image: sdrAgent,
    slug: "ai-sdr-agent"
  },
  {
    title: "Customer Support",
    metric: "90% resolution rate",
    image: supportSpecialist,
    slug: "ai-support-specialist"
  },
  {
    title: "Data Insights Analyst",
    metric: "Real-time dashboards",
    image: dataAnalyst,
    slug: "ai-data-analyst"
  },
  {
    title: "Administrative Agent",
    metric: "50% time reclaimed",
    image: adminAgent,
    slug: "ai-admin-agent"
  },
  {
    title: "Content Strategist",
    metric: "10x content velocity",
    image: contentStrategist,
    slug: "ai-content-strategist"
  },
  {
    title: "Compliance Auditor",
    metric: "GDPR bulletproof",
    image: complianceAuditor,
    slug: "ai-compliance-auditor"
  },
  {
    title: "Appointment Booker",
    metric: "20% fewer no-shows",
    image: appointmentBooker,
    slug: "ai-appointment-booker"
  },
  {
    title: "Real Estate Specialist",
    metric: "Malta-focused",
    image: realEstateAgent,
    slug: "ai-real-estate-agent"
  },
];

export default function HireAIEmployeesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="relative py-12 lg:py-16 overflow-hidden" 
      data-testid="section-ai-virtual-talent-hub"
      style={{
        background: 'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(20, 20, 25, 1) 0%, rgba(8, 8, 10, 1) 50%, rgba(5, 5, 8, 1) 100%)'
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
            data-testid="text-talent-hub-heading" 
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            AI Virtual Talent
          </h2>
          <p 
            className="font-medium text-white/80 mb-3" 
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '-0.01em', lineHeight: '1.3' }}
          >
            Autonomous agents that think, adapt, and execute.
          </p>
          <p className="text-xs text-white/40 max-w-lg mx-auto leading-relaxed">
            Deploy production-tested AI employees that work 24/7—no training, no overhead, no limits.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {agents.map((agent, index) => (
            <Link 
              key={index} 
              href={`/services/${agent.slug}`}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start group"
              data-testid={`agent-card-${agent.slug}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={agent.image}
                  alt={agent.title}
                  className="w-full h-full object-cover opacity-85 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1.5 font-medium">
                    {agent.metric}
                  </p>
                  <h3 className="text-sm font-medium text-white tracking-tight">
                    {agent.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/ai-virtual-talent-hub">
            <button 
              className="group inline-flex items-center gap-2.5 px-7 py-3 bg-white text-black text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/90"
              data-testid="button-explore-talent-hub"
            >
              <span>Explore All Agents</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
