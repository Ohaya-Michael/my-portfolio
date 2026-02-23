const TextArea = ({ label, ...props }) => (
  <div className="space-y-2">
    {label && <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">{label}</label>}
    <textarea 
      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[#0d59f2] focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 dark:text-white"
      rows="5"
      {...props}
    />
  </div>
);

export default TextArea;