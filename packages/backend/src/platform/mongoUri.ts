export function resolveMongoUri(): string {
  return process.env.MONGODB_URI || "mongodb://localhost:27017";
}

export function getDatabaseName(): string {
  return process.env.MONGODB_DATABASE || "little-drafter";
}
