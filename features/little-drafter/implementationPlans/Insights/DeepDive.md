# Deep Dive: little-drafter Implementation

## Component Integration Map

| Component | Logic Source | Target Path | Integration Points |
| --- | --- | --- | --- |
| **Draft Entity** | `Insights`, `Scenarios` | `src/Draft/Domain/Entities/Draft.ts` | Extends `EntityRoot`. Implements `Start`, `Progress`, `Undo`. |
| **Draft Dispatch** | `Emmett Spec` | `src/Draft/Domain/DraftDispatch.ts` | Bridge between `Draft` entity and Emmett `decide`/`evolve`. |
| **Catalog Service** | `Insights` | `src/Catalog/Application/CatalogService.ts` | Loads SVGs, extracts metadata. |
| **Drawing Session (UI)** | `Insights`, `Success Criteria` | `src/features/drawing/components/DrawingSession.tsx` | Next.js 15, `framer-motion` for pulse. |
| **Audio Service** | `Insights` | `src/features/drawing/services/AudioService.ts` | Web Speech API. |
| **Achievement Proj** | `Insights` | `src/Achievement/Projections/AchievementProjection.ts` | Inline MongoDB projection. |

## Technical Constraints & Standards

### 1. Backend (Emmett + ES-Kit)
- Use `@/es-kit/` for `EntityRoot`, `Outcome`, `EntityRef`.
- Domain events must be immutable.
- MongoDB collection for events: `emt:draft`.
- Read model collection: `draft_read_model`.

### 2. Frontend (Next.js + Tailwind + Framer Motion)
- Use standard layout from `craft-skeleton`.
- Nav bar at the bottom: `h-24` or similar, fixed.
- Pulse animation: `scale: [1, 1.05, 1]`, `transition: { repeat: Infinity }`.
- TTS: `window.speechSynthesis.speak()`.

### 3. SVG Structure
- Groups (`<g>`) with `data-step="N"` and `data-instruction="Text"`.
- Reveal logic: `opacity: stepIndex >= groupStep ? 1 : 0`.

## Verification Deep-Dive
- **AC-01** (Decider): Test via `DeciderSpecification`.
- **AC-09** (Projection): Test via `MongoDBInlineProjectionSpec`.
- **UX**: Visual verification of pulse color `#0000FF`.
