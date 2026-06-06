import React, { useState } from 'react';

export default function InquiryPage({ inquiryItems = [], onGoBack, onClearCart }) {
  // If we came with no items, show empty state or fallback to default Bora Chair
  const defaultProduct = {
    id: 1,
    name: 'BORA Stacking Armless Chair',
    price: 300,
    priceFormatted: 'Rp 300',
    img: '/images/retail/bora_chair.png',
    tag: 'Chair',
    stock: 100,
    desc: 'Indonesian teak outdoor armless chair, stackable, precision mortise and tenon jointing.'
  };

  const items = inquiryItems.length > 0 ? inquiryItems : [{ product: defaultProduct, quantity: 1 }];
  const isSingleItem = items.length === 1;

  // Form States
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [quantity, setQuantity] = useState(items.reduce((acc, curr) => acc + curr.quantity, 0));
  const [pesan, setPesan] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (namaLengkap && email && telepon && quantity && pesan) {
      setSuccess(true);
      if (onClearCart) {
        onClearCart();
      }
    }
  };

  // Helper to format total price with appropriate currency prefix
  const formatTotal = (unitPrice, qty, formattedStr) => {
    const totalVal = unitPrice * qty;
    if (formattedStr && formattedStr.includes('Rp')) {
      return `Rp ${totalVal.toLocaleString('id-ID')}`;
    }
    return `IDR ${totalVal.toLocaleString('id-ID')}`;
  };

  // Calculate overall total for multi-item checkout
  const calculateCartGrandTotal = () => {
    const totalVal = items.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
    // Determine currency based on the first item
    const firstItemFormatted = items[0]?.product.priceFormatted || '';
    if (firstItemFormatted.includes('Rp')) {
      return `Rp ${totalVal.toLocaleString('id-ID')}`;
    }
    return `IDR ${totalVal.toLocaleString('id-ID')}`;
  };

  if (success) {
    return (
      <div style={{ backgroundColor: 'var(--vivere-surface-raised)', padding: 'var(--vivere-space-10) 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="vivere-container" style={{ maxWidth: '600px', width: '100%' }}>
          <div style={{
            backgroundColor: 'var(--vivere-surface-strong)',
            border: '1px solid var(--vivere-surface-muted)',
            borderRadius: 'var(--vivere-radius-xs)',
            padding: 'var(--vivere-space-9) var(--vivere-space-8)',
            boxShadow: 'var(--vivere-shadow-1)',
            textAlign: 'center'
          }}>
            {/* Paper Airplane Success Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--vivere-surface-raised)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--vivere-space-6)',
              border: '2px solid var(--vivere-border-strong)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--vivere-border-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>

            <h1 style={{
              fontSize: '22px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--vivere-text-primary)',
              marginBottom: 'var(--vivere-space-4)'
            }}>
              Inquiry Terkirim!
            </h1>

            <p style={{
              fontSize: '14px',
              color: 'var(--vivere-text-secondary)',
              lineHeight: 1.6,
              marginBottom: 'var(--vivere-space-8)'
            }}>
              Terima kasih, <strong>{namaLengkap}</strong>. Permintaan inquiry Anda telah berhasil dikirim ke sales desk HAVEN. Salinan inquiry telah dikirimkan ke <strong>{email}</strong>. Tim kami akan segera menghubungi Anda.
            </p>

            <button
              onClick={onGoBack}
              className="vivere-btn vivere-btn-primary"
              style={{ width: '100%', padding: 'var(--vivere-space-4)' }}
            >
              Kembali ke Toko
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--vivere-surface-raised)', padding: 'var(--vivere-space-8) 0' }}>
      <div className="vivere-container" style={{ maxWidth: '1000px' }}>

        {/* Main Header */}
        <div style={{ marginBottom: 'var(--vivere-space-7)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--vivere-text-primary)', margin: '0 0 var(--vivere-space-1) 0' }}>
            Kirim Inquiry
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)', margin: 0 }}>
            Isi formulir berikut untuk menghubungi seller mengenai produk ini.
          </p>
        </div>

        {/* Form & Summary Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--vivere-space-7)',
          alignItems: 'start'
        }}>

          {/* LEFT PANEL: Ringkasan Produk */}
          <div style={{
            backgroundColor: 'var(--vivere-surface-strong)',
            border: '1px solid var(--vivere-surface-muted)',
            borderRadius: 'var(--vivere-radius-xs)',
            padding: 'var(--vivere-space-6)',
            boxShadow: 'var(--vivere-shadow-1)'
          }}>
            <h2 style={{
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--vivere-text-primary)',
              margin: '0 0 var(--vivere-space-5) 0',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--vivere-space-2)'
            }}>
              {/* Shopping Cart Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Ringkasan Produk
            </h2>

            {/* List of items being checked out */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-6)' }}>
              {items.map((item, index) => {
                const prod = item.product;
                const activeQty = isSingleItem ? quantity : item.quantity;
                return (
                  <div key={prod.id || index} style={{ borderBottom: index < items.length - 1 ? '1px solid var(--vivere-surface-muted)' : 'none', paddingBottom: index < items.length - 1 ? 'var(--vivere-space-6)' : 0 }}>
                    {/* Image Wrapper */}
                    <div style={{
                      backgroundColor: 'var(--vivere-surface-raised)',
                      borderRadius: 'var(--vivere-radius-xs)',
                      padding: 'var(--vivere-space-4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '240px',
                      marginBottom: 'var(--vivere-space-4)',
                      border: '1px solid var(--vivere-surface-muted)'
                    }}>
                      <img
                        src={prod.img}
                        alt={prod.name}
                        style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                      />
                    </div>

                    {/* Name */}
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--vivere-text-primary)',
                      margin: '0 0 var(--vivere-space-2) 0'
                    }}>
                      {prod.name}
                    </h3>

                    {/* Tag badge */}
                    <div style={{ marginBottom: 'var(--vivere-space-5)' }}>
                      <span style={{
                        backgroundColor: 'var(--vivere-surface-muted)',
                        color: 'var(--vivere-text-secondary)',
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        🏷️ {prod.tag}
                      </span>
                    </div>

                    {/* Pricing and Stock Detail Row */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-3)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)' }}>Harga Satuan</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--vivere-text-primary)' }}>
                          {prod.priceFormatted || `Rp ${prod.price}`}
                        </span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)' }}>Stok Tersedia</span>
                        <span style={{
                          backgroundColor: 'var(--vivere-surface-base)',
                          color: 'var(--vivere-surface-strong)',
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '4px'
                        }}>
                          {prod.stock || 100} unit
                        </span>
                      </div>

                      {/* Quantity & Calculated Total */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--vivere-surface-muted)', paddingTop: 'var(--vivere-space-3)', marginTop: 'var(--vivere-space-1)' }}>
                        <span style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)', fontWeight: 600 }}>Jumlah Dipesan</span>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--vivere-text-primary)' }}>
                          {activeQty} unit
                        </span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: 'var(--vivere-text-secondary)', fontWeight: 600 }}>Total Harga</span>
                        <span style={{ fontSize: '16px', fontWeight: 700, color: '#3b82f6' }}>
                          {formatTotal(prod.price, activeQty, prod.priceFormatted)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Multi-item Grand Total */}
              {!isSingleItem && (
                <div style={{
                  borderTop: '2px solid var(--vivere-surface-muted)',
                  paddingTop: 'var(--vivere-space-4)',
                  marginTop: 'var(--vivere-space-2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--vivere-text-primary)' }}>Grand Total</span>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#3b82f6' }}>
                    {calculateCartGrandTotal()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: Formulir Inquiry */}
          <div style={{
            backgroundColor: 'var(--vivere-surface-strong)',
            border: '1px solid var(--vivere-surface-muted)',
            borderRadius: 'var(--vivere-radius-xs)',
            padding: 'var(--vivere-space-7)',
            boxShadow: 'var(--vivere-shadow-1)'
          }}>
            {/* Header */}
            <div style={{ borderBottom: '1px solid var(--vivere-surface-muted)', paddingBottom: 'var(--vivere-space-4)', marginBottom: 'var(--vivere-space-6)' }}>
              <h2 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--vivere-text-primary)',
                margin: '0 0 var(--vivere-space-1) 0',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--vivere-space-2)'
              }}>
                {/* Paper Airplane Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Formulir Inquiry
              </h2>
              <p style={{ fontSize: '12px', color: 'var(--vivere-text-secondary)', margin: 0 }}>
                Lengkapi informasi dibawah untuk mengirim inquiry kepada seller
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-6)' }}>

              {/* SECTION: Informasi Pribadi */}
              <div>
                <h3 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--vivere-text-primary)',
                  margin: '0 0 var(--vivere-space-4) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--vivere-space-2)',
                  borderBottom: '1px dashed var(--vivere-surface-muted)',
                  paddingBottom: 'var(--vivere-space-2)'
                }}>
                  {/* User Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Informasi Pribadi
                </h3>

                {/* Nama & Email Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--vivere-space-4)',
                  marginBottom: 'var(--vivere-space-4)'
                }}>
                  {/* Nama Lengkap */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vivere-text-primary)' }}>
                      Nama Lengkap <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Masukkan nama lengkap Anda"
                        value={namaLengkap}
                        onChange={e => setNamaLengkap(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 32px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontFamily: 'inherit',
                          fontSize: 'var(--vivere-text-sm)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vivere-text-primary)' }}>
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="email@contoh.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 32px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontFamily: 'inherit',
                          fontSize: 'var(--vivere-text-sm)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* No. Telepon */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vivere-text-primary)' }}>
                    No. Telepon <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="+62 8xxxxxxxxxx atau 08xxxxxxxxxx"
                      value={telepon}
                      onChange={e => setTelepon(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 32px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontFamily: 'inherit',
                        fontSize: 'var(--vivere-text-sm)',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>
                    Format: +62 8xxxxxxxxxx atau 08xxxxxxxxxx
                  </span>
                </div>
              </div>

              {/* SECTION: Detail Pesanan */}
              <div>
                <h3 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--vivere-text-primary)',
                  margin: '0 0 var(--vivere-space-4) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--vivere-space-2)',
                  borderBottom: '1px dashed var(--vivere-surface-muted)',
                  paddingBottom: 'var(--vivere-space-2)'
                }}>
                  {/* Box Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="21 8 21 21 3 21 3 8"></polyline>
                    <rect x="1" y="3" width="22" height="5"></rect>
                    <line x1="10" y1="12" x2="14" y2="12"></line>
                  </svg>
                  Detail Pesanan
                </h3>

                {/* Quantity & Expected Price Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--vivere-space-4)',
                  marginBottom: 'var(--vivere-space-4)',
                  alignItems: 'end'
                }}>
                  {/* Quantity */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vivere-text-primary)' }}>
                      Quantity <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                      </span>
                      <input
                        type="number"
                        required
                        min="1"
                        placeholder="Jumlah yang dibutuhkan"
                        value={quantity}
                        onChange={e => setQuantity(parseInt(e.target.value) || 1)}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 32px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontFamily: 'inherit',
                          fontSize: 'var(--vivere-text-sm)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Expected Price */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vivere-text-secondary)' }}>
                      Harga/Unit <span style={{ fontSize: '10px', color: '#9ca3af' }}>(opsional)</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#6b7280',
                        fontSize: '13px',
                        fontWeight: 600,
                        display: 'flex'
                      }}>
                        Rp
                      </span>
                      <input
                        type="text"
                        placeholder="Harga yang diharapkan"
                        value={expectedPrice}
                        onChange={e => setExpectedPrice(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 36px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontFamily: 'inherit',
                          fontSize: 'var(--vivere-text-sm)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Pesan */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vivere-space-1)' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--vivere-text-primary)' }}>
                    Pesan <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af', display: 'flex' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tuliskan kebutuhan spesifik, pertanyaan, atau permintaan khusus Anda..."
                      value={pesan}
                      onChange={e => setPesan(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 32px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontFamily: 'inherit',
                        fontSize: 'var(--vivere-text-sm)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* BUTTONS ROW */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--vivere-space-4)',
                borderTop: '1px solid var(--vivere-surface-muted)',
                paddingTop: 'var(--vivere-space-6)',
                marginTop: 'var(--vivere-space-2)'
              }}>
                <button
                  type="button"
                  onClick={onGoBack}
                  style={{
                    backgroundColor: 'var(--vivere-surface-strong)',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--vivere-text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--vivere-space-2)',
                    transition: 'all 0.2s ease'
                  }}
                  className="vivere-btn-back"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Kembali
                </button>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#7a92e5', // Soft indigo blue matching the Kirim Inquiry button
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 24px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--vivere-space-2)',
                    transition: 'all 0.2s ease',
                    flexGrow: 1
                  }}
                  className="vivere-btn-submit-inquiry"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Kirim Inquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
