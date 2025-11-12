import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Users, Code, Zap, Target } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroImg from '@assets/stock_images/software_development_e22831c9.jpg';
import teamImg1 from '@assets/stock_images/artificial_intellige_ec409837.jpg';
import teamImg2 from '@assets/stock_images/artificial_intellige_12bf09cb.jpg';
import codingTeamImg from '@assets/stock_images/software_development_bf22fbae.jpg';
import dataScientistsImg from '@assets/stock_images/digital_marketing_st_e4117c4b.jpg';
import remoteTeamImg from '@assets/stock_images/software_development_5606ca42.jpg';

export default function HireAIEmployees() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hire AI Employees - Scale Your Team Instantly | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Access top AI engineering talent across the Americas. Scale your team with dedicated AI specialists who integrate seamlessly with your operations.");
    }
  }, []);

  const services = [
    {
      icon: Code,
      title: 'AI Engineering Teams',
      description: 'Expert AI engineers and data scientists',
      items: [
        'Machine Learning Engineers',
        'Data Scientists',
        'AI Solution Architects',
        'MLOps Specialists',
        'Full-Stack AI Developers'
      ]
    },
    {
      icon: Zap,
      title: 'Rapid Scale & Deploy',
      description: 'Add specialized talent in days, not months',
      items: [
        'Seamless Integration',
        'Your Timezone',
        'Agile Methodology',
        'Proven Track Record',
        'Cultural Alignment'
      ]
    },
    {
      icon: Target,
      title: 'Specialized Expertise',
      description: 'Deep AI domain knowledge',
      items: [
        'Generative AI Development',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'Custom ML Models'
      ]
    },
    {
      icon: Users,
      title: 'Flexible Engagement',
      description: 'Scale teams up or down as needed',
      items: [
        'Dedicated Teams',
        'Staff Augmentation',
        'Project-Based Work',
        'Long-Term Partnerships',
        'Flexible Contracts'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Top 1% AI Talent',
      description: 'Access rigorously vetted AI engineers and data scientists who have proven expertise in building production AI systems.'
    },
    {
      title: 'Cost-Effective Scaling',
      description: 'Get senior-level AI talent at a fraction of traditional hiring costs while maintaining quality and productivity.'
    },
    {
      title: 'Faster Time to Market',
      description: 'Accelerate your AI roadmap with experienced teams who can hit the ground running on day one.'
    },
    {
      title: 'Seamless Integration',
      description: 'Our teams work in your timezone, use your tools, and integrate with your existing workflows from day one.'
    },
    {
      title: 'Proven Delivery Model',
      description: 'Benefit from our battle-tested nearshore delivery model trusted by Fortune 500 companies for 4+ years.'
    }
  ];

  const caseStudies = [
    {
      title: 'Tapestry: Real-Time Fashion Operations with AI',
      industry: 'Luxury Retail',
      description: 'SAP automation across Coach, Kate Spade, and Stuart Weitzman delivering real-time data validations.',
      image: teamImg1,
      slug: 'tapestry-automation'
    },
    {
      title: 'Acclaim Autism: 83% Faster Patient Intake',
      industry: 'Healthcare',
      description: 'AI-powered document processing enabling families to access autism care services faster.',
      image: teamImg2,
      slug: 'acclaim-autism'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="AI engineering team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-hire-ai">
              Hire AI Engineering Teams
            </h1>

            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              Access top AI talent across the Americas—all in your timezone
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-3xl">
              Accelerate your AI roadmap with dedicated engineering teams that integrate seamlessly with your operations. From machine learning to generative AI, we provide the talent you need to succeed.
            </p>

            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                data-testid="button-build-team"
              >
                Build Your Team
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Image Left + Text Right */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={codingTeamImg} 
                alt="AI engineering team working together"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Elite AI engineers ready to join your team
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Access a curated network of top-tier AI engineering talent across the Americas. Our teams bring deep expertise in machine learning, generative AI, computer vision, and natural language processing—all working in your timezone.
              </p>
              <p className="text-base text-gray-700 mb-8">
                Every engineer is rigorously vetted for technical excellence, communication skills, and cultural fit. From day one, they integrate seamlessly into your workflows, using your tools and following your processes.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-explore-talent"
                >
                  Explore Our Talent
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            AI Engineering <span className="text-[#5FD4C4]">Expertise</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Comprehensive AI talent for every stage of your journey
          </p>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentService ? 'w-8 bg-[#5FD4C4]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-service-${idx}`}
              />
            ))}
          </div>

          {/* Grid of 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[0, 1, 2].map((offset) => {
              const actualIdx = (currentService + offset) % services.length;
              const service = services[actualIdx];
              const Icon = service.icon;
              
              return (
                <div key={actualIdx} className="bg-white border-2 border-gray-100 rounded-3xl p-8" data-testid={`card-service-${actualIdx}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {offset === 2 && (
                      <button
                        onClick={nextService}
                        className="text-gray-400 hover:text-black transition-colors"
                        data-testid="button-next-service"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#5FD4C4] flex-shrink-0 mt-0.5" />
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

      {/* Section 2: Text Left + Image Right */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Seamless collaboration in your timezone
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Say goodbye to offshore communication barriers. Our AI engineering teams work during your business hours across North and South America, ensuring real-time collaboration when you need it most.
              </p>
              <p className="text-base text-gray-700 mb-8">
                With cultural alignment and fluent English communication, our teams don't just deliver code—they become true partners in your AI journey, participating in standups, sprint planning, and strategy sessions just like in-house team members.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-meet-teams"
                >
                  Meet Our Teams
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
            <div>
              <img 
                src={remoteTeamImg} 
                alt="Remote AI team video conference"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Client <span className="text-[#5FD4C4]">Success Stories</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Real results from companies that scaled with OARC Digital AI teams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <Link key={idx} href={`/case-studies/${study.slug}`}>
                <div className="group bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-[#5FD4C4] transition-all hover-elevate cursor-pointer" data-testid={`card-case-study-${study.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#5FD4C4] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                      {study.industry}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#ea580c] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#ea580c] font-semibold text-sm">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Image Left + Text Right */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dataScientistsImg} 
                alt="Data scientists analyzing ML models"
                className="w-full rounded-3xl h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6">
                Proven track record with Fortune 500 companies
              </h2>
              <p className="text-base text-gray-700 mb-6">
                For over 4 years, we've helped industry leaders scale their AI capabilities through our nearshore delivery model. From startups to Fortune 500 enterprises, our teams have delivered production-grade AI systems that drive real business value.
              </p>
              <p className="text-base text-gray-700 mb-8">
                Whether you need to accelerate time-to-market, fill critical skill gaps, or scale capacity for a major initiative, our flexible engagement models adapt to your needs—from dedicated teams to project-based augmentation.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-view-case-studies"
                >
                  View Case Studies
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Why <span className="text-[#5FD4C4]">OARC Digital</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            The smarter way to build AI capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-2xl p-6" data-testid={`benefit-${idx}`}>
                <h3 className="text-lg font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to Build Your AI Dream Team?
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Get access to top AI engineering talent and accelerate your roadmap.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-start-hiring"
            >
              Start Hiring
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's discuss how our AI engineering teams can help you achieve your goals faster.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-contact-us"
            >
              Contact Us
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
