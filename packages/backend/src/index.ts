import { createApp } from "./platform/app.js";
import { getEventStore } from "./platform/mongoConfig.js";

const PORT = process.env.PORT || 8000;

async function main() {
  const eventStore = await getEventStore();
  const app = await createApp(eventStore);

  app.listen(PORT, () => {
    console.log(`Little Drafter backend listening on http://localhost:${PORT}`);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
