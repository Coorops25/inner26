
import React from 'react';
import { Illustration } from '../../assets/Illustrations';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="is-page-section is-section--sand">
      <div className="is-shell">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Illustration circle instead of photo */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-full"
                style={{ border: '1px solid rgba(201,173,161,0.35)' }}
              />
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                style={{ background: '#FAF7F2', boxShadow: 'var(--is-shadow-soft)' }}
              >
                <Illustration
                  name="lotus"
                  className="w-3/5 h-3/5 transition-transform duration-700 hover:scale-110"
                  style={{ color: '#C9ADA1' } as React.CSSProperties}
                />
              </div>
            </div>
          </div>

          <div className="md:w-3/5 text-center md:text-left">
            <span className="is-eyebrow md:justify-start justify-center">La Guía</span>
            <p className="font-heading text-2xl md:text-3xl leading-relaxed mt-5" style={{ color: '#252520' }}>
              El camino de Inner Spirit es sostenido por una escucha — y por la intención de
              <span className="italic" style={{ color: '#4D6A6D' }}> dejar fluir</span>.
            </p>
            <p className="is-copy mt-6">
              Una escucha nutrida por estudios en Sanación Energética, Meditación y Yoga Holístico,
              pero cuya verdadera guía es la presencia compartida en el silencio. Aquí no se busca
              corregir ni forzar: se sostiene el espacio para que el movimiento, la respiración y la
              quietud encuentren su propio ritmo.
            </p>
            <p className="is-copy mt-4">
              Más que enseñar, el propósito es crear las condiciones de calma para que cada quien
              recuerde su propia sabiduría — y la deje fluir.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
