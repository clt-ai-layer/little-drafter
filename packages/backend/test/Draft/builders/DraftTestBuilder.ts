import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { CatalogService } from "../../../src/Catalog/Application/CatalogService.js";
import { DraftDecider } from "../../../src/Draft/Domain/DraftDecider.js";
import { EntityCommandBus } from "../../../src/es-kit/bus/EntityCommandBus.js";
import { InMemoryEventStore } from "@event-driven-io/emmett";

export class DraftTestBuilder {
  private tempDir: string | null = null;
  private catalogService: CatalogService | null = null;
  private eventStore: any = null;
  private commandBus: EntityCommandBus | null = null;

  async setup() {
    this.tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "draft-integration-"));
    this.catalogService = new CatalogService(this.tempDir);
    this.eventStore = InMemoryEventStore();
    this.commandBus = new EntityCommandBus(this.eventStore);
    return this;
  }

  async cleanup() {
    if (this.tempDir) {
      await fs.rm(this.tempDir, { recursive: true, force: true });
    }
  }

  async withTemplate(id: string, steps: { instruction: string }[]) {
    if (!this.tempDir) throw new Error("Call setup() first");
    
    const groups = steps.map((s, i) => `
      <g data-step="${i}" data-instruction="${s.instruction}">
        <path d="M0 0 L${i} ${i}" />
      </g>
    `).join("");
    
    const svgContent = `<svg viewBox="0 0 100 100">${groups}</svg>`;
    await fs.writeFile(path.join(this.tempDir, `${id}.svg`), svgContent);
    return this;
  }

  getCatalogService() {
    if (!this.catalogService) throw new Error("Call setup() first");
    return this.catalogService;
  }

  getEventStore() {
    if (!this.eventStore) throw new Error("Call setup() first");
    return this.eventStore;
  }

  getCommandBus() {
    if (!this.commandBus) throw new Error("Call setup() first");
    return this.commandBus;
  }
}
