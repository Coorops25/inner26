
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Illustration } from '../../assets/Illustrations';

const classes = [
  {
    title: 'Yoga',
    subtitle: 'Hatha · Vinyasa · Yin · Kundalini',
    description: 'Fluye con tu respiración y encuentra el equilibrio. Clases en español e inglés para todos los niveles.',
    illustrationName: 'yoga',
    price: 36000,
    priceLabel: '$36.000 COP / clase',
  },
  {
    title: 'Meditación & Breathwork',
    subtitle: 'Silencio Interior',
    description: 'Cultiva la paz interior y la claridad mental. Técnicas de respiración para liberar tensiones y expandir la energía.',
    illustrationName: 'breathwork',
    price: 36000,
    priceLabel: '$36.000 COP / clase',
  },
  {
    title: 'Danza & Sound Healing',
    subtitle: 'Expresión Libre',
    description: 'Inner Dance, movimiento consciente y sanación con cuencos tibetanos, gong y campanas.',
    illustrationName: 'sound-healing',
    price: 36000,
    priceLabel: '$36.000 COP / clase',
  },
];

const ClassesSection: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);

  return (
    <section id="clases" className="py-32" style={{ background: '#FAF7F2' }}>
      <div className="container mx-auto px-6 max-w-7xl">

        <div
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b pb-10"
          style={{ borderColor: '#EAE0CC' }}
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: '#A0A083' }}>
              Práctica Diaria
            </span>
            <h2 className="text-5xl font-heading" style={{ color: '#252520' }}>
              Ritmo Semanal
            </h2>
          </div>
          <p className="max-w-md font-light mt-6 md:mt-0 text-right md:text-left leading-relaxed" style={{ color: '#798478' }}>
            No necesitas experiencia previa. Solo la disposición de estar presente y habitar tu cuerpo.
            Lun–Vie 6:30 AM | Sáb–Dom 8:00 AM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {classes.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => openBookingModal({
                type: 'class',
                title: item.title,
                price: item.price,
                imageUrl: '',
                illustrationName: item.illustrationName,
              })}
            >
              <div
                className="relative overflow-hidden w-full aspect-[3/4] mb-6 flex items-center justify-center transition-colors duration-500"
                style={{ background: '#EAE0CC' }}
              >
                <Illustration
                  name={item.illustrationName}
                  className="w-1/2 h-1/2 transition-all duration-700 group-hover:scale-110"
                  style={{ color: '#C9ADA1' } as React.CSSProperties}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: 'rgba(77,106,109,0.08)' }}
                >
                  <button
                    className="px-6 py-3 font-heading text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    style={{ background: 'rgba(234,224,204,0.95)', color: '#252520' }}
                  >
                    Ver Horarios
                  </button>
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
            </div>
          ))}
        </div>

        {/* Paquete mensual */}
        <div
          className="mt-16 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm"
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
            className="px-8 py-3 font-heading text-lg whitespace-nowrap transition-all duration-300 hover:opacity-90"
            style={{ background: '#4D6A6D', color: '#EAE0CC' }}
          >
            Reservar Paquete
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
