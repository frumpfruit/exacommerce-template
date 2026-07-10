import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-body">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-black mb-12">Syarat & Ketentuan Penggunaan Layanan Exantara</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Left Column: Sticky TOC */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#111827] font-headline">Table of Contents</h3>
            <ol className="list-decimal pl-5 space-y-3 text-sm font-medium text-gray-600">
              <li><button onClick={(e) => scrollToSection(e, 'section-1')} className="hover:text-black transition-colors text-left cursor-pointer">Ketentuan Akun</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-2')} className="hover:text-black transition-colors text-left cursor-pointer">Aktivasi Akun</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-3')} className="hover:text-black transition-colors text-left cursor-pointer">Hak Exantara</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-4')} className="hover:text-black transition-colors text-left cursor-pointer">Tanggung Jawab Pengguna</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-5')} className="hover:text-black transition-colors text-left cursor-pointer">Pembayaran dan Pajak</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-6')} className="hover:text-black transition-colors text-left cursor-pointer">Kerahasiaan</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-7')} className="hover:text-black transition-colors text-left cursor-pointer">Batasan Tanggung Jawab dan Ganti Rugi</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-8')} className="hover:text-black transition-colors text-left cursor-pointer">Hak Kekayaan Intelektual</button></li>
            </ol>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-3 prose prose-lg max-w-none prose-headings:font-headline prose-headings:font-bold text-gray-700">
            <div className="space-y-12">
              <section id="section-1" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">1. Ketentuan Akun</h2>
                <p>Dengan membuat akun di Exantara, Anda menyetujui untuk memberikan informasi yang benar, lengkap, dan terbaru. Akun Anda bersifat pribadi dan tidak dapat dipindahtangankan. Anda bertanggung jawab penuh atas segala aktivitas yang terjadi di dalam akun Anda, termasuk menjaga kerahasiaan kata sandi.</p>
              </section>
              
              <section id="section-2" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">2. Aktivasi Akun</h2>
                <p>Setelah pendaftaran, akun Anda akan diaktivasi melalui proses verifikasi. Exantara berhak menolak atau menangguhkan aktivasi akun apabila ditemukan indikasi penyalahgunaan, pelanggaran hukum, atau ketidaksesuaian data yang diberikan.</p>
              </section>
              
              <section id="section-3" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">3. Hak Exantara</h2>
                <p>Exantara berhak melakukan pembaruan, penambahan, atau perubahan fitur sewaktu-waktu untuk meningkatkan kualitas layanan. Kami juga berhak menonaktifkan akun yang melanggar kebijakan penggunaan, melakukan spam, atau merugikan pengguna lain.</p>
              </section>
              
              <section id="section-4" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">4. Tanggung Jawab Pengguna</h2>
                <p>Pengguna bertanggung jawab untuk memastikan bahwa setiap aktivitas yang dilakukan melalui platform Exantara sesuai dengan hukum yang berlaku. Dilarang mengunggah konten yang melanggar hak cipta, menipu, atau mengandung informasi palsu. Exantara tidak bertanggung jawab atas kerugian yang timbul akibat kelalaian pengguna.</p>
              </section>
              
              <section id="section-5" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">5. Pembayaran dan Pajak</h2>
                <p>Layanan berbayar di Exantara tunduk pada ketentuan biaya yang berlaku. Semua pembayaran dilakukan melalui metode resmi yang disediakan di platform. Pengguna bertanggung jawab atas pajak atau biaya tambahan yang berlaku sesuai peraturan di wilayah masing-masing.</p>
              </section>
              
              <section id="section-6" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">6. Kerahasiaan</h2>
                <p>Exantara menjaga kerahasiaan seluruh informasi pengguna dan tidak akan membagikannya kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum. Kami juga mendorong pengguna untuk menjaga kerahasiaan data bisnis dan kredensial mereka.</p>
              </section>
              
              <section id="section-7" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">7. Batasan Tanggung Jawab dan Ganti Rugi</h2>
                <p>Exantara tidak bertanggung jawab atas kerugian langsung maupun tidak langsung akibat penggunaan layanan, gangguan sistem, atau kehilangan data. Pengguna setuju untuk membebaskan Exantara dari segala klaim yang timbul akibat pelanggaran terhadap ketentuan penggunaan.</p>
              </section>
              
              <section id="section-8" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">8. Hak Kekayaan Intelektual</h2>
                <p>Seluruh logo, merek dagang, dan elemen desain yang terdapat di Exantara dilindungi oleh hukum hak cipta. Pengguna tetap memiliki hak atas konten yang mereka unggah, namun memberikan izin non-eksklusif kepada Exantara untuk menampilkan konten tersebut di platform.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
