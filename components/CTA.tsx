import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-brand-dark/50 rounded-lg p-10 md:p-16 shadow-2xl border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-brand-gold mb-4">
            Punya Ide Proyek?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Mari kita wujudkan bersama. Baik itu sesi foto yang tak terlupakan atau website yang fungsional dan menarik, saya siap membantu.
          </p>
          <a 
            href="/#contact"
            className="animated-border-box inline-block text-white font-bold py-3 px-8 text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
            style={{ '--border-radius': '9999px' } as React.CSSProperties}
          >
            Hubungi Saya Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
