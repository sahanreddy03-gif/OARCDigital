'use client';

import StandaloneProductPage from './StandaloneProductPage';
import { buildStandalone } from './buildStandalone';
import { STANDALONE_EXTRAS } from './productStandaloneExtras';
import { SOCIAL_PAGE } from './socialProductContent';
import { EVENT_PAGE } from './eventProductContent';
import { ANALYTICS_PAGE } from './analyticsProductContent';
import { RECIPE_PAGE } from './recipeProductContent';
import { INVENTORY_PAGE } from './inventoryProductContent';
import { STAFF_PAGE } from './staffProductContent';
import { FLOOR_PLAN_PAGE } from './floorPlanProductContent';

export function SocialProductPage() {
  return <StandaloneProductPage config={buildStandalone(SOCIAL_PAGE, STANDALONE_EXTRAS.social, true)} />;
}

export function EventProductPage() {
  return <StandaloneProductPage config={buildStandalone(EVENT_PAGE, STANDALONE_EXTRAS.event, true)} />;
}

export function AnalyticsProductPage() {
  return <StandaloneProductPage config={buildStandalone(ANALYTICS_PAGE, STANDALONE_EXTRAS.analytics, true)} />;
}

export function RecipeProductPage() {
  return <StandaloneProductPage config={buildStandalone(RECIPE_PAGE, STANDALONE_EXTRAS.recipe, true)} />;
}

export function InventoryProductPage() {
  return <StandaloneProductPage config={buildStandalone(INVENTORY_PAGE, STANDALONE_EXTRAS.inventory, true)} />;
}

export function StaffProductPage() {
  return <StandaloneProductPage config={buildStandalone(STAFF_PAGE, STANDALONE_EXTRAS.staff, true)} />;
}

export function FloorPlanProductPage() {
  return <StandaloneProductPage config={buildStandalone(FLOOR_PLAN_PAGE, STANDALONE_EXTRAS.floorPlan, true)} />;
}
