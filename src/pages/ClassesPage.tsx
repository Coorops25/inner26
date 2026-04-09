import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../assets/Illustrations';

const classes = [
  {
    title: 'Yoga',
    subtitle: 'Hatha · Vinyasa · Yin · AcroYoga · Kundalini',
    description: 'Una práctica para unificar cuerpo, mente y respiración. Flujos dinámicos, posturas clásicas y trabajo energético con mantras. Para todos los niveles, en español e inglés.',
    illustrationName: 'yoga',
    price: 36000,
    priceLabel: '$36.000 COP / sesión',
  },
  {
    title: 'Meditación & Breathwork',
    subtitle: 'Silencio · Pranayama · Atención Plena',
    description: 'Un espacio de silencio para observar y descansar. Técnicas de respiración para liberar tensiones, expandir la energía y cultivar la claridad interior. Sin experiencia previa.',
    illustrationName: 'breathwork',
    price: 36000,
    priceLabel: '$36.000 COP / sesión',
  },
  {
    title: 'Danza & Movimiento',
    subtitle: 'Inner Dance · Danza Boreal · Inner Movement',
    description: 'Movimiento libre para liberar el cuerpo y la mente. Sin coreografías — una invitación a que tu cuerpo se exprese auténticamente guiado por la música y tu impulso interior.',
    illustrationName: 'dance',
    price: 36000,
    priceLabel: '$36.000 COP / sesión',
  },
  {
    title: 'Sound Healing',
    subtitle: 'Gong · Cuencos Tibetanos · Arte Terapia',
    description: 'Sesiones de sanación sonora con gong, cuencos tibetanos y campanas. El sonido como vehículo de transformación para armonizar cuerpo, mente y espíritu.',
    illustrationName: 'sound-healing',
    price: 36000,
    priceLabel: '$36.000 COP / sesión',
  },
];

const ClassesPage: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué tipos de yoga ofrecen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos Hatha, Vinyasa, Yin, AcroYoga y Kundalini. Cada estilo tiene su enfoque: desde flujos dinámicos hasta prácticas restaurativas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito experiencia previa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, nuestras clases son para todos los niveles. Nuestros guías adaptan las instrucciones para principiantes y avanzados."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una clase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cada sesión tiene un valor de $36.000 COP. También tenemos promociones mensuales: 3 sesiones por $100.000 COP."
          }
        },
        {
          "@type": "Question",
          "name": "¿Las clases son en español o inglés?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos clases en español e inglés. Nuestro espacio es bilingual y welcoming para visitantes internacionales."
          }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="animate-fade-in-up">
      <section className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#4D6A6D' }}>
              Práctica Diaria
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold" style={{ color: '#4D6A6D' }}>
              Nuestras Prácticas
            </h1>
            <p className="mt-6 text-xl font-light leading-relaxed" style={{ color: '#798478' }}>
              Cada clase es una invitación a habitar tu cuerpo y calmar tu mente.
              No se requiere experiencia, solo presencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {classes.map((item) => (
              <div
                key={item.title}
                className="rounded-sm shadow-sm overflow-hidden group border flex flex-col transition-all duration-300"
                style={{ background: '#FAF7F2', borderColor: '#EAE0CC' }}
              >
                <div
                  className="overflow-hidden aspect-[16/9] relative flex items-center justify-center transition-colors duration-500"
                  style={{ background: '#EAE0CC' }}
                >
                  <Illustration
                    name={item.illustrationName}
                    className="w-1/3 h-1/3 transition-all duration-700 group-hover:scale-110"
                    style={{ color: '#C9ADA1' } as React.CSSProperties}
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#4D6A6D' }}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-heading font-bold mb-3" style={{ color: '#252520' }}>
                    {item.title}
                  </h3>
                  <p className="font-light flex-grow leading-relaxed mb-2" style={{ color: '#798478' }}>
                    {item.description}
                  </p>
                  <p className="text-xs font-mono mb-6" style={{ color: '#A0A083' }}>{item.priceLabel}</p>
                  <button
                    onClick={() => openBookingModal({ type: 'class', title: item.title, price: item.price, imageUrl: '', illustrationName: item.illustrationName })}
                    className="border font-heading uppercase tracking-widest text-sm py-3 px-6 transition-all duration-300 hover:opacity-90"
                    style={{ borderColor: '#4D6A6D', color: '#4D6A6D' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#4D6A6D'; (e.currentTarget as HTMLButtonElement).style.color = '#EAE0CC'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#4D6A6D'; }}
                  >
                    Ver Horarios
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm"
            style={{ background: '#F3EDE2', border: '1px solid #D9D1C0' }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#4D6A6D' }}>Promo Mensual</p>
              <h3 className="text-2xl font-heading" style={{ color: '#252520' }}>3 sesiones por $100.000 COP</h3>
              <p className="text-sm mt-1" style={{ color: '#798478' }}>~$25 USD · Lun–Vie 6:30 AM · Sáb–Dom 8:00 AM</p>
            </div>
            <a
              href="https://wa.me/573212248261?text=Hola%2C%20me%20interesa%20la%20promo%20de%203%20sesiones"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-heading text-lg whitespace-nowrap transition-all hover:opacity-90"
              style={{ background: '#4D6A6D', color: '#EAE0CC' }}
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassesPage;