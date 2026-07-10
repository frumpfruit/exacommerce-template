import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton — button that subtly moves toward the cursor on hover.
 * React Bits magnetic effect pattern.
 * @param {React.ReactNode} children
 * @param {number} strength - How strong the magnetic pull is (default: 0.25)
 * @param {string|React.ComponentType} as - HTML tag or component ('button', 'a', Link, etc.)
 * @param {string} className
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.25,
  as: Tag = 'button',
  ...props
}) {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  // Support string tags OR component references (e.g. react-router Link)
  const MotionTag = typeof Tag === 'string'
    ? motion[Tag] || motion.button
    : motion.create(Tag);

  return (
    <MotionTag
      ref={btnRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.5 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
