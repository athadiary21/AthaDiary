import React from 'react';

// Helper components for icons
const Icon = ({ path, className = "w-6 h-6" }: { path: string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

const CameraIcon = () => <Icon path="M9.4 11.9l-2.7-2.7l-.8.8l3.5 3.5l8-8l-.8-.8l-7.2 7.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8z" />;
const LightbulbIcon = () => <Icon path="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7zM9 21a1 1 0 001 1h4a1 1 0 001-1v-1H9v1z" />;
const HistoryIcon = () => <Icon path="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6a6 6 0 116-6v4l-4 2v2l6-3V3z" />;
const ScienceIcon = () => <Icon path="M12 2A10 10 0 002 12h2a8 8 0 1115.3 4.3l1.8 1.8A10 10 0 0012 2zm-2 5a2 2 0 100 4 2 2 0 000-4zm4 6a2 2 0 100 4 2 2 0 000-4zm-4 4a2 2 0 100 4 2 2 0 000-4z" />;
const BookIcon = () => <Icon path="M4 6H2v14c0 1.1.9 2 2 2h14v-2-H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />;
const SunIcon = () => <Icon path="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-1.79 11.01l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5.5C9.53 5 7 7.53 7 10.5S9.53 16 12.5 16s5.5-2.53 5.5-5.5S15.47 5 12.5 5zm0 9C10.61 14 9 12.39 9 10.5S10.61 7 12.5 7s3.5 1.61 3.5 3.5-1.61 3.5-3.5 3.5zM1 10.5h2v2H1v-2z" />;
const PlaceIcon = () => <Icon path="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />;
const EyeIcon = () => <Icon path="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />;
const BrushIcon = () => <Icon path="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37c-.39-.39-1.02-.39-1.41 0L11 12.01 9.99 11l.01-.01c.39-.39.39-1.02 0-1.41l-1.41-1.42c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.54 3.54 7.07-7.07-1.41-1.42z" />;
const LanguageIcon = () => <Icon path="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />;
const FilterIcon = () => <Icon path="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />;
const MemoryIcon = () => <Icon path="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 2-2 2 .9 2 2-.89 2-2 2zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />;
const HistoryEduIcon = () => <Icon path="M12 3L1 9l4 2.18v6.32L1 12.82V17l11 6 11-6v-4.18L18 12.5v-5.5L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />;

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-brand-gold font-semibold">{children}</span>
);

const KeyPoint: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <div className="flex items-start space-x-4 mb-5">
    <div className="flex-shrink-0 text-brand-gold mt-1">{icon}</div>
    <p className="text-gray-300 text-lg">{children}</p>
  </div>
);

const TimelineItem: React.FC<{ year: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ year, title, icon, children }) => (
  <div className="flex flex-col md:flex-row items-start mb-8">
    <div className="flex-shrink-0 w-full md:w-32 text-left md:text-right md:pr-6 mb-2 md:mb-0">
      <p className="text-2xl font-bold text-gray-400">{year}</p>
    </div>
    <div className="w-px bg-gray-700 h-auto self-stretch mx-4 hidden md:block"></div>
    <div className="flex-grow">
      <h3 className="flex items-center text-xl font-semibold text-brand-light mb-2">
        <span className="mr-3 text-brand-gold">{icon}</span>
        {title}
      </h3>
      <p className="text-gray-300 text-lg">{children}</p>
    </div>
  </div>
);

const Section: React.FC<{ title?: string; children: React.ReactNode, id: string, isFirst?: boolean }> = ({ title, children, id, isFirst = false }) => (
  <section id={id} className={`w-full min-h-screen flex items-center py-20 md:py-28 px-6 ${isFirst ? '' : 'border-t border-gray-800'}`}>
    <div className="container mx-auto max-w-7xl">
      {title && (
        <header className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-brand-light">{title}</h2>
          <div className="w-24 h-1 bg-brand-gold mt-4 mx-auto md:mx-0"></div>
        </header>
      )}
      {children}
    </div>
  </section>
);


const CameraObscuraArticle: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light font-poppins">
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center" 
        style={{ backgroundImage: `url('https://sfile.chatglm.cn/images-ppt/3bd949800746.jpeg')` }}
      >
        <div className="absolute inset-0 bg-brand-dark/70"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-4">Awal Mula Kamera Obscura</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto my-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Sejarah dan Evolusi Teknologi Fotografi dari Konsep Ruang Gelap Hingga Kamera Modern
          </p>
        </div>
      </section>

      <Section id="definisi" title="Definisi dan Konsep Dasar">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-300 mb-8">
              <Highlight>Kamera obscura</Highlight> secara harfiah berarti <Highlight>"ruang gelap"</Highlight> dalam bahasa Latin.
            </p>
            <KeyPoint icon={<CameraIcon />}><Highlight>Perangkat optik sederhana</Highlight> berupa ruangan gelap atau kotak dengan lubang kecil (pinhole).</KeyPoint>
            <KeyPoint icon={<LightbulbIcon />}>Cahaya masuk melalui lubang, membentuk <Highlight>bayangan terbalik</Highlight> dari objek di luar pada dinding di seberangnya.</KeyPoint>
            <KeyPoint icon={<HistoryIcon />}>Telah digunakan oleh para pelukis dan ilmuwan <Highlight>sejak zaman kuno</Highlight> sebagai alat bantu menggambar.</KeyPoint>
          </div>
          <div className="flex justify-center">
            <img src="https://sfile.chatglm.cn/images-ppt/3bd949800746.jpeg" alt="Ilustrasi prinsip kerja kamera obscura" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
        </div>
      </Section>

      <Section id="sejarah" title="Sejarah Awal Kamera Obscura">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <TimelineItem year="400 SM" title="Mo-tzu (Mozi)" icon={<BookIcon />}>
              Filsuf Tiongkok ini memberikan <Highlight>catatan tertulis pertama</Highlight> yang diketahui tentang fenomena kamera obscura.
            </TimelineItem>
            <TimelineItem year="350 SM" title="Aristoteles" icon={<SunIcon />}>
              Filsuf Yunani ini mengamati bagaimana <Highlight>cahaya matahari</Highlight> yang melewati celah kecil dapat memproyeksikan gambar gerhana.
            </TimelineItem>
            <TimelineItem year="1000 M" title="Alhazen (Ibn al-Haytham)" icon={<ScienceIcon />}>
              Ilmuwan Muslim ini memberikan <Highlight>analisis ilmiah komprehensif pertama</Highlight> tentang kamera obscura dalam bukunya, "Book of Optics".
            </TimelineItem>
          </div>
           <div className="flex justify-center">
            <img src="https://sfile.chatglm.cn/images-ppt/a6494403113c.jpg" alt="Ilustrasi sejarah kamera obscura" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
        </div>
      </Section>

      <Section id="alhazen" title="Kontribusi Ibnu al-Haytham">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="flex justify-center md:order-2">
            <img src="https://sfile.chatglm.cn/images-ppt/78d9baeb1aad.jpeg" alt="Potret Ibnu al-Haytham" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
          <div className="md:order-1">
            <KeyPoint icon={<PlaceIcon />}>Dianggap sebagai <Highlight>"Bapak Optik Modern"</Highlight>, tidak hanya mengamati tetapi juga bereksperimen dengan kamera obscura.</KeyPoint>
            <KeyPoint icon={<LightbulbIcon />}>Menemukannya secara <Highlight>tidak sengaja</Highlight> saat dipenjara di sebuah ruangan gelap dan melihat cahaya masuk melalui celah kecil.</KeyPoint>
            <KeyPoint icon={<BookIcon />}>Menulis buku monumental <Highlight>"Kitab al-Manazir" (Book of Optics)</Highlight>, yang menjadi dasar ilmu optik selama berabad-abad.</KeyPoint>
            <KeyPoint icon={<EyeIcon />}>Dialah yang pertama kali secara ilmiah menjelaskan bahwa <Highlight>cahaya bergerak dalam garis lurus</Highlight> dan mata menerima cahaya, bukan memancarkannya.</KeyPoint>
          </div>
        </div>
      </Section>

      <Section id="perkembangan" title="Perkembangan Lanjutan">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <TimelineItem year="~1500" title="Leonardo da Vinci" icon={<BrushIcon />}>
              Memberikan deskripsi jelas dan menggunakannya untuk memahami cara kerja <Highlight>mata manusia</Highlight>.
            </TimelineItem>
            <TimelineItem year="~1550" title="Giambattista della Porta" icon={<EyeIcon />}>
              Menambahkan <Highlight>lensa</Highlight> pada lubang untuk menghasilkan gambar yang lebih tajam dan cerah.
            </TimelineItem>
            <TimelineItem year="~1604" title="Johannes Kepler" icon={<LanguageIcon />}>
              Orang pertama yang menggunakan istilah <Highlight>"kamera obscura"</Highlight> dan mengembangkan versi portabel untuk pengamatan astronomi.
            </TimelineItem>
          </div>
           <div className="flex justify-center">
            <img src="https://sfile.chatglm.cn/images-ppt/944ba80f43fb.jpg" alt="Ilustrasi kamera obscura portabel" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
        </div>
      </Section>

      <Section id="evolusi" title="Evolusi Menuju Kamera Modern">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-2">
            <img src="https://sfile.chatglm.cn/images-ppt/ba803b2fa9e8.png" alt="Evolusi kamera" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
          <div className="md:order-1">
            <TimelineItem year="1826" title="Joseph Nicéphore Niépce" icon={<CameraIcon />}>
              Berhasil menciptakan <Highlight>gambar permanen pertama</Highlight> menggunakan kamera obscura dan plat yang dilapisi bahan peka cahaya.
            </TimelineItem>
            <TimelineItem year="1839" title="Louis Daguerre" icon={<FilterIcon />}>
              Mengembangkan proses <Highlight>daguerreotype</Highlight>, yang secara signifikan mengurangi waktu eksposur.
            </TimelineItem>
            <TimelineItem year="1888" title="George Eastman" icon={<CameraIcon />}>
              Memperkenalkan <Highlight>kamera Kodak</Highlight> dengan roll film, membuat fotografi dapat diakses oleh publik.
            </TimelineItem>
             <TimelineItem year="1990-an" title="Era Digital" icon={<MemoryIcon />}>
              Kamera dengan sensor digital (CCD/CMOS) menggantikan film, merevolusi cara kita mengambil, menyimpan, dan berbagi foto.
            </TimelineItem>
          </div>
        </div>
      </section>

      <Section id="kesimpulan" title="Kesimpulan">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <KeyPoint icon={<HistoryEduIcon />}>Kamera obscura adalah <Highlight>fondasi</Highlight> dari semua teknologi fotografi dan videografi yang kita nikmati hari ini.</KeyPoint>
            <KeyPoint icon={<ScienceIcon />}>Kontribusi ilmuwan seperti Ibnu al-Haytham sangat krusial dalam mengubah fenomena alam ini menjadi ilmu pengetahuan yang dapat dipelajari.</KeyPoint>
            <div className="mt-8 animated-border-box p-6 italic">
              <p className="text-gray-300">"Dari konsep kamar gelap hingga kamera digital, perjalanan kamera adalah cerminan inovasi teknologi manusia yang tak pernah berhenti."</p>
              <p className="text-right text-gray-500 mt-2">— Sejarah Fotografi</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://sfile.chatglm.cn/images-ppt/1fd472ca1d8f.png" alt="Perbandingan kamera" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CameraObscuraArticle;