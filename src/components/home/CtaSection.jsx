import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.cta-btn-group',
      { opacity: 0, y: 15 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="daftar" 
      data-theme="dark"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-black text-white relative overflow-hidden"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/images/home/vecteezy_port-container-train_2987831.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/95 via-[#000000]/60 to-[#000000]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]"></div>
      </div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-center">
        
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-[#111111] border border-[#333333] text-[#d1d5db] font-mono text-xs uppercase tracking-[0.25em] font-bold shadow-md mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#d1d5db]/50"></span>
          Akses Langsung Platform
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.2] sm:leading-[1.15] md:leading-[1.08] text-white font-headline">
          Saatnya Membawa <br/>
          <span className="underline decoration-2 underline-offset-8 text-[#9ca3af]">Produk Indonesia</span> <br/>
          ke Pasar Dunia.
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Bergabunglah dengan ekosistem perdagangan digital ekspor terbesar di Nusantara. Bangun etalase berstandar global, hubungkan ke jaringan buyer internasional, dan mulai ekspansi valuta asing hari ini.
        </p>

        <div className="cta-btn-group flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="https://wa.me/6282337123533?text=Halo%20Exantara%2C%20saya%20ingin%20mengetahui%20lebih%20detail%20mengenai%20layanan%20dan%20solusi%20yang%20ditawarkan."
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded bg-[#111827] text-white font-body text-xs uppercase tracking-[0.2em] font-black hover:bg-[#374151] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10">Minta Konsultasi</span>
          </a>
          <a
            href="#kontak"
            className="px-8 py-4 rounded bg-[#111111] hover:bg-[#222222] border border-[#333333] text-white font-body text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center"
          >
            Hubungi Advisor Ekspor
          </a>
        </div>

      </div>
    </section>
  );
}
