import React from 'react';

const SectionHeader = ({ title, subtitle, center = false }) => (
  <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl space-y-4`}>
    <h2 className="text-3xl font-bold text-slate-900 text-white dark:text-white">{title}</h2>
    {subtitle && <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>}
  </div>
);

export default SectionHeader;