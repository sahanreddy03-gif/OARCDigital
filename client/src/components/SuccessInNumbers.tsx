export function SuccessInNumbers() {
  return (
    <section className="bg-[#0A2818] py-20 md:py-28 lg:py-32" data-testid="section-success-numbers">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 md:mb-6 font-medium" data-testid="text-success-eyebrow">
            SUCCESS IN NUMBERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight" data-testid="heading-success">
            The best return on <span className="italic font-serif">your investment</span>
          </h2>
        </div>

        {/* Two Column Layout: Left Text + Right Stats Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Description Text */}
          <div className="md:pt-6">
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md" data-testid="text-success-description">
              Startup, enterprises and mid-market companies trust OARC Digital to deliver pixel-perfect creative, at scale.
            </p>
          </div>

          {/* Right Column - Focused Stats (Reduced & Refined) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-12 md:gap-y-12">
            {/* Stat 1: Client Satisfaction - More Authentic */}
            <div data-testid="stat-satisfaction">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                Elite
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Tier-1 brands trust OARC Digital for premium creative at scale.
              </p>
            </div>

            {/* Stat 2: Global Reach - Subtle */}
            <div data-testid="stat-global">
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                3 Continents
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Serving clients across Malta, Europe, Middle East, and Asia with local expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
