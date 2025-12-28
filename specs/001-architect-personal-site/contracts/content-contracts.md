# Content Contracts: Architect Personal Website

**Feature**: 001-architect-personal-site  
**Date**: December 28, 2025

---

## Purpose

This document defines the structure and constraints for all content that will populate the website. These contracts ensure content meets the specification requirements before implementation.

---

## 1. Home Page Content Contract

### Architectural Thesis

**Requirements**:
- Exactly 2-3 sentences
- States a clear philosophy or approach
- No buzzwords: "scalable", "innovative", "cutting-edge", etc.
- No clichés: "I build systems", "passionate about technology"
- First-person voice, confident but not arrogant

**Example Structure**:
```
[What I believe about software architecture].
[How this belief shapes my work].
[What this means for the systems I design].
```

**Sample** (placeholder):
> Software architecture is the art of making decisions that are expensive to change.
> I focus on understanding constraints deeply before proposing solutions, because the right architecture emerges from the problem, not from a template.
> My work prioritizes clarity, evolvability, and honest trade-off documentation.

---

### Expertise Domains

**Requirements**:
- 3-5 domains maximum
- Describe problem spaces, not technologies
- Each domain: 1 phrase or short sentence
- No tool lists (not "Kubernetes, Docker, AWS")

**Format**:
```
- {Domain}: {Brief descriptor}
```

**Sample** (placeholder):
- **Distributed Systems**: Designing for failure, consistency, and coordination
- **Platform Engineering**: Building foundations that teams actually want to use
- **Data Architecture**: Moving, transforming, and governing information at scale
- **System Evolution**: Migrating legacy systems without stopping the business

---

## 2. About Page Content Contract

### Format

**Requirements**:
- Essay format (paragraphs, not bullets)
- 800-1500 words total
- First-person voice
- Reflective and thoughtful tone
- No job history timeline

### Required Sections

#### Section 1: Professional Philosophy (~300-500 words)

**Must answer**:
- How do you approach system design?
- What do you think about before writing code?
- How do you balance competing concerns?

**Must NOT include**:
- List of past employers
- Technology certifications
- Years of experience in specific tools

#### Section 2: Core Principles (~200-400 words)

**Requirements**:
- 3-5 explicit principles
- Each principle has a name and brief explanation
- Include the trade-off each principle implies

**Format**:
```
### {Principle Name}
{2-4 sentences explaining the principle and its trade-off}
```

**Sample principles** (placeholders):
- **Simplicity over cleverness**: Solutions should be understandable by the team that maintains them
- **Constraints inform design**: Every good decision starts with understanding what cannot change
- **Documentation is a deliverable**: Architecture that isn't communicated doesn't exist

#### Section 3: Problems I Enjoy (~200-300 words)

**Must answer**:
- What types of challenges energize you?
- What makes a problem interesting?
- What do you find yourself thinking about?

---

## 3. Experience Page Content Contract

### Domain Entry Format

Each problem domain must include all five sections.

**Template**:
```markdown
## {Domain Name}

### Context
{2-3 paragraphs: What problems existed? Why did they matter? 
What was at stake for the business/users?}

### Constraints
{Bulleted list or paragraph: What limitations shaped decisions?
- Budget/timeline constraints
- Team capabilities
- Existing technical debt
- Regulatory requirements}

### Key Decisions
{2-4 significant architectural decisions with brief rationale.
Focus on WHY, not just WHAT.}

### Outcomes
{Measurable results where possible. What changed?
Avoid vanity metrics. Include honest assessment.}

### Lessons
{What would you do differently? What surprised you?
This section shows growth and reflection.}
```

### Domain Requirements

- Minimum 4 domains
- Maximum 6 domains
- Each domain: 400-800 words
- No company names required (optional)
- No tool-centric framing

### Prohibited Content

- ❌ "Worked with microservices architecture"
- ❌ "Implemented CI/CD pipelines"
- ❌ "Used AWS, Azure, GCP"
- ✅ "Decomposed a monolith to improve team autonomy while managing the coordination overhead of distributed transactions"

---

## 4. Blog Article Content Contract

### Frontmatter (Required)

```yaml
---
title: "string, 10-80 characters"
date: "YYYY-MM-DD"
category: "case-study|design-tradeoffs|system-evolution|failures-lessons|technology-reasoning"
description: "string, 80-160 characters"
---
```

### Content Requirements

| Category | Expected Length | Focus |
|----------|-----------------|-------|
| case-study | 1500-3000 words | Specific project, decisions, outcomes |
| design-tradeoffs | 1000-2500 words | Analysis of competing approaches |
| system-evolution | 1500-3000 words | How a system changed over time |
| failures-lessons | 1000-2000 words | Honest postmortem with learning |
| technology-reasoning | 800-1500 words | Why adopt or avoid something |

### Structure Guidelines

**Case Study Structure**:
1. Problem statement
2. Context and constraints
3. Options considered
4. Decision and rationale
5. Implementation highlights
6. Results and reflection

**Design Trade-offs Structure**:
1. The tension being explored
2. Option A: strengths, weaknesses
3. Option B: strengths, weaknesses
4. Decision criteria
5. When to choose each

**Failures & Lessons Structure**:
1. What happened (factual)
2. Why it happened (analysis)
3. What we tried
4. What we learned
5. What changed as a result

### Code Block Requirements

- Language annotation required: ` ```javascript `
- Maximum 50 lines per block (break into multiple if needed)
- Relevant comments inline
- Prefer pseudocode over framework-specific code for concepts

### Diagram Requirements

- Format: Inline (base64) or external file reference
- Preferred: SVG for crispness at any size
- Maximum width: 800px
- Must have alt text for accessibility
- Simple boxes and arrows preferred over complex tooling

---

## 5. Note Content Contract

### Frontmatter (Required)

```yaml
---
title: "string, 5-60 characters"
date: "YYYY-MM-DD"
---
```

### Content Requirements

- Length: 100-500 words
- Informal tone acceptable
- May include diagrams
- May be incomplete thoughts (marked as such)
- No category required

### Purpose Examples

- Quick reactions to industry news
- Diagrams explaining a concept
- Questions being explored
- Drafts of future blog topics

---

## 6. Contact Page Content Contract

### Opening Statement

**Requirements**:
- 1-2 sentences
- Inviting but professional
- Sets expectation for type of contact welcome

**Sample**:
> I enjoy conversations about architecture challenges, technical leadership, and the craft of building systems. If you're working through a difficult design decision or want to discuss ideas, reach out.

### Availability Statement

**Requirements**:
- Clear about response time
- Honest about what conversations are welcome
- No sales language

**Sample**:
> I typically respond within a few days. I'm most interested in conversations about architectural challenges, speaking opportunities, and thoughtful technical discussions. I'm not currently taking on consulting work.

### Contact Methods Display

**Format**:
```
Email: {email@domain.com}
LinkedIn: {full URL}
GitHub: {full URL}
```

**Requirements**:
- Email displayed in plain text (not "email me" button)
- Full URLs, not just usernames
- No contact form

---

## Content Quality Checklist

Before publishing any content, verify:

- [ ] No buzzwords or clichés
- [ ] No tool dumps without context
- [ ] First-person voice used appropriately
- [ ] Demonstrates thinking, not just doing
- [ ] Appropriate length for content type
- [ ] Code blocks have language annotations
- [ ] Images have alt text
- [ ] Links are functional
- [ ] Frontmatter is valid YAML
- [ ] Grammar and spelling checked
