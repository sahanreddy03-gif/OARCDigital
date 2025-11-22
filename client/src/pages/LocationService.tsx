// Programmatic Location-Based Service Pages
// SEO powerhouse: [Service] in [Malta Location]

import { useRoute } from 'wouter';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { createBreadcrumbSchema, createAggregateRatingSchema } from '@/utils/advancedSchema';
import { localBusinessSchema, createServiceSchema } from '@/utils/structuredData';

// Malta locations with SEO-optimized data
const maltaLocations: Record<string, { name: string; description: string }> = {
  'valletta': { name: 'Valletta', description: 'the historic capital city' },
  'sliema': { name: 'Sliema', description: 'the bustling commercial hub' },
  'st-julians': { name: 'St. Julians', description: 'the vibrant entertainment district' },
  'mosta': { name: 'Mosta', description: 'the central Malta town' },
  'birkirkara': { name: 'Birkirkara', description: 'Malta\'s largest town' },
  'qormi': { name: 'Qormi', description: 'the artisan\'s city' },
  'hamrun': { name: 'Hamrun', description: 'the industrial heart' },
  'naxxar': { name: 'Naxxar', description: 'the northern Malta town' },
  'zabbar': { name: 'Zabbar', description: 'the southern heritage town' },
  'attard': { name: 'Attard', description: 'the garden village' },
};

// Service data for programmatic pages
const serviceData: Record<string, {
  title: string;
  description: string;
  benefits: string[];
  process: { step: string; description: string }[];
  cta: string;
}> = {
  'social-media-creative-management': {
    title: 'Social Media Marketing',
    description: 'Professional social media management and creative services powered by AI and expert strategists.',
    benefits: [
      'Custom content creation for your brand',
      'AI-powered audience targeting and engagement',
      'Complete social media strategy and management',
      'Monthly analytics and performance reports',
      'Dedicated account manager in Malta'
    ],
    process: [
      { step: 'Discovery Call', description: 'We learn about your business, goals, and target audience' },
      { step: 'Strategy Development', description: 'Create a custom social media strategy tailored to your location' },
      { step: 'Content Creation', description: 'Design and produce engaging posts, stories, and campaigns' },
      { step: 'Launch & Optimize', description: 'Go live and continuously improve based on performance data' }
    ],
    cta: 'Start Your Social Media Campaign'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions combining AI automation with human creativity.',
    benefits: [
      'Multi-channel digital marketing campaigns',
      'SEO optimization for local and international reach',
      'PPC and paid advertising management',
      'Email marketing automation',
      'Conversion rate optimization'
    ],
    process: [
      { step: 'Market Research', description: 'Analyze your local market and competitors' },
      { step: 'Campaign Planning', description: 'Design integrated digital marketing strategy' },
      { step: 'Implementation', description: 'Launch campaigns across all digital channels' },
      { step: 'Performance Tracking', description: 'Monitor, analyze, and optimize for maximum ROI' }
    ],
    cta: 'Boost Your Digital Presence'
  },
  'branding-services': {
    title: 'Brand Identity & Design',
    description: 'Create a powerful brand identity that resonates with your Malta audience and beyond.',
    benefits: [
      'Complete brand identity development',
      'Logo design and brand guidelines',
      'Marketing collateral and business materials',
      'Digital and print design assets',
      'Brand strategy consulting'
    ],
    process: [
      { step: 'Brand Discovery', description: 'Understand your vision, values, and target market' },
      { step: 'Concept Development', description: 'Create multiple brand concepts and directions' },
      { step: 'Design Refinement', description: 'Perfect your chosen brand identity' },
      { step: 'Brand Rollout', description: 'Deliver complete brand assets and guidelines' }
    ],
    cta: 'Build Your Brand Identity'
  },
  'web-design': {
    title: 'Web Design & Development',
    description: 'Beautiful, high-converting websites designed for Malta businesses and beyond.',
    benefits: [
      'Custom responsive website design',
      'SEO-optimized development',
      'Mobile-first approach',
      'Fast loading speeds',
      'Ongoing support and maintenance'
    ],
    process: [
      { step: 'Planning', description: 'Define website goals, structure, and features' },
      { step: 'Design', description: 'Create stunning visual designs aligned with your brand' },
      { step: 'Development', description: 'Build your website with cutting-edge technology' },
      { step: 'Launch', description: 'Go live with full SEO optimization and analytics' }
    ],
    cta: 'Get Your Custom Website'
  },
  'video-production': {
    title: 'Video Production',
    description: 'Professional video production services from concept to final delivery.',
    benefits: [
      'Commercial and promotional videos',
      'Social media video content',
      'Product demonstrations and explainers',
      'Corporate and event videography',
      'Professional editing and post-production'
    ],
    process: [
      { step: 'Concept Development', description: 'Brainstorm ideas and create storyboards' },
      { step: 'Pre-Production', description: 'Plan shooting schedule, locations, and resources' },
      { step: 'Production', description: 'Professional filming with high-end equipment' },
      { step: 'Post-Production', description: 'Edit, color grade, and add effects for final delivery' }
    ],
    cta: 'Create Stunning Videos'
  },
  'ai-copywriting': {
    title: 'AI Copywriting Services',
    description: 'Powerful, conversion-focused copy created by AI and refined by expert writers.',
    benefits: [
      'Website copy and landing pages',
      'Blog articles and SEO content',
      'Ad copy and marketing materials',
      'Email campaigns and newsletters',
      'Social media captions and posts'
    ],
    process: [
      { step: 'Brief', description: 'Share your brand voice, audience, and goals' },
      { step: 'AI Generation', description: 'Create initial copy using advanced AI models' },
      { step: 'Human Refinement', description: 'Expert writers polish and perfect the content' },
      { step: 'Delivery', description: 'Receive ready-to-publish, high-converting copy' }
    ],
    cta: 'Get Professional Copy'
  },
  'hire-ai-employees': {
    title: 'Hire AI Employees',
    description: 'Scale your team instantly with AI-powered employees for every role.',
    benefits: [
      'Available 24/7 without breaks or holidays',
      'Handles unlimited volume of work',
      'Consistent quality and performance',
      'No training or onboarding required',
      'Significant cost savings vs traditional hiring'
    ],
    process: [
      { step: 'Consultation', description: 'Discuss your business needs and challenges' },
      { step: 'AI Selection', description: 'Choose the right AI employee for your role' },
      { step: 'Integration', description: 'Seamlessly integrate AI into your workflows' },
      { step: 'Optimization', description: 'Fine-tune performance for maximum efficiency' }
    ],
    cta: 'Hire Your AI Employee'
  },
  'revenue-automation': {
    title: 'Revenue Automation',
    description: 'Automate your entire revenue stack from lead generation to customer acquisition.',
    benefits: [
      'Automated lead generation and nurturing',
      'Sales funnel optimization',
      'Customer acquisition automation',
      'Revenue tracking and analytics',
      'Integration with your existing tools'
    ],
    process: [
      { step: 'Audit', description: 'Analyze your current revenue processes' },
      { step: 'Strategy', description: 'Design automation workflows and systems' },
      { step: 'Implementation', description: 'Build and deploy automation tools' },
      { step: 'Scale', description: 'Optimize and scale your revenue operations' }
    ],
    cta: 'Automate Your Revenue'
  },
};

export default function LocationService() {
  const [, params] = useRoute('/malta/:location/:service');
  
  const location = params?.location;
  const serviceSlug = params?.service;
  
  if (!location || !serviceSlug || !maltaLocations[location] || !serviceData[serviceSlug]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const locationInfo = maltaLocations[location];
  const service = serviceData[serviceSlug];
  
  // SEO metadata
  const seoTitle = `${service.title} in ${locationInfo.name}, Malta | OARC Digital`;
  const seoDescription = `Professional ${service.title.toLowerCase()} services in ${locationInfo.name}, Malta. ${service.description} Contact OARC Digital for a free consultation.`;
  
  // Breadcrumb schema for better search results
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Malta', url: '/malta' },
    { name: locationInfo.name, url: `/malta/${location}` },
    { name: service.title, url: `/malta/${location}/${serviceSlug}` }
  ]);
  
  // Service schema for this specific service
  const serviceSchema = createServiceSchema(
    `${service.title} in ${locationInfo.name}`,
    service.description,
    service.title
  );
  
  // Aggregate rating schema - shows stars in search!
  const ratingSchema = createAggregateRatingSchema(
    `${service.title} in ${locationInfo.name}`,
    4.9,
    127,
    5,
    'Service'
  );
  
  const combinedSchema = [localBusinessSchema, breadcrumbSchema, serviceSchema, ratingSchema];
  
  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`https://oarcdigital.com/malta/${location}/${serviceSlug}`}
        structuredData={combinedSchema}
        schemaId={`location-${location}-${serviceSlug}`}
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{locationInfo.name}</span>
            </div>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-semibold uppercase tracking-wider text-sm">
                  Serving {locationInfo.name}, Malta
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {service.title} in <span className="text-green-500">{locationInfo.name}</span>
              </h1>
              
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                {service.description} Proudly serving businesses in {locationInfo.name}, {locationInfo.description}.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+35679711799">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Phone className="mr-2 w-4 h-4" /> Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose OARC Digital in {locationInfo.name}?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border hover-elevate transition-all">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Process</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We've perfected our approach to deliver exceptional results for businesses in {locationInfo.name}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-lg border h-full hover-elevate transition-all">
                    <div className="text-5xl font-bold text-green-500/20 mb-3">0{index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-500/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Local CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business in {locationInfo.name}?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of satisfied clients across Malta who trust OARC Digital for their {service.title.toLowerCase()} needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 w-4 h-4" /> Get Free Consultation
                </Button>
              </Link>
              <a href="tel:+35679711799">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Phone className="mr-2 w-4 h-4" /> +356 7971 1799
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* FAQ Section - Voice Search Optimized */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-2">
                  How much does {service.title.toLowerCase()} cost in {locationInfo.name}?
                </h3>
                <p className="text-muted-foreground">
                  Our pricing is customized based on your specific needs and goals. Contact us for a free consultation and personalized quote.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-2">
                  Do you serve businesses outside of {locationInfo.name}?
                </h3>
                <p className="text-muted-foreground">
                  Yes! While we're proud to serve {locationInfo.name}, we work with clients across all of Malta, Europe, Middle East, and Asia.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-2">
                  How quickly can we get started?
                </h3>
                <p className="text-muted-foreground">
                  We can typically begin within 48 hours of your initial consultation. Our team is ready to help you achieve your goals quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
