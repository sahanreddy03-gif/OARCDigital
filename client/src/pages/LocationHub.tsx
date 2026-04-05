// Location Hub Page — /malta/:location
// Shows all available services for a specific Malta location

import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';

const locationNames: Record<string, { name: string; description: string }> = {
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
  'mdina': { name: 'Mdina', description: 'the Silent City' },
  'rabat': { name: 'Rabat', description: 'the historic gateway town' },
  'marsaskala': { name: 'Marsaskala', description: 'the southern seaside town' },
  'marsaxlokk': { name: 'Marsaxlokk', description: 'the fishing village' },
  'birgu': { name: 'Birgu', description: 'the historic Three Cities' },
  'san-gwann': { name: 'San Gwann', description: 'the northern residential hub' },
  'msida': { name: 'Msida', description: 'the university town' },
  'gzira': { name: 'Gzira', description: 'the waterfront town' },
  'swieqi': { name: 'Swieqi', description: 'the modern residential area' },
  'mellieha': { name: 'Mellieha', description: 'the northern coastal village' },
  'bugibba': { name: 'Bugibba', description: 'the tourist resort town' },
  'san-pawl-il-bahar': { name: 'St. Paul\'s Bay', description: 'the northern bay town' },
  'zejtun': { name: 'Zejtun', description: 'the historic southern town' },
  'zurrieq': { name: 'Zurrieq', description: 'the southern Malta town' },
  'paola': { name: 'Paola', description: 'the central southern town' },
  'tarxien': { name: 'Tarxien', description: 'the ancient heritage town' },
  'fgura': { name: 'Fgura', description: 'the southern residential town' },
  'balzan': { name: 'Balzan', description: 'the leafy central village' },
  'floriana': { name: 'Floriana', description: 'the grand harbour gateway' },
  'marsa': { name: 'Marsa', description: 'the harbour industrial town' },
  'luqa': { name: 'Luqa', description: 'the airport gateway town' },
  'gudja': { name: 'Gudja', description: 'the southern Malta village' },
  'birzebbuga': { name: 'Birzebbuga', description: 'the southern bay village' },
  'kirkop': { name: 'Kirkop', description: 'the southern Malta village' },
  'siggiewi': { name: 'Siggiewi', description: 'the western Malta town' },
  'mqabba': { name: 'Mqabba', description: 'the southern Malta village' },
  'lija': { name: 'Lija', description: 'the charming central village' },
  'iklin': { name: 'Iklin', description: 'the northern residential village' },
  'santa-venera': { name: 'Santa Venera', description: 'the central Malta town' },
  'pieta': { name: 'Pieta', description: 'the harbour town' },
  'pembroke': { name: 'Pembroke', description: 'the northern coastal town' },
  'ghaxaq': { name: 'Ghaxaq', description: 'the southern Malta village' },
  'xghajra': { name: 'Xghajra', description: 'the eastern coastal village' },
  'kalkara': { name: 'Kalkara', description: 'the Three Cities harbour village' },
  'isla': { name: 'Isla', description: 'the historic Senglea peninsula' },
  'bormla': { name: 'Bormla', description: 'the historic Cospicua city' },
  'cospicua': { name: 'Cospicua', description: 'the historic Three Cities' },
  'san-lawrenz': { name: 'San Lawrenz', description: 'the Gozo village' },
  'swatar': { name: 'Swatar', description: 'the residential suburb' },
};

const services = [
  { slug: 'social-media-creative-management', name: 'Social Media Management', desc: 'Instagram, TikTok, Facebook and LinkedIn management' },
  { slug: 'digital-marketing', name: 'Digital Marketing', desc: 'Multi-channel campaigns, SEO, and paid advertising' },
  { slug: 'branding-services', name: 'Branding', desc: 'Brand identity, logo design, and brand guidelines' },
  { slug: 'web-design', name: 'Web Design', desc: 'Custom, mobile-first websites built to convert' },
  { slug: 'video-production', name: 'Video Production', desc: 'Professional video for social media and advertising' },
  { slug: 'paid-advertising', name: 'Paid Advertising', desc: 'Meta Ads and Google Ads management' },
  { slug: 'hire-ai-employees', name: 'AI Employees', desc: 'Custom AI agents for customer service and sales' },
  { slug: 'ai-consulting', name: 'AI Consulting', desc: 'Strategy and implementation for AI adoption' },
  { slug: 'revenue-automation', name: 'Revenue Automation', desc: 'End-to-end automation for growth' },
  { slug: 'ai-copywriting', name: 'AI Copywriting', desc: 'AI-powered copy for web, ads, and social' },
];

export default function LocationHub() {
  const [, params] = useRoute('/malta/:location');
  if (!params) return null;

  const { location } = params;
  const loc = locationNames[location];

  if (!loc) return null;

  const pageTitle = `Marketing Agency in ${loc.name}, Malta | OARC Digital`;
  const pageDesc = `OARC Digital provides social media management, branding, AI automation, web design, and paid advertising for businesses in ${loc.name}, Malta. Malta's first Creative + AI Systems Agency.`;
  const canonicalUrl = `https://oarcdigital.com/malta/${location}`;

  return (
    <Layout>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        canonicalUrl={canonicalUrl}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">{loc.name}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Malta — {loc.name}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Marketing Agency in {loc.name}, Malta
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              OARC Digital serves businesses in {loc.name}, {loc.description}. Malta's first Creative + AI Systems Agency — combining brand strategy, content production, and AI automation in one team.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Services Available in {loc.name}</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/malta/${location}/${service.slug}`}
                className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to grow your business in {loc.name}?</h2>
            <p className="text-zinc-300 mb-6">OARC Digital — Malta's First Creative + AI Systems Agency. Month-to-month contracts. Senior team on every account.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start a Conversation
            </Link>
            <p className="text-zinc-500 text-sm mt-4">hello@oarcdigital.com · +356 7971 1799</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
