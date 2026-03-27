import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';
import EventInstagramFeed from '../src/modules/events/components/EventInstagramFeed';
import { studioEvents } from '../src/modules/events/data/events';
import { toEventBookingDetails } from '../src/modules/events/utils/toBookingDetails';

const EventsPage: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);
  const [activeSlug, setActiveSlug] = useState(studioEvents[0]?.slug ?? '');
  const activeEvent = studioEvents.find((event) => event.slug === activeSlug) ?? studioEvents[0];

  const reserveEvent = (eventSlug: string, source: 'site' | 'instagram') => {
    const event = studioEvents.find((item) => item.slug === eventSlug);
    if (!event) {
      return;
    }
    openBookingModal(toEventBookingDetails(event, source));
  };

  return (
    <div className="animate-fade-in-up">
      <section id="eventos-page" className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#4D6A6D' }}>
              Proximos Encuentros
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold" style={{ color: '#4D6A6D' }}>
              Rituales y Encuentros
            </h1>
            <p className="mt-6 text-xl font-light leading-relaxed" style={{ color: '#798478' }}>
              Agenda viva por evento con publicaciones de Instagram y CTA directo de reserva.
            </p>
          </div>

          <div className="space-y-12">
            {studioEvents.map((event) => (
              <article
                key={event.slug}
                className="rounded-sm md:flex items-stretch max-w-5xl mx-auto overflow-hidden group border"
                style={{ background: '#FAF7F2', borderColor: '#EAE0CC' }}
              >
                <div className="md:w-5/12 overflow-hidden relative min-h-[260px]">
                  <img
                    src={event.coverImageUrl}
                    alt={`Portada del evento ${event.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.5))' }}
                  >
                    <Illustration
                      name={event.illustrationName}
                      className="w-28 h-28"
                      style={{ color: 'rgba(255,255,255,0.8)' } as React.CSSProperties}
                    />
                  </div>
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
                        {event.dateLabel}
                      </p>
                      <p className="text-xs mt-1" style={{ color: '#798478' }}>
                        {event.priceLabel}
                      </p>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <button
                        onClick={() => setActiveSlug(event.slug)}
                        className="font-heading text-sm px-4 py-2 border transition-all duration-300 hover:opacity-90"
                        style={{ borderColor: '#4D6A6D', color: '#4D6A6D' }}
                      >
                        Ver Feed IG
                      </button>
                      <button
                        onClick={() => reserveEvent(event.slug, 'site')}
                        className="font-heading text-lg px-6 py-2 transition-all duration-300 hover:opacity-90 whitespace-nowrap"
                        style={{ background: '#4D6A6D', color: '#EAE0CC' }}
                      >
                        Reservar Lugar
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {activeEvent && (
            <div className="mt-16">
              <div className="flex flex-wrap gap-3 mb-4 justify-center">
                {studioEvents.map((event) => (
                  <button
                    key={event.slug}
                    onClick={() => setActiveSlug(event.slug)}
                    className="text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full border transition-all duration-300"
                    style={
                      event.slug === activeEvent.slug
                        ? { background: '#4D6A6D', color: '#EAE0CC', borderColor: '#4D6A6D' }
                        : { background: 'transparent', color: '#798478', borderColor: '#C9ADA1' }
                    }
                  >
                    {event.title}
                  </button>
                ))}
              </div>
              <EventInstagramFeed event={activeEvent} onReserveFromPost={() => reserveEvent(activeEvent.slug, 'instagram')} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
