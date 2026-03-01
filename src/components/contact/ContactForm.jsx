import React, { useState } from 'react';
import Input from './InputPage';
import TextArea from './TextArea';
// import Button from '../about_me/AboutPageButton'; // Assuming existing Button component

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    console.log('Sending form data:', formData);
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-900/50  dark:bg-slate-900/50 p-12 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-4">
        <span className="material-symbols-outlined text-6xl text-green-500">check_circle</span>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-slate-500">I'll get back to you within 24-48 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-[#0d59f2] font-bold">Send another</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-[#0d59f2]/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input onChange={(e) => setFormData({...formData, name: e.target.value})} label="Full Name" icon="person" placeholder="John Doe" required />
          <Input onChange={(e) => setFormData({...formData, email: e.target.value})} label="Email Address" icon="alternate_email" type="email" placeholder="john@example.com" required />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Subject</label>
          <select onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full bg-slate-800 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[#0d59f2] focus:border-transparent outline-none transition-all text-white dark:text-white">
            <option>New Project Inquiry</option>
            <option>General Question</option>
            <option>Speaking Request</option>
            <option>Other</option>
          </select>
        </div>

        <TextArea onChange={(e) => setFormData({...formData, message: e.target.value})} label="Your Message" placeholder="Tell me about your project or just say hi!" required />

        <button 
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70"
        >
          <span className="material-symbols-outlined">{status === 'sending' ? 'sync' : 'send'}</span>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          I usually respond within 24-48 hours.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;