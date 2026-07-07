import { Router, type Express } from "express";
import type { EntityCommandBus } from "../../es-kit/bus/EntityCommandBus.js";
import type { StartDraft, ProgressStep, UndoStep } from "../Domain/DraftCommands.js";

export function registerDraftRoutes(
  app: Express,
  bus: EntityCommandBus
): void {
  const router = Router();

  router.post("/start", async (req, res) => {
    const { templateId } = req.body;
    const command: StartDraft = {
      type: "StartDraft",
      data: { templateId }
    };
    const result = await bus.send(command);
    res.json(result);
  });

  router.post("/:id/progress", async (req, res) => {
    const { maxSteps } = req.body;
    const command: ProgressStep = {
      type: "ProgressStep",
      data: { maxSteps },
      metadata: { streamId: req.params.id }
    } as any;
    const result = await bus.send(command);
    res.json(result);
  });

  router.post("/:id/undo", async (req, res) => {
    const command: UndoStep = {
      type: "UndoStep",
      data: {},
      metadata: { streamId: req.params.id }
    } as any;
    const result = await bus.send(command);
    res.json(result);
  });

  app.use("/api/drafts", router);
}
