// Comparison Page - High-Intent SEO for "OARC vs" searches
// Targets: "AI marketing agency vs traditional", "AI employees vs hiring", etc.

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { createBreadcrumbSchema, createAggregateRatingSchema } from '@/utils/advancedSchema';
import { createServiceSchema } from '@/utils/structuredData';

export default function Comparison() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Why OARC', url: '/comparison' }
  ]);
  
  // Service schema for AI-powered marketing services
  const serviceSchema = createServiceSchema(
    'AI-Powered Marketing Services',
    'OARC Digital delivers enterprise-grade AI marketing with 24/7 AI employees, 2-3 day turnaround, and 40-60% cost savings vs traditional agencies.',
    'Marketing & Advertising'
  );
  
  // Aggregate rating schema
  const ratingSchema = createAggregateRatingSchema(
    'OARC Digital Marketing Services',
    4.9,
    127,
    5,
    'Service'
  );
  
  const combinedSchema = [breadcrumbSchema, serviceSchema, ratingSchema];
  
  return (
    <>
      <SEOHead
        title="OARC Digital vs Traditional Agencies | Why Choose AI-Powered Marketing"
        description="Compare OARC Digital's AI-powered approach vs traditional marketing agencies. See why businesses choose our AI employees, faster delivery, and better results at lower costs."
        canonicalUrl="https://oarcdigital.com/comparison"
        structuredData={combinedSchema}
        schemaId="comparison"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Why Choose <span className="text-green-500">OARC Digital</span>?
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                The AI-powered marketing agency that delivers enterprise results at unprecedented speed and scale
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Comparison Table */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              OARC Digital vs Traditional Agencies
            </h2>
            
            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 font-semibold border-b">
                <div>Feature</div>
                <div className="text-center text-green-600">OARC Digital</div>
                <div className="text-center text-muted-foreground">Traditional Agency</div>
              </div>
              
              {[
                {
                  feature: 'Delivery Speed',
                  oarc: '2-3 days average',
                  traditional: '2-3 weeks average'
                },
                {
                  feature: 'Availability',
                  oarc: '24/7 AI employees',
                  traditional: 'Business hours only'
                },
                {
                  feature: 'Scalability',
                  oarc: 'Instant scaling',
                  traditional: 'Limited by team size'
                },
                {
                  feature: 'Cost per Project',
                  oarc: '40-60% lower',
                  traditional: 'Standard agency rates'
                },
                {
                  feature: 'AI Integration',
                  oarc: 'Built-in AI automation',
                  traditional: 'Manual processes'
                },
                {
                  feature: 'Revisions',
                  oarc: 'Unlimited',
                  traditional: 'Limited (2-3 rounds)'
                },
                {
                  feature: 'Data-Driven Insights',
                  oarc: 'Real-time AI analytics',
                  traditional: 'Monthly reports'
                },
                {
                  feature: 'Creative + Strategy',
                  oarc: 'Integrated approach',
                  traditional: 'Often separate teams'
                }
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{row.oarc}</span>
                  </div>
                  <div className="text-center flex items-center justify-center gap-2 text-muted-foreground">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm">{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* AI Employees vs Traditional Hiring */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              AI Employees vs Traditional Hiring
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Scale your team instantly without recruitment, training, or overhead costs
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* OARC AI Employees */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 p-8 rounded-lg border-2 border-green-500">
                <div className="text-green-600 font-bold mb-2">OARC AI EMPLOYEES</div>
                <h3 className="text-2xl font-bold mb-6">Instant, Scalable Team</h3>
                <ul className="space-y-3">
                  {[
                    'Available immediately - no recruitment',
                    'Works 24/7 without breaks or holidays',
                    'Handles unlimited volume of work',
                    'No training or onboarding required',
                    'Consistent quality every time',
                    'Scales instantly with your needs',
                    'Cancel anytime - no contracts',
                    '70-80% cost savings vs full-time'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Traditional Hiring */}
              <div className="bg-card p-8 rounded-lg border">
                <div className="text-muted-foreground font-bold mb-2">TRADITIONAL HIRING</div>
                <h3 className="text-2xl font-bold mb-6">Slow, Expensive Process</h3>
                <ul className="space-y-3">
                  {[
                    '2-3 months recruitment process',
                    'Limited to business hours (40hrs/week)',
                    'Capacity constraints & burnout',
                    '2-4 weeks onboarding & training',
                    'Variable quality & performance',
                    'Slow, expensive to scale',
                    'Long notice periods & contracts',
                    'Full salary + benefits + overhead'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* ROI Calculator Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See Your Potential Savings
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Calculate how much you could save by switching to OARC Digital
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl font-bold text-green-600 mb-2">40-60%</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl font-bold text-green-600 mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
            </div>
            
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Your Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "How can OARC deliver faster than traditional agencies?",
                  a: "We combine AI automation with expert human oversight. Our AI employees handle repetitive tasks 24/7, while our creative team focuses on strategy and quality control."
                },
                {
                  q: "Is the quality as good as traditional agencies?",
                  a: "Our quality often exceeds traditional agencies because we combine the best of both worlds: AI consistency and speed with human creativity and strategic thinking."
                },
                {
                  q: "What if I need changes or revisions?",
                  a: "Unlike traditional agencies that limit revisions, we offer unlimited revisions. Our AI employees can implement changes instantly."
                },
                {
                  q: "Can I try OARC before committing?",
                  a: "Yes! We offer project-based work with no long-term contracts. Start with a small project to see the difference yourself."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of companies that switched to OARC Digital and never looked back
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
