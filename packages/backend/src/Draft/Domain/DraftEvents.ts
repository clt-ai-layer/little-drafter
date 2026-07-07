import { z } from "zod";

// NOTE: Using a simplified version of @SerializableType for now as the actual decorator 
// might have specific requirements from es-kit/framework not fully visible in skeleton.
// Assuming it matches the arity rules in core.md.

/**
 * @domainEvent DraftStarted
 * @aggregateType Draft
 * @businessMeaning A new drawing session has been initialized.
 */
export type DraftStarted = {
  type: "DraftStarted";
  data: {
    id: string;
    templateId: string;
    started_at: string;
  };
};

/**
 * @domainEvent DraftStepProgressed
 * @aggregateType Draft
 * @businessMeaning User moved to the next step of the drawing.
 */
export type DraftStepProgressed = {
  type: "DraftStepProgressed";
  data: {
    newStepIndex: number;
    timestamp: string;
  };
};

/**
 * @domainEvent DraftStepUndone
 * @aggregateType Draft
 * @businessMeaning User went back to a previous step.
 */
export type DraftStepUndone = {
  type: "DraftStepUndone";
  data: {
    newStepIndex: number;
    timestamp: string;
  };
};

/**
 * @domainEvent DraftCompleted
 * @aggregateType Draft
 * @businessMeaning The drawing session finished successfully.
 */
export type DraftCompleted = {
  type: "DraftCompleted";
  data: {
    completed_at: string;
  };
};

export type DraftEvent = 
  | DraftStarted 
  | DraftStepProgressed 
  | DraftStepUndone 
  | DraftCompleted;
