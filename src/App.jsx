import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import TemaPage from './pages/TemaPage';
import HargaPage from './pages/HargaPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

import RetailStore from './templates/Retail/RetailStore';
import DistributionStore from './templates/Distribution/DistributionStore';
import SupplementStore from './templates/Supplement/SupplementStore';
import CoffeeStore from './templates/Coffee/CoffeeStore';
import RoasteryStore from './templates/Roastery/RoasteryStore';
import TextileStore from './templates/Textile/TextileStore';
import ArborStore from './templates/Arbor/ArborStore';
import './index.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function FloatingBackButton() {
  const { pathname } = useLocation();
  const nonTemplatePaths = ['/', '/tema', '/harga', '/legal/terms', '/legal/privacy'];
  
  if (nonTemplatePaths.includes(pathname)) {
    return null;
  }

  return (
    <Link 
      to="/tema" 
      className="fixed bottom-6 left-6 z-[9999] bg-gray-800 text-gray-100 px-5 py-2.5 rounded-full font-bold shadow-2xl hover:bg-gray-700 border border-gray-700 hover:-translate-y-1 transition-all flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
      Back to Showcase
    </Link>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FloatingBackButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tema" element={<TemaPage />} />
        <Route path="/harga" element={<HargaPage />} />
        
        {/* Legal Routes */}
        <Route path="/legal/terms" element={<TermsPage />} />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
        
        {/* Template Routes */}
        <Route path="/retail" element={<RetailStore />} />
        <Route path="/distribution" element={<DistributionStore />} />
        <Route path="/marketing" element={<SupplementStore />} />
        <Route path="/coffee" element={<CoffeeStore />} />
        <Route path="/roastery" element={<RoasteryStore />} />
        <Route path="/textile" element={<TextileStore />} />
        <Route path="/arbor" element={<ArborStore />} />
        <Route path="/:id" element={
          <div className="fullscreen-preview-wrapper" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className="display-md text-white mb-4">Template Preview</h1>
            <p className="text-gray-400 mb-8">Previewing structural layout.</p>
            <div className="p-12 border border-dashed border-gray-700 rounded-xl bg-gray-900 flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-gray-500">design_services</span>
              <p className="text-gray-500">Template rendering engine ready.</p>
            </div>
            <button 
              onClick={() => window.location.hash = '#/tema'}
              className="mt-12 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
            >
              Back to Catalog
            </button>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
