'use client';

import H360ProductPageLayout from './H360ProductPageLayout';
import { SOCIAL_PAGE } from './socialProductContent';
import { EVENT_PAGE } from './eventProductContent';
import { ANALYTICS_PAGE } from './analyticsProductContent';
import { RECIPE_PAGE } from './recipeProductContent';
import { INVENTORY_PAGE } from './inventoryProductContent';
import { STAFF_PAGE } from './staffProductContent';
import { FLOOR_PLAN_PAGE } from './floorPlanProductContent';

export function SocialProductPage() {
  return <H360ProductPageLayout config={SOCIAL_PAGE} />;
}

export function EventProductPage() {
  return <H360ProductPageLayout config={EVENT_PAGE} />;
}

export function AnalyticsProductPage() {
  return <H360ProductPageLayout config={ANALYTICS_PAGE} />;
}

export function RecipeProductPage() {
  return <H360ProductPageLayout config={RECIPE_PAGE} />;
}

export function InventoryProductPage() {
  return <H360ProductPageLayout config={INVENTORY_PAGE} />;
}

export function StaffProductPage() {
  return <H360ProductPageLayout config={STAFF_PAGE} />;
}

export function FloorPlanProductPage() {
  return <H360ProductPageLayout config={FLOOR_PLAN_PAGE} />;
}
