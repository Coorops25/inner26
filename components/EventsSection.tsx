
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const events = [
  {
    tag: 'Evento Insignia',
    title: 'INNER DANCE',
    subtitle: 'Ritual de Luna Nueva',
    description: `No es una fiesta. Es un ritual contemporáneo.
Una noche para soltar lo que cargas — para que el cuerpo hable sin palabras.

No hay coreografía. No hay miradas.
Solo tú, la música y la oscuridad amable.`,
    date: 'Sábados — 6:00 PM a 10:00 PM',
    price: 55000,
    priceLabel: '$55.000 COP · puerta · $44.000 anticipado',
    illustrationName: 'dance',
    type: 'event' as const,
  },
  {
    tag: 'Formación · Abril 2026',
    title: 'ROCKET YOGA',
    subtitle: 'Teacher Training — Nivel 1 · 50 horas',
    description: `Con Paloma Marín y Daniel Ferraez — más de 9 años de experiencia y +1.600 horas certificadas.

17 al 21 de abril, 2026 · 100% presencial en Inner Spirit Studio.
Incluye certificado Yoga Alliance, manual y kit de comunidad.`,
    date: '17–21 Abril 2026 · 9:00 AM – 7:00 PM',
    price: 95000,
    priceLabel: '$950 USD · Early Bird $850 hasta 15 marzo',
    illustrationName: 'yoga',
    type: 'event' as const,
  },
];

const EventsSection: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);
  const [activeIdx, setActiveIdx] = useState(0);
  const event = events[activeIdx];

  return (
    <section id="eventos" className="py-20" style={{ background: '#EAE0CC' }}>
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Tab selectors */}
        <div className="flex gap-3 mb-6 justify-center">
          {events.map((e, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300"
              style={
                activeIdx === i
                  ? { background: '#4D6A6D', color: '#EAE0CC', borderColor: '#4D6A6D' }
                  : { background: 'transparent', color: '#798478', borderColor: '#C9ADA1' }
              }
            >
              {e.tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-stretch min-h-[480px]">

          {/* Illustration side */}
          <div
            className="md:w-5/12 flex items-center justify-center p-16 relative overflow-hidden group"
            style={{ background: '#F3EDE2' }}
          >
            <Illustration
              name={event.illustrationName}
              className="w-3/4 h-3/4 transition-all duration-1000 group-hover:scale-110"
              style={{ color: '#C9ADA1' } as React.CSSProperties}
            />
          </div>

          {/* Text side */}
          <div
            className="md:w-7/12 flex flex-col justify-center p-12 md:p-16"
            style={{ background: '#1f2c2e', color: '#C9ADA1' }}
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase mb-5 block" style={{ color: '#4D6A6D' }}>
              {event.tag}
            </span>

            <h3 className="text-5xl md:text-6xl font-heading text-white mb-2 leading-none">
              {event.title}
            </h3>
            <p className="font-serif italic text-xl mb-8" style={{ color: '#A0A083' }}>
              {event.subtitle}
            </p>

            <div className="w-10 h-px mb-8" style={{ background: '#4D6A6D' }} />

            <p
              className="text-base font-light leading-relaxed whitespace-pre-line mb-10 opacity-90"
              style={{ color: '#C9ADA1' }}
            >
              {event.description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">
              <div>
                <span
                  className="text-white font-mono text-xs tracking-wide border px-4 py-2 rounded-full block mb-2"
                  style={{ borderColor: '#4D6A6D' }}
                >
                  {event.date}
                </span>
                <span className="text-xs" style={{ color: '#798478' }}>{event.priceLabel}</span>
              </div>
              <button
                onClick={() => openBookingModal({ type: event.type, title: event.title, price: event.price, imageUrl: '', illustrationName: event.illustrationName })}
                className="text-white font-heading text-xl pb-1 transition-all duration-300 hover:opacity-80"
                style={{ borderBottom: '1px solid #4D6A6D' }}
              >
                Reservar Lugar &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;
