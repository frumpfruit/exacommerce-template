import React from 'react';
import { Leaf, Activity, ShieldCheck, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
    <section id="about" className="supp-section supp-container">
      <div className="supp-about-grid">
        <div className="supp-hero-content">
          <div className="supp-section-subtitle">Who We Are</div>
          <h2 className="supp-section-title">
            Pioneering <span className="supp-badge-highlight">Bio-Active Nutrition</span> for the Modern Life.
          </h2>
          <p className="supp-hero-desc" style={{ fontSize: '15px', color: 'rgba(33, 37, 41, 0.75)' }}>
            NUTRIPRIDE was established with a singular mission: to eliminate fake fillers, synthetic vitamins, 
            and empty calorie shakes from your cupboards. Inspired by clinically-proven, traditional multigrains, 
            we combine cold-pressed health sciences with active enzymes to formulate delicious, nutrient-dense products.
          </p>
          <p className="supp-hero-desc" style={{ fontSize: '15px', color: 'rgba(33, 37, 41, 0.75)' }}>
            Whether you need to boost stamina, detoxify accumulated toxins, or support digestive microbiome balances, 
            our products provide clean daily energy just like Hotto, but curated with the legendary standard of 
            fresh botanical precision.
          </p>
          
          <div className="supp-timeline">
            <div className="supp-timeline-item">
              <div className="supp-timeline-year">2023</div>
              <div className="supp-timeline-title">The Clean Ingredient Revolution</div>
              <div className="supp-timeline-desc">Founded with laboratory tests on active oats and organic sweet potato.</div>
            </div>
            <div className="supp-timeline-item">
              <div className="supp-timeline-year">2024</div>
              <div className="supp-timeline-title">BPOM & MUI Certification</div>
              <div className="supp-timeline-desc">Secured full national safety clearances and expanded to 100,000+ warriors.</div>
            </div>
            <div className="supp-timeline-item">
              <div className="supp-timeline-year">2026</div>
              <div className="supp-timeline-title">Smart Gut-Health Formulation</div>
              <div className="supp-timeline-desc">Integrated advanced multi-strain prebiotics into our daily food supplements.</div>
            </div>
          </div>
        </div>

        <div className="supp-about-cards">
          <div className="supp-about-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ color: 'var(--supp-surface-raised)', fontWeight: 800 }}>//</span> Raw Integrity
            </h3>
            <p>We source only organic, non-GMO multigrains, preserving active nutrients via low-temperature processing.</p>
          </div>
          
          <div className="supp-about-card supp-card-featured">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ color: 'var(--supp-surface-strong)', fontWeight: 800 }}>//</span> Gut-First Science
            </h3>
            <p>90% of overall health begins in the gut. Every formulation includes active pre/probiotics for absorption.</p>
          </div>

          <div className="supp-about-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ color: 'var(--supp-surface-raised)', fontWeight: 800 }}>//</span> Zero AI-Fillers
            </h3>
            <p>Strictly no chemical thickeners, artificial sweeteners, maltodextrin, or synthetic dyes. Just pure nourishment.</p>
          </div>

          <div className="supp-about-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ color: 'var(--supp-surface-raised)', fontWeight: 800 }}>//</span> For All Ages
            </h3>
            <p>Crafted to be gentle on children's stomachs, and highly effective for adult nutrient-absorption restoration.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sourcing Blueprint */}
    <section className="supp-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--supp-border-muted)' }}>
      <div className="supp-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
          <div>
            <div className="supp-section-subtitle">Ladang & Bahan Mentah</div>
            <h2 className="supp-section-title" style={{ color: 'var(--supp-text-primary)' }}>Sourcing Blueprint Organik Kami</h2>
            <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, marginTop: '15px' }}>
              Kami percaya bahwa bahan pangan berkualitas lahir dari tanah yang sehat. NutriPride bermitra langsung dengan kelompok tani lokal di kaki Gunung Bromo untuk budidaya ubi ungu organik bebas peptisida kimia.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6, marginTop: '10px' }}>
              Untuk oat multigrain, kami mengimpor biji oat Swedia utuh berkualifikasi tinggi yang terkenal akan kerapatan serat beta-glucan-nya yang tebal dan ramah bagi penderita maag/GERD.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0f6f2', borderRadius: '15px', padding: '30px', border: '1px solid var(--supp-border-muted)' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--supp-text-primary)', marginBottom: '15px' }}>Bahan Baku Inti:</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supp-text-secondary)' }}>
                <span style={{ color: 'var(--supp-surface-raised)', fontWeight: 800 }}>✔</span> <strong>Ubi Ungu Organik Bromo:</strong> Sumber antosianin tinggi untuk memelihara mukosa lambung.
              </li>
              <li style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supp-text-secondary)' }}>
                <span style={{ color: 'var(--supp-surface-raised)', fontWeight: 800 }}>✔</span> <strong>Swedish Oats Premium:</strong> Karbohidrat kompleks pelepasan lambat ramah pencernaan.
              </li>
              <li style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supp-text-secondary)' }}>
                <span style={{ color: 'var(--supp-surface-raised)', fontWeight: 800 }}>✔</span> <strong>15 Biji-bijian Aktif:</strong> Quinoa, biji chia, dan flaxseed sebagai pelengkap mikronutrisi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Certifications Audit Details */}
    <section className="supp-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--supp-border-muted)' }}>
      <div className="supp-container" style={{ textAlign: 'center' }}>
        <div className="supp-section-title-wrap">
          <div className="supp-section-subtitle">Standar Sertifikasi</div>
          <h2 className="supp-section-title" style={{ color: 'var(--supp-text-primary)' }}>Audit Keamanan Pangan & Higienitas</h2>
        </div>
        <p style={{ maxWidth: '700px', margin: '0 auto 30px', fontSize: '14px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.6 }}>
          Setiap bets formulasi NutriPride melewati tiga tahap pengujian independen sebelum dikemas secara kedap udara.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)', borderRadius: '12px', boxShadow: 'var(--supp-shadow-2)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--supp-surface-raised)', marginBottom: '8px' }}>BPOM RI</h3>
            <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.5 }}>Terdaftar resmi dengan kode MD nasional, menjamin keamanan konsumsi harian keluarga.</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)', borderRadius: '12px', boxShadow: 'var(--supp-shadow-2)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--supp-surface-raised)', marginBottom: '8px' }}>Halal MUI</h3>
            <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.5 }}>Sertifikasi halal mutlak untuk seluruh bahan mentah, rantai pasok, dan fasilitas pabrik.</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)', borderRadius: '12px', boxShadow: 'var(--supp-shadow-2)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--supp-surface-raised)', marginBottom: '8px' }}>HACCP & GMP</h3>
            <p style={{ fontSize: '13px', color: 'rgba(33, 37, 41, 0.75)', lineHeight: 1.5 }}>Standar manajemen bahaya pangan internasional untuk kebersihan mesin pengolahan.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Advisory Board Showcase */}
    <section className="supp-section" style={{ backgroundColor: '#f0f6f2', borderTop: '1px solid var(--supp-border-muted)' }}>
      <div className="supp-container">
        <div className="supp-section-title-wrap">
          <div className="supp-section-subtitle">Pakar & Formulator</div>
          <h2 className="supp-section-title" style={{ color: 'var(--supp-text-primary)' }}>Dewan Penasihat Ilmiah Kami</h2>
        </div>

        <div className="supp-team-grid" style={{ marginTop: '30px' }}>
          <div className="supp-team-card" style={{ backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)' }}>
            <div className="supp-team-img-box" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--supp-surface-raised)', backgroundColor: '#f0f6f2' }}>
              KS
            </div>
            <div className="supp-team-content" style={{ padding: '20px', textAlign: 'center' }}>
              <h3 className="supp-team-name" style={{ color: 'var(--supp-text-primary)' }}>Dr. Kartika Siregar, PhD</h3>
              <p className="supp-team-role">Chief of Botanical Research</p>
              <p style={{ color: 'rgba(33, 37, 41, 0.7)', fontSize: '13px', marginTop: '10px' }}>
                PhD Ilmu Pangan dari Kyoto University. Pakar bio-aktif biji-bijian dan kontrol glikemik karbohidrat pelepasan lambat.
              </p>
            </div>
          </div>

          <div className="supp-team-card" style={{ backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)' }}>
            <div className="supp-team-img-box" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--supp-surface-strong)', backgroundColor: '#f0f6f2' }}>
              BS
            </div>
            <div className="supp-team-content" style={{ padding: '20px', textAlign: 'center' }}>
              <h3 className="supp-team-name" style={{ color: 'var(--supp-text-primary)' }}>Budi Santoso, M.Sc</h3>
              <p className="supp-team-role">Head of Product Innovation</p>
              <p style={{ color: 'rgba(33, 37, 41, 0.7)', fontSize: '13px', marginTop: '10px' }}>
                15+ tahun pengalaman dalam diet klinis dan rekayasa formulasi pati organik alami.
              </p>
            </div>
          </div>

          <div className="supp-team-card" style={{ backgroundColor: 'var(--supp-surface-card)', border: '1px solid var(--supp-border-muted)' }}>
            <div className="supp-team-img-box" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--supp-surface-raised)', backgroundColor: '#f0f6f2' }}>
              AW
            </div>
            <div className="supp-team-content" style={{ padding: '20px', textAlign: 'center' }}>
              <h3 className="supp-team-name" style={{ color: 'var(--supp-text-primary)' }}>Amanda Wijaya, R.D.</h3>
              <p className="supp-team-role">Lead Clinical Nutritionist</p>
              <p style={{ color: 'rgba(33, 37, 41, 0.7)', fontSize: '13px', marginTop: '10px' }}>
                Dietisien klinis teregistrasi yang mengoordinasi konsultasi diet lambung gratis NutriPride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>  
  );
}
