# Critic Review: Response-01-little-drafter

**Target:** [Response-01-little-drafter.md](file:///c:/work/Crafts/little-drafter/features/little-drafter/implementationPlans/Responses/Response-01-little-drafter.md)
**Critique Date:** July 6, 2026
**Reviewer:** Answer Critic (Auto)

## Executive Summary
The responses are generally high-quality and aligned with the "Paper Drawing" UX constraint. However, there are alignment issues with the target framework (`es-kit`/`Emmett`) and minor violations of project-wide enum conventions.

---

## Severity-Ranked Issues

### 🔴 Critical Issues
*None.*

### 🟡 High Severity Issues

#### 1. Framework Terminology & Pattern Mismatch (Q5)
- **Issue**: The response uses "Aggregate" in a generic DDD sense. `little-drafter` uses `es-kit` which is built on **Emmett**.
- **Impact**: Developers might look for `AggregateRoot` base classes (which don't exist in Emmett) instead of defining `state`, `decide`, and `evolve`.
- **Suggestion**: Reframe "Draft Aggregate" as "Draft Decider". Explicitly mention that it consists of `initialState`, `decide(command, state)`, and `evolve(state, event)`.

#### 2. Enum Convention Violation (Q5)
- **Issue**: `Status` values `InProgress` and `Completed` are PascalCase. `core.md` requires lowercase string values.
- **Impact**: Violation of established project patterns for serialization and read-model consistency.
- **Suggestion**: Use `in-progress` and `completed` as string values.

### 🔵 Medium Severity Issues

#### 1. Event Naming Consistency (Q6)
- **Issue**: Event is named `DrawingCompleted` but the aggregate is named `Draft`.
- **Impact**: Minor confusion in event stream auditing and projection logic.
- **Suggestion**: Rename to `DraftCompleted`.

#### 2. State vs. Content Boundary (Q7)
- **Issue**: Q7 mentions "manual grouping" but Q5 doesn't clarify where this metadata lives.
- **Impact**: Risk of bloated aggregate state if the aggregate is expected to store the SVG paths.
- **Suggestion**: Clarify that the `Draft` aggregate only tracks the `CurrentStepIndex` and `TemplateId`. The actual path data and step definitions live in the `Template` (EcCatalogApi equivalent).

### 🟢 Low Severity Issues

#### 1. TTS Implementation Detail (Q3)
- **Issue**: Suggests TTS but doesn't specify the layer.
- **Impact**: Minor ambiguity.
- **Suggestion**: Clarify that TTS is a frontend-side concern using the Web Speech API, triggered by the `CurrentStepIndex` change in the UI.

---

## Risk Analysis
- **Low Risk**: Most suggestions are naming and terminology corrections.
- **Technical Debt**: Failure to align with Emmett patterns now will lead to significant refactoring when the master plan (Phase 6) attempts to map these answers to code.

## Concrete Improvement Suggestions
1.  Update Q5 to use Emmett terminology.
2.  Update Q5/Q6 to use lowercase string enum values.
3.  Rename `DrawingCompleted` to `DraftCompleted`.
4.  Add a note to Q7 clarifying the "Content vs State" boundary.

---
_End of Critic-01-little-drafter_
