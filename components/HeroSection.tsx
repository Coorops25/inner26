
import React, { useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { CartContext } from '../context/CartContext';
import Galaxy from './Galaxy';
import VariableProximity from './VariableProximity';
import R3FButton from './R3FButton';

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
        style={{ zIndex: 2, minHeight: '100svh', paddingTop: '4rem', paddingBottom: '2rem' }}
      >
        <div className="animate-fade-in-up flex flex-col items-center w-full max-w-5xl">

          {/* Badge */}
          <span className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            La Candelaria, Bogotá &mdash; #1 Yoga Studio
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

          {/* CTA — 3D buttons (desktop) / HTML anchors (mobile) */}
          {/* Mobile */}
          <div className="flex sm:hidden flex-col items-center gap-5 w-full">
            <a
              href="/clases"
              onClick={(e) => { e.preventDefault(); navigate('clases'); }}
              className="px-9 py-4 font-heading text-lg tracking-wide rounded-sm min-w-[200px] transition-all duration-400 text-center inline-block"
              style={{ background: '#4D6A6D', color: '#EAE0CC', border: '1px solid #4D6A6D' }}
            >
              Ver Clases
            </a>
            <a
              href="/eventos"
              onClick={(e) => { e.preventDefault(); navigate('eventos'); }}
              className="px-9 py-4 text-white/70 hover:text-white font-heading text-lg tracking-wide italic min-w-[200px] transition-all duration-400 text-center inline-block"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.25)' }}
            >
              Próximos Eventos &rarr;
            </a>
          </div>

          {/* Desktop — R3F 3D buttons inside WebGL Canvas */}
          <div
            className="hidden sm:block"
            style={{ width: '480px', height: '72px', maxWidth: '90vw' }}
          >
            <Canvas
              gl={{ alpha: true, antialias: true }}
              style={{ width: '100%', height: '100%' }}
            >
              {/*
                Orthographic frustum: x from -5 to 5 (10 units wide),
                y from -0.75 to 0.75 (1.5 units tall).
                Canvas 480×72 → aspect 6.67 = 10/1.5 ✓
                Each RoundedBox is 4×1 units, placed at x=±2.6.
              */}
              <OrthographicCamera
                makeDefault
                left={-5} right={5}
                top={0.75} bottom={-0.75}
                near={0.1} far={100}
                position={[0, 0, 5]}
              />
              <group position={[-2.6, 0, 0]}>
                <R3FButton
                  label="Ver Clases"
                  onClick={() => navigate('clases')}
                  backgroundColor="#4D6A6D"
                  textColor="#EAE0CC"
                />
              </group>
              <group position={[2.6, 0, 0]}>
                <R3FButton
                  label="Próximos Eventos"
                  onClick={() => navigate('eventos')}
                  isOutline
                  backgroundColor="#C9ADA1"
                  textColor="#EAE0CC"
                />
              </group>
            </Canvas>
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
