
import React from 'react';
import { Illustration } from '../src/assets/Illustrations';

const stats = [
  { value: '4.9', label: 'Calificación Google', sub: '143+ reseñas' },
  { value: '#1', label: 'Yoga Studio', sub: 'Bogotá, Colombia' },
  { value: '100m²', label: 'Espacio sagrado', sub: 'La Candelaria' },
];

const pillars = [
  { illustration: 'yoga', label: 'Yoga' },
  { illustration: 'dance', label: 'Danza' },
  { illustration: 'sound-healing', label: 'Sound Healing' },
];

const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-16 md:py-24 bg-base relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Editorial heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="uppercase tracking-[0.2em] text-sm font-semibold mb-6" style={{ color: '#4D6A6D' }}>El Espacio</span>
          <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6" style={{ color: '#252520' }}>
            No somos un gimnasio.<br />
            <span style={{ color: '#798478' }}>Somos un santuario.</span>
          </h2>
          <div className="w-14 h-px my-6" style={{ background: '#C9ADA1' }} />
          <p className="text-lg md:text-xl font-light max-w-2xl leading-relaxed" style={{ color: '#5c5c52' }}>
            Yoga, meditación, danza, breathwork y sound healing integrados en un espacio de 100&nbsp;m²
            a los pies del cerro Monserrate. Clases en español e inglés.
          </p>
        </div>

        {/* Illustration grid — replaces R3F images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {pillars.map((item) => (
            <div
              key={item.illustration}
              className="flex flex-col items-center group"
            >
              <div
                className="w-full aspect-[3/4] flex items-center justify-center rounded-sm overflow-hidden mb-5 transition-colors duration-500"
                style={{ background: '#F3EDE2' }}
              >
                <Illustration
                  name={item.illustration}
                  className="w-1/2 h-1/2 transition-colors duration-700"
                  style={{ color: '#A0A083' } as React.CSSProperties}
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
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rounded-sm py-8"
          style={{ background: '#F3EDE2', divideColor: '#C9ADA1' }}
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
