import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import aiExcellence from '@assets/739d30f2ecb844e9c1186e62ca63efbda518ff4a-1050x1200_1761257258076.avif';
import creativeStrategy from '@assets/db64abcfab31dccdde04f1fb8be45337dfb692e9-1392x1392_1761257777037.avif';
import revenueCentered from '@assets/07c35cf0cbddd33390e2f878e287f38703ae7b26-1040x904_1761258187346.avif';
import sectionBackground from '@assets/This OARC_1763076281807.avif';

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
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="w-full"
      data-testid={`mobile-card-${index}`}
    >
      <div className="w-full">
        <motion.div 
          className="aspect-[4/3] relative overflow-hidden bg-gray-900 rounded-xl mobile-image-container"
          initial={{ scale: 0.95 }}
          animate={isInView ? { scale: 1 } : { scale: 0.95 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1, delay: index * 0.15 + 0.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500" />
        </motion.div>

        <motion.div 
          className="mt-6 pb-4 border-b border-white/30 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        >
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#c4ff4d] via-[#c4ff4d]/50 to-transparent w-1/3" />
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            <span className="italic">{item.title}</span>
          </h3>
        </motion.div>

        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.45 }}
        >
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function DesktopCard({ item, index }: { item: typeof differentiators[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative cursor-pointer"
      data-testid={`desktop-card-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-visible rounded-xl">
        <motion.div 
          className="aspect-[4/3] relative overflow-hidden bg-gray-900 rounded-xl desktop-image-container"
          animate={{
            boxShadow: isHovered 
              ? '0 0 40px rgba(196, 255, 77, 0.25), 0 0 80px rgba(196, 255, 77, 0.1), 0 25px 50px rgba(0, 0, 0, 0.4)'
              : '0 0 0px rgba(196, 255, 77, 0), 0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.08 : 1,
              filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(196, 255, 77, 0.1) 0%, transparent 50%, rgba(196, 255, 77, 0.05) 100%)'
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        <motion.div 
          className="mt-6 pb-6 border-b border-white/20 relative overflow-hidden"
          animate={{
            borderColor: isHovered ? 'rgba(196, 255, 77, 0.4)' : 'rgba(255, 255, 255, 0.2)'
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#c4ff4d] to-transparent"
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? '60%' : '0%' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.h3 
            className="text-2xl lg:text-3xl xl:text-4xl font-light text-white"
            animate={{
              color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <span className="italic">{item.title}</span>
          </motion.h3>
        </motion.div>

        <motion.div 
          className="mt-4 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ 
            height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.3, delay: isHovered ? 0.1 : 0 }
          }}
        >
          <motion.p 
            className="text-base lg:text-lg text-white/85 leading-relaxed pb-2"
            initial={{ y: -10 }}
            animate={{ y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Section5() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden" 
      data-testid="section-5"
    >
      <motion.div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${sectionBackground})`,
          y: backgroundY,
          scale: backgroundScale
        }}
      />
      
      <div className="absolute inset-0 bg-black/70" />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-orange-950/30"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '10%']) }}
      />
      
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div 
          ref={headingRef}
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            Our <motion.span 
              className="italic" 
              style={{ color: '#c4ff4d' }}
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >Difference</motion.span>
          </h2>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {differentiators.map((item, index) => (
            <DesktopCard key={index} item={item} index={index} />
          ))}
        </div>

        <div
          className="md:hidden flex flex-col gap-12"
          data-testid="mobile-scroll-container"
        >
          {differentiators.map((item, index) => (
            <MobileCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .desktop-image-container::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, transparent 0%, rgba(196, 255, 77, 0) 100%);
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
          background: linear-gradient(135deg, rgba(196, 255, 77, 0.5) 0%, rgba(196, 255, 77, 0.2) 50%, rgba(196, 255, 77, 0.5) 100%);
        }

        .mobile-image-container {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 767px) {
          .mobile-image-container::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 60px rgba(196, 255, 77, 0.05);
            pointer-events: none;
          }
        }
      `}</style>
    </section>
  );
}
