import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Code2, Database, Cloud, Server, Cpu, Zap, Monitor, Smartphone, Globe, Lock, Layers, Boxes, Terminal, GitBranch } from 'lucide-react';
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiDocker, SiAmazon, SiPython, SiMongodb, SiKubernetes, SiGraphql } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";

import heroImg from '@assets/stock_images/custom_software_deve_6f9a0242.jpg';
import softwareDevImg1 from '@assets/stock_images/software_development_5606ca42.jpg';
import softwareDevImg2 from '@assets/stock_images/software_development_bf22fbae.jpg';
import softwareDevImg3 from '@assets/stock_images/software_development_e22831c9.jpg';
import aiSoftwareImg from '@assets/stock_images/ai_software_developm_171781f0.jpg';
import dashboardImg from '@assets/stock_images/financial_dashboard__226af471.jpg';
import mobileAppImg from '@assets/stock_images/mobile_app_developme_12e99cc2.jpg';

export default function CustomSoftwareDevelopment() {
  const [activeStep, setActiveStep] = useState(0);

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
  ];

  const buildProcess = [
    { icon: Terminal, title: "Discovery", desc: "Requirements & architecture", days: "Week 1-2" },
    { icon: Layers, title: "Design", desc: "UI/UX & system design", days: "Week 2-3" },
    { icon: Code2, title: "Build", desc: "Agile development sprints", days: "Week 3-10" },
    { icon: GitBranch, title: "Test", desc: "QA & security audits", days: "Week 10-11" },
    { icon: Cloud, title: "Deploy", desc: "Launch & monitoring", days: "Week 12" },
  ];

  const capabilities = [
    { icon: Monitor, title: "Web Apps", desc: "React, Next.js, Vue" },
    { icon: Smartphone, title: "Mobile", desc: "React Native, Flutter" },
    { icon: Server, title: "Backend", desc: "Node, Python, Go" },
    { icon: Database, title: "Databases", desc: "SQL, NoSQL, Graph" },
    { icon: Cloud, title: "Cloud", desc: "AWS, GCP, Azure" },
    { icon: Lock, title: "Security", desc: "SOC2, HIPAA, GDPR" },
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

      {/* HERO: Full-screen interface showcase */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        {/* Floating code snippets */}
        <div className="absolute top-20 right-10 bg-zinc-900/80 backdrop-blur-sm rounded-xl p-4 font-mono text-xs text-green-400 border border-zinc-800 hidden lg:block">
          <div className="text-zinc-500 mb-1">// Your business logic</div>
          <div><span className="text-purple-400">const</span> solution = <span className="text-yellow-400">await</span></div>
          <div className="pl-4">buildCustomSoftware(&#123;</div>
          <div className="pl-8">stack: <span className="text-green-400">'modern'</span>,</div>
          <div className="pl-8">scale: <span className="text-green-400">'enterprise'</span></div>
          <div className="pl-4">&#125;);</div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#23AACA]/20 border border-[#23AACA]/40 text-[#23AACA] text-sm font-medium mb-6">
                <Boxes className="w-4 h-4" />
                Development Services
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-custom-software">
                Build Software That <span className="text-[#23AACA]">Just Works</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                From web apps to enterprise platforms. No templates, no compromises—just code that solves real problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-[#23AACA] text-white rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-[#23AACA]/90 transition-colors"
                    data-testid="button-start-project"
                  >
                    Start Building
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Quick capabilities */}
              <div className="grid grid-cols-3 gap-4">
                {capabilities.slice(0, 3).map((cap, i) => (
                  <div key={i} className="text-center p-3 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <cap.icon className="w-6 h-6 text-[#23AACA] mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{cap.title}</div>
                    <div className="text-white/50 text-xs">{cap.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero interface preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#23AACA]/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Project Showcase - Bento Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What We Build
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
                      <div className="text-xs text-[#23AACA] font-medium mb-1">{project.category}</div>
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

      {/* SECTION 3: Tech Stack - Animated */}
      <section className="py-16 px-4 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our Tech Stack
            </h2>
          </div>

          {/* Animated tech strip */}
          <div className="relative">
            <div className="flex gap-8 animate-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 bg-zinc-900 rounded-xl border border-zinc-800 whitespace-nowrap group hover:border-[#23AACA]/50 transition-colors"
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
        `}</style>
      </section>

      {/* SECTION 4: Build Process - Visual Timeline */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                From Idea to Launch in 12 Weeks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven process delivers working software fast
              </p>
            </div>

            {/* Visual timeline */}
            <div className="grid md:grid-cols-5 gap-4">
              {buildProcess.map((step, i) => (
                <div 
                  key={i}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === i 
                      ? 'bg-[#23AACA] text-white scale-105 shadow-2xl shadow-[#23AACA]/30' 
                      : 'bg-zinc-100 text-black hover:bg-zinc-200'
                  }`}
                  onClick={() => setActiveStep(i)}
                  data-testid={`process-step-${i}`}
                >
                  {/* Step number */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === i ? 'bg-white text-[#23AACA]' : 'bg-[#23AACA] text-white'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <step.icon className={`w-10 h-10 mb-4 ${activeStep === i ? 'text-white' : 'text-[#23AACA]'}`} />
                  
                  <div className={`text-xs font-bold mb-2 ${activeStep === i ? 'text-white/80' : 'text-[#23AACA]'}`}>
                    {step.days}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`text-sm ${activeStep === i ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#23AACA] transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Stats Bar */}
      <section className="py-12 px-4 bg-[#23AACA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "12 Weeks", label: "Avg. Timeline" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "Full", label: "Code Ownership" },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Capabilities Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Full-Stack Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {capabilities.map((cap, i) => (
                <div 
                  key={i}
                  className="group p-6 rounded-2xl bg-white hover:bg-[#23AACA] hover:text-white transition-all duration-300 border border-zinc-200 hover:border-[#23AACA] text-center"
                  data-testid={`capability-${i}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#23AACA]/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <cap.icon className="w-7 h-7 text-[#23AACA] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold mb-1">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Build <span className="text-[#23AACA]">Something Great?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Free consultation with our technical team. No obligations.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#23AACA] text-white rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-[#23AACA]/90 transition-colors"
              data-testid="button-cta-contact"
            >
              Schedule Free Consultation
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
