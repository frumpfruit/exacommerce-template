import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../ui/CountUp';

gsap.registerPlugin(ScrollTrigger);

const CHAT_QUESTIONS = [
  "Analisis potensi ekspor kopi arabika Gayo ke pasar Jepang (2026)?",
  "Apa standar kepatuhan bea cukai NSW & sertifikasi organik Uni Eropa?",
  "Berapa estimasi logistik maritim kontainer 20ft ke pelabuhan Rotterdam?",
  "Rekomendasi penetapan harga (pricing) untuk buyer korporasi Timur Tengah."
];

export default function AiExperienceSection() {
  const containerRef = useRef(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let timer;
    const currentQ = CHAT_QUESTIONS[questionIdx];
    let i = 0;
    setTypingText("");
    setIsAnalyzing(false);
    setShowResult(false);

    const typeChar = () => {
      if (i < currentQ.length) {
        setTypingText(currentQ.slice(0, i + 1));
        i++;
        timer = setTimeout(typeChar, 30);
      } else {
        setIsAnalyzing(true);
        setTimeout(() => {
          setIsAnalyzing(false);
          setShowResult(true);
        }, 1000);
      }
    };

    timer = setTimeout(typeChar, 300);

    return () => clearTimeout(timer);
  }, [questionIdx]);

  useGSAP(() => {
    gsap.fromTo('.ai-terminal-box',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 40%',
          scrub: false,
        }
      }
    );
  }, { scope: containerRef });

  useGSAP(() => {
    if (showResult) {
      gsap.fromTo('.ai-chart-bar', 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, { dependencies: [showResult], scope: containerRef });

  return (
    <section id="intelijen" ref={containerRef} className="py-32 px-6 md:px-12 bg-[#f8f9fa] text-[#111827] relative z-10 border-t border-[#e5e7eb] overflow-hidden font-body">
      
      {/* Light Gray Editorial Grid Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 border-b border-[#e5e7eb] pb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#111827] font-headline">
            Intelijen Pasar Yang <br/>
            <span className="underline decoration-2 underline-offset-8 decoration-[#374151]">Memandu Strategi Ekspor.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-xl mx-auto">
            Bukan sekadar chatbot biasa. Exantara Trade Intelligence memproses jutaan data transaksi dagang internasional, regulasi bea cukai 200+ negara, serta rute logistik maritim secara real-time.
          </p>
        </div>

        {/* Clean Executive Trade Intelligence Interactive Center */}
        <div className="ai-terminal-box rounded-2xl bg-white border border-[#f3f4f6] p-6 sm:p-10 shadow-sm">
          
          {/* Top Window Strip */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#f3f4f6]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111827]"></span>
              <span className="font-mono text-xs text-gray-700 font-bold font-headline">Exantara Intelligence</span>
            </div>
            
            {/* Question Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {CHAT_QUESTIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuestionIdx(idx)}
                  className={`px-3 py-1.5 rounded font-mono text-xs uppercase transition-all font-semibold ${
                    questionIdx === idx 
                      ? 'bg-[#111827] text-white font-bold shadow-sm' 
                      : 'bg-[#f8f9fa] border border-[#d1d5db] text-gray-700 hover:bg-white hover:text-[#111827]'
                  }`}
                >
                  Analisis #{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Report Simulation Area */}
          <div className="py-8 space-y-8 min-h-[380px] flex flex-col justify-between">
            
            {/* User Query Box */}
            <div className="flex justify-end">
              <div className="max-w-xl p-4 rounded-xl rounded-tr-sm bg-[#f8f9fa] border border-[#d1d5db] text-[#111827] font-semibold text-sm sm:text-base shadow-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-[#111827]">search</span>
                <span>{typingText}<span className="inline-block w-1.5 h-4 bg-[#111827] ml-1 animate-pulse"></span></span>
              </div>
            </div>

            {/* Trade Intelligence Response Area */}
            <div className="flex justify-start w-full">
              <div className="max-w-3xl w-full p-6 sm:p-8 rounded-2xl rounded-tl-sm bg-white border border-[#f3f4f6] space-y-6 text-left shadow-sm">
                
                <div className="flex items-center justify-between border-b border-[#f3f4f6] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#111827] text-white flex items-center justify-center font-bold shadow-sm">
                      <span className="material-symbols-outlined text-white">insights</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#111827] font-headline">Exantara Trade Intelligence Report</h4>
                      <span className="text-xs text-gray-500 font-semibold">Verified Customs & Market Data</span>
                    </div>
                  </div>
                  {isAnalyzing && (
                    <span className="text-xs text-[#111827] font-bold flex items-center gap-2 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-[#111827]"></span>
                      Meningkatkan Laporan...
                    </span>
                  )}
                </div>

                {isAnalyzing ? (
                  <div className="py-12 flex flex-col items-center justify-center space-y-4 text-gray-500 text-xs font-semibold">
                    <div className="w-8 h-8 rounded-full border-2 border-[#111827] border-t-transparent animate-spin"></div>
                    <span>Mengakses database Bea Cukai NSW & Tren Pasar...</span>
                  </div>
                ) : showResult ? (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-xl text-[#111827] shrink-0 mt-0.5">analytics</span>
                      <span>
                        <strong className="text-[#111827] font-bold">Kesimpulan Strategis:</strong> Peluang ekspor komoditas kopi arabika ke Jepang saat ini berada di zona <strong className="text-[#111827] font-bold">Sangat Tinggi (Skor 94/100)</strong>. Preferensi konsumen korporasi di Tokyo & Osaka menunjukkan peningkatan permintaan produk kopi organik sebesar <strong className="text-[#111827] font-bold">+45% YoY</strong>.
                      </span>
                    </p>

                    {/* Clean Executive Growing Bar Chart Showcase (De-nested cards) */}
                    <div className="py-6 space-y-4">
                      <div className="flex justify-between items-center text-xs text-gray-600 font-bold border-l-2 border-[#111827] pl-3">
                        <span>Pertumbuhan Permintaan Kopi Spesialti di Jepang (2022 - 2026)</span>
                        <span className="text-[#111827] font-bold">+45% YoY Surge</span>
                      </div>
                      
                      <div className="h-36 flex items-end justify-between gap-1.5 sm:gap-4 pt-6 px-1 sm:px-4 border-b border-gray-200">
                        {[
                          { year: "2022", val: "40%", height: "40%", color: "#d1d5db" },
                          { year: "2023", val: "55%", height: "55%", color: "#9ca3af" },
                          { year: "2024", val: "68%", height: "68%", color: "#6b7280" },
                          { year: "2025", val: "82%", height: "82%", color: "#374151" },
                          { year: "2026 (E)", val: "95%", height: "95%", color: "#111827" },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 sm:gap-2 h-full justify-end min-w-0">
                            <span className="text-[9px] sm:text-xs text-[#111827] font-bold block truncate">{bar.val}</span>
                            <div 
                              className="ai-chart-bar w-full rounded-t transition-all shadow-sm"
                              style={{ 
                                height: bar.height, 
                                backgroundColor: bar.color,
                                transformOrigin: 'bottom' 
                              }}
                            ></div>
                            <span className="text-[9px] sm:text-xs text-gray-600 font-semibold block truncate">{bar.year}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 pt-3 text-xs text-gray-600 font-semibold">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#111827]"></span>
                          <span>Tarif Bea Cukai: <strong className="text-[#111827]">0% (IJ-EPA Treaty)</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6b7280]"></span>
                          <span>Logistik Maritim: <strong className="text-[#111827]">12-14 Hari (Rotterdam/Tokyo)</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Verified Buyer Insight Report Asset */}
                    <div className="rounded-xl overflow-hidden shadow-sm">
                      <img src="/images/home/buyer-insight.png" alt="Verified Buyer Insight Report Exantara" className="w-full h-auto object-cover max-h-64" loading="lazy" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button className="w-full sm:w-auto px-6 py-3 rounded bg-[#111827] text-white font-body text-xs uppercase tracking-widest font-bold hover:bg-[#374151] transition-all shadow-sm text-center justify-center flex items-center">
                        Buat Etalase Pasar Jepang ↴
                      </button>
                      <button className="w-full sm:w-auto px-6 py-3 rounded bg-white border border-[#d1d5db] text-[#111827] font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#f8f9fa] transition-all text-center justify-center flex items-center">
                        Unduh Laporan DEB PDF
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="py-8 text-[#6b7280] text-xs text-center font-semibold">
                    Pilih pertanyaan atau tunggu analisis laporan selesai.
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Bottom Strip */}
          <div className="flex justify-between items-center pt-6 border-t border-[#f3f4f6] text-xs text-[#6b7280]">
            <span>Exantara Trade Intelligence Hub</span>
            <span className="text-[#111827] font-bold">100% Verified Customs Data</span>
          </div>

        </div>

      </div>
    </section>
  );
}
