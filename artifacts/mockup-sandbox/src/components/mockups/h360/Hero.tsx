import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, MapPin, Star, AlertTriangle, Info, Map, Globe, Phone, TrendingDown, Clock, TrendingUp, Calendar, CreditCard, ChevronRight } from 'lucide-react';

const stages = [
  {
    id: 0,
    title: "Invisible",
    heading: "Your restaurant\nis invisible.",
    sub: "Customers search. They find someone else.",
    phoneContent: "google-maps"
  },
  {
    id: 1,
    title: "No reviews",
    heading: "0 reviews.\n0 reason\nto choose you.",
    sub: "Your Google profile is costing you customers daily.",
    phoneContent: "google-profile"
  },
  {
    id: 2,
    title: "Losing to Wolt",
    heading: "€42 order.\n€10.50 goes\nto Wolt.",
    sub: "25% commission on every order. Forever.",
    phoneContent: "receipt"
  },
  {
    id: 3,
    title: "Regulars forget",
    heading: "Your regulars\nforgot\nyou exist.",
    sub: "No loyalty system means no repeat business.",
    phoneContent: "loyalty"
  },
  {
    id: 4,
    title: "H360 fixes it",
    heading: "One system.\nEvery part\nof your restaurant.",
    sub: "H360 handles visibility, orders, loyalty, and growth.",
    phoneContent: "dashboard"
  }
];

export function Hero() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStage((prev) => (prev + 1) % stages.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handleStageClick = (index: number) => {
    setCurrentStage(index);
    setIsAutoPlaying(false);
  };

  const handleNextClick = () => {
    setCurrentStage((prev) => (prev + 1) % stages.length);
    setIsAutoPlaying(false);
  };

  const stage = stages[currentStage];

  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white overflow-hidden flex items-center justify-center font-['Space_Grotesk']">
      
      {/* Background Grid & Noise */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* LEFT: 40% */}
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-8 z-20">
          <div className="flex items-center gap-6">
            {/* Dots */}
            <div className="flex flex-col gap-3">
              {stages.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => handleStageClick(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStage === i 
                      ? 'bg-[#f59e0b] scale-125 shadow-[0_0_10px_rgba(245,159,11,0.5)]' 
                      : 'bg-transparent border border-white/20 hover:border-white/50'
                  }`}
                  aria-label={`Go to stage ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[#f59e0b] text-xs uppercase tracking-[0.2em] font-mono">
                H360 · Restaurant Growth System
              </span>

              <div className="relative h-[240px] md:h-[280px] w-full">
                {stages.map((s, i) => (
                  <div 
                    key={s.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      currentStage === i 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Anton'] tracking-wide leading-[1.1] uppercase text-white mb-6 whitespace-pre-line">
                      {s.heading}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-md">
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ml-9">
            <button className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold rounded-none transition-colors w-full sm:w-auto uppercase tracking-wider text-sm">
              Get your free diagnosis
            </button>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="px-8 py-4 border border-white/20 hover:border-white/60 text-white transition-colors w-full sm:w-auto uppercase tracking-wider text-sm">
                See how it works
              </button>
              <button 
                onClick={handleNextClick}
                className="p-4 border border-white/20 hover:border-[#f59e0b] text-white hover:text-[#f59e0b] transition-colors group flex-shrink-0"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* CENTER: 20% Phone */}
        <div className="w-full lg:w-[20%] flex justify-center relative z-20 my-12 lg:my-0">
          
          {/* Amber Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-[#f59e0b]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none transition-opacity duration-1000" />
          
          {/* Phone Frame */}
          <div 
            className="relative w-[280px] h-[560px] bg-[#0f0f0f] rounded-[40px] border-[8px] border-[#1a1a1a] shadow-[0_0_80px_rgba(245,159,11,0.15)] overflow-hidden shrink-0 ring-1 ring-[#2a2a2a] ring-inset"
          >
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-50" />
            
            {/* Screen Content Container */}
            <div className="relative w-full h-full pt-12 pb-6 px-4 overflow-hidden">
              
              {/* Stage 0: Google Maps */}
              <div className={`absolute inset-0 pt-12 px-4 transition-all duration-700 bg-white/5 ${currentStage === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />
                <div className="w-full h-10 bg-white/10 rounded-full mb-6 flex items-center px-4 gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300 font-mono">pizza malta</span>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-[#1a1a1a] p-3 rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">P{i}</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">Pizza Place {i}</div>
                        <div className="flex items-center gap-1 text-xs text-yellow-500 mt-1">
                          4.8 <Star className="w-3 h-3 fill-current" /> <span className="text-gray-500 ml-1">(12{i}) · {0.5 * i}km</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* The invisible restaurant */}
                  <div className="bg-red-950/20 border border-red-900/50 p-3 rounded-xl flex items-center gap-3 opacity-60 grayscale mt-6">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500/50">?</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-500">Your Restaurant</div>
                      <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                        ??? <AlertTriangle className="w-3 h-3 text-red-900/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 1: Google Profile */}
              <div className={`absolute inset-0 pt-12 px-4 transition-all duration-700 bg-white/5 ${currentStage === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <div className="absolute inset-0 bg-gray-900/20 pointer-events-none" />
                <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Your Restaurant</h3>
                  <div className="flex items-center gap-1 text-gray-500 mb-6">
                    0.0
                    <div className="flex gap-0.5 ml-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4" />)}
                    </div>
                    <span className="text-xs ml-1">(0 reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center gap-2 opacity-40">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Globe className="w-4 h-4 text-white" /></div>
                      <span className="text-[10px]">Website</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-40">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Map className="w-4 h-4 text-white" /></div>
                      <span className="text-[10px]">Directions</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-40">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Phone className="w-4 h-4 text-white" /></div>
                      <span className="text-[10px]">Call</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-red-900/30 text-red-500 text-sm font-bold rounded-lg border border-red-900/50">
                    Claim this profile
                  </button>
                </div>
              </div>

              {/* Stage 2: Wolt */}
              <div className={`absolute inset-0 pt-12 px-4 transition-all duration-700 bg-white/5 ${currentStage === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <div className="absolute inset-0 bg-orange-900/10 pointer-events-none" />
                <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-white/5 font-mono text-sm">
                  <div className="text-center text-gray-400 mb-6 pb-4 border-b border-dashed border-gray-700">
                    RECEIPT #8492
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-300">
                      <span>Order total</span>
                      <span>€42.00</span>
                    </div>
                    
                    <div className="flex justify-between text-red-400 font-bold bg-red-900/20 p-2 rounded -mx-2">
                      <span>Wolt comm. (25%)</span>
                      <span>-€10.50</span>
                    </div>
                    
                    <div className="w-full h-px bg-gray-800 my-4" />
                    
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Net to you</span>
                      <span>€31.50</span>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center animate-pulse">
                      <TrendingDown className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3: Loyalty */}
              <div className={`absolute inset-0 pt-12 px-4 transition-all duration-700 bg-white/5 ${currentStage === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-white">Stamp Card</h3>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400">0 / 8</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-8">
                    {[1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} className="aspect-square rounded-full border-2 border-dashed border-gray-700 bg-white/5 flex items-center justify-center">
                        {/* Empty */}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <div className="text-xs text-gray-500 mb-1">Your next free meal:</div>
                    <div className="font-bold text-gray-300">never</div>
                    <div className="text-[10px] text-gray-600 mt-2">(you have no system)</div>
                  </div>
                </div>
              </div>

              {/* Stage 4: Dashboard */}
              <div className={`absolute inset-0 pt-12 px-4 transition-all duration-700 bg-[#f59e0b]/5 ${currentStage === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <div className="absolute inset-0 bg-green-900/10 pointer-events-none" />
                
                <h3 className="font-bold text-white mb-4">This week</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Reviews</div>
                      <div className="font-bold text-white">+12</div>
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  
                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Direct orders</div>
                      <div className="font-bold text-white">€847</div>
                    </div>
                    <CreditCard className="w-5 h-5 text-green-500" />
                  </div>
                  
                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Loyalty scans</div>
                      <div className="font-bold text-white">34</div>
                    </div>
                    <Star className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                
                {/* Notification sliding up */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#f59e0b] p-3 rounded-xl shadow-lg flex items-center gap-3 animate-[slideUp_0.5s_ease-out_1s_both] translate-y-[200%]">
                  <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-black">
                    <div className="text-xs font-bold">New booking</div>
                    <div className="text-[10px] opacity-80">Table 4 · 8pm</div>
                  </div>
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes slideUp {
                    to { transform: translateY(0); }
                  }
                `}} />
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT: 40% Mini-map */}
        <div className="w-full lg:w-[40%] flex flex-col items-end z-20">
          <div className="w-full max-w-[280px]">
            <div className="flex flex-col gap-6">
              {stages.map((s, i) => {
                const isActive = currentStage === i;
                const isPast = currentStage > i;
                
                return (
                  <div 
                    key={s.id} 
                    className="flex items-center gap-4 cursor-pointer group"
                    onClick={() => handleStageClick(i)}
                  >
                    <div className={`font-mono text-sm transition-colors ${isActive ? 'text-[#f59e0b]' : isPast ? 'text-gray-500' : 'text-gray-700'}`}>
                      0{i}
                    </div>
                    
                    <div className="flex-1">
                      <div className={`text-sm font-semibold transition-colors mb-2 ${isActive ? 'text-white' : isPast ? 'text-gray-400' : 'text-gray-600'}`}>
                        {s.title}
                      </div>
                      
                      <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-[#f59e0b] transition-all duration-[4000ms] ease-linear ${
                            isActive && isAutoPlaying ? 'w-full' : isPast || (isActive && !isAutoPlaying) ? 'w-full duration-300' : 'w-0 duration-300'
                          }`} 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest opacity-50">
              Scroll to explore <ArrowRight className="w-3 h-3 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
