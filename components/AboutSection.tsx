
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const AboutSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <section id="about" className="py-20 overflow-hidden" style={{ background: '#FAF7F2' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left: Text */}
          <div className="lg:w-1/2 lg:pr-12 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-6 block" style={{ color: '#A0A083' }}>
              Nuestra Esencia
            </span>
            <h2 className="text-5xl md:text-6xl font-heading leading-none mb-8" style={{ color: '#252520' }}>
              Un espacio para <br />
              <span className="italic font-light" style={{ color: '#C9ADA1' }}>recordar</span>.
            </h2>

            <div className="w-12 h-px mb-8" style={{ background: '#C9ADA1' }} />

            <div className="text-lg font-light leading-relaxed space-y-6" style={{ color: '#5c5c52' }}>
              <p>
                Inner Spirit no es un destino, es un punto de partida. Un santuario en el corazón de La
                Candelaria diseñado para soltar el ruido externo y reconectar con la sabiduría que ya
                habita en ti.
              </p>
              <p>
                Ofrecemos yoga, meditación, danza, breathwork, sound healing y arte terapia en un espacio
                inclusivo para la comunidad local e internacional — clasificado como el
                <strong style={{ color: '#4D6A6D' }}> #1 yoga studio en Bogotá</strong> con
                4.9⭐ en Google (143+ reseñas).
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <button
                onClick={() => navigate('nosotros')}
                className="font-heading text-xl pb-1 transition-all duration-300"
                style={{ color: '#252520', borderBottom: '1px solid #A0A083' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#4D6A6D'; (e.currentTarget as HTMLButtonElement).style.borderBottomColor = '#4D6A6D'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#252520'; (e.currentTarget as HTMLButtonElement).style.borderBottomColor = '#A0A083'; }}
              >
                Conoce nuestra historia &rarr;
              </button>
              <a
                href="https://wa.me/573212248261?text=Hola%2C%20quiero%20info%20sobre%20clases"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xl pb-1 transition-all duration-300"
                style={{ color: '#4D6A6D', borderBottom: '1px solid #4D6A6D' }}
              >
                Reservar clase
              </a>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div
              className="relative aspect-[3/4] overflow-hidden flex items-center justify-center p-14"
              style={{ background: '#EAE0CC' }}
            >
              <Illustration
                name="lotus"
                className="w-full h-full transition-transform duration-[1.5s] ease-out hover:scale-110"
                style={{ color: '#C9ADA1' } as React.CSSProperties}
              />
              {/* Decorative offset block */}
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 hidden md:block"
                style={{ background: '#FAF7F2', zIndex: 10 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
