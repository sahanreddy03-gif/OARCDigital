import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';

import revenueRecognition from '@assets/Revenue_1763330734340.jpg';
import subscriptionBilling from '@assets/stock_images/subscription_billing_17adc906.jpg';
import paymentCollection from '@assets/stock_images/payment_processing_t_e00fc3c3.jpg';
import leadGeneration from '@assets/stock_images/lead_generation_sale_55511085.jpg';
import pipelineManagement from '@assets/stock_images/sales_pipeline_crm_m_8d6a8f45.jpg';
import salesForecasting from '@assets/stock_images/sales_forecasting_pr_70ce9011.jpg';
import marketingAutomation from '@assets/stock_images/marketing_automation_b58519c5.jpg';
import campaignOrchestration from '@assets/stock_images/campaign_management__00b31ed0.jpg';
import customerLifecycle from '@assets/stock_images/customer_journey_lif_fde015a8.jpg';
import contractManagement from '@assets/stock_images/contract_management__58a29851.jpg';
import revenueAnalytics from '@assets/stock_images/revenue_analytics_bu_e60e556f.jpg';
import growthAnalytics from '@assets/stock_images/growth_analytics_dat_e9148f21.jpg';
import workflowAutomation from '@assets/stock_images/workflow_automation__c66dc346.jpg';
import dataIntegration from '@assets/stock_images/data_integration_api_6b76bada.jpg';
import performanceTracking from '@assets/stock_images/performance_tracking_566b96fc.jpg';
import complianceManagement from '@assets/stock_images/compliance_managemen_af0e3f1a.jpg';
import revenueIntelligence from '@assets/stock_images/business_intelligenc_ceaf6c99.jpg';
import funnelOptimization from '@assets/stock_images/funnel_optimization__3bced87c.jpg';

const services = [
  {
    title: "Revenue Recognition",
    subtitle: "Automated ASC 606 compliance",
    image: revenueRecognition,
    category: "Financial Automation"
  },
  {
    title: "Subscription Billing",
    subtitle: "Recurring revenue management",
    image: subscriptionBilling,
    category: "Billing & Payments"
  },
  {
    title: "Payment Collection",
    subtitle: "Multi-channel payment processing",
    image: paymentCollection,
    category: "Billing & Payments"
  },
  {
    title: "Lead Generation",
    subtitle: "AI-powered prospect identification",
    image: leadGeneration,
    category: "Growth Engine"
  },
  {
    title: "Pipeline Management",
    subtitle: "Deal tracking & forecasting",
    image: pipelineManagement,
    category: "Sales Ops"
  },
  {
    title: "Sales Forecasting",
    subtitle: "Predictive revenue modeling",
    image: salesForecasting,
    category: "Revenue Intelligence"
  },
  {
    title: "Marketing Automation",
    subtitle: "Campaign workflow orchestration",
    image: marketingAutomation,
    category: "Marketing Ops"
  },
  {
    title: "Campaign Orchestration",
    subtitle: "Multi-touch attribution tracking",
    image: campaignOrchestration,
    category: "Marketing Ops"
  },
  {
    title: "Customer Lifecycle",
    subtitle: "Journey mapping & optimization",
    image: customerLifecycle,
    category: "Customer Success"
  },
  {
    title: "Contract Management",
    subtitle: "CLM & renewal automation",
    image: contractManagement,
    category: "Sales Ops"
  },
  {
    title: "Revenue Analytics",
    subtitle: "Real-time performance dashboards",
    image: revenueAnalytics,
    category: "Revenue Intelligence"
  },
  {
    title: "Growth Analytics",
    subtitle: "Cohort & retention analysis",
    image: growthAnalytics,
    category: "Revenue Intelligence"
  },
  {
    title: "Workflow Automation",
    subtitle: "Process optimization & triggers",
    image: workflowAutomation,
    category: "Operations"
  },
  {
    title: "Data Integration",
    subtitle: "CRM & ERP synchronization",
    image: dataIntegration,
    category: "Operations"
  },
  {
    title: "Performance Tracking",
    subtitle: "KPI monitoring & alerting",
    image: performanceTracking,
    category: "Revenue Intelligence"
  },
  {
    title: "Compliance Management",
    subtitle: "Regulatory audit & reporting",
    image: complianceManagement,
    category: "Financial Automation"
  },
  {
    title: "Revenue Intelligence",
    subtitle: "AI-driven insights & predictions",
    image: revenueIntelligence,
    category: "Revenue Intelligence"
  },
  {
    title: "Funnel Optimization",
    subtitle: "Conversion rate & growth tracking",
    image: funnelOptimization,
    category: "Growth Engine"
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
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden" data-testid="section-lets-talk-revenue">
      {/* Premium Dark Background with Workflow Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900"></div>
      
      {/* Subtle circuit/workflow pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4ff4d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c4ff4d]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4ff4d]/30 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-10 md:mb-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c4ff4d]/70 font-medium mb-3">
            Workflow Automation
          </p>
          <h2 className="font-heading font-bold text-white mb-4" data-testid="text-lets-talk-revenue-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Revenue and Workflow Automations
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/60 tracking-tight max-w-3xl mx-auto leading-relaxed">
            Automate your revenue operations and scale with AI-powered workflows
          </p>
        </div>
      </div>

      {/* Auto-scrolling Draggable Carousel */}
      <div className="relative w-full">
        <div className="carousel-track" data-testid="revenue-carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-slate-800 shadow-lg shadow-black/20">
                <img
                  src={service.image}
                  alt={`${service.title} - Revenue automation service`}
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-115"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-xs md:text-sm font-medium text-[#c4ff4d] mb-1.5 md:mb-2 uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <h3 className="font-heading text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
