import fs from "node:fs/promises";
import path from "node:path";
import { Outcome, type Outcome as OutcomeType } from "@src/es-kit/domain/Outcome.js";
import { 
  type DrawingTemplate, 
  type DrawingStep,
  type DrawingTemplateSummary 
} from "../Domain/ValueObjects/DrawingTemplate.js";

/**
 * @service CatalogService
 * @boundedContext Catalog
 * @description Serves SVG templates and extracts step-by-step metadata.
 */
export class CatalogService {
  private readonly templatesPath: string;

  constructor(templatesPath?: string) {
    // Default path relative to project root or provided override
    this.templatesPath = templatesPath ?? path.resolve(process.cwd(), "packages/backend/assets/templates");
  }

  /**
   * Lists all available drawing templates.
   * @returns Promise<Outcome<DrawingTemplateSummary[]>>
   */
  async listTemplates(): Promise<OutcomeType<DrawingTemplateSummary[]>> {
    try {
      const files = await fs.readdir(this.templatesPath);
      const summaries: DrawingTemplateSummary[] = files
        .filter(f => f.endsWith(".svg"))
        .map(f => ({
          id: f.replace(".svg", ""),
          name: f.replace(".svg", "").split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
        }));

      return Outcome.ok(summaries);
    } catch (error) {
      return Outcome.fail("not_found", `Could not read templates directory: ${(error as Error).message}`);
    }
  }

  /**
   * Loads a specific template and parses its step metadata.
   * @param id The template ID (filename without extension).
   * @returns Promise<Outcome<DrawingTemplate>>
   */
  async getTemplate(id: string): Promise<OutcomeType<DrawingTemplate>> {
    try {
      const filePath = path.join(this.templatesPath, `${id}.svg`);
      const content = await fs.readFile(filePath, "utf-8");

      const steps = this.parseSteps(content);
      
      const template: DrawingTemplate = {
        id,
        name: id.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
        steps,
      };

      return Outcome.ok(template);
    } catch (error) {
      return Outcome.fail("not_found", `Template '${id}' not found or invalid: ${(error as Error).message}`);
    }
  }

  /**
   * Parses SVG content to extract groups with data-step metadata.
   * @private
   */
  private parseSteps(svgContent: string): DrawingStep[] {
    const steps: DrawingStep[] = [];
    
    // Regex to find <g> tags with data-step. 
    // We look for the entire opening tag and then find attributes within it.
    // This is a simplified approach; in production, jsdom would be safer.
    const groupRegex = /<g\s+([^>]*data-step=["'](\d+)["'][^>]*)>([\s\S]*?)<\/g>/g;
    
    let match;
    while ((match = groupRegex.exec(svgContent)) !== null) {
      const attributes = match[1];
      const stepIndex = parseInt(match[2], 10);
      const innerContent = match[3];
      
      // Extract data-instruction if present
      const instructionMatch = /data-instruction=["']([^"']*)["']/.exec(attributes);
      const instruction = instructionMatch 
        ? instructionMatch[1] 
        : "Follow the lines to draw the next part.";
      
      // Clean up inner content to get path data (simplified: just keep the inner XML)
      // The frontend will render this inside a <g> tag.
      steps.push({
        index: stepIndex,
        pathData: innerContent.trim(),
        instruction,
      });
    }

    // Sort steps by index to ensure correct reveal order
    return steps.sort((a, b) => a.index - b.index);
  }
}
