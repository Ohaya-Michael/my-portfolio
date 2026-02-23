import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 tracking-tight text-sm md:text-base";
  
  const variants = {
    primary: "bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white",
    secondary: "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white",
    white: "bg-white text-[#0d59f2] hover:bg-slate-100",
    outline: "bg-primary/20 border border-white/20 text-white hover:bg-primary/30",
    ghost: "text-slate-600 dark:text-slate-400 hover:text-[#0d59f2] dark:hover:text-[#0d59f2] font-medium"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
export { Button };