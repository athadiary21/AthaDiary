import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
              opacity: 0;
            }
        `}</style>
        <div className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold font-montserrat mb-4">Semua Proyek</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Jelajahi semua karya visual yang telah saya ciptakan.</p>
                    <Link to="/" className="text-brand-gold hover:underline mt-6 inline-block transition-colors duration-300">
                        &larr; Kembali ke Beranda
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onClick={() => handleOpenModal(project)}
                            style={{ animationDelay: `${index * 50}ms` }}
                        />
                    ))}
                </div>
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
        </>
    );
};

export default ProjectsPage;
