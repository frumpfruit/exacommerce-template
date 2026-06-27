---
name: Premium Lifestyle Commerce
colors:
  surface: '#f7f9ff'
  surface-dim: '#bdddff'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e2efff'
  surface-container-high: '#d8eaff'
  surface-container-highest: '#cde5ff'
  on-surface: '#001d32'
  on-surface-variant: '#41474f'
  inverse-surface: '#003352'
  inverse-on-surface: '#e8f2ff'
  outline: '#717880'
  outline-variant: '#c1c7d0'
  surface-tint: '#256291'
  primary: '#003759'
  on-primary: '#ffffff'
  primary-container: '#004e7c'
  on-primary-container: '#89bff4'
  inverse-primary: '#97cbff'
  secondary: '#9b442b'
  on-secondary: '#ffffff'
  secondary-container: '#fd9072'
  on-secondary-container: '#752812'
  tertiary: '#2b3536'
  on-tertiary: '#ffffff'
  tertiary-container: '#424c4c'
  on-tertiary-container: '#b1bcbc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#97cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a76'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#7c2d17'
  tertiary-fixed: '#dae5e5'
  tertiary-fixed-dim: '#bec9c9'
  on-tertiary-fixed: '#131d1e'
  on-tertiary-fixed-variant: '#3e4949'
  background: '#f7f9ff'
  on-background: '#001d32'
  surface-variant: '#cde5ff'
  ocean-deep: '#024871'
  soft-mint: '#EDF8F8'
  pure-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter-desktop: 32px
  gutter-mobile: 16px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

This design system balances the authority of established luxury with the vibrant energy of a modern startup. It utilizes a **Corporate / Modern** base, infused with high-contrast elements and generous whitespace to create an atmosphere of "approachable premium." 

The visual narrative is built on the tension between the deep, stable Primary Blue and the energetic Warm Coral. It avoids the coldness of pure minimalism by employing soft geometric shapes and subtle tonal shifts. The focus is on clarity and product storytelling, ensuring that every interface element feels purposeful and every interaction feels confident.

## Colors

The palette is anchored by **Primary Blue (#004E7C)**, which serves as the fundamental layer of trust and brand recognition. It is used for major structural elements like navigation bars and primary buttons. 

**Warm Coral (#F58A6C)** acts as the functional accent, reserved strictly for primary Calls to Action (CTAs) and critical focus states. This ensures that the most important actions stand out against the deep blue background.

**Soft Mint (#EDF8F8)** is the secondary background color, used to create subtle section differentiation and "container" backgrounds that prevent the interface from feeling stark. **Ocean Deep (#024871)** provides an even darker variant for high-contrast text or footer areas.

## Typography

This design system uses **Hanken Grotesk** for headlines to achieve a sharp, contemporary look that mirrors the geometric precision of premium industrial design. It provides a confident, high-fashion impact in large sizes.

**Inter** is selected for body and label text to ensure maximum legibility across all screen densities. It provides a functional, systematic contrast to the more expressive headlines.

- **Display levels** are reserved for hero sections and major product announcements.
- **Labels** utilize a slight tracking (letter spacing) increase and uppercase styling for a refined, professional look in navigation and small UI markers.
- **Line heights** are intentionally generous to maintain the airy, premium feel of the brand.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop, centered on a 1280px container to ensure product photography is presented with optimal focus. 

- **Desktop (1024px+):** 12-column grid with 32px gutters and 64px outer margins.
- **Tablet (768px - 1023px):** 8-column grid with 24px gutters and 40px margins.
- **Mobile (0px - 767px):** 4-column fluid grid with 16px gutters and 20px margins.

Spacing relies on a strict 8px base unit. Vertical rhythm is defined by "stack" variables: use `stack-xl` for section breaks to maintain the "generous whitespace" brand pillar, and `stack-md` for internal component spacing.

## Elevation & Depth

To maintain a modern, clean aesthetic, this design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use `pure-white` for the primary surface. Use `soft-mint` for secondary backgrounds (like "How it Works" sections or cart sidebars) to create depth without adding visual weight.
- **Outlines:** Use a 1px border in a 10% opacity version of Primary Blue for card borders and input fields.
- **Interactive Depth:** When an element requires elevation (like a floating shopping cart or a modal), use an **Ambient Shadow**: a very large blur (30px+), low opacity (8%), and a slight tint of Primary Blue to keep the shadow feeling integrated with the brand colors rather than a neutral gray.

## Shapes

The shape language is **Rounded**, conveying approachability and ergonomic comfort. 

- **Standard Buttons & Inputs:** Use the base `0.5rem` (8px) radius.
- **Cards & Product Containers:** Use `rounded-lg` (1rem/16px) to create a soft frame for photography.
- **Icons & Badges:** Small utility elements like notification badges or sale tags should use the `rounded-xl` (1.5rem/24px) or full pill-shape to distinguish them from structural UI elements.

## Components

### Buttons
- **Primary:** Background: Primary Blue; Text: White. Bold weight. High-contrast.
- **CTA:** Background: Warm Coral; Text: White. Used sparingly for "Buy Now" or "Checkout."
- **Secondary/Ghost:** Border: 2px Primary Blue; Text: Primary Blue; Background: Transparent.

### Input Fields
- Use a clean 1px outline. On focus, the border transitions to Primary Blue with a 2px thickness. Labels should be small and uppercase (`label-lg`) positioned above the field.

### Cards
- Product cards are the centerpiece. Use a `pure-white` background with a `rounded-lg` corner. Ensure imagery has a consistent aspect ratio (1:1 or 4:5). Text is left-aligned with `headline-md` for titles and `body-md` for pricing.

### Chips & Tags
- Use `soft-mint` backgrounds with Primary Blue text for category filters or status tags. This keeps them legible but visually subordinate to the primary actions.

### Lists
- For product specs or feature lists, use custom Primary Blue checkmarks rather than default bullets to reinforce brand identity. Use `stack-sm` for tight spacing between related list items.