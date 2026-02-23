import React from 'react';

const SkillCard = ({ icon, title, description }) => (
  <div className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-[#0d59f2]/50 transition-all">
    <div className="size-12 rounded-lg bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2] mb-4 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default SkillCard;