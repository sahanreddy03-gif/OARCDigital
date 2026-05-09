# OARC Digital — Malta SEO Keyword Map

**Purpose**: One canonical URL per query intent. Anti-cannibalisation gate. Before any new page ships, verify no existing canonical owns the intent.

**Last updated**: April 2026 (Task #68 baseline)

## Pillar pages (highest-priority commercial intent)

| Intent / query family                                | Canonical URL                                  |
| ---------------------------------------------------- | ---------------------------------------------- |
| Brand/agency homepage / "OARC Digital"               | `/`                                            |
| AI agents / AI workforce / AI employees Malta        | `/ai-agents`                                   |
| Creative & brand / social / video / web Malta        | `/creative`                                    |
| Business automation / workflow / CRM Malta           | `/automation`                                  |
| Software development pillar (deferred to Phase B)    | `/software-development`  *(to-be-built)*       |
| All services index                                   | `/services`                                    |
| All industries index                                 | `/industries`                                  |
| All Malta locations index                            | `/services` *(soft hub via location pages)*    |

## AEO / answer-engine pages (top 33, schema-enabled)

Canonical mapping is one-to-one: `/aeo/<slug>` owns the corresponding question intent. The top 3 (already 1,500+ words):

| Intent                                      | Canonical URL                                       |
| ------------------------------------------- | --------------------------------------------------- |
| "digital marketing agency Malta"            | `/aeo/digital-marketing-agency-malta`               |
| "best marketing agency Malta"               | `/aeo/best-marketing-agency-malta`                  |
| "digital transformation Malta"              | `/aeo/digital-transformation-malta`                 |

The remaining 30 AEO slugs live under `/aeo/` and are listed in `app/aeo/`. None of them may be re-targeted by a new page.

### AEOs deferred to build (Phase D)
| Intent                                      | Canonical URL (to be built)                         |
| ------------------------------------------- | --------------------------------------------------- |
| "SaaS development Malta"                    | `/aeo/saas-development-malta`                       |
| "mobile app developers Malta"               | `/aeo/mobile-app-developers-malta`                  |
| "web development agency Malta"              | `/aeo/web-development-agency-malta`                 |
| "outsource development Malta"               | `/aeo/outsource-development-malta`                  |
| "custom software Malta"                     | `/aeo/custom-software-malta`                        |
| "marketing agency Mosta"                    | `/aeo/marketing-agency-mosta`                       |
| "marketing agency Qormi"                    | `/aeo/marketing-agency-qormi`                       |
| "marketing agency Swieqi"                   | `/aeo/marketing-agency-swieqi`                      |
| "marketing agency Gzira"                    | `/aeo/marketing-agency-gzira`                       |
| "marketing agency Mellieha"                 | `/aeo/marketing-agency-mellieha`                    |
| "marketing agency Paola"                    | `/aeo/marketing-agency-paola`                       |

## Service pages (canonical slugs only)

The full canonical service list is `shared/seoConfig.ts → allServiceSlugs`. Duplicate slugs are 308-aliased in `lib/seo/seoSets.ts → SERVICE_ALIASES`:

| Source slug (308-redirected)         | Canonical URL                                  |
| ------------------------------------ | ---------------------------------------------- |
| `/services/customer-acquisition`     | `/services/customer-acquisition-accelerator`   |
| `/services/lead-generation`          | `/services/lead-generation-engine`             |
| `/services/api-integration`          | `/services/api-integration-services`           |
| `/services/mobile-applications-development` | `/services/mobile-apps-development`     |
| `/services/web-application-development`     | `/services/web-apps-development`        |
| `/services/mvp-development/software` | `/services/custom-software-development`        |
| `/services/branding-services`        | `/services/branding`                           |

### Services deferred to build (Phase C)
| Intent                                      | Canonical URL (to be built)                         |
| ------------------------------------------- | --------------------------------------------------- |
| "SEO services Malta"                        | `/services/seo-services`                            |
| "SaaS development Malta"                    | `/services/saas-development`                        |
| "content marketing Malta"                   | `/services/content-marketing`                       |
| "email marketing Malta"                     | `/services/email-marketing`                         |
| "ecommerce development Malta"               | `/services/ecommerce-development`                   |
| "WordPress development Malta"               | `/services/wordpress-development`                   |
| "Shopify development Malta"                 | `/services/shopify-development`                     |
| "DevOps services Malta"                     | `/services/devops-services`                         |
| "database design Malta"                     | `/services/database-design`                         |

## Industries (one canonical per industry)

10 currently live in `app/industries/[industry]/page.tsx`: restaurants, hotels, cafes, bars, igaming, fintech, real-estate, retail, fitness, wellness, events.

### Industries deferred to add (Phase E)
| Intent                                      | Canonical URL                                       |
| ------------------------------------------- | --------------------------------------------------- |
| Healthcare clinics Malta                    | `/industries/healthcare-clinics`                    |
| Legal services Malta                        | `/industries/legal-services`                        |
| Construction Malta                          | `/industries/construction`                          |
| Beauty & wellness Malta (vs current wellness) | `/industries/beauty-wellness`                     |
| Automotive Malta                            | `/industries/automotive`                            |
| Education Malta                             | `/industries/education`                             |
| Professional services Malta                 | `/industries/professional-services`                 |
| Nonprofits / NGOs Malta                     | `/industries/nonprofits-ngos`                       |

## Locations (KEPT vocabulary, 10 slugs)

`shared/seoConfig.ts → maltaLocations` is the single source of truth. All 40 archived locations 308-redirect to the nearest KEPT one via `lib/seo/redirectMap.ts`. **Do not add new location slugs without updating `KEPT_LOCATIONS` and the redirect graph in the same change.**

## Rules of engagement

1. **Before creating any page**, search this map for the intent. If a canonical exists, redirect or expand the existing one rather than creating a new URL.
2. **Before changing a slug**, add a 308 to `SERVICE_ALIASES` (or the corresponding redirect map) and add coverage to `scripts/verify-redirects.ts`.
3. **Never publish two pages targeting the same query** — even with slightly different angles. Rewrite the canonical to cover both angles instead.
4. **Industry × service cross-pages** (deferred Phase F) get their own canonical pattern: `/industries/{industry}/{service}`. They do not duplicate `/industries/{industry}` or `/services/{service}` intent.
