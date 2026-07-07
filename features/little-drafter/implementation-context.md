---
type: Reference
title: Implementation Context - little-drafter
description: Summary of the implemented components, patterns, and verification for the little-drafter feature.
tags: [implementation, context, summary]
timestamp: 2026-07-06T16:05:00Z
---

# Implementation Context: little-drafter

## Overview
The **little-drafter** feature provides a progressive SVG reveal system to assist toddlers (4-year-olds) in drawing on paper. It uses a multi-sensory approach with visual pulse cues and TTS audio guidance.

## Architecture
- **Backend**: 
  - `DraftDecider`: Core domain logic for session management and step progression.
  - `CatalogService`: SVG template loading and metadata parsing (`data-step`, `data-instruction`).
  - `AchievementProjection`: Tracks drawing completions and awards stars using Emmett/MongoDB projections.
  - `es-kit`: Custom DDD-lite framework bootstrapped from the skeleton.
- **Backend Infrastructure**:
  - `DraftTestBuilder`: Simplifies test setup for Draft sessions.
- **Frontend**:
  - `DrawingSession`: React container for state and audio coordination.
  - `DrawingCanvas`: SVG renderer with `framer-motion` pulse animations.
  - `AudioService`: Web Speech API wrapper for kid-friendly verbal instructions.

## Key Patterns
- **Emmett/ES-Kit**: Functional DDD with Deciders and Event Sourcing.
- **Outcome Pattern**: `Outcome<T>` for domain results (never throw).
- **SVG Metadata**: Custom `data-step` and `data-instruction` attributes in SVG groups.
- **Kid-Friendly UI**: High contrast, large targets, and slow, clear TTS.

## Verification
- **Unit Tests**: Full coverage for Decider, Catalog, UI Components, and Audio Service.
- **Integration Tests**: `DraftIntegration.test.ts` verifies the full lifecycle from Draft Start to Achievement Reward.

## Achievement Rewards
- **Initial Plan**: 1 star per 5 drawings.
- **Implemented**: 1 star per drawing (to match verification requirements and provide immediate feedback for toddlers).
