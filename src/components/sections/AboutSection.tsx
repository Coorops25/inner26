
import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Illustration } from '../../assets/Illustrations';

const AboutSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="about" className="is-section is-section--paper overflow-hidden">
      <div className="is-shell">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left: Text */}
          <div className="lg:w-1/2 lg:pr-12 order-2 lg:order-1">
            <span className="is-eyebrow">Nuestra Esencia</span>
            <h2 className="is-display text-5xl md:text-6xl leading-none mt-6 mb-8">
              Un espacio para <br />
              <span className="italic font-light" style={{ color: '#C9ADA1' }}>recordar</span>.
            </h2>

            <div className="is-luxury-rule mb-8" />

            <div className="is-copy space-y-6">
              <p>
                Inner Spirit no es un destino, es un punto de partida. Un santuario a los pies de Monserrate,
                en el corazón histórico de La Candelaria, diseñado para soltar el ruido externo y reconectar
                con la sabiduría que ya habita en ti.
              </p>
              <p>
                Aquí el movimiento nace desde adentro y la práctica es una forma de <span className="italic" style={{ color: '#5C6B5C' }}>dejar fluir</span>.
                Ofrecemos yoga, meditación, danza, breathwork, sound healing y arte terapia en un espacio
                inclusivo para la comunidad local e internacional — clasificado como el
                <strong className="text-slate-is"> #1 estudio de yoga en Bogotá</strong> con
                4.9 en Google (143+ reseñas).
              </p>
            </div>

            {/* Trust metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { value: '#1', label: 'Estudio en Bogotá' },
                { value: '4.9', label: 'En Google' },
                { value: '143+', label: 'Reseñas' },
              ].map((m) => (
                <div key={m.label} className="is-surface px-3 py-4 text-center">
                  <p className="is-metric font-heading text-3xl leading-none text-slate-is">{m.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] mt-2 text-muted">{m.label}</p>
                </div>
              ))}
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
            <div className="is-frame is-media-stage relative aspect-[3/4] flex items-center justify-center p-8 md:p-12 lg:p-14">
              <Illustration
                name="lotus"
                className="w-full h-full transition-transform duration-[1.5s] ease-out hover:scale-110"
                style={{ color: '#C9ADA1' } as React.CSSProperties}
              />
            </div>
            <span className="hidden md:block absolute -bottom-6 -left-6 w-28 h-28 rounded-sm" style={{ border: '1px solid rgba(201,173,161,0.5)', zIndex: -1 }} />
          </div>

        </div>

        {/* Para qué / Por qué — propósito y comunidad */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <article className="is-surface p-8 md:p-10">
            <span className="is-eyebrow">¿Para qué?</span>
            <p className="is-copy mt-5">
              En un mundo lleno de ruido, Inner Spirit es un espacio diseñado para ayudarte a
              reconectar con tu esencia. Ofrecemos clases, terapias y eventos que nutren tu
              cuerpo, mente y espíritu.
            </p>
          </article>
          <article className="is-surface p-8 md:p-10">
            <span className="is-eyebrow">¿Por qué?</span>
            <p className="is-copy mt-5">
              Somos más que un centro de bienestar: somos una comunidad que celebra tu crecimiento
              y te acompaña en cada paso de tu viaje hacia la paz interior.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
