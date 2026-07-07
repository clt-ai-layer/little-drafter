import { z } from "zod";

/**
 * @command StartDraft
 * @businessScenario User selects a template and begins a session.
 */
export type StartDraft = {
  type: "StartDraft";
  data: {
    templateId: string;
  };
};

/**
 * @command ProgressStep
 * @businessScenario User clicks to reveal the next part of the SVG.
 */
export type ProgressStep = {
  type: "ProgressStep";
  data: {
    maxSteps: number;
  };
};

/**
 * @command UndoStep
 * @businessScenario User wants to hide the last revealed part.
 */
export type UndoStep = {
  type: "UndoStep";
  data: {
    // No data needed usually, just decrements
  };
};

export type DraftCommand = 
  | StartDraft 
  | ProgressStep 
  | UndoStep;
