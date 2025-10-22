import React from 'react';

// Helper components for icons
const Icon = ({ path, className = "w-6 h-6" }: { path: string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

const LightbulbIcon = () => <Icon path="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7zM9 21a1 1 0 001 1h4a1 1 0 001-1v-1H9v1z" />;
const PersonIcon = () => <Icon path="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />;
const HistoryIcon = () => <Icon path="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6a6 6 0 116-6v4l-4 2v2l6-3V3z" />;
const CheckCircleIcon = () => <Icon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 12.17l7.59-7.59L19 6l-9 9z" />;
const CancelIcon = () => <Icon path="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />;
const CameraIcon = () => <Icon path="M9.4 11.9l-2.7-2.7l-.8.8l3.5 3.5l8-8l-.8-.8l-7.2 7.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8z" />;
const FilterIcon = () => <Icon path="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />;
const PhotoIcon = () => <Icon path="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />;
const CameraAltIcon = () => <Icon path="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2-8C8.83 4 8 4.83 8 6H7c0-1.65 1.35-3 3-3v1zM12 2C9.24 2 7 4.24 7 7h1c0-1.1.9-2 2-2s2 .9 2 2v1c1.65 0 3 1.35 3 3h1c0-2.76-2.24-5-5-5zm5 5h-1c0 1.1.9 2 2 2v-1c-1.65 0-3-1.35-3-3zM20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />;
const PublicIcon = () => <Icon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.48-1.14 4.7-2.9 6.34z" />;

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-brand-gold font-semibold">{children}</span>
);

const Section: React.FC<{ title: string; children: React.ReactNode, id: string, isFirst?: boolean }> = ({ title, children, id, isFirst = false }) => (
  <section id={id} className={`w-full min-h-screen flex items-center py-20 md:py-28 px-6 ${isFirst ? '' : 'border-t border-gray-800'}`}>
    <div className="container mx-auto max-w-7xl">
        <header className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-brand-light">{title}</h2>
        </header>
      {children}
    </div>
  </section>
);

const InfoBox: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode, tags?: string[] }> = ({ title, icon, children, tags }) => (
    <div className="animated-border-box p-6 flex-grow flex flex-col">
        <div className="flex items-center text-xl font-semibold text-brand-light mb-4">
            <span className="mr-3 text-brand-gold">{icon}</span>
            <h3>{title}</h3>
        </div>
        <div className="text-gray-300 space-y-2 text-base flex-grow">
            {children}
        </div>
        {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
);


const PhotographyPioneersArticle: React.FC = () => {
    return (
        <div className="bg-brand-dark text-brand-light font-poppins">
            <section 
                className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-fixed" 
                style={{ backgroundImage: `url('https://sfile.chatglm.cn/images-ppt/5e8ef340c98f.jpg')` }}
            >
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="relative z-10 p-6 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Penemuan Fotografi</h1>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-300">Niépce, Daguerre, dan Talbot</h2>
                    <p className="text-lg md:text-xl text-gray-400 mt-4">Tiga Tokoh Pionir dalam Sejarah Fotografi</p>
                    <p className="text-base text-gray-500 mt-8 tracking-widest">1826-1839</p>
                </div>
            </section>

            <Section id="niepce" title="Joseph Nicéphore Niépce: Perintis Fotografi">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-8">
                        <figure className="animated-border-box overflow-hidden shadow-lg">
                            <img src="https://sfile.chatglm.cn/images-ppt/026c58fe81a1.jpg" alt="View from the Window at Le Gras" className="w-full object-cover rounded-t-lg" />
                            <figcaption className="text-sm text-gray-400 p-3 text-center italic">"View from the Window at Le Gras" (1826/1827) - Foto pertama yang masih ada</figcaption>
                        </figure>
                        <InfoBox title="Kontribusi Utama" icon={<LightbulbIcon />}>
                           <p>• Mengembangkan <Highlight>heliografi</Highlight> - teknik fotografi pertama</p>
                           <p>• Menciptakan foto permanen pertama menggunakan <Highlight>bitumen of Judea</Highlight></p>
                           <p>• Proses eksposur membutuhkan waktu <Highlight>8 jam atau lebih</Highlight></p>
                        </InfoBox>
                    </div>
                     <div className="flex flex-col gap-8">
                        <InfoBox title="Biografi" icon={<PersonIcon />}>
                           <p>• Lahir: <Highlight>7 Maret 1765</Highlight> di Chalon-sur-Saône, Prancis</p>
                           <p>• Meninggal: <Highlight>5 Juli 1833</Highlight> di Saint-Loup-de-Varennes</p>
                           <p>• Penemu dan ilmuwan, juga menemukan <Highlight>Pyréolophore</Highlight> (mesin pembakaran internal pertama).</p>
                        </InfoBox>
                        <InfoBox title="Perkembangan Fotografi" icon={<HistoryIcon />} tags={['Fotografi Pertama', 'Heliografi', 'Bitumen of Judea']}>
                            <p>• 1816: Mulai bereksperimen dengan proses citra</p>
                            <p>• 1826/1827: Menciptakan "View from the Window at Le Gras"</p>
                            <p>• 1829: Bermitra dengan Louis Daguerre</p>
                        </InfoBox>
                    </div>
                </div>
            </section>

            <Section id="daguerre" title="Louis Daguerre: Penemu Daguerreotype">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-8">
                        <figure className="animated-border-box overflow-hidden shadow-lg">
                            <img src="https://sfile.chatglm.cn/images-ppt/9d4d09e1c71c.jpg" alt="Louis Daguerre" className="w-full object-cover rounded-t-lg" />
                            <figcaption className="text-sm text-gray-400 p-3 text-center italic">Louis Jacques Mandé Daguerre (1787-1851)</figcaption>
                        </figure>
                        <InfoBox title="Kontribusi Utama" icon={<LightbulbIcon />}>
                           <p>• Mengembangkan proses <Highlight>daguerreotype</Highlight></p>
                           <p>• Mengurangi waktu eksposur dari jam ke <Highlight>beberapa menit</Highlight></p>
                           <p>• Menciptakan gambar dengan detail <Highlight>sangat tajam</Highlight></p>
                           <p>• Mempublikasikan prosesnya pada <Highlight>1839</Highlight></p>
                        </InfoBox>
                    </div>
                     <div className="flex flex-col gap-8">
                        <InfoBox title="Biografi" icon={<PersonIcon />}>
                           <p>• Lahir: <Highlight>18 November 1787</Highlight> di Cormeilles, Prancis</p>
                           <p>• Meninggal: <Highlight>10 Juli 1851</Highlight> di Bry-sur-Marne</p>
                           <p>• Seniman dan kimiawan, awalnya merancang <Highlight>diograma</Highlight>.</p>
                        </InfoBox>
                        <InfoBox title="Perkembangan Fotografi" icon={<HistoryIcon />} tags={['Daguerreotype', 'Pelat Tembaga', 'Gambar Tajam']}>
                            <p>• 1829: Bermitra dengan Niépce</p>
                            <p>• 1833: Melanjutkan penelitian setelah kematian Niépce</p>
                            <p>• 1839: Mempublikasikan daguerreotype</p>
                        </InfoBox>
                    </div>
                </div>
            </section>
            
            <Section id="talbot" title="William Henry Fox Talbot: Penemu Calotype">
                 <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-8">
                        <figure className="animated-border-box overflow-hidden shadow-lg">
                            <img src="https://sfile.chatglm.cn/images-ppt/f45bd40f30bb.jpg" alt="William Henry Fox Talbot" className="w-full object-cover rounded-t-lg" />
                            <figcaption className="text-sm text-gray-400 p-3 text-center italic">William Henry Fox Talbot (1800-1877) dengan kamera awal</figcaption>
                        </figure>
                        <InfoBox title="Kontribusi Utama" icon={<LightbulbIcon />}>
                           <p>• Mengembangkan proses <Highlight>calotype</Highlight> (negatif-positif)</p>
                           <p>• Menemukan <Highlight>salt printing</Highlight> (cetakan garam)</p>
                           <p>• Menciptakan sistem yang menjadi dasar fotografi modern</p>
                        </InfoBox>
                    </div>
                     <div className="flex flex-col gap-8">
                        <InfoBox title="Biografi" icon={<PersonIcon />}>
                           <p>• Lahir: <Highlight>11 Februari 1800</Highlight> di Inggris</p>
                           <p>• Meninggal: <Highlight>17 September 1877</Highlight></p>
                           <p>• Ilmuwan, politikus, ahli botani, dan linguistik Britania Raya.</p>
                        </InfoBox>
                        <InfoBox title="Perkembangan Fotografi" icon={<HistoryIcon />} tags={['Calotype', 'Negatif-Positif', 'Salt Printing']}>
                            <p>• 1835: Menciptakan foto pertama menggunakan kertas sensitif cahaya</p>
                            <p>• 1839: Memperkenalkan proses <Highlight>calotype</Highlight> ke publik</p>
                            <p>• 1844: Menerbitkan "The Pencil of Nature" - buku foto pertama</p>
                        </InfoBox>
                    </div>
                </div>
            </Section>

            <Section id="comparison" title="Perbandingan dan Warisan">
                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {/* Comparison Column */}
                        <div className="animated-border-box p-6 flex flex-col">
                            <div className="flex items-center mb-2">
                                <span className="p-2 bg-brand-gold/20 rounded-full mr-3"><CameraIcon /></span>
                                <h3 className="text-xl font-semibold font-playfair text-brand-light">Heliografi</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-4 ml-11">Joseph Nicéphore Niépce</p>
                            <ul className="space-y-2 text-gray-300 flex-grow">
                                <li className="flex items-start"><CheckCircleIcon /> <span className="ml-2"><Highlight>Proses pertama</Highlight></span></li>
                                <li className="flex items-start"><CancelIcon /> <span className="ml-2">Eksposur <Highlight>berjam-jam</Highlight></span></li>
                                <li className="flex items-start"><CancelIcon /> <span className="ml-2">Hasil <Highlight>kabur</Highlight> & tidak praktis</span></li>
                            </ul>
                        </div>
                        <div className="animated-border-box p-6 flex flex-col">
                            <div className="flex items-center mb-2">
                                <span className="p-2 bg-brand-gold/20 rounded-full mr-3"><FilterIcon /></span>
                                <h3 className="text-xl font-semibold font-playfair text-brand-light">Daguerreotype</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-4 ml-11">Louis Daguerre</p>
                            <ul className="space-y-2 text-gray-300 flex-grow">
                                <li className="flex items-start"><CheckCircleIcon /> <span className="ml-2">Eksposur <Highlight>beberapa menit</Highlight></span></li>
                                <li className="flex items-start"><CheckCircleIcon /> <span className="ml-2">Hasil <Highlight>sangat tajam</Highlight></span></li>
                                <li className="flex items-start"><CancelIcon /> <span className="ml-2"><Highlight>Tidak dapat direproduksi</Highlight></span></li>
                            </ul>
                        </div>
                        <div className="animated-border-box p-6 flex flex-col">
                             <div className="flex items-center mb-2">
                                <span className="p-2 bg-brand-gold/20 rounded-full mr-3"><PhotoIcon /></span>
                                <h3 className="text-xl font-semibold font-playfair text-brand-light">Calotype</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-4 ml-11">W. H. Fox Talbot</p>
                            <ul className="space-y-2 text-gray-300 flex-grow">
                                <li className="flex items-start"><CheckCircleIcon /> <span className="ml-2">Sistem <Highlight>negatif-positif</Highlight></span></li>
                                <li className="flex items-start"><CheckCircleIcon /> <span className="ml-2"><Highlight>Dapat direproduksi</Highlight></span></li>
                                <li className="flex items-start"><CancelIcon /> <span className="ml-2">Hasil <Highlight>kurang tajam</Highlight></span></li>
                            </ul>
                        </div>
                    </div>

                     {/* Legacy Section */}
                    <div className="animated-border-box p-8">
                        <h3 className="text-2xl font-semibold font-playfair text-brand-light mb-6 flex items-center"><HistoryIcon /><span className="ml-3">Warisan dalam Fotografi Modern</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
                           <div>
                                <h4 className="font-semibold text-brand-gold mb-2 flex items-center"><LightbulbIcon /><span className="ml-2">Konsep Dasar</span></h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Ide memperbaiki gambar optik</li>
                                    <li>Penggunaan bahan kimia sensitif cahaya</li>
                                    <li>Eksperimen dengan kamera obscura</li>
                                </ul>
                           </div>
                           <div>
                               <h4 className="font-semibold text-brand-gold mb-2 flex items-center"><CameraAltIcon /><span className="ml-2">Teknologi</span></h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Dasar proses kimia fotografi</li>
                                    <li>Pengembangan bahan sensitif cahaya</li>
                                    <li>Evolusi dari pelat logam ke film</li>
                                </ul>
                           </div>
                           <div>
                                <h4 className="font-semibold text-brand-gold mb-2 flex items-center"><PublicIcon /><span className="ml-2">Dampak Sosial</span></h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Demokratisasi gambar</li>
                                    <li>Dokumentasi sejarah visual</li>
                                    <li>Transformasi seni dan komunikasi</li>
                                </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
};

export default PhotographyPioneersArticle;