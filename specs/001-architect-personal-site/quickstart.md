# Quickstart Guide: Architect Personal Website

**Feature**: 001-architect-personal-site  
**Date**: December 28, 2025

---

## Prerequisites

- Node.js 18+ (for build script only)
- Git
- Text editor (VS Code recommended)
- Modern browser for testing

---

## Project Setup

### 1. Initialize Project Structure

```bash
# Create directories
mkdir -p src/{css,js,assets/diagrams,blog,notes}
mkdir -p content/{blog,notes,pages}
mkdir -p build

# Create initial files
touch src/index.html
touch src/about.html
touch src/experience.html
touch src/contact.html
touch src/blog/index.html
touch src/notes/index.html
touch src/css/{reset,typography,layout,components}.css
touch src/js/main.js
touch content/config.json
```

### 2. Create Configuration File

**`content/config.json`**:
```json
{
  "siteName": "Your Name",
  "authorName": "Your Name",
  "email": "you@example.com",
  "linkedIn": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername",
  "availability": "I typically respond within a few days.",
  "thesis": "Your 2-3 sentence architectural philosophy goes here.",
  "domains": [
    "Distributed Systems",
    "Platform Engineering",
    "Data Architecture"
  ]
}
```

### 3. Base HTML Template

**`src/index.html`** (use as template for all pages):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="PAGE_DESCRIPTION">
  <title>PAGE_TITLE - Your Name</title>
  
  <!-- Styles -->
  <link rel="stylesheet" href="/css/reset.css">
  <link rel="stylesheet" href="/css/typography.css">
  <link rel="stylesheet" href="/css/layout.css">
  <link rel="stylesheet" href="/css/components.css">
  
  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  
  <header class="site-header">
    <nav class="nav" aria-label="Main navigation">
      <a href="/" class="nav__logo">Your Name</a>
      <button class="nav__toggle" aria-expanded="false" aria-controls="nav-menu">
        <span class="sr-only">Menu</span>
        <svg><!-- hamburger icon --></svg>
      </button>
      <ul id="nav-menu" class="nav__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/blog">Writings</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main id="main" class="main">
    <!-- Page content here -->
  </main>
  
  <footer class="site-footer">
    <p>&copy; 2025 Your Name</p>
    <ul class="footer__links">
      <li><a href="https://github.com/yourusername">GitHub</a></li>
      <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
    </ul>
  </footer>
  
  <!-- Progressive enhancement only -->
  <script src="/js/main.js" defer></script>
</body>
</html>
```

---

## CSS Foundation

### 4. CSS Reset

**`src/css/reset.css`**:
```css
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```

### 5. Typography

**`src/css/typography.css`**:
```css
:root {
  /* Font stacks */
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "SF Mono", "Fira Code", Consolas, monospace;
  
  /* Type scale */
  --text-xs: 0.8rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.563rem;
  --text-3xl: 1.953rem;
  --text-4xl: 2.441rem;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
}

h1 { font-size: var(--text-4xl); font-weight: 700; line-height: 1.2; }
h2 { font-size: var(--text-3xl); font-weight: 600; line-height: 1.25; }
h3 { font-size: var(--text-2xl); font-weight: 600; line-height: 1.3; }
h4 { font-size: var(--text-xl); font-weight: 600; line-height: 1.4; }

p {
  max-width: 65ch;
  margin-bottom: 1.5rem;
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

### 6. Layout

**`src/css/layout.css`**:
```css
:root {
  /* Colors */
  --color-bg-primary: #fafafa;
  --color-text-primary: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-accent: #0066cc;
  --color-border: #e5e5e5;
  
  /* Spacing */
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  
  /* Widths */
  --width-content: 65ch;
  --width-max: 1200px;
}

body {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
}

.site-header {
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.main {
  flex: 1;
  padding: var(--space-8) var(--space-4);
  max-width: var(--width-content);
  margin: 0 auto;
  width: 100%;
}

.site-footer {
  padding: var(--space-6) var(--space-4);
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-muted);
}

/* Navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--width-max);
  margin: 0 auto;
}

.nav__menu {
  display: flex;
  gap: var(--space-4);
  list-style: none;
}

.nav__toggle {
  display: none;
}

/* Mobile navigation */
@media (max-width: 768px) {
  .nav__toggle {
    display: block;
  }
  
  .nav__menu {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--color-bg-primary);
    padding: var(--space-4);
    border-bottom: 1px solid var(--color-border);
  }
  
  .nav__menu.is-open {
    display: flex;
  }
}
```

---

## Content Workflow

### 7. Create a Blog Post

**`content/blog/2025-01-15-first-post.md`**:
```markdown
---
title: "My First Architecture Post"
date: 2025-01-15
category: design-tradeoffs
description: "Exploring the trade-offs between simplicity and flexibility in system design."
---

# My First Architecture Post

This is where your long-form content goes...

## Section Heading

More content with code examples:

```javascript
const example = "code block";
```
```

### 8. Build Script (Basic)

**`build/build.js`**:
```javascript
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Read markdown files from content/blog
// Convert to HTML
// Inject into template
// Write to src/blog/

console.log('Build complete!');
```

Install marked:
```bash
npm init -y
npm install marked
```

---

## Development Workflow

### Local Development

```bash
# Option 1: Python simple server
python -m http.server 8000 --directory src

# Option 2: Node http-server
npx http-server src -p 8000

# Option 3: VS Code Live Server extension
```

### Build for Production

```bash
node build/build.js
```

### Testing

```bash
# Lighthouse CLI
npx lighthouse http://localhost:8000 --view

# HTML validation
npx html-validate src/**/*.html

# Accessibility check
npx pa11y http://localhost:8000
```

---

## File Checklist

After setup, you should have:

```
├── src/
│   ├── index.html          ✓
│   ├── about.html          ✓
│   ├── experience.html     ✓
│   ├── contact.html        ✓
│   ├── blog/
│   │   └── index.html      ✓
│   ├── notes/
│   │   └── index.html      ✓
│   ├── css/
│   │   ├── reset.css       ✓
│   │   ├── typography.css  ✓
│   │   ├── layout.css      ✓
│   │   └── components.css  ✓
│   ├── js/
│   │   └── main.js         ✓
│   └── assets/
│       └── diagrams/       ✓
├── content/
│   ├── config.json         ✓
│   ├── blog/               ✓
│   └── notes/              ✓
├── build/
│   └── build.js            ✓
└── package.json            ✓
```

---

## Next Steps

1. **Fill in content** - Use content contracts for guidance
2. **Customize colors** - Adjust CSS custom properties
3. **Add blog posts** - Create Markdown files in `content/blog/`
4. **Test accessibility** - Run Lighthouse audits
5. **Deploy** - Push to GitHub Pages or Netlify

---

## Common Commands

| Task | Command |
|------|---------|
| Start dev server | `npx http-server src -p 8000` |
| Build site | `node build/build.js` |
| Run Lighthouse | `npx lighthouse http://localhost:8000` |
| Validate HTML | `npx html-validate src/**/*.html` |
| Check accessibility | `npx pa11y http://localhost:8000` |
