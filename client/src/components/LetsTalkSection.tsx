export default function LetsTalkSection() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24" data-testid="section-lets-talk">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Let's Talk Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-900 tracking-tight mb-8">
            Let's Talk
          </h2>
          
          {/* OARC Branding with Creative Explanation */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 mb-8" data-testid="text-oarc-brand">
              OARC
            </div>
            
            {/* Four-part OARC Explanation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
              <div className="text-center" data-testid="optimised-section">
                <div className="text-4xl md:text-5xl font-black text-[#c4ff4d] mb-3">
                  Optimised
                </div>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                  Precision-engineered strategies that maximize every marketing dollar through data-driven insights and continuous optimization
                </p>
              </div>
              
              <div className="text-center" data-testid="ai-section">
                <div className="text-4xl md:text-5xl font-black text-[#c4ff4d] mb-3">
                  AI
                </div>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                  Cutting-edge artificial intelligence powers our creative workflows, automating repetitive tasks while amplifying human creativity
                </p>
              </div>
              
              <div className="text-center" data-testid="revenue-section">
                <div className="text-4xl md:text-5xl font-black text-[#c4ff4d] mb-3">
                  Revenue
                </div>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                  Every campaign, every creative, every strategy is laser-focused on one thing: driving measurable revenue growth for your business
                </p>
              </div>
              
              <div className="text-center" data-testid="creative-section">
                <div className="text-4xl md:text-5xl font-black text-[#c4ff4d] mb-3">
                  Creative
                </div>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                  Bold, innovative, and attention-grabbing designs that break through the noise and make your brand impossible to ignore
                </p>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900">
            <span data-testid="text-super-talented">Super Talented</span>
            <span className="hidden md:inline text-zinc-400">·</span>
            <span data-testid="text-super-fast">Super Fast</span>
            <span className="hidden md:inline text-zinc-400">·</span>
            <span data-testid="text-super-responsive">Super Responsive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
