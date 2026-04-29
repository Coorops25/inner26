
import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import Galaxy from '../effects/Galaxy';
import VariableProximity from '../effects/VariableProximity';

const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-[#050a0b]"
      style={{ isolation: 'isolate' }}
    >
      {/* Galaxy Background — pointer-events disabled so buttons are always clickable */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1.5}
          glowIntensity={0.4}
          saturation={0}
          hueShift={185}
          twinkleIntensity={0.4}
          rotationSpeed={0.03}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.8}
        />
      </div>

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Main Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 md:px-6"
        style={{ zIndex: 2, minHeight: '100svh', paddingTop: '4rem', paddingBottom: '2rem' }}
      >
        <div className="animate-fade-in-up flex flex-col items-center w-full max-w-5xl">

          {/* Badge */}
          <span className="text-white/50 text-xs font-bold tracking-[0.35em] uppercase mb-8 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            La Candelaria, Bogotá &mdash; #1 Estudio de Yoga
          </span>

          {/* Headline — "Movimiento" reacts to mouse proximity */}
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-heading text-white leading-[0.88] tracking-tight">
            <span className="block opacity-95">
              <VariableProximity
                text="Movimiento"
                radius={220}
                minWeight={300}
                maxWeight={700}
              />
            </span>
            <span className="block font-light italic opacity-75 mt-2 md:mt-4" style={{ color: '#C9ADA1' }}>
              Consciente
            </span>
          </h1>

          {/* Divider line */}
          <div className="w-px h-10 md:h-14 my-6 md:my-8" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)' }} />

          {/* Description */}
          <p className="text-base md:text-lg text-stone-400 font-light max-w-md mx-auto mb-10 leading-relaxed">
            Un refugio para calmar la mente y despertar el espíritu a los pies de Monserrate.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href="/clases"
              onClick={(e) => { e.preventDefault(); navigate('clases'); }}
              className="px-9 py-4 font-heading text-lg tracking-wide min-w-[200px] text-center inline-block bg-slate-is text-sand-dune border border-slate-is hover:bg-deep-teal transition-all duration-300"
            >
              Ver Clases
            </a>
            <a
              href="/eventos"
              onClick={(e) => { e.preventDefault(); navigate('eventos'); }}
              className="px-9 py-4 font-heading text-lg tracking-wide italic min-w-[200px] text-center inline-block text-white/70 hover:text-white border-b border-white/25 hover:border-white/60 transition-all duration-300"
            >
              Próximos Eventos &rarr;
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 animate-pulse" style={{ zIndex: 2 }}>
        <span className="text-[10px] tracking-[0.3em] text-white uppercase">Descubre</span>
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;
