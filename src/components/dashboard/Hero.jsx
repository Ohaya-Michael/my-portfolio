import React from 'react';
import CV from '../../assets/new_cv.pdf';
import Button from '../miscelenous/ButtonVariant';

const Hero = ({ name, role, description }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Mesh Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0d59f2]/15 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0d59f2]/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-4xl w-full text-center mt-20">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d59f2]/10 border border-[#0d59f2]/20 text-[#0d59f2] text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d59f2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d59f2]"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d59f2] to-blue-400">{name}</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Building modern digital experiences as a <span className="text-white">{role}</span>. {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/portfolio" variant="primary" className="w-full sm:w-auto py-4 px-8" icon="arrow_forward">
            See My Work 
          </Button>
          <Button href={CV} variant="outline" className="w-full sm:w-auto py-4 px-8" icon="download">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;