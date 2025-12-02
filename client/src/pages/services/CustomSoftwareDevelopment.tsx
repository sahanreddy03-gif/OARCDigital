import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Code2, Database, Cloud, Server, Cpu, Zap, Users, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImg from '@assets/stock_images/custom_software_deve_6f9a0242.jpg';
import teamImg from '@assets/stock_images/custom_software_deve_d139944c.jpg';

export default function CustomSoftwareDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'Custom Web Applications',
      description: 'Tailored solutions for your business',
      items: [
        'React & TypeScript Development',
        'Progressive Web Apps (PWA)',
        'SaaS Platform Development',
        'E-commerce Solutions',
        'Admin Dashboards & Portals'
      ]
    },
    {
      icon: Server,
      title: 'Backend & API Development',
      description: 'Scalable server infrastructure',
      items: [
        'RESTful API Design',
        'GraphQL Implementations',
        'Microservices Architecture',
        'Real-Time Systems',
        'Serverless Functions'
      ]
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust data architecture',
      items: [
        'PostgreSQL & MySQL',
        'MongoDB & NoSQL',
        'Data Migration',
        'Performance Optimization',
        'Backup & Recovery'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Modern cloud-native solutions',
      items: [
        'AWS & GCP Deployment',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Auto-Scaling Systems',
        'Infrastructure as Code'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Purpose-Built Solutions',
      description: 'Every line of code is written specifically for your business requirements. No bloated templates or unnecessary features—just exactly what you need.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from day one. Our systems handle 10x traffic spikes without breaking a sweat or requiring expensive rewrites.'
    },
    {
      title: 'Security-First Design',
      description: 'Enterprise-grade security practices including encryption, authentication, and regular penetration testing to protect your data and users.'
    },
    {
      title: 'Rapid Development',
      description: 'Agile methodology with 2-week sprints and continuous delivery. See progress fast and iterate quickly based on real user feedback.'
    },
    {
      title: 'Full Ownership',
      description: 'You own 100% of the code. Full documentation, clean architecture, and no vendor lock-in. Your software is your asset, forever.'
    }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'GraphQL', category: 'API' }
  ];

  const useCases = [
    {
      icon: Building2,
      title: 'Enterprise Platforms',
      description: 'Mission-critical systems for large organizations. ERP integrations, workflow automation, and internal tools that streamline operations across departments.',
      items: ['Custom CRM systems', 'Inventory management', 'HR & payroll platforms', 'Reporting dashboards']
    },
    {
      icon: Zap,
      title: 'SaaS Products',
      description: 'Launch your software-as-a-service product with multi-tenancy, subscription billing, and scalable infrastructure built for growth.',
      items: ['Multi-tenant architecture', 'Stripe/billing integration', 'User management', 'Analytics & reporting']
    },
    {
      icon: Users,
      title: 'Customer Portals',
      description: 'Self-service platforms that reduce support costs and improve customer satisfaction. Secure access, real-time updates, and intuitive interfaces.',
      items: ['Secure authentication', 'Document management', 'Support ticketing', 'Account management']
    },
    {
      icon: Cpu,
      title: 'AI-Powered Applications',
      description: 'Integrate machine learning and AI capabilities into your software. From chatbots to predictive analytics, we build intelligent systems.',
      items: ['OpenAI/LLM integration', 'Predictive analytics', 'Natural language processing', 'Computer vision']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We dive deep into your business requirements, technical constraints, and growth objectives to create a comprehensive project roadmap.'
    },
    {
      step: '02',
      title: 'Architecture & Design',
      description: 'Our architects design scalable, secure systems with detailed technical specifications and interactive prototypes for validation.'
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'Two-week sprints with continuous delivery. You see working software from week one, with regular demos and feedback loops.'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Automated testing, security audits, and performance optimization ensure your software is rock-solid before launch.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Zero-downtime deployment with comprehensive documentation. Ongoing support, monitoring, and enhancement packages available.'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.customSoftwareDevelopment?.title || "Custom Software Development | Enterprise Solutions | OARC Digital"}
        description={revenueServicesSEO.customSoftwareDevelopment?.description || "Build powerful custom software solutions tailored to your business. From web applications to enterprise platforms, OARC Digital delivers scalable, secure software that drives results."}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.customSoftwareDevelopment?.path || '/services/custom-software-development'}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Custom Software Development Services",
          "Build powerful custom software solutions tailored to your business needs",
          "Web Applications & Enterprise Software"
        )}
        schemaId="service-custom-software-development"
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Custom software development team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(220,65%,33%)]/20 border border-[hsl(220,65%,33%)]/40 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-[hsl(220,65%,50%)]" />
              <span className="text-sm font-medium text-white">Custom Development</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-custom-software">
              Custom Software Development
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
              Build software that fits your business—not the other way around
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              From custom web applications to enterprise platforms, we build scalable, secure software solutions that solve real business problems. No templates. No compromises. Just code that works.
            </p>

            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-[hsl(220,65%,50%)] text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                data-testid="button-start-project"
              >
                Start Your Project
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Development <span className="text-[hsl(220,65%,50%)]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Full-stack development capabilities to build any software solution your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-[hsl(220,65%,50%)]/30 hover:shadow-xl transition-all duration-300"
                  data-testid={`service-card-${idx}`}
                >
                  <div className="w-14 h-14 bg-[hsl(220,65%,50%)]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-[hsl(220,65%,50%)]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(220,65%,50%)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[hsl(220,30%,10%)] to-[hsl(220,40%,15%)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 text-center">
            Our <span className="text-[hsl(220,65%,60%)]">Tech Stack</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto text-center">
            Modern technologies chosen for performance, scalability, and maintainability
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-[hsl(220,65%,60%)]/50 transition-all"
                data-testid={`tech-${tech.name.toLowerCase()}`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            What We <span className="text-[hsl(220,65%,50%)]">Build</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            From startups to enterprises, we build software solutions across industries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all"
                  data-testid={`use-case-${idx}`}
                >
                  <div className="w-12 h-12 bg-[hsl(220,65%,95%)] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-[hsl(220,65%,50%)]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-5">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.items.map((item, itemIdx) => (
                      <span 
                        key={itemIdx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                Why Custom <span className="text-[hsl(220,65%,50%)]">Development?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Off-the-shelf solutions force you to adapt your business to software limitations. Custom development does the opposite—we build exactly what you need.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4" data-testid={`benefit-${idx}`}>
                    <div className="w-8 h-8 bg-[hsl(220,65%,50%)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(220,65%,50%)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={teamImg}
                alt="Custom software development team collaborating"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[hsl(220,65%,50%)] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-black mb-1">500+</div>
                <div className="text-sm text-white/80">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 text-center">
            Our <span className="text-[hsl(220,65%,60%)]">Process</span>
          </h2>
          <p className="text-lg text-white/70 mb-16 max-w-2xl mx-auto text-center">
            A proven methodology that delivers results on time and on budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, idx) => (
              <div 
                key={idx}
                className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                data-testid={`process-step-${idx}`}
              >
                <div className="text-5xl font-black text-[hsl(220,65%,60%)]/30 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white/20 transform rotate-45 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[hsl(220,65%,50%)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tell us about your project and get a free consultation with our technical team. No obligations, just honest advice.
          </p>
          
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-white text-[hsl(220,65%,40%)] rounded-full pl-10 pr-4 py-4 text-base font-bold hover-elevate active-elevate-2"
              data-testid="button-cta-contact"
            >
              Schedule Free Consultation
              <div className="w-10 h-10 bg-[hsl(220,65%,50%)] rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
