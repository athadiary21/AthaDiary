import React from 'react';

const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
);

const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);

const CreativeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15h12v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2z"></path><path d="M9 9a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3S6 2 6 4v2a3 3 0 0 0 3 3z"></path><path d="M12 15l1 6"></path><path d="M12 21.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path><path d="M5 18h14"></path></svg>
);


const SkillCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-brand-dark/50 p-3 rounded-full">
            <div className="text-brand-gold w-6 h-6">{icon}</div>
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-1 text-brand-light">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-montserrat mb-3">Tentang Saya</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6">Perpaduan antara mata yang jeli dan logika yang presisi.</p>
                </div>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="md:col-span-2">
                        <div className="relative animated-border-box rounded-lg p-1">
                             <img 
                                src="https://res.cloudinary.com/dfjvcvbsn/image/upload/v1754012379/514418398_1243307167528963_507092194719317945_n_kndack.jpg" 
                                alt="Atha Rasyid" 
                                className="relative z-10 w-full aspect-[4/5] object-cover rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-3">
                        <h3 className="text-3xl font-bold text-brand-light mb-4">Atha Rasyid Risqi</h3>
                        <p className="text-lg font-semibold text-brand-gold mb-6">Fotografer & Web Developer dari Balikpapan</p>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Halo! Gue Atha. Awalnya, kamera adalah caraku bercerita—menangkap emosi, momen, dan keindahan yang tersembunyi. Tapi, di sisi lain, otak gue selalu penasaran dengan bagaimana sesuatu bekerja, yang akhirnya ngebawa gue ke dunia koding. Fotografi ngajarin gue soal komposisi, cerita, dan estetika. Web development ngasih gue kekuatan buat ngebangun 'ruang' digital untuk cerita itu sendiri. Dua dunia ini mungkin keliatan beda, tapi buat gue, keduanya adalah tentang menciptakan sesuatu yang indah dan fungsional.
                        </p>
                        <p className="text-gray-400 italic mb-8">
                            Lulusan Pondok Multimedia Munzalan Indonesia.
                        </p>
                        
                        <div className="border-t border-gray-800 pt-8 space-y-8">
                            <SkillCard 
                                icon={<CameraIcon />} 
                                title="Fotografi" 
                                description="Spesialisasi dalam street, portrait, dan landscape dengan pendekatan sinematik."
                            />
                            <SkillCard 
                                icon={<EditIcon />} 
                                title="Editing & Retouching" 
                                description="Mengubah foto mentah menjadi karya seni visual menggunakan Adobe Lightroom & Photoshop."
                            />
                            <SkillCard 
                                icon={<CreativeIcon />} 
                                title="Konten Kreatif" 
                                description="Mengembangkan konsep visual dari ide hingga eksekusi untuk brand dan proyek personal."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;