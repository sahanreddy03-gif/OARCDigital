import { serviceImages } from '@/assets/serviceImages';

const services = [
  {
    title: "Ad creative",
    subtitle: "Eye-catching designs that perform",
    image: serviceImages.adCreative,
    category: "Design & Static Creative"
  },
  {
    title: "Social media creative",
    subtitle: "Engaging assets for all platforms",
    image: serviceImages.socialMedia,
    category: "Design & Static Creative"
  },
  {
    title: "Presentation design",
    subtitle: "Captivating slides that tell your story",
    image: serviceImages.presentation,
    category: "Design & Static Creative"
  },
  {
    title: "Illustration design",
    subtitle: "Visual storytelling for your brand",
    image: serviceImages.illustration,
    category: "Design & Static Creative"
  },
  {
    title: "Branding services",
    subtitle: "Expertise & custom design services",
    image: serviceImages.branding,
    category: "Design & Static Creative"
  },
  {
    title: "eBooks & report design",
    subtitle: "Your digital content supercharged",
    image: serviceImages.ebook,
    category: "Design & Static Creative"
  },
  {
    title: "Concept creation",
    subtitle: "Big ideas crafted for maximum impact",
    image: serviceImages.concept,
    category: "Design & Static Creative"
  },
  {
    title: "Print design",
    subtitle: "Tangible designs that leave a lasting impression",
    image: serviceImages.printDesign,
    category: "Design & Static Creative"
  },
  {
    title: "Packaging & merchandise design",
    subtitle: "Bring your brand to life",
    image: serviceImages.packaging,
    category: "Design & Static Creative"
  },
  {
    title: "Video production",
    subtitle: "Effortless video production at scale",
    image: serviceImages.video,
    category: "Motion & Video"
  },
  {
    title: "Motion design",
    subtitle: "For websites, ads, and presentations",
    image: serviceImages.motion,
    category: "Motion & Video"
  },
  {
    title: "Immersive design",
    subtitle: "Innovative solutions for 3D/AR design services",
    image: serviceImages.immersive,
    category: "Motion & Video"
  },
  {
    title: "Email creation",
    subtitle: "Click-worthy emails that drive engagement",
    image: serviceImages.email,
    category: "Digital & Web"
  },
  {
    title: "Web design",
    subtitle: "Stunning websites and landing pages built to engage",
    image: serviceImages.webDesign,
    category: "Digital & Web"
  },
  {
    title: "Design Systems",
    subtitle: "Robust design systems that drive visual consistency",
    image: serviceImages.designSystems,
    category: "Digital & Web",
    badge: "NEW"
  },
  {
    title: "Product Design",
    subtitle: "Engaging & intuitive experiences",
    image: serviceImages.productDesign,
    category: "Digital & Web",
    badge: "NEW"
  },
  {
    title: "AI-enhanced creative",
    subtitle: "Human brilliance powered by AI",
    image: serviceImages.aiEnhanced,
    category: "AI-Powered"
  },
  {
    title: "AI consulting",
    subtitle: "Maximize AI with tailored strategies",
    image: serviceImages.aiConsulting,
    category: "AI-Powered"
  },
];

import { useRef, useEffect, useState } from 'react';

export default function AICreativeSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Duplicate services for seamless loop
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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-ai-creative">
      {/* Black/Orange Background - matching "Our Difference" section */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/90 to-orange-950/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-orange-900/35"></div>
      
      {/* Warm orange glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(251,146,60,0.25),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(234,88,12,0.20),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,0,0,0.7),transparent_45%)]"></div>
      
      {/* Warm accent on bottom right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      
      {/* Final overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 to-transparent"></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header - Elite Typography */}
        <div className="text-center">
          <h2 className="font-bold text-white mb-4" data-testid="text-ai-creative-heading" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            Every type of creative work
          </h2>
          <p className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            you'll ever need
            <span className="italic" style={{ color: '#c4ff4d' }}> and more</span>
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Gradient Overlays for fade effect - dark gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Carousel */}
        <div className="carousel-track" data-testid="carousel-track" ref={trackRef}>
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="carousel-card group"
              data-testid={`service-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Service Info */}
              <div className="px-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-white/80 leading-relaxed">
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
