import React, { useState, useEffect } from 'react';

const FAQS = [
  {
    q: "Bagaimana Exantara membantu UMKM yang belum pernah mengekspor produk sama sekali?",
    a: "Exantara menyediakan modul Export Builder dan Trade Intelligence yang memandu Anda mulai dari pengecekan kesiapan regulasi produk, penentuan tarif HS Code akurat, penerjemahan katalog ke 24+ bahasa dunia, hingga koneksi langsung ke jaringan pembeli internasional yang terverifikasi."
  },
  {
    q: "Apakah saya perlu menyewa programmer untuk membangun toko atau menghubungkan API?",
    a: "Tidak perlu. Commerce Builder kami rancang 100% tanpa koding (no-code). Anda cukup memilih struktur desain, mengunggah katalog produk, dan etalase berstandar global langsung live. Bagi korporasi atau developer yang membutuhkan integrasi kustom, kami juga menyediakan API SDK yang mendalam."
  },
  {
    q: "Bagaimana cara kerja perhitungan tarif bea cukai dan pengiriman logistik maritim internasional?",
    a: "Exantara terintegrasi langsung dengan National Single Window (NSW) bea cukai serta kurir maritim dan udara global (DHL, FedEx, Maersk, BUMN Logistik). Sistem kami menghitung tarif pengiriman kargo, bea masuk negara tujuan, dan asuransi secara real-time saat pembeli melakukan checkout."
  },
  {
    q: "Bisakah saya mengelola penjualan lokal (WhatsApp/TikTok Shop) dan ekspor secara bersamaan?",
    a: "Tentu! Itu adalah kekuatan utama Omnichannel POS kami. Satu inventaris di dasbor Exantara akan tersinkronisasi serentak ke toko offline POS, TikTok Shop, WhatsApp, hingga marketplace global Amazon tanpa risiko kelebihan pesanan (over-selling)."
  },
  {
    q: "Bagaimana struktur transparansi biaya layanan dan apakah ada potongan komisi tersembunyi?",
    a: "Kami menerapkan model berlangganan platform yang transparan tanpa komisi tersembunyi dari laba bersih penjualan ekspor Anda. Seluruh pemrosesan valuta asing langsung masuk ke rekening usaha Anda dengan kurs konversi ke bank nasional yang kompetitif."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };


  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#f8f9fa] text-[#111827] relative z-10 border-t border-[#e5e7eb] font-body">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Editorial Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#111827] font-headline">
            Jawaban Untuk <br/>
            <span className="underline decoration-2 underline-offset-8 decoration-[#374151]">Akselerasi Ekspor Anda.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            Segala hal yang perlu Anda ketahui tentang ekosistem platform, otomatisasi kepatuhan NSW bea cukai, dan pengiriman valuta asing Exantara.
          </p>
        </div>

        {/* Minimalist Executive Accordion List */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200 text-left">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="py-1 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 text-left flex justify-between items-center gap-6 focus:outline-none group"
                >
                  <span className={`text-lg sm:text-xl font-bold font-headline transition-colors ${isOpen ? 'text-[#374151]' : 'text-[#111827] group-hover:text-gray-700'}`}>
                    {item.q}
                  </span>
                  <span className={`material-symbols-outlined text-2xl transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#111827]' : 'text-gray-400 group-hover:text-gray-600'
                  }`}>
                    keyboard_arrow_down
                  </span>
                </button>

                {/* Smooth Expandable Body */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                  <div className="min-h-0 pb-6 text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions minimal executive box */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#f3f4f6] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div className="space-y-1.5">
            <h4 className="text-xl sm:text-2xl font-bold text-[#111827] font-headline leading-tight">Masih memiliki pertanyaan khusus tentang regulasi produk Anda?</h4>
            <p className="text-sm sm:text-base text-gray-700 font-medium">Konsultasikan gratis dengan tim penasihat ekspor dan arsitek perdagangan kami 24/7.</p>
          </div>
          <button className="w-full sm:w-auto px-6 py-3 rounded bg-[#111827] text-white font-body text-xs uppercase tracking-widest font-bold hover:bg-[#374151] transition-all shrink-0 shadow-sm text-center justify-center flex">
            Hubungi Tim Advisor ↴
          </button>
        </div>

      </div>
    </section>
  );
}
