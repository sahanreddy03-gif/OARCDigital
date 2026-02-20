import { useLocation } from 'wouter';
import {
  ArrowRight, Play, Eye, Star, CheckCircle, Shield,
  Utensils, Home, Ship, Car, Heart, Wrench, Landmark,
  ShoppingBag, Smartphone, GraduationCap, PawPrint, Compass,
  Users, Lock, Video, MessageSquare, ChevronRight, Zap,
  TrendingUp, Package
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import BrandMarquee from '../components/BrandMarquee';
import heroImg from '../assets/hero-malta.jpg';
import thumbFood from '../assets/thumb-food.jpg';
import thumbYacht from '../assets/thumb-yacht.jpg';
import thumbProperty from '../assets/thumb-property.jpg';
import thumbCar from '../assets/thumb-car.jpg';
import thumbWellness from '../assets/thumb-wellness.jpg';

function Hero() {
  const [, navigate] = useLocation();

  return (
    <div className="pj-image-wash" style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end' }}>
      <img
        src={heroImg}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
      />
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="pj-container" style={{ paddingBottom: 40, paddingTop: 80 }}>
          <div className="pj-live-badge" style={{ marginBottom: 16 }}>
            <span className="pj-live-dot" />
            <span>47 live now across Malta</span>
          </div>
          <h1
            style={{
              fontSize: 'var(--pj-size-hero)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--pj-text)',
              marginBottom: 16,
            }}
          >
            Malta's Live
            <br />
            Shopping
            <br />
            <span style={{ color: 'var(--pj-red)' }}>Marketplace.</span>
          </h1>
          <p
            style={{
              fontSize: 'var(--pj-size-body)',
              lineHeight: 1.6,
              color: 'var(--pj-text-secondary)',
              maxWidth: 440,
              marginBottom: 32,
            }}
          >
            Watch real businesses live. Browse property, cars, food, services, fashion — everything Malta has to offer. Chat directly. Buy with escrow protection.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, maxWidth: 440 }}>
            <button
              className="pj-btn-primary"
              style={{ flex: 1, minWidth: 180, padding: '18px 24px', fontSize: 16 }}
              onClick={() => navigate('/pjazza/discover')}
              data-testid="button-start-shopping"
            >
              <span>Start Shopping</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button
              className="pj-btn-secondary"
              style={{ flex: 1, minWidth: 160, padding: '16px 24px' }}
              onClick={() => navigate('/pjazza/business/onboard')}
              data-testid="button-sell-on-pjazza"
            >
              <span>Sell on PJAZZA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveNowPreview() {
  const [, navigate] = useLocation();

  const streams = [
    { name: "Noni's Kitchen", location: 'Sliema', viewers: 47, category: 'Restaurant', img: thumbFood, rating: 4.8 },
    { name: 'Blue Harbour Charters', location: 'Grand Harbour', viewers: 23, category: 'Yacht Charter', img: thumbYacht, rating: 4.9 },
    { name: 'Seaview Residence', location: "St Julian's", viewers: 18, category: 'Real Estate', img: thumbProperty, rating: 4.7 },
    { name: 'Malta Motors', location: 'Birkirkara', viewers: 31, category: 'Automotive', img: thumbCar, rating: 4.6 },
    { name: 'Fortina Spa', location: 'Sliema', viewers: 15, category: 'Wellness', img: thumbWellness, rating: 4.8 },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', letterSpacing: '-0.01em' }}>
              Shopping Live Now
            </h2>
            <p style={{ fontSize: 'var(--pj-size-xs)', color: 'var(--pj-text-tertiary)', marginTop: 2 }}>
              Watch, chat, and buy — in real time
            </p>
          </div>
          <button className="pj-btn-ghost" style={{ gap: 4 }} onClick={() => navigate('/pjazza/discover')} data-testid="button-see-all-live">
            See all <ChevronRight size={14} />
          </button>
        </div>
      </ScrollReveal>

      <div className="pj-stream-grid">
        {streams.map((stream, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div
              className="pj-card pj-touch"
              style={{ width: 200, overflow: 'hidden' }}
              data-testid={`card-live-stream-${i}`}
            >
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <img src={stream.img} alt={stream.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.6))' }} />
                <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 'var(--pj-radius-pill)', background: 'var(--pj-red)', fontSize: 9, fontWeight: 700, color: 'white' }}>
                  <span className="pj-live-dot" style={{ background: 'white', width: 4, height: 4 }} />
                  LIVE
                </div>
                <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', alignItems: 'center', gap: 3, padding: '3px 8px', borderRadius: 'var(--pj-radius-pill)', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', fontSize: 9, fontWeight: 600, color: 'white' }}>
                  <Eye size={10} /> {stream.viewers}
                </div>
                <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={14} fill="white" style={{ color: 'white', marginLeft: 2 }} />
                  </div>
                </div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                  <span style={{ fontSize: 'var(--pj-size-small)', fontWeight: 700, color: 'var(--pj-text)' }}>{stream.name}</span>
                  <CheckCircle size={12} style={{ color: 'var(--pj-green)', flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)', marginBottom: 8 }}>
                  {stream.location} · {stream.category}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-secondary)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Star size={10} fill="#D4A574" style={{ color: '#D4A574' }} /> {stream.rating}
                  </span>
                  <span style={{ fontSize: 'var(--pj-size-micro)', fontWeight: 700, color: 'var(--pj-red)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    Watch <ArrowRight size={10} />
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function AllSectors() {
  const [, navigate] = useLocation();

  const sectors = [
    { Icon: Utensils, name: 'Food & Dining', desc: 'Restaurants, cafes, bakeries, catering', color: 'var(--pj-red)' },
    { Icon: Home, name: 'Property', desc: 'Rentals, sales, live virtual tours', color: 'var(--pj-gold)' },
    { Icon: Car, name: 'Cars & Auto', desc: 'Dealers, private sales, live walkarounds', color: 'var(--pj-text-secondary)' },
    { Icon: Ship, name: 'Yachts & Marine', desc: 'Charters, boat sales, marina services', color: 'var(--pj-text-secondary)' },
    { Icon: Wrench, name: 'Home Services', desc: 'Plumbers, electricians, builders, painters', color: 'var(--pj-green)' },
    { Icon: Users, name: 'Freelancers', desc: 'Designers, developers, consultants', color: 'var(--pj-gold)' },
    { Icon: Heart, name: 'Health & Wellness', desc: 'Spas, gyms, clinics, beauty salons', color: 'var(--pj-red)' },
    { Icon: ShoppingBag, name: 'Fashion & Retail', desc: 'Clothing, boutiques, accessories', color: 'var(--pj-text-secondary)' },
    { Icon: Smartphone, name: 'Electronics', desc: 'Phone shops, repairs, gadgets', color: 'var(--pj-text-secondary)' },
    { Icon: Compass, name: 'Tourism', desc: 'Tours, excursions, boat trips, events', color: 'var(--pj-gold)' },
    { Icon: GraduationCap, name: 'Education', desc: 'Tutors, courses, language schools', color: 'var(--pj-green)' },
    { Icon: PawPrint, name: 'Pets & Animals', desc: 'Pet shops, vets, grooming, breeders', color: 'var(--pj-red)' },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <span className="pj-label" style={{ display: 'block', marginBottom: 6 }}>BROWSE BY SECTOR</span>
            <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', letterSpacing: '-0.01em' }}>
              All of Malta, in one place.
            </h2>
          </div>
          <button className="pj-btn-ghost" style={{ gap: 4 }} onClick={() => navigate('/pjazza/sectors')} data-testid="button-all-sectors">
            View all <ChevronRight size={14} />
          </button>
        </div>
      </ScrollReveal>

      <div className="pj-grid-2">
        {sectors.map((s, i) => (
          <ScrollReveal key={i} delay={i * 40}>
            <div
              className="pj-card pj-touch"
              style={{ padding: 16, height: '100%', cursor: 'pointer' }}
              onClick={() => navigate('/pjazza/sectors')}
              data-testid={`card-sector-${s.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--pj-radius-md)',
                    background: 'var(--pj-surface-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <s.Icon size={18} strokeWidth={2} style={{ color: s.color }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: 'var(--pj-size-small)', fontWeight: 700, color: 'var(--pj-text)' }}>
                    {s.name}
                  </h3>
                  <p style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)', lineHeight: 1.3 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function FeaturedListings() {
  const [, navigate] = useLocation();

  const listings = [
    { title: 'Sea View 2-Bed Apartment', location: 'Sliema', price: '€1,350/mo', img: thumbProperty, badge: 'Live Tour', sector: 'Property' },
    { title: '2024 VW Polo 1.0 TSI', location: '12,000 km', price: '€18,500', img: thumbCar, badge: 'Walkaround', sector: 'Automotive' },
    { title: '40ft Catamaran Charter', location: 'Grand Harbour', price: '€1,200/day', img: thumbYacht, badge: 'Live Tour', sector: 'Yacht' },
    { title: 'Deep Tissue Massage', location: 'Fortina Spa, Sliema', price: '€65', img: thumbWellness, badge: 'Book Live', sector: 'Wellness' },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', letterSpacing: '-0.01em' }}>
              Featured Listings
            </h2>
            <p style={{ fontSize: 'var(--pj-size-xs)', color: 'var(--pj-text-tertiary)', marginTop: 2 }}>
              Property, cars, services — all escrow protected
            </p>
          </div>
          <button className="pj-btn-ghost" style={{ gap: 4 }} onClick={() => navigate('/pjazza/discover')} data-testid="button-browse-listings">
            Browse <ChevronRight size={14} />
          </button>
        </div>
      </ScrollReveal>

      <div className="pj-listing-grid">
        {listings.map((item, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div className="pj-card pj-touch" style={{ overflow: 'hidden' }} data-testid={`card-listing-${i}`}>
              <div style={{ display: 'flex' }}>
                <div style={{ width: 110, flexShrink: 0, position: 'relative' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 100 }} />
                  <div style={{ position: 'absolute', top: 8, left: 8, fontSize: 8, fontWeight: 700, color: 'white', background: 'var(--pj-red)', padding: '2px 6px', borderRadius: 'var(--pj-radius-pill)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span className="pj-live-dot" style={{ width: 4, height: 4, background: 'white' }} />
                    {item.badge}
                  </div>
                </div>
                <div style={{ padding: 14, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)', marginBottom: 2 }}>{item.sector}</span>
                  <h3 style={{ fontSize: 'var(--pj-size-small)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)', marginBottom: 8 }}>{item.location}</p>
                  <span className="pj-mono" style={{ fontSize: 'var(--pj-size-h3)', fontWeight: 800, color: 'var(--pj-text)' }}>{item.price}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function HowItWorksPreview() {
  const [, navigate] = useLocation();

  const steps = [
    { num: '01', Icon: Video, title: 'Watch live streams', desc: 'Browse real businesses across Malta streaming live. See the food, the property, the product — as it is.' },
    { num: '02', Icon: MessageSquare, title: 'Chat & negotiate', desc: 'Ask questions in real time. Request a closer look. Make an offer directly to the seller.' },
    { num: '03', Icon: Lock, title: 'Buy with escrow', desc: 'Your money is held safely by PJAZZA until you confirm you received what you ordered.' },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <span className="pj-label" style={{ display: 'block', marginBottom: 8 }}>HOW PJAZZA WORKS</span>
        <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 8, letterSpacing: '-0.01em' }}>
          See it. Chat it. Buy it.
        </h2>
        <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)', marginBottom: 24, lineHeight: 1.5, maxWidth: 480 }}>
          Live video shopping with real trust. No surprises, no scams.
        </p>
      </ScrollReveal>

      <div className="pj-grid-cards">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="pj-card" style={{ padding: 20, display: 'flex', gap: 16, height: '100%' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--pj-radius-md)',
                  background: i === 2 ? 'var(--pj-green-soft)' : 'var(--pj-surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <step.Icon size={20} strokeWidth={2} style={{ color: i === 2 ? 'var(--pj-green)' : 'var(--pj-text)' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span className="pj-mono" style={{ fontSize: 'var(--pj-size-xs)', fontWeight: 700, color: 'var(--pj-red)' }}>{step.num}</span>
                  <h3 style={{ fontSize: 'var(--pj-size-body)', fontWeight: 700, color: 'var(--pj-text)' }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={260}>
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <button
            className="pj-btn-ghost"
            style={{ color: 'var(--pj-red)', gap: 6 }}
            onClick={() => navigate('/pjazza/how-it-works')}
            data-testid="button-learn-more-how"
          >
            Learn more about how it works <ArrowRight size={14} />
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
}

function TrustSection() {
  const features = [
    { Icon: Shield, title: 'Escrow Protection', desc: 'Money held safely until delivery confirmed. No risk for buyers or sellers.', color: 'var(--pj-green)' },
    { Icon: CheckCircle, title: 'Verified Sellers', desc: 'Every business is ID-verified, reviewed, and rated by the community.', color: 'var(--pj-green)' },
    { Icon: Eye, title: 'Live Video Proof', desc: 'See exactly what you\'re getting before you pay. No stock photos, no surprises.', color: 'var(--pj-text)' },
    { Icon: Zap, title: 'Instant Communication', desc: 'Chat directly with sellers during live streams. Ask anything in real time.', color: 'var(--pj-text)' },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <span className="pj-label" style={{ display: 'block', marginBottom: 8 }}>TRUST & SAFETY</span>
        <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 24, letterSpacing: '-0.01em' }}>
          Every transaction protected.
        </h2>
      </ScrollReveal>

      <div className="pj-pitch-grid">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '8px 0' }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--pj-radius-md)',
                  background: 'var(--pj-surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <f.Icon size={18} strokeWidth={2} style={{ color: f.color }} />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--pj-size-body)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 2 }}>{f.title}</h3>
                <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <ScrollReveal>
      <div className="pj-section-tight" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="pj-stats-grid" style={{ gap: 1 }}>
          {[
            { value: '2,400+', label: 'watching now' },
            { value: '180+', label: 'businesses' },
            { value: '12', label: 'sectors' },
            { value: 'Same-day', label: 'delivery' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: 16,
                background: 'var(--pj-surface-1)',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === 3 ? '0 12px 12px 0' : '0',
                borderLeft: i > 0 ? '1px solid var(--pj-border)' : 'none',
              }}
              data-testid={`text-stat-${stat.label.replace(/\s/g, '-')}`}
            >
              <div className="pj-mono" style={{ fontSize: 'var(--pj-size-h3)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 2 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function SuccessStories() {
  const stories = [
    { business: "Noni's Kitchen", result: '47 viewers, 12 bookings, €540 revenue', time: '20 min stream', sector: 'Restaurant' },
    { business: 'Joe the Plumber', result: '3 new clients, €420 in jobs booked', time: '15 min stream', sector: 'Home Services' },
    { business: 'Island Boutique', result: '28 viewers, 8 sales, €320 revenue', time: '25 min stream', sector: 'Fashion' },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <TrendingUp size={16} style={{ color: 'var(--pj-red)' }} />
          <span style={{ fontSize: 'var(--pj-size-xs)', fontWeight: 700, color: 'var(--pj-red)', letterSpacing: '0.02em' }}>
            SUCCESS STORIES
          </span>
        </div>
        <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 20, letterSpacing: '-0.01em' }}>
          Real businesses. Real results.
        </h2>
      </ScrollReveal>

      <div className="pj-grid-cards">
        {stories.map((s, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="pj-card" style={{ padding: 20, borderColor: 'var(--pj-border-hover)' }}>
              <span style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)', marginBottom: 8, display: 'block' }}>{s.sector}</span>
              <h3 style={{ fontSize: 'var(--pj-size-body)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 6 }}>{s.business}</h3>
              <p style={{ fontSize: 'var(--pj-size-small)', fontWeight: 600, color: 'var(--pj-gold)', marginBottom: 4 }}>{s.result}</p>
              <p style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>{s.time}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function PeoplePreview() {
  const [, navigate] = useLocation();

  const featured = [
    { name: 'Mark Borg', role: 'Licensed Electrician', location: 'Birkirkara', rating: 4.9, liveNow: true },
    { name: 'Elena Vella', role: 'Yoga Instructor', location: 'Sliema', rating: 5.0, liveNow: false },
    { name: 'Pierre Camilleri', role: 'Scuba Instructor', location: 'Gozo', rating: 4.9, liveNow: true },
    { name: 'Dr. Sarah Mifsud', role: 'Corporate Lawyer', location: 'Valletta', rating: 4.8, liveNow: false },
    { name: 'Maria Grech', role: 'Cooking Teacher', location: 'Mdina', rating: 4.8, liveNow: false },
    { name: 'Anna Cassar', role: 'Hair Stylist', location: 'Sliema', rating: 4.7, liveNow: true },
  ];

  return (
    <div className="pj-section">
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <span className="pj-label" style={{ display: 'block', marginBottom: 6 }}>INDIVIDUALS & FREELANCERS</span>
            <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 700, color: 'var(--pj-text)', letterSpacing: '-0.01em' }}>
              Hire anyone in Malta.
            </h2>
          </div>
          <button className="pj-btn-ghost" style={{ gap: 4 }} onClick={() => navigate('/pjazza/people')} data-testid="button-all-people">
            View all <ChevronRight size={14} />
          </button>
        </div>
      </ScrollReveal>

      <div className="pj-stream-grid">
        {featured.map((person, i) => (
          <ScrollReveal key={i} delay={i * 50}>
            <div
              className="pj-card pj-touch"
              style={{ width: 160, padding: 16, textAlign: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/pjazza/people')}
              data-testid={`card-person-preview-${i}`}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--pj-surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 10px',
                  border: person.liveNow ? '2px solid var(--pj-red)' : '2px solid var(--pj-border)',
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--pj-text-secondary)' }}>
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
                {person.liveNow && (
                  <div style={{
                    position: 'absolute', bottom: -2, right: -2,
                    width: 14, height: 14, borderRadius: '50%',
                    background: 'var(--pj-red)', border: '2px solid var(--pj-black)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Video size={7} strokeWidth={3} style={{ color: 'white' }} />
                  </div>
                )}
              </div>
              <h3 style={{ fontSize: 'var(--pj-size-small)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {person.name}
              </h3>
              <p style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-red)', fontWeight: 600, marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {person.role}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                <Star size={10} fill="#D4A574" style={{ color: '#D4A574' }} />
                <span style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>{person.rating}</span>
                <span style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>· {person.location}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function FinalCTA() {
  const [, navigate] = useLocation();

  return (
    <div className="pj-section" style={{ textAlign: 'center' }}>
      <ScrollReveal>
        <Package size={32} strokeWidth={1.5} style={{ color: 'var(--pj-red)', marginBottom: 16 }} />
        <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 800, color: 'var(--pj-text)', marginBottom: 8, letterSpacing: '-0.01em' }}>
          Everything Malta has to offer.
          <br />
          <span style={{ color: 'var(--pj-gold)' }}>Live and protected.</span>
        </h2>
        <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)', marginBottom: 28, lineHeight: 1.6, maxWidth: 400, margin: '0 auto 28px' }}>
          12 sectors. 180+ businesses. Escrow on every transaction.
          <br />
          The marketplace Malta has been waiting for.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 440, margin: '0 auto' }}>
          <button
            className="pj-btn-primary"
            style={{ minWidth: 180, padding: '18px 24px', fontSize: 16 }}
            onClick={() => navigate('/pjazza/discover')}
            data-testid="button-explore-now"
          >
            <span>Explore Now</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
          <button
            className="pj-btn-secondary"
            style={{ minWidth: 160, padding: '16px 24px' }}
            onClick={() => navigate('/pjazza/business/onboard')}
            data-testid="button-list-business"
          >
            List Your Business
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function Portal() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--pj-black)' }}>
      <Hero />
      <StatsBar />
      <LiveNowPreview />
      <div className="pj-divider" />
      <AllSectors />
      <BrandMarquee />
      <FeaturedListings />
      <div className="pj-divider" />
      <PeoplePreview />
      <div className="pj-divider" />
      <HowItWorksPreview />
      <div className="pj-divider" />
      <TrustSection />
      <div className="pj-divider" />
      <SuccessStories />
      <div className="pj-divider" />
      <FinalCTA />
      <div style={{ height: 48 }} />
    </div>
  );
}
