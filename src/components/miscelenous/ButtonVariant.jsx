import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, className = '', icon, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-95 px-6 py-3 rounded-lg";
  
  const variants = {
    primary: "bg-[#0d59f2] text-white",
    cta: "bg-[#0d59f2] text-white px-8 py-4 rounded-xl text-lg",
    link: "text-[#0d59f2] font-bold text-sm group/btn p-0",
    outline: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // 1. If 'to' is provided, use React Router Link
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </Link>
    );
  }

  // 2. If 'href' is provided, use a standard <a> tag
  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noreferrer" {...props}>
        {children}
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </a>
    );
  }

  // 3. Otherwise, just return a normal button
  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );
};

export default Button;