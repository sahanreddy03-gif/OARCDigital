import { Phone } from "lucide-react";
import type { ChatVisual, RowsVisual, TimelineVisual } from "@/lib/ai-systems/types";
import s from "./ai-system.module.css";

/* The three "screen" visuals: a chat, a list of rows, a timeline.
   Shared by the hero demo (client) and the feature sections (server). */
export function SpotVisual({ visual: v }: { visual: ChatVisual | RowsVisual | TimelineVisual }) {
  if (v.type === "chat") {
    return (
      <div className={s.chat}>
        <div className={s.chead}><i>{v.initials}</i><div>{v.name}<small>{v.origin}</small></div><span className={s.ch}>{v.status}</span></div>
        {v.messages.map((m, i) => (
          <div key={i} className={`${s.msg} ${m.from === "in" ? s.msgIn : s.msgOut}`}>{m.text}<small>{m.time}</small></div>
        ))}
        {v.slots && <div className={s.slot}>{v.slots.map((x) => <span key={x}>{x}</span>)}</div>}
        <div className={s.done}><span>{v.done.before}<b>{v.done.strong}</b>{v.done.after}</span></div>
      </div>
    );
  }
  if (v.type === "rows") {
    return (
      <div className={s.clist}>
        <h4>{v.title} <small>{v.hint}</small></h4>
        {v.rows.map((r) => (
          <div className={s.crow} key={r.title}>
            <span className={`${s.score} ${r.top ? s.scoreTop : ""}`}>{r.badge}</span>
            <div><b>{r.title}</b><span>{r.detail}</span></div>
            {v.action === "call"
              ? <span className={s.call}><Phone aria-hidden="true" strokeWidth={1.8} /></span>
              : <span className={`${s.tag} ${r.top ? s.tagOn : ""}`}>{r.tag}</span>}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={s.lt}>
      <h4>{v.title}</h4>
      <p>{v.subtitle}</p>
      {v.steps.map((st) => (
        <div className={`${s.step} ${st.key ? s.stepKey : ""}`} key={st.title}>
          <span className={s.dd}>{st.when}</span><span className={s.pin} />
          <div><b>{st.title}</b><span>{st.detail}</span>{st.tag && <span className={`${s.tag} ${s.tagOn}`}>{st.tag}</span>}</div>
        </div>
      ))}
    </div>
  );
}
