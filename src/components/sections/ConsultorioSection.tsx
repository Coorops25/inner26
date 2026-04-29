
import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Illustration } from '../../assets/Illustrations';

const ConsultorioSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section
      id="consultorio"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: '50vh' }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #1c2829 0%, #2a3f42 45%, #1f3235 100%)' }}
      />

      {/* Decorative illustrations */}
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
        <span className="block text-xs font-bold tracking-[0.35em] uppercase mb-4 opacity-70 text-muted">
          Sesiones 1:1
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6 leading-tight">
          Acompañamiento <br />
          <span className="italic font-light text-accent">Individual</span>
        </h2>

        <div className="w-10 h-px mx-auto mb-6 bg-slate-is" />

        <p className="max-w-xl mx-auto text-lg font-light leading-relaxed mb-3 text-accent">
          Un espacio seguro para explorar lo que emerge en el silencio, con acompañamiento profesional personalizado.
        </p>
        <p className="text-sm font-light mb-8 text-muted-light">
          Yoga terapéutico · Meditación guiada · Breathwork · Arte terapia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/consultorio"
            onClick={(e) => { e.preventDefault(); navigate('consultorio'); }}
            className="px-6 sm:px-10 py-3 sm:py-4 font-heading text-lg sm:text-xl transition-all duration-300 inline-block border border-slate-is/60 text-sand-dune hover:bg-slate-is"
          >
            Ver Consultorio
          </a>
          <a
            href="https://wa.me/573212248261?text=Hola%2C%20me%20interesa%20una%20sesi%C3%B3n%20individual"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-10 py-3 sm:py-4 font-heading text-lg sm:text-xl transition-all duration-300 bg-slate-is text-sand-dune border border-slate-is hover:bg-deep-teal"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultorioSection;
