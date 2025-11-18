import { useRef, useEffect, useState } from 'react';

// Import stock images from available assets
import revenueRecognition from '@assets/Revenue_1763330734340.jpg';
import subscriptionBilling from '@assets/stock_images/subscription_billing_17adc906.jpg';
import paymentCollection from '@assets/stock_images/payment_processing_t_e00fc3c3.jpg';
import leadGeneration from '@assets/stock_images/lead_generation_sale_55511085.jpg';
import pipelineManagement from '@assets/stock_images/sales_pipeline_crm_m_8d6a8f45.jpg';
import salesForecasting from '@assets/stock_images/sales_forecasting_pr_70ce9011.jpg';
import marketingAutomation from '@assets/stock_images/marketing_automation_b58519c5.jpg';
import campaignOrchestration from '@assets/stock_images/campaign_management__00b31ed0.jpg';

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
];

export default function LetsTalkRevenueSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  
  // Performance optimization: Use ref to avoid rebinding listeners on every rotation update
  const rotationRef = useRef(0);
  const dragStartRef = useRef({ x: 0, rotation: 0 });
  const autoRotateRef = useRef<number | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const cardCount = services.length;
  const theta = 360 / cardCount; // Angle between cards
  const radius = Math.round((280 / 2) / Math.tan(Math.PI / cardCount)); // Cylinder radius

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoRotating) return;

    const animate = () => {
      setRotation(prev => (prev + 0.1) % 360);
      autoRotateRef.current = requestAnimationFrame(animate);
    };

    autoRotateRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoRotateRef.current) {
        cancelAnimationFrame(autoRotateRef.current);
      }
    };
  }, [isAutoRotating]);

  // Manual drag controls
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handlePointerDown = (e: PointerEvent) => {
      setIsDragging(true);
      setIsAutoRotating(false);
      // Read from ref to get current rotation value
      dragStartRef.current = { x: e.clientX, rotation: rotationRef.current };
      scene.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - dragStartRef.current.x;
      const newRotation = dragStartRef.current.rotation + (delta * 0.5);
      setRotation(newRotation);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging) {
        setIsDragging(false);
        scene.releasePointerCapture(e.pointerId);
        // Resume auto-rotation after 2 seconds of no interaction
        setTimeout(() => setIsAutoRotating(true), 2000);
      }
    };

    scene.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);

    return () => {
      scene.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

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

      {/* 3D ROTATING CAROUSEL - ALL DEVICES */}
      <div className="carousel-3d-container">
        <div 
          ref={sceneRef}
          className={`carousel-3d-scene ${isDragging ? 'dragging' : ''}`}
          style={{ 
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {services.map((service, index) => {
            const angle = theta * index;
            return (
              <div
                key={index}
                className="carousel-3d-card"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-100 shadow-2xl ring-1 ring-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Front card highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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
            );
          })}
        </div>
      </div>

      {/* Interaction hint */}
      <div className="text-center mt-8">
        <p className="text-sm text-white/70 font-medium">
          Drag to explore • Auto-rotates
        </p>
      </div>
    </section>
  );
}
