# Design System Contract: Architect Personal Website

**Feature**: 001-architect-personal-site  
**Date**: December 28, 2025

---

## Color Palette

### Light Mode (Default)

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #fafafa;      /* Main background - off-white */
  --color-bg-secondary: #f5f5f5;    /* Cards, code blocks */
  --color-bg-tertiary: #ffffff;     /* Elevated surfaces */
  
  /* Text */
  --color-text-primary: #1a1a1a;    /* Body text - near black */
  --color-text-secondary: #4a4a4a;  /* Secondary text */
  --color-text-muted: #6b6b6b;      /* Captions, dates */
  
  /* Accent */
  --color-accent: #0066cc;          /* Links, interactive */
  --color-accent-hover: #004d99;    /* Link hover state */
  
  /* Borders */
  --color-border: #e5e5e5;          /* Subtle borders */
  --color-border-strong: #d0d0d0;   /* Emphasized borders */
  
  /* Code */
  --color-code-bg: #f5f5f5;         /* Inline code background */
  --color-code-text: #1a1a1a;       /* Code text */
}
```

### Dark Mode (Optional)

```css
[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Backgrounds */
    --color-bg-primary: #121212;
    --color-bg-secondary: #1e1e1e;
    --color-bg-tertiary: #2a2a2a;
    
    /* Text */
    --color-text-primary: #f0f0f0;
    --color-text-secondary: #c0c0c0;
    --color-text-muted: #888888;
    
    /* Accent */
    --color-accent: #66b3ff;
    --color-accent-hover: #99ccff;
    
    /* Borders */
    --color-border: #333333;
    --color-border-strong: #444444;
    
    /* Code */
    --color-code-bg: #1e1e1e;
    --color-code-text: #f0f0f0;
  }
}
```

### Contrast Ratios (WCAG AA Compliance)

| Combination | Ratio | Status |
|-------------|-------|--------|
| text-primary on bg-primary | 14.5:1 | ✅ AAA |
| text-secondary on bg-primary | 8.1:1 | ✅ AAA |
| text-muted on bg-primary | 5.3:1 | ✅ AA |
| accent on bg-primary | 4.5:1 | ✅ AA |

---

## Typography

### Font Stack

```css
:root {
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-heading: var(--font-body);  /* Same for consistency */
  --font-mono: "SF Mono", "Fira Code", Consolas, 
               "Liberation Mono", Menlo, monospace;
}
```

### Type Scale (1.25 ratio)

```css
:root {
  --text-xs: 0.8rem;      /* 12.8px - small labels */
  --text-sm: 0.875rem;    /* 14px - captions */
  --text-base: 1rem;      /* 16px - body */
  --text-lg: 1.125rem;    /* 18px - lead text */
  --text-xl: 1.25rem;     /* 20px - h4 */
  --text-2xl: 1.563rem;   /* 25px - h3 */
  --text-3xl: 1.953rem;   /* 31px - h2 */
  --text-4xl: 2.441rem;   /* 39px - h1 */
}
```

### Type Specifications

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| h1 | 2.441rem | 700 | 1.2 | -0.02em |
| h2 | 1.953rem | 600 | 1.25 | -0.01em |
| h3 | 1.563rem | 600 | 1.3 | 0 |
| h4 | 1.25rem | 600 | 1.4 | 0 |
| body | 1rem | 400 | 1.6 | 0 |
| small | 0.875rem | 400 | 1.5 | 0 |
| code | 0.9rem | 400 | 1.5 | 0 |

### Paragraph Styling

```css
p {
  max-width: 65ch;           /* Optimal reading width */
  margin-bottom: 1.5rem;     /* Consistent spacing */
  orphans: 3;                /* Prevent single lines */
  widows: 3;
}
```

---

## Spacing System

### Base Unit: 8px

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.5rem;    /* 24px */
  --space-6: 2rem;      /* 32px */
  --space-8: 3rem;      /* 48px */
  --space-10: 4rem;     /* 64px */
  --space-12: 6rem;     /* 96px */
}
```

### Application Guidelines

| Context | Spacing |
|---------|---------|
| Paragraph margin | `--space-5` (24px) |
| Section margin | `--space-10` (64px) |
| Card padding | `--space-5` (24px) |
| List item gap | `--space-2` (8px) |
| Header nav gap | `--space-4` (16px) |
| Page horizontal padding | `--space-4` mobile, `--space-6` desktop |
| Page vertical padding | `--space-8` (48px) |

---

## Layout

### Content Width

```css
:root {
  --width-content: 65ch;      /* ~680px - reading width */
  --width-wide: 900px;        /* Images, code blocks */
  --width-max: 1200px;        /* Maximum container */
}
```

### Breakpoints

```css
:root {
  --bp-sm: 640px;    /* Small tablets */
  --bp-md: 768px;    /* Tablets */
  --bp-lg: 1024px;   /* Desktop */
  --bp-xl: 1280px;   /* Large desktop */
}
```

### Page Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  Header (fixed height: 64px)                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Logo/Name              Nav Links (max 6)          │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  Main (flex: 1)                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │                                                   │  │
│  │          Content (max-width: 65ch)               │  │
│  │          centered horizontally                    │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  Footer (auto height, sticks to bottom)                 │
│  ┌───────────────────────────────────────────────────┐  │
│  │ © Year Name         Social Links                  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Components

### Navigation

**Desktop** (≥768px):
- Horizontal layout
- Logo/name on left
- Links on right
- All 6 links visible
- Height: 64px

**Mobile** (<768px):
- Logo/name on left
- Hamburger icon on right
- Overlay menu when expanded
- Touch targets: 44px minimum

### Links

```css
a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  color: var(--color-accent-hover);
}

a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Code Blocks

```css
pre {
  background: var(--color-code-bg);
  padding: var(--space-4);
  border-radius: 4px;
  overflow-x: auto;
  font-size: var(--text-sm);
  line-height: 1.5;
}

code {
  font-family: var(--font-mono);
}

/* Inline code */
:not(pre) > code {
  background: var(--color-code-bg);
  padding: 0.125em 0.25em;
  border-radius: 3px;
}
```

### Article Card (Blog/Notes Listing)

```css
.article-card {
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
}

.article-card:last-child {
  border-bottom: none;
}

.article-card__title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.article-card__meta {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.article-card__description {
  margin-top: var(--space-2);
  color: var(--color-text-secondary);
}
```

### Category Badge

```css
.badge {
  display: inline-block;
  font-size: var(--text-xs);
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-secondary);
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## Responsive Behavior

### Mobile-First Approach

Start with mobile styles, add complexity at larger breakpoints.

```css
/* Base: Mobile */
.container {
  padding: 0 var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}
```

### Content Scaling

| Viewport | Body Font | Content Width | H1 Size |
|----------|-----------|---------------|---------|
| < 640px | 16px | 100% | 1.75rem |
| 640-768px | 16px | 90% | 2rem |
| 768-1024px | 16px | 65ch | 2.25rem |
| > 1024px | 16px | 65ch | 2.441rem |

---

## Accessibility Requirements

### Focus States

All interactive elements must have visible focus indicators:

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Touch Targets

Minimum 44x44px for all interactive elements on touch devices.

### Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Skip Link

```html
<a href="#main" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

---

## Do's and Don'ts

### Do ✅

- Use consistent spacing from the scale
- Maintain strong typographic hierarchy
- Keep content width readable (≤65ch)
- Ensure all text meets contrast requirements
- Use semantic HTML elements

### Don't ❌

- Add gradients or complex backgrounds
- Use stock photos or decorative images
- Add hero animations or transitions
- Use more than 2 font weights
- Break the 8px spacing grid
