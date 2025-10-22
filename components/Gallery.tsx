import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.style)))];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.style === activeFilter);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
      <section id="gallery" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-4">Galeri Proyek</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Kumpulan cerita visual yang berhasil saya abadikan.</p>
          </div>

          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark ${
                  activeFilter === filter
                    ? 'bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/30 ring-brand-gold'
                    : 'animated-border-box text-brand-light ring-transparent'
                }`}
                style={{'--border-radius': '9999px'} as React.CSSProperties}
              >
                {filter}
              </button>
            ))}
          </div>

          <div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.slice(0, 8).map((project, index) => ( // Show a subset of projects
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => handleOpenModal(project)}
                style={{ animationDelay: `${index * 75}ms` }}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="animated-border-box inline-block text-white font-bold py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ '--border-radius': '9999px' } as React.CSSProperties}
            >
              Lihat Semua Proyek
            </Link>
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Gallery;