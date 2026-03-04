
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import R3FImagePlane from './R3FImagePlane';

const images = [
  'https://images.unsplash.com/photo-1592398188185-110a1744b199?q=80&w=800&auto=format&fit=crop', // Minimal room
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop', // Light window
  'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=800&auto=format&fit=crop', // Plants/Nature
];

const StudioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [refs] = useState(() => images.map(() => React.createRef<HTMLDivElement>()));

  return (
    <section id="studio" className="py-24 md:py-40 bg-base relative overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Shared Canvas for multiple 3D views */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <Canvas 
            eventSource={containerRef} 
            className="w-full h-full" 
            dpr={[1, 1.5]}
            gl={{ powerPreference: "high-performance", alpha: true }}
          >
            <Suspense fallback={null}>
              {images.map((src, index) => (
                <View key={index} track={refs[index] as React.MutableRefObject<HTMLElement>}>
                  <R3FImagePlane imageUrl={src} />
                </View>
              ))}
            </Suspense>
          </Canvas>
        </div>

        {/* Text Content - Editorial Layout */}
        <div className="flex flex-col items-center text-center mb-20 relative z-20">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-6">El Espacio</span>
            <h2 className="text-4xl md:text-5xl font-heading text-base-text max-w-3xl leading-tight">
              No somos un gimnasio.<br/>
              <span className="text-stone-400">Somos un santuario.</span>
            </h2>
            <div className="w-16 h-px bg-accent/50 my-8"></div>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed font-light">
              Un lugar donde la meditación no es una técnica, sino un descanso. 
              Donde la danza no tiene pasos, solo impulso. 
              Donde el movimiento nace desde adentro.
            </p>
        </div>

        {/* 3D Image Grid Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-0">
          {images.map((_, index) => (
            <div 
              key={index} 
              ref={refs[index]}
              className="w-full aspect-[3/4] bg-stone-100/50 rounded-sm"
            >
              {/* The View component renders here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
