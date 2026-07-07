import { describe, expect, it } from "vitest";
import { DraftDecider } from "./DraftDecider.js";

const now = new Date("2026-07-06T14:46:00.000Z");

describe("DraftDecider", () => {
  describe("Session Lifecycle", () => {
    it("should start a draft successfully", () => {
      const draft = new DraftDecider(DraftDecider.initialState);
      const result = draft.start("draft-1", "template-1", now);

      expect(result.ok).toBe(true);
      expect(draft.getState()).toMatchObject({
        lifecycle: "Active",
        id: "draft-1",
        templateId: "template-1",
        currentStepIndex: 0,
        status: "in-progress",
      });

      const events = draft.getUncommittedEvents();
      expect(events).toHaveLength(1);
      expect(events[0].type).toBe("DraftStarted");
    });

    it("should complete a draft when progressing past max steps", () => {
      const draft = new DraftDecider(DraftDecider.initialState);
      draft.start("draft-1", "template-1", now);
      
      // template with 2 steps (indices 0 and 1)
      const result = draft.progress(2, now); // Progress from 0 to 1 -> progressed
      expect(result.ok).toBe(true);
      expect((draft.getState() as any).currentStepIndex).toBe(1);

      const result2 = draft.progress(2, now); // Progress from 1 to 2 -> completed
      expect(result2.ok).toBe(true);
      expect((draft.getState() as any).status).toBe("completed");

      const events = draft.getUncommittedEvents();
      expect(events.find(e => e.type === "DraftCompleted")).toBeDefined();
    });
  });

  describe("Navigation", () => {
    it("should progress to the next step", () => {
      const draft = new DraftDecider(DraftDecider.initialState);
      draft.start("draft-1", "template-1", now);
      
      const result = draft.progress(10, now);
      expect(result.ok).toBe(true);
      expect((draft.getState() as any).currentStepIndex).toBe(1);
      
      const events = draft.getUncommittedEvents();
      expect(events[1].type).toBe("DraftStepProgressed");
    });

    it("should undo to the previous step", () => {
      const draft = new DraftDecider(DraftDecider.initialState);
      draft.start("draft-1", "template-1", now);
      draft.progress(10, now); // to index 1
      
      const result = draft.undo(now);
      expect(result.ok).toBe(true);
      expect((draft.getState() as any).currentStepIndex).toBe(0);
      
      const events = draft.getUncommittedEvents();
      expect(events[2].type).toBe("DraftStepUndone");
    });
  });

  describe("Invariants", () => {
    it("should not allow undoing at step 0", () => {
      const draft = new DraftDecider(DraftDecider.initialState);
      draft.start("draft-1", "template-1", now);
      
      const result = draft.undo(now);
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.code).toBe("illegal");
      }
    });

    it("should not allow progressing a completed draft", () => {
      const draft = new DraftDecider(DraftDecider.initialState);
      draft.start("draft-1", "template-1", now);
      draft.progress(1, now); // completes immediately if maxSteps is 1
      
      const result = draft.progress(1, now);
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.code).toBe("illegal");
      }
    });
  });
});
