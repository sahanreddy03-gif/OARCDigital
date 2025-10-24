// Import stock images
import revenueRecognition from '@assets/stock_images/revenue-recognition-obwu8zzsl-1734644787646.jpeg';
import subscriptionBilling from '@assets/stock_images/subscription-billing-ykm1c0vek-1734644787686.jpeg';
import paymentCollection from '@assets/stock_images/payment-collection-6rqhh8uw5-1734644787723.jpeg';
import leadGeneration from '@assets/stock_images/lead-generation-qpshwxs9r-1734644787761.jpeg';
import pipelineManagement from '@assets/stock_images/pipeline-management-iyjxtlyat-1734644787796.jpeg';
import salesForecasting from '@assets/stock_images/sales-forecasting-9bxbjy55w-1734644787835.jpeg';
import marketingAutomation from '@assets/stock_images/marketing-automation-ub0wzsyud-1734644787875.jpeg';
import campaignOrchestration from '@assets/stock_images/campaign-orchestration-p0f6yypda-1734644787917.jpeg';
import customerLifecycle from '@assets/stock_images/customer-lifecycle-kxsqf8m2d-1734644787961.jpeg';
import contractManagement from '@assets/stock_images/contract-management-1y9dhs9rt-1734644788003.jpeg';
import revenueAnalytics from '@assets/stock_images/revenue-analytics-9axp893bg-1734644788045.jpeg';
import growthAnalytics from '@assets/stock_images/growth-analytics-tgb5hznov-1734644788085.jpeg';
import workflowAutomation from '@assets/stock_images/workflow-automation-ykkfjxpez-1734644788124.jpeg';
import dataIntegration from '@assets/stock_images/data-integration-1nwzajngu-1734644788164.jpeg';
import performanceTracking from '@assets/stock_images/performance-tracking-35fj2q5j8-1734644788201.jpeg';
import complianceManagement from '@assets/stock_images/compliance-management-rwgwagmvt-1734644788241.jpeg';
import revenueIntelligence from '@assets/stock_images/revenue-intelligence-i5tgpx2m7-1734644788281.jpeg';
import funnelOptimization from '@assets/stock_images/funnel-optimization-uhk1ixnbv-1734644788323.jpeg';

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
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-revenue">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight mb-4" data-testid="text-revenue-heading">
            Let's Talk Revenue
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-600">
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
        <div className="carousel-track" data-testid="revenue-carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`revenue-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#5ce1e6] text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full">
                  {service.category}
                </div>
              </div>

              {/* Service Info */}
              <div className="px-2">
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