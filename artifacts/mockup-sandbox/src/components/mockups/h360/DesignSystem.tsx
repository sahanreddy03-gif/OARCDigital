import React from "react";

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#9ca3af] font-['Space_Grotesk',sans-serif] p-8 md:p-16 selection:bg-[#f59e0b] selection:text-[#080808]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* 1. IDENTITY */}
        <section className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full border border-[#2a2a2a] bg-[#111111] text-[10px] uppercase tracking-widest text-[#f59e0b] mb-4">
            Design System v1 · For Cursor + Replit
          </div>
          <h1 className="text-7xl md:text-9xl font-['Anton',sans-serif] uppercase text-[#f59e0b] leading-none tracking-tight">
            H360
          </h1>
          <p className="text-xl md:text-2xl text-white italic">
            One system. Every part of your restaurant.
          </p>
        </section>

        {/* 2. COLOUR TOKENS */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-white border-b border-[#2a2a2a] pb-2">Colour Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "bg-primary", hex: "#080808" },
              { name: "bg-surface", hex: "#111111" },
              { name: "bg-card", hex: "#1a1a1a" },
              { name: "border", hex: "#2a2a2a" },
              { name: "amber-accent", hex: "#f59e0b" },
              { name: "amber-dim", hex: "#78350f" },
              { name: "text-primary", hex: "#ffffff" },
              { name: "text-secondary", hex: "#9ca3af" },
              { name: "text-muted", hex: "#4b5563" },
              { name: "green-success", hex: "#10b981" },
              { name: "red-danger", hex: "#ef4444" },
            ].map((color) => (
              <div key={color.name} className="space-y-3">
                <div 
                  className="h-24 w-full rounded-lg border border-[#2a2a2a]" 
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <div className="text-white font-medium text-sm">{color.name}</div>
                  <div className="text-xs text-[#4b5563] font-mono">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TYPOGRAPHY */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-white border-b border-[#2a2a2a] pb-2">Typography</h2>
          <div className="space-y-8">
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Display XL · Anton · 64px</div>
              <div className="text-[64px] font-['Anton',sans-serif] uppercase text-white leading-tight">Your restaurant is invisible.</div>
            </div>
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Display L · Anton · 48px</div>
              <div className="text-[48px] font-['Anton',sans-serif] uppercase text-white leading-tight">One system. Every part.</div>
            </div>
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Heading · Space Grotesk 700 · 32px</div>
              <div className="text-[32px] font-bold text-white leading-tight">Get found on Google</div>
            </div>
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Subheading · Space Grotesk 600 · 24px</div>
              <div className="text-[24px] font-semibold text-[#9ca3af] leading-tight">Restaurant growth for Malta</div>
            </div>
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Body · Space Grotesk 400 · 16px</div>
              <div className="text-[16px] text-[#9ca3af] max-w-2xl leading-relaxed">H360 diagnoses why you're invisible and gives you the exact tools to fix it. Build your reputation, manage bookings, and increase your revenue.</div>
            </div>
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Label · Space Grotesk 500 · 12px</div>
              <div className="text-[12px] font-medium text-[#f59e0b] tracking-[0.15em] uppercase">H360 · RESTAURANT SYSTEM</div>
            </div>
            <div>
              <div className="text-xs text-[#4b5563] font-mono mb-2">Code/mono · Monospace · 12px</div>
              <div className="text-[12px] font-mono text-[#4b5563]">stage-0 · invisible</div>
            </div>
          </div>
        </section>

        {/* 4. PHONE MOCKUPS */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-white border-b border-[#2a2a2a] pb-2">Phone Mockup Flow</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { stage: "Stage 0: Invisible", desc: "No digital presence", content: <div className="text-center text-[#4b5563] text-sm mt-10">404<br/>Not Found</div> },
              { stage: "Stage 1: No Reviews", desc: "Sparse presence", content: <div className="space-y-2 mt-4"><div className="w-12 h-12 bg-[#2a2a2a] rounded-full mx-auto" /><div className="h-2 w-16 bg-[#2a2a2a] mx-auto rounded" /></div> },
              { stage: "Stage 2: Bookings", desc: "Nory integration", content: <div className="mt-4 p-2 bg-[#1a1a1a] rounded border border-[#2a2a2a] flex items-center gap-2"><div className="w-2 h-2 bg-[#10b981] rounded-full"/><span className="text-[10px] text-white">Table 4 confirmed</span></div> },
              { stage: "Stage 3: Operations", desc: "Staff management", content: <div className="mt-4 space-y-2"><div className="h-6 bg-[#1a1a1a] rounded border border-[#2a2a2a] w-full" /><div className="h-6 bg-[#1a1a1a] rounded border border-[#2a2a2a] w-full" /></div> },
              { stage: "Stage 4: Analytics", desc: "Growth data", content: <div className="mt-4 flex items-end gap-1 h-20 px-2 pb-2"><div className="w-full bg-[#f59e0b] h-1/3 rounded-t" /><div className="w-full bg-[#f59e0b] h-1/2 rounded-t" /><div className="w-full bg-[#f59e0b] h-full rounded-t" /></div> },
            ].map((phone, i) => (
              <div key={i} className="space-y-4 flex flex-col items-center">
                <div className="w-[160px] h-[320px] bg-[#111111] rounded-[24px] border-[4px] border-[#2a2a2a] relative overflow-hidden flex flex-col">
                  {/* Dynamic Island */}
                  <div className="w-20 h-5 bg-[#080808] rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2" />
                  
                  {/* Screen Content */}
                  <div className="flex-1 mt-8 px-4">
                    {phone.content}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-white font-medium">{phone.stage}</div>
                  <div className="text-xs text-[#4b5563]">{phone.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SPACING & RADIUS */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-white border-b border-[#2a2a2a] pb-2">Spacing & Radius</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="text-xs text-[#4b5563] font-mono">Paddings (px)</div>
              <div className="flex items-end gap-2 flex-wrap">
                {[4, 8, 16, 24, 48, 96].map(pad => (
                  <div key={pad} className="flex flex-col items-center gap-2">
                    <div className="bg-[#f59e0b] opacity-50" style={{ width: pad, height: pad }} />
                    <span className="text-[10px] font-mono">{pad}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-xs text-[#4b5563] font-mono">Border Radius</div>
              <div className="flex gap-4 flex-wrap">
                {[
                  { r: 0, label: "0" },
                  { r: 4, label: "4px" },
                  { r: 8, label: "8px" },
                  { r: 12, label: "12px" },
                  { r: 9999, label: "pill" }
                ].map(rad => (
                  <div key={rad.label} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-[#1a1a1a] border border-[#2a2a2a]" style={{ borderRadius: rad.r }} />
                    <span className="text-[10px] font-mono">{rad.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMPONENT PATTERNS */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-white border-b border-[#2a2a2a] pb-2">Component Patterns</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">CTA Button Primary</div>
              <button className="bg-[#f59e0b] hover:bg-[#d97706] text-[#080808] px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                Get your free diagnosis <span>→</span>
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">CTA Button Ghost</div>
              <button className="border border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/10 px-6 py-3 rounded-full font-medium transition-colors">
                See how it works
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">Eyebrow Label</div>
              <div className="inline-block px-3 py-1 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[10px] uppercase tracking-widest text-[#f59e0b]">
                H360 · Restaurant System
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">Stage Dot (Active)</div>
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-[#f59e0b] animate-ping opacity-50" />
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">Stage Dot (Inactive)</div>
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-[#4b5563] rounded-full" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">Alert Card</div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-4 rounded-xl flex items-start gap-3 w-full max-w-sm">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-[#10b981]" />
                <div>
                  <div className="text-white text-sm font-medium">New booking — Table 4</div>
                  <div className="text-[#9ca3af] text-xs">8pm tonight · 4 guests</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#4b5563] font-mono mb-4">Stat Card</div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-4 rounded-xl w-full max-w-sm">
                <div className="text-[#9ca3af] text-xs mb-1">Google Reviews</div>
                <div className="text-white text-2xl font-bold font-['Anton',sans-serif] tracking-wider mb-2">4.8</div>
                <div className="text-[#10b981] text-xs flex items-center gap-1 font-medium">
                  <span>↑</span> +12 reviews this week
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. ANIMATION TOKENS */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-white border-b border-[#2a2a2a] pb-2">Animation Tokens</h2>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="p-4 text-white font-medium">Token</th>
                  <th className="p-4 text-white font-medium">Value</th>
                  <th className="p-4 text-[#9ca3af] font-normal hidden md:table-cell">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a]">
                {[
                  { t: "Fade transition", v: "300ms cubic-bezier(0.22,1,0.36,1)", u: "Hover states, subtle reveals" },
                  { t: "Slide up", v: "translateY(20px) → translateY(0), 400ms", u: "Section entrances" },
                  { t: "Scale in", v: "scale(0.95) → scale(1), 300ms", u: "Card interactions" },
                  { t: "Stagger delay", v: "80ms per child", u: "List / grid reveals" },
                  { t: "Auto-advance interval", v: "4000ms", u: "Carousel / stage progressions" },
                  { t: "Pulse dot", v: "2s infinite ease-in-out", u: "Active indicators" },
                ].map(row => (
                  <tr key={row.t}>
                    <td className="p-4 font-mono text-[#f59e0b]">{row.t}</td>
                    <td className="p-4 text-white font-mono text-xs">{row.v}</td>
                    <td className="p-4 text-[#4b5563] hidden md:table-cell">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. CURSOR RULES */}
        <section className="space-y-8">
          <h2 className="text-sm uppercase tracking-widest text-[#ef4444] border-b border-[#2a2a2a] pb-2">System Directives</h2>
          <div className="bg-[#1a1a1a] border border-[#ef4444]/30 rounded-xl p-6 md:p-8 font-mono text-sm leading-relaxed text-[#9ca3af]">
            <div className="text-white mb-4">CURSOR BUILD RULES FOR H360:</div>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Every new page starts with bg-[#080808], not bg-background</li>
              <li>Only one accent colour: amber #f59e0b — use sparingly</li>
              <li>Display headings always in Anton font</li>
              <li>Body text always in Space Grotesk</li>
              <li>Phone mockup: w-[280px] h-[560px] bg-[#1a1a1a] rounded-[40px] border border-[#2a2a2a]</li>
              <li>Grain overlay on every hero section (CSS noise filter)</li>
              <li>Amber glow behind hero elements (radial-gradient blur)</li>
              <li>All section reveals: Framer Motion whileInView with staggerChildren</li>
              <li>No white backgrounds anywhere on H360 pages</li>
              <li>POS messaging: never say 'no POS required' on hub page — say 'works with your setup'</li>
            </ol>
          </div>
        </section>

      </div>
    </div>
  );
}
