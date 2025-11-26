import { Briefcase, Star, Clock, Users } from "lucide-react";

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

          {/* Right Column - Four Key Stats with Real Numbers */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-x-10 md:gap-y-10">
            {/* Stat 1: Projects Delivered */}
            <div data-testid="stat-projects">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-medium">Projects</span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                127+
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Projects delivered successfully across industries.
              </p>
            </div>

            {/* Stat 2: Client Satisfaction */}
            <div data-testid="stat-satisfaction">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-medium">Satisfaction</span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                4.9/5
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Average client satisfaction rating.
              </p>
            </div>

            {/* Stat 3: Turnaround Time */}
            <div data-testid="stat-turnaround">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-medium">Speed</span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                48h
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Average turnaround time for deliverables.
              </p>
            </div>

            {/* Stat 4: Client Retention */}
            <div data-testid="stat-retention">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-medium">Retention</span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                92%
              </div>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                Client retention rate year over year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
