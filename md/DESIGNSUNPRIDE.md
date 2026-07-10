# Sunpride – Indonesia

## Mission
Create implementation-ready, token-driven UI guidance for Sunpride – Indonesia that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: Sunpride – Indonesia
- URL: https://www.sunpride.co.id/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=BwSurco-medium`, `font.family.stack=BwSurco-medium, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=13px`, `font.size.sm=14px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=21px`, `font.size.4xl=24px`
- Color palette: `color.text.primary=#03582d`, `color.text.secondary=#212529`, `color.text.tertiary=#ffffff`, `color.text.inverse=#0d6efd`, `color.surface.base=#f7faf8`, `color.surface.raised=#78be00`, `color.surface.strong=#ffcd00`
- Spacing scale: `space.1=4px`, `space.2=5px`, `space.3=6px`, `space.4=8px`, `space.5=10px`, `space.6=12px`, `space.7=14px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=3px`, `radius.sm=10px`, `radius.md=20px`, `radius.lg=30px`, `radius.xl=32px`, `radius.2xl=40px`, `radius.step7=50px` | `shadow.1=rgba(0, 0, 0, 0.5) 0px 8px 35px -17px`, `shadow.2=rgba(0, 0, 0, 0.15) 0px 0px 10px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=250ms`, `motion.duration.normal=300ms`, `motion.duration.slow=400ms`, `motion.duration.slower=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

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
- Include known page component density: links (318), buttons (112), lists (24), cards (20), inputs (10), navigation (7).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
