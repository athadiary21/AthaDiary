import React from 'react';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; onClick: () => void; style?: React.CSSProperties }> = ({ project, onClick, style }) => {
  const getStyleColor = (style: string) => {
    switch(style) {
      case 'Street': return 'bg-sky-500/80';
      case 'Portrait': return 'bg-emerald-500/80';
      case 'Landscape': return 'bg-amber-500/80';
      case 'Conceptual': return 'bg-purple-500/80';
      default: return 'bg-gray-500/80';
    }
  }

  return (
    <div 
      onClick={onClick} 
      className="group relative overflow-hidden shadow-lg animated-border-box cursor-pointer animate-fade-in-up"
      style={style}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white w-full">
        <span className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full text-white ${getStyleColor(project.style)}`}>
          {project.style}
        </span>
        <h3 className="text-xl font-bold font-montserrat">{project.title}</h3>
        <p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;