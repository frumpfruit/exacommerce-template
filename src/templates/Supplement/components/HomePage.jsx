import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Leaf, Award, 
  Activity, Star, ChevronDown, Users, Heart 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax, useCountUp, useStaggerVisible } from '../../../lib/motionHooks';

// â”€â”€â”€ Parallax Hero Background â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ParallaxHeroBg() {
  const [parallaxRef, offset] = useParallax(0.25);
  return (
    <div
      ref={parallaxRef}
      style={{
        position: 'absolute',
        inset: '-20% 0',
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(120,190,0,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(255,205,0,0.04) 0%, transparent 60%)',
        transform: `translateY(${offset}px)`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

// â”€â”€â”€ Animated Stat Counter â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function AnimatedStat({ value, label, suffix = '' }) {
  // Extract numeric portion
  const numericMatch = value.match(/[\d.]+/);
  const numericVal = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.replace(/[\d.]+.*/, '');
  const postfix = suffix || value.replace(/^[^0-9]*[\d.]+/, '');

  const hasDecimal = numericVal % 1 !== 0;
  const [ref, current] = useCountUp(numericVal, 1600, hasDecimal ? 1 : 0);

  return (
    <div ref={ref} className="supp-stat-item-clean">
      <div className="supp-stat-num">
        {prefix}{current}{postfix}
      </div>
      <div className="supp-stat-label">{label}</div>
    </div>
  );
}

// â”€â”€â”€ Staggered Benefits Grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const BENEFITS = [
  { icon: Leaf, title: '100% Plant-Based', desc: 'Seluruh produk terbuat dari protein nabati organik murni tanpa lemak jenuh hewani.' },
  { icon: Activity, title: 'Low Glycemic Index', desc: 'Formula pelepasan lambat karbohidrat kompleks menjaga kestabilan kadar gula darah Anda.' },
  { icon: ShieldCheck, title: 'Gut-First Science', desc: 'Diperkaya inulin prebiotik alami untuk melapisi dinding lambung dan mencegah asam berlebih.' },
  { icon: Sparkles, title: 'Zero Chemical Fillers', desc: 'Bebas maltodekstrin, pemanis aspartam, pengental sintetik, maupun pewarna buatan.' },
];

function StaggeredBenefits() {
  const count = BENEFITS.length;
  const [containerRef, visibles] = useStaggerVisible(count, 90, 0.05);

  return (
    <div
      ref={containerRef}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px', marginTop: '30px' }}
    >
      {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
        <div
          key={i}
          style={{
            padding: '24px',
            backgroundColor: 'var(--supp-surface-base)',
            borderRadius: '15px',
            border: '1px solid var(--supp-border-muted)',
            textAlign: 'center',
            opacity: visibles[i] ? 1 : 0,
            transform: visibles[i]
              ? 'none'
              : i % 2 === 0
                ? 'translateY(32px) scale(0.95)'
                : 'translateY(32px) rotate(-1deg) scale(0.95)',
            transition: `opacity 700ms cubic-bezier(0.16, 1.04, 0.3, 1), transform 700ms cubic-bezier(0.16, 1.04, 0.3, 1)`,
          }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(120, 190, 0, 0.1)', color: 'var(--supp-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
            <Icon size={24} />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--supp-text-primary)', marginBottom: '8px' }}>{title}</h3>
          <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
        </div>
      ))}
    </div>
  );
}

// â”€â”€â”€ Parallax Testimonial Strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const TESTIMONIALS = [
  { text: '"Energi saya stabil seharian dan lambung jadi terasa sangat nyaman!"', name: 'Dewi Lestari', role: 'Ibu Rumah Tangga & Runner, 34', initials: 'DL' },
  { text: '"Produk Oat Purple ini ramah sekali di lambung, rasanya lezat tidak seret."', name: 'Roni Wijaya', role: 'Software Architect, 40', initials: 'RW' },
  { text: '"Pencernaan saya jauh lebih lancar dan lingkar perut terasa lebih enteng."', name: 'Adinda Putri', role: 'Fitness Enthusiast, 28', initials: 'AP' },
];

export default function HomePage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Hero entrance animation
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Subtle mouse parallax for hero SVG
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 18;
    const y = (clientY / window.innerHeight - 0.5) * 18;
    setMousePos({ x, y });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        className="supp-section supp-container"
        style={{ position: 'relative', overflow: 'hidden' }}
        onMouseMove={handleMouseMove}
      >
        <ParallaxHeroBg />
        <div className="supp-hero" style={{ position: 'relative', zIndex: 1 }}>

          {/* Hero text â€” slides in from left */}
          <div
            className="supp-hero-content"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateX(-40px)',
              transition: 'opacity 900ms cubic-bezier(0.16, 1.04, 0.3, 1) 100ms, transform 900ms cubic-bezier(0.16, 1.04, 0.3, 1) 100ms',
            }}
          >
            <div className="supp-hero-badge">100% Plant-Based Clean Nutrition</div>
            <h1 className="supp-hero-title">
              Fuel Your Day <br />
              With <span className="supp-badge-highlight">Pure Power</span>, <br />
              No Fillers, Just <span className="supp-badge-highlight-yellow">Health</span>.
            </h1>
            <p className="supp-hero-desc">
              Premium daily functional meals and liquid supplements made from organic multigrains, 
              superfoods, and zero artificial additives. Scientifically formulated to enhance immunity, 
              restore energy, and optimize gut longevity.
            </p>
            <div className="supp-hero-actions">
              <button className="supp-btn supp-btn-primary" onClick={() => onNavigate('products')}>
                Explore Products <ArrowRight size={16} />
              </button>
              <button className="supp-btn supp-btn-secondary" onClick={() => onNavigate('about')}>
                Our Philosophy
              </button>
            </div>
          </div>

          {/* Hero SVG â€” slides in from right + mouse parallax */}
          <div
            className="supp-hero-image-wrap"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible
                ? `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
                : 'translateX(60px)',
              transition: heroVisible
                ? 'transform 0.12s ease-out, opacity 900ms cubic-bezier(0.16, 1.04, 0.3, 1) 200ms'
                : 'opacity 900ms cubic-bezier(0.16, 1.04, 0.3, 1) 200ms, transform 900ms cubic-bezier(0.16, 1.04, 0.3, 1) 200ms',
            }}
          >
            <svg viewBox="0 0 400 400" className="supp-hero-mockup" fill="none">
              <defs>
                <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#03582d" />
                  <stop offset="100%" stopColor="#78be00" />
                </linearGradient>
                <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffcd00" />
                  <stop offset="100%" stopColor="#ff9900" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="130" fill="url(#grad-green)" opacity="0.10" />
              <polygon points="200,90 310,150 310,270 200,330 90,270 90,150" fill="url(#grad-green)" opacity="0.05" />
              <rect x="145" y="110" width="110" height="190" rx="20" fill="rgba(11, 15, 12, 0.85)" stroke="url(#grad-green)" strokeWidth="3" />
              <rect x="165" y="90" width="70" height="20" rx="5" fill="url(#grad-yellow)" />
              <rect x="155" y="130" width="10" height="150" fill="url(#grad-green)" opacity="0.8" />
              <circle cx="200" cy="180" r="24" fill="#0c1410" stroke="url(#grad-yellow)" strokeWidth="2" />
              <path d="M195,180 Q200,175 205,180" stroke="#78be00" strokeWidth="2" fill="none" />
              <rect x="180" y="235" width="50" height="4" rx="2" fill="#ffffff" opacity="0.4" />
              <rect x="180" y="245" width="40" height="4" rx="2" fill="#ffffff" opacity="0.4" />
              <rect x="180" y="255" width="30" height="3" rx="1.5" fill="#78be00" opacity="0.6" />
              <path d="M245,130 C240,150 240,260 245,280" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
              <circle cx="105" cy="190" r="5" fill="#ffcd00" opacity="0.8" />
              <circle cx="295" cy="150" r="6" fill="#78be00" opacity="0.8" />
              <circle cx="285" cy="250" r="4" fill="#ffcd00" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>

      {/* â”€â”€ CERT STRIP â€” blur dissolve â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <ScrollReveal direction="blur" delay={0}>
        <section className="supp-cert-strip">
          <div className="supp-container" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--supp-text-secondary)' }}>
            <span>BPOM RI Certified</span>
            <span style={{ color: 'var(--supp-surface-raised)' }}>â€¢</span>
            <span>100% Halal MUI</span>
            <span style={{ color: 'var(--supp-surface-raised)' }}>â€¢</span>
            <span>GMP Certified Quality</span>
            <span style={{ color: 'var(--supp-surface-raised)' }}>â€¢</span>
            <span>HACCP Food Safety</span>
          </div>
        </section>
      </ScrollReveal>

      {/* â”€â”€ BENEFITS GRID â€” stagger grow â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="supp-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--supp-border-muted)' }}>
        <div className="supp-container">
          <ScrollReveal direction="up">
            <div className="supp-section-title-wrap">
              <div className="supp-section-subtitle">Mengapa Memilih Kami</div>
              <h2 className="supp-section-title">Standar Baru Nutrisi Harian Anda</h2>
            </div>
          </ScrollReveal>
          <StaggeredBenefits />
        </div>
      </section>

      {/* â”€â”€ STATS â€” animated counters, slide from sides â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="supp-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--supp-border-muted)' }}>
        <div className="supp-container">
          <div className="supp-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '0' }}>
            <ScrollReveal direction="right" staggerIndex={0}>
              <AnimatedStat value="500K+" label="Packs Distributed" />
            </ScrollReveal>
            <ScrollReveal direction="up" staggerIndex={1} delay={80}>
              <AnimatedStat value="98.4%" label="Positive Customer Reviews" />
            </ScrollReveal>
            <ScrollReveal direction="up" staggerIndex={2} delay={160}>
              <AnimatedStat value="15+" label="Organic Grains & Seeds" />
            </ScrollReveal>
            <ScrollReveal direction="left" staggerIndex={3} delay={240}>
              <AnimatedStat value="0%" label="Artificial Additives" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ SPLIT FEATURE â€” left/right alternating parallax â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="supp-section" style={{ backgroundColor: '#f0f6f2', borderTop: '1px solid var(--supp-border-muted)' }}>
        <div className="supp-container">
          <ScrollReveal direction="up">
            <div className="supp-section-title-wrap" style={{ textAlign: 'center' }}>
              <div className="supp-section-subtitle">Cara Kerja</div>
              <h2 className="supp-section-title">Dari Ladang ke Tubuh Anda</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '40px' }}>
            {[
              {
                num: '01', title: 'Seleksi Bahan Baku', side: 'left',
                desc: 'Setiap biji-bijian dan umbi-umbian dipilih langsung dari mitra tani organik bersertifikat yang menerapkan budidaya bebas pestisida kimia.',
                svg: (
                  <svg viewBox="0 0 360 200" fill="none" style={{ width: '100%', height: '100%' }}>
                    <rect width="360" height="200" fill="#f0f6f2"/>
                    {/* Sun */}
                    <circle cx="300" cy="40" r="24" fill="#ffcd00" opacity="0.9"/>
                    {[0,45,90,135,180,225,270,315].map((deg, i) => (
                      <line key={i} x1={300 + Math.cos(deg*Math.PI/180)*28} y1={40 + Math.sin(deg*Math.PI/180)*28} x2={300 + Math.cos(deg*Math.PI/180)*36} y2={40 + Math.sin(deg*Math.PI/180)*36} stroke="#ffcd00" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                    ))}
                    {/* Rolling hills */}
                    <path d="M0,140 Q90,90 180,120 Q270,150 360,110 L360,200 L0,200 Z" fill="#78be00" opacity="0.18"/>
                    <path d="M0,160 Q80,130 160,145 Q240,160 360,140 L360,200 L0,200 Z" fill="#03582d" opacity="0.12"/>
                    {/* Purple sweet potato plant */}
                    <ellipse cx="80" cy="165" rx="35" ry="18" fill="#7c3aed" opacity="0.25"/>
                    <ellipse cx="80" cy="158" rx="22" ry="12" fill="#6d28d9" opacity="0.5"/>
                    <path d="M80,158 Q70,130 60,115" stroke="#78be00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <path d="M80,158 Q90,128 100,110" stroke="#78be00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <path d="M60,115 Q55,105 65,102 Q70,108 60,115" fill="#4ade80" opacity="0.8"/>
                    <path d="M100,110 Q108,100 112,108 Q108,116 100,110" fill="#4ade80" opacity="0.8"/>
                    {/* Oat stalks */}
                    {[150, 170, 190, 210, 230].map((x, i) => (
                      <g key={i}>
                        <line x1={x} y1="170" x2={x + (i%2===0 ? -8 : 8)} y2="110" stroke="#78be00" strokeWidth="1.8" strokeLinecap="round"/>
                        <ellipse cx={x + (i%2===0 ? -8 : 8)} cy="107" rx="5" ry="9" fill="#ffcd00" opacity="0.7" transform={`rotate(${i%2===0 ? -10 : 10}, ${x}, 107)`}/>
                      </g>
                    ))}
                    {/* Label */}
                    <text x="16" y="185" fill="#03582d" fontSize="9" fontWeight="700" fontFamily="system-ui" letterSpacing="1.5" opacity="0.7">ORGANIC FARM PARTNER â€” BROMO, EAST JAVA</text>
                  </svg>
                )
              },
              {
                num: '02', title: 'Proses Cold-Pressed', side: 'right',
                desc: 'Formulasi dilakukan dengan teknologi suhu rendah untuk mempertahankan kandungan enzim aktif, antioksidan, dan serat larut air yang sensitif panas.',
                svg: (
                  <svg viewBox="0 0 360 200" fill="none" style={{ width: '100%', height: '100%' }}>
                    <rect width="360" height="200" fill="#fff8e6"/>
                    {/* Cold-press machine body */}
                    <rect x="120" y="50" width="120" height="110" rx="8" fill="#03582d" opacity="0.08" stroke="#78be00" strokeWidth="1.5"/>
                    <rect x="135" y="65" width="90" height="80" rx="4" fill="#ffffff" stroke="#78be00" strokeWidth="1" opacity="0.7"/>
                    {/* Pressing plate */}
                    <rect x="145" y="90" width="70" height="8" rx="2" fill="#78be00" opacity="0.9"/>
                    {/* Grain particles */}
                    {[[155,80],[165,75],[175,82],[185,77],[195,80],[170,88],[180,84]].map(([cx,cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="4" fill="#ffcd00" opacity={0.6 + i*0.05}/>
                    ))}
                    {/* Liquid drops */}
                    <path d="M165,115 Q163,125 165,130 Q167,125 165,115" fill="#78be00" opacity="0.8"/>
                    <path d="M185,112 Q183,122 185,127 Q187,122 185,112" fill="#78be00" opacity="0.8"/>
                    <path d="M175,117 Q173,128 175,133 Q177,128 175,117" fill="#03582d" opacity="0.6"/>
                    {/* Collection bowl */}
                    <ellipse cx="180" cy="140" rx="30" ry="6" fill="#78be00" opacity="0.15"/>
                    <path d="M150,140 Q150,155 180,158 Q210,155 210,140" fill="#78be00" opacity="0.12"/>
                    {/* Temperature indicator */}
                    <rect x="260" y="70" width="60" height="70" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
                    <text x="290" y="96" textAnchor="middle" fill="#03582d" fontSize="18" fontWeight="900" fontFamily="monospace">4Â°C</text>
                    <text x="290" y="112" textAnchor="middle" fill="#78be00" fontSize="8" fontWeight="700" fontFamily="system-ui" letterSpacing="1">COLD PRESS</text>
                    <rect x="268" y="118" width="44" height="4" rx="2" fill="#e5e7eb"/>
                    <rect x="268" y="118" width="20" height="4" rx="2" fill="#78be00"/>
                    <text x="290" y="132" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="system-ui">Low Temp Preserved</text>
                    {/* Side labels */}
                    <text x="16" y="185" fill="#03582d" fontSize="9" fontWeight="700" fontFamily="system-ui" letterSpacing="1.5" opacity="0.7">COLD-PRESS TECHNOLOGY â€” ENZYME ACTIVE</text>
                  </svg>
                )
              },
              {
                num: '03', title: 'Uji Klinis & Sertifikasi', side: 'left',
                desc: 'Setiap bets wajib melewati 3 tahap pengujian independen di laboratorium terakreditasi sebelum mendapatkan nomor registrasi BPOM RI.',
                svg: (
                  <svg viewBox="0 0 360 200" fill="none" style={{ width: '100%', height: '100%' }}>
                    <rect width="360" height="200" fill="#f0f6f2"/>
                    {/* Lab bench */}
                    <rect x="30" y="140" width="300" height="10" rx="2" fill="#d1d5db"/>
                    {/* Test tubes */}
                    {[[70,80,'#78be00'],[100,95,'#ffcd00'],[130,75,'#03582d'],[160,90,'#7c3aed']].map(([x,bot,col], i) => (
                      <g key={i}>
                        <rect x={x} y={bot} width="16" height={140-bot} rx="0 0 8 8" fill={col} opacity="0.25"/>
                        <rect x={x} y={bot} width="16" height={160-bot-20} rx="0" fill={col} opacity="0.5"/>
                        <rect x={x-2} y={bot-8} width="20" height="10" rx="3" fill="#9ca3af"/>
                        <line x1={x+8} y1={bot+10} x2={x+8} y2={140-8} stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="4,3"/>
                      </g>
                    ))}
                    {/* BPOM certificate */}
                    <rect x="210" y="55" width="120" height="85" rx="6" fill="white" stroke="#78be00" strokeWidth="2"/>
                    <rect x="210" y="55" width="120" height="14" rx="6 6 0 0" fill="#78be00"/>
                    <text x="270" y="66" textAnchor="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="system-ui" letterSpacing="1.5">BPOM RI CERTIFIED</text>
                    <text x="270" y="84" textAnchor="middle" fill="#03582d" fontSize="9" fontWeight="700" fontFamily="system-ui">MD 123456789</text>
                    {/* Checkmarks */}
                    {['Microbiological Safety','Heavy Metal Free','Pesticide Residue <0.01'].map((txt, i) => (
                      <g key={i} transform={`translate(218, ${96 + i*16})`}>
                        <circle cx="6" cy="6" r="5" fill="#78be00" opacity="0.9"/>
                        <path d="M3,6 L5,9 L9,3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <text x="16" y="10" fill="#374151" fontSize="7.5" fontFamily="system-ui">{txt}</text>
                      </g>
                    ))}
                    {/* MUI Halal badge */}
                    <circle cx="75" cy="48" r="28" fill="#03582d" opacity="0.08" stroke="#03582d" strokeWidth="1.5"/>
                    <text x="75" y="44" textAnchor="middle" fill="#03582d" fontSize="8" fontWeight="800" fontFamily="system-ui">HALAL</text>
                    <text x="75" y="56" textAnchor="middle" fill="#03582d" fontSize="7" fontFamily="system-ui">MUI 2024</text>
                    <text x="16" y="185" fill="#03582d" fontSize="9" fontWeight="700" fontFamily="system-ui" letterSpacing="1.5" opacity="0.7">LAB ACCREDITED â€” 3 INDEPENDENT AUDIT STAGES</text>
                  </svg>
                )
              },
            ].map(({ num, title, desc, side, svg }) => (
              <div key={num} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '30px', alignItems: 'center' }}>
                <ScrollReveal direction={side === 'left' ? 'right' : 'left'}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <span style={{ fontSize: '56px', fontWeight: 900, color: 'rgba(120,190,0,0.12)', lineHeight: 1, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{num}</span>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--supp-text-primary)', marginBottom: '10px' }}>{title}</h3>
                      <p style={{ fontSize: '14px', color: 'rgba(33,37,41,0.75)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={side === 'left' ? 'left' : 'right'} delay={150}>
                  <div style={{ height: '200px', borderRadius: '16px', border: '1px solid var(--supp-border-muted)', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                    {svg}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* â”€â”€ TESTIMONIALS â€” blur dissolve staggered â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="supp-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--supp-border-muted)' }}>
        <div className="supp-container">
          <ScrollReveal direction="up">
            <div className="supp-section-title-wrap">
              <div className="supp-section-subtitle">Real Impact</div>
              <h2 className="supp-section-title">Endorsed by Healthy Families</h2>
            </div>
          </ScrollReveal>

          <div className="supp-testimonial-carousel">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} direction="blur" staggerIndex={i} delay={50}>
                <div className="supp-testimonial-card">
                  <div className="supp-testimonial-rating">
                    {[...Array(5)].map((_, si) => <Star key={si} size={16} fill="currentColor" />)}
                  </div>
                  <p className="supp-testimonial-text">{t.text}</p>
                  <div className="supp-testimonial-author">
                    <div className="supp-testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="supp-testimonial-name">{t.name}</div>
                      <div className="supp-testimonial-title">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ COMMUNITY GRID â€” grow effect â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="supp-section" style={{ backgroundColor: '#f0f6f2', borderTop: '1px solid var(--supp-border-muted)' }}>
        <div className="supp-container">
          <ScrollReveal direction="up">
            <div className="supp-section-title-wrap">
              <div className="supp-section-subtitle">NutriPride Family</div>
              <h2 className="supp-section-title">Bagikan Perjalanan Kebugaran Anda</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '15px', marginTop: '30px' }}>
            {[
              { label: 'Pagi Penuh Energi', hash: '#sarapansehat', img: '/images/supplement/social_breakfast.png' },
              { label: 'Runner Rutin Akhir Pekan', hash: '#nutripridefit', img: '/images/supplement/social_runner.png' },
              { label: 'Lambung Tenang Bekerja', hash: '#gerdfree', img: '/images/supplement/social_office.png' },
              { label: 'Nutrisi Ramah Keluarga', hash: '#plantbasedpower', img: '/images/supplement/social_family.png' },
            ].map((social, idx) => (
              <ScrollReveal key={idx} direction="grow" staggerIndex={idx} delay={0}>
                <div style={{
                  height: '260px',
                  borderRadius: '16px',
                  border: '1px solid var(--supp-border-muted)',
                  backgroundImage: `url(${social.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                    zIndex: 0
                  }}></div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffcd00', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{social.hash}</div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.3 }}>{social.label}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â€” reveal wipe â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="supp-section supp-container">
        <ScrollReveal direction="up">
          <div className="supp-section-title-wrap">
            <div className="supp-section-subtitle">Got Questions?</div>
            <h2 className="supp-section-title">Common Concerns Resolved</h2>
          </div>
        </ScrollReveal>

        <div className="supp-faq-list">
          {[
            { q: 'Kapan waktu terbaik untuk mengonsumsi NutriPride Oat-Grains?', a: 'Sangat disarankan dikonsumsi di pagi hari sebagai pengganti sarapan sehat untuk memberikan cadangan energi kompleks yang bertahan lama. Anda juga dapat mengonsumsinya di malam hari sebagai pengganti makan malam ringan untuk membantu pemulihan lambung.' },
            { q: 'Apakah produk ini aman untuk penderita asam lambung akut (GERD)?', a: 'Ya, sangat aman. Kandungan serat oat beta-glucan dan ubi ungu organik berfungsi melapisi dinding lambung sehingga meminimalisir iritasi asam lambung. Produk kami juga diformulasikan tanpa pemanis buatan yang dapat memicu asam lambung.' },
            { q: 'Apakah anak-anak dan ibu hamil boleh mengonsumsi NutriPride?', a: 'Tentu saja boleh. Produk kami 100% menggunakan bahan organik alami pilihan yang aman bagi anak-anak usia di atas 2 tahun, ibu hamil, maupun ibu menyusui untuk membantu melengkapi kebutuhan mikronutrisi harian mereka.' },
            { q: 'Berapa lama masa kedaluwarsa setelah kemasan dibuka?', a: 'Karena tidak menggunakan bahan pengawet kimia, setelah kemasan segel dibuka sebaiknya dihabiskan dalam kurun waktu 30-45 hari. Selalu tutup kembali kemasan dengan rapat dan simpan di tempat kering sejuk yang terhindar dari sinar matahari langsung.' },
          ].map((faq, i) => (
            <ScrollReveal key={i} direction="right" staggerIndex={i} delay={0}>
              <div className={`supp-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="supp-faq-header" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <ChevronDown size={18} className="supp-faq-icon" />
                </button>
                {openFaq === i && (
                  <div className="supp-faq-content">{faq.a}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

