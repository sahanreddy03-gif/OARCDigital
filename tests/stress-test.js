// k6 stress test — Task #47 perf gate
//
// USAGE (against a Vercel preview deploy ONLY — never production
// without explicit go-ahead):
//   BASE=https://oarc-digital-git-<branch>-<team>.vercel.app k6 run tests/stress-test.js
//
// PASS CRITERIA:
//   p95 < 500ms, error rate < 0.1%, all responses 2xx.

import http from "k6/http";
import { check, sleep } from "k6";

const BASE = __ENV.BASE || "https://oarcdigital.com";

const URLS = [
  "/",
  "/services",
  "/our-work",
  "/contact",
  "/pricing",
  "/ai-agents",
  "/automation",
  "/blog",
  "/blog/seo-malta-complete-guide",
  "/blog/marketing-trends-malta-2025",
  "/blog/digital-marketing-malta",
  "/blog/ai-solutions-malta",
  "/services/web-design",
  "/services/social-media-creative-management",
  "/services/video-production",
  "/services/branding",
  "/services",
  "/services/paid-advertising",
  "/services/hire-ai-employees",
  "/services/revenue-automation",
  "/case-studies/apex-fitness-collective",
  "/case-studies/maison-lumiere",
  "/case-studies/volta-home",
  "/malta/valletta/social-media-creative-management",
  "/malta/sliema/digital-marketing",
  "/malta/st-julians/web-design",
  "/industries/restaurant",
  "/industries/hotel",
  "/aeo/best-marketing-agency-malta",
  "/tools",
];

export const options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "60s", target: 100 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"],
    http_req_failed: ["rate<0.001"],
  },
};

export default function () {
  const url = BASE + URLS[Math.floor(Math.random() * URLS.length)];
  const res = http.get(url);
  check(res, {
    "status is 2xx": (r) => r.status >= 200 && r.status < 300,
    "duration < 500ms": (r) => r.timings.duration < 500,
  });
  sleep(Math.random() * 2);
}
