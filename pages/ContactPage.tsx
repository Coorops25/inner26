
import React, { useState, useEffect } from 'react';
import { InstagramIcon, WhatsAppIcon } from '../constants';
import { useToast } from '../context/ToastContext';

const ContactPage: React.FC = () => {
  useEffect(() => {
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto - Inner Spirit Studio",
      "description": "Contáctanos para clases de yoga, eventos o consultas en Inner Spirit Studio, Bogotá.",
      "url": "https://innerspirit.co/contacto",
      "mainEntity": {
        "@type": "Organization",
        "name": "Inner Spirit Studio",
        "telephone": "+573212248261",
        "email": "hola@innerspirit.co"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(contactSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const { showToast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    type: 'clase',
    honeypot: '',
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return; // Bot protection
    const typeLabel: Record<string, string> = {
      clase: 'Clases', evento: 'Eventos', producto: 'Tienda', otro: 'Otro',
    };
    const text = encodeURIComponent(
      `Hola Inner Spirit, me llamo ${formState.name} (${formState.email}).\nMotivo: ${typeLabel[formState.type] ?? formState.type}\n\n${formState.message}`
    );
    showToast('Abriendo WhatsApp con tu mensaje...', 'success');
    setTimeout(() => window.open(`https://wa.me/573212248261?text=${text}`, '_blank'), 500);
    setFormState({ name: '', email: '', message: '', type: 'clase', honeypot: '' });
  };
  
  const getInputClass = (fieldName: string) => `
    w-full bg-transparent border-b py-4 text-lg text-stone-800 outline-none transition-all duration-300
    ${focusedField === fieldName ? 'border-accent placeholder-accent/70' : 'border-stone-300 placeholder-stone-400'}
  `;
  
  return (
    <div className="animate-fade-in-up bg-[#F5F0E6] min-h-screen pt-32 pb-20">
        <section id="contacto-page">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Hero Text */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase mb-4 block">Hablemos</span>
                    <h1 className="text-5xl md:text-7xl font-heading text-stone-900 mb-6">Nuestro Umbral</h1>
                    <div className="w-px h-12 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-stone-500 font-light leading-relaxed">
                        Si sientes que este es tu lugar, las puertas están abiertas. Escríbenos o visítanos en el corazón de Candelaria.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
                    
                    {/* Left Column: Map & Info */}
                    <div className="space-y-12">
                        <div className="bg-white p-2 shadow-sm rounded-sm">
                            <div className="aspect-[4/3] w-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.684112199858!2d-76.6500586852419!3d3.426999997514863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a733a7587131%3A0x6b772522b10a2482!2sTrev.%201%20%2317-29%2C%20Candelaria%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sus!4v1684343431631!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="100%" 
                                    style={{border:0}} 
                                    allowFullScreen={true}
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de Inner Spirit en Google Maps"
                                    className="w-full h-full"
                                >
                                </iframe>
                                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10"></div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between gap-8 text-stone-600 font-light">
                             <div>
                                <h4 className="font-heading text-2xl text-stone-800 mb-2">Visítanos</h4>
                                <p>Trav. 1 #17-29</p>
                                <p>Candelaria, Colombia</p>
                             </div>
                             <div>
                                <h4 className="font-heading text-2xl text-stone-800 mb-2">Conecta</h4>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://instagram.com/innerspirit_studio" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram @innerspirit_studio"><InstagramIcon /></a>
                                    <a href="https://wa.me/573212248261" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="WhatsApp +57 321 224 8261"><WhatsAppIcon /></a>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Right Column: Minimalist Form */}
                    <div className="bg-white px-8 py-10 md:px-12 md:py-14 shadow-sm rounded-sm border border-stone-100">
                        <h3 className="text-3xl font-heading text-stone-800 mb-10">Envía un Mensaje</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Honeypot */}
                            <input type="text" name="honeypot" value={formState.honeypot} onChange={handleInputChange} className="hidden" aria-hidden="true" tabIndex={-1} />

                            <div>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formState.name} 
                                    onChange={handleInputChange} 
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Tu Nombre" 
                                    className={getInputClass('name')}
                                    required 
                                />
                            </div>

                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formState.email} 
                                    onChange={handleInputChange} 
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Tu Email" 
                                    className={getInputClass('email')}
                                    required 
                                />
                            </div>

                            <div>
                                <select 
                                    name="type" 
                                    value={formState.type} 
                                    onChange={handleInputChange} 
                                    onFocus={() => setFocusedField('type')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`${getInputClass('type')} cursor-pointer appearance-none`}
                                >
                                    <option value="clase">Consulta sobre Clases</option>
                                    <option value="evento">Consulta sobre Eventos</option>
                                    <option value="producto">Consulta sobre Tienda</option>
                                    <option value="otro">Otro motivo</option>
                                </select>
                            </div>

                            <div>
                                <textarea 
                                    name="message" 
                                    value={formState.message} 
                                    onChange={handleInputChange} 
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="¿En qué podemos acompañarte?" 
                                    rows={4} 
                                    className={`${getInputClass('message')} resize-none`}
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="pt-4">
                                <button type="submit" className="w-full bg-stone-900 text-white font-heading text-xl py-4 hover:bg-accent transition-colors duration-500">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ContactPage;
