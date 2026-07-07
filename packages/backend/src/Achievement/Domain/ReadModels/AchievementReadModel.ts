import { z } from "zod";

/**
 * @valueObject AchievementReadModel
 * @immutable
 * @businessConcept Tracks a user's drawing achievements and rewards.
 */
export const AchievementReadModelSchema = z.object({
  userId: z.string(),
  completedDrawings: z.number().default(0),
  stars: z.number().default(0),
  lastCompletedAt: z.string().optional(),
});

export type AchievementReadModel = z.infer<typeof AchievementReadModelSchema>;
