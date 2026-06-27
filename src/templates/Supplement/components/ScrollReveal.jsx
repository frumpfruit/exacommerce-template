/**
 * ScrollReveal.jsx — SUPPLEMENT / NutriPride
 * 
 * Personality: Organic, alive, nature-inspired
 * Effects:
 *  - direction="up"    → fade + float up (default, feels like breathing)
 *  - direction="left"  → slide in from right with organic ease
 *  - direction="right" → slide in from left with organic ease
 *  - direction="grow"  → scale + fade, like a plant growing
 *  - direction="blur"  → blur dissolve, reveals sharpness
 *  - parallax          → when parallax={true}, wraps children in a parallax layer
 *  - stagger           → pass staggerIndex for sequenced children
 */

import React from 'react';
import { useIntersection } from '../../../lib/motionHooks';

const EASINGS = {
  organic: 'cubic-bezier(0.16, 1.04, 0.3, 1)',   // slightly bouncy, alive
  smooth:  'cubic-bezier(0.4, 0, 0.15, 1)',        // smooth decel
  gentle:  'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // gentle classic
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 900,
  distance = 36,
  easing = 'organic',
  staggerIndex = 0,  // for sequential reveals inside a container
  className = '',
  style = {},
}) {
  const totalDelay = delay + staggerIndex * 80;
  const [ref, isVisible] = useIntersection(0.08, '0px -30px');

  // Build the "hidden" transform per direction
  let hiddenTransform = 'translateY(0)';
  let hiddenFilter = 'none';

  switch (direction) {
    case 'up':
      hiddenTransform = `translateY(${distance}px)`;
      break;
    case 'down':
      hiddenTransform = `translateY(-${distance}px)`;
      break;
    case 'left':
      // Comes in from the RIGHT
      hiddenTransform = `translateX(${distance * 1.5}px)`;
      break;
    case 'right':
      // Comes in from the LEFT
      hiddenTransform = `translateX(-${distance * 1.5}px)`;
      break;
    case 'grow':
      hiddenTransform = `scale(0.88) translateY(${distance * 0.5}px)`;
      break;
    case 'blur':
      hiddenTransform = `translateY(${distance * 0.4}px)`;
      hiddenFilter = 'blur(12px)';
      break;
    case 'none':
    default:
      hiddenTransform = 'none';
  }

  const easingValue = EASINGS[easing] || EASINGS.organic;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : hiddenTransform,
        filter: isVisible ? 'none' : hiddenFilter,
        transition: [
          `opacity ${duration}ms ${easingValue} ${totalDelay}ms`,
          `transform ${duration}ms ${easingValue} ${totalDelay}ms`,
          hiddenFilter !== 'none'
            ? `filter ${duration * 1.1}ms ${easingValue} ${totalDelay}ms`
            : null,
        ].filter(Boolean).join(', '),
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
