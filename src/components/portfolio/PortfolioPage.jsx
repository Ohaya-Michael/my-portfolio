import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import CTASection from './CTASection';

const projectsData = [
  {
    title: "Next-Gen Dashboard",
    description: "A comprehensive UI/UX overhaul for a global fintech platform focusing on data visualization.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoK_a2HBzpBMk6ttgdRctX9AESTs3v-iFHX1UrC2P0J2PnHmTu4doig7R7wNYmmUQCqZ_1_90G_hNOSnlWsmiWj8mycVnbjYZaB0mzFgYsi97eb9c8pWzqkef9wv_ZG21Mq_RoMZGirdAPnt9RFP7fnP-HTKlZQt2e0dKiyYMwvI06_XJglLJhiyxHe-FS3p9yvNJTaefzCiv345KiW3yYGgF3DevBHfMvvBoM3ByNkwdgg6u-HLP61j88zbyyoXmfwBA98Elj4L8"
  },
  {
    title: "AI Brand Identity",
    description: "Visual identity and logo design for a machine learning startup specializing in neural networks.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn_nGwEWVPItUBBloAsY3ACmw51Ps1GxJZH2ZLLNsYrskT4A_rMhuFqBpgIbsMVISXRjdHuGuFJ_6pdxZpcEhBvWtyLrxDaKzES_5uVZ95-BDLITs4BAruzkkuGlIL70P4_x8YqiaKeXmnh4FmVwha24pPBVtW1_yyDMzoX3x75aTOkjHTDNYcSdM5t-LBS3_Qc5ogCpT0cUUwACriLvbicQIdaaFz-IPWrjZ9BmegWQu4uyVP1V8ZnNbjYFprd98PHqvfQARRVrE"
  },
  {
    title: "E-commerce Redesign",
    description: "Mobile-first shopping experience optimized for high-conversion retail workflows.",
    imageUrl: "https://media.istockphoto.com/id/2175713816/photo/elegant-living-room-with-beige-sofa-and-fireplace.webp?b=1&s=612x612&w=0&k=20&c=gTlWasHuBcM-YKRI6kb9gt9TmAEB6IJg-2YRX7nYc9Q="
  },
  {
    title: "SaaS Onboarding Flow",
    description: "End-to-end user onboarding experience for a B2B SaaS product, focusing on user retention.",
    imageUrl: "https://media.istockphoto.com/id/2174551157/de/foto/cyber-security-data-protection-business-technology-privacy-konzept.jpg?s=612x612&w=0&k=20&c=gDLUzTxBfnclqYbrYcxHEexBLgAcSedITWEUeM8Gny0="
  },,
  {
    title: "SaaS Onboarding Flow",
    description: "End-to-end user onboarding experience for a B2B SaaS product, focusing on user retention.",
    imageUrl: "https://media.istockphoto.com/id/1644746219/photo/top-view-of-omega-3-food-items-on-black-table.webp?b=1&s=612x612&w=0&k=20&c=IoITWZs1iQ-rqFUW5lvOuyWZSMgx8Al04f4Pziq5520="
  },,
  {
    title: "SaaS Onboarding Flow",
    description: "End-to-end user onboarding experience for a B2B SaaS product, focusing on user retention.",
    imageUrl: "https://media.istockphoto.com/id/2186531857/photo/smiling-man-stands-in-the-kitchen-savoring-a-home-salad-bowl.webp?b=1&s=612x612&w=0&k=20&c=M6gr81UFPl_1ABWKlb--pm1bhbVltsNN50YpoglN25c="
  },
];

const PortfolioPage = () => {
  return (
    <div className="py-20 min-h-screen bg-[#0a0a0a] dark:bg-[#101622] text-slate-900 dark:text-slate-100 antialiased font-sans">
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
          <SectionHeader 
            badge="Creative Gallery"
            title="Selected Works"
            description="A curated collection of digital experiences, brand identities, and product designs crafted with precision and purpose."
          />
        </section>

        {/* Project Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default PortfolioPage;