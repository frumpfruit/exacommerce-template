import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * CountUp — animates a number from 0 to target when in view
 * @param {number} to - Target number
 * @param {number} duration - Animation duration in ms (default: 2000)
 * @param {string} suffix - Text after number (e.g. '%', 'JT+')
 * @param {string} prefix - Text before number (e.g. '$')
 * @param {number} decimals - Decimal places (default: 0)
 */
export default function CountUp({
  to = 100,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    let start = 0;
    const increment = to / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, to, duration, decimals]);

  const displayValue =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('id-ID');

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
