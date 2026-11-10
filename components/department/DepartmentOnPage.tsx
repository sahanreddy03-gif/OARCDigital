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
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <DepartmentContent dept={dept} onClose={() => {}} />
      </div>
    </div>
  );
}
