import React from 'react';

const Input = ({ label, icon, ...props }) => (
  <div className="space-y-2">
    {label && <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">{label}</label>}
    <div className="relative">
      {icon && (
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
          {icon}
        </span>
      )}
      <input 
        className={`w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 ${icon ? 'pl-12' : 'px-4'} pr-4 focus:ring-2 focus:ring-[#0d59f2] focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-black dark:text-white`}
        {...props} 
      />
    </div>
  </div>
);

export default Input;
