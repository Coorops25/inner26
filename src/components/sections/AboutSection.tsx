
import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Illustration } from '../../assets/Illustrations';

const AboutSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="about" className="py-12 md:py-16 overflow-hidden bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left: Text */}
          <div className="lg:w-1/2 lg:pr-12 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-6 block text-muted">
              Nuestra Esencia
            </span>
            <h2 className="text-5xl md:text-6xl font-heading leading-none mb-8 text-ink">
              Un espacio para <br />
              <span className="italic font-light text-accent">recordar</span>.
            </h2>

            <div className="w-12 h-px mb-8 bg-accent" />

            <div className="text-lg font-light leading-relaxed space-y-6 text-muted">
              <p>
                Inner Spirit no es un destino, es un punto de partida. Un santuario en el corazón de La
                Candelaria diseñado para soltar el ruido externo y reconectar con la sabiduría que ya
                habita en ti.
              </p>
              <p>
                Ofrecemos yoga, meditación, danza, breathwork, sound healing y arte terapia en un espacio
                inclusivo para la comunidad local e internacional — clasificado como el
                <strong className="text-slate-is"> #1 estudio de yoga en Bogotá</strong> con
                4.9⭐ en Google (143+ reseñas).
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="/nosotros"
                onClick={(e) => { e.preventDefault(); navigate('nosotros'); }}
                className="font-heading text-xl pb-1 transition-all duration-300 inline-block text-ink border-b border-sage hover:text-slate-is hover:border-slate-is"
              >
                Conoce nuestra historia &rarr;
              </a>
              <a
                href="https://wa.me/573212248261?text=Hola%2C%20quiero%20info%20sobre%20clases"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xl pb-1 transition-all duration-300 text-slate-is border-b border-slate-is"
              >
                Reservar clase
              </a>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-14 bg-base">
              <Illustration
                name="lotus"
                className="w-full h-full transition-transform duration-[1.5s] ease-out hover:scale-110"
                style={{ color: '#C9ADA1' } as React.CSSProperties}
              />
              {/* Decorative offset block */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 hidden md:block bg-cream" style={{ zIndex: 10 }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
