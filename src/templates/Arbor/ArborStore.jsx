import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProcessPage from './components/ProcessPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ArborStore() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on mount and page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  // Handle navigation from components
  const handleNavigate = (pageId) => {
    if (pageId === 'home') {
      setActivePage('home');
    } else if (pageId === 'process') {
      setActivePage('process');
    } else if (pageId === 'about') {
      setActivePage('about');
    } else if (pageId === 'catalog') {
      // Return to main catalog
      window.location.hash = '';
    } else {
      setActivePage('home');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={handleNavigate} activePage={activePage} />
      <div className="flex-grow">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'process' && <ProcessPage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
