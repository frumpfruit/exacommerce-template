import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight } from '../motionPresets';

const brand = {
  blue: "#004E7C",
  deepBlue: "#024871",
  coral: "#F58A6C",
  cream: "#F7F9FF",
  white: "#FFFFFF",
  brown: "#2C1503",
  tan: "#F5E6D3",
  gray: "#41474F",

  onSurface: "#001d32",
  softMint: "#EDF8F8",
  surface: "#f7f9ff",
  primary: "#003759",};

export default function ProductDetailPage({ product, allProducts = [], onAddToCart, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return null;

  const isAdded = false; // We can pass cart state down if we want dynamic "Remove from Cart", but for now it's okay

  // Get 3 related products
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="font-body-md" style={{ backgroundColor: brand.cream, color: brand.onSurface, minHeight: '100vh', paddingTop: '40px' }}>
      
      {/* Breadcrumb & Navigation */}
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-8 mb-8">
        <button 
          onClick={() => onNavigate('store')}
          className="text-[13px] font-bold uppercase tracking-[2px] transition-opacity hover:opacity-70 flex items-center gap-2"
          style={{ color: brand.gray }}
        >
          &larr; Back to Catalog
        </button>
      </div>

      {/* Main Product Section */}
      <section className="max-w-[1280px] mx-auto px-8 md:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Images */}
          <motion.div 
            {...fadeLeft}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="w-full aspect-square rounded-[2px] overflow-hidden bg-white shadow-xl flex items-center justify-center p-8 border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
              <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
            {/* Thumbnail Gallery (Placeholder if we had more images) */}
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square rounded-[2px] overflow-hidden bg-white border border-black/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity p-2">
                <img src={product.img} alt="thumb" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div 
            {...fadeRight}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>
              {product.category}
            </p>
            <h1 className="text-[40px] md:text-[56px] font-bold font-display-lg leading-[1.1] mb-6" style={{ color: brand.onSurface }}>
              {product.name}
            </h1>
            
            <div className="flex items-end gap-4 mb-8">
              <span className="text-[32px] font-bold" style={{ color: brand.onSurface }}>${product.price}</span>
              {product.originalPrice && (
                <span className="text-[18px] line-through mb-1" style={{ color: brand.gray }}>${product.originalPrice}</span>
              )}
            </div>

            <p className="text-[16px] leading-relaxed mb-10" style={{ color: brand.gray }}>
              {product.desc}
            </p>

            {/* Features List */}
            {product.features && product.features.length > 0 && (
              <div className="mb-10">
                <p className="uppercase text-[12px] font-bold mb-4" style={{ color: brand.onSurface }}>Key Features</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: brand.gray }}>
                      <span style={{ color: brand.coral, fontWeight: 'bold' }}>âœ“</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-10 border-t border-b py-6" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <p className="text-[13px] font-bold uppercase tracking-[1px] mb-2" style={{ color: brand.gray }}>
                Minimum Order Quantity (B2B)
              </p>
              <p className="text-[16px] font-bold" style={{ color: brand.onSurface }}>
                {product.moq}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 py-5 font-bold rounded-[2px] transition-transform hover:-translate-y-1 shadow-lg"
                style={{ backgroundColor: brand.coral, color: brand.white }}
              >
                Add to Inquiry List
              </button>
              <button 
                onClick={() => {
                  onAddToCart(product);
                  onNavigate('inquiry');
                }}
                className="flex-1 py-5 font-bold rounded-[2px] border transition-colors hover:bg-black/5"
                style={{ borderColor: brand.onSurface, color: brand.onSurface }}
              >
                Request Quotation
              </button>
            </div>
            
            <p className="text-[12px] mt-6 flex items-center gap-2" style={{ color: brand.gray }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22c55e' }}></span>
              In stock and ready to ship.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24" style={{ backgroundColor: brand.white }}>
          <div className="max-w-[1280px] mx-auto px-8 md:px-16">
            <motion.div {...fadeUp} className="mb-12">
              <h2 className="text-[32px] font-bold font-display-lg" style={{ color: brand.onSurface }}>
                Explore More
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relProd, i) => (
                <motion.div 
                  key={relProd.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border rounded-[2px] p-6 flex flex-col justify-between group cursor-pointer transition-shadow hover:shadow-xl"
                  style={{ borderColor: 'rgba(0,0,0,0.05)' }}
                  onClick={() => onNavigate('product-detail', relProd)}
                >
                  <div className="aspect-square w-full rounded-[2px] overflow-hidden mb-6 bg-gray-50 flex items-center justify-center p-4">
                    <img src={relProd.img} alt={relProd.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-[2px] mb-2" style={{ color: brand.coral }}>{relProd.category}</p>
                    <h3 className="text-[20px] font-bold leading-tight" style={{ color: brand.onSurface }}>{relProd.name}</h3>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                    <span className="font-bold text-[18px]" style={{ color: brand.onSurface }}>${relProd.price}</span>
                    <span className="text-[12px] font-bold uppercase tracking-[1px] text-black/50 group-hover:text-black transition-colors">
                      View Details &rarr;
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}



