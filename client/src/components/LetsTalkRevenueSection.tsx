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
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Dual column refs for infinite scroll animation
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isDraggingLeftRef = useRef(false);
  const isDraggingRightRef = useRef(false);
  const startYLeftRef = useRef(0);
  const startYRightRef = useRef(0);
  const scrollTopLeftRef = useRef(0);
  const scrollTopRightRef = useRef(0);
  const animationIdRef = useRef<number>();
  const cleanupHandlersRef = useRef<(() => void) | null>(null);
  
  // Split services into two columns for dual-column layout
  const leftColumnServices = [...services, ...services]; // Duplicate for seamless loop
  const rightColumnServices = [...services, ...services]; // Duplicate for seamless loop

  // Dual-column infinite scroll animation  
  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    if (!leftColumn || !rightColumn) return;

    let animationStarted = false;
    
    const tryStartAnimation = () => {
      if (animationStarted) return;
      
      const leftHeight = leftColumn.scrollHeight / 2;
      const rightHeight = rightColumn.scrollHeight / 2;
      
      if (leftHeight > 0 && rightHeight > 0) {
        animationStarted = true;
        startAnimation(leftHeight, rightHeight);
      }
    };

    requestAnimationFrame(tryStartAnimation);
    
    const observer = new ResizeObserver(() => {
      tryStartAnimation();
    });
    
    observer.observe(leftColumn);
    observer.observe(rightColumn);

    const startAnimation = (leftHeight: number, rightHeight: number) => {
    
    let leftScrollPosition = 0;
    let rightScrollPosition = 0;
    const scrollSpeed = 1.2;

    const animate = () => {
      if (!isDraggingLeftRef.current) {
        leftScrollPosition += scrollSpeed;
        const normalizedLeft = ((leftScrollPosition % leftHeight) + leftHeight) % leftHeight;
        const translateValue = normalizedLeft - leftHeight;
        leftColumn.style.transform = `translateY(${translateValue}px)`;
      }

      if (!isDraggingRightRef.current) {
        rightScrollPosition += scrollSpeed;
        const normalizedRight = ((rightScrollPosition % rightHeight) + rightHeight) % rightHeight;
        rightColumn.style.transform = `translateY(-${normalizedRight}px)`;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleLeftPointerDown = (e: PointerEvent) => {
      isDraggingLeftRef.current = true;
      startYLeftRef.current = e.clientY;
      scrollTopLeftRef.current = leftScrollPosition;
      leftColumn.style.cursor = 'grabbing';
    };

    const handleLeftPointerMove = (e: PointerEvent) => {
      if (!isDraggingLeftRef.current) return;
      e.preventDefault();
      const deltaY = e.clientY - startYLeftRef.current;
      const currentPosition = scrollTopLeftRef.current + deltaY;
      const normalizedPosition = ((currentPosition % leftHeight) + leftHeight) % leftHeight;
      leftColumn.style.transform = `translateY(${normalizedPosition - leftHeight}px)`;
    };

    const handleLeftPointerUp = (e: PointerEvent) => {
      if (isDraggingLeftRef.current) {
        const deltaY = e.clientY - startYLeftRef.current;
        const rawPosition = scrollTopLeftRef.current + deltaY;
        leftScrollPosition = ((rawPosition % leftHeight) + leftHeight) % leftHeight;
      }
      isDraggingLeftRef.current = false;
      leftColumn.style.cursor = 'grab';
    };

    const handleRightPointerDown = (e: PointerEvent) => {
      isDraggingRightRef.current = true;
      startYRightRef.current = e.clientY;
      scrollTopRightRef.current = rightScrollPosition;
      rightColumn.style.cursor = 'grabbing';
    };

    const handleRightPointerMove = (e: PointerEvent) => {
      if (!isDraggingRightRef.current) return;
      e.preventDefault();
      const deltaY = e.clientY - startYRightRef.current;
      const currentPosition = scrollTopRightRef.current - deltaY;
      const normalizedPosition = ((currentPosition % rightHeight) + rightHeight) % rightHeight;
      rightColumn.style.transform = `translateY(-${normalizedPosition}px)`;
    };

    const handleRightPointerUp = (e: PointerEvent) => {
      if (isDraggingRightRef.current) {
        const deltaY = e.clientY - startYRightRef.current;
        const rawPosition = scrollTopRightRef.current - deltaY;
        rightScrollPosition = ((rawPosition % rightHeight) + rightHeight) % rightHeight;
      }
      isDraggingRightRef.current = false;
      rightColumn.style.cursor = 'grab';
    };

      leftColumn.addEventListener('pointerdown', handleLeftPointerDown);
      document.addEventListener('pointermove', handleLeftPointerMove);
      document.addEventListener('pointerup', handleLeftPointerUp);
      document.addEventListener('pointercancel', handleLeftPointerUp);

      rightColumn.addEventListener('pointerdown', handleRightPointerDown);
      document.addEventListener('pointermove', handleRightPointerMove);
      document.addEventListener('pointerup', handleRightPointerUp);
      document.addEventListener('pointercancel', handleRightPointerUp);
      
      cleanupHandlersRef.current = () => {
        leftColumn.removeEventListener('pointerdown', handleLeftPointerDown);
        document.removeEventListener('pointermove', handleLeftPointerMove);
        document.removeEventListener('pointerup', handleLeftPointerUp);
        document.removeEventListener('pointercancel', handleLeftPointerUp);

        rightColumn.removeEventListener('pointerdown', handleRightPointerDown);
        document.removeEventListener('pointermove', handleRightPointerMove);
        document.removeEventListener('pointerup', handleRightPointerUp);
        document.removeEventListener('pointercancel', handleRightPointerUp);
      };
      
      animate();
    };

    return () => {
      observer.disconnect();
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (cleanupHandlersRef.current) {
        cleanupHandlersRef.current();
        cleanupHandlersRef.current = null;
      }
      
      isDraggingLeftRef.current = false;
      isDraggingRightRef.current = false;
      if (leftColumn && rightColumn) {
        leftColumn.style.transform = '';
        leftColumn.style.cursor = '';
        rightColumn.style.transform = '';
        rightColumn.style.cursor = '';
      }
    };
  }, []);

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden" data-testid="section-lets-talk-revenue">
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

      {/* Dual-Column Opposite Direction Infinite Scroll (All Screen Sizes) */}
      <div className="mx-auto" style={{ maxWidth: isDesktop ? '900px' : '100%' }}>
        <div className={`relative flex ${isDesktop ? 'gap-6' : 'gap-3 px-4'} h-[520px] ${isDesktop ? 'md:h-[720px]' : ''} overflow-hidden`} data-testid="revenue-dual-carousel">
          {/* Left Column - Top to Bottom */}
          <div className="flex-1 relative h-full overflow-hidden">
            <div 
              ref={leftColumnRef} 
              className="absolute top-0 left-0 right-0 flex flex-col gap-3 cursor-grab active:cursor-grabbing" 
              style={{ willChange: 'transform' }}
              data-testid="revenue-left-column"
            >
              {leftColumnServices.map((service, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 group"
                  data-testid={`revenue-card-left-${index}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                    <img
                      src={service.image}
                      alt={`${service.title} - Revenue automation`}
                      className="w-full h-full object-cover scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs font-medium text-teal-300 mb-1.5 uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                      <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bottom to Top */}
          <div className="flex-1 relative h-full overflow-hidden">
            <div 
              ref={rightColumnRef} 
              className="absolute top-0 left-0 right-0 flex flex-col gap-3 cursor-grab active:cursor-grabbing" 
              style={{ willChange: 'transform' }}
              data-testid="revenue-right-column"
            >
              {rightColumnServices.map((service, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 group"
                  data-testid={`revenue-card-right-${index}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                    <img
                      src={service.image}
                      alt={`${service.title} - Revenue automation`}
                      className="w-full h-full object-cover scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs font-medium text-teal-300 mb-1.5 uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                      <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
