import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    // Charcoal button with Green shadow glow and inner gradient
    primary: "bg-[#1C1C1C] text-white shadow-[0_8px_20px_-6px_rgba(20,90,50,0.5)] hover:shadow-[0_12px_28px_-6px_rgba(20,90,50,0.6)] hover:-translate-y-1 hover:bg-black border border-white/10",
    
    // White button with strong Green border
    secondary: "bg-white text-agri-green border-2 border-agri-green/20 hover:border-agri-green hover:bg-agri-green/5 hover:shadow-lg",
    
    // Transparent button
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:border-agri-text hover:text-agri-text font-medium",
    
    // Ghost
    ghost: "bg-transparent text-gray-600 hover:text-agri-green hover:bg-agri-green/5 font-medium",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* 5️⃣ MICRO-DETAIL ENERGY: Gradient Overlay */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-agri-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      
      {/* Animated Sheen effect on hover */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
      )}

      <span className="relative flex items-center z-10">
        {children}
        {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
    </button>
  );
};