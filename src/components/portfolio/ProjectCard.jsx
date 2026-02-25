import React from 'react';
import Button from '../miscelenous/ButtonVariant';

const ProjectCard = ({ title, url, description, imageUrl, imageAlt }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all hover:border-[#0d59f2]/50 hover:shadow-2xl hover:shadow-[#0d59f2]/10">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt || title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="bg-[#0d59f2]/20 dark:bg-[#0d59f2]/5 p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{description}</p>
        <Button href={url} variant="link" icon="arrow_forward">
          View Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;