import aiExcellence from '@assets/739d30f2ecb844e9c1186e62ca63efbda518ff4a-1050x1200_1761257258076.avif';
import creativeStrategy from '@assets/db64abcfab31dccdde04f1fb8be45337dfb692e9-1392x1392_1761257777037.avif';
import revenueCentered from '@assets/07c35cf0cbddd33390e2f878e287f38703ae7b26-1040x904_1761258187346.avif';
import sectionBackground from '@assets/This OARC_1763076281807.avif';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';
import GrainOverlay from './GrainOverlay';

const differentiators = [
  {
    title: "AI Excellence",
    description: "We spot the gaps by uncovering competitors, customers, and seasonal patterns you're missing.",
    image: aiExcellence,
    icon: Sparkles,
    color: '#00FF9C'
  },
  {
    title: "Our Creative Strategy",
    description: "We create the edge with organic, local-first ideas that actually connect with your audience.",
    image: creativeStrategy,
    icon: Zap,
    color: '#FF5A00'
  },
  {
    title: "Revenue Centered",
    description: "We engage & convert through automated follow-ups that keep leads warm and drive real sales.",
    image: revenueCentered,
    icon: TrendingUp,
    color: '#00FF9C'
  },
];

export default function Section5() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden diagonal-separator-both bg-black" data-testid="section-5">
      {/* Layered Background System */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 parallax-slow"
        style={{ 
          backgroundImage: `url(${sectionBackground})`
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 gradient-wash-green" />
      <div className="absolute inset-0 gradient-wash-orange" />
      
      {/* Grain Texture */}
      <GrainOverlay opacity={0.06} />
      
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-bold text-white uppercase tracking-wider">What Sets Us Apart</span>
          </div>
          
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            Our <span className="text-glow-green italic">Difference</span>
          </h2>
        </div>

        {/* Asymmetrical Staggered Grid */}
        <div className="space-y-16 md:space-y-24">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
                data-testid={`difference-card-${index}`}
              >
                {/* Image Side - Larger */}
                <div className={`md:col-span-7 ${isEven ? '' : 'md:col-start-6'}`}>
                  <div className="relative group">
                    {/* Glass Frame */}
                    <div className={`glass-strong ${item.color === '#00FF9C' ? 'glow-green' : 'glow-orange'} rounded-2xl p-4 overflow-hidden hover:scale-[1.02] transition-all duration-700`}>
                      <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    {/* Floating Glow Orb */}
                    <div 
                      className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>

                {/* Content Side - Smaller */}
                <div className={`md:col-span-5 space-y-6 ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  {/* Icon Badge */}
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 glass-strong rounded-2xl"
                    style={{ 
                      boxShadow: `0 0 20px ${item.color}40`
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-bold text-white leading-tight"
                    style={{ 
                      fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    <span className="italic">{item.title}</span>
                  </h3>

                  {/* Glowing Divider */}
                  <div 
                    className="h-1 w-24 rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`
                    }}
                  />

                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Stat Badge */}
                  <div className="inline-flex glass px-6 py-3 rounded-full">
                    <span className="text-sm font-bold text-white">
                      {index === 0 && "47+ AI Tools Integrated"}
                      {index === 1 && "2.4M+ Social Engagements"}
                      {index === 2 && "350% Average ROI"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
