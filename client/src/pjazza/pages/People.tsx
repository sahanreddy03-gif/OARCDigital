import { useState } from 'react';
import { useLocation } from 'wouter';
import {
  ArrowLeft, ArrowRight, Star, CheckCircle, Video, Search,
  Wrench, Scale, Waves, Heart, Palette, Scissors,
  GraduationCap, Camera, Code, Calculator, Briefcase,
  ChefHat, Dumbbell, Music, Globe, MapPin, Clock,
  ChevronRight, Users, Shield, Filter
} from 'lucide-react';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import ScrollReveal from '../components/ScrollReveal';

const categories = [
  { id: 'all', label: 'All', Icon: Users },
  { id: 'trades', label: 'Tradespeople', Icon: Wrench },
  { id: 'legal', label: 'Legal & Finance', Icon: Scale },
  { id: 'fitness', label: 'Health & Fitness', Icon: Dumbbell },
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'creative', label: 'Creative', Icon: Palette },
  { id: 'beauty', label: 'Beauty & Wellness', Icon: Scissors },
  { id: 'marine', label: 'Marine & Outdoor', Icon: Waves },
  { id: 'tech', label: 'Tech & Digital', Icon: Code },
  { id: 'food', label: 'Food & Cooking', Icon: ChefHat },
  { id: 'music', label: 'Music & Arts', Icon: Music },
];

const people = [
  { name: 'Mark Borg', specialty: 'Licensed Electrician', category: 'trades', location: 'Birkirkara', rating: 4.9, reviews: 87, hourly: '€35/hr', verified: true, liveNow: true, available: true, desc: 'Residential and commercial electrical work, smart home installations, fault diagnosis.' },
  { name: 'Dr. Sarah Mifsud', specialty: 'Corporate Lawyer', category: 'legal', location: 'Valletta', rating: 4.8, reviews: 54, hourly: '€120/hr', verified: true, liveNow: false, available: true, desc: 'Business formation, contracts, commercial disputes, GDPR compliance.' },
  { name: 'Antonio Galea', specialty: 'Master Plumber', category: 'trades', location: 'Mosta', rating: 4.7, reviews: 112, hourly: '€40/hr', verified: true, liveNow: true, available: true, desc: 'Emergency repairs, bathroom renovations, water heater installations, leak detection.' },
  { name: 'Elena Vella', specialty: 'Yoga Instructor', category: 'fitness', location: 'Sliema', rating: 5.0, reviews: 63, hourly: '€25/session', verified: true, liveNow: false, available: true, desc: 'Hatha, Vinyasa and restorative yoga. Private sessions and group classes. All levels welcome.' },
  { name: 'Pierre Camilleri', specialty: 'PADI Scuba Instructor', category: 'marine', location: 'Gozo', rating: 4.9, reviews: 148, hourly: '€60/dive', verified: true, liveNow: true, available: true, desc: 'Open water courses, advanced diving, wreck dives, underwater photography tours.' },
  { name: 'Maria Grech', specialty: 'Maltese Cooking Teacher', category: 'food', location: 'Mdina', rating: 4.8, reviews: 41, hourly: '€45/class', verified: true, liveNow: false, available: true, desc: 'Traditional Maltese recipes, pastizzi masterclass, Mediterranean cooking for groups and private sessions.' },
  { name: 'David Azzopardi', specialty: 'Web Developer', category: 'tech', location: 'St Julian\'s', rating: 4.7, reviews: 38, hourly: '€55/hr', verified: true, liveNow: false, available: true, desc: 'Full-stack development, e-commerce sites, mobile apps, API integrations.' },
  { name: 'Lisa Farrugia', specialty: 'Personal Trainer', category: 'fitness', location: 'Mellieha', rating: 4.9, reviews: 76, hourly: '€35/session', verified: true, liveNow: false, available: true, desc: 'Weight loss, strength training, rehabilitation exercises. Outdoor and gym sessions.' },
  { name: 'Joe Zammit', specialty: 'AC Technician', category: 'trades', location: 'Hamrun', rating: 4.6, reviews: 93, hourly: '€30/hr', verified: true, liveNow: false, available: true, desc: 'Air conditioning installation, servicing, repair. All major brands. Emergency callouts.' },
  { name: 'Carmen Spiteri', specialty: 'Advocate & Notary', category: 'legal', location: 'Floriana', rating: 4.9, reviews: 67, hourly: '€100/hr', verified: true, liveNow: false, available: true, desc: 'Property transfers, wills, inheritance, family law, notarial deeds.' },
  { name: 'Stefan Debono', specialty: 'Guitar Teacher', category: 'music', location: 'Rabat', rating: 4.8, reviews: 52, hourly: '€20/lesson', verified: true, liveNow: false, available: true, desc: 'Acoustic and electric guitar lessons. Classical, rock, jazz. Beginner to advanced.' },
  { name: 'Anna Cassar', specialty: 'Hair Stylist', category: 'beauty', location: 'Sliema', rating: 4.7, reviews: 134, hourly: '€40/session', verified: true, liveNow: true, available: true, desc: 'Cuts, colouring, bridal styling, keratin treatments. 12 years experience.' },
  { name: 'James Buttigieg', specialty: 'Photographer', category: 'creative', location: 'Valletta', rating: 4.9, reviews: 89, hourly: '€80/hr', verified: true, liveNow: false, available: true, desc: 'Weddings, portraits, events, commercial photography. Drone shots available.' },
  { name: 'Roberta Attard', specialty: 'English & Maltese Tutor', category: 'education', location: 'Msida', rating: 4.8, reviews: 45, hourly: '€22/hr', verified: true, liveNow: false, available: true, desc: 'SEC and Matsec preparation, essay writing, conversational Maltese for foreigners.' },
  { name: 'Chris Fenech', specialty: 'Carpenter & Joiner', category: 'trades', location: 'Siggiewi', rating: 4.7, reviews: 61, hourly: '€45/hr', verified: true, liveNow: false, available: true, desc: 'Custom furniture, kitchen fitting, door installation, wood restoration.' },
  { name: 'Nina Pace', specialty: 'Accountant', category: 'legal', location: 'Ta\' Xbiex', rating: 4.6, reviews: 33, hourly: '€50/hr', verified: true, liveNow: false, available: false, desc: 'Tax returns, bookkeeping, VAT registration, company accounts, financial planning.' },
  { name: 'Marco Scicluna', specialty: 'Sailing Instructor', category: 'marine', location: 'Marsaxlokk', rating: 4.9, reviews: 28, hourly: '€70/session', verified: true, liveNow: false, available: true, desc: 'RYA-certified sailing courses, day charters, navigation training around Malta and Gozo.' },
  { name: 'Diane Zahra', specialty: 'Pilates Instructor', category: 'fitness', location: 'San Gwann', rating: 4.8, reviews: 57, hourly: '€28/class', verified: true, liveNow: false, available: true, desc: 'Mat and reformer Pilates. Pre and post-natal classes. Private and group sessions.' },
  { name: 'Karl Gauci', specialty: 'Graphic Designer', category: 'creative', location: 'Gzira', rating: 4.7, reviews: 42, hourly: '€40/hr', verified: true, liveNow: false, available: true, desc: 'Branding, logo design, marketing materials, social media graphics, packaging design.' },
  { name: 'Claire Bonnici', specialty: 'Makeup Artist', category: 'beauty', location: 'Naxxar', rating: 4.9, reviews: 98, hourly: '€55/session', verified: true, liveNow: false, available: true, desc: 'Bridal makeup, special events, editorial. Mobile service across Malta.' },
];

function PageHero() {
  return (
    <div className="pj-section" style={{ paddingTop: 40, paddingBottom: 24 }}>
      <ScrollReveal>
        <button
          className="pj-btn-ghost"
          style={{ marginBottom: 16, gap: 6, padding: '4px 0' }}
          onClick={() => window.history.back()}
          data-testid="button-back"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <span className="pj-label" style={{ display: 'block', marginBottom: 8 }}>INDIVIDUALS & FREELANCERS</span>
        <h1 style={{ fontSize: 'var(--pj-size-h1)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--pj-text)', marginBottom: 12 }}>
          Find anyone
          <br />
          <span style={{ color: 'var(--pj-red)' }}>in Malta.</span>
        </h1>
        <p style={{ fontSize: 'var(--pj-size-body)', color: 'var(--pj-text-secondary)', lineHeight: 1.6, maxWidth: 480 }}>
          Browse individuals offering their skills and services across Malta.
          From plumbers to lawyers, scuba instructors to yoga teachers — watch them work live, check their reviews, and hire with confidence.
        </p>
      </ScrollReveal>
    </div>
  );
}

function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <ScrollReveal>
      <div className="pj-section-tight" style={{ paddingTop: 0, paddingBottom: 8 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 16px',
            borderRadius: 'var(--pj-radius-md)',
            background: 'var(--pj-surface-1)',
            border: '1px solid var(--pj-border)',
          }}
        >
          <Search size={16} strokeWidth={2} style={{ color: 'var(--pj-text-tertiary)', flexShrink: 0 }} />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search by name, skill, or location..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--pj-text)',
              fontSize: 'var(--pj-size-body)',
              fontFamily: 'inherit',
            }}
            data-testid="input-search-people"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

function CategoryFilters({ active, onChange }: { active: string; onChange: (v: string) => void }) {
  return (
    <ScrollReveal>
      <div className="pj-section-tight" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="pj-scroll-x" style={{ gap: 8, paddingBottom: 4 }}>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`pj-pill ${active === c.id ? 'pj-pill-active' : ''}`}
              onClick={() => onChange(c.id)}
              data-testid={`button-filter-${c.id}`}
            >
              <c.Icon size={14} strokeWidth={2} />
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function PersonCard({ person, index }: { person: typeof people[0]; index: number }) {
  const [, navigate] = useLocation();

  return (
    <ScrollReveal delay={index * 40}>
      <div
        className="pj-card pj-touch"
        style={{ padding: 0, overflow: 'hidden' }}
        data-testid={`card-person-${index}`}
      >
        <div style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 12 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: 'var(--pj-surface-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: person.liveNow ? '2px solid var(--pj-red)' : '2px solid var(--pj-border)',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--pj-text-secondary)' }}>
                {person.name.split(' ').map(n => n[0]).join('')}
              </span>
              {person.liveNow && (
                <div style={{
                  position: 'absolute', bottom: -2, right: -2,
                  width: 16, height: 16, borderRadius: '50%',
                  background: 'var(--pj-red)', border: '2px solid var(--pj-black)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Video size={8} strokeWidth={3} style={{ color: 'white' }} />
                </div>
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <h3 style={{ fontSize: 'var(--pj-size-body)', fontWeight: 700, color: 'var(--pj-text)' }}>
                  {person.name}
                </h3>
                {person.verified && (
                  <CheckCircle size={14} style={{ color: 'var(--pj-green)', flexShrink: 0 }} />
                )}
              </div>
              <p style={{ fontSize: 'var(--pj-size-small)', fontWeight: 600, color: 'var(--pj-red)', marginBottom: 2 }}>
                {person.specialty}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>
                  <MapPin size={10} /> {person.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>
                  <Star size={10} fill="#D4A574" style={{ color: '#D4A574' }} /> {person.rating} ({person.reviews})
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span className="pj-mono" style={{ fontSize: 'var(--pj-size-body)', fontWeight: 700, color: 'var(--pj-text)' }}>
                {person.hourly}
              </span>
            </div>
          </div>

          <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)', lineHeight: 1.5, marginBottom: 14 }}>
            {person.desc}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {person.liveNow && (
                <span style={{
                  fontSize: 'var(--pj-size-micro)', fontWeight: 700, color: 'white',
                  background: 'var(--pj-red)', padding: '3px 8px',
                  borderRadius: 'var(--pj-radius-pill)',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <span className="pj-live-dot" style={{ width: 4, height: 4, background: 'white' }} />
                  LIVE NOW
                </span>
              )}
              {person.available ? (
                <span style={{
                  fontSize: 'var(--pj-size-micro)', fontWeight: 600,
                  color: 'var(--pj-green)', padding: '3px 8px',
                  borderRadius: 'var(--pj-radius-pill)',
                  background: 'var(--pj-green-soft)',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <Clock size={10} /> Available
                </span>
              ) : (
                <span style={{
                  fontSize: 'var(--pj-size-micro)', fontWeight: 600,
                  color: 'var(--pj-text-tertiary)', padding: '3px 8px',
                  borderRadius: 'var(--pj-radius-pill)',
                  background: 'var(--pj-surface-2)',
                }}>
                  Unavailable
                </span>
              )}
            </div>
            <button
              className="pj-btn-ghost"
              style={{ gap: 4, color: person.liveNow ? 'var(--pj-red)' : 'var(--pj-text-secondary)' }}
              data-testid={`button-view-${index}`}
            >
              {person.liveNow ? 'Watch Live' : 'View Profile'} <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function StatsStrip() {
  return (
    <ScrollReveal>
      <div className="pj-section-tight" style={{ paddingTop: 0 }}>
        <div className="pj-card" style={{ padding: 20, borderColor: 'var(--pj-border-hover)' }}>
          <div className="pj-stats-grid" style={{ gap: 8 }}>
            {[
              { value: '200+', label: 'Individuals' },
              { value: '11', label: 'Categories' },
              { value: '4.8', label: 'Avg Rating' },
              { value: '100%', label: 'Verified' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 8 }}>
                <div className="pj-mono" style={{ fontSize: 'var(--pj-size-h3)', fontWeight: 800, color: 'var(--pj-text)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function BottomCTA() {
  const [, navigate] = useLocation();

  return (
    <div className="pj-section" style={{ textAlign: 'center' }}>
      <ScrollReveal>
        <h2 style={{ fontSize: 'var(--pj-size-h2)', fontWeight: 800, color: 'var(--pj-text)', marginBottom: 8, letterSpacing: '-0.01em' }}>
          Offer your skills on PJAZZA
        </h2>
        <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)', marginBottom: 24, lineHeight: 1.6 }}>
          Whether you're a plumber, lawyer, yoga teacher, or photographer —
          <br />
          go live and reach all of Malta instantly.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 440, margin: '0 auto' }}>
          <button className="pj-btn-primary" style={{ minWidth: 180, padding: '18px 24px', fontSize: 16 }} onClick={() => navigate('/pjazza/business/onboard')} data-testid="button-list-yourself">
            <span>List Yourself</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
          <button className="pj-btn-secondary" style={{ minWidth: 160, padding: '16px 24px' }} onClick={() => navigate('/pjazza/how-it-works')} data-testid="button-learn-how">
            How It Works
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function People() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = people.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const liveCount = filtered.filter(p => p.liveNow).length;

  return (
    <div className="pj-safe-bottom" style={{ minHeight: '100vh', background: 'var(--pj-black)' }}>
      <TopBar />
      <PageHero />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryFilters active={activeCategory} onChange={setActiveCategory} />

      <div className="pj-section-tight" style={{ paddingBottom: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)' }}>
            <span className="pj-mono" style={{ fontWeight: 700, color: 'var(--pj-text-secondary)' }}>{filtered.length}</span> {filtered.length === 1 ? 'person' : 'people'} found
          </span>
          {liveCount > 0 && (
            <span style={{ fontSize: 'var(--pj-size-micro)', color: 'var(--pj-text-tertiary)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span className="pj-live-dot" />
              <span className="pj-mono" style={{ fontWeight: 700, color: 'var(--pj-red)' }}>{liveCount}</span> live now
            </span>
          )}
        </div>
      </div>

      <div className="pj-section" style={{ paddingTop: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.length > 0 ? (
            filtered.map((person, i) => (
              <PersonCard key={`${person.name}-${i}`} person={person} index={i} />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <Search size={32} strokeWidth={1.5} style={{ color: 'var(--pj-text-tertiary)', marginBottom: 12 }} />
              <p style={{ fontSize: 'var(--pj-size-body)', fontWeight: 600, color: 'var(--pj-text-secondary)', marginBottom: 4 }}>
                No results found
              </p>
              <p style={{ fontSize: 'var(--pj-size-small)', color: 'var(--pj-text-tertiary)' }}>
                Try a different search or category
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="pj-divider" />
      <StatsStrip />
      <div className="pj-divider" />
      <BottomCTA />
      <div style={{ height: 32 }} />
      <BottomNav />
    </div>
  );
}
