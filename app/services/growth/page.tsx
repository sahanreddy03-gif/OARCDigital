import type { Metadata } from "next";
import Link from "next/link";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const TITLE = 'Growth Marketing Malta | More Customers | OARC';
const DESCRIPTION =
  'Growth marketing for Malta owners who want more qualified customers—SEO, paid, creative, and AI follow-up under one team. No slide theatre.';
const CANONICAL = 'https://oarcdigital.com/services/growth';

const FAQS = [
    {
      question: 'What does growth marketing include in Malta?',
      answer: 'OARC growth work typically blends SEO, paid, creative offers, and AI follow-up so more of the right customers enquire and book.',
    },
    {
      question: 'How do you measure growth without vanity metrics?',
      answer: 'Enquiries, booked calls/tables, qualified pipeline—agreed up front. We do not sell likes as success.',
    },
    {
      question: 'Can growth work with AI employees?',
      answer: 'Yes—agents catch and qualify the demand creative and ads create.',
    },
    {
      question: 'Where do restaurants start?',
      answer: 'Usually H360 + this growth spine for offers and local demand.',
    }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "website", siteName: "OARC Digital", images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }) },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path='/services/growth'
        title={TITLE}
        description={DESCRIPTION}
        faqs={FAQS}
      />
      <main style={{ background:"#0E0D0C", color:"#F2EFE9", fontFamily:"var(--font-space-grotesk,'Space Grotesk',sans-serif)", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"3rem 22px" }}>
        <div style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:10, letterSpacing:".26em", textTransform:"uppercase" as const, color:"rgba(242,239,233,.45)", marginBottom:"1.5rem", display:"flex", alignItems:"center", gap:".65rem" }}>
          <span style={{ display:"block", width:24, height:1, background:"#E02B20", flexShrink:0 }} />
          Growth — dept 01
        </div>
        <h1 style={{ fontWeight:700, fontSize:"clamp(2.8rem,12vw,4.6rem)", lineHeight:.94, letterSpacing:"-.035em", maxWidth:"16ch" }}>
          Growth marketing Malta —<br /><span style={{ color:"#E02B20" }}>bring me more customers.</span>
        </h1>
        <p style={{ fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontSize:"11.5px", lineHeight:1.85, color:"rgba(242,239,233,.6)", marginTop:"1.4rem", maxWidth:"38ch" }}>
          Full-funnel growth for Malta businesses — inbound discovery, outbound outreach, trust-building, and the systems that bring customers back.
        </p>
        <Link
          href="/contact"
          style={{ display:"inline-flex", alignItems:"center", gap:".8rem", marginTop:"1.8rem", fontFamily:"var(--font-space-mono,'Space Mono',monospace)", fontWeight:700, fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:"#0E0D0C", background:"#E02B20", textDecoration:"none", padding:"1.05rem 1.5rem", borderRadius:4 }}
        >
          Talk to the growth team
        </Link>
        <section style={{ marginTop:"3.5rem", maxWidth:"720px" }} aria-label="Frequently asked questions">
          <h2 style={{ fontSize:"clamp(1.4rem,4vw,1.9rem)", fontWeight:700, letterSpacing:"-.02em", marginBottom:"1rem" }}>Questions owners ask</h2>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>What does growth marketing include in Malta?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>OARC growth work typically blends SEO, paid, creative offers, and AI follow-up so more of the right customers enquire and book.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>How do you measure growth without vanity metrics?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Enquiries, booked calls/tables, qualified pipeline—agreed up front. We do not sell likes as success.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Can growth work with AI employees?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Yes—agents catch and qualify the demand creative and ads create.</p>
        </details>
        <details style={{borderTop:"1px solid rgba(242,239,233,.12)",padding:"1rem 0"}}>
          <summary style={{cursor:"pointer",fontWeight:600,fontSize:"1.05rem"}}>Where do restaurants start?</summary>
          <p style={{marginTop:".75rem",fontFamily:"var(--font-space-mono,'Space Mono',monospace)",fontSize:"12px",lineHeight:1.75,color:"rgba(242,239,233,.7)",maxWidth:"62ch"}}>Usually H360 + this growth spine for offers and local demand.</p>
        </details>
        </section>
      
        <p style={{marginTop:"2rem",fontSize:"13px",lineHeight:1.75,color:"rgba(242,239,233,.72)",maxWidth:"58ch"}} data-speakable data-testid="dept-entity-sentence">
          OARC Digital is a Birkirkara growth marketing partner for Malta owners who need more qualified customers—SEO, paid, creative, and AI follow-up under one team.
        </p>
        <p style={{marginTop:"2rem",fontSize:"12px",lineHeight:1.7,color:"rgba(242,239,233,.55)",maxWidth:"62ch"}} data-testid="dept-money-links">
          Explore: <a href="/" style={{color:"#F2EFE9"}}>Home</a>
          {" · "}<a href="/creative" style={{color:"#F2EFE9"}}>Creative</a>
          {" · "}<a href="/ai-agents" style={{color:"#F2EFE9"}}>AI agents</a>
          {" · "}<a href="/solutions" style={{color:"#F2EFE9"}}>Solutions</a>
          {" · "}<a href="/voice-ai-worker" style={{color:"#F2EFE9"}}>Voice AI Worker</a>
          {" · "}<a href="/h360" style={{color:"#F2EFE9"}}>H360</a>
        </p>
      </main>
    </>
  );
}
