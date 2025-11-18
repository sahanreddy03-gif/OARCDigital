import { useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Duplicate services only when needed (desktop only)
  const duplicatedServices = isDesktop ? [...services, ...services, ...services] : [];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Early return if mobile, but ensure cleanup runs first for any existing listeners
    if (!isDesktop) {
      // Clean up any lingering classes/transforms from previous desktop state
      track.classList.remove('dragging');
      track.style.transform = '';
      return;
    }

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      startPos = e.pageX;
      animationID = requestAnimationFrame(animation);
      track.classList.add('dragging');
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const currentPosition = e.pageX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
      prevTranslate = currentTranslate;
      track.classList.remove('dragging');
      track.style.transform = '';
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startPos = e.touches[0].clientX;
      animationID = requestAnimationFrame(animation);
      track.classList.add('dragging');
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        const currentPosition = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
      prevTranslate = currentTranslate;
      track.classList.remove('dragging');
      track.style.transform = '';
    };

    function animation() {
      if (isDragging) {
        setSliderPosition();
        requestAnimationFrame(animation);
      }
    }

    function setSliderPosition() {
      if (track) track.style.transform = `translateX(${currentTranslate}px)`;
    }

    track.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);

    return () => {
      track.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationID);
      // Reset drag state on cleanup
      prevTranslate = 0;
      currentTranslate = 0;
      track.style.transform = '';
      track.classList.remove('dragging');
    };
  }, [isDesktop]);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-lets-talk-revenue">
      {/* Vibrant Teal/Turquoise Background - matching branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(6,182,212,0.25),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>

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

      {/* MOBILE: Static Grid (< 1024px) */}
      {!isDesktop && (
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {services.slice(0, 8).map((service, index) => (
            <div
              key={index}
              className="group"
              data-testid={`mobile-revenue-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-medium text-teal-300 mb-1.5 uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <h3 className="font-heading text-base font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* DESKTOP: Animated Carousel (≥ 1024px) */}
      {isDesktop && (
      <div className="relative w-full">
        <div className="carousel-track" data-testid="revenue-carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`revenue-card-${index}`}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium text-teal-300 mb-2 uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
