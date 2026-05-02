import React, { useState } from 'react';
import Input from './InputPage';
import TextArea from './TextArea';
import axios from 'axios';

// import Button from '../about_me/AboutPageButton'; // Assuming existing Button component

const API_URL = "https://contact-form-api-a1hn.onrender.com/contact";

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Inquiry',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    console.log('Sending form data:', formData);

    setSending(true);
    setApiError("");

    try {
      await axios.post(API_URL, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
      })
      .then((contact_form) => {
        console.log('Form submitted successfully:', contact_form.data);
      });

      setSent(true);
    } catch (err) {
      const detail = err.response?.data?.detail;
      if (Array.isArray(detail)) {
        const fieldErrors = {};
        detail.forEach((e) => {
          const field = e.loc?.[e.loc.length - 1];
          if (field) fieldErrors[field] = e.msg;
        });
        setErrors(fieldErrors);
      } else if (typeof detail === "string") {
        setApiError(detail);
      } else if (err.request) {
        // Request was made but no response received (network down, server offline)
        setApiError("Could not reach the server. Please check your connection and try again.");
      } else {
        setApiError(`Server error ${err.response?.status}. Please try again.`);
      }
    } finally {
      setSending(false);
    }

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