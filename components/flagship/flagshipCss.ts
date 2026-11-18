// Shared look for the flagship service pages (SEO, branding, websites, AI systems).
// Same family as the offer page: white, black, Instrument Serif, lots of space.
// Everything is scoped under `.fs`. Each page sets its own accent with `--acc` / `--acc-soft`.
export const FLAGSHIP_CSS = `
.fs{--bg:#fff;--paper:#F4F3EE;--ink:#0B0B0B;--ink2:#34332F;--mute:#5F5E59;--line:rgba(11,11,11,.13);--k:#0B0B0B;--kt:#F5F4EF;--kmute:rgba(245,244,239,.72);--kline:rgba(245,244,239,.18);--y:#F9FF84;--acc:#2440F0;--acc-soft:#D6E0FF;--se:"Instrument Serif",Georgia,"Times New Roman",serif;--ui:"Instrument Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;--ease:cubic-bezier(.2,.75,.15,1);--gut:clamp(20px,4vw,56px);background:var(--bg);color:var(--ink);font:400 17px/1.55 var(--ui);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:clip}
.fs *,.fs *::before,.fs *::after{box-sizing:border-box}
.fs h1,.fs h2,.fs h3,.fs p,.fs ul,.fs ol,.fs figure{margin:0}
.fs ul,.fs ol{padding:0;list-style:none}
.fs a{color:inherit}
.fs button{font:inherit;color:inherit}
.fs .wrap{max-width:1320px;margin:0 auto;padding:0 var(--gut)}
.fs .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.fs .nw{white-space:nowrap}

/* reveal: only elements the script marks as waiting are hidden, so nothing is lost without JS */
.fs .rv-wait{opacity:0;transform:translateY(22px)}
.fs .rv-in{opacity:1;transform:none;transition:opacity .7s var(--ease),transform .7s var(--ease)}

/* buttons */
.fs .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:54px;padding:0 26px;border:0;border-radius:999px;font:600 16.5px/1 var(--ui);letter-spacing:-.005em;text-decoration:none;cursor:pointer;white-space:nowrap;transition:transform .25s var(--ease),background .2s,box-shadow .2s}
.fs .btn svg{width:18px;height:18px;flex:none}
.fs .btn:hover{transform:translateY(-2px)}
.fs .btn-y{background:var(--y);color:#0B0B0B}
.fs .btn-y:hover{background:#F2F970}
.fs .btn-k{background:var(--ink);color:#fff}
.fs .btn-k:hover{background:#26251f}
.fs .btn-w{background:#fff;color:#0B0B0B}
.fs .btn-a{background:var(--acc);color:#fff}
.fs .btn-o{background:transparent;color:inherit;box-shadow:inset 0 0 0 1.5px currentColor}
.fs .btn:focus-visible,.fs a:focus-visible,.fs summary:focus-visible,.fs input:focus-visible{outline:3px solid var(--acc);outline-offset:3px}
.fs .txt{font-weight:600;text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1.5px}
.fs .txt:hover{color:var(--acc)}

/* section furniture */
.fs .sec{padding:clamp(76px,9.5vw,148px) 0}
.fs .paper{background:var(--paper)}
.fs .dark{background:var(--k);color:var(--kt)}
.fs .lab{display:flex;align-items:center;gap:14px;font:600 12px/1 var(--ui);letter-spacing:.16em;text-transform:uppercase;color:var(--mute)}
.fs .lab b{color:var(--ink);font-weight:700}
.fs .lab::after{content:"";flex:1;height:1px;background:var(--line)}
.fs .dark .lab{color:var(--kmute)}
.fs .dark .lab b{color:var(--kt)}
.fs .dark .lab::after{background:var(--kline)}
.fs .shead{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:clamp(24px,4vw,72px);align-items:end;margin-top:clamp(28px,3.4vw,44px)}
.fs .h2{font:400 clamp(42px,5.7vw,86px)/.99 var(--se);letter-spacing:-.022em}
.fs .h2{text-wrap:balance}
.fs .h2 i{font-style:italic;display:block}
.fs .h2.il i{display:inline}
.fs .lead{font-size:clamp(17.5px,1.4vw,20px);line-height:1.5;color:var(--ink2);max-width:54ch}
.fs .dark .lead{color:var(--kmute)}
.fs .mk{font-style:italic;padding:0 .07em;margin:0 .02em;background:linear-gradient(transparent 60%,var(--acc-soft) 60%,var(--acc-soft) 93%,transparent 93%)}

/* hero */
.fs .hero{padding:clamp(112px,13vh,160px) 0 clamp(48px,6vw,84px);text-align:center}
.fs .crumb{display:flex;justify-content:center;gap:8px;font-size:14px;color:var(--mute)}
.fs .crumb a{text-decoration:none}
.fs .crumb a:hover{text-decoration:underline}
.fs .crumb [aria-current]{color:var(--ink)}
.fs .kick{display:block;font:500 16px/1 var(--ui);color:var(--mute)}
.fs .big{display:block;margin-top:22px;font:400 clamp(46px,7.3vw,112px)/.97 var(--se);letter-spacing:-.026em;text-wrap:balance}
.fs .hsub{margin:24px auto 0;max-width:40ch;font-size:clamp(17.5px,1.45vw,21px);line-height:1.45;color:var(--ink2)}
.fs .hgrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(18px,2.2vw,28px);align-items:stretch;margin-top:clamp(36px,4.4vw,60px);text-align:left}

/* the free-blueprint card: the one black box with the yellow button */
.fs .ocard{position:relative;display:flex;flex-direction:column;padding:clamp(26px,3.2vw,44px);border-radius:28px;background:var(--k);color:var(--kt);box-shadow:0 50px 100px -55px rgba(11,11,11,.7)}
.fs .otop{display:flex;flex-wrap:wrap;gap:8px 18px;font:700 13px/1 var(--ui);letter-spacing:.15em;text-transform:uppercase}
.fs .otag{display:inline-flex;align-items:center;gap:9px;white-space:nowrap}
.fs .otag::before{content:"";width:9px;height:9px;border-radius:50%;background:var(--y);box-shadow:0 0 0 4px rgba(249,255,132,.22)}
.fs .olim{color:var(--kmute);white-space:nowrap}
.fs .ocard>.otop{margin-top:0;font-size:13px;color:var(--kt)}
.fs .ocard h2,.fs .ocard h3{margin-top:22px;font:400 clamp(34px,3.5vw,52px)/1 var(--se);letter-spacing:-.015em}
.fs .ocard>p{margin-top:14px;font-size:16.5px;line-height:1.5;color:var(--kmute);max-width:44ch}
.fs .wa{display:flex;gap:8px;margin-top:auto;padding-top:26px}
.fs .wa input{flex:1;min-width:0;height:56px;padding:0 22px;border:0;border-radius:999px;background:#fff;color:#0B0B0B;font:500 16.5px/1 var(--ui)}
.fs .wa input::placeholder{color:#6f6e69}
.fs .wa.bad input{box-shadow:0 0 0 3px #FF4B4B}
.fs .onote{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:16px;font-size:14.5px;color:var(--kmute)}
.fs .onote a{color:var(--kt)}

/* four small screens: search, map, AI chat, voice */
.fs .screens{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(10px,1.2vw,16px)}
.fs .scr{display:flex;flex-direction:column;gap:10px;padding:18px;border-radius:22px;background:var(--paper);box-shadow:inset 0 0 0 1px var(--line);min-height:190px}
.fs .scr>b{font:700 11px/1 var(--ui);letter-spacing:.15em;text-transform:uppercase;color:var(--mute)}
.fs .q{display:flex;align-items:center;gap:8px;padding:9px 13px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px var(--line);font-size:13.5px;line-height:1.25;color:var(--ink2)}
.fs .q svg{width:14px;height:14px;flex:none;color:var(--mute)}
.fs .row{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:12px;font-size:13.5px;line-height:1.25;color:var(--mute)}
.fs .row i{flex:none;width:20px;height:20px;border-radius:50%;background:rgba(11,11,11,.08);font:700 11px/20px var(--ui);font-style:normal;text-align:center;color:var(--ink2)}
.fs .row.you{background:var(--acc);color:#fff;font-weight:600;animation:fs-pop 3.6s var(--ease) infinite}
.fs .row.you i{background:#fff;color:var(--acc)}
.fs .bub{align-self:flex-end;max-width:92%;padding:9px 13px;border-radius:16px 16px 4px 16px;background:#fff;box-shadow:inset 0 0 0 1px var(--line);font-size:13.5px;line-height:1.3;color:var(--ink2)}
.fs .bub.ai{align-self:flex-start;border-radius:16px 16px 16px 4px;background:var(--ink);color:#fff;box-shadow:none}
.fs .bub.ai u{text-decoration:none;font-weight:700;color:var(--y)}
.fs .wave{display:flex;align-items:center;gap:4px;height:34px;margin-top:2px}
.fs .wave span{width:4px;border-radius:2px;background:var(--acc);animation:fs-wave 1.2s ease-in-out infinite}
.fs .wave span:nth-child(2n){animation-delay:.15s}.fs .wave span:nth-child(3n){animation-delay:.3s}.fs .wave span:nth-child(5n){animation-delay:.45s}
@keyframes fs-wave{0%,100%{height:20%}50%{height:100%}}
@keyframes fs-pop{0%,70%,100%{transform:none}80%{transform:scale(1.03)}}

/* moving bar */
.fs .band{overflow:hidden;background:var(--k);color:var(--kt);padding:17px 0}
.fs .brun{display:flex;width:max-content;animation:fs-band 70s linear infinite}
.fs .bset{display:flex;align-items:center;flex:none}
.fs .bset span{padding:0 22px;font:500 15.5px/1 var(--ui);white-space:nowrap}
.fs .bset span::after{content:"";display:inline-block;width:5px;height:5px;margin-left:44px;border-radius:50%;background:var(--y);vertical-align:middle}
.fs .bset em{padding:0 22px;font:italic 400 21px/1 var(--se);color:var(--y);white-space:nowrap}
@keyframes fs-band{to{transform:translateX(-50%)}}

/* card grids */
.fs .grid{display:grid;gap:clamp(12px,1.4vw,18px);margin-top:clamp(40px,4.6vw,64px)}
.fs .g4{grid-template-columns:repeat(4,minmax(0,1fr))}
.fs .g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.fs .g2{grid-template-columns:repeat(2,minmax(0,1fr))}
.fs .card{display:flex;flex-direction:column;padding:clamp(22px,2.2vw,30px);border-radius:24px;background:#fff;box-shadow:inset 0 0 0 1px var(--line)}
.fs .paper .card{box-shadow:none}
.fs .card .n{font:400 44px/1 var(--se);color:var(--acc)}
.fs .card h3{margin-top:16px;font:400 clamp(26px,2.1vw,32px)/1.05 var(--se);letter-spacing:-.01em}
.fs .card p{margin-top:10px;font-size:15.5px;line-height:1.5;color:var(--ink2)}
.fs .card .we{margin-top:auto;padding-top:16px;font-size:15.5px;line-height:1.45;color:var(--ink);font-weight:600}
.fs .card .we::before{content:"";display:block;width:26px;height:2px;margin-bottom:12px;background:var(--acc)}
.fs .card.cta{background:var(--acc);color:#fff;box-shadow:none;justify-content:space-between;gap:22px}
.fs .card.cta h3{margin-top:0}
.fs .card.cta p{color:#fff}
.fs .card.cta.wide{grid-column:span 2}

/* the four words */
.fs .term abbr{display:block;font:400 clamp(54px,5.2vw,82px)/.9 var(--se);letter-spacing:-.02em;text-decoration:none}
.fs .term .full{margin-top:12px;font:700 13px/1.3 var(--ui);letter-spacing:.13em;text-transform:uppercase;color:var(--mute)}
.fs .term p{font-size:17px;color:var(--ink)}
.fs .after{margin-top:clamp(28px,3vw,40px);font:400 clamp(26px,2.6vw,38px)/1.15 var(--se);letter-spacing:-.01em;max-width:28ch}

/* pains */
.fs .pain h3{margin-top:0;font-size:clamp(27px,2.3vw,34px)}
.fs .fix{display:inline-flex;align-self:flex-start;margin-top:auto;padding:9px 16px;border-radius:999px;background:var(--acc-soft);font:600 15px/1.25 var(--ui);color:#0B0B0B}
.fs .pain p{margin-bottom:22px}

/* numbered steps */
.fs .steps{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(28px,4vw,72px);margin-top:clamp(40px,4.6vw,64px);counter-reset:s}
.fs .steps li{display:grid;grid-template-columns:auto minmax(0,1fr);gap:22px;padding:26px 0;border-top:1px solid var(--line);counter-increment:s}
.fs .steps li::before{content:counter(s);font:400 54px/.9 var(--se);color:var(--acc);min-width:36px}
.fs .steps h3{font:400 clamp(26px,2.2vw,32px)/1.08 var(--se);letter-spacing:-.01em}
.fs .steps p{margin-top:8px;font-size:16px;color:var(--ink2)}

/* chips */
.fs .chgroups{display:grid;gap:0;margin-top:clamp(40px,4.6vw,64px)}
.fs .chg{display:grid;grid-template-columns:minmax(0,220px) minmax(0,1fr);gap:16px 28px;padding:22px 0;border-top:1px solid var(--line)}
.fs .chg h3{font:400 26px/1.1 var(--se)}
.fs .chips{display:flex;flex-wrap:wrap;gap:8px}
.fs .chips li{padding:9px 16px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px var(--line);font:500 15px/1.2 var(--ui);color:var(--ink)}
.fs .paper .chips li{box-shadow:none}
.fs .chips li.on{background:var(--ink);color:#fff}
.fs .chips.big{margin-top:clamp(36px,4vw,56px);gap:10px}
.fs .chips.big li{padding:13px 20px;font-size:16.5px}

/* why us (dark) */
.fs .why{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 clamp(24px,3vw,48px);margin-top:clamp(40px,4.6vw,64px)}
.fs .why li{padding:24px 0;border-top:1px solid var(--kline)}
.fs .why h3{font:400 clamp(25px,2.1vw,31px)/1.08 var(--se)}
.fs .why p{margin-top:8px;font-size:16px;color:var(--kmute)}
.fs .stat{display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(18px,3vw,44px);align-items:center;margin-top:clamp(40px,5vw,72px);padding:clamp(24px,3vw,40px);border-radius:26px;background:rgba(245,244,239,.07)}
.fs .stat b{font:400 clamp(72px,9vw,140px)/.85 var(--se);letter-spacing:-.03em;color:var(--y)}
.fs .stat p{font-size:clamp(17px,1.5vw,21px);line-height:1.4;max-width:40ch}
.fs .stat small{display:block;margin-top:10px;font-size:14px;color:var(--kmute)}

/* the package */
.fs .pack{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.25fr);gap:clamp(24px,4vw,64px);margin-top:clamp(40px,4.6vw,64px);padding:clamp(28px,4vw,60px);border-radius:32px;background:var(--acc);color:#fff;box-shadow:0 60px 120px -60px color-mix(in srgb,var(--acc) 70%,transparent)}
.fs .pack .otag::before{background:#fff;box-shadow:0 0 0 4px rgba(255,255,255,.25)}
.fs .pack h3{margin-top:20px;font:400 clamp(40px,4.4vw,66px)/.98 var(--se);letter-spacing:-.02em}
.fs .pack .pp{margin-top:16px;font-size:17px;line-height:1.5;max-width:36ch}
.fs .pbtns{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.fs .chk{columns:2;column-gap:28px}
.fs .chk li{display:flex;gap:12px;padding:12px 0;border-top:1px solid rgba(255,255,255,.28);font-size:16px;line-height:1.35;break-inside:avoid}
.fs .chk li::before{content:"";flex:none;width:18px;height:18px;margin-top:2px;border-radius:50%;background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B0B0B' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E") center/12px no-repeat}
.fs .under{margin-top:22px;font-size:16.5px;color:var(--ink2);max-width:70ch}

/* how it starts */
.fs .tl{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,1.4vw,18px);margin-top:clamp(40px,4.6vw,64px)}
.fs .tl li{padding:24px;border-radius:24px;background:#fff}
.fs .tl .when{font:700 12px/1 var(--ui);letter-spacing:.15em;text-transform:uppercase;color:var(--acc)}
.fs .tl h3{margin-top:14px;font:400 28px/1.06 var(--se)}
.fs .tl p{margin-top:8px;font-size:15.5px;color:var(--ink2)}

/* FAQ */
.fs .faq{margin-top:clamp(36px,4vw,56px);border-bottom:1px solid var(--line)}
.fs .faq details{border-top:1px solid var(--line)}
.fs .faq summary{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px 0;font:400 clamp(23px,2.1vw,30px)/1.15 var(--se);letter-spacing:-.005em;cursor:pointer;list-style:none}
.fs .faq summary::-webkit-details-marker{display:none}
.fs .faq summary::after{content:"";flex:none;width:34px;height:34px;border-radius:50%;background:var(--paper) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B0B0B' stroke-width='2.2' stroke-linecap='round'%3E%3Cpath d='M12 6v12M6 12h12'/%3E%3C/svg%3E") center/16px no-repeat;transition:transform .3s var(--ease)}
.fs .faq details[open] summary::after{transform:rotate(45deg)}
.fs .faq p{padding:0 0 26px;max-width:68ch;font-size:17px;color:var(--ink2)}

/* close */
.fs .fin{padding:clamp(84px,10vw,150px) 0;text-align:center}
.fs .fin .h2{font-size:clamp(46px,7vw,108px)}
.fs .fin .wa{max-width:560px;margin:clamp(30px,3.6vw,46px) auto 0;padding-top:0}
.fs .fin .onote{justify-content:center}
.fs .home{margin:clamp(40px,5vw,64px) auto 0;max-width:56ch;font-size:16.5px;color:var(--kmute)}
.fs .home a{color:var(--kt)}

@media (max-width:1100px){
  .fs .shead{grid-template-columns:minmax(0,1fr);align-items:start}
  .fs .hgrid,.fs .pack{grid-template-columns:minmax(0,1fr)}
  .fs .g4,.fs .tl{grid-template-columns:repeat(2,minmax(0,1fr))}
  .fs .g3,.fs .why{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:720px){
  .fs{font-size:16.5px}
  .fs .g4,.fs .g3,.fs .g2,.fs .tl,.fs .why,.fs .steps{grid-template-columns:minmax(0,1fr)}
  .fs .card.cta.wide{grid-column:auto}
  .fs .chg{grid-template-columns:minmax(0,1fr);gap:12px}
  .fs .chk{columns:1}
  .fs .stat{grid-template-columns:minmax(0,1fr)}
  .fs .scr{min-height:0;padding:14px}
  .fs .steps li::before{font-size:44px;min-width:28px}
  .fs .steps li{gap:16px}
  .fs .pbtns .btn{flex:1 1 100%}
}
@media (max-width:520px){
  .fs .wa{flex-direction:column}
  .fs .wa input{flex:none;width:100%}
  .fs .wa .btn{width:100%}
  .fs .screens{grid-template-columns:minmax(0,1fr)}
  .fs .scr.s-hide{display:none}
  .fs .btn{white-space:normal;text-align:center;line-height:1.15;padding:14px 22px}
}
@media (prefers-reduced-motion:reduce){
  .fs .brun,.fs .wave span,.fs .row.you{animation:none}
  .fs .rv-wait{opacity:1;transform:none}
}

/* definition cards: a family of terms with one plain line each */
.fs .fam{font:700 12.5px/1 var(--ui);letter-spacing:.15em;text-transform:uppercase;color:var(--mute)}
.fs .defs{margin:14px 0 0}
.fs .defs div{padding:12px 0;border-top:1px solid var(--line)}
.fs .defs dt{font:600 16.5px/1.3 var(--ui);color:var(--ink)}
.fs .defs dd{margin:3px 0 0;font-size:15.5px;line-height:1.45;color:var(--ink2)}
.fs .card .src{margin-top:auto;padding-top:16px;font-size:14px;line-height:1.4;color:var(--mute)}

/* small mock tiles in the hero */
.fs .wm{margin-top:auto;font:italic 400 clamp(34px,3.4vw,50px)/1 var(--se);letter-spacing:-.01em}
.fs .aa{margin-top:auto;font:400 clamp(72px,7vw,104px)/.85 var(--se)}
.fs .say{margin-top:auto;font:400 clamp(24px,2.3vw,32px)/1.1 var(--se)}
.fs .sw{display:flex;gap:8px;margin-top:auto}
.fs .sw i{flex:1;height:64px;border-radius:14px}
.fs .bars{display:flex;align-items:flex-end;gap:6px;height:74px;margin-top:auto}
.fs .bars i{flex:1;border-radius:6px 6px 0 0;background:rgba(11,11,11,.14)}
.fs .bars i.on{background:var(--acc)}
.fs .kv{display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding:8px 0;border-top:1px solid var(--line);font-size:13.5px;color:var(--ink2)}
.fs .kv b{font:400 26px/1 var(--se);color:var(--ink)}
.fs .scr .ok{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;padding:6px 11px;border-radius:999px;background:var(--acc);color:#fff;font:600 12.5px/1 var(--ui)}

/* the road: eight short steps */
.fs .path{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 clamp(18px,2.4vw,36px);margin-top:clamp(40px,4.6vw,64px)}
.fs .path li{padding:22px 0 26px;border-top:1px solid var(--line)}
.fs .path .n{font:400 40px/1 var(--se);color:var(--mute)}
.fs .path h3{margin-top:10px;font:400 clamp(28px,2.5vw,36px)/1.02 var(--se);letter-spacing:-.01em}
.fs .path p{margin-top:6px;font-size:16px;color:var(--ink2)}

/* fact check */
.fs .myths{margin-top:clamp(36px,4vw,56px);border-bottom:1px solid var(--line)}
.fs .myths li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:center;padding:22px 0;border-top:1px solid var(--line)}
.fs .myths q{font:italic 400 clamp(24px,2.3vw,32px)/1.15 var(--se);quotes:"\\201C" "\\201D"}
.fs .myths small{display:block;margin-top:6px;font-size:16.5px;line-height:1.45;color:var(--ink2)}
.fs .st{padding:9px 12px;border-radius:8px;font:700 12.5px/1 var(--ui);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
.fs .st.t{background:var(--y);color:#0B0B0B}
.fs .st.f{background:var(--ink);color:#fff}
.fs .st.h{box-shadow:inset 0 0 0 1.5px var(--ink);color:var(--ink)}

/* red flags inside the dark stat box */
.fs .flags ul{margin-top:12px;display:grid;gap:8px}
.fs .flags li{display:flex;gap:10px;font-size:16.5px;line-height:1.4;color:var(--kt)}
.fs .flags li::before{content:"";flex:none;width:8px;height:8px;margin-top:.5em;border-radius:50%;background:#FF4B4B}

/* yellow package */
.fs .pack.y{background:var(--y);color:#0B0B0B;box-shadow:none}
.fs .pack.y .otag::before{background:#0B0B0B;box-shadow:0 0 0 4px rgba(11,11,11,.14)}
.fs .pack.y .chk li{border-top-color:rgba(11,11,11,.22)}
.fs .pack.y .chk li::before{background-color:#0B0B0B;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F9FF84' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E")}
/* black package */
.fs .pack.k{background:var(--k);color:var(--kt);box-shadow:0 60px 120px -60px rgba(11,11,11,.7)}
.fs .pack.k .otag::before{background:var(--y);box-shadow:0 0 0 4px rgba(249,255,132,.22)}
.fs .pack.k .chk li{border-top-color:var(--kline)}

/* end credits */
.fs .credits{max-width:780px;margin:0 auto;padding:clamp(34px,4.4vw,60px) clamp(20px,3vw,48px);border-radius:28px;background:rgba(245,244,239,.06);text-align:center}
.fs .star{font:700 12.5px/1 var(--ui);letter-spacing:.22em;text-transform:uppercase;color:var(--kmute)}
.fs .credits .star-name{display:block;margin-top:12px;font:italic 400 clamp(84px,10vw,140px)/.9 var(--se);color:var(--y)}
.fs .crew{display:grid;gap:11px;margin:30px 0 0;font-size:17px}
.fs .crew div{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px}
.fs .crew dt{text-align:right;color:var(--kmute)}
.fs .crew dd{margin:0;text-align:left;font-weight:700;letter-spacing:.1em}

/* two lists side by side: right for you / not for you, and term tables */
.fs .two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(12px,1.4vw,18px);margin-top:clamp(40px,4.6vw,64px)}
.fs .terms{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(24px,3vw,48px);margin-top:clamp(36px,4vw,56px)}
.fs .terms div{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:16px;padding:15px 0;border-top:1px solid var(--line)}
.fs .terms dt{font:600 16.5px/1.3 var(--ui)}
.fs .terms dd{margin:0;font-size:16px;line-height:1.4;color:var(--ink2)}
.fs .dark .terms div{border-top-color:var(--kline)}
.fs .dark .terms dd{color:var(--kmute)}

@media (max-width:1100px){
  .fs .path{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:720px){
  .fs .two,.fs .terms{grid-template-columns:minmax(0,1fr)}
  .fs .myths li{grid-template-columns:minmax(0,1fr);gap:12px}
  .fs .st{justify-self:start}
  .fs .crew{font-size:15.5px}
  .fs .crew div{gap:14px}
}

/* a small turning cube for "3D" */
.fs .cube{position:relative;width:74px;height:74px;margin:auto;transform-style:preserve-3d;animation:fs-spin 14s linear infinite}
.fs .cube i{position:absolute;inset:0;border:2px solid var(--ink);background:rgba(11,11,11,.04)}
.fs .cube i:nth-child(1){transform:translateZ(37px)}
.fs .cube i:nth-child(2){transform:rotateY(180deg) translateZ(37px)}
.fs .cube i:nth-child(3){transform:rotateY(90deg) translateZ(37px);background:var(--acc-soft)}
.fs .cube i:nth-child(4){transform:rotateY(-90deg) translateZ(37px)}
.fs .cube i:nth-child(5){transform:rotateX(90deg) translateZ(37px);background:var(--y)}
.fs .cube i:nth-child(6){transform:rotateX(-90deg) translateZ(37px)}
@keyframes fs-spin{from{transform:rotateX(-22deg) rotateY(0)}to{transform:rotateX(-22deg) rotateY(360deg)}}
@media (prefers-reduced-motion:reduce){.fs .cube{animation:none;transform:rotateX(-22deg) rotateY(35deg)}}

/* dark hero (the AI systems page) */
.fs .hero.dark{background:var(--k);color:var(--kt)}
.fs .hero.dark .kick,.fs .hero.dark .hsub{color:var(--kmute)}
.fs .hero.dark .mk{background:none;color:var(--y)}
.fs .hero.dark .ocard{background:#fff;color:var(--ink);box-shadow:none}
.fs .hero.dark .ocard>p{color:var(--ink2)}
.fs .hero.dark .ocard>.otop{color:var(--ink)}
.fs .hero.dark .olim,.fs .hero.dark .onote{color:var(--mute)}
.fs .hero.dark .onote a{color:var(--ink)}
.fs .hero.dark .otag::before{background:var(--acc);box-shadow:0 0 0 4px var(--acc-soft)}
.fs .hero.dark .wa input{background:var(--paper)}
.fs .hero.dark .scr{background:rgba(245,244,239,.07);box-shadow:inset 0 0 0 1px var(--kline)}
.fs .hero.dark .scr>b{color:var(--kmute)}
.fs .hero.dark .row{color:var(--kmute)}
.fs .hero.dark .row i{background:rgba(245,244,239,.14);color:var(--kt)}
.fs .hero.dark .row.you{color:#fff}
.fs .hero.dark .bub{background:rgba(245,244,239,.12);color:var(--kt);box-shadow:none}
.fs .hero.dark .bub.ai{background:var(--acc);color:#fff}
.fs .hero.dark .kv{border-top-color:var(--kline);color:var(--kmute)}
.fs .hero.dark .kv b{color:var(--kt)}
.fs .band.lt{background:var(--paper);color:var(--ink)}
.fs .band.lt .bset em{color:var(--acc)}
.fs .band.lt .bset span::after{background:var(--acc)}

/* industry cards that are links */
.fs a.card{text-decoration:none;transition:transform .3s var(--ease),box-shadow .3s}
.fs a.card:hover{transform:translateY(-4px);box-shadow:inset 0 0 0 1.5px var(--ink)}
.fs .card.ind h2{font:400 clamp(26px,2.1vw,32px)/1.05 var(--se);letter-spacing:-.01em}
.fs .card .go{display:inline-flex;align-items:center;gap:8px;margin-top:16px;font:600 15px/1 var(--ui);color:var(--acc)}
.fs .card .go svg{width:16px;height:16px}

`;
