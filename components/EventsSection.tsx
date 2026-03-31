import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';
import EventInstagramFeed from '../src/modules/events/components/EventInstagramFeed';
import { studioEvents } from '../src/modules/events/data/events';
import { toEventBookingDetails } from '../src/modules/events/utils/toBookingDetails';

const EventsSection: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);
  const [activeIdx, setActiveIdx] = useState(0);
  const event = studioEvents[activeIdx] ?? studioEvents[0];

  const reserveFromSite = () => {
    openBookingModal(toEventBookingDetails(event, 'site'));
  };

  const reserveFromInstagram = () => {
    openBookingModal(toEventBookingDetails(event, 'instagram'));
  };

  return (
    <section id="eventos" className="py-12 md:py-16" style={{ background: '#EAE0CC' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex gap-3 mb-6 justify-center flex-wrap">
          {studioEvents.map((currentEvent, index) => (
            <button
              key={currentEvent.slug}
              onClick={() => setActiveIdx(index)}
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300"
              style={
                activeIdx === index
                  ? { background: '#4D6A6D', color: '#EAE0CC', borderColor: '#4D6A6D' }
                  : { background: 'transparent', color: '#798478', borderColor: '#C9ADA1' }
              }
            >
              {currentEvent.tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-stretch min-h-[480px] overflow-hidden">
          <div className="md:w-5/12 relative overflow-hidden group min-h-[320px]">
            <img
              src={event.coverImageUrl}
              alt={`Imagen del evento ${event.title}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.55))' }}
            >
              <Illustration
                name={event.illustrationName}
                className="w-40 h-40"
                style={{ color: 'rgba(255,255,255,0.85)' } as React.CSSProperties}
              />
            </div>
          </div>

          <div className="md:w-7/12 flex flex-col justify-center p-12 md:p-16" style={{ background: '#1f2c2e', color: '#C9ADA1' }}>
            <span className="text-xs font-bold tracking-[0.25em] uppercase mb-5 block" style={{ color: '#4D6A6D' }}>
              {event.tag}
            </span>

            <h3 className="text-5xl md:text-6xl font-heading text-white mb-2 leading-none">{event.title}</h3>
            <p className="font-serif italic text-xl mb-8" style={{ color: '#A0A083' }}>
              {event.subtitle}
            </p>

            <div className="w-10 h-px mb-8" style={{ background: '#4D6A6D' }} />

            <p className="text-base font-light leading-relaxed mb-10 opacity-90" style={{ color: '#C9ADA1' }}>
              {event.description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">
              <div>
                <span
                  className="text-white font-mono text-xs tracking-wide border px-4 py-2 rounded-full block mb-2"
                  style={{ borderColor: '#4D6A6D' }}
                >
                  {event.dateLabel}
                </span>
                <span className="text-xs" style={{ color: '#798478' }}>
                  {event.priceLabel}
                </span>
              </div>
              <button
                onClick={reserveFromSite}
                className="text-white font-heading text-xl pb-1 transition-all duration-300 hover:opacity-80"
                style={{ borderBottom: '1px solid #4D6A6D' }}
              >
                Reservar Lugar &rarr;
              </button>
            </div>
          </div>
        </div>

        <EventInstagramFeed event={event} onReserveFromPost={reserveFromInstagram} />
      </div>
    </section>
  );
};

export default EventsSection;
