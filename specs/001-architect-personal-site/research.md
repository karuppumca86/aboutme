# Research: Architect Personal Website

**Feature**: 001-architect-personal-site  
**Date**: December 28, 2025  
**Purpose**: Resolve technical decisions for vanilla HTML/CSS/JS implementation

---

## 1. Typography System

### Decision: System Font Stack + Variable Font for Headings

**Rationale**: 
- System fonts eliminate font loading latency (critical for <2s load target)
- Inter or similar variable font for headings adds editorial refinement without significant overhead
- Strong typography hierarchy is core requirement (FR-032)

**Font Stack**:
```css
/* Body text - system fonts for zero latency */
--font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;

/* Headings - optional refined font */
--font-heading: "Inter", var(--font-body);

/* Code blocks */
--font-mono: "SF Mono", "Fira Code", "Consolas", monospace;
```

**Type Scale** (1.25 ratio - Major Third):
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| h1 | 2.441rem (39px) | 700 | 1.2 |
| h2 | 1.953rem (31px) | 600 | 1.25 |
| h3 | 1.563rem (25px) | 600 | 1.3 |
| h4 | 1.25rem (20px) | 600 | 1.4 |
| body | 1rem (16px) | 400 | 1.6 |
| small | 0.8rem (13px) | 400 | 1.5 |

**Alternatives Considered**:
- Google Fonts (rejected: external dependency, privacy, GDPR complexity)
- Self-hosted web fonts only (rejected: increased page weight, FOUT/FOIT issues)
- System fonts only (viable but headings lack editorial refinement)

---

## 2. Layout System

### Decision: CSS Grid + Flexbox with CSS Custom Properties

**Rationale**:
- Native CSS features with excellent browser support
- No framework overhead (aligns with vanilla JS constraint)
- Custom properties enable consistent spacing and easy dark mode

**Grid System**:
```css
/* Content width optimized for reading (60-80 chars per line = ~65ch) */
--content-width: 65ch;
--content-max: 1200px;

/* Spacing scale (8px base) */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
```

**Page Layout**:
- Header: Fixed height, horizontal nav
- Main: Centered content column with `max-width: var(--content-width)`
- Footer: Minimal, fixed to bottom on short pages

**Alternatives Considered**:
- CSS framework (Tailwind, Bootstrap) - rejected: adds build step, bloat
- Float-based layouts - rejected: outdated, harder to maintain
- CSS-in-JS - rejected: requires JavaScript, contradicts vanilla approach

---

## 3. Markdown Processing

### Decision: Build-time conversion with simple Node.js script

**Rationale**:
- Blog/Notes require Markdown support (FR-021)
- Build-time processing = zero runtime overhead
- Node.js is ubiquitous and requires minimal setup

**Approach**:
```
content/blog/*.md → build script → src/blog/*.html
```

**Tool**: `marked` (lightweight) or `markdown-it` (more features)
- Both are zero-dependency for core functionality
- Support code block syntax highlighting via plugins
- ~20KB footprint

**Build Script Responsibilities**:
1. Parse Markdown frontmatter (title, date, category)
2. Convert Markdown to HTML
3. Inject into page template
4. Generate blog/notes index pages

**Alternatives Considered**:
- Static site generator (Hugo, Eleventy) - rejected: adds complexity beyond requirements
- Client-side Markdown rendering - rejected: slower, worse SEO
- Manual HTML authoring - rejected: poor authoring experience for long-form content

---

## 4. Code Syntax Highlighting

### Decision: Prism.js (lightweight) at build time

**Rationale**:
- Syntax highlighting required for code blocks (FR-019)
- Prism is ~2KB core + language grammars
- Can be applied at build time (zero runtime JS for highlighting)

**Implementation**:
- Apply Prism during Markdown→HTML conversion
- Include only needed language grammars (JS, Python, HTML, CSS, shell)
- Theme: Custom minimal theme matching site palette

**Alternatives Considered**:
- highlight.js - larger bundle, more languages than needed
- Shiki - excellent output but requires more complex build setup
- No highlighting - rejected: poor readability for technical content

---

## 5. Dark Mode

### Decision: CSS Custom Properties + `prefers-color-scheme` + optional toggle

**Rationale**:
- Dark mode is optional (FR-034), light is default
- CSS-only solution respects system preference
- Toggle adds minimal JS for user override

**Implementation**:
```css
:root {
  --color-bg: #fafafa;
  --color-text: #1a1a1a;
  --color-text-muted: #666;
  --color-accent: #0066cc;
  --color-border: #e5e5e5;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #1a1a1a;
    --color-text: #f0f0f0;
    --color-text-muted: #999;
    --color-accent: #66b3ff;
    --color-border: #333;
  }
}

[data-theme="dark"] {
  /* Same dark values - for manual override */
}
```

**Toggle Logic** (Progressive Enhancement):
- Store preference in `localStorage`
- Set `data-theme` attribute on `<html>`
- ~20 lines of JavaScript

**Alternatives Considered**:
- No dark mode - viable but slightly worse UX for some users
- Separate stylesheets - rejected: harder to maintain, cache issues

---

## 6. Mobile Navigation

### Decision: Collapsible menu with CSS-only toggle (progressive JS enhancement)

**Rationale**:
- Mobile-first responsive design (FR-005)
- CSS `:target` or checkbox hack enables no-JS base
- JS enhancement improves UX (focus management, escape key)

**Breakpoints**:
```css
/* Mobile-first */
--bp-sm: 640px;   /* Small tablets */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Desktop */
```

**Mobile Behavior**:
- Nav hidden by default (hamburger icon)
- Expands as overlay or slide-in
- All 6 links accessible in mobile menu
- Touch targets ≥44px

**Alternatives Considered**:
- Always-visible horizontal nav - rejected: doesn't fit 6 links on small screens
- Footer navigation on mobile - rejected: poor discoverability
- JS-only mobile menu - rejected: fails without JS

---

## 7. Performance Optimization

### Decision: Minimal asset pipeline with lazy loading

**Rationale**:
- Lighthouse 90+ requires intentional optimization (FR-035)
- No framework = already ahead on bundle size
- Focus on image/diagram optimization and caching

**Strategies**:
1. **Critical CSS**: Inline above-fold styles in `<head>`
2. **Lazy loading**: `loading="lazy"` for images below fold
3. **Font display**: `font-display: swap` for any web fonts
4. **Preconnect**: DNS prefetch for any external resources
5. **Compression**: Serve with gzip/brotli (hosting config)
6. **Caching**: Long cache headers for versioned assets

**Target Metrics**:
| Metric | Target |
|--------|--------|
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.0s |
| Total Blocking Time | <100ms |
| Cumulative Layout Shift | <0.1 |
| Total Page Weight | <100KB (excluding images) |

**Alternatives Considered**:
- Service worker for offline - overkill for this scope
- Image CDN - consider if image count grows significantly

---

## 8. Hosting & Deployment

### Decision: Static hosting (GitHub Pages, Netlify, or Vercel)

**Rationale**:
- Static site requires no server
- Free tier sufficient for personal site
- Built-in HTTPS, CDN, and continuous deployment

**Recommended**: GitHub Pages or Netlify
- GitHub Pages: Zero config if repo is on GitHub
- Netlify: Better build previews, form handling (if ever needed)

**Deployment Flow**:
1. Push to main branch
2. Build script runs (Markdown → HTML)
3. Deploy `src/` directory

**Alternatives Considered**:
- Self-hosted (VPS) - unnecessary complexity and cost
- S3 + CloudFront - more config, overkill for personal site

---

## 9. Accessibility Implementation

### Decision: Semantic HTML + ARIA landmarks + focus management

**Rationale**:
- Lighthouse accessibility 90+ required (FR-036)
- Semantic HTML covers 90% of accessibility needs
- ARIA supplements where native semantics insufficient

**Implementation Checklist**:
- [ ] Semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- [ ] Skip link to main content
- [ ] Focus visible outlines (never `outline: none` without replacement)
- [ ] Alt text for all images
- [ ] Heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Color contrast ≥4.5:1 for normal text, ≥3:1 for large text
- [ ] Form labels (for contact email display if interactive)
- [ ] `lang` attribute on `<html>`

**Testing**:
- Lighthouse accessibility audit
- axe DevTools browser extension
- Keyboard-only navigation test
- VoiceOver/NVDA spot checks

---

## 10. Content Organization Pattern

### Decision: Flat file structure with frontmatter metadata

**Rationale**:
- Simple mental model for content management
- Frontmatter provides structured metadata without database
- Easy to extend (add categories, tags) later

**Blog Post Format**:
```markdown
---
title: "Why I Chose Event Sourcing Over CRUD"
date: 2025-01-15
category: design-tradeoffs
description: "A case study in architectural decision-making..."
---

# Why I Chose Event Sourcing Over CRUD

[Article content...]
```

**Categories** (from spec FR-022):
- `case-study`
- `design-tradeoffs`
- `system-evolution`
- `failures-lessons`
- `technology-reasoning`

**Alternatives Considered**:
- Database/CMS - rejected: adds server dependency
- JSON data files - viable but Markdown frontmatter more author-friendly

---

## Summary of Key Decisions

| Area | Decision | Key Benefit |
|------|----------|-------------|
| Typography | System fonts + optional Inter | Zero latency, editorial feel |
| Layout | CSS Grid/Flexbox + custom properties | Native, maintainable |
| Markdown | Build-time Node.js script | Zero runtime overhead |
| Syntax highlighting | Prism.js at build time | Lightweight, no runtime JS |
| Dark mode | CSS custom properties + toggle | Respects system preference |
| Mobile nav | CSS-first with JS enhancement | Works without JS |
| Performance | Minimal assets, lazy loading | Lighthouse 90+ achievable |
| Hosting | Static (GitHub Pages/Netlify) | Free, fast, simple |
| Accessibility | Semantic HTML + ARIA | Meets WCAG AA |
| Content | Markdown + frontmatter | Author-friendly |
