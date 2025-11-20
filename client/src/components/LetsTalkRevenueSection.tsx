import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';

// Import stock images from available assets
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
  // Use the new smooth drag hook WITH auto-scroll enabled for revenue section
  const trackRef = useSmoothCarouselDrag({
    enableAutoScroll: true,
    dragMultiplier: 1.2,
    momentumDamping: 0.95
  });
  
  // Always triple services for seamless looping
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-lets-talk-revenue">
      {/* Elite Off-Black/Charcoal Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-neutral-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(96,165,250,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-br from-white/[0.03] to-transparent"></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header - Elite Typography */}
        <div className="text-center">
          <h2 className="font-heading font-bold text-white mb-4" data-testid="text-lets-talk-revenue-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.04em', lineHeight: '1.2' }}>
            Let's Talk Revenue
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium text-white/90 tracking-tight max-w-4xl mx-auto leading-relaxed">
            End-to-end revenue automation to scale predictably
          </p>
        </div>
      </div>

      {/* Auto-scrolling Draggable Carousel - CSS animation on desktop with smooth drag on all devices */}
      <div className="relative w-full">
        <div className="carousel-track" data-testid="revenue-carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                <img
                  src={service.image}
                  alt={`${service.title} - Revenue automation service`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-xs md:text-sm font-medium text-teal-300 mb-1.5 md:mb-2 uppercase tracking-wider">
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
