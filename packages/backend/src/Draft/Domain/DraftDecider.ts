import { EntityRoot } from "@src/es-kit/domain/EntityRoot.js";
import { Outcome, type Outcome as OutcomeType } from "@src/es-kit/domain/Outcome.js";
import type { 
  DraftEvent, 
  DraftStarted, 
  DraftStepProgressed, 
  DraftStepUndone, 
  DraftCompleted 
} from "./DraftEvents.js";

/**
 * @valueObject DraftState
 * @immutable
 * @businessConcept Core state of a drawing session.
 */
export type EmptyDraft = { lifecycle: "Empty" };

export type ActiveDraft = {
  lifecycle: "Active";
  id: string;
  templateId: string;
  currentStepIndex: number;
  status: "in-progress" | "completed";
  started_at: string;
};

export type DraftState = EmptyDraft | ActiveDraft;

/**
 * @aggregateRoot Draft
 * @businessContext Manages the drawing progression for a user.
 * @invariants
 * - Cannot undo past step 0.
 * - Cannot progress a completed draft.
 * - Must start from Empty lifecycle.
 * @emits DraftStarted, DraftStepProgressed, DraftStepUndone, DraftCompleted
 */
export class DraftDecider extends EntityRoot<DraftState, DraftEvent> {
  static readonly streamType = "draft" as const;
  static readonly initialState: DraftState = { lifecycle: "Empty" };

  constructor(state: DraftState) {
    super(state);
  }

  /**
   * Folds one domain event into state.
   */
  static replayState(state: DraftState, event: DraftEvent): DraftState {
    return new DraftDecider(state).when(state, event);
  }

  protected when(state: DraftState, event: DraftEvent): DraftState {
    switch (event.type) {
      case "DraftStarted":
        return {
          lifecycle: "Active",
          id: event.data.id,
          templateId: event.data.templateId,
          currentStepIndex: 0,
          status: "in-progress",
          started_at: event.data.started_at,
        };
      case "DraftStepProgressed":
        if (state.lifecycle !== "Active") return state;
        return {
          ...state,
          currentStepIndex: event.data.newStepIndex,
        };
      case "DraftStepUndone":
        if (state.lifecycle !== "Active") return state;
        return {
          ...state,
          currentStepIndex: event.data.newStepIndex,
        };
      case "DraftCompleted":
        if (state.lifecycle !== "Active") return state;
        return {
          ...state,
          status: "completed",
        };
      default:
        return state;
    }
  }

  // ── Domain methods ──────────────────────────────────────────

  /**
   * Initializes a new draft session.
   * @precondition Lifecycle must be Empty.
   * @emits DraftStarted
   * @returns Outcome<void>
   */
  start(id: string, templateId: string, now: Date = new Date()): OutcomeType<void> {
    if (this.state.lifecycle !== "Empty") {
      return Outcome.fail("illegal", "Draft already exists.");
    }

    this.apply({
      type: "DraftStarted",
      data: {
        id,
        templateId,
        started_at: now.toISOString(),
      },
    });

    return Outcome.unit();
  }

  /**
   * Advances the draft to the next step.
   * @precondition Lifecycle must be Active and status in-progress.
   * @emits DraftStepProgressed or DraftCompleted
   * @returns Outcome<void>
   */
  progress(maxSteps: number, now: Date = new Date()): OutcomeType<void> {
    if (this.state.lifecycle !== "Active") {
      return Outcome.fail("not_found", "Draft session not active.");
    }
    if (this.state.status === "completed") {
      return Outcome.fail("illegal", "Draft is already completed.");
    }

    const nextIndex = this.state.currentStepIndex + 1;

    if (nextIndex >= maxSteps) {
      this.apply({
        type: "DraftCompleted",
        data: {
          completed_at: now.toISOString(),
        },
      });
    } else {
      this.apply({
        type: "DraftStepProgressed",
        data: {
          newStepIndex: nextIndex,
          timestamp: now.toISOString(),
        },
      });
    }

    return Outcome.unit();
  }

  /**
   * Reverts the draft to the previous step.
   * @precondition Lifecycle must be Active, status in-progress, and index > 0.
   * @emits DraftStepUndone
   * @returns Outcome<void>
   */
  undo(now: Date = new Date()): OutcomeType<void> {
    if (this.state.lifecycle !== "Active") {
      return Outcome.fail("not_found", "Draft session not active.");
    }
    if (this.state.status === "completed") {
      return Outcome.fail("illegal", "Cannot undo a completed draft.");
    }
    if (this.state.currentStepIndex === 0) {
      return Outcome.fail("illegal", "Already at the first step.");
    }

    this.apply({
      type: "DraftStepUndone",
      data: {
        newStepIndex: this.state.currentStepIndex - 1,
        timestamp: now.toISOString(),
      },
    });

    return Outcome.unit();
  }
}
