# Maersk

## Mission
Create implementation-ready, token-driven UI guidance for Maersk that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: Maersk
- URL: https://www.maersk.com/
- Audience: readers and knowledge seekers
- Product surface: e-commerce storefront

# Style Foundations

## Visual Style

* Visual style: modern, trustworthy, enterprise-grade, globally scalable
* Design principles: clarity, hierarchy, consistency, operational efficiency
* Interface personality: professional, data-driven, commerce-focused
* Product focus: B2B trading, distribution, sourcing, procurement, and supply chain operations

## Typography

### Primary Font

* `font.family.primary=Inter`
* `font.family.stack=Inter, Arial, -apple-system, BlinkMacSystemFont, sans-serif`

### Base Typography

* `font.size.base=16px`
* `font.weight.base=400`
* `font.lineHeight.base=24px`

### Typography Scale

* `font.size.xs=12px`
* `font.size.sm=14px`
* `font.size.md=16px`
* `font.size.lg=18px`
* `font.size.xl=24px`
* `font.size.2xl=40px`
* `font.size.3xl=56px`

### Font Weights

* `font.weight.regular=400`
* `font.weight.medium=500`
* `font.weight.semibold=600`
* `font.weight.bold=700`

## Color Palette

### Text Colors

* `color.text.primary=#111827`
* `color.text.secondary=#FFFFFF`
* `color.text.tertiary=#6B7280`

### Surface Colors

* `color.surface.base=#FFFFFF`
* `color.surface.subtle=#F8FAFC`
* `color.surface.strong=#0F172A`

### Brand Colors

* `color.brand.primary=#1D4ED8`
* `color.brand.secondary=#2563EB`
* `color.brand.accent=#F59E0B`

### Border Colors

* `color.border.default=#E5E7EB`
* `color.border.strong=#9CA3AF`

### Status Colors

* `color.status.success=#16A34A`
* `color.status.warning=#D97706`
* `color.status.error=#DC2626`
* `color.status.info=#2563EB`

## Spacing Scale

* `space.1=4px`
* `space.2=8px`
* `space.3=12px`
* `space.4=16px`
* `space.5=24px`
* `space.6=32px`
* `space.7=48px`
* `space.8=64px`

## Radius Tokens

* `radius.xs=4px`
* `radius.sm=8px`
* `radius.md=12px`
* `radius.lg=20px`

## Shadow Tokens

* `shadow.sm=0 1px 2px rgba(0,0,0,0.05)`
* `shadow.md=0 4px 8px rgba(0,0,0,0.08)`
* `shadow.lg=0 12px 24px rgba(0,0,0,0.12)`

## Motion Tokens

* `motion.duration.instant=150ms`
* `motion.duration.fast=250ms`
* `motion.duration.normal=350ms`
* `motion.easing.standard=ease-in-out`

## Layout Foundations

* `container.maxWidth=1440px`
* `container.contentWidth=1280px`
* `grid.columns.desktop=12`
* `grid.columns.tablet=8`
* `grid.columns.mobile=4`

## Accessibility Foundations

* WCAG 2.2 AA compliance required
* Visible focus indicators required
* Keyboard-first navigation required
* Minimum contrast ratio:

  * Normal text: 4.5:1
  * Large text: 3:1
  * Interactive controls: 3:1
* Interactive touch target minimum:

  * `44px × 44px`
  
## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (384), buttons (110), lists (38), cards (31), inputs (11), navigation (5).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
