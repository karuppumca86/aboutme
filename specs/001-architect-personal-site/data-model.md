# Data Model: Architect Personal Website

**Feature**: 001-architect-personal-site  
**Date**: December 28, 2025

---

## Overview

This is a static website with content stored in Markdown files. The "data model" describes the structure of content files and their relationships rather than database entities.

---

## Content Entities

### 1. Page

Static pages with fixed content structure.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL path (e.g., `about`, `contact`) |
| `title` | string | Yes | Page title for `<title>` and h1 |
| `description` | string | Yes | Meta description for SEO |
| `template` | enum | Yes | Layout template to use |

**Instances**:
- `index` (Home)
- `about`
- `experience`
- `blog/index` (Blog listing)
- `notes/index` (Notes listing)
- `contact`

---

### 2. Article (Blog Post)

Long-form technical content with rich formatting.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL path segment (e.g., `event-sourcing-decision`) |
| `title` | string | Yes | Article title |
| `date` | date | Yes | Publication date (YYYY-MM-DD) |
| `category` | enum | Yes | Content category |
| `description` | string | Yes | Brief description for listings and meta |
| `content` | markdown | Yes | Full article body |
| `draft` | boolean | No | If true, exclude from production build |

**Category Values**:
- `case-study` - Architecture case studies
- `design-tradeoffs` - Design trade-off analyses
- `system-evolution` - System evolution stories
- `failures-lessons` - Failures and lessons learned
- `technology-reasoning` - Technology adoption reasoning

**Validation Rules**:
- `slug` must be URL-safe (lowercase, hyphens only)
- `date` must be valid ISO date
- `category` must match one of defined values
- `description` should be ≤160 characters (SEO best practice)

---

### 3. Note

Short-form informal content.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL path segment |
| `title` | string | Yes | Note title |
| `date` | date | Yes | Creation/update date |
| `content` | markdown | Yes | Note body (typically shorter than articles) |
| `draft` | boolean | No | If true, exclude from production build |

**Validation Rules**:
- Same as Article, minus `category` and `description`
- Notes intentionally simpler structure

---

### 4. Experience Domain

Problem-domain grouping for experience content (stored in page content, not separate files).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `domain` | string | Yes | Domain name (e.g., "Distributed Systems") |
| `context` | text | Yes | Problem context description |
| `constraints` | text | Yes | Key constraints faced |
| `decisions` | text | Yes | Architectural decisions made |
| `outcomes` | text | Yes | Results achieved |
| `lessons` | text | Yes | Lessons learned |

**Example Domains**:
- Distributed Systems
- Cloud Platforms & Infrastructure
- IoT & Data Pipelines
- Platform Modernization

---

### 5. Site Configuration

Global site metadata (stored in config file or constants).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `siteName` | string | Yes | Site name for branding |
| `authorName` | string | Yes | Architect's name |
| `email` | email | Yes | Contact email |
| `linkedIn` | url | Yes | LinkedIn profile URL |
| `github` | url | Yes | GitHub profile URL |
| `availability` | string | Yes | Availability statement |
| `thesis` | string | Yes | Architectural thesis (2-3 sentences) |
| `domains` | string[] | Yes | Key expertise domains |

---

## Content File Structure

```
content/
├── config.json              # Site configuration
├── pages/
│   ├── home.md              # Home page content
│   ├── about.md             # About page (essay)
│   ├── experience.md        # Experience domains
│   └── contact.md           # Contact details
├── blog/
│   ├── 2025-01-15-event-sourcing.md
│   ├── 2025-02-01-cqrs-tradeoffs.md
│   └── ...
└── notes/
    ├── 2025-01-10-quick-thought.md
    └── ...
```

---

## Relationships

```
┌─────────────────┐
│  Site Config    │
└────────┬────────┘
         │ contains
         ▼
┌─────────────────┐    lists     ┌─────────────────┐
│   Pages (6)     │◄────────────►│  Navigation     │
└────────┬────────┘              └─────────────────┘
         │ includes
         ▼
┌─────────────────┐
│ Experience Page │
│    contains     │
│  4+ Domains     │
└─────────────────┘

┌─────────────────┐    listed    ┌─────────────────┐
│   Blog Index    │◄────────────►│   Articles      │
└─────────────────┘    on        └─────────────────┘
                                        │
                                        │ categorized by
                                        ▼
                                 ┌─────────────────┐
                                 │   Categories    │
                                 │   (5 types)     │
                                 └─────────────────┘

┌─────────────────┐    listed    ┌─────────────────┐
│  Notes Index    │◄────────────►│     Notes       │
└─────────────────┘    on        └─────────────────┘
```

---

## State Transitions

### Article Lifecycle

```
┌─────────┐     publish      ┌───────────┐     archive     ┌──────────┐
│  Draft  │ ───────────────► │ Published │ ──────────────► │ Archived │
└─────────┘                  └───────────┘                 └──────────┘
     │                             │
     │         edit                │ unpublish
     └─────────────────────────────┘
```

**States**:
- **Draft**: `draft: true` in frontmatter, excluded from build
- **Published**: `draft: false` or field omitted, included in build
- **Archived**: Future consideration (remove from listing but keep URL)

---

## Frontmatter Schema

### Article Frontmatter (YAML)

```yaml
---
title: string          # Required, human-readable title
date: YYYY-MM-DD       # Required, ISO date
category: enum         # Required, one of defined categories
description: string    # Required, ≤160 chars
draft: boolean         # Optional, defaults to false
---
```

### Note Frontmatter (YAML)

```yaml
---
title: string          # Required
date: YYYY-MM-DD       # Required
draft: boolean         # Optional, defaults to false
---
```

---

## Index Generation

The build process generates index pages from content:

### Blog Index Data

```json
{
  "articles": [
    {
      "slug": "event-sourcing-decision",
      "title": "Why I Chose Event Sourcing Over CRUD",
      "date": "2025-01-15",
      "category": "design-tradeoffs",
      "description": "A case study in architectural decision-making..."
    }
  ],
  "categories": ["case-study", "design-tradeoffs", ...],
  "total": 12
}
```

### Notes Index Data

```json
{
  "notes": [
    {
      "slug": "quick-thought-on-microservices",
      "title": "Quick Thought on Microservices",
      "date": "2025-01-10"
    }
  ],
  "total": 5
}
```
