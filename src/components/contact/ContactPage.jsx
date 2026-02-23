import React from 'react';
import ContactInfoCard from './ContactInfoCard';
import SocialLink from './SocialLink';
import ContactForm from './ContactForm';

const ContactPage = () => {
  const socials = [
    { platform: "LinkedIn", icon: "language", href: "https://www.linkedin.com/in/ohaya-michael-onyebuchi/" },
    { platform: "Xing", icon: "chat", href: "https://www.xing.com/profile/MichaelOnyebuchi_Ohaya/cv" },
    { platform: "GitHub", icon: "terminal", href: "https://github.com/Ohaya-Michael" },
  ];

  return (
    <div className="py-30 w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Let's <span className="text-[#0d59f2]">Collaborate</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or prospects to be part of your visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d59f2]">info</span>
                Contact Information
              </h2>
              <div className="space-y-6">
                <ContactInfoCard icon="mail" label="Email Address" value="michael.onyebuchi.ohaya@gmail.com" />
                <ContactInfoCard icon="phone" label="Phone Number" value="+49 176 4709 6065" />
                <ContactInfoCard icon="location_on" label="Current Location" value="Dresden, Germany" />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d59f2]">share</span>
                Social Presence
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socials.map(soc => <SocialLink key={soc.platform} {...soc} />)}
              </div>
            </section>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3 space-y-6">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 rounded-2xl overflow-hidden h-80 border border-slate-200 dark:border-slate-800 relative group">
          <img 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-40 transition-opacity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0S9u94ghJMN9uy7oPOr2pErmHYYWe2uGBcEucCWJD_aUtcbHBeJQ9NnoBlfoDCzjZwHegY7ccmnZjsgTuTXeUflWPGn2hoxmKkMpztKLRw_LWEVai-6G_6EpoL5m3sXswYWIl3EsTw2KCFiOiA-a-uJ3ykF2E-gH-msunRaZg0L-enswHazEzk8738YfdCW9qaNkRcJe47C2ajALKrcBFrL8R4IYV8240jy7jt1_kvsFf7BBhixYSxRekUm2OEiocBwv7s8Eu5b8" 
            alt="San Francisco Map"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center">
              <span className="material-symbols-outlined text-[#0d59f2] text-4xl mb-2">location_on</span>
              <p className="font-bold text-white uppercase tracking-widest text-sm">Dresden Germany</p>
              <p className="text-white/70 text-xs">Available for worldwide remote work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;