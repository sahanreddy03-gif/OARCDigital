import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

const BG = "#052e16";
const ACCENT = "#f97316";
const FG = "#ecfdf5";
const SUB = "#a7f3d0";

function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export async function GET(req: NextRequest): Promise<ImageResponse> {
  const { searchParams } = new URL(req.url);
  const title = clamp(searchParams.get("title") || "OARC Digital", 90);
  const subtitle = clamp(
    searchParams.get("subtitle") ||
      "Malta's first Creative + AI Systems Agency",
    140,
  );
  const eyebrow = clamp(searchParams.get("eyebrow") || "OARC Digital", 60);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `radial-gradient(ellipse at 100% 0%, #14532d 0%, ${BG} 55%, #021509 100%)`,
          color: FG,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 480,
            height: 480,
            background: `radial-gradient(circle, ${ACCENT}33 0%, transparent 70%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: SUB,
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 1.2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: ACCENT,
              display: "flex",
            }}
          />
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 64 : 76,
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: -1.2,
              color: FG,
              maxWidth: 1040,
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: SUB,
              maxWidth: 980,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: SUB,
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: ACCENT,
                color: "#0a0a0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 22,
              }}
            >
              O
            </div>
            <div style={{ fontWeight: 700, color: FG }}>oarcdigital.com</div>
          </div>
          <div style={{ display: "flex" }}>Birkirkara · Malta</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
