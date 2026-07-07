# Global Feature Full Creation — Combined Plan + Implement

Create master plans (each with embedded unit tests + mandatory integration tests plan), implement, and document the **little-drafter** feature using sub-agents with the combined plan+implement workflow. The parent orchestrates; sub-agents do the work. Each phase is a **single sub-agent call** — the sub-agent creates a plan (Task 1) and immediately implements it (Task 2) without waiting for a parent resume.

**Companion config:** `c:/work/Crafts/little-drafter/features/little-drafter/feature-creation-config.md` — gates, models, and variations (parent reads at run time; not duplicated here).

---

## Commands

| Command | Usage | Behavior |
| --- | --- | --- |
| **init** | Skill `feature-full-creation` | See `.cursor/skills/feature-full-creation/SKILL.md` |
| **run** | `run @c:/work/Crafts/little-drafter/features/little-drafter/feature-creation-workflow.md` | Execute full workflow from Phase 1 |
| **phase N** | `phase 1` (or 2–8.5, 2-A, 0.5, 6A, …) | Resume at specified phase |
| **run-impl** | `run-impl @c:/work/Crafts/little-drafter/features/little-drafter/feature-creation-workflow.md` | Phase 7 auto chain |

---

## Paths

| Key | Value |
| --- | --- |
| DEV_FEATURE_PATH | c:/work/Crafts/little-drafter/features/little-drafter |
| IMPLEMENTATION_PLANS_PATH | c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans |
| MASTER_PLANS_BASE | c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans |
| DEV_SPEC_CONTEXT | Verbatim Objective: Create a craft application that assists 4-year-olds in drawing by revealing parts of an SVG progressively upon each click. [UX Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/03-ux.discovery.md) [Product Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/01-product.discovery.md) |
| DEV_REFERENCE_CONTEXT | [Codebase Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/02-codebase.discovery.md) [Craft Skeleton](file:///c:/work/Crafts/craft-skeleton) |
| IMPLEMENTATION_CONTEXT | Resolved by Phase 8 — see section inserted after Phase 8 |

---

## CRITICAL: Sub-Agent Plan Storage

**Sub-agents MUST write plans in `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/`.**

**Naming**: `XX.SUBJECT.plan.md` — list directory first, next XX, create file. **When iterating:** edit existing plan — do NOT create a new file.

---

## CRITICAL: Sub-Agent Plan Quality

Plans MUST be detailed and analytical — DocRouter findings, scope analysis, key considerations table, per-output content plan, clarifications. A step list alone is NOT acceptable.

---

## CRITICAL: Sub-Agent Context

The parent MUST prepend to every sub-agent prompt:

```
Sub-agent context: You are a sub-agent executing Phase [N] ([Phase Name]) of the feature creation workflow for the little-drafter feature. Read c:/work/Crafts/little-drafter/features/little-drafter/feature-creation-workflow.md to understand the full workflow, your phase's inputs/outputs, and how the parent orchestrates. You are not the parent agent — you execute a single phase and report results back to the parent.

At the end of your plan (Task 1), include a brief "Report to parent" section: (1) what the plan covers, (2) any open design decisions or blocking questions surfaced, (3) what the parent should relay to the user for confirmation.
```

If focused context is enabled in config, parent also injects the phase's FOCUSED CONTEXT block verbatim.

---

## CRITICAL: Sub-Agent Requirement

**Parent MUST use `Task` / `mcp_task`** with `subagent_type: generalPurpose` and `model` from `feature-creation-config.md`.

Parent must NOT run phase work, create/edit outputs, or read master plans / implementation files directly.

---

## CRITICAL: User Feedback Handling

User feedback → resume originating sub-agent (`resume: <agent_id>`). Parent must NOT implement feedback itself. Store agent IDs per phase.

---

## Workflow: Combined Plan + Implement

Gate behavior (auto / review / blocking) is **not** defined here — parent reads `feature-creation-config.md` per [gate-profiles.md](.cursor/skills/feature-full-creation/gate-profiles.md).

**Standard one-shot phases:** sub-agent Task 1 + Task 2 in one call; parent applies resolved gate after completion.

**Blocking phases (3 by default):** no sub-agent — parent displays handoff and waits.

**Auto chains (1B, 2B, 7, 8 by default):** parent proceeds without user confirm between tasks/phases.

---

## Phase 0.5 — Research Octopus (Discovery)

**Type**: Main-agent driven — **no `mcp_task`**. Parent invokes the `research-octopus` skill directly.

**Purpose**: Ground question formulation in live codebase reality before Phase 1 starts. The developer cannot ask precise questions without knowing which bounded contexts, integration points, and patterns are already in play.

---

### Main-agent instructions

#### Step 1 — DocRouter scan (BLOCKING)

Follow `.cursor/rules/doc-router-scan.mdc` before any source-code research.

1. Start from `Documentation/_GlobalAgentDocRouter.md` (or a user-specified `*DocRouter.md`).
2. Traverse all DocRouters relevant to the feature's bounded contexts and integration surfaces — go as deep as needed.
3. Present the context summary and **wait for user confirmation** before proceeding to Step 2.
4. User may add/remove DocRouters before dispatch.

#### Step 2 — Derive inquiry

From the DocRouter scan results and `DEV_SPEC_CONTEXT`, formulate a targeted research inquiry:

- What bounded contexts will this feature touch?
- What integration surfaces, shared infrastructure, or cross-BC data flows are involved?
- What patterns (aggregates, handlers, projections, HTTP clients, middleware chains) are already established?

Inquiry form:
> *"Map the existing [bounded contexts / infrastructure] that little-drafter will interact with. Surface integration constraints, established patterns, and key code entry points the feature must be aware of."*

#### Step 3 — Run research-octopus skill

Read `.cursor/skills/research-octopus/SKILL.md` fully. Then:

- Follow Steps 3–7 from the skill (skip DocRouter scan — already done in Step 1 above; use its output as the confirmed DocRouter list for the dispatch plan)
- Spawn 3–6 clusters covering the relevant bounded contexts and integration surfaces
- Write `_dispatch.md`, wait for all cluster files, then write `_index.md`

#### Step 4 — Present and wait

Present `{runDir}/_index.md` to the user with a brief per-cluster finding summary.

**Wait for user confirmation** (`proceed`, `yes`, follow-up cluster requests) before Phase 1 starts.

---

### Outputs

- `c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_dispatch.md`
- `c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/NN-{slug}.research.md` (one per cluster)
- `c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_index.md`

---

### Persistent reference

After user confirms, append to the workflow file under a `## Research Context` section:

```
## Research Context

- Discovery (Phase 0.5): c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_index.md
```

Phase 1 sub-agents may read this index as additional context when formulating questions.

---

**Handoff**: "Phase 0.5 complete. Review `_index.md`. Request follow-up clusters or reply `proceed` to start Phase 1 (Premasterplan Questions)."


---

## Phase 1 — Premasterplan (Questions)

**Rule**: `.cursor/rules/tech-pre-masterplan.mdc`  
**Outputs**: `premasterplan-doc-router-scan-results.md`, `00.Questions.[Feature].md`  
**Context**: Dev spec: Verbatim Objective: Create a craft application that assists 4-year-olds in drawing by revealing parts of an SVG progressively upon each click. [UX Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/03-ux.discovery.md) [Product Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/01-product.discovery.md) | Reference: [Codebase Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/02-codebase.discovery.md) [Craft Skeleton](file:///c:/work/Crafts/craft-skeleton)

**Combined prompt** (single Task/mcp_task call):

```


Task 1: Plan
Create a detailed analytical plan for running the premasterplan phase that produces:
1. DocRouter scan results (premasterplan-doc-router-scan-results.md)
2. Question files (00.Questions.[Feature].md)

Use tech-pre-masterplan.mdc. Target: little-drafter feature. Dev session folder: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans.
Dev spec context: Verbatim Objective: Create a craft application that assists 4-year-olds in drawing by revealing parts of an SVG progressively upon each click. [UX Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/03-ux.discovery.md) [Product Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/01-product.discovery.md).
Reference context: [Codebase Discovery](file:///c:/work/Crafts/little-drafter/orchestration/discovery/02-codebase.discovery.md) [Craft Skeleton](file:///c:/work/Crafts/craft-skeleton).
STOP after creating question files — do NOT create Instructions or Scenarios yet.

Plan quality: Your plan must be detailed and analytical. Do not just list steps — read the spec and DocRouter now and include actual findings in the plan. For each output file, describe the specific content, decisions, and question areas you will cover. The plan file is the primary artifact the user validates.

Plan storage: Write your plan to c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Before creating: list files in subAgentPlans/ to determine next XX. Create XX.SUBJECT.plan.md (e.g. 01.PremasterplanQuestions.plan.md). When revising/iterating on the same task: edit the existing plan file, do not create a new one.

At the end of your plan, include a brief "Report to parent" section: (1) what the plan covers, (2) any open design decisions or blocking questions surfaced, (3) what the parent should relay to the user for confirmation.

Task 2: Implement
Execute the plan you created in Task 1 immediately — do not wait for confirmation. Run the premasterplan phase: DocRouter scan + question files only.
Rule: .cursor/rules/tech-pre-masterplan.mdc
Output folder: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans
Stop after 00.Questions files — do NOT create Instructions or Scenarios.
```

**Handoff**: Proceed to Phase 1B.


---

## Phase 1B — Question Critics (Auto)

**Template**: `.cursor/rules/templates/Global/tech-premasterplan/premasterplan-questions-critics.md`  
**Inputs**: Question files from Phase 1, `premasterplan-doc-router-scan-results.md`  
**Outputs**: `Questions/Critics/QuestionCritic-[NN]-[Feature].md` + updated question files (in-place)

**Combined prompt** (single Task/mcp_task call — auto):

```


Task 1: Plan
You are an independent question critic. Your job is to:
1. Review the premasterplan Question files created in Phase 1
2. Identify questions that should be DELETED (convention-prescribed, obvious, redundant, or already answered by the DocRouter scan) or ADJUSTED (too broad, wrong framing)
3. Generate critic files documenting all verdicts
4. Apply the critic feedback to prune the original Question files

FUNCTIONAL CONTEXT: This is a FEATURE CREATION workflow. Questions about patterns already established in the codebase (per DocRouter scan) should be DELETED.

TECHNICAL CONTEXT — If this feature involves DDD components (aggregates, commands, projections, events), read this reference FULLY before critiquing:
- Documentation/4-Reference/Backend/DDD/DDDClassesRef.md — Exact class/interface names, source paths, and selection guides for all framework classes; use to identify questions that are already answered by the framework's class structure (e.g., which handler interface to use, which ProjectionResult method to return, correct @SerializableType arity)

CRITIC TEMPLATE: .cursor/rules/templates/Global/tech-premasterplan/premasterplan-questions-critics.md

DocRouter scan: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/premasterplan-doc-router-scan-results.md

Input: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.Questions.*.md
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Questions/Critics/ + pruned Question files in c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/

Plan storage: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/ — next XX.SUBJECT.plan.md

At the end of your plan, include "Report to parent": (1) what the plan covers, (2) any open questions.

Task 2: Implement
Execute the plan immediately. Generate critics, apply to Question files (DELETE/ADJUST/KEEP, renumber, add "## Critic Review Applied" section).

Report: critic files created, questions deleted/adjusted/kept, Question files modified.
```

**Handoff**: Proceed to Phase 2 (or Phase 2-A if dual enabled for Phase 2).


---

## Phase 2 — Premasterplan Answers

**Rule**: `.cursor/rules/tech-pre-masterplan-answers.mdc`  
**Template**: `.cursor/rules/templates/Global/tech-premasterplan/premasterplan-answers.md`  
**Inputs**: Question files, `premasterplan-doc-router-scan-results.md`  
**Outputs**: `Responses/Response-[NN]-[Feature].md`

**Combined prompt** (single Task/mcp_task call):

```


Task 1: Plan
Create a detailed analytical plan for answering premasterplan question files using tech-pre-masterplan-answers.mdc.
Inputs: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.Questions.*.md, premasterplan-doc-router-scan-results.md
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/

Plan quality: Read question files now; summarize each area and answer approach; alternatives and decision points per Response file.

Plan storage: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/ — next XX.SUBJECT.plan.md

Report to parent: (1) plan coverage, (2) open decisions, (3) relay to user.

Task 2: Implement
Execute immediately. Answer questions; create Response files.
Rule: .cursor/rules/tech-pre-masterplan-answers.mdc
Question files: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.Questions.*.md
Doc router scan: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/premasterplan-doc-router-scan-results.md
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/
```

**Handoff**: Proceed to Phase 2B.


---

## Phase 2B — Answer Critics (Auto)

**Template**: `.cursor/rules/templates/Global/tech-premasterplan/premasterplan-asnwers-critics.md`  
**Inputs**: Response files from Phase 2  
**Outputs**: `Responses/Critics/Critic-[NN]-[Feature].md` + enriched Response files (in-place)

**Combined prompt** (single Task/mcp_task call — auto):

```


Task 1: Plan
Independent critic: (1) review Response files, (2) generate critic files, (3) enrich Responses in-place.

FUNCTIONAL CONTEXT: Responses drive master plans and implementation — focus on architectural quality and integration.

TECHNICAL CONTEXT — If DDD: read Documentation/4-Reference/Backend/DDD/DDDClassesRef.md FULLY.

CRITIC TEMPLATE: .cursor/rules/templates/Global/tech-premasterplan/premasterplan-asnwers-critics.md

Input: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/Critics/ + enriched Responses/

Plan storage: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/

Report to parent: (1) plan coverage, (2) open questions.

Task 2: Implement
STEP 1 — Generate critics (two passes per template):
1. Read ALL Response files in c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/ FULLY.
2. Read the critic template (.cursor/rules/templates/Global/tech-premasterplan/premasterplan-asnwers-critics.md).
3. For each Response file, create a corresponding critic file in c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/Critics/:
   - File naming: Critic-[NN]-[Feature].md (matching the Response file numbering)
   - Each critic file must contain: severity-ranked issues, concrete improvement suggestions, and risk analysis

STEP 2 — Apply: add "## Critic Review Notes", [!WARNING] for Critical/High, preserve original content.

Report: issues by severity, files modified.
```

**Handoff**: Proceed to Phase 3 (user feedback).


---

## Phase 3 — User Feedback (BLOCKING)

**No sub-agent.** Parent waits for user to review Response files (enriched by Phase 2B) and mark decisions.

**Handoff message**:

"Please review Response files in `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/` (enriched with critic feedback from Phase 2B). Check [x] alternatives, fill **Your Decision**. Reply `insights ready` or `Continue` when done."

**full-auto note**: If gate resolved to `auto`, parent logs the above as optional post-hoc review and proceeds to Phase 4. Where **Your Decision** is blank, Phase 4 treats the recommended alternative (first checked option, or `[Synthesis]` when dual-model) as the decision — see `.cursor/skills/feature-full-creation/gate-profiles.md` (`full-auto` profile).


---

## Phase 4 — Answers to Insights

**Rule**: `.cursor/rules/tech-pre-masterplan-answers-to-insights.mdc`  
**Template**: `.cursor/rules/templates/Global/tech-premasterplan/premasterplan-insights.md`  
**Inputs**: Completed Response files (user decisions filled)  
**Outputs**: `Insights/DevInsights.md`, `Insights/DeferredItems.md`

**Combined prompt**:

```


Task 1: Plan
Create a detailed analytical plan for distilling Response files into DevInsights.md and DeferredItems.md using tech-pre-masterplan-answers-to-insights.mdc.
Inputs: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/ (user decisions must be filled)
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Insights/

Plan quality: Your plan must be detailed and analytical. Read the Response files now and include a summary of each user decision captured and how it will be distilled into DevInsights vs. DeferredItems. Describe the key insight groupings you will create.

Plan storage: Write your plan to c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Before creating: list files in subAgentPlans/ to determine next XX. Create XX.SUBJECT.plan.md (e.g. 04.AnswersToInsights.plan.md). When revising/iterating on the same task: edit the existing plan file, do not create a new one.

At the end of your plan, include a brief "Report to parent" section: (1) what the plan covers, (2) any open design decisions or blocking questions surfaced, (3) what the parent should relay to the user for confirmation.

Task 2: Implement
Execute the plan you created in Task 1 immediately — do not wait for confirmation. Create DevInsights.md and DeferredItems.md from the Response files.
Rule: .cursor/rules/tech-pre-masterplan-answers-to-insights.mdc
Input: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Insights/
```

**Handoff**: Proceed to Phase 5.


---

## Phase 5 — Premasterplan (Instructions & Scenarios)

**Rule**: `.cursor/rules/tech-pre-masterplan.mdc`  
**Template**: `.cursor/rules/templates/Global/tech-premasterplan/premasterplan-zfinal.md`  
**Inputs**: DevInsights, DeferredItems, doc router scan, question files  
**Outputs**: `00.Instructions.master.md`, `00.Scenarios.master.md`

**Combined prompt**:

```


Task 1: Plan
Create a detailed analytical plan for creating 00.Instructions.master.md and 00.Scenarios.master.md.
Use tech-pre-masterplan.mdc — Instructions & Scenarios portion only (skip DocRouter scan and questions).
Inputs: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Insights/DevInsights.md, DeferredItems.md, premasterplan-doc-router-scan-results.md, 00.Questions.*.md
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/

Plan quality: Your plan must be detailed and analytical. Read DevInsights.md now and include a summary of how each insight maps to specific instruction directives and scenario cases. Describe the key scenario groupings you will author.

Plan storage: Write your plan to c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Before creating: list files in subAgentPlans/ to determine next XX. Create XX.SUBJECT.plan.md (e.g. 05.InstructionsScenarios.plan.md). When revising/iterating on the same task: edit the existing plan file, do not create a new one.

At the end of your plan, include a brief "Report to parent" section: (1) what the plan covers, (2) any open design decisions or blocking questions surfaced, (3) what the parent should relay to the user for confirmation.

Task 2: Implement
Execute the plan you created in Task 1 immediately — do not wait for confirmation. Create 00.Instructions.master.md and 00.Scenarios.master.md.
Rule: .cursor/rules/tech-pre-masterplan.mdc
Skip DocRouter scan and questions — use existing files. Create Instructions and Scenarios from DevInsights.
Inputs: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Insights/, premasterplan-doc-router-scan-results.md
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/
```

**Handoff**: Proceed to Phase 6 (or 6A if split-abc).


---

## Phase 5.5 — Success Criteria

**Inputs**: `00.Instructions.master.md`, `00.Scenarios.master.md`, `Insights/DevInsights.md`
**Outputs**: `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.SuccessCriteria.md`

**Combined prompt**:

```


Task 1: Plan
Create a detailed analytical plan for producing 00.SuccessCriteria.md.

Read .cursor/prompts/success_criteria.md for the exact document structure, section rules, and quality criteria.

Inputs:
- c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.Instructions.master.md
- c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.Scenarios.master.md
- c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Insights/DevInsights.md
- c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/premasterplan-doc-router-scan-results.md (if present)

The output document must contain exactly these five sections:
1. **Narrative End-State** — What the feature looks, feels, or behaves like when complete, from the consumer's perspective (API caller, developer integrating it, business stakeholder). Flowing prose, not bullets. Makes the reader able to visualize the finished product.
2. **Happy-Path Walkthrough** — Step-by-step sequence of the primary use case: inputs → processing steps → outputs → side effects / events emitted.
3. **Acceptance Checklist** — Numbered list of observable, verifiable behaviors a developer or reviewer would check off. Each item must be falsifiable (pass/fail, not vague). These items are used in Phase 11.5 to verify test coverage.
4. **Key Secondary Scenarios** — Must-work edge cases beyond the happy path that the feature must handle correctly.
5. **Explicit Out-of-Scope** — What is NOT built in this iteration (deferred items, excluded behaviors, non-goals).

Plan quality: Read all three input files now. In your plan, describe: what the narrative will convey, draft at least 5 acceptance checklist items, and identify the key secondary scenarios from the Scenarios file.

Plan storage: Write your plan to c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Before creating: list files in subAgentPlans/ to determine next XX. Create XX.SuccessCriteria.plan.md. When revising/iterating: edit the existing file, do not create a new one.

At the end of your plan, include a brief "Report to parent" section: (1) what the output document will cover, (2) any open scope questions or ambiguities surfaced, (3) what the parent should relay to the user for confirmation.

Task 2: Implement
Execute the plan immediately — do not wait for confirmation. Write c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.SuccessCriteria.md following .cursor/prompts/success_criteria.md exactly.

The acceptance checklist must be numbered (Phase 11.5 uses these numbers for the coverage matrix) and each item must be independently verifiable. Avoid items like "the feature works correctly" — each must describe a specific observable behavior with a falsifiable condition.
```

**Handoff**: "Phase 5.5 complete. Review `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.SuccessCriteria.md`. The acceptance checklist will be used in Phase 11.5 to verify test coverage. Reply `proceed` when satisfied."


---

## Phase 5.6 — Research Octopus (Deep Dive)

**Type**: Main-agent driven — **no `mcp_task`**. Parent invokes the `research-octopus` skill directly.

**Purpose**: After feature scope is crystallized (Instructions + Scenarios + Success Criteria), do a targeted deep-dive into integration constraints and architectural context before master plans are written. Prevents master plans from being written in a vacuum.

---

### Main-agent instructions

#### Step 1 — Seed context from existing scan results

Before running any new research, read the following if they exist:

1. **`c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/premasterplan-doc-router-scan-results.md`** — the DocRouter scan performed during Phase 1. This contains the full architectural context and cross-BC dependency map already compiled. Use this as the primary seed — do NOT re-scan DocRouters that are already fully covered here.

2. **Phase 0.5 research index** (if present in `## Research Context` section of the workflow file) — cluster findings from the Discovery run. Identify gaps and deeper questions it surfaced.

3. **`c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.SuccessCriteria.md`** — the acceptance checklist reveals which technical areas need deep-dive before implementation.

#### Step 2 — DocRouter scan (incremental, not a full repeat)

Based on gaps identified in Step 1:

- If new bounded contexts or infrastructure layers surfaced in Instructions/Scenarios/SuccessCriteria that were NOT covered by the Phase 1 DocRouter scan, follow `.cursor/rules/doc-router-scan.mdc` for those specific areas only.
- If the Phase 1 scan already covers all relevant areas, **skip this step** and note it in the dispatch plan.
- Present incremental DocRouter findings to the user only if new routers were scanned. Otherwise, state "Existing scan results cover all relevant areas — proceeding to dispatch."

#### Step 3 — Derive inquiry

From the combined context (Step 1 + Step 2), formulate the deep-dive inquiry:

- What specific implementation patterns, existing classes, or infrastructure must the feature integrate with?
- What integration contracts (interfaces, event schemas, HTTP clients, DI registrations) must the feature honor?
- Are there performance, consistency, or ordering constraints visible in the existing code?
- What technical questions does the acceptance checklist raise that Phase 1 research did not answer?

Inquiry form:
> *"Given the planned little-drafter scope (per 00.Instructions + 00.Scenarios + 00.SuccessCriteria), deeply map the integration points, patterns, and constraints in [specific areas] that master plan authors need to know."*

#### Step 4 — Run research-octopus skill

Read `.cursor/skills/research-octopus/SKILL.md` fully. Then:

- Follow Steps 3–7 from the skill, using the combined context as the confirmed DocRouter list
- Spawn 3–6 focused clusters on integration boundaries, key infrastructure, and pattern details
- Do not duplicate Phase 0.5 clusters — go deeper on specifics or cover newly surfaced areas
- Write `_dispatch.md`, wait for all cluster files, then write `_index.md`

#### Step 5 — Present and wait

Present `{runDir}/_index.md` to the user.

**Wait for user confirmation** before Phase 6 starts.

---

### Outputs

- `c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_dispatch.md`
- `c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/NN-{slug}.research.md` (one per cluster)
- `c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_index.md`

---

### Phase 6 integration

After user confirms, append the Deep Dive index to `## Research Context` in the workflow file:

```
- Deep Dive (Phase 5.6): c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_index.md
```

Then inject into the Phase 6 sub-agent prompt:

```
Research context (read _index.md before planning master plans):
- Phase 1 DocRouter scan: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/premasterplan-doc-router-scan-results.md
- Deep Dive index: c:/work/Crafts/little-drafter/features/little-drafter/research/octopus/{timestamp}/_index.md
```

---

**Handoff**: "Phase 5.6 complete. Review `_index.md`. Request follow-up clusters or reply `proceed` to start Phase 6 (Master Plans)."


---

## Phase 6 — Master Plans

**Rule**: `.cursor/rules/tech-masterplan.mdc`  
**Template**: `.cursor/rules/templates/Global/tech-masterplan/masterplan.md`  
**Inputs**: 00.Instructions.master.md, 00.Scenarios.master.md, DevInsights  
**Outputs**: `01.Summary.master.md`, `02-NN.*.master.md` (each including unit tests), `NN.IntegrationTests.master.md`, Documentation, Visuals, ADR, checkmarks, notes

**Combined prompt**:

```


Task 1: Plan
Create a detailed analytical plan for creating all master plan files using tech-masterplan.mdc.
Inputs: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/00.Instructions.master.md, 00.Scenarios.master.md, Insights/DevInsights.md
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/

Plan quality: Your plan must be detailed and analytical. Read the Instructions and Scenarios files now and include a summary of what each master plan file will cover, key architectural decisions to document in the ADR, and any cross-cutting concerns to address.

CRITICAL — UNIT TESTS IN EACH MASTER PLAN:
Every component master plan (02-NN.*.master.md) MUST include a "## Unit Tests" section that specifies:
- Which unit test file(s) to create for that component
- Test groups/scenarios covering the component's behavior
- Mocks, fixtures, and test patterns to use
- Reference to existing test patterns in the codebase (from DocRouter findings)
When Phase 7 implements a master plan, it implements BOTH the component AND its unit tests in the same sub-agent call. Unit tests are NOT a separate phase — they are part of each component's implementation scope.

CRITICAL — MANDATORY INTEGRATION TESTS MASTER PLAN:
You MUST always create a dedicated integration tests master plan as the LAST numbered master plan file (e.g., if you have 02-05 component plans, create 06.IntegrationTests.master.md). This plan covers:
- Integration/pipeline tests for the feature (DI container, HTTP endpoints, cross-component flows)
- End-to-end scenarios that span multiple components
- Test infrastructure setup (test server, database fixtures, etc.)
This master plan is implemented in Phase 7 like any other master plan, as the last implementation task.

Plan storage: Write your plan to c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Before creating: list files in subAgentPlans/ to determine next XX. Create XX.SUBJECT.plan.md (e.g. 06.MasterPlans.plan.md). When revising/iterating on the same task: edit the existing plan file, do not create a new one.

IMPORTANT — In your "Report to parent" section, you MUST include an ordered list of all feature master plan files created that require implementation. List all NN.*.master.md files EXCLUDING: 01.Summary.master.md, Documentation, Visuals, ADR, notes, and checkmarks files. The integration tests master plan MUST be the last item. Format:
IMPLEMENTATION_TASK_LIST:
- 02.ComponentName.master.md (includes unit tests)
- 03.AnotherComponent.master.md (includes unit tests)
- ...
- NN.IntegrationTests.master.md

At the end of your plan, include a brief "Report to parent" section: (1) what the plan covers, (2) the IMPLEMENTATION_TASK_LIST, (3) any open design decisions or blocking questions surfaced, (4) what the parent should relay to the user for confirmation.

Task 2: Implement
Execute the plan you created in Task 1 immediately — do not wait for confirmation. Create all master plan files. Each component master plan MUST include its "## Unit Tests" section. The integration tests master plan MUST be created last.
Rule: .cursor/rules/tech-masterplan.mdc
Inputs: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/ (Instructions, Scenarios, Insights must exist)
Output: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/

IMPORTANT — In your completion report, you MUST include the final ordered list of feature master plan files that require implementation. List all NN.*.master.md files EXCLUDING: 01.Summary.master.md, Documentation, Visuals, ADR, notes, and checkmarks files. Integration tests master plan MUST be last. Format:
IMPLEMENTATION_TASK_LIST:
- 02.ComponentName.master.md (includes unit tests)
- ...
- NN.IntegrationTests.master.md
```

**Handoff**: Phase 6 complete. Use `run-impl` for Phase 7.


---

## Phase 7 — Implementation (Auto One-Shot Mode)

**Mode**: Auto one-shot per task — gate from config (default `auto`).

### Discovery sub-agent (cold start)

```
Sub-agent context: Phase 7 Discovery for little-drafter. Read c:/work/Crafts/little-drafter/features/little-drafter/feature-creation-workflow.md.

List all master plan files in c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/ requiring implementation. Include NN.*.master.md EXCLUDING 01.Summary.master.md and files with Documentation, Visuals, ADR, notes, or checkmarks in the name.

Return:
IMPLEMENTATION_TASK_LIST:
- [filename1]
- ...
```

### Combined prompt (per task)

```


Task 1: Plan — Implement [TASK_NAME] from c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/[MASTER_PLAN_FILE]. Read @CursorPrompts/commands/implement_plan.md and master plan first. Brief structured plan (3–7 bullets). Plan storage: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Report to parent.

Task 2: Implement — Execute immediately. Target: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/[MASTER_PLAN_FILE]. Do not run tests at end.
```

**Auto-proceed**: Log `[Task N complete: name]` → next task. No user confirm between tasks.

**Handoff**: Phase 7 complete → Phase 8.


---

## Phase 8 — Resolve Implementation Context (Auto)

**Purpose**: Extract implementation context; insert `## Implementation Context` into workflow file; verify test plan dirs.

**Combined prompt**:

```


Task 1: Plan — Read c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/ master plans (01.Summary, 02-NN feature plans, checkmarks) and referenced source. Build structured IMPLEMENTATION_CONTEXT (Components, Files, Decisions, Integration, Dependencies, Deviations). Update c:/work/Crafts/little-drafter/features/little-drafter/feature-creation-workflow.md with ## Implementation Context after this Phase 8 section. Verify {{TEST_PLANS_PATH}}/ and subAgentPlans/. Plan storage: c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/.

Task 2: Implement — Execute plan. Insert section before Phase 9. Report counts and confirmations.
```

**Handoff**: Proceed to Phase 9.


---

## Phase 8.5 — Drift Validation (Implementation)

**Inputs**: All `NN.*.master.md` feature plan files in `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/`, `master.checkmarks.md`, actual source code files referenced in those plans
**Outputs**: `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/drift-validation-impl.md`, `## Drifts` section appended to each drifted master plan file

**Combined prompt**:

```


Task 1: Plan
Read .cursor/prompts/drift_validation_impl.md for the exact document structure, drift definition, reason categories, and quality criteria.

Create a plan to validate implementation against master plans.

For each feature master plan file (02-NN.*.master.md EXCLUDING: 01.Summary.master.md, Documentation, Visuals, ADR, notes, checkmarks), you will:
1. Read the master plan fully
2. Locate and read the source code files it specifies
3. Compare: does what was implemented match what the plan specified?
4. Assign a verdict: COMPLIANT or DRIFT

A DRIFT is any behavioral, structural, or interface difference between plan and code that is NOT already documented in an existing `## Drifts` section of the master plan. Minor cosmetic naming differences are not drifts. Structural changes, missing behaviors, added behaviors, or changed contracts are drifts.

Drift reason categories:
- `constraint discovered` — codebase reality made the plan approach infeasible
- `better pattern found` — a cleaner implementation pattern was available
- `ambiguity resolved` — an unclear spec item was interpreted during implementation
- `scope change` — explicit decision to add or remove scope
- `other` — requires explanation

Plan storage: Write your plan to c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/subAgentPlans/. Before creating: list files in subAgentPlans/ to determine next XX. Create XX.DriftValidationImpl.plan.md. When revising: edit existing, do not create new.

At the end of your plan, include a brief "Report to parent" section: (1) master plan files to validate, (2) expected scope, (3) any obvious drift areas already visible from the implementation context.

Task 2: Implement
Execute the plan immediately — do not wait for confirmation.

STEP 1 — VALIDATE each feature master plan:
- Read the plan and the source code it references
- Compare specified vs implemented behavior
- Verdict per plan: COMPLIANT or DRIFT
- For each DRIFT: description, reason category (with explanation), impact on other components (or "none")

STEP 2 — WRITE CONSOLIDATED REPORT:
Write c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/drift-validation-impl.md:

```markdown
# Drift Validation — Implementation

**Run**: [timestamp]
**Plans validated**: N  **Compliant**: N  **With drifts**: N

## Summary
[One paragraph overview]

## Per-Plan Results

### [NN.PlanName.master.md] — COMPLIANT
[One sentence confirmation]

### [NN.PlanName.master.md] — DRIFT
**Drift 1**: [description]
**Reason**: [category] — [explanation]
**Impact**: [affected components or "none"]
```

STEP 3 — ENRICH DRIFTED MASTER PLANS:
For each master plan with at least one DRIFT:
- Append a `## Drifts` section at the end of the file (if not already present)
- Add each drift as:
  ```
  **Drift**: [description]
  **Reason**: [category] — [explanation]
  **Impact**: [other tasks affected or "none"]
  ```
- Do NOT modify existing plan content — only append

Report: plans validated, compliant count, drift count, master plan files enriched.
```

**Handoff**: "Phase 8.5 complete. Review `c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/drift-validation-impl.md`. Confirm drifts are acceptable or flag items for rework. Reply `proceed` to continue to Phase 9 (Test Pre-Masterplan)."


---

## Parent Agent Quick Reference

| Action | Tool |
| --- | --- |
| Launch sub-agent | `Task` / `mcp_task` — `generalPurpose`, `model` from config |
| Resume feedback | `resume: <agent_id>` |
| Discovery (Phase 7 cold start) | sub-agent lists master plan files |

Parent must NOT run phases or read implementation files directly.

---

## Notes

- Gates and models: edit `feature-creation-config.md` only
- Phase 8 inserts `## Implementation Context` below Phase 8 definition
- Phase 3: no sub-agent (unless gate overridden to auto)
- Phase 7: dynamic task list from prior phase report or discovery
- Documentation updates: via master plans in Phase 7, no separate doc phase

---

## Suggested User Prompts

**Full workflow:** "Create master plans (with unit tests and integration tests), implement, and document little-drafter using the combined plan+implement workflow. Use Task/mcp_task for each phase. Read feature-creation-config.md for gates and models. Do NOT run phases yourself. Start Phase 1."

**Phase 7:** "Run Phase 7 in auto one-shot mode via mcp_task. Brief plan summaries + task completions only."
