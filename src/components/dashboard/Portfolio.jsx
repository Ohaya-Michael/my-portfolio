import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "Project Alpha",
      category: "Room Reservation Dashboard & Mobile App",
      url: "https://netflix-clone-d20ff.web.app/",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Q1MA3ITCap1NdM69Qxm-14Spa_k4l9AXBxNp-KUDdP2GIEa86VLdOWw1IL5iCTgxf1fjaggCST3B_e2HvpciOWcwRTC2yqG-lbK7NeDoaDlWwK49TXVx8SXhxLAMm5XFKKcCOgOO963gcQ80NLQz5bT8Ewr5qp3dmtZ0ZNTgGeuq5oaAW8BAkHGNxZhFNTYP8MaJnVuz7_O3ZUbugO2tN-wdfyqy_1Ds12vS1lw71MEHxDPMqFiqdZ4HX1LZ3207s_9B2zEAz2w"
    },
    {
      title: "Project Beta",
      category: "My old Portfolio Website (2020-2022)",
      url: "https://ohayamic-my-portfolio.netlify.app/",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDByLrPhQnr_gpQIak360w5fxxnU8gyUXLZyu-njwQPiJnZnOX5VrMCpRsXC7JrgPSBvx8Qd7U3c8NPEhBG_sj2cxQdO8IdsUKJJvJ-K22DvwwEhKT_IM57QDjFwhx3XPz9_QiWTga8ggorgFgxSf2HhuJ2hqcdVQrxwyuXK8Q4LsWYKVhDUfo1ee-CbPvoydMZVP5bCzvFjk_TJ1GFYh3ZLVumtpD48SvbupToskkb2YwZaAGTlzx4YokaiEz3-bvnginRfgfdR0E"
    },
    {
      title: "Project Gamma",
      category: "E-commerce Marketplace Design",
      url: "https://mega-food-recipe.netlify.app/",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPDBihSxN0rjpq1fhmPuM9ERGp2Bauh-0aAL8jk9kj2TpN3OxFePuUQxb6YCHQzD6tydtOxCK1K2E-6BU64wH25Qej8OclPOIeVbJ1jcyVLYKzLJZvEN9ZqO8Sj13bU3SspQGpfjchXqyikxbojC2SoAWR90Ag_N1h_ahY-W56DfI3D6Isveu8k1_JVQYyjshVu8il3p2Bo-V4hKO6waEyM02Gh-1v7a-x8bsM2c8BfG6LaOTu97-Ifbjmryk6hDOlLuH6c6dxcVQ"
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Selected Work</h2>
            <p className="text-slate-400">A collection of projects I'm proud of.</p>
          </div>
          <a href="/about" className="text-[#0d59f2] font-bold flex items-center gap-2 hover:underline">
            About Me
            <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.image}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;