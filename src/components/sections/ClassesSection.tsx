
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const classes = [
  {
    title: 'Yoga',
    subtitle: 'Hatha · Vinyasa · Yin · Kundalini',
    description: 'Fluye con tu respiración y encuentra el equilibrio. Clases en español e inglés para todos los niveles.',
    illustrationName: 'yoga',
    imageUrl: '/images/studio/yoga-clase-grupal.jpg',
    imageAlt: 'Clase de yoga en grupo sobre esterillas en Inner Spirit Studio',
    price: 36000,
    priceLabel: '$36.000 COP / clase',
  },
  {
    title: 'Meditación & Breathwork',
    subtitle: 'Silencio Interior',
    description: 'Cultiva la paz interior y la claridad mental. Técnicas de respiración para liberar tensiones y expandir la energía.',
    illustrationName: 'breathwork',
    imageUrl: '/images/studio/meditacion-mudra.jpg',
    imageAlt: 'Persona en meditación con mudra sobre un cojín',
    price: 36000,
    priceLabel: '$36.000 COP / clase',
  },
  {
    title: 'Danza & Sound Healing',
    subtitle: 'Expresión Libre',
    description: 'Inner Dance, movimiento consciente y sanación con cuencos tibetanos, gong y campanas.',
    illustrationName: 'sound-healing',
    imageUrl: '/images/studio/danza-movimiento.jpg',
    imageAlt: 'Clase de danza y movimiento consciente en comunidad',
    price: 36000,
    priceLabel: '$36.000 COP / clase',
  },
];

const weeklyRhythm = [
  { day: 'Lun – Vie', time: '6:30 AM', focus: 'Yoga & Pranayama al amanecer' },
  { day: 'Sáb – Dom', time: '8:00 AM', focus: 'Vinyasa, danza y sound healing' },
];

const faqs = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. Cada clase se adapta a todos los niveles y nuestros guías ofrecen variaciones para principiantes y para quienes ya tienen práctica.',
  },
  {
    q: '¿Qué debo llevar?',
    a: 'Ropa cómoda y ganas de estar presente. Contamos con tapetes, cojines y mantas; solo trae tu botella de agua.',
  },
  {
    q: '¿Hay clases en inglés?',
    a: 'Sí. Nuestro espacio es bilingüe: las clases se guían en español e inglés, así que eres bienvenido vengas de donde vengas.',
  },
  {
    q: '¿Cómo reservo mi lugar?',
    a: 'Elige una práctica y pulsa "Ver Horarios" para reservar, o escríbenos por WhatsApp. Los cupos son limitados para cuidar la intimidad del grupo.',
  },
];

const ClassesSection: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="clases" className="is-section" style={{ background: '#FAF7F2' }}>
      <div className="is-shell">

        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 border-b pb-10"
          style={{ borderColor: '#EAE0CC' }}
        >
          <div>
            <span className="is-eyebrow mb-4" style={{ color: '#A0A083' }}>
              Práctica Diaria
            </span>
            <h2 className="is-display text-4xl sm:text-5xl md:text-6xl mt-4" style={{ color: '#252520' }}>
              Ritmo Semanal
            </h2>
          </div>
          <p className="max-w-md font-light mt-6 md:mt-0 text-left leading-relaxed" style={{ color: '#798478' }}>
            No necesitas experiencia previa. Solo la disposición de estar presente y habitar tu cuerpo —
            un ritmo constante que sostiene tu práctica semana a semana.
          </p>
        </div>

        {/* Weekly rhythm rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:mb-16">
          {weeklyRhythm.map((slot) => (
            <div
              key={slot.day}
              className="flex items-center gap-5 px-6 py-5 rounded-sm"
              style={{ background: '#F3EDE2', border: '1px solid #EAE0CC' }}
            >
              <span
                className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{ background: '#EAE0CC', color: '#4D6A6D' }}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: '#A0A083' }}>{slot.day}</p>
                <p className="font-heading text-2xl leading-tight" style={{ color: '#252520' }}>{slot.time}</p>
                <p className="text-sm font-light mt-0.5" style={{ color: '#798478' }}>{slot.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {classes.map((item, index) => (
            <button
              key={index}
              type="button"
              className="group cursor-pointer text-left w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-is"
              onClick={() => openBookingModal({
                type: 'class',
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl,
                illustrationName: item.illustrationName,
              })}
              aria-label={`Ver horarios de ${item.title}`}
            >
              <div
                className="relative overflow-hidden w-full aspect-[3/4] mb-6 transition-colors duration-500"
                style={{ background: '#EAE0CC' }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500"
                  style={{ background: 'rgba(77,106,109,0.08)' }}
                >
                  <span
                    className="px-6 py-3 font-heading text-lg translate-y-4 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-500"
                    style={{ background: 'rgba(234,224,204,0.95)', color: '#252520' }}
                  >
                    Ver Horarios
                  </span>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3
                  className="text-3xl font-heading transition-colors duration-300"
                  style={{ color: '#252520' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest mt-2 mb-3" style={{ color: '#4D6A6D' }}>
                  {item.subtitle}
                </p>
                <p className="font-light leading-relaxed text-sm mb-2" style={{ color: '#798478' }}>
                  {item.description}
                </p>
                <p className="text-xs font-mono" style={{ color: '#A0A083' }}>{item.priceLabel}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Paquete mensual */}
        <div
          className="mt-16 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-sm"
          style={{ background: '#EAE0CC', border: '1px solid #D9D1C0' }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#4D6A6D' }}>Promo Mensual</p>
            <h3 className="text-2xl font-heading" style={{ color: '#252520' }}>3 sesiones por $100.000 COP</h3>
            <p className="text-sm mt-1" style={{ color: '#798478' }}>~$25 USD · El precio más popular entre nuestra comunidad</p>
          </div>
          <a
            href="https://wa.me/573212248261?text=Hola%2C%20me%20interesa%20la%20promo%20mensual%20de%203%20sesiones"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 font-heading text-lg text-center transition-all duration-300 hover:opacity-90"
            style={{ background: '#4D6A6D', color: '#EAE0CC' }}
          >
            Reservar Paquete
          </a>
        </div>

        {/* FAQ accordion */}
        <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="is-eyebrow justify-center" style={{ color: '#A0A083' }}>Antes de tu primera clase</span>
            <h3 className="is-display text-3xl sm:text-4xl mt-4" style={{ color: '#252520' }}>Preguntas frecuentes</h3>
          </div>
          <ul className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              const panelId = `clases-faq-panel-${index}`;
              const buttonId = `clases-faq-button-${index}`;
              return (
                <li
                  key={index}
                  className="rounded-sm overflow-hidden"
                  style={{ background: '#FAF7F2', border: '1px solid #EAE0CC' }}
                >
                  <h4 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-7 py-5 transition-colors duration-200"
                      style={{ color: '#252520' }}
                    >
                      <span className="font-heading text-xl sm:text-2xl leading-snug">{item.q}</span>
                      <span
                        className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300"
                        style={{
                          background: isOpen ? '#4D6A6D' : '#EAE0CC',
                          color: isOpen ? '#EAE0CC' : '#4D6A6D',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                        aria-hidden="true"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                  </h4>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 sm:px-7 pb-6 -mt-1"
                  >
                    <p className="font-light leading-relaxed text-sm sm:text-base" style={{ color: '#798478' }}>
                      {item.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
