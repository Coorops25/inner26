
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const events = [
  {
    title: 'INNER DANCE',
    tag: 'Evento Insignia',
    description: 'Un ritual contemporáneo para que el cuerpo hable sin palabras y el alma encuentre su ritmo. No hay coreografía, no hay miradas. Solo tú, la música y la oscuridad amable.',
    date: 'Sábados — 6:00 PM a 10:00 PM',
    priceLabel: '$55.000 COP puerta · $44.000 anticipado',
    illustrationName: 'dance',
    price: 55000,
  },
  {
    title: 'Rocket Yoga Teacher Training',
    tag: 'Formación · Abril 2026',
    description: 'Con Paloma Marín y Daniel Ferraez. Formación de 50 horas certificada por Yoga Alliance. Incluye manual del curso, anualidad en Prayana Online y kit de comunidad.',
    date: '17–21 de Abril, 2026 · Horario completo',
    priceLabel: '$950 USD regular · Early Bird $850 hasta 15 marzo',
    illustrationName: 'yoga',
    price: 95000,
  },
  {
    title: 'Círculo de Luna Llena',
    tag: 'Ritual Mensual',
    description: 'Un encuentro para compartir, meditar y soltar bajo la energía de la luna llena. Espacio de conexión profunda con nosotras mismas y la comunidad.',
    date: 'Viernes de luna llena — 7:00 PM',
    priceLabel: '$44.000 COP anticipado',
    illustrationName: 'ritual',
    price: 44000,
  },
  {
    title: 'Danza Boreal',
    tag: 'Movimiento',
    description: 'Ocho encuentros para sentir el cuerpo como paisaje y espacio compartido, moviéndose con atención plena. Una experiencia única de movimiento y conexión corporal.',
    date: 'Domingos — 10:00 AM',
    priceLabel: '$55.000 COP / sesión',
    illustrationName: 'dance',
    price: 55000,
  },
];

const EventsPage: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);

  return (
    <div className="animate-fade-in-up">
      <section id="eventos-page" className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#4D6A6D' }}>
              Próximos Encuentros
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold" style={{ color: '#4D6A6D' }}>
              Rituales y Encuentros
            </h1>
            <p className="mt-6 text-xl font-light leading-relaxed" style={{ color: '#798478' }}>
              Espacios creados para profundizar, compartir y transformar en comunidad.
            </p>
          </div>

          <div className="space-y-12">
            {events.map(event => (
              <div
                key={event.title}
                className="rounded-sm md:flex items-stretch max-w-5xl mx-auto overflow-hidden group border"
                style={{ background: '#FAF7F2', borderColor: '#EAE0CC' }}
              >
                <div
                  className="md:w-5/12 overflow-hidden relative min-h-[260px] flex items-center justify-center transition-colors duration-500"
                  style={{ background: '#EAE0CC' }}
                >
                  <Illustration
                    name={event.illustrationName}
                    className="w-2/5 h-2/5 transition-all duration-700 group-hover:scale-110"
                    style={{ color: '#C9ADA1' } as React.CSSProperties}
                  />
                </div>

                <div className="md:w-7/12 p-10 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: '#4D6A6D' }}>
                    {event.tag}
                  </span>
                  <h3 className="text-3xl font-heading font-bold mb-3" style={{ color: '#252520' }}>
                    {event.title}
                  </h3>
                  <p className="font-light leading-relaxed text-base mb-5" style={{ color: '#798478' }}>
                    {event.description}
                  </p>
                  <div
                    className="pt-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    style={{ borderColor: '#EAE0CC' }}
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#A0A083' }}>
                        {event.date}
                      </p>
                      <p className="text-xs mt-1" style={{ color: '#798478' }}>{event.priceLabel}</p>
                    </div>
                    <button
                      onClick={() => openBookingModal({ type: 'event', title: event.title, price: event.price, imageUrl: '', illustrationName: event.illustrationName })}
                      className="font-heading text-lg px-6 py-2 transition-all duration-300 hover:opacity-90 whitespace-nowrap"
                      style={{ background: '#4D6A6D', color: '#EAE0CC' }}
                    >
                      Reservar Lugar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
