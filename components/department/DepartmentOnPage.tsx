"use client";

import Link from "next/link";
import {
  DEPARTMENT_BG,
  DEPARTMENT_IS_LIGHT,
  DEPARTMENT_STYLES,
  DepartmentContent,
} from "@/components/DepartmentDetailModal";

/**
 * The owner's department pop-up content, shown as a normal page section.
 * Styles are written into the HTML so the page never flashes unstyled, and the
 * content is server-rendered, so search engines read the full text.
 */
/**
 * The pop-up worlds were drawn for a small phone sheet: labels as small as 10px and text at
 * 30-46% opacity. On a page that is unreadable, so lift every small size and every faint
 * text colour. One rule for all departments; the pop-up itself is untouched.
 */
function readable(css: string): string {
  return css
    .replace(/([\s>+~,}])h1(?=[\s{,:.>+~\[])/g, "$1:is(h1,.as-h1)")
    .replace(/font-size:\s*(\d+(?:\.\d+)?)px/g, (m, n) => {
      const v = parseFloat(n);
      return v < 12 ? "font-size:13.5px" : v < 15 ? "font-size:15px" : m;
    })
    .replace(/font-size:\s*(\.\d+|0\.\d+)rem/g, (m, n) => (parseFloat(n) < 1 ? "font-size:1.02rem" : m))
    .replace(/((?:--[\w-]+|[^-\w]color)\s*:\s*rgba\(\s*)(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0?\.\d+)\s*\)/g, (m, head, r, g, b, alpha) => {
      const v = parseFloat(alpha);
      const [R, G, B] = [+r, +g, +b];
      // Only neutral inks and whites carry text; tinted colours are glows and fills.
      const neutral = Math.max(R, G, B) - Math.min(R, G, B) <= 30;
      return neutral && v >= 0.26 && v < 0.9 ? `${head}${R},${G},${B},.92)` : m;
    });
}

export default function DepartmentOnPage({ dept, crumb }: { dept: string; crumb: string }) {
  const styles = DEPARTMENT_STYLES[dept] ?? [];
  const light = DEPARTMENT_IS_LIGHT(dept);
  return (
    <div style={{ background: DEPARTMENT_BG[dept] ?? "#0E0E0E" }}>
      {styles.map((s) => (
        <style key={s.id} id={s.id} dangerouslySetInnerHTML={{ __html: readable(s.css) }} />
      ))}
      {/* In the pop-up each world is its own scroll box; on a page the page scrolls. */}
      <style>{`.dept-page-body>*{height:auto!important;max-height:none!important;overflow-x:clip!important;overflow-y:visible!important}`}</style>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto px-5 pb-2 pt-28 text-base md:pt-32"
        style={{ maxWidth: 860, color: light ? "rgba(14,14,14,.8)" : "rgba(245,243,238,.85)", fontFamily: "var(--font-inter-tight), sans-serif" }}
      >
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{crumb}</span>
      </nav>
      <div className="dept-page-body" style={{ maxWidth: 860, margin: "0 auto" }}>
        <DepartmentContent dept={dept} onClose={() => {}} />
      </div>
    </div>
  );
}
