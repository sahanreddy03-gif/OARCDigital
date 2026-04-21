import { NextResponse, type NextRequest } from "next/server";
import {
  KEPT_LOCATIONS,
  KEPT_INDUSTRIES,
  KEPT_LOCATION_SERVICES,
  ALL_SERVICES,
  HARD_410_PATHS,
  SERVICE_ALIASES,
} from "./lib/seo/seoSets";
import {
  ARCHIVED_LOCATION_REDIRECTS,
  INDUSTRY_REDIRECTS,
} from "./lib/seo/redirectMap";

const GONE_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<title>Page removed (410) | OARC Digital</title>
<meta name="robots" content="noindex"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:640px;margin:10vh auto;padding:0 24px;color:#0a0a0a;line-height:1.6}h1{font-size:28px;margin:0 0 12px}a{color:#ff914d}</style>
</head><body>
<h1>This page is no longer available.</h1>
<p>The URL you requested has been permanently removed. You can return to the <a href="https://oarcdigital.com/">OARC Digital homepage</a> or browse our <a href="https://oarcdigital.com/services">services</a>.</p>
</body></html>`;

function gone(): NextResponse {
  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "x-robots-tag": "noindex",
    },
  });
}

function permanentRedirect(req: NextRequest, to: string): NextResponse {
  const url = new URL(to, req.url);
  url.search = req.nextUrl.search;
  return NextResponse.redirect(url, 308);
}

export function middleware(req: NextRequest): NextResponse | undefined {
  const { pathname } = req.nextUrl;

  if (HARD_410_PATHS.has(pathname)) return gone();

  const aliasTo = SERVICE_ALIASES[pathname];
  if (aliasTo) return permanentRedirect(req, aliasTo);

  // /industries/{slug} — redirect archived industry slugs to nearest KEPT.
  if (pathname.startsWith("/industries/")) {
    const parts = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    if (parts.length === 2) {
      const slug = parts[1];
      if (KEPT_INDUSTRIES.has(slug)) return undefined;
      const target = INDUSTRY_REDIRECTS[slug];
      if (target) return permanentRedirect(req, `/industries/${target}`);
      return gone();
    }
    if (parts.length > 2) return gone();
  }

  if (pathname === "/malta" || pathname === "/malta/") {
    return permanentRedirect(req, "/services");
  }

  if (pathname.startsWith("/malta/")) {
    const parts = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    // parts: ['malta', loc, ?slug, ?service]
    const loc = parts[1];
    if (!loc) return gone();

    // Archived locality → 308 to nearest KEPT, preserving any sub-path.
    if (!KEPT_LOCATIONS.has(loc)) {
      const targetLoc = ARCHIVED_LOCATION_REDIRECTS[loc];
      if (targetLoc) {
        const rest = parts.slice(2).join("/");
        const tail = rest ? `/${rest}` : "";
        return permanentRedirect(req, `/malta/${targetLoc}${tail}`);
      }
      return gone();
    }

    if (parts.length === 2) {
      return undefined;
    }

    if (parts.length === 3) {
      const slug = parts[2];
      if (KEPT_LOCATION_SERVICES.has(slug)) return undefined;
      if (ALL_SERVICES.has(slug)) {
        return permanentRedirect(req, `/services/${slug}`);
      }
      if (KEPT_INDUSTRIES.has(slug)) {
        return permanentRedirect(req, `/industries/${slug}`);
      }
      // Archived industry slug under /malta/{loc}/{ind} → bounce to industries.
      const indTarget = INDUSTRY_REDIRECTS[slug];
      if (indTarget) return permanentRedirect(req, `/industries/${indTarget}`);
      return gone();
    }

    if (parts.length === 4) {
      const ind = parts[2];
      const svc = parts[3];
      const indKept = KEPT_INDUSTRIES.has(ind);
      const svcKept = KEPT_LOCATION_SERVICES.has(svc);
      if (indKept && svcKept) return undefined;
      if (svcKept) {
        return permanentRedirect(req, `/malta/${loc}/${svc}`);
      }
      if (ALL_SERVICES.has(svc)) {
        return permanentRedirect(req, `/services/${svc}`);
      }
      if (indKept) {
        return permanentRedirect(req, `/industries/${ind}`);
      }
      const indTarget = INDUSTRY_REDIRECTS[ind];
      if (indTarget && svcKept) {
        return permanentRedirect(req, `/malta/${loc}/${svc}`);
      }
      if (indTarget) return permanentRedirect(req, `/industries/${indTarget}`);
      return gone();
    }

    return gone();
  }

  if (pathname.startsWith("/services/")) {
    const parts = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    if (parts.length === 2) {
      const slug = parts[1];
      if (ALL_SERVICES.has(slug)) return undefined;
      return gone();
    }
    if (parts.length > 2) return gone();
  }

  return undefined;
}

export const config = {
  matcher: [
    "/malta",
    "/malta/:path*",
    "/services/:path*",
    "/industries/:path*",
    "/case-studies/:path*",
    "/automation-test",
  ],
};
