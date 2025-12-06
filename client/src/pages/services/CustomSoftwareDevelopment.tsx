import { useEffect, useState, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Database, Cloud, Server, Cpu, Zap, Monitor, Smartphone, Globe, Lock, Layers, Boxes, Terminal, GitBranch, Cog, ChevronRight, Users, BarChart3, Shield, Workflow } from 'lucide-react';
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiDocker, SiAmazon, SiPython, SiMongodb, SiKubernetes, SiGraphql, SiTensorflow, SiRedis, SiGithub } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from '@/components/ui/button';
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background';
import { GlassCard } from '@/components/ui/glass-card';

import heroImg from '@assets/stock_images/custom_software_deve_6f9a0242.jpg';
import softwareDevImg1 from '@assets/stock_images/software_development_5606ca42.jpg';
import softwareDevImg2 from '@assets/stock_images/software_development_bf22fbae.jpg';
import softwareDevImg3 from '@assets/stock_images/software_development_e22831c9.jpg';
import aiSoftwareImg from '@assets/stock_images/ai_software_developm_171781f0.jpg';
import dashboardImg from '@assets/stock_images/financial_dashboard__226af471.jpg';
import mobileAppImg from '@assets/stock_images/mobile_app_developme_12e99cc2.jpg';

const ELITE_COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#22d3ee',
  highlight: '#c4ff4d',
};

export default function CustomSoftwareDevelopment() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeArch, setActiveArch] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projectShowcase = [
    {
      title: "SaaS Dashboard",
      category: "Enterprise",
      img: dashboardImg,
      tech: ["React", "Node.js", "PostgreSQL"],
      size: "large"
    },
    {
      title: "Mobile Commerce",
      category: "E-commerce",
      img: mobileAppImg,
      tech: ["React Native", "AWS"],
      size: "medium"
    },
    {
      title: "AI Platform",
      category: "AI/ML",
      img: aiSoftwareImg,
      tech: ["Python", "TensorFlow"],
      size: "medium"
    },
    {
      title: "Dev Tools",
      category: "Developer",
      img: softwareDevImg1,
      tech: ["TypeScript", "Docker"],
      size: "small"
    },
    {
      title: "API Gateway",
      category: "Infrastructure",
      img: softwareDevImg2,
      tech: ["Go", "Kubernetes"],
      size: "small"
    },
    {
      title: "Data Pipeline",
      category: "Analytics",
      img: softwareDevImg3,
      tech: ["Python", "Spark"],
      size: "small"
    },
  ];

  const techStack = [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
    { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
    { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
  ];

  const buildProcess = [
    { icon: Terminal, title: "Discovery", desc: "Requirements & architecture planning", days: "Week 1-2", details: ["Stakeholder interviews", "Technical assessment", "Architecture design"] },
    { icon: Layers, title: "Design", desc: "UI/UX & system design", days: "Week 2-3", details: ["Wireframes & prototypes", "API specifications", "Database schema"] },
    { icon: Code2, title: "Build", desc: "Agile development sprints", days: "Week 3-10", details: ["Feature development", "Code reviews", "CI/CD pipeline"] },
    { icon: GitBranch, title: "Test", desc: "QA & security audits", days: "Week 10-11", details: ["Automated testing", "Security audit", "Performance tuning"] },
    { icon: Cloud, title: "Deploy", desc: "Launch & monitoring", days: "Week 12", details: ["Production deployment", "Monitoring setup", "Knowledge transfer"] },
  ];

  const capabilities = [
    { icon: Monitor, title: "Web Apps", desc: "React, Next.js, Vue" },
    { icon: Smartphone, title: "Mobile", desc: "React Native, Flutter" },
    { icon: Server, title: "Backend", desc: "Node, Python, Go" },
    { icon: Database, title: "Databases", desc: "SQL, NoSQL, Graph" },
    { icon: Cloud, title: "Cloud", desc: "AWS, GCP, Azure" },
    { icon: Lock, title: "Security", desc: "SOC2, HIPAA, GDPR" },
  ];

  const architectureLayers = [
    { 
      name: "Presentation Layer", 
      icon: Monitor, 
      color: "#22d3ee",
      tech: ["React", "Next.js", "TypeScript"],
      description: "User interfaces, web & mobile apps"
    },
    { 
      name: "Application Layer", 
      icon: Cog, 
      color: "#6366f1",
      tech: ["Node.js", "Python", "Go"],
      description: "Business logic, APIs, microservices"
    },
    { 
      name: "Data Layer", 
      icon: Database, 
      color: "#8b5cf6",
      tech: ["PostgreSQL", "MongoDB", "Redis"],
      description: "Storage, caching, data pipelines"
    },
    { 
      name: "Infrastructure Layer", 
      icon: Cloud, 
      color: "#c4ff4d",
      tech: ["AWS", "Docker", "Kubernetes"],
      description: "Cloud, containers, CI/CD"
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital"
        description="Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms."
        canonicalUrl="https://oarcdigital.com/services/custom-software-development"
        ogType="article"
        structuredData={createServiceSchema(
          "Custom Software Development Services",
          "Build powerful custom software solutions tailored to your business needs",
          "Web Applications & Enterprise Software"
        )}
        schemaId="service-custom-software-development"
      />

      {/* HERO: Elite Dark Theme with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <AnimatedGridBackground 
          intensity="high" 
          showScanLine={true} 
          showParticles={true}
          showConcentricRings={true}
          showDiagonalGrid={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

        {/* Floating code snippet */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-20 right-10 bg-zinc-900/80 backdrop-blur-sm rounded-xl p-4 font-mono text-xs border border-zinc-700/50 hidden lg:block z-10"
        >
          <div className="text-zinc-500 mb-1">// Your business logic</div>
          <div><span className="text-purple-400">const</span> solution = <span className="text-cyan-400">await</span></div>
          <div className="pl-4">buildCustomSoftware(&#123;</div>
          <div className="pl-8">stack: <span className="text-green-400">'modern'</span>,</div>
          <div className="pl-8">scale: <span className="text-green-400">'enterprise'</span></div>
          <div className="pl-4">&#125;);</div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <div className="px-5 py-2.5 bg-white/[0.05] backdrop-blur-md border border-white/15 rounded-full flex items-center gap-3">
                  <motion.div 
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                    Enterprise Development
                  </span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]"
                data-testid="heading-custom-software"
              >
                Build Software That{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Just Works
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/60 mb-8 leading-relaxed max-w-xl"
              >
                From web apps to enterprise platforms. No templates, no compromises—just code that solves real problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg px-8" data-testid="button-start-project">
                    Start Building
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Quick capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-4"
              >
                {capabilities.slice(0, 3).map((cap, i) => (
                  <div key={i} className="text-center p-3 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10">
                    <cap.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{cap.title}</div>
                    <div className="text-white/50 text-xs">{cap.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero interface preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                {/* Browser chrome */}
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-zinc-700 rounded-md px-3 py-1 text-xs text-zinc-400 font-mono">
                      https://your-app.com
                    </div>
                  </div>
                </div>
                <img 
                  src={dashboardImg}
                  alt="Custom software dashboard"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM SECTION */}
      <section className="py-24 px-4 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={false} />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] border border-white/15 rounded-full mb-6"
              >
                <Workflow className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-white/70 uppercase tracking-[0.2em]">System Architecture</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                How We Build <span className="text-indigo-400">Scalable</span> Systems
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Our layered architecture approach ensures your software can grow with your business
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Architecture Diagram */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Connection lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-purple-500/50 hidden md:block" />
              
              <div className="space-y-6">
                {architectureLayers.map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <GlassCard
                      className={`p-6 cursor-pointer transition-all duration-300 ${
                        activeArch === index ? 'border-indigo-500/50' : ''
                      }`}
                      variant="strong"
                      glowOnHover={true}
                      onClick={() => setActiveArch(activeArch === index ? null : index)}
                    >
                      <div className="flex items-center gap-6">
                        {/* Icon */}
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${layer.color}20` }}
                        >
                          <layer.icon className="w-8 h-8" style={{ color: layer.color }} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                            <ChevronRight className={`w-5 h-5 text-white/40 transition-transform ${activeArch === index ? 'rotate-90' : ''}`} />
                          </div>
                          <p className="text-white/60 text-sm">{layer.description}</p>
                          
                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {layer.tech.map((tech, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <div className="hidden md:flex items-center gap-2 text-white/40">
                          <span className="text-xs uppercase tracking-wider">Layer {index + 1}</span>
                        </div>
                      </div>

                      {/* Expanded details */}
                      {activeArch === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/[0.03] rounded-lg p-4">
                              <div className="text-white/40 text-xs uppercase mb-2">Scalability</div>
                              <div className="text-white font-semibold">Horizontal & Vertical</div>
                            </div>
                            <div className="bg-white/[0.03] rounded-lg p-4">
                              <div className="text-white/40 text-xs uppercase mb-2">Performance</div>
                              <div className="text-white font-semibold">99.9% Uptime SLA</div>
                            </div>
                            <div className="bg-white/[0.03] rounded-lg p-4">
                              <div className="text-white/40 text-xs uppercase mb-2">Security</div>
                              <div className="text-white font-semibold">Enterprise-grade</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJECT SHOWCASE - Bento Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What We <span className="text-indigo-400">Build</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From startups to Fortune 500s—software that scales
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectShowcase.map((project, i) => (
                <div 
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    project.size === 'large' ? 'col-span-2 row-span-2' : 
                    project.size === 'medium' ? 'col-span-2' : ''
                  }`}
                  data-testid={`project-${i}`}
                >
                  <div className={`relative ${
                    project.size === 'large' ? 'h-[400px]' : 
                    project.size === 'medium' ? 'h-[200px]' : 'h-[200px]'
                  }`}>
                    <img 
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-xs text-indigo-400 font-medium mb-1">{project.category}</div>
                      <h3 className={`font-bold text-white mb-2 ${project.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span key={j} className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TECH STACK - Animated Marquee */}
      <section className="py-16 px-4 bg-zinc-950 overflow-hidden border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our <span className="text-indigo-400">Tech Stack</span>
            </h2>
          </div>

          {/* Animated tech strip */}
          <div className="relative">
            <div className="flex gap-8 animate-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 bg-white/[0.03] rounded-xl border border-white/10 whitespace-nowrap group hover:border-indigo-500/50 transition-colors"
                >
                  <tech.Icon className="w-8 h-8" style={{ color: tech.color }} />
                  <span className="text-white font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* BUILD PROCESS - Visual Timeline */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-zinc-900 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                From Idea to <span className="text-indigo-400">Launch</span> in 12 Weeks
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Our proven process delivers working software fast
              </p>
            </div>

            {/* Visual timeline */}
            <div className="grid md:grid-cols-5 gap-4">
              {buildProcess.map((step, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === i 
                      ? 'bg-indigo-500 text-white shadow-2xl shadow-indigo-500/30' 
                      : 'bg-white/[0.03] text-white border border-white/10 hover:border-indigo-500/30'
                  }`}
                  onClick={() => setActiveStep(i)}
                  data-testid={`process-step-${i}`}
                >
                  {/* Step number */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === i ? 'bg-white text-indigo-500' : 'bg-indigo-500 text-white'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <step.icon className={`w-10 h-10 mb-4 ${activeStep === i ? 'text-white' : 'text-indigo-400'}`} />
                  
                  <div className={`text-xs font-bold mb-2 ${activeStep === i ? 'text-white/80' : 'text-indigo-400'}`}>
                    {step.days}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`text-sm mb-4 ${activeStep === i ? 'text-white/80' : 'text-white/60'}`}>
                    {step.desc}
                  </p>

                  {/* Details list */}
                  {activeStep === i && (
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-1 text-sm text-white/70"
                    >
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3" />
                          {detail}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* STATS BAR */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered", icon: Boxes },
              { value: "12 Weeks", label: "Avg. Timeline", icon: Zap },
              { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { value: "Full", label: "Code Ownership", icon: GitBranch },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Full-Stack <span className="text-indigo-400">Capabilities</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {capabilities.map((cap, i) => (
                <GlassCard 
                  key={i}
                  className="p-6 text-center"
                  variant="strong"
                  glowOnHover={true}
                  data-testid={`capability-${i}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                    <cap.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-white/60">{cap.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY CHOOSE US SECTION */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
          <AnimatedGridBackground intensity="subtle" showScanLine={false} showParticles={true} showConcentricRings={true} />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why <span className="text-indigo-400">OARC</span> for Software?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Not just developers—your technical partners for growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Users, 
                  title: "Senior Engineers Only", 
                  desc: "No juniors learning on your project. Every engineer has 5+ years of production experience.",
                  stat: "5+"
                },
                { 
                  icon: BarChart3, 
                  title: "Business-First Approach", 
                  desc: "We don't just write code—we understand your business goals and build software that drives ROI.",
                  stat: "ROI"
                },
                { 
                  icon: Shield, 
                  title: "Enterprise Security", 
                  desc: "SOC2, HIPAA, GDPR compliance. Your data and your customers' data are protected.",
                  stat: "SOC2"
                },
              ].map((item, i) => (
                <GlassCard 
                  key={i}
                  className="p-8"
                  variant="strong"
                  glowOnHover={true}
                  showCornerAccents={true}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div className="text-3xl font-black text-indigo-400">{item.stat}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Build{' '}
            <span className="text-white/90">Something Great?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Free consultation with our technical team. No obligations.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-bold text-lg px-10" data-testid="button-cta-contact">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 justify-center items-center mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">No-risk discovery call</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Working MVP in 12 weeks</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Full code ownership</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
