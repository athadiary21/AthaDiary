import React from 'react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);
const GmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const Contact: React.FC = () => {
    const contacts = [
        { name: 'Instagram', value: '@athadiary21', url: 'https://www.instagram.com/athadiary21', Icon: InstagramIcon },
        { name: 'Facebook', value: 'AthaDiary21', url: 'https://www.facebook.com/AthaDiary21', Icon: FacebookIcon },
        { name: 'WhatsApp', value: '+62 822-4159-0417', url: 'https://wa.me/6282241590417', Icon: WhatsAppIcon },
        { name: 'Gmail', value: 'athadiary21@gmail.com', url: 'mailto:athadiary21@gmail.com', Icon: GmailIcon },
    ];
    
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4">Hubungi Saya</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Punya proyek keren, butuh fotografer, atau cuma mau ngobrol? Jangan ragu buat kontak aku!</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((contact) => (
                <a 
                    key={contact.name} 
                    href={contact.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="animated-border-box p-6 flex items-center space-x-4 group hover:scale-105 transition-all duration-300"
                >
                    <contact.Icon className="w-10 h-10 text-brand-gold group-hover:animate-pulse" />
                    <div>
                        <h3 className="text-xl font-semibold text-brand-light">{contact.name}</h3>
                        <p className="text-gray-400 group-hover:text-brand-gold transition-colors">{contact.value}</p>
                    </div>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;