# Response: little-drafter -- Guided Drawing Guidance

**Source Review:** `../00.Questions.little-drafter.md`
**Response Date:** July 6, 2026
**UX Accessibility & Domain Integrity:** Prioritize clear, non-verbal feedback and simple progression triggers to empower 4-year-olds in their physical drawing journey.

---

## Guidance Mechanics (The "Paper Support" Pivot)

### Q1 -- Visual Step Differentiation

**Original Question:** 4-year-olds need to know exactly which new line to draw on their paper. If the whole drawing just appears piece by piece, they might lose track of the "latest" addition.

**Why it matters:** 4-year-olds need to know exactly which new line to draw on their paper. If the whole drawing just appears piece by piece, they might lose track of the "latest" addition.

**Recommended Answer:**
**The new line is rendered in a bright contrasting color (e.g., blue) and pulses once upon appearing.**
This provides an immediate "Look here!" visual cue that distinguishes the new path from the existing drawing context (which should remain in a static, neutral color like black or dark grey).

**Explanation:** Pulsing creates a temporary focal point without permanent distraction. Using a consistent "highlight color" for the current step builds a mental model for the child.

**Alternatives:**
- [x] **A -- Blue pulsing line (RECOMMENDED)**
- [ ] **B -- Flashing stroke.** High visibility but potentially overstimulating.
- [ ] **C -- Scale animation.** The new part grows into place; visually clear but may be harder to map to paper if the shape changes size.

---

### Q2 -- Progression Trigger

**Original Question:** Since there is no on-screen tracing, the app needs a manual signal to move to the next step. Should this be a "Next" button, a "Click anywhere" interaction, or a voice command?

**Why it matters:** Since there is no on-screen tracing, the app needs a manual signal to move to the next step. Should this be a "Next" button, a "Click anywhere" interaction, or a voice command?

**Recommended Answer:**
**Implement a very large, colorful "Next" arrow at the bottom right of the screen.**
The arrow should be a distinct, high-contrast color (e.g., green or yellow) to make it the primary interactive affordance.

**Explanation:** For non-readers, large icons are more intuitive than text buttons. Placing it at the bottom right follows standard "forward" navigation patterns.

**Alternatives:**
- [x] **A -- Large colorful arrow (RECOMMENDED)**
- [ ] **B -- Click anywhere.** Maximizes space but leads to accidental progression during handling.
- [ ] **C -- Voice command.** Hands-free but prone to environment noise interference (e.g., TV, siblings).

---

### Q3 -- Audio Instructions

**Original Question:** Non-readers (4-year-olds) benefit from simple verbal cues (e.g., "Now draw a big round circle for the head"). Should we implement a text-to-speech engine or use pre-recorded clips?

**Why it matters:** Non-readers (4-year-olds) benefit from simple verbal cues (e.g., "Now draw a big round circle for the head"). Should we implement a text-to-speech engine or use pre-recorded clips?

**Recommended Answer:**
**Use a simple Text-to-Speech (TTS) engine for guidance.**
Associate instructions with each SVG path group/layer metadata. When a step is revealed, the TTS reads the corresponding instruction (e.g., "Draw a small circle for the eye").

**Explanation:** TTS is more flexible than pre-recorded clips for a dynamic catalog of drawings and allows for easier localization or instruction tuning.

**Alternatives:**
- [x] **A -- Simple TTS guidance (RECOMMENDED)**
- [ ] **B -- Pre-recorded clips.** Higher "personality" but much higher asset management overhead.
- [ ] **C -- Visual-only.** Lower accessibility for 4-year-olds who may struggle to translate complex lines without verbal reinforcement.

---

### Q4 -- Replay/Undo Interaction

**Original Question:** If a child misses a step or wants to see the animation again, they need an easy way to go back. How should "back" or "replay" be exposed to a toddler?

**Why it matters:** If a child misses a step or wants to see the animation again, they need an easy way to go back. How should "back" or "replay" be exposed to a toddler?

**Recommended Answer:**
**Include a large "Back" arrow at the bottom left of the screen.**
This arrow should be symmetrical to the "Next" arrow but perhaps in a different color (e.g., red or orange) to indicate a "return" or "reverse" action.

**Explanation:** Toddlers understand symmetry and opposites. If one big arrow goes forward, the other big arrow naturally goes back.

**Alternatives:**
- [x] **A -- Large "Back" arrow (RECOMMENDED)**
- [ ] **B -- Replay button.** A circular arrow icon; common but less intuitive than a directional arrow for "previous step".
- [ ] **C -- Shake to undo.** Playful but risks dropping the device or causing physical damage.

---

## Domain & State (Emmett / ES)

### Q5 -- The "Draft" Aggregate Boundaries

**Original Question:** We need to define what a "Draft" represents in the event stream. Is it a single attempt at a drawing? Does a "Draft" have a status (In Progress, Completed, Abandoned)?

**Why it matters:** We need to define what a "Draft" represents in the event stream. Is it a single attempt at a drawing? Does a "Draft" have a status (In Progress, Completed, Abandoned)?

**Recommended Answer:**
**A "Draft" aggregate represents a single drawing session (one attempt at a specific template).**
It will track the `TemplateId`, `CurrentStepIndex`, and `Status` (`in-progress`, `completed`).

> [!WARNING]
> **Framework Alignment**: The term "Aggregate" should be interpreted as an **Emmett Decider**. Implementation will require `initialState`, `decide()`, and `evolve()` functions rather than a class-based `AggregateRoot`.
> **Enum Convention**: Status values MUST use lowercase strings (`in-progress`, `completed`) for serialization and MongoDB compatibility.

**Explanation:** This allows us to resume a specific session if the app is closed and provides a clear boundary for achievement tracking.

**Alternatives:**
- [x] **A -- Single session aggregate (RECOMMENDED)**
- [ ] **B -- Persistent "Sketchpad".** One aggregate per child that tracks all drawings; becomes bloated over time.
- [ ] **C -- Stateless.** No persistence of progress; frustrating if the app restarts.

---

### Q6 -- Reward System Events

**Original Question:** Upon completion, the app should trigger a "Success" state (confetti, sounds). Should this be an explicit event in the stream (`DrawingCompleted`) to track the child's achievements over time?

**Why it matters:** Upon completion, the app should trigger a "Success" state (confetti, sounds). Should this be an explicit event in the stream (`DrawingCompleted`) to track the child's achievements over time?

**Recommended Answer:**
**Emit an explicit `DraftCompleted` event.**
This event will be the trigger for the UI celebration (confetti) and can be used by a projection to increment the child's "Stars" or "Badge" count.

> [!NOTE]
> Renamed from `DrawingCompleted` to `DraftCompleted` to maintain naming consistency with the `Draft` entity.

**Explanation:** Explicit events make for a cleaner projection logic and easier integration with future gamification features (e.g., "Draw 5 things to get a crown").

**Alternatives:**
- [x] **A -- Explicit DrawingCompleted event (RECOMMENDED)**
- [ ] **B -- Implicit completion.** Derived from reaching the last step; harder to trigger side-effects reliably without a state change.
- [ ] **C -- No event.** UI-only celebration; no long-term progress tracking possible.

---

## Content & Assets

### Q7 -- SVG Segmentation Strategy

**Original Question:** How will we define the "steps" in an SVG? Should the developer manually group paths in Illustrator/Inkscape (e.g., Layer 1, Layer 2), or should the app split them automatically?

**Why it matters:** How will we define the "steps" in an SVG? Should the developer manually group paths in Illustrator/Inkscape (e.g., Layer 1, Layer 2), or should the app split them automatically?

**Recommended Answer:**
**Manual grouping and layering in SVGs for maximum quality control.**
Each group (`<g>`) or path will be tagged with a sequential ID or class that the app uses to determine the reveal order.

> [!NOTE]
> **Boundary Note**: The `Draft` decider tracks only the progress index. The actual SVG path data and step metadata are served by the Catalog/Template service and are NOT stored within the `Draft` event stream.

**Explanation:** Automatic splitting often fails on complex shapes or artistic intent. Manual layering ensures that "the head" is drawn before "the eyes" in a way that makes sense for a child.

**Alternatives:**
- [x] **A -- Manual grouping/layering (RECOMMENDED)**
- [ ] **B -- Automatic path splitting.** Faster to create content but results in illogical drawing sequences.
- [ ] **C -- Metadata file mapping.** External JSON mapping paths to steps; flexible but prone to desync with the SVG.

---

## UX & Accessibility

### Q8 -- UI Interaction Model

**Original Question:** Every button is a distraction for a 4-year-old. Should the "Next" interaction be a dedicated UI element (button/arrow) or should we use the "Click anywhere" pattern to maximize drawing area for a 4-year-old?

**Why it matters:** Every button is a distraction for a 4-year-old. Should the "Next" interaction be a dedicated UI element (button/arrow) or should we use the "Click anywhere" pattern to maximize drawing area for a 4-year-old?

**Recommended Answer:**
**Use a dedicated bottom navigation bar for clear affordances.**
The "Back" and "Next" arrows will live in this bar, keeping the main canvas area clear for the drawing reveal.

**Explanation:** A stable, predictable interaction zone (the bottom bar) helps the child focus on the drawing area while knowing exactly where to reach to move forward.

**Alternatives:**
- [x] **A -- Dedicated bottom nav bar (RECOMMENDED)**
- [ ] **B -- Click anywhere.** Cleaner UI but high risk of "phantom clicks" and frustration.
- [ ] **C -- Floating buttons.** Obscures the drawing and feels less "anchored".

---

## Critic Review Notes (Applied July 6, 2026)

### Summary of Adjustments
- **Entity Terminology**: Standardized on "Draft" naming for aggregate/decider and events.
- **Framework Mapping**: Added warnings to map traditional DDD concepts to **Emmett/es-kit** functional patterns.
- **Convention Compliance**: Enforced lowercase string enums for aggregate status.
- **Boundary Clarification**: Explicitly separated "Session State" (`Draft`) from "Template Content" (`SVG metadata`).

### Criticality Audit
- **High**: Framework mismatch (Aggregate vs Decider). Resolved via Warning notes.
- **High**: Enum naming convention. Fixed in-place.
- **Medium**: Event naming consistency. Fixed in-place.

_End of Response-01-little-drafter_
