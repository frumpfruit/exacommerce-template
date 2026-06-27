/**
 * motionPresets.js
 * Lightweight, GPU-friendly animation presets for Roastery template.
 * 
 * Rules:
 * - Only animate `opacity` + `transform` (GPU-composited, no layout/paint)
 * - Keep y/x offsets small (≤24px) to avoid visual jank
 * - Duration max 0.55s — anything longer feels sluggish
 * - Use `once: true` so animations don't re-trigger on scroll-up
 */

export const EASE = [0.25, 0.46, 0.45, 0.94]; // smooth ease-out

/** Fade in from below — default for most sections */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: EASE },
};

/** Fade in from left */
export const fadeLeft = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: EASE },
};

/** Fade in from right */
export const fadeRight = {
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: EASE },
};

/** Pure fade — for large section wrappers, bg overlays */
export const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: EASE },
};

/** Scale-in — for cards and CTAs */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.97 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: EASE },
};

/** For staggered children — apply delay manually via (delay: i * 0.07) */
export const staggerChild = (i = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45, ease: EASE, delay: i * 0.08 },
});

/** Hero entrance — animate on mount (not scroll) */
export const heroTitle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE },
};

export const heroSub = (delay = 0.15) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE, delay },
});
