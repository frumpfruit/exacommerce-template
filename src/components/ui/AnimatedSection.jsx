import React from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedSection — wraps any section with scroll-triggered fade+slide animation.
 * @param {string} className - Additional Tailwind classes
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' (default: 'up')
 * @param {number} delay - Stagger delay in seconds (default: 0)
 * @param {string} as - HTML tag to render (default: 'div')
 */
export default function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  once = true,
  as: Tag = 'div',
  ...props
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px 0px' });

  const directions = {
    up: { hidden: { y: 48, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -48, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: 48, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: -48, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  const variant = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — wraps children with sequential animation */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1, ...props }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
        hidden: {},
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Individual item inside StaggerContainer */
export function StaggerItem({ children, className = '', direction = 'up', ...props }) {
  const directions = {
    up: { hidden: { y: 32, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: 32, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.92, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  };
  return (
    <motion.div
      className={className}
      variants={directions[direction] || directions.up}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
