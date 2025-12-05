import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import oarcLogo from '@assets/IMG_8813_(1)_1764796694787.png';

const workCards = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    alt: 'Analytics Dashboard',
    platform: 'Instagram',
    metric: '+420% Engagement'
  },
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
    alt: 'Team Collaboration',
    platform: 'TikTok',
    metric: '2.3M Views'
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
    alt: 'Strategy Session',
    platform: 'Meta Ads',
    metric: '5.2x ROAS'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    alt: 'Brand Workshop',
    platform: 'Branding',
    metric: '+85% Recognition'
  }
];

const codeLines = [
  '// AI Optimization Engine',
  'const analyzer = new ContentAnalyzer();',
  'const insights = analyzer.process(creative);',
  'insights.optimize({',
  "  target: 'revenue',",
  "  improve: '3x ROAS'",
  '});',
  '// Result: +340% performance'
];

const metrics = [
  { label: 'Engagement Rate', value: '340%', width: 90 },
  { label: 'Conversion Optimization', value: '275%', width: 75 },
  { label: 'ROAS Improvement', value: '310%', width: 85 }
];

function WorkCard({ card, index }: { card: typeof workCards[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      data-testid={`work-card-${index + 1}`}
      className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={card.image}
        alt={card.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 text-white"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="block text-xs font-semibold uppercase tracking-wider mb-1">
          {card.platform}
        </span>
        <span className="block text-lg font-bold">
          {card.metric}
        </span>
      </motion.div>
    </motion.div>
  );
}

function CodeTerminal() {
  return (
    <motion.div
      data-testid="code-terminal"
      className="w-full max-w-[500px] rounded-xl p-6 font-mono text-sm"
      style={{
        background: 'rgba(13,17,23,0.95)',
        border: '1px solid rgba(0,255,65,0.2)'
      }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {codeLines.map((line, i) => (
        <div
          key={i}
          className={`my-1.5 ${line.startsWith('//') ? 'text-gray-500' : 'text-[#00FF41]'}`}
        >
          {line}
        </div>
      ))}
    </motion.div>
  );
}

function MetricsBox() {
  return (
    <motion.div
      data-testid="data-visualization"
      className="w-full max-w-[500px] bg-white rounded-xl p-6"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {metrics.map((metric, i) => (
        <div key={i} className={i < metrics.length - 1 ? 'mb-5' : ''}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{metric.label}</span>
            <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00FF41, #00D4FF)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${metric.width}%` }}
              transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export function EnhancedHeroSection() {
  return (
    <section
      data-testid="hero-split-screen"
      className="flex flex-col lg:flex-row min-h-screen w-full"
      style={{
        background: 'linear-gradient(135deg, #FDFCFA 0%, #F8F7F4 50%, #FDFCFA 100%)'
      }}
    >
      {/* LEFT SIDE - Creative Showcase (40%) */}
      <div className="w-full lg:w-[40%] px-6 py-10 lg:px-10 lg:py-16 flex items-center justify-center order-2 lg:order-1">
        <div className="grid grid-cols-2 gap-4 lg:gap-5 max-w-[500px] w-full">
          {workCards.map((card, i) => (
            <WorkCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>

      {/* CENTER - Fusion Zone (20%) */}
      <div className="w-full lg:w-[20%] px-6 py-16 lg:py-16 flex flex-col items-center justify-center relative text-center order-1 lg:order-2">
        {/* Energy Line */}
        <div
          className="absolute left-0 right-0 lg:left-1/2 lg:right-auto top-1/2 lg:top-0 lg:bottom-0 h-0.5 lg:h-auto lg:w-0.5 lg:-translate-x-1/2 -translate-y-1/2 lg:translate-y-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,107,157,0.3), rgba(139,92,246,0.5), rgba(0,255,65,0.3))'
          }}
        />

        {/* Logo */}
        <motion.img
          src={oarcLogo}
          alt="OARC Digital"
          data-testid="fusion-logo"
          className="w-20 mb-8 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Headline */}
        <motion.div
          className="flex flex-col gap-3 mb-6 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            data-testid="creative-text"
            className="text-3xl lg:text-4xl xl:text-5xl font-black leading-none"
            style={{
              background: 'linear-gradient(135deg, #FF6B9D, #C77DFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Creative
          </span>
          <span className="text-4xl lg:text-5xl xl:text-6xl font-black text-purple-500">
            ×
          </span>
          <span
            data-testid="ai-text"
            className="text-3xl lg:text-4xl xl:text-5xl font-black leading-none"
            style={{
              background: 'linear-gradient(135deg, #00FF41, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            AI
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-base lg:text-lg xl:text-xl text-gray-600 mb-5 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Where Creativity Meets Revenue
        </motion.p>

        {/* Proof */}
        <motion.p
          className="text-sm lg:text-base text-gray-500 leading-relaxed mb-8 max-w-[280px] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We engineer content that <strong className="text-orange-500 font-bold">consistently outperforms</strong>—with{' '}
          <strong className="text-orange-500 font-bold">3x average ROAS</strong> across 47+ active clients.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="z-10"
        >
          <Link href="/contact">
            <motion.button
              data-testid="fusion-cta"
              className="px-10 py-4 text-base font-bold text-white rounded-xl cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #C77DFF)'
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Creating →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* RIGHT SIDE - AI Systems (40%) */}
      <div className="w-full lg:w-[40%] px-6 py-10 lg:px-10 lg:py-16 flex flex-col items-center justify-center gap-8 order-3">
        <CodeTerminal />
        <MetricsBox />
      </div>
    </section>
  );
}

export default EnhancedHeroSection;
