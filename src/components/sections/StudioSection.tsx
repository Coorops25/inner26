
import React from 'react';
import { Canvas } from '@react-three/fiber';
import R3FImagePlane from '../effects/R3FImagePlane';

const stats = [
  { value: '4.9', label: 'Calificación Google', sub: '143+ reseñas' },
  { value: '#1', label: 'Yoga Studio', sub: 'Bogotá, Colombia' },
  { value: '100m²', label: 'Espacio sagrado', sub: 'La Candelaria' },
];

const pillars = [
  { illustration: 'yoga',          label: 'Yoga' },
  { illustration: 'dance',         label: 'Danza' },
  { illustration: 'sound-healing', label: 'Sound Healing' },
];

// SVG strings with inlined brand colors — used as textures for R3FImagePlane
const illustrationSvgs: Record<string, string> = {
  yoga: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" width="200" height="200"><rect width="200" height="200" fill="#F3EDE2"/><circle cx="100" cy="52" r="13" stroke="#A0A083" stroke-width="1.5"/><path d="M100 65C100 65 78 82 65 118" stroke="#A0A083" stroke-width="1.5" stroke-linecap="round"/><path d="M100 65C100 65 122 82 135 118" stroke="#A0A083" stroke-width="1.5" stroke-linecap="round"/><path d="M100 65V108" stroke="#A0A083" stroke-width="1.5" stroke-linecap="round"/><path d="M100 108L78 140M100 108L122 140" stroke="#A0A083" stroke-width="1.5" stroke-linecap="round"/><path d="M55 165C75 157 125 157 145 165" stroke="#A0A083" stroke-width="0.8" stroke-dasharray="3 4" opacity="0.4"/></svg>`,
  dance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" width="200" height="200"><rect width="200" height="200" fill="#F3EDE2"/><path d="M40 110C40 110 65 45 100 110C135 175 160 110 160 110" stroke="#A0A083" stroke-width="1.8" stroke-linecap="round"/><path d="M55 130C55 130 80 65 115 130C150 195 175 130 175 130" stroke="#A0A083" stroke-width="0.8" opacity="0.4" stroke-linecap="round"/><path d="M25 90C25 90 50 25 85 90C120 155 145 90 145 90" stroke="#A0A083" stroke-width="0.5" opacity="0.25" stroke-linecap="round"/><circle cx="100" cy="40" r="8" stroke="#A0A083" stroke-width="1.2" opacity="0.6"/></svg>`,
  'sound-healing': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" width="200" height="200"><rect width="200" height="200" fill="#F3EDE2"/><ellipse cx="100" cy="95" rx="48" ry="18" stroke="#A0A083" stroke-width="1.5"/><path d="M52 95C52 130 148 130 148 95" stroke="#A0A083" stroke-width="1.2" stroke-linecap="round"/><path d="M62 120L58 140H142L138 120" stroke="#A0A083" stroke-width="1" opacity="0.5" stroke-linejoin="round"/><path d="M70 65C70 65 62 52 70 42" stroke="#A0A083" stroke-width="1" stroke-linecap="round" opacity="0.4"/><path d="M100 60C100 60 92 47 100 37" stroke="#A0A083" stroke-width="1" stroke-linecap="round" opacity="0.5"/><path d="M130 65C130 65 122 52 130 42" stroke="#A0A083" stroke-width="1" stroke-linecap="round" opacity="0.4"/></svg>`,
};

const getSvgDataUrl = (name: string): string => {
  const svg = illustrationSvgs[name] ?? illustrationSvgs['yoga'] ?? '';
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-12 md:py-16 bg-base relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Editorial heading */}
        <div className="flex flex-col items-center text-center mb-8">
          <span className="uppercase tracking-[0.2em] text-xs font-semibold mb-4" style={{ color: '#4D6A6D' }}>El Espacio</span>
          <h2 className="text-3xl md:text-4xl font-heading leading-tight mb-4" style={{ color: '#1A1A18' }}>
            No somos un gimnasio.<br />
            <span style={{ color: '#5C6B5C' }}>Somos un santuario.</span>
          </h2>
          <div className="w-10 h-px my-4" style={{ background: '#C9ADA1' }} />
          <p className="text-base md:text-lg font-light max-w-2xl leading-relaxed" style={{ color: '#5c5c52' }}>
            Yoga, meditación, danza, breathwork y sound healing integrados en un espacio de 100&nbsp;m²
            a los pies del cerro Monserrate. Clases en español e inglés.
          </p>
        </div>

        {/* Pillar cards — R3FImagePlane adds a ripple wave effect on hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {pillars.map((item) => (
            <div
              key={item.illustration}
              className="flex flex-col items-center group"
            >
              {/*
                Camera at z=1, fov=90 → visible area at z=0 is exactly 2 units tall.
                R3FImagePlane uses scale [1.5, 2, 1].
                Container aspect-[3/4] → visible width = 2 × 0.75 = 1.5 units.
                The plane fills the canvas exactly.
              */}
              <div className="w-full aspect-[3/4] rounded-sm overflow-hidden mb-5">
                <Canvas
                  camera={{ position: [0, 0, 1], fov: 90 }}
                  gl={{ alpha: false }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <R3FImagePlane imageUrl={getSvgDataUrl(item.illustration)} />
                </Canvas>
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
