import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} Atha Rasyid. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;