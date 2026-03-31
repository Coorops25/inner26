
import React, { useState } from 'react';
import { InstagramIcon, WhatsAppIcon } from '../constants';
import { useToast } from '../context/ToastContext';

const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    type: 'clase',
    honeypot: '',
  });

  const [focus, setFocus] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return;
    showToast('Gracias. Hemos recibido tu mensaje.', 'success');
    setFormState({ name: '', email: '', message: '', type: 'clase', honeypot: '' });
  };
  
  const inputClasses = (fieldName: string) => `
    w-full bg-transparent border-b py-4 text-lg text-base-text transition-all duration-300 outline-none rounded-none appearance-none
    ${focus === fieldName ? 'border-accent placeholder-accent/50' : 'border-stone-300 placeholder-stone-400'}
  `;

  return (
    <section id="contacto" className="py-32 bg-[#F5F0E6]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left Column: Info & Poetic Text */}
          <div className="lg:w-5/12 space-y-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Contacto</span>
              <h2 className="text-5xl md:text-6xl font-heading text-base-text mt-6 leading-[0.9]">
                Cruza el <br/><span className="italic text-accent">umbral</span>.
              </h2>
            </div>

            <div className="space-y-8 text-lg font-light leading-relaxed text-stone-600">
              <p>
                Nos encontramos en una casa antigua con patio de árboles en el corazón de Candelaria. Un refugio de silencio en medio del movimiento.
              </p>
              <div>
                <p className="font-heading text-2xl text-base-text mb-2">Inner Spirit Sanctuary</p>
                <p>Trav. 1 #17-29</p>
                <p>Candelaria, Colombia</p>
              </div>
            </div>

            <div className="flex gap-6 pt-4 border-t border-stone-200 w-fit">
              <a href="https://instagram.com/innerspirit_studio" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors transform hover:-translate-y-1 duration-300" aria-label="Instagram @innerspirit_studio">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/573212248261" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors transform hover:-translate-y-1 duration-300" aria-label="WhatsApp +57 321 224 8261">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" name="honeypot" value={formState.honeypot} onChange={handleInputChange} className="hidden" aria-hidden="true" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                   <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    value={formState.name} 
                    onChange={handleInputChange} 
                    onFocus={() => setFocus('name')}
                    onBlur={() => setFocus(null)}
                    placeholder="Tu Nombre" 
                    className={inputClasses('name')} 
                    required 
                   />
                </div>

                <div className="relative">
                   <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    value={formState.email} 
                    onChange={handleInputChange} 
                    onFocus={() => setFocus('email')}
                    onBlur={() => setFocus(null)}
                    placeholder="Tu Email" 
                    className={inputClasses('email')} 
                    required 
                   />
                </div>
              </div>

              <div className="relative">
                <select 
                  id="type" 
                  name="type" 
                  value={formState.type} 
                  onChange={handleInputChange}
                  onFocus={() => setFocus('type')}
                  onBlur={() => setFocus(null)}
                  className={`${inputClasses('type')} cursor-pointer`}
                >
                  <option value="clase">Consulta sobre Clases</option>
                  <option value="evento">Consulta sobre Eventos</option>
                  <option value="producto">Consulta sobre Tienda</option>
                  <option value="otro">Otro motivo</option>
                </select>
              </div>

              <div className="relative">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message} 
                  onChange={handleInputChange} 
                  onFocus={() => setFocus('message')}
                  onBlur={() => setFocus(null)}
                  placeholder="¿En qué podemos acompañarte?" 
                  rows={4} 
                  className={`${inputClasses('message')} resize-none`} 
                  required
                ></textarea>
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  className="group relative px-10 py-4 bg-base-text text-white overflow-hidden transition-all duration-500 hover:bg-accent"
                >
                  <span className="relative z-10 font-heading text-xl tracking-wide">Enviar Mensaje</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
