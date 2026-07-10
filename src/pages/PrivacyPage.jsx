import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-headline font-black mb-12">Kebijakan Privasi Exantara</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Left Column: Sticky TOC */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#111827] font-headline">Table of Contents</h3>
            <ol className="list-decimal pl-5 space-y-3 text-sm font-medium text-gray-600">
              <li><button onClick={(e) => scrollToSection(e, 'section-1')} className="hover:text-black transition-colors text-left cursor-pointer">Pengumpulan Informasi</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-2')} className="hover:text-black transition-colors text-left cursor-pointer">Penggunaan Informasi</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-3')} className="hover:text-black transition-colors text-left cursor-pointer">Pembagian Informasi</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-4')} className="hover:text-black transition-colors text-left cursor-pointer">Keamanan Data</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-5')} className="hover:text-black transition-colors text-left cursor-pointer">Hak Pengguna</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'section-6')} className="hover:text-black transition-colors text-left cursor-pointer">Pembaruan Kebijakan</button></li>
            </ol>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-3 prose prose-lg max-w-none prose-headings:font-headline prose-headings:font-bold text-gray-700">
            <div className="space-y-12">
              <section id="section-1" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">1. Pengumpulan Informasi</h2>
                <p>Exantara mengumpulkan data pribadi seperti nama, alamat email, nomor telepon, dan informasi bisnis yang dibutuhkan untuk mendukung layanan kami. Kami juga mengumpulkan data aktivitas pengguna di platform untuk meningkatkan pengalaman dan keamanan layanan.</p>
              </section>
              
              <section id="section-2" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">2. Penggunaan Informasi</h2>
                <p>Data yang dikumpulkan digunakan untuk keperluan verifikasi akun, penyediaan layanan, personalisasi pengalaman pengguna, serta komunikasi terkait produk dan pembaruan Exantara. Kami juga dapat menggunakan data agregat untuk analisis internal dan pengembangan fitur.</p>
              </section>
              
              <section id="section-3" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">3. Pembagian Informasi</h2>
                <p>Exantara tidak menjual atau menyewakan data pengguna kepada pihak ketiga. Informasi hanya akan dibagikan kepada mitra resmi (seperti penyedia pembayaran, logistik, atau integrasi ekspor) yang membantu menjalankan layanan, dan mereka wajib menjaga kerahasiaannya.</p>
              </section>
              
              <section id="section-4" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">4. Keamanan Data</h2>
                <p>Kami menerapkan enkripsi, firewall, dan prosedur keamanan tingkat lanjut untuk melindungi data pengguna dari akses tidak sah, kebocoran, atau penyalahgunaan. Meski begitu, pengguna juga diimbau untuk menjaga kredensial dan tidak membagikannya kepada pihak lain.</p>
              </section>
              
              <section id="section-5" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">5. Hak Pengguna</h2>
                <p>Pengguna berhak mengakses, memperbarui, atau menghapus data pribadi mereka kapan saja melalui dashboard Exantara. Pengguna juga dapat meminta penjelasan terkait bagaimana data mereka digunakan melalui kontak resmi kami.</p>
              </section>
              
              <section id="section-6" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#111827] mb-3">6. Pembaruan Kebijakan</h2>
                <p>Exantara dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan perkembangan teknologi, peraturan, atau layanan baru. Setiap perubahan akan diumumkan melalui situs resmi kami, dan versi terbaru akan berlaku segera setelah diterbitkan.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
