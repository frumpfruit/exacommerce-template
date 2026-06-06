import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  easing = 'default', // 'default', 'elastic', 'smooth'
  distance = 30
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let initialTransform = 'translateY(0)';
  switch (direction) {
    case 'up': initialTransform = `translateY(${distance}px)`; break;
    case 'down': initialTransform = `translateY(-${distance}px)`; break;
    case 'left': initialTransform = `translateX(${distance}px)`; break;
    case 'right': initialTransform = `translateX(-${distance}px)`; break;
    case 'scale': initialTransform = `scale(0.95)`; break;
    case 'none': initialTransform = `translate(0)`; break;
    default: initialTransform = `translateY(${distance}px)`; break;
  }

  let transitionEasing = 'ease';
  switch (easing) {
    case 'elastic': transitionEasing = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'; break;
    case 'smooth': transitionEasing = 'cubic-bezier(0.4, 0, 0.2, 1)'; break;
    default: transitionEasing = 'ease'; break;
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? (direction === 'scale' ? 'scale(1)' : 'translate(0)') : initialTransform,
        transition: `opacity 0.8s ${transitionEasing} ${delay}ms, transform 0.8s ${transitionEasing} ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
