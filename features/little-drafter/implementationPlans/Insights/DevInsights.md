# Dev Insights: little-drafter

**Sources:** Response-01-little-drafter.md
**Generated:** July 06, 2026
**Summary:** 8 active decisions across 6 implementation components

---

## Overview

| Component | Decisions | Source Response(s) |
| --- | --- | --- |
| `DraftDecider` | 1 | `Response-01-little-drafter.md` |
| `DraftEvents` | 1 | `Response-01-little-drafter.md` |
| `DrawingCatalog` | 1 | `Response-01-little-drafter.md` |
| `NavigationUI` | 3 | `Response-01-little-drafter.md` |
| `DrawingGuidance` | 2 | `Response-01-little-drafter.md` |
| `AchievementSystem` | 1 | `Response-01-little-drafter.md` |

---

## DraftDecider

> The core state management for a drawing session, implemented as an Emmett Decider.

### The "Draft" Aggregate Boundaries ← Q5 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Single session aggregate (RECOMMENDED)
**Key Detail:**
A "Draft" represents a single drawing session (one attempt at a specific template). It tracks `TemplateId`, `CurrentStepIndex`, and `Status`. 
- **Implementation**: Use Emmett `initialState`, `decide()`, and `evolve()` functions.
- **Enums**: Status values MUST be lowercase strings: `in-progress`, `completed`.
**Affects:** `DraftDecider`

---

## DraftEvents

> Domain events emitted by the Draft decider.

### Reward System Events ← Q6 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Explicit DrawingCompleted event (RECOMMENDED)
**Key Detail:**
Emit an explicit `DraftCompleted` event when the final step of a drawing is finished. This event signals the end of the session and triggers celebration/achievement logic.
**Affects:** `DraftEvents`

---

## DrawingCatalog

> Metadata and content structure for available drawings.

### SVG Segmentation Strategy ← Q7 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Manual grouping/layering (RECOMMENDED)
**Key Detail:**
SVGs must be manually grouped (`<g>`) or layered in the design tool. Each group/path is tagged with a sequential ID or class to determine reveal order. The `Draft` decider only tracks the index; the catalog service serves the actual path data.
**Affects:** `CatalogService` / `DrawingTemplate`

---

## NavigationUI

> The interactive controls used by the child to navigate the drawing steps.

### Progression Trigger ← Q2 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Large colorful arrow (RECOMMENDED)
**Key Detail:**
Implement a very large, colorful "Next" arrow (e.g., green or yellow) as the primary forward navigation affordance.
**Affects:** `NavigationBar` / `NextArrow`

### Replay/Undo Interaction ← Q4 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Large "Back" arrow (RECOMMENDED)
**Key Detail:**
Include a large "Back" arrow symmetrically opposed to the "Next" arrow, using a different color (e.g., red or orange).
**Affects:** `NavigationBar` / `BackArrow`

### UI Interaction Model ← Q8 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Dedicated bottom navigation bar (RECOMMENDED)
**Key Detail:**
Place the "Back" and "Next" arrows within a dedicated bottom navigation bar to provide a stable, predictable interaction zone and keep the canvas clear.
**Affects:** `MainLayout` / `NavigationBar`

---

## DrawingGuidance

> Visual and auditory cues that guide the child through the drawing process.

### Visual Step Differentiation ← Q1 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Blue pulsing line (RECOMMENDED)
**Key Detail:**
The latest revealed line/path must be rendered in a bright contrasting color (blue) and pulse once to provide a "Look here!" visual cue.
**Affects:** `SVGAnimationLogic`

### Audio Instructions ← Q3 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Simple TTS guidance (RECOMMENDED)
**Key Detail:**
Use a Text-to-Speech (TTS) engine to read verbal instructions associated with each SVG step (e.g., "Draw a small circle for the eye"). Instructions are stored as metadata in the SVG path groups.
**Affects:** `AudioGuidanceService` / `TTSProvider`

---

## AchievementSystem

> Projections and logic for tracking and rewarding child progress.

### Reward System Events (Projection) ← Q6 · Response-01-little-drafter

**Decision:** **Validated**
**Chosen:** A -- Explicit DrawingCompleted event (RECOMMENDED)
**Key Detail:**
A projection listens for the `DraftCompleted` event to increment "Stars" or "Badge" counts for the child.
**Affects:** `AchievementProjection`

---

_End of DevInsights — little-drafter_
