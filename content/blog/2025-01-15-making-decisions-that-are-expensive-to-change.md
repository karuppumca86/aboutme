---
title: Making Decisions That Are Expensive to Change
date: 2025-01-15
category: Architecture
description: How to identify which architectural decisions will be hard to reverse, and how to approach them with appropriate care without falling into analysis paralysis.
slug: making-decisions-that-are-expensive-to-change
---

The most important skill in software architecture isn't knowing the latest patterns or understanding distributed systems theory. It's knowing which decisions matter.

Every day, teams make thousands of decisions about their software—variable names, function boundaries, data structures, API designs, technology choices. Most of these decisions are cheap to reverse. If you pick the wrong name for a function, you can rename it. If you structure a class poorly, you can refactor it. These decisions deserve thought, but they don't deserve agonizing.

But some decisions are expensive to change. Database schemas that span multiple services. API contracts with external consumers. The fundamental data model that underlies your entire domain. These decisions compound over time, and changing them later can cost orders of magnitude more than getting them right initially.

## The Reversibility Spectrum

I find it helpful to think about decisions on a spectrum of reversibility:

**Easily Reversible (Minutes to Hours)**
- Local variable and function names
- Implementation details within a module
- Choice of utility libraries for internal use

**Moderately Difficult (Days to Weeks)**
- Internal API designs between modules
- Database indexes and query patterns
- Configuration and deployment scripts

**Expensive (Weeks to Months)**
- Service boundaries in a distributed system
- External API contracts
- Database schema fundamentals

**Very Expensive (Months to Years)**
- Core data model and entity relationships
- Fundamental technology choices (programming language, data store type)
- Architectural style (monolith vs. microservices, sync vs. async)

The further right on this spectrum, the more analysis paralysis becomes justified. The further left, the more you should bias toward action and iteration.

## Signs You're Facing an Expensive Decision

How do you know when you're facing a decision that deserves extra scrutiny? Look for these warning signs:

### Multiple Teams Will Build on This Foundation

If other teams will depend on your decision, changing it later requires coordinating across organizational boundaries. A database schema that one service uses can be changed with a migration script. A schema that twenty services depend on requires careful versioning, communication, and potentially years of migration effort.

### External Parties Are Involved

Contracts with external consumers—whether APIs, file formats, or protocols—are especially hard to change. You don't control the other side of the integration, and you may have legal or commercial commitments that constrain your options.

### The Decision Is Structural Rather Than Behavioral

Behavioral decisions affect what the system does. Structural decisions affect how the system is organized. Structural decisions tend to be harder to change because they shape the mental models that developers use to understand the system.

### You're Making Assumptions About Scale

Decisions that work at one scale often don't work at another. If you're assuming current load will stay constant, you're probably wrong. But you can also over-engineer for scale that never comes. The key is being honest about your assumptions and designing for reasonable growth, not infinite scale.

## Approaching Expensive Decisions

When you've identified that you're facing an expensive decision, here's how to approach it:

### 1. Make the Decision Visible

The first step is ensuring everyone knows this is an expensive decision. Document it explicitly. Create an Architecture Decision Record (ADR) that captures the context, the options considered, and the reasoning behind the choice. This serves two purposes: it forces you to think through the decision carefully, and it helps future maintainers understand why things are the way they are.

### 2. Validate Assumptions Explicitly

Every architectural decision is built on assumptions about the future. Make those assumptions explicit and test them where possible. If you're assuming that writes will always be rare, measure current write patterns and project growth. If you're assuming that certain data will always be accessed together, verify with stakeholders.

```javascript
// Example: Document your assumptions
const DESIGN_ASSUMPTIONS = {
  writeToReadRatio: "1:1000 - Writes are rare compared to reads",
  dataGrowthRate: "~10% monthly based on current metrics",
  accessPatterns: "Events always queried with user_id",
  retentionRequirement: "90 days hot, 2 years cold storage",
};
```

### 3. Design for the Change You Can't Prevent

Some change is inevitable. Instead of trying to predict exactly what will change, design your system so that change is possible. This means:

- **Clear boundaries**: When you need to change something, you want the blast radius to be limited.
- **Well-defined interfaces**: The contract between components should be explicit, making it clear what can change independently.
- **Incremental migration paths**: Design so you can move from A to B without a big-bang cutover.

### 4. Get Independent Review

For truly expensive decisions, get review from someone who isn't invested in your preferred solution. Fresh eyes catch assumptions that have become invisible to you. This doesn't have to be formal—a conversation with a colleague from another team can surface blind spots.

## The Danger of Analysis Paralysis

All of this said, it's possible to overthink decisions. I've seen teams spend months debating architectural choices that could have been validated with a two-week prototype. The goal isn't to eliminate all risk—it's to apply appropriate analysis to decisions based on their reversibility.

A useful heuristic: if you've been debating a decision for more than a week without making progress, you probably need to either gather more data or accept that you're facing genuine uncertainty and make a bet.

The best architects I know are comfortable making decisions with incomplete information. They're just very deliberate about which decisions deserve deep analysis and which deserve a quick call.

## Conclusion

Knowing which decisions are expensive to change is the core skill of software architecture. Master it, and you'll spend your analytical energy where it matters most. You'll make fast decisions where speed is valuable and careful decisions where careful thinking pays off.

The goal isn't to predict the future—it's to position your system so that the future, whatever it holds, doesn't require burning everything down and starting over.
