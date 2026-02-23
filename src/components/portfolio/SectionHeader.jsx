import React from 'react';

const SectionHeader = ({ badge, title, description, className = "" }) => (
  <div className={`max-w-3xl ${className}`}>
    {badge && (
      <span className="text-[#0d59f2] font-semibold tracking-wider text-sm uppercase mb-4 block">
        {badge}
      </span>
    )}
    <h1 className="text-white text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1]">
      {title}
    </h1>
    {description && (
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;