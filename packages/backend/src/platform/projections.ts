import { projections } from "@event-driven-io/emmett";
import { AchievementProjection } from "../Achievement/Projections/AchievementProjection.js";

/**
 * All inline projections registered with the MongoDB event store.
 */
export const inlineProjections = projections.inline([
  AchievementProjection,
]);
