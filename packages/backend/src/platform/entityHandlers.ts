import type { EventStore } from "@event-driven-io/emmett";
import type { MongoClient } from "mongodb";
import { EntityCommandBus } from "../es-kit/bus/EntityCommandBus.js";
import { ContextMiddleware } from "../es-kit/middleware/ContextMiddleware.js";
import { LoggingMiddleware } from "../es-kit/middleware/LoggingMiddleware.js";
import { TimingMiddleware } from "../es-kit/middleware/TimingMiddleware.js";
import { StartDraftHandler, ProgressStepHandler, UndoStepHandler } from "../Draft/Application/DraftCommandHandlers.js";

export function createCommandBus(
  store: EventStore,
  client?: MongoClient,
): EntityCommandBus {
  const inlineProjections = (store as any).inlineProjections || [];

  const bus = new EntityCommandBus(
    store,
    client
      ? { client, inlineProjections }
      : undefined,
  );

  bus.register(StartDraftHandler);
  bus.register(ProgressStepHandler);
  bus.register(UndoStepHandler);

  bus.use(new ContextMiddleware());
  bus.use(new LoggingMiddleware());
  bus.use(new TimingMiddleware());

  return bus;
}
