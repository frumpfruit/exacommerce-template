/**
 * ScrollReveal.jsx — RETAIL / Haven (HAVEN Home Living)
 *
 * Personality: Editorial, luxurious, slow-breathing — like turning a magazine page
 * Effects:
 *  - direction="up"       → gentle fade + float
 *  - direction="left"     → cinematic slide from right with slight rotation
 *  - direction="right"    → cinematic slide from left with slight rotation
 *  - direction="dissolve" → pure opacity dissolve (no movement, editorial)
 *  - direction="rise"     → rises with a subtle 3D perspective tilt
 *  - direction="reveal"   → mask reveal (clip-path from left to right, like pulling a veil)
 *  - staggerIndex         → used to stagger multiple children (e.g., 80ms intervals)
 */

import React from 'react';
import { useIntersection } from '../../../lib/motionHooks';

const EASINGS = {
  editorial:   'cubic-bezier(0.25, 0.1, 0.1, 1)',    // slow & refined
  cinematic:   'cubic-bezier(0.16, 1, 0.3, 1)',       // fast start, slow finish
  breathe:     'cubic-bezier(0.4, 0, 0.2, 1)',        // Google material easing
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1100,     // Retail is SLOWER — premium feel
  distance = 30,
  easing = 'editorial',
  staggerIndex = 0,
  className = '',
  style = {},
}) {
  const totalDelay = delay + staggerIndex * 100;
  const [ref, isVisible] = useIntersection(0.05, '0px -20px'); // triggers slightly early

  let hiddenTransform = 'none';
  let hiddenClip = undefined;

  switch (direction) {
    case 'up':
      hiddenTransform = `translateY(${distance}px)`;
      break;
    case 'down':
      hiddenTransform = `translateY(-${distance}px)`;
      break;
    case 'left':
      // Comes from right, with a very subtle clockwise rotation
      hiddenTransform = `translateX(${distance * 1.8}px) rotate(0.5deg)`;
      break;
    case 'right':
      // Comes from left, with a very subtle counter-clockwise rotation
      hiddenTransform = `translateX(-${distance * 1.8}px) rotate(-0.5deg)`;
      break;
    case 'dissolve':
      // Pure fade — no transform at all. Most editorial.
      hiddenTransform = 'none';
      break;
    case 'rise':
      // 3D perspective-style rise
      hiddenTransform = `translateY(${distance * 0.8}px) perspective(600px) rotateX(4deg)`;
      break;
    case 'reveal':
      // Horizontal clip-path mask reveal — like pulling a veil sideways
      hiddenClip = 'inset(0 100% 0 0)';
      break;
    case 'none':
    default:
      hiddenTransform = 'none';
  }

  const easingValue = EASINGS[easing] || EASINGS.editorial;
  const isReveal = direction === 'reveal';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : direction === 'reveal' ? 1 : 0,
        transform: isVisible ? 'none' : hiddenTransform,
        clipPath: isReveal
          ? isVisible ? 'inset(0 0% 0 0)' : hiddenClip
          : undefined,
        transition: [
          direction !== 'reveal'
            ? `opacity ${duration}ms ${easingValue} ${totalDelay}ms`
            : null,
          hiddenTransform !== 'none' && !isReveal
            ? `transform ${duration}ms ${easingValue} ${totalDelay}ms`
            : null,
          isReveal
            ? `clip-path ${duration * 1.1}ms ${easingValue} ${totalDelay}ms`
            : null,
        ].filter(Boolean).join(', '),
        willChange: isReveal ? 'clip-path' : 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
