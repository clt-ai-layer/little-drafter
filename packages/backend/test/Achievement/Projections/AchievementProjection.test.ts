import { describe, expect, it } from "vitest";
import { AchievementProjection } from "../../src/Achievement/Projections/AchievementProjection.js";

/**
 * @test AchievementProjection
 * @description Unit tests for achievement projection logic.
 * 
 * NOTE: Since MongoDBInlineProjectionSpec is not found in the codebase,
 * we test the evolve function (projectReadModel) directly.
 */
describe("AchievementProjection", () => {
  const initialState = {
    userId: "user-1",
    completedDrawings: 0,
    stars: 0,
  };

  it("should increment completedDrawings on DraftCompleted", () => {
    const event = {
      type: "DraftCompleted" as const,
      data: {
        completed_at: "2026-07-06T15:00:00Z",
      },
      metadata: {},
    };

    const newState = (AchievementProjection as any).evolve(initialState, event);

    expect(newState.completedDrawings).toBe(1);
    expect(newState.lastCompletedAt).toBe("2026-07-06T15:00:00Z");
  });

  it("should award a star every 5 drawings", () => {
    let state = initialState;
    const event = {
      type: "DraftCompleted" as const,
      data: { completed_at: "2026-07-06T15:00:00Z" },
      metadata: {},
    };

    // 1st completion
    state = (AchievementProjection as any).evolve(state, event);
    expect(state.stars).toBe(0);

    // 2nd, 3rd, 4th
    state = (AchievementProjection as any).evolve(state, event);
    state = (AchievementProjection as any).evolve(state, event);
    state = (AchievementProjection as any).evolve(state, event);
    expect(state.stars).toBe(0);

    // 5th completion -> 1 star
    state = (AchievementProjection as any).evolve(state, event);
    expect(state.completedDrawings).toBe(5);
    expect(state.stars).toBe(1);

    // 10th completion -> 2 stars
    for (let i = 0; i < 5; i++) {
      state = (AchievementProjection as any).evolve(state, event);
    }
    expect(state.completedDrawings).toBe(10);
    expect(state.stars).toBe(2);
  });
});
