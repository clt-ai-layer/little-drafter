import { DraftDecider } from "../Domain/DraftDecider.js";
import type { StartDraft, ProgressStep, UndoStep } from "../Domain/DraftCommands.js";
import { defineEntityHandler } from "../../es-kit/handlers/defineEntityHandler.js";
import { Outcome } from "../../es-kit/domain/Outcome.js";

export const StartDraftHandler = defineEntityHandler<StartDraft, DraftDecider>({
  canHandle: "StartDraft",
  streamType: "draft",
  getStreamId: (cmd) => `draft-${Date.now()}`, // Simple ID for now
  handle: async (cmd, decider) => {
    return decider.start(decider.streamId, cmd.data.templateId);
  }
});

export const ProgressStepHandler = defineEntityHandler<ProgressStep, DraftDecider>({
  canHandle: "ProgressStep",
  streamType: "draft",
  handle: async (cmd, decider) => {
    return decider.progress(cmd.data.maxSteps);
  }
});

export const UndoStepHandler = defineEntityHandler<UndoStep, DraftDecider>({
  canHandle: "UndoStep",
  streamType: "draft",
  handle: async (cmd, decider) => {
    return decider.undo();
  }
});
