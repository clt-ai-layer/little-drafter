import express, { type Express } from "express";
import cors from "cors";
import type { EventStore } from "@event-driven-io/emmett";
import { createCommandBus } from "./entityHandlers.js";
import { registerDraftRoutes } from "../Draft/Api/DraftRoutes.js";

export async function createApp(eventStore: EventStore): Promise<Express> {
  const app = express();
  
  app.use(cors());
  app.use(express.json());

  const bus = createCommandBus(eventStore);

  app.get("/health", (req, res) => {
    res.json({ status: "online" });
  });

  registerDraftRoutes(app, bus);

  return app;
}
