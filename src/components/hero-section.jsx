import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a `cn` utility for classnames
import { Button } from '@/components/ui/button'; // Assuming shadcn Button component

// Reusable animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

/**
 * A responsive hero section component with animated text and card images.
 */
export const FinancialHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
  imageUrl1,
  imageUrl2,
  className
}) => {
  // Inline style for the grid background to easily use CSS variables
  // Inline style for a highly visible and beautifully themed grid background
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(rgba(29, 78, 216, 0.08) 1px, transparent 1px), linear-gradient(to right, rgba(29, 78, 216, 0.08) 1px, transparent 1px)',
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <section
      className={cn('relative w-full overflow-hidden bg-[#0A0F1D] text-white', className)}>
      {/* 1. Grid Texture */}
      <div className="absolute inset-0 opacity-80" style={gridBackgroundStyle} />
      
      {/* 2. Soft Radial Glowing Lights */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />
      
      {/* 3. Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/50 via-[#0A0F1D]/90 to-[#0A0F1D]" />

      <motion.div
        className="relative container mx-auto flex min-h-[80vh] items-center justify-between px-6 py-20 lg:flex-row flex-col gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        {/* Left: Text Content */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 z-10">
          <motion.h1
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight"
            variants={itemVariants}>
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg text-slate-300/90"
            variants={itemVariants}>
            {description}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            {buttonLink ? (
              <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 text-base">
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            ) : (
              <Button size="lg" className="h-12 px-8 text-base" onClick={onButtonClick}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </motion.div>
        </div>

        {/* Right: Card Images */}
        <motion.div
          className="relative lg:w-1/2 w-full flex items-center justify-center min-h-[350px] md:min-h-[450px]"
          variants={cardsVariants}>
          {/* Back Card */}
          <motion.img
            src={imageUrl2}
            alt="Financial Card Back"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: -5, zIndex: 20, transition: { duration: 0.3 } }}
            className="absolute w-[240px] md:w-[360px] h-[160px] md:h-[240px] rounded-2xl shadow-2xl object-cover transform rotate-[-6deg] translate-x-12 md:translate-x-20 z-0" />
          {/* Front Card */}
          <motion.img
            src={imageUrl1}
            alt="Financial Card Front"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: 5, zIndex: 20, transition: { duration: 0.3 } }}
            className="absolute w-[240px] md:w-[360px] h-[160px] md:h-[240px] rounded-2xl shadow-2xl object-cover transform rotate-[6deg] -translate-x-12 md:-translate-x-20 z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};