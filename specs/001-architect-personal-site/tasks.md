# Tasks: Architect Personal Website

**Input**: Design documents from `/specs/001-architect-personal-site/`  
**Prerequisites**: plan.md ✓, spec.md ✓, research.md ✓, data-model.md ✓, contracts/ ✓

**Tests**: Not explicitly requested - implementation tasks only.

**Organization**: Tasks grouped by user story for independent implementation.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US7)
- Setup and Foundational phases have no story labels (shared infrastructure)

---

## Phase 1: Setup

**Purpose**: Project initialization and directory structure

- [x] T001 Create project directory structure per plan.md in src/, content/, build/
- [x] T002 [P] Initialize package.json with project metadata in package.json
- [x] T003 [P] Install marked dependency for Markdown processing via npm install marked
- [x] T004 [P] Create site configuration file in content/config.json with author details

---

## Phase 2: Foundational (CSS Framework)

**Purpose**: Core CSS infrastructure that ALL pages depend on

**⚠️ CRITICAL**: No page implementation can begin until this phase is complete

- [x] T005 Create CSS reset with modern defaults in src/css/reset.css
- [x] T006 [P] Implement typography system with type scale and font stacks in src/css/typography.css
- [x] T007 [P] Implement layout system with CSS custom properties for spacing and colors in src/css/layout.css
- [x] T008 [P] Create base component styles (links, code blocks, badges) in src/css/components.css
- [x] T009 Implement responsive navigation styles (desktop horizontal, mobile hamburger) in src/css/layout.css
- [x] T010 [P] Add dark mode CSS custom properties with prefers-color-scheme support in src/css/layout.css
- [x] T011 [P] Create skip-link and accessibility focus styles in src/css/components.css

**Checkpoint**: CSS framework ready - page implementation can now begin

---

## Phase 3: User Story 7 - Site Navigation (Priority: P1) 🎯 MVP Foundation

**Goal**: Flat navigation with max 6 links, accessible from all pages, keyboard navigable

**Independent Test**: Visit any page, verify navigation shows 6 links, no dropdowns, works with keyboard

### Implementation for User Story 7

- [x] T012 [US7] Create base HTML template with semantic structure (header, nav, main, footer) in src/_template.html
- [x] T013 [US7] Implement navigation HTML with 6 primary links in src/_template.html
- [x] T014 [US7] Add mobile navigation toggle button and menu structure in src/_template.html
- [x] T015 [US7] Implement mobile navigation JavaScript toggle in src/js/main.js
- [x] T016 [US7] Add skip-to-main-content link for accessibility in src/_template.html
- [x] T017 [US7] Create footer with copyright and social links in src/_template.html

**Checkpoint**: Navigation template ready - can be copied to all pages

---

## Phase 4: User Story 1 - Home Page / Discover Authority (Priority: P1) 🎯 MVP

**Goal**: Establish architectural authority within 10 seconds via thesis + domains

**Independent Test**: Load home page, verify thesis visible above fold, domains displayed, links to experience/writings present

### Implementation for User Story 1

- [x] T018 [US1] Create home page from base template in src/index.html
- [x] T019 [US1] Add architectural thesis section (2-3 sentences) above the fold in src/index.html
- [x] T020 [US1] Add expertise domains section with 3-5 problem domains in src/index.html
- [x] T021 [US1] Add navigation prompts linking to Experience and Writings in src/index.html
- [x] T022 [US1] Add page-specific meta tags (title, description) for SEO in src/index.html

**Checkpoint**: Home page complete - primary landing experience functional

---

## Phase 5: User Story 2 - About Page / Thinking Approach (Priority: P1)

**Goal**: Essay-style explanation of thinking approach, principles, and preferred problems

**Independent Test**: Navigate to /about, verify essay format (not bullets), principles stated, problems described

### Implementation for User Story 2

- [x] T023 [US2] Create about page from base template in src/about.html
- [x] T024 [US2] Add professional philosophy section with essay-style content structure in src/about.html
- [x] T025 [US2] Add core principles section with 3-5 principles and trade-offs in src/about.html
- [x] T026 [US2] Add problems I enjoy section describing preferred challenges in src/about.html
- [x] T027 [US2] Add page-specific meta tags for SEO in src/about.html

**Checkpoint**: About page complete - thinking approach clearly communicated

---

## Phase 6: User Story 3 - Experience Page / Architectural Impact (Priority: P1)

**Goal**: Problem-domain organized experience with context, constraints, decisions, outcomes, lessons

**Independent Test**: Navigate to /experience, verify domain organization (not job titles), each domain has all 5 sections

### Implementation for User Story 3

- [x] T028 [US3] Create experience page from base template in src/experience.html
- [x] T029 [US3] Implement domain section component structure with 5 subsections in src/experience.html
- [x] T030 [US3] Add first problem domain (e.g., Distributed Systems) with full structure in src/experience.html
- [x] T031 [US3] Add second problem domain (e.g., Cloud Platforms) with full structure in src/experience.html
- [x] T032 [US3] Add third problem domain (e.g., Platform Modernization) with full structure in src/experience.html
- [x] T033 [US3] Add fourth problem domain (e.g., Data Architecture) with full structure in src/experience.html
- [x] T034 [US3] Add page-specific meta tags for SEO in src/experience.html

**Checkpoint**: Experience page complete - architectural impact demonstrated through domains

---

## Phase 7: User Story 6 - Contact Page / Professional Contact (Priority: P2)

**Goal**: Direct contact methods (email, LinkedIn, GitHub) with availability statement, no forms

**Independent Test**: Navigate to /contact, verify email displayed directly, social links present, availability statement visible, no forms

### Implementation for User Story 6

- [x] T035 [US6] Create contact page from base template in src/contact.html
- [x] T036 [US6] Add opening statement section (inviting but professional) in src/contact.html
- [x] T037 [US6] Add contact methods section with email, LinkedIn, GitHub links in src/contact.html
- [x] T038 [US6] Add availability statement section in src/contact.html
- [x] T039 [US6] Add page-specific meta tags for SEO in src/contact.html

**Checkpoint**: Contact page complete - professional conversation entry point ready

---

## Phase 8: User Story 4 - Blog / Long-Form Technical Writing (Priority: P2)

**Goal**: Blog with article listing and reading-focused article pages supporting code and diagrams

**Independent Test**: Navigate to /blog, see article list, click article, verify clean reading layout with code highlighting

### Implementation for User Story 4

- [x] T040 [US4] Create blog listing page from base template in src/blog/index.html
- [x] T041 [US4] Implement article card component with title, date, category badge, description in src/blog/index.html
- [x] T042 [US4] Create blog article HTML template for generated articles in build/templates/article.html
- [x] T043 [US4] Add article-specific styles (reading width, spacing) in src/css/components.css
- [x] T044 [US4] Add code block styles with syntax highlighting theme in src/css/components.css
- [x] T045 [US4] Create sample blog article Markdown file in content/blog/2025-01-01-sample-article.md
- [x] T046 [US4] Implement Markdown-to-HTML build script with frontmatter parsing in build/build.js
- [x] T047 [US4] Add Prism.js syntax highlighting to build script in build/build.js
- [x] T048 [US4] Generate blog index page from article metadata in build script in build/build.js

**Checkpoint**: Blog system complete - can author in Markdown, build to HTML, display with syntax highlighting

---

## Phase 9: User Story 5 - Notes / Quick Ideas (Priority: P3)

**Goal**: Short-form notes section, visually distinct from blog, supporting diagrams

**Independent Test**: Navigate to /notes, see note list, verify visually simpler than blog, notes are shorter

### Implementation for User Story 5

- [x] T049 [US5] Create notes listing page from base template in src/notes/index.html
- [x] T050 [US5] Implement note card component (simpler than article card) in src/notes/index.html
- [x] T051 [US5] Create note HTML template for generated notes in build/templates/note.html
- [x] T052 [US5] Add note-specific styles (distinguish from articles) in src/css/components.css
- [x] T053 [US5] Create sample note Markdown file in content/notes/2025-01-01-sample-note.md
- [x] T054 [US5] Extend build script to process notes directory in build/build.js
- [x] T055 [US5] Generate notes index page from note metadata in build script in build/build.js
- [x] T056 [US5] Implement conditional navigation hiding if notes empty in src/js/main.js

**Checkpoint**: Notes system complete - short-form content distinct from blog

---

## Phase 10: User Story 8 - Performance & Accessibility (Priority: P2)

**Goal**: Lighthouse 90+ scores, semantic HTML, full keyboard navigation

**Independent Test**: Run Lighthouse on all pages, verify 90+ scores across all categories

### Implementation for User Story 8

- [x] T057 [US8] Audit and ensure semantic HTML on all pages (header, nav, main, article, section, footer)
- [x] T058 [US8] Add ARIA landmarks and labels where needed across all pages
- [x] T059 [US8] Verify and fix color contrast ratios per WCAG AA in src/css/layout.css
- [x] T060 [US8] Add image lazy loading attributes to all img tags
- [x] T061 [US8] Implement critical CSS inline in head for above-fold content in all HTML files
- [x] T062 [US8] Add preconnect hints for any external resources in all HTML files
- [x] T063 [US8] Create 404 error page in src/404.html
- [ ] T064 [US8] Run Lighthouse audit and document scores
- [ ] T065 [US8] Fix any Lighthouse issues to achieve 90+ in all categories

**Checkpoint**: Performance and accessibility validated - site meets all quality gates

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements and validation

- [x] T066 [P] Implement dark mode toggle button with localStorage persistence in src/js/main.js
- [x] T067 [P] Add focus trap to mobile navigation menu in src/js/main.js
- [x] T068 [P] Create favicon and add to all pages
- [x] T069 Run quickstart.md validation - verify all setup steps work
- [ ] T070 Final cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] T071 Mobile device testing (iOS Safari, Android Chrome)
- [x] T072 Create deployment configuration (GitHub Pages or Netlify)

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup ──────────────────────────────────────────┐
                                                         │
Phase 2: Foundational (CSS) ─────────────────────────────┤
                                                         │
         ┌───────────────────────────────────────────────┘
         │
         ▼
Phase 3: US7 Navigation (P1) ─────┬──────────────────────┐
                                  │                      │
Phase 4: US1 Home (P1) ───────────┤                      │
                                  │                      │
Phase 5: US2 About (P1) ──────────┤  Can run in         │
                                  │  parallel after      │
Phase 6: US3 Experience (P1) ─────┤  Navigation          │
                                  │                      │
Phase 7: US6 Contact (P2) ────────┤                      │
                                  │                      │
Phase 8: US4 Blog (P2) ───────────┤                      │
                                  │                      │
Phase 9: US5 Notes (P3) ──────────┘                      │
                                                         │
Phase 10: US8 Performance ◄──────────────────────────────┘
         (after all pages exist)
                 │
                 ▼
Phase 11: Polish
```

### User Story Dependencies

| Story | Depends On | Can Start After |
|-------|------------|-----------------|
| US7 Navigation | Foundational CSS | Phase 2 complete |
| US1 Home | Navigation template | T017 complete |
| US2 About | Navigation template | T017 complete |
| US3 Experience | Navigation template | T017 complete |
| US6 Contact | Navigation template | T017 complete |
| US4 Blog | Navigation template + Components CSS | T017 + T044 complete |
| US5 Notes | Blog system (build script) | T048 complete |
| US8 Performance | All pages created | Phase 9 complete |

### Parallel Opportunities

**Within Phase 2 (Foundational)**:
```
T006 typography.css  ─┬─ All [P] tasks can run in parallel
T007 layout.css      ─┤
T008 components.css  ─┤
T010 dark mode CSS   ─┤
T011 a11y styles     ─┘
```

**After Phase 3 (Navigation complete)**:
```
US1 Home       ─┬─ All page implementations can run in parallel
US2 About      ─┤  (different HTML files, no conflicts)
US3 Experience ─┤
US6 Contact    ─┘
```

**Within Phase 8 (Blog)**:
```
T043 article styles  ─┬─ Can run in parallel
T044 code styles     ─┤
T045 sample article  ─┘
```

---

## Implementation Strategy

### MVP First (Phases 1-4)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational CSS
3. Complete Phase 3: Navigation (US7)
4. Complete Phase 4: Home Page (US1)
5. **STOP and VALIDATE**: Working home page with navigation
6. Deploy/demo if ready - this is a viable MVP!

### Core Pages (Phases 5-7)

7. Add About page (US2)
8. Add Experience page (US3)
9. Add Contact page (US6)
10. **STOP and VALIDATE**: Full static site without blog
11. Deploy/demo - site is functional for visitors

### Content System (Phases 8-9)

12. Implement Blog system (US4)
13. Implement Notes system (US5)
14. **STOP and VALIDATE**: Full site with content authoring
15. Deploy/demo - complete feature set

### Quality Gates (Phases 10-11)

16. Performance & Accessibility audit (US8)
17. Polish and cross-cutting improvements
18. Final testing and deployment

---

## Notes

- All static pages (Home, About, Experience, Contact) can be built in parallel once Navigation template exists
- Blog system is more complex due to build script - implement after static pages
- Notes system reuses Blog build script - implement after Blog
- Performance audit requires all pages to exist - save for near-end
- Dark mode toggle is enhancement, not critical path
- Placeholder content acceptable for MVP; real content can be added later

## Task Count Summary

| Phase | Tasks | Parallel |
|-------|-------|----------|
| Setup | 4 | 3 |
| Foundational | 7 | 5 |
| US7 Navigation | 6 | 0 |
| US1 Home | 5 | 0 |
| US2 About | 5 | 0 |
| US3 Experience | 7 | 0 |
| US6 Contact | 5 | 0 |
| US4 Blog | 9 | 0 |
| US5 Notes | 8 | 0 |
| US8 Performance | 9 | 0 |
| Polish | 7 | 3 |
| **Total** | **72** | **11** |
