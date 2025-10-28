import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { motion, useInView, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { 
  Zap, Sparkles, TrendingUp, Eye, Heart, Share2, MessageCircle,
  Video, Image, Users, Target, BarChart, Rocket, Star, ArrowRight,
  Instagram, Play, ThumbsUp, Award, Crown, Flame
} from "lucide-react";

// Animated word component
function AnimatedWord({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      className="inline-block mx-1"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.span>
  );
}

// Floating particle component
function FloatingParticle({ delay, duration, x, y, left, top, shouldAnimate }: { 
  delay: number; 
  duration: number; 
  x: number; 
  y: number; 
  left: number;
  top: number;
  shouldAnimate: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={shouldAnimate ? { 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [0, -100, -200, -300],
        x: [0, x, x * 1.5, x * 2]
      } : { opacity: 0.3, scale: 1 }}
      transition={shouldAnimate ? { 
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
      className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
      style={{ 
        left: `${left}%`,
        top: `${top}%`
      }}
    />
  );
}

export default function SocialMediaCreativeManagement() {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // SEO
  useEffect(() => {
    document.title = "Social Media Creative & Management | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ultra-modern social media creative services that stop the scroll. Viral content creation, dopamine-driven design, and platform domination strategies.");
    }
  }, []);

  // Memoize particle positions to prevent layout jumps
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: i * 0.2,
      duration: 8 + Math.random() * 4,
      x: -50 + Math.random() * 100,
      y: -200 - Math.random() * 200,
      left: Math.random() * 100,
      top: Math.random() * 100
    })),
    []
  );

  const ctaParticles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 5,
      left: Math.random() * 100
    })),
    []
  );

  const services = [
    {
      icon: Flame,
      title: "Viral Content Creation",
      description: "Content that stops thumbs and starts conversations",
      features: ["Scroll-Stopping Visuals", "Trend Jacking", "Algorithm Hacking", "Viral Mechanics"],
      color: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Dopamine-Driven Design",
      description: "Visual crack cocaine for your audience's feed",
      features: ["Addictive Visuals", "Color Psychology", "Motion Graphics", "Instant Impact"],
      color: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Engineering",
      description: "Turn scrollers into followers, followers into fanatics",
      features: ["Engagement Optimization", "Viral Loops", "Community Building", "Data-Driven Content"],
      color: "from-green-400 via-emerald-500 to-teal-500"
    },
    {
      icon: Crown,
      title: "Platform Domination",
      description: "Own every feed, every platform, every algorithm",
      features: ["Multi-Platform Strategy", "Algorithm Mastery", "Trend Forecasting", "Platform-Native Content"],
      color: "from-purple-500 via-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { icon: Eye, value: "10M+", label: "Monthly Views", color: "text-cyan-400" },
    { icon: Heart, value: "500K+", label: "Engagement Rate", color: "text-pink-500" },
    { icon: Rocket, value: "300%", label: "Growth Average", color: "text-purple-500" },
    { icon: Star, value: "4.9/5", label: "Client Rating", color: "text-yellow-400" }
  ];

  return (
    <Layout>
      {/* Ultra-Animated Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <FloatingParticle 
              key={particle.id}
              delay={particle.delay}
              duration={particle.duration}
              x={particle.x}
              y={particle.y}
              left={particle.left}
              top={particle.top}
              shouldAnimate={!shouldReduceMotion}
            />
          ))}
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8"
          >
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold">OARC DIGITAL SOCIAL MEDIA</span>
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          </motion.div>

          {/* Animated Title - Word by Word */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600">
              {["Social", "Media", "That"].map((word, i) => (
                <AnimatedWord key={i} delay={i * 0.2}>
                  {word}
                </AnimatedWord>
              ))}
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mt-4">
              {["DOESN'T", "SUCK"].map((word, i) => (
                <AnimatedWord key={i} delay={0.6 + i * 0.2}>
                  {word}
                </AnimatedWord>
              ))}
            </div>
          </h1>

          {/* Subtitle with Stagger */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-2xl md:text-4xl text-white/90 mb-12 max-w-4xl mx-auto font-light"
          >
            We create{" "}
            <motion.span
              animate={!shouldReduceMotion ? { 
                color: ["#ff0080", "#ff8c00", "#00ff88", "#0088ff", "#ff0080"],
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-bold"
            >
              dopamine-inducing
            </motion.span>
            {" "}content that stops the scroll & starts conversations
          </motion.p>

          {/* CTA Buttons with Morphing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 shadow-2xl shadow-pink-500/50"
                data-testid="button-explosive-demo"
              >
                <Rocket className="mr-2 h-6 w-6" />
                Get Explosive Results
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20"
                data-testid="button-view-viral-work"
              >
                <Eye className="mr-2 h-6 w-6" />
                See Viral Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[Instagram, Video, Image, Heart, Share2, MessageCircle].map((Icon, i) => (
              <motion.div
                key={i}
                animate={!shouldReduceMotion ? {
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 2) * 50}%`,
                }}
              >
                <Icon className="h-12 w-12 text-white/20" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="text-center"
                data-testid={`stat-${i}`}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={!shouldReduceMotion ? { rotate: 360 } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <stat.icon className={`h-12 w-12 ${stat.color}`} />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className={`text-5xl md:text-6xl font-black ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/70 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, #ff00ff 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 mb-6">
              What We Do
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              We don't just make content. We engineer{" "}
              <span className="text-yellow-400 font-bold">viral moments</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
                style={{ transformStyle: "preserve-3d" }}
                data-testid={`service-card-${i}`}
              >
                <Card className={`p-8 bg-gradient-to-br ${service.color} border-0 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 group`}>
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-black/30 backdrop-blur-xl rounded-2xl"
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-white mb-2 group-hover:scale-105 transition-transform">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * j }}
                        className="flex items-center gap-2 text-white/90 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg"
                      >
                        <Sparkles className="h-4 w-4 text-yellow-300" />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-6"
                  >
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/20 w-full justify-between group/btn"
                      data-testid={`button-learn-${i}`}
                    >
                      <span className="text-lg font-semibold">Learn More</span>
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Domination Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={!shouldReduceMotion ? { rotate: 360 } : {}}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
                WE OWN
              </span>
              <br />
              <span className="text-white">EVERY PLATFORM</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Instagram", "TikTok", "YouTube", "LinkedIn", "Twitter", "Facebook", "Pinterest", "Snapchat"].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-2xl text-center border border-pink-500/30 hover:border-pink-500 transition-all"
                data-testid={`platform-${i}`}
              >
                <div className="text-4xl font-black text-white mb-2">{platform}</div>
                <div className="text-pink-300 text-sm">Dominating</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {ctaParticles.map((particle) => (
            <motion.div
              key={particle.id}
              animate={!shouldReduceMotion ? {
                y: [0, -1000],
                opacity: [0, 1, 0]
              } : { opacity: 0.3 }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                bottom: 0
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            animate={!shouldReduceMotion ? { rotate: [0, 360] } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Flame className="h-24 w-24 text-yellow-300" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black text-white mb-8">
            Ready to Go
            <br />
            <span className="text-yellow-300">VIRAL?</span>
          </h2>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Stop posting into the void. Start creating content that people can't help but share.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-2xl px-16 py-10 bg-black hover:bg-gray-900 text-white border-0 shadow-2xl"
              data-testid="button-final-cta"
            >
              <Rocket className="mr-3 h-8 w-8" />
              Launch My Campaign
              <Sparkles className="ml-3 h-8 w-8" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
