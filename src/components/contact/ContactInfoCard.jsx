import React from 'react';

const ContactInfoCard = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800 bg-[#0d59f2]/5 dark:bg-[#0d59f2]/5 border border-slate-200 dark:border-[#0d59f2]/10">
    <div className="size-10 rounded-lg flex items-center justify-center text-[#0d59f2] shrink-0">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <p className="text-sm font-medium text-slate-400 text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-base font-semibold text-white dark:text-white">{value}</p>
    </div>
  </div>
);

export default ContactInfoCard;