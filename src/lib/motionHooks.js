/**
 * motionHooks.js — Shared animation/motion primitives
 * Each template's ScrollReveal & motion components use these core hooks
 * to build distinctly different animation personalities.
 */

import { useEffect, useRef, useState, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────────
// 1. useIntersection — fires once when element enters viewport
// ─────────────────────────────────────────────────────────────────
export function useIntersection(threshold = 0.1, rootMargin = '0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety fallback: auto-reveal after 300ms if observer doesn't fire
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    if (!window.IntersectionObserver) {
      setIsVisible(true);
      clearTimeout(fallbackTimeout);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimeout);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

// ─────────────────────────────────────────────────────────────────
// 2. useParallax — returns a Y offset based on scroll position
//    factor: positive = moves up slower, negative = moves up faster
// ─────────────────────────────────────────────────────────────────
export function useParallax(factor = 0.3) {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      setOffset((centerY - viewportCenter) * factor);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [factor]);

  return [ref, offset];
}

// ─────────────────────────────────────────────────────────────────
// 3. useScrollProgress — 0→1 progress of element through viewport
// ─────────────────────────────────────────────────────────────────
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const start = window.innerHeight;
      const end = -rect.height;
      const current = rect.top;
      const p = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, progress];
}

// ─────────────────────────────────────────────────────────────────
// 4. useMouseTilt — 3D tilt effect based on mouse position
// ─────────────────────────────────────────────────────────────────
export function useMouseTilt(maxDeg = 10) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -y * maxDeg, rotateY: x * maxDeg });
  }, [maxDeg]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return [ref, tilt, handleMouseMove, handleMouseLeave];
}

// ─────────────────────────────────────────────────────────────────
// 5. useStaggerVisible — returns array of booleans for staggered reveal
// ─────────────────────────────────────────────────────────────────
export function useStaggerVisible(count, staggerMs = 80, threshold = 0.05) {
  const ref = useRef(null);
  const [visibles, setVisibles] = useState(Array(count).fill(false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const triggerReveal = () => {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          setVisibles(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * staggerMs);
      }
    };

    // Safety fallback: auto-reveal after 300ms if observer doesn't fire
    const fallbackTimeout = setTimeout(() => {
      triggerReveal();
    }, 300);

    if (!window.IntersectionObserver) {
      triggerReveal();
      clearTimeout(fallbackTimeout);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerReveal();
          clearTimeout(fallbackTimeout);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
    };
  }, [count, staggerMs, threshold]);

  return [ref, visibles];
}

// ─────────────────────────────────────────────────────────────────
// 6. useCountUp — animates a number from 0 to target on visibility
// ─────────────────────────────────────────────────────────────────
export function useCountUp(target, duration = 1800, decimals = 0) {
  const [ref, isVisible] = useIntersection(0.3);
  const [current, setCurrent] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(+(eased * target).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration, decimals]);

  return [ref, current];
}
