import SEOHead from '@/components/SEOHead';
import Layout from '@/components/layout/Layout';
import { Link } from 'wouter';

export default function HospitalityMarketingMalta() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the most effective marketing channel for restaurants in Malta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For restaurants in Malta, Instagram and TikTok consistently drive the most direct bookings and walk-in traffic. Malta has extremely high social media usage relative to population, and food content performs particularly well. A single viral TikTok video can bring in 200+ new customers in a week. Google Maps optimisation is equally important — most tourists and locals searching 'restaurants near me' in Valletta, Sliema, or St Julians make decisions based on Google Maps listings. A strong combination of social media content, Google Business Profile management, and WhatsApp-based direct ordering is what separates thriving Malta restaurants from struggling ones."
        }
      },
      {
        "@type": "Question",
        "name": "How important are Google reviews for Malta hospitality businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google reviews are critical for Malta hospitality businesses — they directly influence whether tourists and locals choose your venue over a competitor 50 metres away. Malta receives 2.3 million tourists annually, most of whom rely on Google reviews to choose restaurants, hotels, and bars. A business with 4.6 stars and 200 reviews will outperform a competitor with 4.8 stars and 20 reviews because volume signals trustworthiness. Actively requesting reviews from satisfied customers, responding professionally to all reviews (especially negative ones), and maintaining a consistent review acquisition strategy is essential in Malta's competitive hospitality market."
        }
      },
      {
        "@type": "Question",
        "name": "What social media strategy works best for Malta hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malta hotels perform best on Instagram and Facebook when they combine three content types: aspirational property content (rooms, views, pool, sunset shots), authentic guest experience content (real guests enjoying the property — always with permission), and local discovery content (things to do in Malta, hidden gems near the hotel, seasonal events). Hotels targeting British, German, and Scandinavian tourists should post content in English but optimise hashtags and captions for each source market. Response time on Facebook and Instagram DMs directly impacts booking conversion — aim for under 30 minutes during business hours. Partnering with Malta travel micro-influencers (5,000-50,000 followers) delivers better ROI than one-off celebrity posts."
        }
      },
      {
        "@type": "Question",
        "name": "How can a small bar or café in Malta compete with bigger venues on social media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small bars and cafés in Malta have a significant advantage on social media: authenticity. The content that performs best in Malta's hospitality scene is behind-the-scenes, personality-driven, and hyper-local. A café in Marsaxlokk showing the owner's morning routine, the fishermen delivering fresh catch, and the regulars who've been coming for years will outperform a polished corporate chain every time. Focus on: one consistent posting personality (owner, barista, or staff member who is comfortable on camera), a signature visual style (colour palette, shooting angle, filter), and local pride content (Malta culture, language, traditions). Consistency beats frequency — 3 good posts per week beats 7 mediocre ones."
        }
      },
      {
        "@type": "Question",
        "name": "What does OARC Digital offer specifically for Malta hospitality businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OARC Digital provides end-to-end hospitality marketing for Malta restaurants, hotels, bars, and cafés. This includes social media management (Instagram, TikTok, Facebook) with Malta-specific content strategy, Google Business Profile optimisation and review management, content creation (photography direction, caption writing, video concepts), paid advertising on Meta and Google targeted to Malta tourists and locals, influencer partnerships with Malta food and lifestyle creators, and AI automation for customer enquiries and reservations. We currently manage marketing for several Malta hospitality venues and understand the island's unique market dynamics, seasonal patterns, and audience behaviour better than any off-island agency."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hospitality Marketing Malta: Fill Your Restaurant, Hotel or Bar Every Night",
    "description": "Expert hospitality marketing strategies for Malta restaurants, hotels and bars. Learn what actually drives bookings, reviews and repeat customers in the Maltese market.",
    "author": {
      "@type": "Organization",
      "name": "OARC Digital",
      "url": "https://oarcdigital.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OARC Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oarcdigital.com/oarc-logo.png"
      }
    },
    "datePublished": "2025-03-01",
    "dateModified": "2025-04-01"
  };

  const faqs = [
    {
      q: "What is the most effective marketing channel for restaurants in Malta?",
      a: "Instagram and TikTok consistently drive the most direct bookings and walk-in traffic for Malta restaurants. Malta has extremely high social media usage relative to population, and food content performs particularly well. A single viral TikTok video can bring in 200+ new customers in a week. Google Maps optimisation is equally important — most tourists and locals searching 'restaurants near me' in Valletta, Sliema, or St Julians make decisions based on Google Maps listings."
    },
    {
      q: "How important are Google reviews for Malta hospitality businesses?",
      a: "Google reviews are critical — they directly influence whether tourists and locals choose your venue over a competitor 50 metres away. Malta receives 2.3 million tourists annually, most of whom rely on Google reviews. A business with 4.6 stars and 200 reviews will outperform a competitor with 4.8 stars and 20 reviews because volume signals trustworthiness. Actively requesting reviews from satisfied customers and responding professionally to all reviews is essential in Malta's competitive hospitality market."
    },
    {
      q: "What social media strategy works best for Malta hotels?",
      a: "Malta hotels perform best combining three content types: aspirational property content (rooms, views, pool, sunset shots), authentic guest experience content, and local discovery content (things to do in Malta, hidden gems nearby, seasonal events). Response time on DMs directly impacts booking conversion — aim for under 30 minutes during business hours. Partnering with Malta travel micro-influencers (5,000-50,000 followers) delivers better ROI than one-off celebrity posts."
    },
    {
      q: "How can a small bar or café in Malta compete with bigger venues on social media?",
      a: "Small bars and cafés have a significant advantage: authenticity. The content that performs best in Malta's hospitality scene is behind-the-scenes, personality-driven, and hyper-local. A café in Marsaxlokk showing the owner's morning routine and local regulars will outperform a polished corporate chain. Focus on one consistent posting personality, a signature visual style, and local pride content. Consistency beats frequency — 3 great posts per week beats 7 mediocre ones."
    },
    {
      q: "What does OARC Digital offer specifically for Malta hospitality businesses?",
      a: "OARC Digital provides end-to-end hospitality marketing for Malta restaurants, hotels, bars, and cafés. This includes social media management with Malta-specific content strategy, Google Business Profile optimisation and review management, content creation, paid advertising targeting Malta tourists and locals, influencer partnerships with Malta food and lifestyle creators, and AI automation for customer enquiries and reservations. We currently manage marketing for several Malta hospitality venues and understand the island's unique market dynamics."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Hospitality Marketing Malta: Fill Your Venue Every Night | OARC Digital"
        description="Expert hospitality marketing for Malta restaurants, hotels and bars. Social media, Google reviews, content creation and AI automation — strategies that actually fill seats."
        canonical="https://oarcdigital.com/blog/hospitality-marketing-malta"
        schema={[faqSchema, articleSchema]}
      />
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">OARC Digital — Malta</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Hospitality Marketing Malta: Fill Your Restaurant, Hotel or Bar Every Night</h1>
            <p className="text-xl text-gray-300 mb-8">Malta's hospitality industry is one of the most competitive in Europe per square kilometre. The venues winning aren't always the best — they're the best marketed. Here's how to make your venue impossible to ignore.</p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Marketing Audit
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Malta Hospitality Marketing Landscape in 2025</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Malta has over 1,500 restaurants and hundreds of hotels, bars, and cafés competing for the same pool of locals and 2.3 million annual tourists. In Sliema, St Julians, and Valletta — Malta's three busiest hospitality corridors — a new venue opens every week. The marketing environment is noisier than ever.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            The businesses consistently fully booked aren't the ones with the biggest budgets. They're the ones with consistent social media presence, strong Google profiles, systems for collecting reviews, and content that makes people stop scrolling and say "I need to go there." The gap between a venue doing €8,000/week and one doing €25,000/week is almost entirely marketing.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Social Media Marketing for Malta Restaurants</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Instagram and TikTok are the primary discovery channels for Malta's dining scene. When someone visits Malta for the first time, they search Instagram hashtags, ask friends for recommendations, and browse TikTok videos. If your restaurant doesn't appear in those searches, you don't exist for that customer.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Content Works for Malta Restaurants</h3>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">The content formats that consistently perform in Malta's hospitality social media:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 text-lg">
            <li><strong>Food close-ups with motion</strong> — a burger being cut, pasta being plated, a cocktail being poured. Sound-on content performs 3x better than silent videos.</li>
            <li><strong>Behind-the-scenes kitchen content</strong> — chefs at work, ingredients being prepared. This builds trust and showcases craft.</li>
            <li><strong>Owner/personality content</strong> — the face behind the restaurant. Maltese audiences respond strongly to authenticity.</li>
            <li><strong>Malta cultural tie-ins</strong> — festa season, local events, seasonal ingredients from the Maltese market. Makes locals feel seen.</li>
            <li><strong>Tourist-targeted content</strong> — "If you're visiting Malta, you need to try..." performs extremely well for driving tourist footfall.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Google Maps and Reviews: The Booking Engine You're Ignoring</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Most Malta hospitality businesses underinvest in Google Business Profile management. Yet studies show that 76% of people who search for a local business on Google visit within 24 hours. For restaurants and bars, a well-optimised Google profile — with current photos, accurate hours, menu links, and recent reviews — is worth more than most paid advertising campaigns.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            The review collection strategy matters as much as the number of reviews. The best time to ask a customer for a review is when they're still in your venue and clearly satisfied — not in a mass email three days later. Train your front-of-house team to ask happy customers directly. A QR code on the receipt pointing to your Google review page converts at 15-20% with a verbal request.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Hospitality Marketing for Malta Hotels</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Hotels in Malta face a different marketing challenge from restaurants. The booking journey is longer — someone deciding to visit Malta typically researches 3-6 months in advance. This means your marketing needs to operate across the full customer journey: awareness (they've heard of your hotel), consideration (they're comparing you to alternatives), and conversion (they're ready to book).
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Explore our <Link href="/services/social-media-creative-management" className="text-[#ff914d] hover:underline">social media management services</Link> designed specifically for Malta hospitality, or our <Link href="/blog/restaurant-marketing-malta" className="text-[#ff914d] hover:underline">restaurant marketing guide</Link> for more detailed strategies.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The OARC Digital Approach to Hospitality Marketing</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            OARC Digital was built in Malta, for Malta businesses. We've worked with restaurants, bars, and hospitality venues across Qormi, Sliema, Zabbar, and St Julians. We understand the difference between what works for a tourist-facing Valletta restaurant and a neighbourhood Qormi favourite. We understand festa season, the summer rush, the iGaming conference crowds, and the January slowdown.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our hospitality marketing service covers social media management, content creation, Google profile management, paid advertising, influencer partnerships, and AI automation for customer communications. Everything is built around one metric: more people through your door.
          </p>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-[#ff914d] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Fill Your Venue Every Night?</h2>
            <p className="text-lg mb-8 opacity-90">OARC Digital is Malta's first Creative + AI Systems Agency. We know this market. Let's talk.</p>
            <Link href="/contact">
              <button className="bg-white text-[#ff914d] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                Book a Free Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
