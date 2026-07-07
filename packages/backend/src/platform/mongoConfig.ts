import type { EventStore } from "@event-driven-io/emmett";
import {
  getMongoDBEventStore,
  type MongoDBEventStore,
} from "@event-driven-io/emmett-mongodb";
import { MongoClient } from "mongodb";
import { inlineProjections } from "./projections.js";
import { getDatabaseName, resolveMongoUri } from "./mongoUri.js";

let mongoClient: MongoClient | undefined;
let eventStore: MongoDBEventStore | undefined;

export async function getMongoClient(): Promise<MongoClient> {
  if (mongoClient) {
    return mongoClient;
  }

  const uri = resolveMongoUri();
  mongoClient = new MongoClient(uri);
  await mongoClient.connect();
  return mongoClient;
}

export async function getEventStore(): Promise<MongoDBEventStore> {
  if (eventStore) {
    return eventStore;
  }

  const client = await getMongoClient();
  eventStore = getMongoDBEventStore({
    client,
    storage: {
      type: "COLLECTION_PER_STREAM_TYPE",
      databaseName: getDatabaseName(),
    },
    projections: inlineProjections,
  });

  return eventStore;
}

export async function closeMongoResources(): Promise<void> {
  eventStore = undefined;

  if (mongoClient) {
    await mongoClient.close();
    mongoClient = undefined;
  }
}
