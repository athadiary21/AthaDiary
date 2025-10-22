import React, { useEffect, useRef } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <style>{`
        /* Re-declaring animations here to be self-contained */
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl animated-border-box shadow-2xl flex flex-col md:flex-row animate-scale-in max-h-[90vh]"
      >
        <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-brand-dark text-gray-300 hover:bg-brand-gold hover:text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold"
            aria-label="Close modal"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>

        <img src={project.imageUrl.replace('400/300', '800/600')} alt={project.title} className="w-full md:w-1/2 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
        
        <div className="p-6 flex flex-col flex-grow">
          <h2 id="project-modal-title" className="text-2xl font-bold text-brand-gold font-montserrat mb-2">
            {project.title}
          </h2>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full text-white self-start ${getStyleColor(project.style)} mb-4`}>
            {project.style} Photography
          </span>
          <p className="text-gray-300 leading-relaxed overflow-y-auto">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;