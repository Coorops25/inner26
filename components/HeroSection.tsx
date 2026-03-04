
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Galaxy from './Galaxy';

const HeroSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-[#050505]">
      
      {/* Galaxy Background - Subtle & Deep */}
      <Galaxy 
        mouseRepulsion
        mouseInteraction
        density={1.5} 
        glowIntensity={0.4}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.4}
        rotationSpeed={0.03}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.3}
        speed={0.8}
      />

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/80"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        
        <div className="animate-fade-in-up flex flex-col items-center w-full max-w-6xl">
          
          {/* Top Label */}
          <span className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 md:mb-12 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            Candelaria, Colombia
          </span>

          {/* Main Headline - Massive Scale */}
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading text-white leading-[0.85] tracking-tight mix-blend-screen">
            <span className="block opacity-95">Movimiento</span>
            <span className="block font-light italic text-stone-300 opacity-80 mt-2 md:mt-4">Consciente</span>
          </h1>

          {/* Divider */}
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent my-10 md:my-14"></div>

          {/* Description */}
          <p className="text-base md:text-lg text-stone-400 font-light max-w-lg mx-auto mb-16 leading-relaxed">
            Un refugio para calmar la mente y despertar el espíritu a través de la práctica y el silencio.
          </p>

          {/* Actions */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full justify-center">
            
            <button 
              onClick={() => navigate('clases')}
              className="px-8 py-4 border border-white/20 text-white font-heading text-lg tracking-wide hover:bg-white hover:text-stone-900 transition-all duration-500 rounded-sm min-w-[200px] backdrop-blur-sm"
            >
              Ver Clases
            </button>

            <button 
              onClick={() => navigate('eventos')}
              className="px-8 py-4 text-white/80 hover:text-white font-heading text-lg tracking-wide italic border-b border-transparent hover:border-white/50 transition-all duration-500 min-w-[200px]"
            >
              Próximos Eventos &rarr;
            </button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-pulse">
        <span className="text-[9px] tracking-[0.3em] text-white uppercase">Descubre</span>
        <div className="w-px h-8 bg-white"></div>
      </div>
    </section>
  );
};

export default HeroSection;
