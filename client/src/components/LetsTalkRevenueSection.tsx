// Revenue automation services carousel
import revenueRecognition from '@assets/stock_images/revenue_recognition__d0e2a777.jpg';
import subscriptionBilling from '@assets/stock_images/subscription_billing_17adc906.jpg';
import paymentCollection from '@assets/stock_images/payment_collection_i_0e73e44e.jpg';
import leadGeneration from '@assets/stock_images/lead_generation_sale_55511085.jpg';
import pipelineManagement from '@assets/stock_images/pipeline_management__14e64b47.jpg';
import salesForecasting from '@assets/stock_images/sales_forecasting_pr_3c816191.jpg';
import marketingAutomation from '@assets/stock_images/marketing_automation_c2f60f1d.jpg';
import campaignOrchestration from '@assets/stock_images/campaign_orchestrati_ffac534d.jpg';
import customerLifecycle from '@assets/stock_images/customer_lifecycle_m_f1cfdf77.jpg';
import contractManagement from '@assets/stock_images/contract_management__58a29851.jpg';
import revenueAnalytics from '@assets/stock_images/revenue_analytics_bu_e60e556f.jpg';
import growthAnalytics from '@assets/stock_images/growth_analytics_dat_e9148f21.jpg';
import workflowAutomation from '@assets/stock_images/workflow_automation__c66dc346.jpg';
import dataIntegration from '@assets/stock_images/data_integration_api_6b76bada.jpg';
import performanceTracking from '@assets/stock_images/performance_tracking_566b96fc.jpg';
import complianceManagement from '@assets/stock_images/compliance_managemen_af0e3f1a.jpg';
import revenueIntelligence from '@assets/stock_images/revenue_intelligence_ecf9af72.jpg';
import funnelOptimization from '@assets/stock_images/funnel_optimization__3bced87c.jpg';

interface RevenueService {
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const services: RevenueService[] = [
  {
    title: "Revenue Recognition",
    subtitle: "Automated ASC 606 & IFRS 15 compliance",
    image: revenueRecognition,
    category: "Financial Automation"
  },
  {
    title: "Subscription Billing",
    subtitle: "Recurring revenue & usage-based pricing",
    image: subscriptionBilling,
    category: "Billing & Payments"
  },
  {
    title: "Payment Collection",
    subtitle: "Automated invoicing & dunning",
    image: paymentCollection,
    category: "Billing & Payments"
  },
  {
    title: "Lead Generation",
    subtitle: "AI-powered prospecting & enrichment",
    image: leadGeneration,
    category: "Growth Engine"
  },
  {
    title: "Pipeline Management",
    subtitle: "Deal tracking & opportunity scoring",
    image: pipelineManagement,
    category: "Sales Ops"
  },
  {
    title: "Sales Forecasting",
    subtitle: "Predictive analytics & projections",
    image: salesForecasting,
    category: "Revenue Intelligence"
  },
  {
    title: "Marketing Automation",
    subtitle: "Email sequences & nurture campaigns",
    image: marketingAutomation,
    category: "Marketing Ops"
  },
  {
    title: "Campaign Orchestration",
    subtitle: "Multi-channel campaign execution",
    image: campaignOrchestration,
    category: "Marketing Ops"
  },
  {
    title: "Customer Lifecycle",
    subtitle: "Retention & expansion automation",
    image: customerLifecycle,
    category: "Customer Success"
  },
  {
    title: "Contract Management",
    subtitle: "Automated revenue schedules & SSP",
    image: contractManagement,
    category: "Financial Automation"
  },
  {
    title: "Revenue Analytics",
    subtitle: "Real-time MRR, ARR & churn tracking",
    image: revenueAnalytics,
    category: "Revenue Intelligence"
  },
  {
    title: "Growth Analytics",
    subtitle: "Data visualization & KPI dashboards",
    image: growthAnalytics,
    category: "Revenue Intelligence"
  },
  {
    title: "Workflow Automation",
    subtitle: "No-code process optimization",
    image: workflowAutomation,
    category: "Operations"
  },
  {
    title: "Data Integration",
    subtitle: "Seamless CRM & ERP connectivity",
    image: dataIntegration,
    category: "Operations"
  },
  {
    title: "Performance Tracking",
    subtitle: "Real-time metrics & monitoring",
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
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-lets-talk-revenue">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight mb-4" data-testid="text-lets-talk-revenue-heading">
            Let's Talk Revenue
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-600 max-w-4xl mx-auto">
            Automate your entire revenue stack from lead to cash
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Carousel */}
        <div className="carousel-track" data-testid="revenue-carousel-track">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`revenue-service-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Service Info */}
              <div className="px-2">
                <div className="text-sm font-bold text-[#5ce1e6] mb-2 uppercase tracking-wider">
                  {service.category}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-zinc-600 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
