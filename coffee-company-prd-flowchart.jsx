import { useState } from "react";

const colors = {
  blue: "#004E7C",
  deepBlue: "#003558",
  coral: "#F58A6C",
  coralDark: "#E0714F",
  cream: "#FAF7F2",
  brown: "#3B1F0E",
  lightBlue: "#E8F4FC",
  gray: "#6B7280",
  lightGray: "#F3F4F6",
  white: "#FFFFFF",
};

const pages = ["home", "about", "process", "insight", "contact", "inquiry"];

const pageContent = {
  home: {
    label: "Home",
    goal: "Membangun kesan pertama premium dan mengundang eksplorasi lebih lanjut.",
    sections: [
      {
        name: "Hero Full-Screen",
        layout: "Full-viewport, split diagonal — kiri foto ladang kopi dramatis, kanan headline besar + CTA.",
        content: "Headline utama brand, sub-tagline, tombol 'Jelajahi Kami' dan 'Hubungi Kami'.",
        note: "Foto mendominasi 60% viewport. Tidak ada card transparan.",
      },
      {
        name: "Brand Statement Strip",
        layout: "Teks besar horizontal penuh lebar, huruf besar, warna coral di kata kunci.",
        content: "Satu kalimat manifesto brand, contoh: 'Dari Biji Terbaik Nusantara, Kami Ciptakan Kopi yang Bercerita.'",
        note: "Tanpa background card — teks langsung di atas latar putih atau cream.",
      },
      {
        name: "Angka Pencapaian",
        layout: "3 kolom asimetris — kolom pertama lebih lebar berisi narasi, dua kolom kanan berisi angka besar.",
        content: "Tahun berdiri, ton produksi per tahun, mitra distribusi.",
        note: "Angka dicetak sangat besar (display size), label kecil di bawahnya.",
      },
      {
        name: "Produk Unggulan Teaser",
        layout: "Horizontal scroll atau alternating-row layout — gambar produk besar + nama + deskripsi singkat.",
        content: "2–3 varian kopi unggulan, masing-masing dengan foto dan satu kalimat deskripsi.",
        note: "Bukan card grid. Gunakan layout staggered.",
      },
      {
        name: "CTA Menuju Process & Contact",
        layout: "Full-width banner warna biru gelap, teks putih, dua tombol coral.",
        content: "Ajakan melihat proses produksi dan memulai inquiry.",
        note: "Tidak ada card, tidak ada bayangan berlapis.",
      },
    ],
  },
  about: {
    label: "About",
    goal: "Membangun kepercayaan melalui narasi sejarah, visi, dan tim yang autentik.",
    sections: [
      {
        name: "Hero About",
        layout: "Full-width foto tim/kebun dengan overlay teks minimal di pojok kiri bawah.",
        content: "Nama perusahaan + tahun berdiri + satu kalimat positioning.",
        note: "Overlay tipis hanya di area teks, bukan seluruh foto.",
      },
      {
        name: "Narasi Sejarah",
        layout: "Timeline horizontal atau timeline vertikal zigzag — tahun di kiri, narasi di kanan, bergantian.",
        content: "Momen-momen kunci: pendirian, ekspansi kebun, sertifikasi, ekspor perdana.",
        note: "Tidak pakai card. Gunakan garis timeline sebagai elemen visual.",
      },
      {
        name: "Visi & Misi",
        layout: "Dua kolom besar — visi di kiri dengan background biru tua, misi di kanan dengan background cream.",
        content: "Satu paragraf visi, tiga poin misi dalam bentuk paragraf pendek.",
        note: "Tidak ada bullet list berikon. Gunakan numbering teks atau typografi berbeda.",
      },
      {
        name: "Tim Leadership",
        layout: "Foto besar-besar dalam layout masonry atau horizontal scroll — nama + jabatan di bawah foto.",
        content: "Foto, nama, jabatan, dan satu kalimat latar belakang tiap pemimpin.",
        note: "Bukan card dengan shadow. Foto langsung tanpa frame tambahan.",
      },
      {
        name: "Nilai-Nilai Perusahaan",
        layout: "Full-width strip bergantian background — satu nilai per baris, teks besar di kiri, deskripsi di kanan.",
        content: "Keberlanjutan, Kualitas, Komunitas, Inovasi — masing-masing satu paragraf.",
        note: "Tidak ada ikon. Gunakan angka romawi atau huruf besar dekoratif.",
      },
    ],
  },
  process: {
    label: "Process",
    goal: "Menunjukkan keahlian dan standar tinggi produksi kopi secara visual dan naratif.",
    sections: [
      {
        name: "Hero Process",
        layout: "Video loop atau foto panorama proses panen, teks overlay kecil di atas.",
        content: "Judul halaman + sub-judul tentang filosofi proses.",
        note: "Video muted autoplay jika tersedia.",
      },
      {
        name: "Tahapan Produksi",
        layout: "Vertical scroll storytelling — setiap tahap menempati satu 'bab' layar penuh, foto besar + narasi.",
        content: "Panen → Sortasi → Pengolahan → Pengeringan → Roasting → Quality Control → Pengemasan.",
        note: "Urutan mengalir secara alami, bukan kotak-kotak card berjejer.",
      },
      {
        name: "Standar Kualitas",
        layout: "Dua kolom — kiri foto lab/QC, kanan narasi standar dan sertifikasi.",
        content: "Penjelasan standar SCA, sertifikasi organik, metode cupping.",
        note: "Sertifikasi ditampilkan sebagai teks + logo, bukan lencana card.",
      },
      {
        name: "Kapasitas Produksi",
        layout: "Angka besar di pusat halaman, dikitari paragraf konteks — bukan tabel.",
        content: "Kapasitas roasting per hari, kapasitas penyimpanan, jumlah batch per bulan.",
        note: "Gunakan tipografi display untuk angka.",
      },
      {
        name: "CTA Inquiry",
        layout: "Full-width biru tua, teks dan tombol coral.",
        content: "Ajakan: 'Tertarik bermitra dengan kami? Mulai proses inquiry sekarang.'",
        note: "",
      },
    ],
  },
  insight: {
    label: "Insight",
    goal: "Memposisikan perusahaan sebagai pemimpin pikiran di industri kopi.",
    sections: [
      {
        name: "Hero Insight",
        layout: "Layout editorial — judul besar kiri atas, artikel featured foto besar di kanan.",
        content: "Judul halaman + highlight artikel terbaru.",
        note: "Gaya majalah kopi premium, bukan blog card grid standar.",
      },
      {
        name: "Artikel Featured",
        layout: "Satu artikel besar full-width dengan foto landscape + judul besar + excerpt.",
        content: "Artikel pilihan redaksi, tanggal, kategori, dan tombol baca.",
        note: "Tidak ada card. Foto langsung di atas, teks di bawah.",
      },
      {
        name: "Daftar Artikel",
        layout: "Alternating layout — artikel ganjil foto kiri teks kanan, artikel genap teks kiri foto kanan.",
        content: "5–6 artikel terbaru, masing-masing dengan judul, tanggal, dan excerpt singkat.",
        note: "Tidak pakai card grid 3 kolom standar.",
      },
      {
        name: "Kategori Topik",
        layout: "Horizontal pill/tab filter di atas daftar artikel.",
        content: "Kategori: Agrikultur, Roasting, Pasar Global, Keberlanjutan, Resep.",
        note: "Filter berbentuk pill teks, bukan tombol berikon.",
      },
      {
        name: "Newsletter",
        layout: "Full-width strip cream, teks tengah, satu input email + tombol.",
        content: "'Dapatkan insight industri kopi langsung ke inbox Anda.'",
        note: "Bukan kotak card. Strip tipis horizontal.",
      },
    ],
  },
  contact: {
    label: "Contact",
    goal: "Memudahkan kontak awal dengan kesan profesional dan hangat.",
    sections: [
      {
        name: "Hero Contact",
        layout: "Split — kiri foto kantor/gudang, kanan informasi kontak dalam layout teks bersih.",
        content: "Alamat, telepon, email, jam operasional.",
        note: "Bukan card. Konten langsung di ruang terbuka.",
      },
      {
        name: "Peta Lokasi",
        layout: "Peta embed full-width dengan marker kustom warna biru brand.",
        content: "Google Maps embed atau peta statis dengan pin lokasi.",
        note: "Peta diberi border-radius kecil, tidak ada card wrapper.",
      },
      {
        name: "Form Kontak Umum",
        layout: "Form vertikal sederhana — nama, email, subjek, pesan, tombol kirim coral.",
        content: "Form kontak untuk pertanyaan umum, partnership, atau media.",
        note: "Field form bersih tanpa label berikon.",
      },
      {
        name: "Informasi Divisi",
        layout: "Tiga baris horizontal — nama divisi + email divisi + nomor langsung.",
        content: "Sales, Operasional, Media/PR.",
        note: "Bukan card per divisi. Tabel teks minimalis.",
      },
    ],
  },
  inquiry: {
    label: "Process Inquiry",
    goal: "Mengkonversi prospek menjadi mitra melalui proses inquiry yang terstruktur dan profesional.",
    sections: [
      {
        name: "Hero Inquiry",
        layout: "Background biru tua penuh, teks putih dan coral — suasana formal namun hangat.",
        content: "Judul 'Mulai Kerjasama' + penjelasan singkat proses yang akan dilalui.",
        note: "Tidak ada foto besar di halaman ini — fokus ke proses.",
      },
      {
        name: "Penjelasan Alur Inquiry",
        layout: "3 langkah dalam layout horizontal bersih — teks bernomor besar, deskripsi di bawah tiap nomor.",
        content: "1. Isi Form → 2. Konsultasi Awal → 3. Proposal & Perjanjian.",
        note: "Nomor besar dekoratif, bukan ikon. Tidak ada card.",
      },
      {
        name: "Form Inquiry",
        layout: "Form dua kolom di bagian kiri, ringkasan proses di kanan — sticky saat scroll.",
        content: "Nama perusahaan, jenis bisnis, kebutuhan volume, varian kopi diminati, kontak PIC, pesan tambahan.",
        note: "Tombol submit coral besar. Tidak ada elemen dekoratif berlebihan.",
      },
      {
        name: "FAQ Singkat",
        layout: "Accordion vertikal — pertanyaan sebagai header, jawaban expand ke bawah.",
        content: "Berapa lama proses inquiry? Berapa MOQ? Apakah tersedia sample?",
        note: "Accordion menggunakan typografi, bukan ikon +/−.",
      },
      {
        name: "Jaminan & Kepercayaan",
        layout: "Strip tipis cream di bawah form — teks horizontal sertifikasi dan jumlah mitra aktif.",
        content: "Sertifikasi, tahun pengalaman, jumlah mitra aktif.",
        note: "Data sebagai teks besar, bukan card atau badge.",
      },
    ],
  },
};

const flowData = {
  nodes: [
    { id: "user", label: "Pengunjung\nTiba", x: 400, y: 40, type: "start" },
    { id: "home", label: "HOME", x: 400, y: 140, type: "page" },
    { id: "about", label: "ABOUT", x: 120, y: 280, type: "page" },
    { id: "process", label: "PROCESS", x: 320, y: 280, type: "page" },
    { id: "insight", label: "INSIGHT", x: 520, y: 280, type: "page" },
    { id: "contact", label: "CONTACT", x: 680, y: 280, type: "page" },
    { id: "inquiry", label: "PROCESS\nINQUIRY", x: 400, y: 420, type: "cta" },
    { id: "submit", label: "Form\nTerkirim", x: 400, y: 540, type: "action" },
    { id: "followup", label: "Tim Sales\nFollow Up", x: 400, y: 640, type: "end" },
  ],
  edges: [
    { from: "user", to: "home" },
    { from: "home", to: "about" },
    { from: "home", to: "process" },
    { from: "home", to: "insight" },
    { from: "home", to: "contact" },
    { from: "about", to: "inquiry", dashed: true },
    { from: "process", to: "inquiry" },
    { from: "contact", to: "inquiry", dashed: true },
    { from: "inquiry", to: "submit" },
    { from: "submit", to: "followup" },
    { from: "insight", to: "home", dashed: true, label: "kembali" },
  ],
};

function FlowChart() {
  const nodeMap = {};
  flowData.nodes.forEach((n) => { nodeMap[n.id] = n; });

  const getCenter = (node) => ({ x: node.x, y: node.y });

  return (
    <div style={{ overflowX: "auto" }}>
      <svg viewBox="0 0 800 720" width="100%" style={{ maxWidth: 800, display: "block", margin: "0 auto" }}>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={colors.blue} />
          </marker>
          <marker id="arrow-dashed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={colors.gray} />
          </marker>
        </defs>

        {flowData.edges.map((e, i) => {
          const from = getCenter(nodeMap[e.from]);
          const to = getCenter(nodeMap[e.to]);
          const mx = (from.x + to.x) / 2;
          const my = (from.y + to.y) / 2;
          return (
            <g key={i}>
              <line
                x1={from.x} y1={from.y + 28}
                x2={to.x} y2={to.y - 28}
                stroke={e.dashed ? colors.gray : colors.blue}
                strokeWidth={e.dashed ? 1.5 : 2}
                strokeDasharray={e.dashed ? "5,4" : "none"}
                markerEnd={e.dashed ? "url(#arrow-dashed)" : "url(#arrow)"}
                opacity={0.7}
              />
              {e.label && (
                <text x={mx + 6} y={my} fontSize="10" fill={colors.gray} fontFamily="monospace">{e.label}</text>
              )}
            </g>
          );
        })}

        {flowData.nodes.map((node) => {
          const w = 100, h = 52;
          const bg = node.type === "start" ? colors.coral
            : node.type === "cta" ? colors.coral
            : node.type === "end" ? colors.deepBlue
            : node.type === "action" ? colors.lightBlue
            : colors.blue;
          const textColor = node.type === "action" ? colors.blue : colors.white;
          const radius = node.type === "start" || node.type === "end" ? 26 : 8;

          return (
            <g key={node.id}>
              <rect
                x={node.x - w / 2} y={node.y - h / 2}
                width={w} height={h}
                rx={radius} ry={radius}
                fill={bg}
                stroke={node.type === "action" ? colors.blue : "none"}
                strokeWidth={1.5}
              />
              {node.label.split("\n").map((line, i) => (
                <text
                  key={i}
                  x={node.x}
                  y={node.y + (node.label.includes("\n") ? (i === 0 ? -8 : 10) : 5)}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="system-ui, sans-serif"
                  fill={textColor}
                  letterSpacing="0.5"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(560, 600)">
          <rect x={0} y={0} width={220} height={110} rx={8} fill={colors.lightGray} />
          <text x={10} y={20} fontSize="11" fontWeight="700" fill={colors.brown} fontFamily="system-ui">LEGENDA</text>
          {[
            { color: colors.blue, label: "Halaman Utama" },
            { color: colors.coral, label: "Titik Masuk / CTA" },
            { color: colors.deepBlue, label: "Endpoint (Follow Up)" },
            { color: colors.lightBlue, label: "Aksi Sistem", border: true },
          ].map((l, i) => (
            <g key={i} transform={`translate(10, ${35 + i * 18})`}>
              <rect width={14} height={14} rx={3} fill={l.color} stroke={l.border ? colors.blue : "none"} strokeWidth={1} />
              <text x={22} y={11} fontSize="10" fill={colors.gray} fontFamily="system-ui">{l.label}</text>
            </g>
          ))}
          <line x1={10} y1={96} x2={30} y2={96} stroke={colors.gray} strokeWidth={1.5} strokeDasharray="4,3" />
          <text x={38} y={100} fontSize="10" fill={colors.gray} fontFamily="system-ui">Navigasi Sekunder</text>
        </g>
      </svg>
    </div>
  );
}

function PageSpec({ pageKey }) {
  const page = pageContent[pageKey];
  return (
    <div>
      <p style={{ color: colors.gray, fontSize: 14, marginBottom: 24, lineHeight: 1.6, borderLeft: `3px solid ${colors.coral}`, paddingLeft: 12 }}>
        <strong style={{ color: colors.brown }}>Tujuan Halaman:</strong> {page.goal}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {page.sections.map((sec, i) => (
          <div key={i} style={{ background: i % 2 === 0 ? colors.cream : colors.white, borderRadius: 0, padding: "20px 24px", borderBottom: `1px solid #E5E7EB` }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ minWidth: 32, height: 32, background: colors.blue, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: colors.white, fontSize: 13, fontWeight: 700 }}>{i + 1}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: colors.brown }}>{sec.name}</h4>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 700, color: colors.coral, textTransform: "uppercase", letterSpacing: 1 }}>Layout</p>
                    <p style={{ margin: 0, fontSize: 13, color: colors.gray, lineHeight: 1.5 }}>{sec.layout}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 700, color: colors.coral, textTransform: "uppercase", letterSpacing: 1 }}>Konten</p>
                    <p style={{ margin: 0, fontSize: 13, color: colors.gray, lineHeight: 1.5 }}>{sec.content}</p>
                  </div>
                </div>
                {sec.note && (
                  <div style={{ marginTop: 10, background: colors.lightBlue, borderRadius: 4, padding: "6px 10px" }}>
                    <p style={{ margin: 0, fontSize: 12, color: colors.blue }}><strong>Design Note:</strong> {sec.note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview PRD" },
    { id: "flowchart", label: "Flowchart" },
    ...pages.map((p) => ({ id: p, label: pageContent[p].label })),
  ];

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: colors.cream, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: colors.blue, padding: "24px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ margin: "0 0 4px", fontSize: 11, color: colors.coral, textTransform: "uppercase", letterSpacing: 2, fontWeight: 700 }}>Product Requirements Document</p>
          <h1 style={{ margin: 0, color: colors.white, fontSize: 28, fontWeight: 800, lineHeight: 1.2 }}>Landing Page — Perusahaan Produksi Kopi</h1>
          <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.65)", fontSize: 13 }}>Design System: Bruvi-Inspired · 6 Halaman Terpisah · v1.0</p>
        </div>
      </div>

      {/* Tab Nav */}
      <div style={{ background: colors.deepBlue, borderBottom: `2px solid ${colors.coral}` }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "12px 18px",
                border: "none",
                background: activeTab === tab.id ? colors.coral : "transparent",
                color: activeTab === tab.id ? colors.white : "rgba(255,255,255,0.6)",
                fontSize: 13,
                fontWeight: activeTab === tab.id ? 700 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                letterSpacing: activeTab === tab.id ? 0.5 : 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px" }}>

        {activeTab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              <div style={{ background: colors.white, borderRadius: 8, padding: 24, borderTop: `4px solid ${colors.blue}` }}>
                <h3 style={{ margin: "0 0 12px", color: colors.brown, fontSize: 16 }}>Tujuan Produk</h3>
                <p style={{ margin: 0, fontSize: 14, color: colors.gray, lineHeight: 1.7 }}>
                  Membangun presence digital premium untuk perusahaan produksi kopi yang mampu mengkonversi pengunjung — baik buyer, distributor, maupun mitra bisnis — menjadi leads qualified melalui alur inquiry yang terstruktur.
                </p>
              </div>
              <div style={{ background: colors.white, borderRadius: 8, padding: 24, borderTop: `4px solid ${colors.coral}` }}>
                <h3 style={{ margin: "0 0 12px", color: colors.brown, fontSize: 16 }}>Target Pengguna</h3>
                <p style={{ margin: 0, fontSize: 14, color: colors.gray, lineHeight: 1.7 }}>
                  Importir & distributor kopi B2B, café & roastery yang mencari supplier, investor dan mitra strategis, serta media dan jurnalis industri yang mencari narasumber.
                </p>
              </div>
            </div>

            <div style={{ background: colors.white, borderRadius: 8, padding: 24, marginBottom: 24 }}>
              <h3 style={{ margin: "0 0 16px", color: colors.brown, fontSize: 16 }}>Struktur Halaman</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {pages.map((p) => {
                  const pg = pageContent[p];
                  return (
                    <div
                      key={p}
                      onClick={() => setActiveTab(p)}
                      style={{ padding: "14px 16px", background: colors.lightGray, borderRadius: 6, cursor: "pointer", borderLeft: `3px solid ${colors.blue}` }}
                    >
                      <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 13, color: colors.blue }}>{pg.label}</p>
                      <p style={{ margin: "0 0 6px", fontSize: 11, color: colors.gray }}>{pg.sections.length} seksi</p>
                      <p style={{ margin: 0, fontSize: 11, color: colors.gray, lineHeight: 1.5 }}>{pg.goal.slice(0, 70)}…</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ background: colors.white, borderRadius: 8, padding: 24 }}>
              <h3 style={{ margin: "0 0 16px", color: colors.brown, fontSize: 16 }}>Prinsip Desain Global</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Tidak ada card grid monoton", "Setiap halaman menggunakan layout yang berbeda — split, full-width, alternating, staggered, editorial."],
                  ["Tidak ada card transparan berlapis", "Konten berada di atas background warna solid atau foto langsung, bukan di dalam kotak kaca/blur."],
                  ["Tidak ada ikon dekoratif", "Pengganti ikon: angka besar, teks tipografi dekoratif, numbering, atau warna kontras."],
                  ["Tipografi sebagai elemen visual", "Angka display size, headline kontras tinggi, dan kata kunci berwarna coral menjadi daya tarik visual utama."],
                  ["Foto sebagai substansi", "Foto produk, kebun, dan tim mendominasi layout — bukan pelengkap card kecil."],
                ].map(([title, desc], i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 4 ? `1px solid ${colors.lightGray}` : "none" }}>
                    <div style={{ width: 6, height: 6, background: colors.coral, borderRadius: "50%", marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: 13, color: colors.brown }}>{title}</strong>
                      <p style={{ margin: "4px 0 0", fontSize: 13, color: colors.gray, lineHeight: 1.5 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "flowchart" && (
          <div>
            <div style={{ background: colors.white, borderRadius: 8, padding: 28, marginBottom: 24 }}>
              <h3 style={{ margin: "0 0 8px", color: colors.brown, fontSize: 18 }}>User Flow — Navigasi Antar Halaman</h3>
              <p style={{ margin: "0 0 24px", fontSize: 13, color: colors.gray }}>Diagram menggambarkan alur utama pengunjung dari entry point hingga konversi inquiry.</p>
              <FlowChart />
            </div>
            <div style={{ background: colors.white, borderRadius: 8, padding: 24 }}>
              <h3 style={{ margin: "0 0 16px", color: colors.brown, fontSize: 16 }}>Penjelasan Alur</h3>
              {[
                ["Masuk ke Home", "Semua pengunjung masuk melalui halaman Home sebagai gateway utama. Home memiliki link ke semua halaman lain."],
                ["Eksplorasi Konten", "Dari Home, pengunjung dapat menuju About (mengenal perusahaan), Process (melihat standar produksi), atau Insight (membaca artikel)."],
                ["Kontak & Inquiry", "Contact digunakan untuk pertanyaan umum. Process Inquiry adalah halaman konversi khusus untuk calon mitra bisnis."],
                ["Endpoint", "Setelah form inquiry dikirim, tim sales melakukan follow-up manual. Ini adalah ujung dari funnel digital."],
                ["Navigasi Sekunder", "Dari Insight, pengunjung dapat kembali ke Home. Dari About dan Contact, ada jalur langsung ke Inquiry."],
              ].map(([title, desc], i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14 }}>
                  <div style={{ minWidth: 24, height: 24, background: colors.blue, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: 13, color: colors.brown }}>{title}</strong>
                    <p style={{ margin: "3px 0 0", fontSize: 13, color: colors.gray, lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pages.includes(activeTab) && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <p style={{ margin: "0 0 4px", fontSize: 11, color: colors.coral, textTransform: "uppercase", letterSpacing: 2, fontWeight: 700 }}>Spesifikasi Halaman</p>
              <h2 style={{ margin: 0, fontSize: 24, color: colors.brown, fontWeight: 800 }}>{pageContent[activeTab].label}</h2>
            </div>
            <div style={{ background: colors.white, borderRadius: 8, overflow: "hidden" }}>
              <PageSpec pageKey={activeTab} />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ background: colors.deepBlue, padding: "16px 32px", marginTop: 40, textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>PRD v1.0 · Design System: Bruvi-Inspired · 6 Pages · Coffee Production Company</p>
      </div>
    </div>
  );
}
