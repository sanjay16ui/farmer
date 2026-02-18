import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-visible z-10">
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-slide-up">
          
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8">
             <span className="w-1.5 h-1.5 rounded-full bg-agri-green"></span>
             <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Platform 2.0</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-agri-text mb-8 leading-[1.1]">
            Intelligence. <br/>
            <span className="text-gray-400 font-normal">Grounded in reality.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg text-agri-textLight mb-12 max-w-[650px] leading-relaxed font-normal">
            A unified operating system for agriculture. From soil analysis to market pricing, manage every node of the supply chain with clarity and precision.
          </p>

        </div>
      </div>
    </section>
  );
};