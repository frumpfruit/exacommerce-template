import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress — thin progress bar at the very top of the viewport
 * that fills as the user scrolls down the page.
 */
export default function ScrollProgress({ color = '#0066FF', height = 2 }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left"
      style={{
        scaleX,
        height,
        background: color,
        transformOrigin: '0%',
      }}
    />
  );
}
