import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { CatalogService } from "../../../src/Catalog/Application/CatalogService.js";

describe("CatalogService", () => {
  let tempDir: string;
  let service: CatalogService;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "catalog-test-"));
    service = new CatalogService(tempDir);
  });

  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  describe("Template Loading", () => {
    it("should parse a valid SVG with data-step attributes", async () => {
      const svgContent = `
        <svg viewBox="0 0 100 100">
          <g data-step="0" data-instruction="Draw a big circle">
            <circle cx="50" cy="50" r="40" />
          </g>
          <g data-step="1" data-instruction="Add two small eyes">
            <circle cx="40" cy="40" r="5" />
            <circle cx="60" cy="40" r="5" />
          </g>
        </svg>
      `;
      await fs.writeFile(path.join(tempDir, "smiley.svg"), svgContent);

      const result = await service.getTemplate("smiley");

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value.id).toBe("smiley");
        expect(result.value.steps).toHaveLength(2);
        expect(result.value.steps[0].index).toBe(0);
        expect(result.value.steps[0].instruction).toBe("Draw a big circle");
        expect(result.value.steps[1].index).toBe(1);
        expect(result.value.steps[1].instruction).toBe("Add two small eyes");
      }
    });

    it("should return Outcome.fail if template does not exist", async () => {
      const result = await service.getTemplate("non-existent");

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.code).toBe("not_found");
      }
    });
  });

  describe("Metadata Extraction", () => {
    it("should provide default instruction if missing", async () => {
      const svgContent = `
        <svg>
          <g data-step="0">
            <path d="M0 0 L10 10" />
          </g>
        </svg>
      `;
      await fs.writeFile(path.join(tempDir, "missing-meta.svg"), svgContent);

      const result = await service.getTemplate("missing-meta");

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value.steps[0].instruction).toBe("Follow the lines to draw the next part.");
      }
    });

    it("should ignore groups without data-step", async () => {
      const svgContent = `
        <svg>
          <g id="background">
            <rect width="100" height="100" fill="white" />
          </g>
          <g data-step="0" data-instruction="Step 1">
            <path d="M0 0 L10 10" />
          </g>
        </svg>
      `;
      await fs.writeFile(path.join(tempDir, "mixed-groups.svg"), svgContent);

      const result = await service.getTemplate("mixed-groups");

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value.steps).toHaveLength(1);
        expect(result.value.steps[0].index).toBe(0);
      }
    });

    it("should sort steps by their index", async () => {
      const svgContent = `
        <svg>
          <g data-step="1" data-instruction="Step 2">
            <path d="M20 20 L30 30" />
          </g>
          <g data-step="0" data-instruction="Step 1">
            <path d="M0 0 L10 10" />
          </g>
        </svg>
      `;
      await fs.writeFile(path.join(tempDir, "unsorted.svg"), svgContent);

      const result = await service.getTemplate("unsorted");

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value.steps[0].index).toBe(0);
        expect(result.value.steps[1].index).toBe(1);
      }
    });
  });

  describe("Template Listing", () => {
    it("should list all SVG files as summaries", async () => {
      await fs.writeFile(path.join(tempDir, "cat.svg"), "<svg></svg>");
      await fs.writeFile(path.join(tempDir, "dog-house.svg"), "<svg></svg>");
      await fs.writeFile(path.join(tempDir, "readme.txt"), "not an svg");

      const result = await service.listTemplates();

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toHaveLength(2);
        const ids = result.value.map(s => s.id);
        expect(ids).toContain("cat");
        expect(ids).toContain("dog-house");
        
        const catSummary = result.value.find(s => s.id === "cat");
        expect(catSummary?.name).toBe("Cat");
        
        const dogSummary = result.value.find(s => s.id === "dog-house");
        expect(dogSummary?.name).toBe("Dog House");
      }
    });
  });
});
