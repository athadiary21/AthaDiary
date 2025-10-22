import React, { useEffect, useRef } from 'react';
import type { LearningModule } from '../types';

interface LearningModalProps {
  module: LearningModule;
  onClose: () => void;
}

const LearningModal: React.FC<LearningModalProps> = ({ module, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Close modal on backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="learning-modal-title"
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl h-[90vh] animated-border-box shadow-2xl flex flex-col animate-scale-in"
      >
        <header className="flex-shrink-0 p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 id="learning-modal-title" className="text-xl font-bold text-brand-gold font-montserrat truncate pr-4">
            {module.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </header>
        <div className="flex-grow overflow-y-auto">
          {module.content}
        </div>
      </div>
    </div>
  );
};

export default LearningModal;