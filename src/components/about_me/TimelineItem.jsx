import React from 'react';

const TimelineItem = ({ date, title, company, description, icon, isOdd }) => {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal ${isOdd ? 'md:odd:flex-row-reverse' : ''} group`}>
      {/* Icon Node */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101622] text-[#0d59f2] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>

      {/* Content Card */}
      <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 shadow-sm transition-all hover:bg-white dark:hover:bg-slate-900/50">
        <div className="flex items-center justify-between mb-2">
          <time className="text-sm font-bold text-[#0d59f2]">{date}</time>
        </div>
        <div className="text-lg font-bold text-slate-900 dark:text-white">{title}</div>
        <div className="text-slate-600 dark:text-slate-400 font-medium mb-3">{company}</div>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;