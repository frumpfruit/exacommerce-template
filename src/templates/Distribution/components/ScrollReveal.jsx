/**
 * ScrollReveal.jsx — DISTRIBUTION / Nexus (UPGRADED)
 *
 * Personality: Precision, industrial, mechanical — sharp and confident
 * Effects:
 *  - direction="up"       → crisp translateY, fast decel
 *  - direction="left"     → sharp slide from right
 *  - direction="right"    → sharp slide from left
 *  - direction="clip"     → clip-path wipe reveal (curtain opens)
 *  - direction="counter"  → counter-intuitive overshoot (goes wrong direction briefly)
 *  - direction="scale"    → precise scale from slightly smaller
 *  - direction="none"     → fade only
 *
 * NOTE: framer-motion is available in this template for the card stack.
 * This component uses pure CSS transitions for performance.
 */

import React from 'react';
import { useIntersection } from '../../../lib/motionHooks';

const EASING = {
  precision: 'cubic-bezier(0.22, 1, 0.36, 1)',    // expo ease out — sharp stop
  mechanical: 'cubic-bezier(0.87, 0, 0.13, 1)',    // very sharp S-curve
  linear: 'linear',
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  distance = 28,
  easing = 'precision',
  staggerIndex = 0,
  className = '',
  style = {},
}) {
  const totalDelay = delay + staggerIndex * 60;
  const [ref, isVisible] = useIntersection(0.1, '0px');

  let hiddenTransform = 'none';
  let hiddenClip = 'none';

  switch (direction) {
    case 'up':
      hiddenTransform = `translateY(${distance}px)`;
      break;
    case 'down':
      hiddenTransform = `translateY(-${distance}px)`;
      break;
    case 'left':
      hiddenTransform = `translateX(${distance * 2}px)`;
      break;
    case 'right':
      hiddenTransform = `translateX(-${distance * 2}px)`;
      break;
    case 'clip':
      // Clip-path wipe from bottom — like a curtain rising
      hiddenClip = 'inset(100% 0 0 0)';
      break;
    case 'counter':
      // Goes down first then springs up — counter-intuitive industrial feel
      hiddenTransform = `translateY(-${distance * 0.5}px)`;
      break;
    case 'scale':
      hiddenTransform = `scale(0.94)`;
      break;
    case 'none':
    default:
      hiddenTransform = 'none';
  }

  const easingValue = EASING[easing] || EASING.precision;

  const isClip = direction === 'clip';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : hiddenTransform,
        clipPath: isClip
          ? isVisible ? 'inset(0% 0 0 0)' : hiddenClip
          : undefined,
        transition: [
          `opacity ${duration}ms ${easingValue} ${totalDelay}ms`,
          !isClip && hiddenTransform !== 'none'
            ? `transform ${duration}ms ${easingValue} ${totalDelay}ms`
            : null,
          isClip
            ? `clip-path ${duration * 1.2}ms ${easingValue} ${totalDelay}ms`
            : null,
        ].filter(Boolean).join(', '),
        willChange: isClip ? 'clip-path, opacity' : 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
