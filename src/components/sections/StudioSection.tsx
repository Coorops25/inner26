
import React from 'react';

const stats = [
  { value: '4.9', label: 'Calificación Google', sub: '143+ reseñas' },
  { value: '#1', label: 'Yoga Studio', sub: 'Bogotá, Colombia' },
  { value: '100m²', label: 'Espacio sagrado', sub: 'La Candelaria' },
];

const pillars = [
  {
    img: '/images/studio/yoga-clase-grupal.jpg',
    label: 'Yoga',
    alt: 'Clase de yoga en grupo sobre esterillas en Inner Spirit Studio',
  },
  {
    img: '/images/studio/danza-movimiento.jpg',
    label: 'Danza',
    alt: 'Clase de danza y movimiento consciente en comunidad',
  },
  {
    img: '/images/studio/capoeira-roda.jpg',
    label: 'Capoeira',
    alt: 'Roda de capoeira con músicos en el estudio de La Candelaria',
  },
];

const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="is-section bg-base relative overflow-hidden">
      <div className="is-shell">

        {/* Editorial heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="is-eyebrow">El Espacio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mt-5 mb-4" style={{ color: '#1A1A18' }}>
            No somos un gimnasio.<br />
            <span className="italic font-light" style={{ color: '#5C6B5C' }}>Somos un santuario.</span>
          </h2>
          <div className="is-luxury-rule my-4" />
          <p className="text-base md:text-lg font-light max-w-2xl leading-relaxed" style={{ color: '#5c5c52' }}>
            Yoga, meditación, danza, capoeira, breathwork y sound healing reunidos en un espacio de 100&nbsp;m²
            a los pies de Monserrate. Un lugar para dejar fluir, respirar hondo y reencontrarte
            con la comunidad. Clases en español e inglés.
          </p>
        </div>

        {/* Pillar cards — real photography of the space and its community */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {pillars.map((item) => (
            <div key={item.label} className="flex flex-col items-center group">
              <div className="w-full aspect-[3/4] rounded-sm overflow-hidden mb-5">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#798478' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rounded-sm py-8 text-center"
          style={{ background: '#F3EDE2' }}
        >
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center py-6 md:py-0">
              <span className="text-4xl md:text-5xl font-heading font-bold" style={{ color: '#4D6A6D' }}>
                {s.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider mt-1" style={{ color: '#252520' }}>
                {s.label}
              </span>
              <span className="text-xs mt-1" style={{ color: '#A0A083' }}>{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
