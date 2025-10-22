import React, { useState } from 'react';
import { LEARNING_MODULES } from '../learning';
import type { LearningModule } from '../types';
import LearningModal from './LearningModal';

const LearningCard: React.FC<{ module: LearningModule; onClick: () => void }> = ({ module, onClick }) => {
  const isComingSoon = module.status === 'Coming Soon';
  const isClickable = !isComingSoon && module.content;

  const categoryColorMap = {
    'Teknik': 'bg-blue-500/20 text-blue-300',
    'Komposisi': 'bg-emerald-500/20 text-emerald-300',
    'Editing': 'bg-purple-500/20 text-purple-300',
    'Inspirasi': 'bg-amber-500/20 text-amber-300',
  };

  return (
    <div 
      onClick={isClickable ? onClick : undefined}
      className={`
        animated-border-box p-6 flex flex-col
        transition-transform duration-300
        ${isClickable ? 'cursor-pointer hover:-translate-y-2' : 'opacity-60 cursor-not-allowed'}
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColorMap[module.category]}`}>
          {module.category}
        </span>
        {isComingSoon ? (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-400">
            Segera Hadir
          </span>
        ) : (
           <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-300">
            Published
           </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-brand-light mb-2 flex-grow">{module.title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{module.summary}</p>
    </div>
  );
};

const Tutorials: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);

  const handleOpenModal = (module: LearningModule) => {
    if (module.content && module.status === 'Published') {
      setSelectedModule(module);
    }
  };

  const handleCloseModal = () => {
    setSelectedModule(null);
  };

  return (
    <>
      <section id="tutorials" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-4">Tutorial & Blog Fotografi</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Tempat saya berbagi tips, trik, dan cerita di balik layar seputar dunia fotografi dan web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {LEARNING_MODULES.map((module) => (
              <LearningCard 
                key={module.id} 
                module={module}
                onClick={() => handleOpenModal(module)} 
              />
            ))}
          </div>
        </div>
      </section>
      {selectedModule && (
        <LearningModal module={selectedModule} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Tutorials;