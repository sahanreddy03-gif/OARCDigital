import GrainOverlay from "./GrainOverlay";

export function SuccessInNumbers() {
  return (
    <section className="relative bg-[#0A2818] py-20 md:py-28 lg:py-32 diagonal-separator-both overflow-hidden" data-testid="section-success-numbers">
      <GrainOverlay opacity={0.05} />
      <div className="absolute inset-0 gradient-wash-green" />
      <div className="relative max-w-7xl mx-auto px-6">
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

          {/* Right Column - 2x2 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-12 md:gap-y-12">
            {/* Stat 1: Projects */}
            <div data-testid="stat-projects">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                500+
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Projects delivered to this day and counting.
              </p>
            </div>

            {/* Stat 2: Revenue */}
            <div data-testid="stat-revenue">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                70k+
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                In monthly recurring revenue generated for clients.
              </p>
            </div>

            {/* Stat 3: ROI */}
            <div data-testid="stat-roi">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                94%
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Brands see a three-year ROI of 94% on their OARC Digital subscription.
              </p>
            </div>

            {/* Stat 4: Payback Period */}
            <div data-testid="stat-payback">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em', fontFamily: 'serif' }}>
                6 months
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Brands see a 6-month payback period on their OARC Digital subscription.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
