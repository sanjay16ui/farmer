import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      className={`${className} animate-fade-in`} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Circuit lines - Flat clean style */}
      <path d="M12 22v-6" className="text-agri-green" />
      <path d="M8 18h8" className="text-agri-green" />
      
      {/* Leaf shape - Geometric and minimal */}
      <path d="M12 2a6 6 0 0 1 6 6c0 7-6 10-6 10S6 15 6 8a6 6 0 0 1 6-6Z" className="text-agri-text" />
      <path d="M12 8v4" className="text-agri-text" />
      <path d="M12 10l3-3" className="text-agri-text" />
      
      {/* Node points */}
      <circle cx="12" cy="2" r="1.5" className="fill-agri-green stroke-none" />
      <circle cx="8" cy="18" r="1.5" className="fill-agri-text stroke-none" />
      <circle cx="16" cy="18" r="1.5" className="fill-agri-text stroke-none" />
    </svg>
  );
};