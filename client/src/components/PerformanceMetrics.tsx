import successBg from '@assets/BACKGROUND IMAGE FOR SUCCESS IN OUR BUSINESS_1763233939151.avif';

const metrics = [
  { label: "Client-First Approach", display: "Premium" },
  { label: "Quality Over Quantity", display: "Elite" },
  { label: "Strategic Partnership", display: "Dedicated" },
];

export default function PerformanceMetrics() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-zinc-900" data-testid="section-metrics">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={successBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Success in Numbers
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal">
            The best return on your investment
          </p>
        </div>

        {/* Metrics Grid - Premium Qualitative Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center" data-testid={`metric-${index}`}>
              <div className="text-3xl md:text-4xl font-light text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                {metric.display}
              </div>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
