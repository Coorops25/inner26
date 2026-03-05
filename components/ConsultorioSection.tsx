
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ConsultorioSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <section id="consultorio" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0">
           <img 
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1800&auto=format&fit=crop" 
            alt="Consultorio Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-stone-900/40"></div>
       </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <span className="block text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-80">Sesiones 1:1</span>
        <h2 className="text-5xl md:text-7xl font-heading font-medium text-white mb-8 leading-tight">
            Acompañamiento <br/> <span className="italic font-light">Individual</span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-xl md:text-2xl text-stone-100 font-light leading-relaxed space-y-6 mb-12">
            <p>A veces, el camino necesita un testigo. Un espacio seguro para explorar lo que emerge en el silencio.</p>
        </div>
        
        <button 
            onClick={() => navigate('consultorio')} 
            className="px-10 py-4 border border-white/30 hover:bg-white hover:text-stone-900 transition-all duration-300 backdrop-blur-sm font-heading text-xl rounded-none"
        >
            Agendar Sesión
        </button>
      </div>
    </section>
  );
};

export default ConsultorioSection;
