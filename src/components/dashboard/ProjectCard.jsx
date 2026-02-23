import React from 'react';
import ButtonVariant from '../miscelenous/ButtonVariant';

const ProjectCard = ({ title, description, url, imageUrl }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[#1a1a1a] border border-white/5 relative">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={imageUrl} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-[#0d59f2]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <ButtonVariant href={url} variant="outline" className="bg-white text-[#0d59f2] px-4 py-2 rounded-lg font-bold">View Project</ButtonVariant>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
};

export default ProjectCard;