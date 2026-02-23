import React from 'react';
import CV from '../../assets/new_cv.pdf';
import ButtonVariant from '../miscelenous/ButtonVariant';

const CTASection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-[#0d59f2]/10 dark:bg-[#0d59f2]/5 border border-[#0d59f2]/20 rounded-2xl p-8 md:p-16 flex flex-col items-center text-center">
      <h2 className="text-white text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
        Interested in working together?
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
        I'm currently available for freelance projects and high-impact full-time opportunities. 
        Let's build something extraordinary.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <ButtonVariant to="/contact" variant="cta" icon="mail">Contact Me</ButtonVariant>
        <ButtonVariant href={CV} variant="outline" icon="download">View Resume</ButtonVariant>
      </div>
    </div>
  </section>
);

export default CTASection;