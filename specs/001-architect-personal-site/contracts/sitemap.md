# Sitemap: Architect Personal Website

**Feature**: 001-architect-personal-site  
**Date**: December 28, 2025

---

## Site Structure

```
/                           # Home - Architectural thesis + domains
├── /about                  # About - Essay on thinking approach
├── /experience             # Experience - Problem domains
├── /blog                   # Blog - Article listing
│   └── /blog/{slug}        # Individual articles
├── /notes                  # Notes - Short-form listing
│   └── /notes/{slug}       # Individual notes
└── /contact                # Contact - Direct methods
```

---

## Page Specifications

### 1. Home (`/`)

**Purpose**: Establish authority in first 10 seconds

**URL**: `/` → `index.html`

**Content Sections**:
1. **Thesis Statement** (above fold)
   - 2-3 sentence architectural philosophy
   - No clichés or buzzwords
   
2. **Expertise Domains** (below thesis)
   - 3-5 key problem domains
   - Descriptive phrases, not tool lists
   
3. **Navigation Prompts**
   - Link to Experience ("See how I approach problems")
   - Link to Writings ("Read my technical thinking")

**SEO**:
- Title: `{Author Name} - Software Architect`
- Description: `{Thesis statement condensed to 155 chars}`

---

### 2. About (`/about`)

**Purpose**: Explain thinking approach, not employment history

**URL**: `/about` → `about.html`

**Content Sections**:
1. **Professional Philosophy** (essay format)
   - How the architect approaches system design
   - Not a timeline or resume
   
2. **Core Principles**
   - 3-5 explicit principles with brief explanations
   - Trade-offs valued (e.g., "simplicity over cleverness")
   
3. **Problems I Enjoy**
   - Types of challenges that energize
   - What makes a problem interesting

**Word Count Target**: 800-1500 words (thoughtful essay length)

**SEO**:
- Title: `About - {Author Name}`
- Description: `How I think about software architecture and the principles that guide my decisions.`

---

### 3. Experience (`/experience`)

**Purpose**: Show impact through problem domains

**URL**: `/experience` → `experience.html`

**Content Structure**:

For each domain (4-6 domains):

```
## {Domain Name}
E.g., "Distributed Systems"

### Context
What problems existed, why they mattered

### Constraints  
Budget, timeline, team, technical limitations

### Key Decisions
Architectural choices made and why

### Outcomes
Measurable results where possible

### Lessons
What would be done differently
```

**Domains to Include** (examples):
- Distributed Systems
- Cloud Platforms & Infrastructure
- IoT & Data Pipelines
- Platform Modernization
- API Design & Integration
- Performance Engineering

**SEO**:
- Title: `Experience - {Author Name}`
- Description: `Architectural experience across distributed systems, cloud platforms, and platform modernization.`

---

### 4. Blog (`/blog`)

**Purpose**: List long-form technical articles

**URL**: `/blog` → `blog/index.html`

**Content**:
- List of articles sorted by date (newest first)
- Each item shows: title, date, category badge, description
- Optional: filter by category

**Article URLs**: `/blog/{slug}` → `blog/{slug}/index.html` or `blog/{slug}.html`

**SEO**:
- Title: `Writings - {Author Name}`
- Description: `Technical articles on architecture decisions, system design, and lessons learned.`

---

### 5. Blog Article (`/blog/{slug}`)

**Purpose**: Individual long-form article

**URL Pattern**: `/blog/{slug}`

**Content**:
- Article title (h1)
- Publication date
- Category
- Reading time estimate
- Full article content
- Previous/Next article navigation (optional)

**SEO**:
- Title: `{Article Title} - {Author Name}`
- Description: `{Article description from frontmatter}`

---

### 6. Notes (`/notes`)

**Purpose**: List short-form thoughts and ideas

**URL**: `/notes` → `notes/index.html`

**Content**:
- List of notes sorted by date
- Each item shows: title, date
- Simpler presentation than blog

**Note URLs**: `/notes/{slug}`

**Conditional Display**: If no notes exist, this page may be hidden from navigation or show "Coming soon"

**SEO**:
- Title: `Notes - {Author Name}`
- Description: `Quick thoughts, diagrams, and ideas in progress.`

---

### 7. Contact (`/contact`)

**Purpose**: Enable professional conversation

**URL**: `/contact` → `contact.html`

**Content**:
1. **Opening Statement**
   - Brief, professional, inviting
   - Not salesy or formal
   
2. **Contact Methods**
   - Email (displayed directly, not obfuscated)
   - LinkedIn (profile link)
   - GitHub (profile link)
   
3. **Availability Statement**
   - Clear statement about response time
   - What conversations are welcome

**SEO**:
- Title: `Contact - {Author Name}`
- Description: `Get in touch for technical discussions, collaboration, or speaking opportunities.`

---

## Navigation Structure

**Primary Navigation** (all pages):

```
[Home] [About] [Experience] [Writings] [Notes*] [Contact]
```

*Notes link hidden if section is empty

**Mobile Navigation**:
- Hamburger menu
- Same links as desktop
- Full-screen overlay or slide-in

---

## URL Conventions

| Pattern | Example | File |
|---------|---------|------|
| `/` | Home | `index.html` |
| `/{page}` | `/about` | `about.html` |
| `/blog` | Blog index | `blog/index.html` |
| `/blog/{slug}` | Article | `blog/{slug}.html` |
| `/notes` | Notes index | `notes/index.html` |
| `/notes/{slug}` | Note | `notes/{slug}.html` |

**Slug Rules**:
- Lowercase
- Hyphens for spaces
- No special characters
- Max 50 characters

---

## Redirect Considerations

None needed for initial launch. Future considerations:
- If blog post slugs change, maintain old URLs via redirects
- 404 page should be created (`404.html`)
