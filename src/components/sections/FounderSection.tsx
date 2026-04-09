
import React from 'react';
import { Illustration } from '../../assets/Illustrations';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20 md:py-32 bg-base">
      <div className="container mx-auto px-6 max-w-7xl">
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
                style={{ background: '#F3EDE2' }}
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
            <p className="text-2xl md:text-3xl font-heading leading-relaxed" style={{ color: '#252520' }}>
              El camino de Inner Spirit es sostenido por una escucha.
            </p>
            <p className="mt-6 text-lg font-light leading-relaxed" style={{ color: '#798478' }}>
              Una que ha sido nutrida por estudios en Sanación Energética, Meditación y Yoga Holístico,
              pero cuya verdadera guía es la presencia compartida en el silencio. Más que enseñar,
              el propósito es crear el espacio para que cada quien recuerde su propia sabiduría.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
