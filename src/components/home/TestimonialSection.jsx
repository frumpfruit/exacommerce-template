import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 0,
    quote: "Sebelumnya kami menghabiskan waktu berbulan-bulan hanya untuk mengurus klasifikasi HS Code dan kepatuhan ekspor kopi ke Jepang. Bersama Exantara, seluruh invoice dan clearance NSW selesai otomatis dalam 10 menit!",
    author: "Hendra Wijaya",
    role: "Founder & CEO, Nusantara Coffee Roasters",
    company: "Exporting to Japan & EU",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    metric: "+320% Volume Ekspor"
  },
  {
    id: 1,
    quote: "Trade Intelligence Report sangat membantu kami membaca tren permintaan produk muslim di pasar Timur Tengah. Saran harga dinamisnya membuat produk kami selalu kompetitif tanpa mengorbankan margin laba valuta asing.",
    author: "Siti Rahmawati",
    role: "Director of Global Sales, Zahra Muslim Wear",
    company: "Exporting to UAE & Malaysia",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    metric: "14 Negara Tujuan Baru"
  },
  {
    id: 2,
    quote: "Integrasi POS omnichannel Exantara sungguh luar biasa. Stok gudang kami di Surabaya, Jakarta, dan gudang konsinyasi maritim di Singapura tersinkronisasi sempurna tanpa pernah mengalami over-selling.",
    author: "Budi Santoso",
    role: "Chief Operating Officer, Bambu Nusantara Craft",
    company: "Exporting to US & Netherlands",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    metric: "0% Error Inventory Sync"
  }
];

export default function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white text-[#111827] relative z-10 border-t border-[#e5e7eb] overflow-hidden font-body">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20">
        
        {/* Editorial Section Header */}
        <div className="text-left max-w-3xl space-y-4 border-b border-[#e5e7eb] pb-10 sm:pb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#111827] font-headline">
            Dipercaya Para Pemimpin <br/>
            <span className="underline decoration-2 underline-offset-8 decoration-[#374151]">Ekspor Indonesia.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            Dengarkan langsung bagaimana pimpinan brand lokal menembus pasar internasional bersama platform Exantara.
          </p>
        </div>        {/* Minimalist Editorial Carousel Showcase */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="relative w-full flex items-center justify-center min-h-[350px] sm:min-h-0">
            {TESTIMONIALS.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={item.id}
                  className={`w-full transition-all duration-700 ease-out flex flex-col justify-between p-6 sm:p-12 rounded-2xl border ${
                    isActive 
                      ? 'relative opacity-100 scale-100 translate-x-0 z-20 bg-white border border-[#f3f4f6] shadow-sm' 
                      : 'absolute inset-0 opacity-0 scale-95 translate-x-12 pointer-events-none z-0 bg-white border-[#f3f4f6]'
                  }`}
                >
                  {/* Top Quote Icon & Metric Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#9ca3af]">format_quote</span>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#d1d5db] text-[#111827] font-mono text-[10px] sm:text-xs font-bold shadow-sm flex items-center gap-1 sm:gap-1.5">
                      <span className="material-symbols-outlined text-xs sm:text-sm text-[#374151]">verified</span>
                      <span>{item.metric}</span>
                    </span>
                  </div>

                  {/* Quote Body with Split Word Animation */}
                  <p className="text-lg sm:text-2xl text-gray-800 font-semibold leading-relaxed mb-6 sm:mb-8 italic text-left">
                    <span className="inline-block overflow-hidden mr-[0.2em] -pb-1">
                      <span className={`inline-block transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isActive ? '100ms' : '0ms' }}>"</span>
                    </span>
                    {item.quote.split(" ").map((word, wIdx) => (
                      <span key={wIdx} className="inline-block overflow-hidden mr-[0.25em] -pb-1">
                        <span 
                          className={`inline-block transition-all duration-700 ease-out ${
                            isActive 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-8'
                          }`}
                          style={{ transitionDelay: isActive ? `${120 + wIdx * 20}ms` : '0ms' }}
                        >
                          {word}
                        </span>
                      </span>
                    ))}
                    <span className="inline-block overflow-hidden -pb-1">
                      <span className={`inline-block transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isActive ? `${120 + item.quote.split(" ").length * 20}ms` : '0ms' }}>"</span>
                    </span>
                  </p>

                  {/* Author Profile Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#e5e7eb]">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img src={item.image} alt={item.author} className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md" />
                      <div className="text-left">
                        <h4 className="text-base sm:text-lg font-bold text-[#111827] font-headline leading-tight">{item.author}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight mt-0.5">{item.role}</p>
                        <span className="text-xs sm:text-sm font-mono text-gray-700 font-bold block mt-0.5">{item.company}</span>
                      </div>
                    </div>

                    {/* Verified Rating Badge (Monochrome / No Colorful Stars) */}
                    <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#111827] text-white font-mono text-xs font-bold shadow-sm">
                      <span className="material-symbols-outlined text-sm text-[#374151]">verified_user</span>
                      <span>5.0 / 5.0 VERIFIED IMPACT</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Buttons & Dots */}
          <div className="flex items-center justify-between mt-8 px-2">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIdx === idx ? 'w-8 bg-[#374151]' : 'w-2 bg-[#d1d5db] hover:bg-[#9ca3af]'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-10 h-10 rounded-full bg-white border border-[#d1d5db] hover:border-[#111827] flex items-center justify-center text-[#111827] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>
              <button 
                onClick={() => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-10 h-10 rounded-full bg-white border border-[#d1d5db] hover:border-[#111827] flex items-center justify-center text-[#111827] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
