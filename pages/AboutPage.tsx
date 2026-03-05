
import React from 'react';
import { Illustration } from '../src/assets/Illustrations';

const galleryIllustrations = ['yoga', 'meditation', 'lotus'];
const galleryLabels = ['Movimiento Consciente', 'Silencio Interior', 'Florecimiento'];

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">

      {/* Hero — gradient, no external images */}
      <section
        className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1c2829 0%, #2a3f42 50%, #252520 100%)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Illustration name="abstract-spirit" className="w-[600px] h-[600px]" style={{ color: '#4D6A6D' } as React.CSSProperties} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-6 block" style={{ color: '#4D6A6D' }}>
            Inner Spirit Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-semibold mb-6" style={{ color: '#EAE0CC' }}>
            Somos un espacio<br />para recordar
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: '#A0A083' }}>
            Un lugar para soltar el ruido de afuera y volver a escuchar la sabiduría que ya habita en ti.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8" style={{ color: '#4D6A6D' }}>
            Nuestra Filosofía
          </h2>
          <div className="text-xl font-light leading-relaxed space-y-8" style={{ color: '#5c5c52' }}>
            <p>
              No somos un gimnasio. No somos un centro de terapia. Somos un espacio donde el
              movimiento nace desde adentro. Donde la meditación no es una técnica, sino un descanso.
              Donde la danza no tiene pasos, solo impulso.
            </p>
            <p>
              Creemos que cada persona posee su propia brújula interna. Nuestro rol no es dar
              respuestas, sino crear las condiciones de calma y presencia para que puedas escuchar
              las tuyas.
            </p>
          </div>
        </div>
      </section>

      {/* Founder / Guide */}
      <section className="py-20 md:py-32" style={{ background: '#F3EDE2' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-2/5 flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-full"
                  style={{ border: '1px solid rgba(201,173,161,0.4)' }}
                />
                <div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                  style={{ background: '#EAE0CC' }}
                >
                  <Illustration
                    name="lotus"
                    className="w-3/5 h-3/5"
                    style={{ color: '#C9ADA1' } as React.CSSProperties}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-3/5 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6" style={{ color: '#4D6A6D' }}>
                La Guía
              </h2>
              <p className="text-xl font-light leading-relaxed mb-4" style={{ color: '#252520' }}>
                El camino de Inner Spirit es sostenido por una escucha.
              </p>
              <p className="text-lg font-light leading-relaxed" style={{ color: '#798478' }}>
                Una que ha sido nutrida por estudios en Sanación Energética, Meditación y Yoga Holístico,
                pero cuya verdadera guía es la presencia compartida en el silencio. Más que enseñar,
                el propósito es crear el espacio para que cada quien recuerde su propia sabiduría.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio — illustration gallery */}
      <section className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6" style={{ color: '#4D6A6D' }}>
              El Espacio
            </h2>
            <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#798478' }}>
              100 m² de espacio sagrado a los pies de Monserrate, en el barrio La Candelaria de Bogotá.
              Luz natural, paredes de barro y un piso que ha visto miles de respiraciones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {galleryIllustrations.map((name, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-sm aspect-[3/4] flex flex-col items-center justify-center group transition-colors duration-500"
                style={{ background: '#F3EDE2' }}
              >
                <Illustration
                  name={name}
                  className="w-2/5 h-2/5 transition-all duration-700 group-hover:scale-110"
                  style={{ color: '#C9ADA1' } as React.CSSProperties}
                />
                <p className="mt-6 text-xs font-bold uppercase tracking-widest" style={{ color: '#A0A083' }}>
                  {galleryLabels[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
