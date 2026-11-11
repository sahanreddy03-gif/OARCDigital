/** OARC Design Reminder — this is an evidence ledger, not a sales page: off-white paper, black type, lime only for active proof signals. */
import { ArrowUpRight, ChevronLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const standards = [
  ["01", "Start with the problem.", "Every project starts with one question: what is costing this business money or time?"],
  ["02", "Say what we did.", "Each page lists the work in plain words. No jargon."],
  ["03", "Show the numbers.", "Each page shows what changed, with numbers from our campaign and client reporting."],
  ["04", "Show the work.", "Photos, videos and screens from the project, so you can see it for yourself."],
  ["05", "Respect private clients.", "Some clients ask us not to publish their name. We respect that, and still show the work and the numbers."],
  ["06", "Keep it current.", "When the results change, we update the page."],
];

export default function Methodology() {
  return <main className="methodology-page"><header className="case-nav-light"><Link href="/our-work" className="oarc-brand light-brand" aria-label="OARC Digital Work"><span className="brand-word"><b>OARC</b><i>DIGITAL</i></span></Link><span className="case-signal">OARC SIGNAL / METHOD</span><Link href="/our-work" className="back-link-light"><ChevronLeft size={16} /> All stories</Link></header><section className="method-hero"><p>HOW WE WORK</p><h1>HOW WE<br />MAKE THE WORK<br /><i>HOLD UP.</i></h1><div><span>OARC / 01—06</span><p>This is how we report our work: the problem, what we did, and what happened.</p></div></section><section className="method-answer"><p>THE DIRECT ANSWER</p><h2>Every OARC case study shows <strong>the problem, what we did, and what happened</strong>—with the numbers.</h2><span>Simple for a person to read. Simple for a search engine to understand.</span></section><section className="method-standards" aria-label="OARC documentation standards">{standards.map(([number, title, copy]) => <article key={number}><b>{number}</b><h2>{title}</h2><p>{copy}</p><span>OARC STANDARD <MoveRight size={14} /></span></article>)}</section><section className="method-close"><p>WANT TO SEE IT?</p><h2>Start with the facts.<br /><i>Then see the work.</i></h2><Link href="/our-work">Explore the collection <ArrowUpRight size={18} /></Link></section><footer className="case-footer-light"><span>OARC DIGITAL / RESEARCH-LED WORK</span><span>© 2026</span></footer></main>;
}
