import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Games from './components/Games';
import Payments from './components/Payments';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Games />
        <Payments />
        <FAQ />
      </main>
      <Footer />
      
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}

export default App;
