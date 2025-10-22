import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/projects', label: 'Gallery' },
    { href: '/#tutorials', label: 'Tutorial' },
    { href: '/#contact', label: 'Contact' },
  ];

  // Navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      // If the mobile menu is open, don't hide the header.
      if (isOpen) {
        setVisible(true);
        return;
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]); // Added isOpen dependency

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  // Smooth scroll to hash links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // Offset for the sticky header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 0);
    } else if (location.pathname === '/') {
        // Scroll to top if navigating to homepage without a hash
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <header className={`bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 py-4 shadow-md shadow-black/20 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
           <img 
            src="https://res.cloudinary.com/dfjvcvbsn/image/upload/v1756305999/Desain_tanpa_judul_hncthi.png" 
            alt="Atha Rasyid Logo" 
            className="h-10 w-auto md:h-12 transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-brand-light hover:text-brand-gold transition-colors duration-300 font-medium cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 px-6 pb-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-light hover:text-brand-gold transition-colors duration-300 font-medium text-center py-2 rounded-md bg-brand-dark/50 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;