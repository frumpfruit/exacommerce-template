import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a `cn` utility for classnames
import { Button } from '@/components/ui/button'; // Assuming shadcn Button component

/**
 * A responsive hero section component with card images.
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
 
      <div
        className="relative container mx-auto flex min-h-[70vh] items-center justify-between px-6 py-16 flex-col lg:flex-row gap-12"
        style={{ position: 'relative', zIndex: 3 }}
      >
        {/* Left: Text Content */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2"
          style={{ zIndex: 10 }}
        >
          <h1
            className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: '#ffffff', lineHeight: 1.15, margin: 0, fontWeight: 800 }}
          >
            {title}
          </h1>
          <p
            className="mt-6 max-w-xl text-lg"
            style={{ color: 'rgba(226, 232, 240, 0.9)', margin: '24px 0 0 0', fontSize: '17px', lineHeight: 1.6 }}
          >
            {description}
          </p>
          <div className="mt-8" style={{ marginTop: '32px' }}>
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
          </div>
        </div>
 
        {/* Right: Card Images */}
        <div
          className="relative lg:w-1/2 w-full flex items-center justify-center"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
            flex: 1
          }}
        >
          {/* Back Card */}
          <img
            src={imageUrl2}
            alt="Financial Card Back"
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
          <img
            src={imageUrl1}
            alt="Financial Card Front"
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
        </div>
      </div>
    </section>
  );
};