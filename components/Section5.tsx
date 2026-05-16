"use client";

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
const aiExcellence = "/attached_assets/739d30f2ecb844e9c1186e62ca63efbda518ff4a-1050x1200_1761257258076.avif";
const creativeStrategy = "/attached_assets/db64abcfab31dccdde04f1fb8be45337dfb692e9-1392x1392_1761257777037.avif";
const revenueCentered = "/attached_assets/07c35cf0cbddd33390e2f878e287f38703ae7b26-1040x904_1761258187346.avif";
import dynamic from 'next/dynamic';
const AntigravityParticles = dynamic(() => import('./AntigravityParticles'), { ssr: false });

const BG = '#F5F5F0';

const differentiators = [
  {
    title: "AI Excellence",
    description: "We spot the gaps by uncovering competitors, customers, and seasonal patterns you're missing.",
    image: aiExcellence,
  },
  {
    title: "Our Creative Strategy",
    description: "We create the edge with organic, local-first ideas that actually connect with your audience.",
    image: creativeStrategy,
  },
  {
    title: "Revenue Centered",
    description: "We engage & convert through automated follow-ups that keep leads warm and drive real sales.",
    image: revenueCentered,
  },
];

function MobileCard({ item, index }: { item: typeof differentiators[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px" });

  return (
    <div
      ref={cardRef}
      className="w-full transition-transform duration-700 ease-out"
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 150}ms`,
      }}
      data-testid={`mobile-card-${index}`}
    >
      <div className="w-full">
        <div
          className="aspect-[4/3] relative overflow-hidden bg-zinc-100 rounded-xl mobile-image-container transition-transform duration-700"
          style={{
            transform: isInView ? 'scale(1)' : 'scale(0.97)',
            transitionDelay: `${index * 150 + 200}ms`,
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-1000"
            style={{
              transform: isInView ? 'scale(1)' : 'scale(1.06)',
              transitionDelay: `${index * 150 + 100}ms`,
            }}
          />
        </div>

        <div
          className="mt-6 pb-4 border-b border-zinc-200 relative transition-transform duration-600"
          style={{
            transform: isInView ? 'translateX(0)' : 'translateX(-12px)',
            transitionDelay: `${index * 150 + 300}ms`,
          }}
        >
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#0A2818] via-[#0A2818]/50 to-transparent w-1/3" />
          <h3 className="text-2xl sm:text-3xl font-light text-zinc-900">
            <span className="italic">{item.title}</span>
          </h3>
        </div>

        <div
          className="mt-4 transition-transform duration-500"
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: `${index * 150 + 450}ms`,
          }}
        >
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function DesktopCard({ item, index }: { item: typeof differentiators[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px" });

  return (
    <div
      ref={cardRef}
      className="relative cursor-pointer transition-transform duration-600 ease-out"
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 100}ms`,
      }}
      data-testid={`desktop-card-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-visible rounded-xl">
        <div
          className={`aspect-[4/3] relative overflow-hidden bg-zinc-100 rounded-xl desktop-image-container transition-shadow duration-400 ${
            isHovered
              ? 'shadow-[0_0_40px_rgba(10,40,24,0.25),0_0_80px_rgba(10,40,24,0.1),0_25px_50px_rgba(0,0,0,0.15)]'
              : 'shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-all duration-600 ${
              isHovered ? 'scale-[1.08] brightness-105' : 'scale-100 brightness-100'
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-400 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute inset-0 rounded-xl transition-opacity duration-400 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: 'linear-gradient(135deg, rgba(10,40,24,0.1) 0%, transparent 50%, rgba(10,40,24,0.05) 100%)' }}
          />
        </div>

        <div
          className={`mt-6 pb-6 border-b relative overflow-hidden transition-colors duration-300 ${
            isHovered ? 'border-[rgba(10,40,24,0.4)]' : 'border-zinc-200'
          }`}
        >
          <div
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#0A2818] to-transparent transition-all duration-400 ${
              isHovered ? 'w-[60%]' : 'w-0'
            }`}
          />
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-zinc-900">
            <span className="italic">{item.title}</span>
          </h3>
        </div>

        <div
          className={`mt-4 overflow-hidden transition-all duration-400 ${
            isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-base lg:text-lg text-zinc-600 leading-relaxed pb-2">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Section5() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "0px" });

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: BG }}
      data-testid="section-5"
    >
      <AntigravityParticles />

      {/* Depth overlay using mint tones only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${BG} 0%, transparent 8%, transparent 92%, ${BG} 100%)` }}
      />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-12">
        <div
          ref={headingRef}
          className="text-center mb-12 md:mb-16 lg:mb-20 transition-transform duration-700 ease-out"
          style={{ transform: headingInView ? 'translateY(0)' : 'translateY(16px)' }}
        >
          <h2
            className="font-bold text-zinc-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}
          >
            Our <span className="italic" style={{ color: '#0A2818' }}>Difference</span>
          </h2>
          <p className="text-zinc-500 mt-3 text-base md:text-lg">The perfect fit for fast moving brands</p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {differentiators.map((item, index) => (
            <DesktopCard key={index} item={item} index={index} />
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-12" data-testid="mobile-scroll-container">
          {differentiators.map((item, index) => (
            <MobileCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .desktop-image-container::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, transparent 0%, rgba(10,40,24,0) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease, background 0.4s ease;
          pointer-events: none;
          z-index: 10;
        }
        .desktop-image-container:hover::before {
          opacity: 1;
          background: linear-gradient(135deg, rgba(10,40,24,0.5) 0%, rgba(10,40,24,0.2) 50%, rgba(10,40,24,0.5) 100%);
        }
        .mobile-image-container {
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        @media (max-width: 767px) {
          .mobile-image-container::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 60px rgba(10,40,24,0.05);
            pointer-events: none;
          }
        }
      ` }} />

      {/* Thin shadow edge — just enough to signal the section break */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.18))' }}
      />
    </section>
  );
}
