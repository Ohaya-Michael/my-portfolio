import React from 'react';

const SocialLink = ({ icon, platform, href }) => (
  <a 
    href={href}
    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-[#0d59f2] transition-all group"
  >
    <div className="size-8 rounded-md bg-slate-800 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#0d59f2] group-hover:text-white transition-colors">
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <span className="text-sm font-medium">{platform}</span>
  </a>
);

export default SocialLink;