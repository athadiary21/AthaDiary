import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="home" className="group relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_IMAGES.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center md:bg-top transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${url}')` }}
            aria-hidden={index !== currentIndex}
          />
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat mb-4 tracking-tight drop-shadow-lg">
          Atha Rasyid
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 drop-shadow-md">
          Photographer & Web Developer
        </p>
        <h2 className="text-2xl md:text-3xl font-light text-brand-gold italic mb-10">
          Membingkai Momen, Merangkai Kode.
        </h2>
        <Link 
          to="/projects"
          className="animated-border-box inline-block text-white font-bold py-3 px-8 text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          style={{ '--border-radius': '9999px' } as React.CSSProperties}
        >
          Lihat Karyaku
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-brand-gold ring-2 ring-brand-gold/50' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;