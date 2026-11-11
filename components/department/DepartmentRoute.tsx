import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import DepartmentOnPage from "./DepartmentOnPage";
import GrowthBody from "./GrowthBody";
import { DeptBottom, DeptIntro, DeptTop } from "./DepartmentSeo";
import { DEPARTMENTS } from "@/lib/departments/data";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

/** Ground per department: AI departments sit on cobalt, the loud ones on ink, the rest on paper. */
const AI = new Set(["AI Staff", "Automation", "Enquiries"]);
const DARK = new Set(["Media", "Social", "Clarity", "Creative", "Products", "Compare"]);
const BG = { ai: "#0035AD", dark: "#0E0E0E", light: "#F5F3EE" } as const;

export function departmentMetadata(key: keyof typeof DEPARTMENTS): Metadata {
  const d = DEPARTMENTS[key];
  const url = `https://oarcdigital.com${d.path}`;
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: url },
    openGraph: {
      title: d.title,
      description: d.description,
      url,
      type: "website",
      siteName: "OARC Digital",
      images: ogImageEntry({ title: d.title, subtitle: d.description }),
    },
    twitter: { card: "summary_large_image", title: d.title, description: d.description },
    other: { "geo.region": "MT", "geo.placename": "Malta" },
  };
}

/**
 * Page shell. Each app/services/<slug>/page.tsx mounts its own RouteSchema and
 * SpeakableJsonLd as children (scripts/validate-schema.ts reads them there).
 */
export default function DepartmentRoute({
  id,
  children,
}: {
  id: keyof typeof DEPARTMENTS;
  children?: React.ReactNode;
}) {
  const d = DEPARTMENTS[id];
  const tone = AI.has(d.dept) ? "ai" : DARK.has(d.dept) ? "dark" : "light";
  return (
    <Layout>
      {children}
      <article>
        {/* Every page opens the same way: ink hero, then plain "what we do / what you get".
            Growth has its own full body; the others show the owner's detailed content below. */}
        <div style={{ background: "#0E0E0E" }}>
          <DeptTop data={d} tone="dark" />
        </div>
        {d.dept === "Growth" ? (
          <GrowthBody />
        ) : (
          <>
            <DeptIntro data={d} />
            <div id="dept-detail" className="scroll-mt-20">
              <DepartmentOnPage dept={d.dept} />
            </div>
          </>
        )}
        <DeptBottom data={d} />
      </article>
    </Layout>
  );
}
