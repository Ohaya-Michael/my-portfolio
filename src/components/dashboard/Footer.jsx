import React from 'react';

const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();
  const socials = [
    {'name': 'LinkedIn', 'url': 'https://www.linkedin.com/in/ohaya-michael-onyebuchi/'}, 
    {'name': 'Xing', 'url': 'https://www.xing.com/profile/MichaelOnyebuchi_Ohaya/cv'}, 
    {'name': 'GitHub', 'url': 'https://github.com/Ohaya-Michael'}];

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {currentYear} {name}. Built with focus and precision.
        </p>
        <div className="flex gap-8">
          {socials.map((platform) => (
            <a 
              key={platform.name} 
              href={platform.url}
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;