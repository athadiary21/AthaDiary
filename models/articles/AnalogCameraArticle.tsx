import React from 'react';

// --- SVG Icon Components ---
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-dark/50 border border-gray-800 flex items-center justify-center mr-4">
        {children}
    </div>
);

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HistoryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ScienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-2.387-.477a2 2 0 01-.547-1.806l.477-2.387a6 6 0 013.86-.517l.318.158a6 6 0 003.86-.517l2.387-.477a2 2 0 011.806.547a2 2 0 01.547 1.806l-.477 2.387a6 6 0 01-3.86.517l-.318-.158a6 6 0 00-3.86.517l-2.387.477a2 2 0 01-1.806-.547a2 2 0 01-.547-1.806l.477-2.387a6 6 0 00.517-3.86l.158-.318a6 6 0 00.517-3.86l2.387-.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86z" />
    </svg>
);

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-brand-gold">{children}</span>
);

const Section: React.FC<{ title: string; children: React.ReactNode, id: string }> = ({ title, children, id }) => (
    <section id={id} className="py-16 md:py-20 px-6 last:pb-20">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-light mb-12 font-playfair">{title}</h2>
            {children}
        </div>
    </section>
);


const AnalogCameraArticle: React.FC = () => {
    return (
        <div className="bg-brand-dark text-slate-300 font-poppins">
            {/* The problematic hero section has been removed to fix the modal close button issue. */}
            {/* The content now starts directly with the first section. */}
            <div className="pt-16"> {/* Add padding to the top to avoid content touching the modal header */}
                {/* --- Awal Mula Section --- */}
                <Section id="definisi" title="Awal Mula Fotografi">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <IconWrapper><CameraIcon /></IconWrapper>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Camera Obscura (400 SM - 1800an)</h3>
                                    <p>Konsep kamera pertama yang memproyeksikan gambar melalui lubang kecil, digunakan sebagai alat bantu menggambar.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <IconWrapper><HistoryIcon /></IconWrapper>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">1826 - Foto Permanen Pertama</h3>
                                    <p><Highlight>Joseph Nicephore Niepce</Highlight> menciptakan foto permanen pertama dengan waktu eksposur 8 jam menggunakan plat timah berlapis bitumen.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <IconWrapper><ScienceIcon /></IconWrapper>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">1839 - Daguerreotype</h3>
                                    <p>Diciptakan oleh <Highlight>Louis Daguerre</Highlight>, menjadi proses komersial fotografi pertama menggunakan plat tembaga berlapis perak.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img src="https://sfile.chatglm.cn/images-ppt/522199f1f655.jpg" alt="Evolusi kamera awal" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </Section>
                
                {/* --- Revolusi Film Gulung Section --- */}
                <Section id="revolusi" title="Revolusi Film Gulung">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="rounded-lg overflow-hidden shadow-2xl md:order-last">
                            <img src="https://sfile.chatglm.cn/images-ppt/b1a0514578dc.jpg" alt="Kamera Kodak awal dan Brownie" className="w-full h-full object-cover"/>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <IconWrapper><CameraIcon /></IconWrapper>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">1888 - Kamera Kodak Pertama</h3>
                                    <p>Diciptakan oleh <Highlight>George Eastman</Highlight>, ini adalah kamera pertama dengan film gulung seluloid dan slogan "You press the button, we do the rest".</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <IconWrapper><CameraIcon /></IconWrapper>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">1900 - Kodak Brownie</h3>
                                    <p>Dengan harga terjangkau ($1), fotografi menjadi aksesibel untuk keluarga kelas menengah. Desainnya sederhana dan mudah digunakan.</p>
                                </div>
                            </div>
                            <div className="mt-8 bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-lg">
                                <p className="font-semibold text-brand-gold/90">Film gulung merevolusi fotografi dengan memungkinkan banyak eksposur dan konsep "point-and-shoot".</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- Era 35mm Section --- */}
                <Section id="era35mm" title="Era 35mm">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p><Highlight>1934:</Highlight> Film 135 Kodak menjadi standar industri selama 80 tahun, digunakan di semua merek kamera.</p>
                            <p><Highlight>1930an:</Highlight> Inovasi dari Leica, seperti Leica One dengan lensa yang dapat diganti dan viewfinder modern.</p>
                            <p><Highlight>1950an:</Highlight> Munculnya kamera SLR seperti Nikon F yang mendorong jurnalisme foto.</p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img src="https://sfile.chatglm.cn/images-ppt/254a813cfda6.jpg" alt="Kamera 35mm klasik" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </Section>
                
                {/* --- Fotografi Instan & Zaman Keemasan Section --- */}
                <Section id="instan" title="Fotografi Instan & Zaman Keemasan">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-2xl md:order-last">
                            <img src="https://sfile.chatglm.cn/images-ppt/a11decc713e7.png" alt="Kamera Polaroid dan kamera klasik dari zaman keemasan" className="w-full h-full object-cover"/>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Fotografi Instan</h3>
                                <p>Pada tahun 1948, <Highlight>Edwin Land</Highlight> menciptakan Polaroid. Puncaknya pada tahun 1970-an dengan SX-70, foto instan muncul dalam hitungan detik.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Zaman Keemasan (1950-1990)</h3>
                                <p>Fotografi analog mencapai puncaknya dengan film warna seperti Ektachrome, autofokus, dan kompetisi ketat antara Canon dan Nikon.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- Transisi Digital & Kebangkitan Analog Section --- */}
                <Section id="digital" title="Transisi Digital & Kebangkitan Analog">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Era Digital (2000-an)</h3>
                                <p>Pada awal 2000-an, kamera digital menggantikan film, dan pada 2007, smartphone mengambil alih pasar, menyebabkan penjualan film anjlok.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Kebangkitan Analog (2010-Sekarang)</h3>
                                <p>Gen Z dan para kreator kembali menggunakan film untuk estetika yang unik. Merek seperti <Highlight>Kodak</Highlight> dan Polaroid bangkit kembali, didukung oleh komunitas yang berkembang.</p>
                            </div>
                            <div className="mt-8 bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-lg">
                                <p className="font-semibold text-brand-gold/90">Film menawarkan keunikan yang tidak bisa ditiru digital: tekstur grain, ketidakpastian, dan proses yang lebih disengaja.</p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img src="https://sfile.chatglm.cn/images-ppt/d7b4381354de.jpeg" alt="Fotografer muda dengan kamera analog" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default AnalogCameraArticle;