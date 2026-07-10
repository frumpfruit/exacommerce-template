import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROTATING_TEXTS = [
  "Menuju Pasar Global.",
  "Menembus Batas Negara.",
  "Skala Internasional."
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-title-line', 
        { opacity: 0, y: 35 }, 
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.25 }
      )
      .fromTo('.hero-sub', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.7 }, 
        '-=0.4'
      )
      .fromTo('.hero-cta-wrapper', 
        { opacity: 0, scale: 0.98, y: 15 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.6 }, 
        '-=0.3'
      )
      .fromTo('.hero-scroll-indicator', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8 }, 
        '-=0.2'
      );

    // Headline parallax on scroll — scrub is fine for the title since it's a continuous effect
    gsap.fromTo('.hero-title-wrapper',
      { y: 0, opacity: 1 },
      {
        y: 120,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          immediateRender: false,
        }
      }
    );

    // Sub-headline, CTA, and scroll indicator — scrub with immediateRender:false
    // The key fix: these elements properly reverse back to opacity:1 when scrolling up
    gsap.fromTo('.hero-sub',
      { y: 0, opacity: 1 },
      {
        y: 80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '40% top',
          scrub: true,
          immediateRender: false,
        }
      }
    );

    gsap.fromTo('.hero-cta-wrapper',
      { y: 0, opacity: 1 },
      {
        y: 60,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: '5% top',
          end: '45% top',
          scrub: true,
          immediateRender: false,
        }
      }
    );

    gsap.fromTo('.hero-scroll-indicator',
      { y: 0, opacity: 1 },
      {
        y: 40,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '30% top',
          scrub: true,
          immediateRender: false,
        }
      }
    );

    // Video background subtle zoom
    gsap.to('.hero-bg-video-wrapper', {
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to('.hero-transition-overlay', {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '50% top',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      data-theme="dark"
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-between font-body text-white bg-black"
    >
      {/* Cinematic Fullscreen Video Background */}
      <div className="hero-bg-video-wrapper absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-100 transition-transform duration-1000"
        >
          <source src="/images/home/vecteezy_port-container-train_2987831.mp4" type="video/mp4" />
        </video>

        {/* Monochrome Documentary Color Grading */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>

      {/* Scroll Transition Overlay */}
      <div className="hero-transition-overlay absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white opacity-0 z-10 pointer-events-none transition-opacity"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 my-auto grid grid-cols-1 md:grid-cols-12 items-center pt-20">
        
        <div className="md:col-span-9 lg:col-span-8 text-center md:text-left space-y-8 flex flex-col items-center md:items-start">
          
          <div className="hero-title-wrapper space-y-2">
            <h1 className="font-extrabold tracking-tight text-white font-headline leading-tight md:leading-[1.08] drop-shadow-sm">
              <span className="hero-title-line block text-3xl sm:text-5xl md:text-6xl font-extrabold text-white/95 pb-2">
                Memberdayakan UMKM Indonesia
              </span>
              <span className="hero-title-line grid w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] mt-2">
                {ROTATING_TEXTS.map((text, idx) => {
                  let transformClass = 'translate-y-full opacity-0'; 
                  if (idx === textIndex) {
                    transformClass = 'translate-y-0 opacity-100 z-10'; 
                  } else if (idx < textIndex || (textIndex === 0 && idx === ROTATING_TEXTS.length - 1)) {
                    transformClass = '-translate-y-full opacity-0'; 
                  }
                  
                  if (textIndex === 0 && idx === ROTATING_TEXTS.length - 1) {
                    transformClass = '-translate-y-full opacity-0';
                  } else if (textIndex === ROTATING_TEXTS.length - 1 && idx === 0) {
                     transformClass = 'translate-y-full opacity-0';
                  }

                  return (
                    <span 
                      key={idx} 
                      className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out ${transformClass}`}
                    >
                      <span className="underline decoration-2 underline-offset-8 decoration-white/60 pb-2">
                        {text}
                      </span>
                    </span>
                  );
                })}
              </span>
            </h1>
          </div>

          <p className="hero-sub text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-normal drop-shadow-sm text-center md:text-left">
            Exantara adalah platform digital ekspor yang membantu UMKM membangun bisnis digital, memperluas pasar, dan mempersiapkan proses ekspor melalui satu ekosistem yang terintegrasi.
          </p>

          <div className="hero-cta-wrapper flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://exantara.com/sign-in"
              className="group px-8 py-4 rounded bg-white text-black font-body text-xs uppercase tracking-[0.2em] font-black hover:bg-[#d1d5db] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Mulai Bersama Exantara</span>
              <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator relative z-20 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-between items-end text-white/70 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="uppercase tracking-widest text-[11px]">EXANTARA</span>
        </div>
      </div>
    </section>
  );
}
