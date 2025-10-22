import React from 'react';

const SkillIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 mb-4 text-brand-gold transition-transform duration-300 group-hover:scale-110">
    {children}
  </div>
);

const SkillCard: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="group flex flex-col items-center p-6 animated-border-box transition-transform duration-300 transform hover:-translate-y-2 text-center">
    {icon}
    <h4 className="text-lg font-semibold text-brand-light mt-4">{name}</h4>
  </div>
);

// SVGs for skills
const LightroomIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" /><path d="M12 8v8" /><path d="M9 16h6" /></svg></SkillIcon>;
const PhotoshopIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 10.18L12 22 3.58 10.18a9 9 0 1 1 16.84 0z" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg></SkillIcon>;
const CompositionIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" /><path d="M3 9h18" /><path d="M3 15h18" /></svg></SkillIcon>;
const StreetIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16" /><path d="M6 18V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M12 6V2" /></svg></SkillIcon>;
const HtmlCssIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11l-5 5 5 5" /><path d="M17 11l5 5-5 5" /><path d="M14 4l-4 16" /></svg></SkillIcon>;
const JsIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18a4 4 0 0 0-8 0" /><path d="M12 2v14" /></svg></SkillIcon>;
const TsIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M5 12h14" /><path d="M17 5H7" /></svg></SkillIcon>;
const ReactIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-8.49a6 6 0 0 0 0 8.49m11.31-4.24h-1.06a4.5 4.5 0 0 0-7.98 0H4.76" /></svg></SkillIcon>;
const TailwindIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19l-5-5-5 5" /><path d="M17.5 12l-5-5-5 5" /></svg></SkillIcon>;
const NodeIcon = () => <SkillIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg></SkillIcon>;

const Skills: React.FC = () => {
  const photoSkills = [
    { name: 'Adobe Lightroom', icon: <LightroomIcon /> },
    { name: 'Adobe Photoshop', icon: <PhotoshopIcon /> },
    { name: 'Komposisi Sinematik', icon: <CompositionIcon /> },
    { name: 'Street Photography', icon: <StreetIcon /> }
  ];

  const webSkills = [
    { name: 'HTML5 & CSS3', icon: <HtmlCssIcon /> },
    { name: 'JavaScript (ES6+)', icon: <JsIcon /> },
    { name: 'TypeScript', icon: <TsIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> }
  ];
  
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-3">Keahlian Saya</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6">
            Kombinasi keterampilan teknis dan kreatif untuk mewujudkan ide menjadi nyata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Photography Skills */}
          <div className="animated-border-box p-8">
            <h3 className="text-2xl font-semibold text-brand-gold mb-8 text-center">Fotografi & Desain Visual</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6">
              {photoSkills.map((skill) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Web Development Skills */}
          <div className="animated-border-box p-8">
            <h3 className="text-2xl font-semibold text-brand-gold mb-8 text-center">Pengembangan Web</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6">
              {webSkills.map((skill) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;