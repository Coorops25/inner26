
import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20 md:py-32 bg-base">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 border border-accent/30 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop"
                alt="Ilustración abstracta de la guía de Inner Spirit"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <p className="text-2xl md:text-3xl text-base-text leading-relaxed">
             El camino de Inner Spirit es sostenido por una escucha.
            </p>
            <p className="mt-6 text-lg text-base-text/80 leading-relaxed">
             Una que ha sido nutrida por estudios en Sanación Energética, Meditación y Yoga Holístico, pero cuya verdadera guía es la presencia compartida en el silencio. Más que enseñar, el propósito es crear el espacio para que cada quien recuerde su propia sabiduría.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
