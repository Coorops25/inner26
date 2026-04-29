import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Illustration } from '../../assets/Illustrations';
import EventInstagramFeed from '../../modules/events/components/EventInstagramFeed';
import { studioEvents } from '../../modules/events/data/events';
import { toEventBookingDetails } from '../../modules/events/utils/toBookingDetails';

const EventsSection: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);
  const [activeIdx, setActiveIdx] = useState(0);
  const event = studioEvents[activeIdx] ?? studioEvents[0];

  if (!event) return null;

  const reserveFromSite = () => {
    openBookingModal(toEventBookingDetails(event, 'site'));
  };

  const reserveFromInstagram = () => {
    openBookingModal(toEventBookingDetails(event, 'instagram'));
  };

  return (
    <section id="eventos" className="py-12 md:py-16 bg-base">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex gap-3 mb-6 justify-center flex-wrap">
          {studioEvents.map((currentEvent, index) => (
            <button
              key={currentEvent.slug}
              onClick={() => setActiveIdx(index)}
              className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                activeIdx === index
                  ? 'bg-slate-is text-sand-dune border-slate-is'
                  : 'bg-transparent text-muted-light border-accent'
              }`}
            >
              {currentEvent.tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:min-h-[480px] overflow-hidden">
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

          <div className="md:w-7/12 flex flex-col justify-center p-6 md:p-12 lg:p-16 bg-dark-panel text-accent">
            <span className="text-xs font-bold tracking-[0.25em] uppercase mb-5 block text-slate-is">
              {event.tag}
            </span>

            <h3 className="text-5xl md:text-6xl font-heading text-white mb-2 leading-none">{event.title}</h3>
            <p className="font-serif italic text-xl mb-8 text-muted">
              {event.subtitle}
            </p>

            <div className="w-10 h-px mb-8 bg-slate-is" />

            <p className="text-base font-light leading-relaxed mb-10 opacity-90 text-accent">
              {event.description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">
              <div>
                <span className="text-white font-mono text-xs tracking-wide border border-slate-is px-4 py-2 rounded-full block mb-2">
                  {event.dateLabel}
                </span>
                <span className="text-xs text-muted-light">
                  {event.priceLabel}
                </span>
              </div>
              <button
                onClick={reserveFromSite}
                className="text-white font-heading text-xl pb-1 transition-all duration-300 hover:opacity-80 border-b border-slate-is"
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
