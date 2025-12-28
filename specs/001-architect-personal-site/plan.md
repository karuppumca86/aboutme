# Implementation Plan: Architect Personal Website

**Branch**: `001-architect-personal-site` | **Date**: December 28, 2025 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-architect-personal-site/spec.md`

## Summary

Build a minimalist, editorial-style personal website for a senior software architect using vanilla HTML, CSS, and JavaScript. The site establishes architectural authority through clear thinking (not buzzwords), featuring 6 pages: Home (thesis + domains), About (essay-style philosophy), Experience (problem-domain organization), Blog (long-form Markdown content), Notes (short-form ideas), and Contact (direct methods). Performance target: Lighthouse 90+ across all metrics.

## Technical Context

**Language/Version**: HTML5, CSS3, ES6+ JavaScript  
**Primary Dependencies**: None (vanilla stack); optional build tools for Markdown processing  
**Storage**: Static files (Markdown content → HTML at build time)  
**Testing**: Lighthouse CLI, HTML validator, manual accessibility testing  
**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)  
**Project Type**: Static website (single project)  
**Performance Goals**: Lighthouse 90+ all categories, <2s initial load, <100KB total page weight  
**Constraints**: No JavaScript required for core content; progressive enhancement only  
**Scale/Scope**: 6 pages + blog articles (~10-20 initial), single author

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Note**: Constitution file contains template placeholders only. No project-specific principles defined yet.

| Principle | Status | Notes |
|-----------|--------|-------|
| N/A | ✅ PASS | Constitution not yet configured for this project |

**Gate Status**: ✅ PASSED - No constitution violations (constitution is template-only)

## Project Structure

### Documentation (this feature)

```text
specs/001-architect-personal-site/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (sitemap, content contracts)
└── tasks.md             # Phase 2 output (NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── index.html           # Home page
├── about.html           # About page
├── experience.html      # Experience page
├── blog/
│   ├── index.html       # Blog listing
│   └── [articles]/      # Individual blog posts
├── notes/
│   ├── index.html       # Notes listing
│   └── [notes]/         # Individual notes
├── contact.html         # Contact page
├── css/
│   ├── reset.css        # CSS reset/normalize
│   ├── typography.css   # Type scale and fonts
│   ├── layout.css       # Grid and spacing
│   └── components.css   # Reusable components
├── js/
│   └── main.js          # Progressive enhancements (dark mode toggle)
└── assets/
    └── diagrams/        # SVG diagrams for articles

content/
├── blog/                # Markdown source for blog posts
└── notes/               # Markdown source for notes

build/                   # Build scripts (if needed for Markdown→HTML)
```

**Structure Decision**: Single static website with clear separation between source HTML/CSS/JS, content (Markdown), and assets. No framework overhead aligns with performance goals and future-proof simplicity.

## Complexity Tracking

> **No constitution violations to justify** - using minimal vanilla stack aligns with simplicity principles.
