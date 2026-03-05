
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Galaxy from './Galaxy';

const HeroSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

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
        style={{ zIndex: 2, minHeight: '100svh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="animate-fade-in-up flex flex-col items-center w-full max-w-5xl">

          {/* Badge */}
          <span className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            La Candelaria, Bogotá &mdash; #1 Yoga Studio
          </span>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-heading text-white leading-[0.88] tracking-tight">
            <span className="block opacity-95">Movimiento</span>
            <span className="block font-light italic opacity-75 mt-2 md:mt-4" style={{ color: '#C9ADA1' }}>
              Consciente
            </span>
          </h1>

          {/* Divider line */}
          <div className="w-px h-16 md:h-20 my-10 md:my-12" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)' }} />

          {/* Description */}
          <p className="text-base md:text-lg text-stone-400 font-light max-w-md mx-auto mb-14 leading-relaxed">
            Un refugio para calmar la mente y despertar el espíritu a los pies de Monserrate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 w-full justify-center">

            <button
              onClick={() => navigate('clases')}
              className="px-9 py-4 font-heading text-lg tracking-wide rounded-sm min-w-[200px] transition-all duration-400"
              style={{
                background: '#4D6A6D',
                color: '#EAE0CC',
                border: '1px solid #4D6A6D',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#3d5557';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#4D6A6D';
              }}
            >
              Ver Clases
            </button>

            <button
              onClick={() => navigate('eventos')}
              className="px-9 py-4 text-white/70 hover:text-white font-heading text-lg tracking-wide italic min-w-[200px] transition-all duration-400"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.25)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderBottomColor = 'rgba(201,173,161,0.7)';
                (e.currentTarget as HTMLButtonElement).style.color = '#C9ADA1';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderBottomColor = 'rgba(255,255,255,0.25)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              Próximos Eventos &rarr;
            </button>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 animate-pulse" style={{ zIndex: 2 }}>
        <span className="text-[9px] tracking-[0.3em] text-white uppercase">Descubre</span>
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;
