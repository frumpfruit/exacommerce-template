import React from 'react';
import './RetailTheme.css'; // Import the specific CSS tokens for HAVEN

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import CollectionSlider from './components/CollectionSlider';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

const BEST_SELLERS = [
  { id: 1, name: 'Circa Side Table', price: 'IDR 1,100,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: '', desc: 'FSC-certified solid oak side table with a minimalist cylindrical silhouette.' },
  { id: 2, name: 'Crema Dining Table 8 Seater', price: 'IDR 35,000,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: 'PRE ORDER', desc: 'Eight-seater dining table handcrafted from solid European white oak.' },
  { id: 3, name: 'Livra Coffee Table', price: 'IDR 6,500,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: 'PRE ORDER', desc: 'Architectural solid wood coffee table with distinct floating leg joins.' },
  { id: 4, name: 'Minimalist Lounge Chair', price: 'IDR 4,500,000', img: '/images/retail/product_lounge_chair_1780307435536.png', tag: '', desc: 'Curved ash wood structure upholstered in premium linen boucle fabric.' },
  { id: 5, name: 'Ceramic Table Lamp', price: 'IDR 1,200,000', img: '/images/retail/product_ceramic_lamp_1780307642586.png', tag: '', desc: 'Hand-thrown sand textured ceramic base with organic linen shade.' },
];

const NEW_COLLECTION = [
  { id: 1, name: 'Velvet Sofa 3 Seater', price: 'IDR 12,000,000', img: '/images/retail/product_lounge_chair_1780307435536.png', tag: 'NEW', desc: 'Luxurious three-seater sofa featuring high-density cushioning and brushed brass legs.' },
  { id: 2, name: 'Oak Wood TV Stand', price: 'IDR 8,500,000', img: '/images/retail/product_dining_table_1780307623683.png', tag: 'NEW', desc: 'Sleek entertainment unit made of rift-cut oak with slide-to-reveal slatted doors.' },
  { id: 3, name: 'Abstract Area Rug', price: 'IDR 3,200,000', img: '/images/retail/product_ceramic_lamp_1780307642586.png', tag: 'NEW', desc: 'Organic wool-blend rug with subtle sand-carved abstract geometric patterns.' },
  { id: 4, name: 'Brass Floor Lamp', price: 'IDR 2,800,000', img: '/images/retail/product_ceramic_lamp_1780307642586.png', tag: '', desc: 'Hand-brushed solid brass lighting fixture emitting a warm ambient glow.' },
  { id: 5, name: 'Leather Accent Chair', price: 'IDR 6,900,000', img: '/images/retail/product_lounge_chair_1780307435536.png', tag: '', desc: 'Handcrafted aniline leather armchair with a sandblasted steel frame.' },
];

export default function RetailStore() {
  return (
    <div className="vivere-theme">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <CollectionSlider 
        title="Best Seller" 
        tagline="Most Coveted Items"
        spotlightPosition="left" 
        spotlightImage="/images/retail/spotlight-bestseller.png"
        spotlightText="BEST<br/>SELLER"
        spotlightDesc="Discover our most coveted, timeless furniture pieces handcrafted from solid oak and upholstered in premium boucle texturing, built to anchor your living spaces."
        products={BEST_SELLERS}
      />
      <CollectionSlider 
        title="New Collection" 
        tagline="Fresh Arrivals"
        spotlightPosition="right" 
        spotlightImage="/images/retail/spotlight.png"
        spotlightText="NEW<br/>COLLECTION"
        spotlightDesc="Introducing our latest seasonal archive. An elegant collection highlighting clean silhouettes, soft linen textures, and warm organic lighting elements."
        products={NEW_COLLECTION}
      />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

