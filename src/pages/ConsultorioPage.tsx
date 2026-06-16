
import React from 'react';
import { useNavigation } from '../context/NavigationContext';

const ConsultorioPage: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <div className="animate-fade-in-up">
      <section className="relative is-page-section bg-stone-900 text-white overflow-hidden">
         <div className="absolute inset-0 bg-black/60"></div>
        <div className="is-shell relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold">Acompañamiento Individual</h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-stone-200 leading-relaxed">
            Un espacio seguro y confidencial para caminar a tu lado en tu proceso de autodescubrimiento.
          </p>
        </div>
      </section>

      <section className="is-page-section bg-base">
        <div className="is-shell max-w-3xl text-center">
            <div className="text-lg text-base-text leading-relaxed space-y-8">
                <p>A veces, el camino necesita un testigo.</p>
                <p>
                En sesiones individuales, ofrecemos un espacio seguro para explorar lo que emerge:
                patrones que se repiten, preguntas sin respuesta, duelos callados. No se trata de "arreglar" nada, sino de iluminar con consciencia lo que ya está presente.
                </p>
                <p>
                Trabajamos con herramientas simples: la escucha profunda, el diálogo consciente y, cuando es necesario, prácticas energéticas suaves para re-equilibrar el cuerpo sutil. Cada sesión es única, tejida a la medida de tu necesidad del momento.
                </p>
                <p className="font-semibold text-accent text-2xl font-heading">No damos consejos. Caminamos contigo.</p>
            </div>
        </div>

        {/* Modalidades 1:1 */}
        <div className="is-shell mt-20 md:mt-24">
          <div className="text-center mb-10">
            <span className="is-eyebrow justify-center" style={{ color: '#4D6A6D' }}>Sesiones 1:1</span>
            <h2 className="is-display text-3xl sm:text-4xl mt-4" style={{ color: '#252520' }}>Modalidades de acompañamiento</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                label: 'Yoga terapéutico',
                desc: 'Movimiento suave y consciente para liberar tensión y reconectar con el cuerpo.',
                icon: <path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 11h12M12 8v4m0 0-3 8m3-8 3 8" />,
              },
              {
                label: 'Meditación guiada',
                desc: 'Un descanso para la mente: presencia, silencio y observación acompañada.',
                icon: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /></>,
              },
              {
                label: 'Breathwork',
                desc: 'Respiración consciente para soltar lo retenido y expandir tu energía vital.',
                icon: <path d="M12 20c4-3 7-6 7-10a4 4 0 0 0-7-2.6A4 4 0 0 0 5 10c0 4 3 7 7 10Z" />,
              },
              {
                label: 'Arte terapia',
                desc: 'El gesto creativo como vía para nombrar lo que las palabras no alcanzan.',
                icon: (
                  <>
                    <path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z" />
                    <circle cx="8" cy="11" r="1" /><circle cx="12" cy="8" r="1" /><circle cx="16" cy="11" r="1" />
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="px-6 py-7 rounded-sm text-left"
                style={{ background: '#FAF7F2', border: '1px solid #EAE0CC' }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ background: '#EAE0CC', color: '#4D6A6D' }}
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="font-heading text-2xl mb-2" style={{ color: '#252520' }}>{item.label}</h3>
                <p className="font-light text-sm leading-relaxed" style={{ color: '#798478' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cómo funciona */}
        <div className="is-shell mt-20 md:mt-24">
          <div className="text-center mb-10">
            <span className="is-eyebrow justify-center" style={{ color: '#4D6A6D' }}>Cómo funciona</span>
            <h2 className="is-display text-3xl sm:text-4xl mt-4" style={{ color: '#252520' }}>De la primera visita a la continuidad</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto list-none">
            {[
              { n: '01', t: 'Agenda tu visita', d: 'Escríbenos y conversamos sin compromiso. Escuchamos lo que necesitas y elegimos juntos la modalidad.' },
              { n: '02', t: 'Sesión personalizada', d: 'Un encuentro 1:1 tejido a la medida de tu momento, en un espacio seguro y confidencial.' },
              { n: '03', t: 'Continuidad', d: 'Si lo deseas, diseñamos un acompañamiento sostenido para profundizar tu proceso con calma.' },
            ].map((step) => (
              <li
                key={step.n}
                className="px-6 py-7 rounded-sm"
                style={{ background: '#F3EDE2', border: '1px solid #EAE0CC' }}
              >
                <span className="font-mono text-sm tracking-[0.2em]" style={{ color: '#A0A083' }}>{step.n}</span>
                <h3 className="font-heading text-2xl mt-3 mb-2" style={{ color: '#252520' }}>{step.t}</h3>
                <p className="font-light text-sm leading-relaxed" style={{ color: '#798478' }}>{step.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              onClick={(e) => { e.preventDefault(); navigate('contacto'); }}
              className="is-action"
              style={{ background: '#4D6A6D', color: '#EAE0CC' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#3d5557'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4D6A6D'; }}
            >
              Conversemos para agendar
            </a>
            <a
              href="https://wa.me/573212248261?text=Hola%2C%20me%20interesa%20una%20sesi%C3%B3n%20individual%20en%20el%20consultorio"
              target="_blank"
              rel="noopener noreferrer"
              className="is-action is-action--ghost"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultorioPage;
