import { z } from "zod";

/**
 * @valueObject DrawingStep
 * @immutable
 * @businessConcept A single step in a drawing template.
 */
export const DrawingStepSchema = z.object({
  index: z.number(),
  pathData: z.string(),
  instruction: z.string(),
});

export type DrawingStep = z.infer<typeof DrawingStepSchema>;

/**
 * @valueObject DrawingTemplate
 * @immutable
 * @businessConcept A complete drawing template with all its steps.
 */
export const DrawingTemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  steps: z.array(DrawingStepSchema),
});

export type DrawingTemplate = z.infer<typeof DrawingTemplateSchema>;

/**
 * @valueObject DrawingTemplateSummary
 * @immutable
 */
export const DrawingTemplateSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type DrawingTemplateSummary = z.infer<typeof DrawingTemplateSummarySchema>;
