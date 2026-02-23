import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon, 
  iconRight,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-95";
  
  const variants = {
    primary: "bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white px-6 py-2.5 rounded-lg text-sm",
    cta: "bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white px-8 py-4 rounded-xl text-lg",
    outline: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#0d59f2] text-slate-900 dark:text-white px-8 py-4 rounded-xl text-lg",
    link: "text-[#0d59f2] font-bold text-sm group/btn p-0"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined !text-[20px]">{icon}</span>}
      {children}
      {iconRight && (
        <span className={`material-symbols-outlined !text-[18px] transition-transform ${variant === 'link' ? 'group-hover/btn:translate-x-1' : ''}`}>
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;