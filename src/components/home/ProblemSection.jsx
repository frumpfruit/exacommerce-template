import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Globe, Sliders } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NODES = [];

const INSIGHTS = [
  {
    title: "Kompleksitas Proses Ekspor",
    desc: "Dokumen, regulasi, dan prosedur sering menjadi hambatan awal bagi pelaku usaha.",
    icon: FileText,
    visual: (
      <div className="relative w-full h-full bg-gradient-to-br from-[#f8f9fa] to-gray-100 flex items-center justify-center p-3">
        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 space-y-2 relative">
          <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center mb-1">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm" />
          </div>
          <div className="w-3/4 h-1.5 bg-gray-200 rounded-full" />
          <div className="w-1/2 h-1.5 bg-gray-200 rounded-full" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-400/10 blur-xl rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Akses Pasar yang Terbatas",
    desc: "Menjangkau pembeli internasional membutuhkan jaringan dan strategi yang tepat.",
    icon: Globe,
    visual: (
      <div className="relative w-full h-full bg-gradient-to-br from-[#f8f9fa] to-gray-100 flex items-center justify-center p-3">
        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center space-x-2.5 relative">
           <div className="w-6 h-6 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center">
             <div className="w-3 h-3 bg-indigo-500 rounded-full" />
           </div>
           <div className="space-y-1.5 flex-1">
             <div className="w-full h-1.5 bg-gray-200 rounded-full" />
             <div className="w-2/3 h-1.5 bg-gray-200 rounded-full" />
           </div>
           <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-indigo-400/10 blur-xl rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Operasional yang Belum Terintegrasi",
    desc: "Pengelolaan bisnis yang masih manual membuat pertumbuhan menjadi kurang efisien.",
    icon: Sliders,
    visual: (
      <div className="relative w-full h-full bg-gradient-to-br from-[#f8f9fa] to-gray-100 flex items-center justify-center p-3">
        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 space-y-2 relative">
          <div className="flex justify-between items-center">
            <div className="w-1/3 h-1.5 bg-gray-200 rounded-full" />
            <div className="w-3 h-3 bg-teal-100 rounded-sm" />
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/2 h-1.5 bg-gray-200 rounded-full" />
            <div className="w-3 h-3 bg-teal-100 rounded-sm" />
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-teal-400/10 blur-xl rounded-full" />
        </div>
      </div>
    )
  }
];

const QUOTE_WORDS = "Ketika seluruh proses terhubung dalam satu ekosistem, peluang menjadi lebih mudah dijangkau.".split(" ");

export default function ProblemSection() {
  const containerRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hoveredInsight, setHoveredInsight] = useState(null);
  const [chartVal, setChartVal] = useState({ potensi: 84, digital: 38, pasar: 42 });

  // Periodic subtle chart fluctuation for live B2B report feel
  useEffect(() => {
    const timer = setInterval(() => {
      setChartVal({
        potensi: 84 + Math.floor(Math.random() * 3) - 1,
        digital: 38 + Math.floor(Math.random() * 3) - 1,
        pasar: 42 + Math.floor(Math.random() * 3) - 1,
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.reality-headline', 
      { clipPath: 'inset(100% 0% 0% 0%)', y: 30 }, 
      { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );

    gsap.fromTo('.reality-copy', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );

    // Phase 2: Fade in Map Image
    gsap.fromTo('.map-base-outline', 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.2, scrollTrigger: { trigger: '.map-container-area', start: 'top 85%' } }
    );

    // 4. Phase 4 (75% scroll): 3 insights fade + translate ~20px from left to right
    gsap.fromTo('.insight-col-item', 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.insights-container-grid', start: 'top 85%' } }
    );

    // 5. Grid items animation for the new diverse layout
    gsap.fromTo('.transition-grid-item',
      { opacity: 0, y: 35, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.transition-grid-area',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 6. Transition to Section 3: Parallax BG Animation
    gsap.to('.parallax-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.fromTo('.quote-word-item', 
      { 
        y: '150%', 
        opacity: 0, 
        rotate: 15,
        scale: 0.8,
        filter: 'blur(10px)'
      }, 
      { 
        y: '0%', 
        opacity: 1, 
        rotate: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2, 
        stagger: 0.06,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.section2-transition-bridge',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="py-16 md:py-32 px-6 md:px-12 bg-white text-[#111827] relative z-20 border-t border-[#e5e7eb] overflow-hidden font-body"
    >
      {/* Subtle background texture grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-24">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Analytical Narration */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-[#f3f4f6] text-[#4b5563] font-mono text-xs uppercase tracking-wider font-semibold">
                Reality Check & Devises
              </span>
              <h2 className="reality-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827] leading-tight md:leading-[1.1] font-headline">
                Potensi Melimpah, <br />
                Akses Terhambat.
              </h2>
            </div>

            <p className="reality-copy text-[#4b5563] text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Produk lokal Indonesia memiliki kualitas yang mampu bersaing di tingkat internasional. Namun perjalanan menuju pasar global masih menghadapi tantangan dalam proses ekspor, akses pasar, dan transformasi digital. Exantara hadir untuk menjembatani kesenjangan tersebut melalui satu ekosistem digital yang terintegrasi.
            </p>

            {/* Premium McKinsey-style data indicators */}
            <div className="pt-6 border-t border-[#e5e7eb] grid grid-cols-3 gap-6 font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-[#6b7280] uppercase block">POTENSI PASAR</span>
                <span className="text-2xl font-bold text-[#111827] font-headline">{chartVal.potensi}%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#6b7280] uppercase block">TERDIGITALISASI</span>
                <span className="text-2xl font-bold text-[#111827] font-headline">{chartVal.digital}%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#6b7280] uppercase block">AKSES EKSPOR</span>
                <span className="text-2xl font-bold text-[#111827] font-headline">{chartVal.pasar}%</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map & Visual Data */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="map-container-area p-6 rounded-2xl bg-[#f8f9fa] border border-[#e5e7eb] shadow-sm relative overflow-hidden">
              
              <div className="flex justify-between items-center pb-4 border-b border-[#e5e7eb] mb-6 text-xs font-mono">
                <span className="text-[#4b5563] font-bold">PETA INTERAKSI EKSPOR NUSANTARA</span>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111827] animate-pulse"></span>
                  <span className="text-[#111827] font-bold">LIVE HUB</span>
                </div>
              </div>

              {/* Dynamic Interactive SVG Map */}
              <div className="relative w-full aspect-[16/10] bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                
                <img 
                  src="/images/generated/peta_ekspor_grounded.png" 
                  alt="Peta Interaksi Ekspor Nusantara" 
                  className="w-full h-full object-cover map-base-outline transition-transform duration-700" 
                />

              </div>

            </div>

          </div>

        </div>

        {/* Column Grid: 3 Editorial Insights */}
        <div className="insights-container-grid grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 md:pt-8">
          {INSIGHTS.map((item, index) => {
            const isHovered = hoveredInsight === index;
            const IconComponent = item.icon;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredInsight(index)}
                onMouseLeave={() => setHoveredInsight(null)}
                className="insight-col-item rounded-3xl border border-[#e5e7eb] bg-white transition-all duration-500 hover:shadow-xl hover:border-[#111827] flex flex-col overflow-hidden group cursor-default"
              >
                {/* Top Section: Icon & Visual Mockup */}
                <div className="flex justify-between items-start p-6 pb-2">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                    isHovered ? 'bg-[#111827] text-white' : 'bg-blue-50/50 border border-blue-100/50 text-blue-600'
                  }`}>
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  
                  {/* Floating abstract visual container */}
                  <div className="w-32 h-20 rounded-xl overflow-hidden border border-gray-100/80 shadow-sm translate-x-2 -translate-y-2 opacity-80 group-hover:opacity-100 group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500 bg-white">
                    {item.visual}
                  </div>
                </div>

                {/* Bottom Section: Text */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 tracking-tight font-headline text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge to Section 3: Parallax Banner */}
        <div className="section2-transition-bridge pt-4 md:pt-20 text-center space-y-12">
          
          <div className="parallax-container relative w-full rounded-3xl overflow-hidden shadow-2xl my-8 group">
            {/* Parallax Background */}
            <div 
              className="parallax-bg absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/home/michael-descharles-BmMABUWOJbY-unsplash.jpg')" }}
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/50" />
            
            <div className="relative z-10 max-w-5xl mx-auto py-16 md:py-32 px-6 md:px-8">
              <h3 className="bridge-transition-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-snug font-headline drop-shadow-lg">
                <span className="inline-block overflow-hidden mr-[0.2em] -pb-1"><span className="quote-word-item inline-block text-white">"</span></span>
                {QUOTE_WORDS.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.25em] -pb-1">
                    <span className="quote-word-item inline-block text-white">
                      {word === "ekosistem," ? <span className="underline decoration-4 underline-offset-8 decoration-white">{word}</span> : word}
                    </span>
                  </span>
                ))}
                <span className="inline-block overflow-hidden -pb-1"><span className="quote-word-item inline-block text-white">"</span></span>
              </h3>
            </div>
          </div>
        </div>
        
        {/* Removed huge spacer */}
        <div className="pb-16 w-full"></div>

      </div>
    </section>
  );
}
