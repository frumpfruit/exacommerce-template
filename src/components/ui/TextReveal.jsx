import React from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * TextReveal — animates text word by word on scroll
 * @param {string} text - The text to animate
 * @param {string} className - Tailwind classes applied to each word span
 * @param {string} as - HTML tag ('h1','h2','h3','p','span') default: 'span'
 * @param {number} stagger - Delay between each word (default: 0.04)
 */
export default function TextReveal({
  text = '',
  className = '',
  as: Tag = 'span',
  stagger = 0.04,
  delay = 0,
  once = true,
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px 0px' });

  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      className="inline"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={container}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${className}`}
          variants={wordVariant}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * CharReveal — animates character by character (for shorter headings)
 */
export function CharReveal({ text = '', className = '', stagger = 0.025, delay = 0 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  const chars = text.split('');

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const charVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      className="inline"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={container}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${char === ' ' ? 'mr-[0.3em]' : ''} ${className}`}
          variants={charVariant}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
