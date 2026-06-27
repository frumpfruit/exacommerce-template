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
      className={cn('relative w-full overflow-hidden text-white', className)}
      style={{ backgroundColor: '#0A0F1D', position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      {/* 1. Grid Texture */}
      <div className="absolute inset-0 opacity-80" style={gridBackgroundStyle} />
      
      {/* 2. Soft Radial Glowing Lights */}
      <div style={{
        position: 'absolute', top: '-160px', right: '-160px',
        width: '600px', height: '600px', borderRadius: '50%',
        backgroundColor: 'rgba(37, 99, 235, 0.12)', filter: 'blur(150px)',
        pointerEvents: 'none', zIndex: 1
      }} />
      <div style={{
        position: 'absolute', bottom: '-160px', left: '-160px',
        width: '500px', height: '500px', borderRadius: '50%',
        backgroundColor: 'rgba(79, 70, 229, 0.12)', filter: 'blur(130px)',
        pointerEvents: 'none', zIndex: 1
      }} />
      
      {/* 3. Gradient Overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10, 15, 29, 0.4) 0%, rgba(10, 15, 29, 0.85) 60%, rgba(10, 15, 29, 1) 100%)',
          zIndex: 2
        }}
      />
 
      <motion.div
        className="relative container mx-auto flex min-h-[70vh] items-center justify-between px-6 py-16 lg:flex-row flex-col gap-12"
        style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2"
          style={{ display: 'flex', flexDirection: 'column', flex: 1, zIndex: 10 }}
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: '#ffffff', lineHeight: 1.15, margin: 0, fontWeight: 800 }}
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg"
            style={{ color: 'rgba(226, 232, 240, 0.9)', margin: '24px 0 0 0', fontSize: '17px', lineHeight: 1.6 }}
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8" style={{ marginTop: '32px' }}>
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
          className="relative lg:w-1/2 w-full flex items-center justify-center"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
            flex: 1
          }}
          variants={cardsVariants}
        >
          {/* Back Card */}
          <motion.img
            src={imageUrl2}
            alt="Financial Card Back"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: -5, zIndex: 20, transition: { duration: 0.3 } }}
            style={{
              position: 'absolute',
              width: '260px',
              height: '170px',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              objectFit: 'cover',
              transform: 'rotate(-6deg) translateX(40px)',
              zIndex: 1
            }}
          />
          {/* Front Card */}
          <motion.img
            src={imageUrl1}
            alt="Financial Card Front"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: 5, zIndex: 20, transition: { duration: 0.3 } }}
            style={{
              position: 'absolute',
              width: '260px',
              height: '170px',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              objectFit: 'cover',
              transform: 'rotate(6deg) translateX(-40px)',
              zIndex: 2
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};