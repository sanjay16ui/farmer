import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureHubs } from './components/FeatureHubs';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { AIChatModal } from './components/AIChatModal';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-agri-green selection:text-white bg-agri-bg overflow-x-hidden relative">
      {/* 1️⃣ BREAK THE WHITE-BLACK FLATNESS: Soft multi-layer gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Warm White Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAF8] via-[#F4F7F3] to-[#EEF2EF]" />
        
        {/* Subtle Atmospheric Glows (Faint Green/Teal Radial Overlays) */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-agri-green/5 blur-[150px] rounded-full animate-ambient mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-agri-teal/5 blur-[150px] rounded-full animate-ambient mix-blend-multiply animation-delay-2000" />
        
        {/* 6️⃣ ADD SUBTLE DATA FLOW EFFECT: Faint animated particle texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23145A32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <Navbar />
      
      <main className="relative flex flex-col z-10">
        {/* Intro Section */}
        <Hero />
        
        {/* Interactive Orbit System */}
        <FeatureHubs />
        
        {/* Supporting Details */}
        <TrustSection />
      </main>

      <Footer />
      
      <AIChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Action Button for AI if chat is closed */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-white text-agri-text p-4 rounded-full shadow-[0_8px_30px_rgb(20,90,50,0.15)] hover:scale-110 transition-all duration-300 group flex items-center gap-2 border border-white/50 ring-1 ring-agri-green/20 backdrop-blur-md"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-agri-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Sparkles className="w-5 h-5 text-agri-green relative z-10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-bold whitespace-nowrap text-agri-green relative z-10">
            Ask AgriTech AI
          </span>
        </button>
      )}
    </div>
  );
};

export default App;