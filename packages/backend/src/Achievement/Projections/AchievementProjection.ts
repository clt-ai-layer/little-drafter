import { defineEntityReadModel } from "@src/es-kit/projections/defineEntityReadModel.js";
import type { DraftCompleted } from "@src/Draft/Domain/DraftEvents.js";
import type { AchievementReadModel } from "../Domain/ReadModels/AchievementReadModel.js";

/**
 * @projection AchievementProjection
 * @sourceAggregate Draft
 * @updatedBy DraftCompleted
 * @description Updates user achievements when a drawing is completed.
 */
export const AchievementProjection = defineEntityReadModel<
  AchievementReadModel,
  DraftCompleted
>({
  name: "Achievements",
  schemaVersion: 1,
  canHandle: ["DraftCompleted"],
  initialReadModel: () => ({
    userId: "unknown", // Will be set by metadata in evolve or handled by Emmett
    completedDrawings: 0,
    stars: 0,
  }),
  projectReadModel: (doc, event) => {
    // Note: Emmett's MongoDB projection handles the document loading/saving.
    // We just return the updated state.
    
    const newCompletedCount = doc.completedDrawings + 1;
    // Award 1 star per drawing
    const newStars = doc.stars + 1;

    return {
      ...doc,
      completedDrawings: newCompletedCount,
      stars: newStars,
      lastCompletedAt: event.data.completed_at,
    };
  },
});
