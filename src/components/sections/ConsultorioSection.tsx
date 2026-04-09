
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Illustration } from '../../assets/Illustrations';

const ConsultorioSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <section
      id="consultorio"
      className="relative overflow-hidden"
      style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Gradient background — no external images */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1c2829 0%, #2a3f42 45%, #1f3235 100%)',
        }}
      />

      {/* Decorative illustration — subtle */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none opacity-10 pr-8 md:pr-20">
        <Illustration
          name="abstract-spirit"
          className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
          style={{ color: '#4D6A6D' } as React.CSSProperties}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none opacity-5 pl-8 md:pl-20">
        <Illustration
          name="lotus"
          className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64"
          style={{ color: '#C9ADA1' } as React.CSSProperties}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white py-12 md:py-16">
        <span className="block text-xs font-bold tracking-[0.35em] uppercase mb-4 opacity-70" style={{ color: '#A0A083' }}>
          Sesiones 1:1
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6 leading-tight">
          Acompañamiento <br />
          <span className="italic font-light" style={{ color: '#C9ADA1' }}>Individual</span>
        </h2>

        <div
          className="w-10 h-px mx-auto mb-6"
          style={{ background: '#4D6A6D' }}
        />

        <p className="max-w-xl mx-auto text-lg font-light leading-relaxed mb-3" style={{ color: '#C9ADA1' }}>
          A veces, el camino necesita un testigo. Un espacio seguro para explorar lo que emerge en el silencio.
        </p>
        <p className="text-sm font-light mb-8" style={{ color: '#798478' }}>
          Yoga terapéutico · Meditación guiada · Breathwork · Arte terapia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/consultorio"
            onClick={(e) => { e.preventDefault(); navigate('consultorio'); }}
            className="px-6 sm:px-10 py-3 sm:py-4 font-heading text-lg sm:text-xl transition-all duration-300 rounded-none inline-block"
            style={{ border: '1px solid rgba(77,106,109,0.6)', color: '#EAE0CC' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4D6A6D'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
          >
            Ver Consultorio
          </a>
          <a
            href="https://wa.me/573212248261?text=Hola%2C%20me%20interesa%20una%20sesi%C3%B3n%20individual"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-10 py-3 sm:py-4 font-heading text-lg sm:text-xl transition-all duration-300 rounded-none"
            style={{ background: '#4D6A6D', color: '#EAE0CC', border: '1px solid #4D6A6D' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#3d5557'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4D6A6D'; }}
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultorioSection;
