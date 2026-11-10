"use client";

import {
  DEPARTMENT_BG,
  DEPARTMENT_STYLES,
  DepartmentContent,
} from "@/components/DepartmentDetailModal";

/**
 * The owner's department pop-up content, shown as a normal page section.
 * Styles are written into the HTML so the page never flashes unstyled, and the
 * content is server-rendered, so search engines read the full text.
 */
export default function DepartmentOnPage({ dept }: { dept: string }) {
  const styles = DEPARTMENT_STYLES[dept] ?? [];
  return (
    <div style={{ background: DEPARTMENT_BG[dept] ?? "#0E0E0E" }}>
      {styles.map((s) => (
        <style key={s.id} id={s.id} dangerouslySetInnerHTML={{ __html: s.css }} />
      ))}
      {/* In the pop-up each world is its own scroll box; on a page the page scrolls. */}
      <style>{`.dept-page-body>*{height:auto!important;max-height:none!important;overflow-x:clip!important;overflow-y:visible!important}`}</style>
      <div className="dept-page-body" style={{ maxWidth: 960, margin: "0 auto" }}>
        <DepartmentContent dept={dept} onClose={() => {}} />
      </div>
    </div>
  );
}
