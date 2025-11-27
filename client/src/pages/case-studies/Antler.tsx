import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';

export default function StartUpVenturesCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.ventureHubCo.title}
        description={caseStudiesSEO.ventureHubCo.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.ventureHubCo.path}`}
        ogType={caseStudiesSEO.ventureHubCo.ogType}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url(https://cdn.sanity.io/images/k0dlbavy/production/dda9d1a51593d1b1b3d410306649a91439b84a4b-3200x1800.png?auto=format&fit=max&q=100&w=1600)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6" data-testid="heading-case-study-title">
            Reimagining the StartUp Ventures Brand
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            StartUp Ventures is the investor backing the world's most driven founders from day zero to greatness.
          </p>
        </div>
      </section>

      {/* Project Summary Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Project Summary</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Reimagining the StartUp Ventures Brand
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            StartUp Ventures is the investor backing the world's most driven founders from day zero to greatness. StartUp Ventures reached out to OARC Digital to help reimagine its brand and support in connecting its new positioning and messaging platform to a stand-out and exceptional visual execution.
          </p>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Year</h4>
              <p className="text-3xl font-black text-black">2022</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Industry</h4>
              <p className="text-3xl font-black text-black">Venture Capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Showcase - Grid 1 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/ec8d392156780c07aeaca016fdea0454efb8dd5f-1360x1360.png?auto=format&fit=max&q=100&w=680"
              alt="StartUp Ventures Brand Identity 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-brand-1"
            />
            <div className="grid grid-rows-2 gap-8">
              <img
                src="https://cdn.sanity.io/images/k0dlbavy/production/af995589daa0440380161d2575cf14d52a614fdb-1336x1780.png?auto=format&fit=max&q=100&w=668"
                alt="StartUp Ventures Brand Identity 2"
                className="w-full h-auto rounded-lg"
                data-testid="img-brand-2"
              />
              <img
                src="https://cdn.sanity.io/images/k0dlbavy/production/b03fa37dfffc62e78f0fb0d434c27c59a770ca66-1336x1780.png?auto=format&fit=max&q=100&w=668"
                alt="StartUp Ventures Brand Identity 3"
                className="w-full h-auto rounded-lg"
                data-testid="img-brand-3"
              />
            </div>
          </div>

          {/* Wide Banner */}
          <div className="mb-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/baf00df3836a5efac2367441a876bb82d533f93e-2672x890.png?auto=format&fit=max&q=100&w=1336"
              alt="StartUp Ventures Brand Banner 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-banner-1"
            />
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/d5174502354d1b787282b15bc7e39ff606a54409-890x890.png?auto=format&fit=max&q=100&w=445"
              alt="StartUp Ventures Brand Element 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-element-1"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/fe4b223fef5bddf4f720d8fafcc2e8e111f5c688-892x890.png?auto=format&fit=max&q=100&w=446"
              alt="StartUp Ventures Brand Element 2"
              className="w-full h-auto rounded-lg"
              data-testid="img-element-2"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/bcabc06390aaa8db67e1de835a73727103078d93-890x890.png?auto=format&fit=max&q=100&w=445"
              alt="StartUp Ventures Brand Element 3"
              className="w-full h-auto rounded-lg"
              data-testid="img-element-3"
            />
          </div>

          {/* Wide Banners */}
          <div className="space-y-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/429e8701748596b589b8c0a3a379a0d8948ae6f4-2672x890.png?auto=format&fit=max&q=100&w=1336"
              alt="StartUp Ventures Brand Banner 2"
              className="w-full h-auto rounded-lg"
              data-testid="img-banner-2"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/f624f7aeccb5bbd89d83169cac312a9b0c7f2aea-2672x890.png?auto=format&fit=max&q=100&w=1336"
              alt="StartUp Ventures Brand Banner 3"
              className="w-full h-auto rounded-lg"
              data-testid="img-banner-3"
            />
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/aa5eb2abc48b4beeb634cb5d15089fa2814326fb-1336x891.png?auto=format&fit=max&q=100&w=668"
              alt="StartUp Ventures Brand Philosophy"
              className="w-full h-auto rounded-lg"
              data-testid="img-philosophy"
            />
            <div>
              <p className="text-xl md:text-2xl font-bold text-black leading-relaxed">
                Visionary people don't color inside the lines. The system of brand devices denote moving from one point to another, with the circle and asterisk highlighting important points and the arrows showing the journey between them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Examples */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/f297153851f39ffc52149a224b01a27631c7d6c3-1336x761.png?auto=format&fit=max&q=100&w=668"
              alt="StartUp Ventures Application 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-app-1"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/b02968d366f294d8a9dee4e95012ab360ff8b26e-1336x760.png?auto=format&fit=max&q=100&w=668"
              alt="StartUp Ventures Application 2"
              className="w-full h-auto rounded-lg"
              data-testid="img-app-2"
            />
          </div>

          {/* Three Column Grid - Vertical */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/75efc8437069169804fce44d9a487156dc5d52f8-840x890.png?auto=format&fit=max&q=100&w=420"
              alt="StartUp Ventures Vertical 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-vertical-1"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/21a65f60639680592479fa1209322795b3a649a8-840x890.png?auto=format&fit=max&q=100&w=420"
              alt="StartUp Ventures Vertical 2"
              className="w-full h-auto rounded-lg"
              data-testid="img-vertical-2"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/63c401962d5c4c07d31d2432a755cf013813d102-841x890.png?auto=format&fit=max&q=100&w=421"
              alt="StartUp Ventures Vertical 3"
              className="w-full h-auto rounded-lg"
              data-testid="img-vertical-3"
            />
          </div>

          {/* Final Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/87d9f4d688917278d5e790a22853eac5eb204e9d-1336x760.png?auto=format&fit=max&q=100&w=668"
              alt="StartUp Ventures Final 1"
              className="w-full h-auto rounded-lg"
              data-testid="img-final-1"
            />
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/fc0ec35476a2a37d4348b6965e3eec2a7afd31b8-1336x760.png?auto=format&fit=max&q=100&w=668"
              alt="StartUp Ventures Final 2"
              className="w-full h-auto rounded-lg"
              data-testid="img-final-2"
            />
          </div>

          {/* Last Image */}
          <div className="mt-8">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/1e4a49388acd746b568c8ea60f66b070c1142b03-1336x761.png?auto=format&fit=max&q=100&w=668"
              alt="StartUp Ventures Complete Brand"
              className="w-full h-auto rounded-lg mx-auto max-w-2xl"
              data-testid="img-complete"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Reach For The Stars</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Amplify your design capacity with OARC Digital's expert branding services. Let's create something exceptional together.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="group" data-testid="button-contact">
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to reimagine your brand and create a stand-out visual identity? Let's collaborate on your next branding project.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="group" data-testid="button-get-in-touch">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
