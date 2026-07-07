import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { DraftTestBuilder } from "../Draft/builders/DraftTestBuilder.js";
import { DraftDecider } from "../../src/Draft/Domain/DraftDecider.js";
import { AchievementProjection } from "../../src/Achievement/Projections/AchievementProjection.js";
import type { DraftEvent } from "../../src/Draft/Domain/DraftEvents.js";

describe("Draft Integration", () => {
  let builder: DraftTestBuilder;
  const now = new Date("2026-07-06T15:00:00.000Z");

  beforeEach(async () => {
    builder = await new DraftTestBuilder().setup();
  });

  afterEach(async () => {
    await builder.cleanup();
  });

  it("should complete a drawing lifecycle and update achievements", async () => {
    // 1. Setup Template in Catalog
    await builder.withTemplate("lion", [
      { instruction: "Draw the head" },
      { instruction: "Draw the mane" },
    ]);
    
    const catalog = builder.getCatalogService();
    const templateResult = await catalog.getTemplate("lion");
    expect(templateResult.ok).toBe(true);
    const template = (templateResult as any).value;
    const maxSteps = template.steps.length;

    // 2. Start Draft session
    // We use the Decider directly here to simulate the domain logic flow
    // which would be triggered by a command handler.
    const draftId = "draft-123";
    const decider = new DraftDecider(DraftDecider.initialState);
    
    decider.start(draftId, "lion", now);
    expect(decider.getState().lifecycle).toBe("Active");

    // 3. Progress steps to completion
    // Step 0 -> 1
    decider.progress(maxSteps, now);
    expect((decider.getState() as any).currentStepIndex).toBe(1);

    // Step 1 -> Completion (maxSteps is 2)
    decider.progress(maxSteps, now);
    expect((decider.getState() as any).status).toBe("completed");

    // 4. Verify Events in Store
    const events = decider.getUncommittedEvents() as DraftEvent[];
    expect(events.some(e => e.type === "DraftCompleted")).toBe(true);

    // 5. Trigger Achievement Projection
    // In a real system, a worker would pick up the DraftCompleted event.
    // Here we verify the projection logic correctly handles the event from the decider.
    const completedEvent = events.find(e => e.type === "DraftCompleted")!;
    
    const initialAchievement = {
      userId: "user-1",
      completedDrawings: 0,
      stars: 0,
    };

    // Simulate the projection "evolve" step
    const updatedAchievement = (AchievementProjection as any).evolve(initialAchievement, completedEvent);

    // 6. Final Assertions
    expect(updatedAchievement.completedDrawings).toBe(1);
    expect(updatedAchievement.stars).toBe(1); // Verified: 1 star per drawing
    expect(updatedAchievement.lastCompletedAt).toBe(now.toISOString());
  });

  it("should correctly wire catalog metadata into the draft flow", async () => {
    // Verify that the integration between Catalog and Draft uses the correct step counts
    await builder.withTemplate("simple", [
      { instruction: "Step 1" }
    ]);
    
    const catalog = builder.getCatalogService();
    const template = (await catalog.getTemplate("simple") as any).value;
    
    const decider = new DraftDecider(DraftDecider.initialState);
    decider.start("d1", "simple", now);
    
    // With only 1 step, the first progress should complete it
    decider.progress(template.steps.length, now);
    
    expect((decider.getState() as any).status).toBe("completed");
    const events = decider.getUncommittedEvents();
    expect(events).toHaveLength(2); // DraftStarted, DraftCompleted
  });
});
