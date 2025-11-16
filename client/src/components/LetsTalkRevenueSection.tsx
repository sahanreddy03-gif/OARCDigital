// Import stock images from available assets
import revenueRecognition from '@assets/stock_images/revenue_recognition__d0e2a777.jpg';
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

import { useRef, useEffect, useState } from 'react';

export default function LetsTalkRevenueSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const duplicatedServices = [...services, ...services, ...services];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let velocity = 0;
    let lastX: number;
    let dragStartTime: number;
    let animationTimeout: NodeJS.Timeout;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      dragStartTime = Date.now();
      lastX = e.pageX;
      track.classList.add('dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
      velocity = 0;
      clearTimeout(animationTimeout);
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      dragStartTime = Date.now();
      lastX = e.touches[0].pageX;
      track.classList.add('dragging');
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
      velocity = 0;
      clearTimeout(animationTimeout);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
      
      // Track velocity for momentum
      velocity = e.pageX - lastX;
      lastX = e.pageX;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
      
      // Track velocity for momentum
      velocity = e.touches[0].pageX - lastX;
      lastX = e.touches[0].pageX;
    };
    
    const handleEnd = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('dragging');
      
      const dragDuration = Date.now() - dragStartTime;
      
      // Apply momentum for quick flicks
      if (Math.abs(velocity) > 5 && dragDuration < 200) {
        const momentum = velocity * 3;
        track.scrollLeft = track.scrollLeft - momentum;
      }
      
      // Snap to nearest card
      const cards = track.querySelectorAll('.carousel-card');
      if (cards.length > 0) {
        const cardWidth = (cards[0] as HTMLElement).offsetWidth;
        const gap = 24; // gap-6 = 24px
        const cardWithGap = cardWidth + gap;
        
        const currentScroll = track.scrollLeft;
        const nearestIndex = Math.round(currentScroll / cardWithGap);
        const targetScroll = nearestIndex * cardWithGap;
        
        // Update selected index
        setSelectedIndex(nearestIndex % 18);
        
        // Smooth snap animation
        const startScroll = currentScroll;
        const distance = targetScroll - startScroll;
        const duration = 300;
        const startTime = performance.now();
        
        const animateSnap = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          track.scrollLeft = startScroll + distance * easeProgress;
          
          if (progress < 1) {
            requestAnimationFrame(animateSnap);
          } else {
            // Resume auto-scroll after user interaction
            animationTimeout = setTimeout(() => {
              track.style.animationPlayState = 'running';
            }, 2000);
          }
        };
        
        requestAnimationFrame(animateSnap);
      }
    };
    
    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('mousemove', handleMouseMove);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('mouseup', handleEnd);
    track.addEventListener('touchend', handleEnd);
    track.addEventListener('mouseleave', handleEnd);
    
    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('mousemove', handleMouseMove);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('mouseup', handleEnd);
      track.removeEventListener('touchend', handleEnd);
      track.removeEventListener('mouseleave', handleEnd);
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-revenue">
      {/* Enhanced Premium Black/Orange Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/90 to-orange-950/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-orange-900/35"></div>
      
      {/* Enhanced warm orange glow with more depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(251,146,60,0.28),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(234,88,12,0.22),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,0,0,0.7),transparent_45%)]"></div>
      
      {/* Warm accent on bottom right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(220,38,38,0.18),transparent_50%)]"></div>
      
      {/* Subtle grid pattern overlay for sophistication */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Final overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/15 to-transparent"></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-14 md:mb-20">
        {/* Section Header - Elite Typography with Fluid Scaling */}
        <div className="text-center">
          <h2 className="font-bold text-white mb-5" data-testid="text-revenue-heading" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            Let's Talk Revenue
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/85 tracking-tight max-w-4xl mx-auto leading-relaxed">
            Automate your entire revenue stack from lead to cash
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Enhanced Gradient Overlays with smoother fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Carousel */}
        <div className="carousel-track" data-testid="revenue-carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`revenue-card-${index}`}
            >
              {/* Image Container - Enhanced with border and glow effect */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6 ring-1 ring-orange-500/20 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/30 group-hover:ring-orange-500/40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Premium overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Service Info - Premium Typography */}
              <div className="px-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2.5 tracking-tight leading-tight transition-all duration-300 group-hover:text-orange-400" style={{ letterSpacing: '-0.02em' }}>
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-white/85 leading-relaxed font-normal tracking-wide">
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